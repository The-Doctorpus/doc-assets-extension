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

const CHAR_REDIRECT_TEMPLATE = 'https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/'; 
const CHAR_SCHEME = '*://*.deeeep.io/assets/characters/*'; 
const CHAR_REGEX = /.+\/characters\/(?<filename>.+?)(?:\?.*)?$/

chrome.webRequest.onBeforeRequest.addListener(
    function characterHandler(details) {
        const m = CHAR_REGEX.exec(details.url); 

        console.log(details.url); 

        let redirectUrl; 

        if (m) {
            const filename = m.groups.filename; 

            console.log(filename); 

            redirectUrl = CHAR_REDIRECT_TEMPLATE + filename; 
        } else {
            redirectUrl = details.url; 
        } 

        return  {
            redirectUrl: redirectUrl, 
        }; 
    },
    {
        urls: [
            CHAR_SCHEME
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);