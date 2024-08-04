/**** UTILITY FUNCTIONS ****/
console.log("Loaded");

// Make a backup of the original fetch function.
// We will modify it later.
const originalFetch = fetch;

// Some assets may be requested multiple times.
// We do not want to have to check if the URL
// is valid every single time as that would
// waste bandwidth and slow down requests.
const redirectCache = {};
const testUrl = (url) => {
	if (redirectCache[url] != null) return redirectCache[url];

	// Synchronous GET request
	const request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send(null);
	if (request.status >= 200 && request.status < 400) {
		redirectCache[url] = true;
		return true;
	}
	redirectCache[url] = false;
	return false;
};

const createNewUrl = (url_) => {
	const url = url_.startsWith("http")
		? url_
		: new URL(url_, location.origin).toString();
	let processedUrl = url;

	for (const rule of EXCLUSION_REGEX) {
		if (url.match(rule)) {
			return url;
		}
	}

	let regexMatched = false;
	for (const rule of REDIRECTS) {
		if (url.match(rule.regex)) {
			regexMatched = true;
			let { filename } = rule.regex.exec(url).groups;
			if (rule.isCdnSkin)
				filename = `${filename.split("-")[0]}.${filename.split(".").pop()}`;
			if (filename) {
				const newUrl = rule.redirectUrl + filename;
				const canRedirect = testUrl(newUrl);
				if (canRedirect) {
					processedUrl = newUrl;
				}
			}
		}
		if (regexMatched) break;
	}
	return processedUrl;
};

// Define redirect rules
// Base URL
// TODO: Change this to the official URL
const BASE_REDIRECT = "https://akanecco23.github.io/doc-assets";

// These URLs will never be redirected so
// we don't need to check them.
const EXCLUSION_REGEX = [
	// Misc. images
	/.+\/img\/(avatar|badges|stats|verified)/,
	// Terrain textures
	/.+\/assets\/packs\/\d+\/textures/,
];
// Rules for redirects
const REDIRECTS = [
	// Animations
	{
		regex:
			/.+\/assets\/animations\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/default/animations/`,
	},
	// Characters
	{
		regex:
			/.+\/assets\/characters\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/characters/`,
	},
	// Spritesheets
	{
		regex:
			/.+\/assets\/spritesheets\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/default/spritesheets/`,
	},
	// Map spritesheets
	{
		regex: /.+\/assets\/packs\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/default/mapmaker-asset-packs/`,
	},
	// Images (e.g. logo, menu background, loading screen background, etc.)
	{
		regex: /.+\/img\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/img/`,
	},
	// Pets
	{
		regex: /.+\/custom\/pets\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/custom/pets/`,
	},
	// Skins (old)
	{
		regex: /.+\/assets\/skins\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/skans/`,
	},
	// Skins (new, these are on the CDN)
	{
		regex:
			/cdn\.deeeep\.io\/custom\/skins\/(?<filename>[^?.]+\.(?:(?!json).)+)(?:\?.*)?$/,
		redirectUrl: `${BASE_REDIRECT}/images/skans/custom/`,
		isCdnSkin: true,
	},
];

/**** REDIRECTOR ****/

// We need to modify a few function calls
// Checking every single function call is
// not the best idea and could be improved
// in the future.
const originalFunctionCall = Function.prototype.call;
Function.prototype.call = function (...args) {
	// The asset loader in PIXI.js will use
	// a service worker to load assets by default.
	//
	// We need to override this behavior on-the-fly
	// because service workers run in a separate
	// scope, and as a result, its fetch() cannot be
	// modified to redirect requests.
	if (args[0] && args[0].name === "loadTextures" && args[0].config) {
		args[0].config.preferWorkers = false;
	}

	// Redirect the "src" of every image before
	// Vue.js renders them on the DOM
	if (args[3]?.src) {
		args[3].src = createNewUrl(args[3].src);
	}

	// Pass the modified arguments to the original function call
	return originalFunctionCall.apply(this, args);
};

// Modify the fetch function.
fetch = (...args) => {
	args[0] = createNewUrl(args[0]);
	return originalFetch.apply(this, args);
};
