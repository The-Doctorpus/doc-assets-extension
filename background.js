// This service worker script manages the user's interaction with the extension
// The redirect is handled by an injector found in content-script.js

// This is the default options object.
const options = {
	redirectAssets: true,
};

// When settings are updated, we should put them in the extension storage
const updateOptions = () => {
	chrome.storage.sync.set(options);

	const color = options.redirectAssets ? "#10b981" : "#ef4444";
	const text = options.redirectAssets ? "ON" : "OFF";

	chrome.action.setBadgeBackgroundColor({ color });
	chrome.action.setBadgeText({ text });
	chrome.action.setBadgeTextColor({ color: "#fff" });

	if (options.redirectAssets) {
		chrome.scripting.registerContentScripts([
			{
				id: "redirect-script",
				js: ["docassets.js"],
				matches: [
					"https://deeeep.io/*",
					"https://alpha.deeeep.io/*",
					"https://beta.deeeep.io/*",
					"https://cdn.deeeep.io/*",
					"https://mapmaker.deeeep.io/*",
				],
				runAt: "document_start",
				world: "MAIN",
			},
		]);
	} else {
		try {
			chrome.scripting.unregisterContentScripts({
				ids: ["redirect-script"],
			});
		} catch {}
	}
};

// When the extension loads, we should get data stored in the extension storage
chrome.storage.sync.get(options, (data) => {
	for (const key in data) {
		options[key] = data[key];
	}
	updateOptions();
});

// When the extension icon is clicked, we want to toggle the extension on/off
chrome.action.onClicked.addListener(() => {
	options.redirectAssets = !options.redirectAssets;
	updateOptions();
});
