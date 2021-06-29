var options = {};

function setDefaults() {
    chrome.storage.sync.set({
      Halloween: true, 
    }, syncSettings); 
  } 

chrome.runtime.onInstalled.addListener(function (info) {
    if (info.reason == "install") {
        setDefaults(); 
    }
}); 

function syncSettings() {
    chrome.storage.sync.get('Halloween', function (obj) {
      Object.assign(options, obj); 
      console.log(options);
    });
    console.log("sync settings running");
}

syncSettings(); 

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "sync-settings") {
      syncSettings(); 
    } 
}); 

//assets

var assets = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassets.png";
var seasonalassets = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassets.png";
var assets1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassets-1.png";
var seasonalassets1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassets-1.png";
var assets2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassets-2.png";
var seasonalassets2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassets-2.png";
var assetsswamp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docswampassets.png";
var seasonalassetsswamp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docswampassets.png";
var assetsfood = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsfoods.png";
var seasonalassetsfood = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsfoods.png";
var bkgr = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/bgimage%20(Docassets).png";
var seasonalbkgr = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/bgimage%20(Docassets).png";
var assetsterrain1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain1.png";
var seasonalassetsterrain1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain1.png";
var assetsterrain2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain2.png";
var seasonalassetsterrain2 = "";
var assetsterrain3 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain3.png";
var seasonalassetsterrain3 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain3.png";
var assetsterrain4 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain4.png";
var seasonalassetsterrain4 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain4.png";
var assetsterrain5 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain5.png";
var seasonalassetsterrain5 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain5.png";
var assetsterrain6 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain6.png";
var assetsterrain6 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain6.png";
var assetsterrain7 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain7.png";
var assetsterrain7 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/current_season/docassetsterrain7.png";
var pdassets = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docpdassets.png";
var absorb = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/absorb.png";
var poisonblast = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/poisonblast.png";
var shock = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/shock.png";
var slowblast = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/slowblast.png";
var sonar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/sonicblast.png";
var aura = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/aura.png";

var beach = "https://cdn.discordapp.com/attachments/735586325478113384/762688350946590720/unknown.png";
var beachunderwater = "";
var cold = "";
var darkcold = "";
var ground = "https://cdn.discordapp.com/attachments/735586325478113384/762688114685640735/unknown.png";
var darkground = "https://cdn.discordapp.com/attachments/735586325478113384/762688165181128704/unknown.png";
var reef = "https://cdn.discordapp.com/attachments/735586325478113384/762688249553485874/unknown.png";
var reef2 = "https://cdn.discordapp.com/attachments/735586325478113384/765777429733572608/reef2.png";
var swamp = "";

var clam1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/Pearl%20Shell%20display%20(Docassets).png";
var clam2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/Pearl%20Stand%20display%20(Docassets).png";

//script

script = 'https://the-doctorpus.github.io/doc-assets/scripts/bundle.js';
  
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: script};
    },
    {
        urls: [
            "https://deeeep.io/bundle.js?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

/*
//assets

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var assetUrl = options.Halloween ? seasonalassets : assets; 
        return {redirectUrl: assetUrl};
    },
    {
        urls: [
            "https://deeeep.io/assets/spritesheets/assets.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
    
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var assetUrl = options.Halloween ? seasonalassets1 : assets1; 
        return {redirectUrl: assetUrl};
    },
    {
        urls: [
            "https://deeeep.io/assets/spritesheets/assets-1.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
    
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassets2 : assets2; 
            return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/assets/spritesheets/assets-2.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsswamp : assetsswamp; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/assets/spritesheets/swamp.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    */

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalbkgr : bkgr; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/assets/bgimage.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    /*

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsfood : assetsfood; 
            return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/1/spritesheets/1.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsterrain1 : assetsterrain1; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/1/spritesheets/2.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsterrain3 : assetsterrain3; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/3/spritesheets/1.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsterrain4 : assetsterrain4; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/2/spritesheets/1.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );
    
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? seasonalassetsterrain5 : assetsterrain5; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/10/spritesheets/3.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? assetsterrain6 : assetsterrain6; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/10/spritesheets/1.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? assetsterrain7 : assetsterrain7; 
             return {redirectUrl: assetUrl};
        },
        {
            urls: [
                "https://deeeep.io/mapmaker/assets/packs/10/spritesheets/2.png?*"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: assetsterrain2};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/3/spritesheets/2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

*/

/*

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pdassets};
    },
    {
        urls: [
            "https://deeeep.io/assets/spritesheets/pearl.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

*/

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: absorb};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/absorb.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: poisonblast};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/poisonblast.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: shock};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/electricshock.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: slowblast};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/slowblast.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: aura};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/aura.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sonar};
    },
    {
        urls: [
            "https://deeeep.io/assets/animations/sonicblast.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

function genericHandler(redirectTemplate, regex, name) {
    function handler(details) {
        const m = regex.exec(details.url); // checks if might be valid X

        console.log(`original ${name} URL is ${details.url}`); 

        let redirectUrl = details.url; 

        if (m) {
            const filename = m.groups.filename; 

            console.log(filename); 

            let newRedirectUrl = redirectTemplate + filename; // redirect it

            let checkRequest = new XMLHttpRequest(); // creates HTTP request

            checkRequest.open('GET', newRedirectUrl, false); // sets up request
            checkRequest.send(); // sends the request

            if (checkRequest.status >= 200 && checkRequest.status < 300) { // redirect exists
                redirectUrl = newRedirectUrl; 

                console.log(`Redirecting to ${newRedirectUrl}`); 
            } else {
                console.log(`${newRedirectUrl} does not exist. Using default.`); 
            }
        } 

        return  {
            redirectUrl: redirectUrl, 
        }; 
    } 

    return handler; 
}

const CHAR_REDIRECT_TEMPLATE = 'https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/'; // redirect URLs are all from this
const CHAR_SCHEME = '*://*.deeeep.io/*assets/characters/*'; // these urls will be redirected like characters
const CHAR_REGEX = /.+\/characters\/(?<filename>.+?)(?:\?.*)?$/ // might it be a valid character? 

const charHandler = genericHandler(CHAR_REDIRECT_TEMPLATE, CHAR_REGEX, 'character'); 

chrome.webRequest.onBeforeRequest.addListener(
    charHandler, 
    {
        urls: [
            CHAR_SCHEME
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
); 

const SPRITESHEET_REDIRECT_TEMPLATE = 'https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/spritesheets/'; // redirect URLs are all from this
const SPRITESHEET_SCHEME = '*://*.deeeep.io/assets/spritesheets/*'; // these urls will be redirected like spritesheets
const SPRITESHEET_REGEX = /.+\/spritesheets\/(?<filename>.+?)(?:\?.*)?$/ // might it be a valid spritesheet? 

const spritesheetHandler = genericHandler(SPRITESHEET_REDIRECT_TEMPLATE, SPRITESHEET_REGEX, 'spritesheet'); 

chrome.webRequest.onBeforeRequest.addListener(
    spritesheetHandler, 
    {
        urls: [
            SPRITESHEET_SCHEME
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
); 

const MAP_SPRITESHEET_REDIRECT_TEMPLATE = 'https://github.com/The-Doctorpus/doc-assets/tree/main/images/default/mapmaker-asset-packs/'; // redirect URLs are all from this
const MAP_SPRITESHEET_SCHEME = '*://*.deeeep.io/mapmaker/assets/packs/*'; // these urls will be redirected like map spritesheets
const MAP_SPRITESHEET_REGEX = /.+\/packs\/(?<filename>.+?)(?:\?.*)?$/ // might it be a valid map spritesheet? 

const mapSpritesheetHandler = genericHandler(MAP_SPRITESHEET_REDIRECT_TEMPLATE, MAP_SPRITESHEET_REGEX, 'map spritesheet'); 

chrome.webRequest.onBeforeRequest.addListener(
    mapSpritesheetHandler, 
    {
        urls: [
            MAP_SPRITESHEET_SCHEME
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
); 

const SKIN_REDIRECT_TEMPLATE = 'https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skans/'; // redirect URLs are all from this
const SKIN_SCHEME = '*://*.deeeep.io/assets/skins/*'; // these urls will be redirected like skins
const SKIN_REGEX = /.+\/skins\/(?<filename>.+?)(?:\?.*)?$/ // might it be a valid skin? 
const CUSTOM_REGEX = /(?<pre_version>custom\/(?<skin_id>[0-9]+))(?<version>-[0-9]+)(?<post_version>(?<extra_asset_name>-[A-Za-z0-9-_]+)?\.(?<suffix>[a-zA-Z0-9]+))/
// skins submitted through Creators Center have a special scheme and must be stripped of their version number

chrome.webRequest.onBeforeRequest.addListener(
    function skinHandler(details) {
        const m = SKIN_REGEX.exec(details.url); // checks if might be valid skin

        console.log(`original skin URL is ${details.url}`); 

        let redirectUrl = details.url; 

        if (m) {
            let filename = m.groups.filename; 

            const m2 = CUSTOM_REGEX.exec(filename); // checks if might be Creators Center skin

            if (m2) {
                filename = m2.groups.pre_version + m2.groups.post_version; // ignoring the version number
            } 
            
            console.log(filename); 

            newRedirectUrl = SKIN_REDIRECT_TEMPLATE + filename; // builds redirect URL

            let checkRequest = new XMLHttpRequest(); // creates HTTP request

            checkRequest.open('GET', newRedirectUrl, false); // sets up request
            checkRequest.send(); // sends the request

            if (checkRequest.status >= 200 && checkRequest.status < 300) { // redirect exists
                redirectUrl = newRedirectUrl; 

                console.log(`Redirecting to ${newRedirectUrl}`); 
            } else {
                console.log(`${newRedirectUrl} does not exist. Using default.`); 
            }
        } 

        return  {
            redirectUrl: redirectUrl, 
        }; 
    },
    {
        urls: [
            SKIN_SCHEME
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
); 

//terrains

/*
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: beach};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/1/textures/beach.png?v=31"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: reef};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/1/textures/reef.png?v=31"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: reef2};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/1/textures/reef2.png?v=31"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ground};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/1/textures/terrain.png?v=31"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkground};
    },
    {
        urls: [
            "https://deeeep.io/mapmaker/assets/packs/1/textures/terrain_back.png?v=31"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

*/

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: clam1};
    },
    {
        urls: [
            "https://deeeep.io/assets/pearl_cover.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: clam2};
    },
    {
        urls: [
            "https://deeeep.io/assets/pearl_stand_only.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);