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
var halloweenassets = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassets.png";
var assets1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassets-1.png";
var halloweenassets1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassets-1.png";
var assets2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassets-2.png";
var halloweenassets2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassets-2.png";
var assetsswamp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docswampassets.png";
var halloweenassetsswamp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocswampassets.png";
var assetsfood = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsfoods.png";
var halloweenassetsfood = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsfoods.png";
var bkgr = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/bgimage%20(Docassets).png";
var halloweenbkgr = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/bgimage%20(Halloween).png";
var assetsterrain1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain1.png";
var halloweenassetsterrain1 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain1.png";
var assetsterrain2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain2.png";
var halloweenassetsterrain2 = "";
var assetsterrain3 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain3.png";
var halloweenassetsterrain3 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain3.png";
var assetsterrain4 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain4.png";
var halloweenassetsterrain4 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain4.png";
var assetsterrain5 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain5.png";
var halloweenassetsterrain5 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain5.png";
var assetsterrain6 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain6.png";
var halloweenassetsterrain6 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain6.png";
var assetsterrain7 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docassetsterrain7.png";
var halloweenassetsterrain7 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/halloween/halloweendocassetsterrain7.png";
var pdassets = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/docpdassets.png";
var absorb = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/absorb%20(Docassets).png";
var poisonblast = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/Poison%20Blastv2%20(Docassets).png";
var shock = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/Electricshock%20(Docassets).png";
var slowblast = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/Slow%20Blast%20(Docassets).png";
var sonar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/Sonicblast%20(Docassets).png";
var aura = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/default/animations/Aura%20(Docassets).png";

//skins

var earthworm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Earthworm%20(Docassets).png";
var piraya = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Piraya%20(Docassets).png";
var wimple = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Wimple%20(Docassets).png";
var darkicefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Dark%20Icefish%20(Docassets).png";
var alaskancrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Alaskan%20King%20Crab%20(Docassets).png";
var yabby = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Yabby%20(Docassets).png";
var yellowjellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Yellow%20Jelly%20(Docassets).png";
var plasticbag = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Bag%20(Docassets).png";
var redjellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Red%20Jellyfish%20(Docassets).png";
var commonfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Common%20Frog%20(Docassets).png";
var bluesalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Austin%20Blue%20Salamander%20(Docassets).png"
var blackolm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Black%20Olm%20(Docassets).png";
var orangesquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Orange%20Squid%20(Docassets).png";
var fireflysquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Firefly%20Squid%20(Docassets).png";
var fireflysquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Firefly%20Squid%20Lit%20(Docassets).png";
var newt = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Newt%20(Docassets).png";
var wildaxolotl = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Wild%20Axolotl%20(Docassets).png";
var blackheadedgull = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Black%20headed%20Gull%20(Docassets).png";
var binocularfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Binocular%20Fish%20(Docassets).png";
var hen = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Hen%20(Docassets).png";
var goose = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Goose%20(Docassets).png";
var honduranbat = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ghost%20Bat%20(Docassets).png";
var honduranbat2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ghost%20Bat%20Land%20(Docassets).png";
var blackbobbit = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Black%20Bobbit%20(Docassets).png";
var blackbobbit2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Black%20Bobbit%202%20(Docassets).png";
var hornedtoad = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Horned%20Frog%20(Docassets).png";
var cameroonslipperyfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Cameroon%20Slippery%20Frog%20(Docassets).png";
var nutria = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Nutria%20(Docassets).png";
var adelie = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Adelie%20Penguin%20(Docassets).png";
var emperor = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Emperor%20Penguin%20(Docassets).png";
var gentoo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Gentoo%20Penguin%20(Docassets).png";
var footballfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Football%20Fish%20(Docassets).png";
var rattlesnake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Rattlesnake%20(Docassets).png";
var coralsnake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Coral%20Snake%20(Docassets).png";
var redoctopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Red%20Octopus%20(Docassets).png";
var ghostoctopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ghost%20Octopus%20(Docassets).png";
var ribbonsawtail = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ribbon%20Sawtail%20(Docassets).png";
var loggerhead = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Loggerhead%20(Docassets).png";
var streamerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Streamerfish%20(Docassets).png";
var doubletusknarwhal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Double%20Tusk%20Narwhal%20(Docassets).png";
var amazonianmanatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Amazonian%20Manatee%20(Docassets).png";
var graymanatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Gray%20Manatee%20(Docassets).png";
var boxjelly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Box%20Jellyfish%20(Docassets).png";
var clearfinlionfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Clearfin%20Lionfish%20(Docassets).png";
var southernfrilledshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Southern%20African%20Frilled%20Shark%20(Docassets).png";
var capemantis = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Cape%20Mantis%20(Docassets).png";
var japanesesalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Japanese%20Giant%20Salamander%20(Docassets).png";
var scarredshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Scarred%20Shark%20(Docassets).png";
var orcad = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Orca%20Type%20D%20(Docassets).png";
var bluewhale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Blue%20Whale%20(Docassets).png";
var bioluminescentgsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Bio%20gsquid%20(Docassets).png";
var bioluminescentgsquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Bio%20gsquid2%20(Docassets).png";
var ferociousgsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ferocious%20gsquid%20(Docassets).png";
var ferociousgsquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ferocious%20gsquid2%20(Docassets).png";
var albinocach = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Albino%20Cachalot%20(Docassets).png";
var bluewhaleshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Blue%20Whale%20Shark%20(Docassets).png";
var blackmarlin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Black%20Marlin%20(Docassets).png";
var brownsunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Brown%20Sunfish%20(Docassets).png";
var stonystonefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Stony%20Stonefish%20(Docassets).png";
var scarletdevil = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Scarlet%20Devil%20(Docassets).png";
var alligator = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Alligator%20(Docassets).png";
var pinkhippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Pink%20Hippo%20(Docassets).png";
var darkhippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Dark%20Hippo%20(Docassets).png";
var goldeneagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Golden%20Eagle%20(Docassets).png";
var africanfishingeagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/African%20Fishing%20Eagle%20(Docassets).png";
var sandtigershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Sand%20Tiger%20Shark%20(Docassets).png";
var python = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Reticulated%20Python%20(Docassets).png";
var pythoncoil = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Python%20Coiled%20(Docassets).png";
var sawshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Sawshark%20(Docassets).png";
var suwanneesnapper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Suwanneesnapper%20(Docassets).png";
var armoredsnapper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Armored%20Snapper%20(Docassets).png";
var orangetipgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Orangetip%20Gar%20(Docassets).png";
var platinumgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Platinum%20Gar%20(Docassets).png";
var ferociousgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Ferocious%20Gar%20(Docassets).png";
var muskellunge = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/Muskellunge%20(Docassets).png";

//animals

var clownfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Clownfish%20(Docasset).png";
var blobfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Blobfish%20(Docasset).png";
var worm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Worm%20(Docasset).png";
var piranha = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Piranha%20(Docasset).png";
var icefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Icefish%20(Docasset).png";
var cavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Blind%20cavefish%20(Docasset).png";
var crab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Crab%20(Docasset).png";
var kingcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/King%20Crab%20(Docasset).png";
var lamprey = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Lamprey%20(Docasset).png";
var crayfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Crayfish%20(Docasset).png";
var climbingcavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Climbing%20Cavefish%20(Docassets).png";
var jellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Jellyfish%20(Docassets).png";
var frog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Frog%20(Docassets).png";
var flyingfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Flying%20Fish%20(Docasset).png";
var olm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Olm%20(Docassets).png";
var horseshoecrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Horseshoe%20Crab%20(Docassets).png";
var squid = "https://cdn.discordapp.com/attachments/346088191377408011/704759943265386597/Squid_Docassets.png";
var giantisopod = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Giant%20Isopod%20(Docassets).png";
var giantisopodclosed = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Giant%20Isopod%20Closed%20(Docassets).png";
var littleauk = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Little%20Auk%20(Docassets).png";
var catfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Catfish%20(Docassets).png";
var axolotl = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Axolotl%20(Docassets).png";
var seagull = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Seagull%20(Docassets).png";
var duck = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Duck%20(Docassets).png";
var seal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Seal%20(Docassets).png";
var barreleye = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Barreleye%20(Docassets).png";
var bat = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Bat%20(Docassets).png";
var ray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Ray%20(Docassets).png";
var pelican = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Pelicanicon.png";
var pufferfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Pufferfish%20(Docassets).png";
var pufferfishfilled = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Pufferfishfilled%20(Docasset).png";
var bobbit = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Bobbit%20Worm%20(Docassets).png";
var bullfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Bullfrog%20(Docassets).png";
var lobster = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Lobster%20(Docassets).png";
var archerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Archerfish%20(Docassets).png";
var beaver = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Beaver%20(Docassets).png";
var penguin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Penguin%20(Docassets).png";
var anglerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Anglerfish%20(Docassets).png";
var snake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Snake%20(Docassets).png";
var gulpereel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Gulper%20Eel%20(Docassets).png";
var frogfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Frogfish%20(Docasset).png";
var seaotter = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sea%20Otter%20(Docassets).png";
var octopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Octopus%20(Docassets).png";
var snappingturtle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Snapping%20Turtle%20Icon.png";
var sealion = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sea%20Lion%20(Docassets).png";
var dragonfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Dragonfish%20(Docassets).png";
var mahimahi = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Mahi%20Mahi%20(Docassets).png";
var barracuda = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Barracuda%20(Docassets).png";
var hammerhead = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Hammerhead%20(Docassets).png";
var dolphin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Dolphin%20(Docassets).png";
var leopardseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Leopard%20Seal%20(Docassets).png";
var seaturtle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sea%20turtle%20(Docassets).png";
var oarfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Oarfish%20(Docassets).png";
var narwhal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Narwhal%20(Docassets).png";
var manatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Manatee%20(Docassets).png";
var electriceel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Electric%20Eel%20(Docassets).png";
var humboldtsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Humboldt%20Squid%20(Docassets).png";
var lionfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Lionfish%20(Docassets).png";
var mantisshrimp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Mantis%20Shrimp%20(Docassets).png";
var frilledshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Frilled%20Shark%20(Docassets).png";
var giantsalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Giant%20Salamander%20(Docassets).png";
var wobbegong = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Wobbegong%20(Docassets).png";

var shark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Shark%20(Docassets).png";
var orca = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Orca%20(Docassets).png";
var whale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Whale%20(Docassets).png";
var giantsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Giant%20Squid%20(Docassets).png";
var cachalot = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Cachalot%20(Docassets).png";
var whaleshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Whale%20Shark%20(Docassets).png";
var marlin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Marlin%20(Docassets).png";
var polarbear = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Polar%20Bear%20(Docassets).png";
var stonefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Stonefish%20(Docassets).png";
var sunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sunfish%20(Docassets).png";
var crocodile = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Crocodile%20(Docassets).png";
var hippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Hippo%20(Docassets).png";
var eagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Eagle%20(Docassets).png";
var mantaray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Manta%20Ray%20(Docassets).png";
var sleepershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sleeper%20Shark%20(Docassets).png";
var goblinshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Goblin%20Shark%20(Docassets).png";
var tigershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Tiger%20Shark%20(Docassets).png";
var elephantseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Elephant%20seal%20(Docassets).png";
var anaconda = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Anaconda%20(Docassets).png";
var walrus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Walrus%20(Docassets).png";
var sawfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sawfish%20(Docassets).png";
var AST = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/AST%20(Docassets).png";
var GST = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/GST%20(Docassets).png";
var GSTclosed = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/GSTClosed%20(Docassets).png";
var gar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Gar%20(Docassets).png";
var humpback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Humpback%20(Docassets).png";
var coconutcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Coconut%20Crab%20(Docassets).png";
var morayeel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Moray%20Eel%20(Docassets).png";
var colossalsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Colossal%20Squid%20(Docassets).png";
var threshershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Thresher%20Shark%20(Docassets).png";
var torpedoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Torpedo%20Ray%20(Docassets).png";
var baskingshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Basking%20Shark%20(Docassets).png";
var leatherback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Leatherback%20(Docassets).png";
var bullshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Bull%20Shark%20(Docassets).png";

var pollock = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Pollock%20(Docassets).png";
var remora = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Remora%20(Docassets).png";
var sardine = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Sardine%20(Docassets).png";
var babypenguin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Baby%20Penguin%20(Docassets).png";
var lanternfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Lanternfish%20(Docassets).png";
var LMJ = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/LMJ%20(Docassets).png";
var dragonfly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Dragonfly%20(Docassets).png";
var firefly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/Firefly%20(Docassets).png";

var beach = "https://cdn.discordapp.com/attachments/735586325478113384/762688350946590720/unknown.png";
var beachunderwater = "";
var cold = "";
var darkcold = "";
var ground = "https://cdn.discordapp.com/attachments/735586325478113384/762688114685640735/unknown.png";
var darkground = "https://cdn.discordapp.com/attachments/735586325478113384/762688165181128704/unknown.png";
var reef = "https://cdn.discordapp.com/attachments/735586325478113384/762688249553485874/unknown.png";
var reef2 = "https://cdn.discordapp.com/attachments/735586325478113384/765777429733572608/reef2.png";
var swamp = "";

var clam1 = "https://cdn.discordapp.com/attachments/346088191377408011/766430862182973460/Pearl_Shell_display_Docassets.png";
var clam2 = "https://cdn.discordapp.com/attachments/346088191377408011/766430997503803442/Pearl_Stand_display_Docassets.png";

//script

script = `chrome-extension://${chrome.runtime.id}/bundle.js`;
  
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
//assets

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var assetUrl = options.Halloween ? halloweenassets : assets; 
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
        var assetUrl = options.Halloween ? halloweenassets1 : assets1; 
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
            var assetUrl = options.Halloween ? halloweenassets2 : assets2; 
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
            var assetUrl = options.Halloween ? halloweenassetsswamp : assetsswamp; 
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

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? halloweenbkgr : bkgr; 
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

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            var assetUrl = options.Halloween ? halloweenassetsfood : assetsfood; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain1 : assetsterrain1; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain3 : assetsterrain3; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain4 : assetsterrain4; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain5 : assetsterrain5; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain6 : assetsterrain6; 
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
            var assetUrl = options.Halloween ? halloweenassetsterrain7 : assetsterrain7; 
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

//skins--------------------------------------------------------------------------------------------------------------------------------------------

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: earthworm};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/earthworm.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: piraya};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/piraya.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wimple};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/whimplepiranha.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkicefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/darkicefish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: alaskancrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/alaskankingcrab.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: yabby};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/yabby.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: yellowjellyfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/yellowjellyfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: plasticbag};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/cannonballjellyfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: redjellyfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/redjellyfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: commonfrog};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/reticulatedglassfrog.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluesalamander};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/austinbluesalamander.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackolm};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/blackolm.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: orangesquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/orangesquid.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: fireflysquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/fireflysquid2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: fireflysquid2};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/fireflysquid.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: newt};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/newt.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wildaxolotl};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/wildaxolotl.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackheadedgull};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/blackheadedgull.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: binocularfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/binocularfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: hen};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/hen.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: goose};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/untitledgoose.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: honduranbat};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/honduranghostbat.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: honduranbat2};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/honduranghostbat/2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackbobbit};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/blackbobbitworm.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackbobbit2};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/blackbobbitworm/2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: hornedtoad};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/southamericanhornedfrog.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: cameroonslipperyfrog};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/cameroonslipperyfrog.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: nutria};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/nutria.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: footballfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/footballfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: adelie};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/adeliepenguin.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: emperor};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/emperorpenguin.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: gentoo};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/gentoopenguin.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: rattlesnake};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/duskypygmyrattlesnake.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: coralsnake};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/velvetyswampsnake.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: redoctopus};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/redoctopus.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ghostoctopus};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/ghostoctopus.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ribbonsawtail};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/ribbonsawtailfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: loggerhead};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/loggerheadseaturtle.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: streamerfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/streamerfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: doubletusknarwhal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/doubletusknarwhal.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: amazonianmanatee};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/amazonianmanatee.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: graymanatee};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/greymanatee.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: boxjelly};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/boxjellyfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: clearfinlionfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/clearfinlionfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: southernfrilledshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/southernafricanfrilledshark.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: capemantis};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/capemantisshrimp.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: japanesesalamander};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/japanesegiantsalamander.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: scarredshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/battlescarredshark.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: orcad};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/orcatyped.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluewhale};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/bluewhale.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bioluminescentgsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/bioluminescentgiantsquid.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bioluminescentgsquid2};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/bioluminescentgiantsquid/2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ferociousgsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/ferociousgiantsquid.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ferociousgsquid2};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/ferociousgiantsquid/2.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: albinocach};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/albinocachalot.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluewhaleshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/bluewhaleshark.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackmarlin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/blackmarlin.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: brownsunfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/oceansunfish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: stonystonefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/stonystonefish.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: scarletdevil};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/scarletdevil.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: alligator};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/albinocrocodile.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pinkhippo};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/pinkhippo.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);



chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkhippo};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/darkhippo.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: goldeneagle};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/goldeneagle.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: africanfishingeagle};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/africanfisheagle.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sandtigershark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/sandtigershark.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: python};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/reticulatedpython.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pythoncoil};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/reticulatedpython/coiled.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sawshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/sawshark.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: suwanneesnapper};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/suwanneesnappingturtle.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: armoredsnapper};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/armoredsnapper.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: orangetipgar};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/orangetipgar.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: platinumgar};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/platinumalligatorgar.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ferociousgar};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/ferociousgar.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: muskellunge};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/muskellunge.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

//animals ------------------------------------------------------------------------------------------------------------------------------------

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: clownfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/fish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blobfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/blobfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: piranha};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/piranha.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: worm};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/worm.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: icefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/icefish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: cavefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/blindcavefish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: crab};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/crab.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: kingcrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/kingcrab.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: lamprey};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/lamprey.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: crayfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/crayfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: climbingcavefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/climbingcavefish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: jellyfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/jellyfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: frog};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/frog.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: flyingfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/flyingfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: olm};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/olm.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: horseshoecrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/horseshoecrab.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: squid};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/squid.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giantisopod};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantisopod.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giantisopodclosed};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantisopodclosed.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: littleauk};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/littleauk.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: catfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/catfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: axolotl};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/axolotl.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: seagull};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/seagull.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: duck};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/duck.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: seal};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/seal.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: barreleye};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/barreleye.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bat};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/bat.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ray};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/ray.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pelican};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/pelican.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pufferfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/pufferfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pufferfishfilled};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/pufferfishfilled.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bobbit};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/bobbitworm.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bullfrog};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/goliathbullfrog.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: lobster};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/lobster.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: archerfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/archerfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: beaver};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/beaver.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: penguin};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/penguin.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: anglerfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/anglerfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snake};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/snake.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: gulpereel};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/gulpereel.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: frogfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/frogfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: seaotter};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/seaotter.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: octopus};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/octopus.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snappingturtle};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/snappingturtle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sealion};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/sealion.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: dragonfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/dragonfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: mahimahi};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/mahimahi.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: barracuda};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/barracuda.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: hammerhead};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/tshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: dolphin};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/dolphin.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: leopardseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/leopardseal.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: seaturtle};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/seaturtle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: oarfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/oarfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: narwhal};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/narwhal.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: manatee};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/manatee.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: electriceel};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/electriceel.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: humboldtsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/humboldtsquid.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: lionfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/lionfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: mantisshrimp};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/mantisshrimp.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: frilledshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/frilledshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giantsalamander};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantsalamander.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wobbegong};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/wobbegongshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: shark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/shark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: orca};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/killerwhale.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: whale};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/whale.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giantsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantsquid.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: cachalot};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/cachalot.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: whaleshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/whaleshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: marlin};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/marlin.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: polarbear};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/polarbear.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: stonefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/stonefish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sunfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/sunfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: crocodile};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/crocodile.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: hippo};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/hippo.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: eagle};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/baldeagle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: mantaray};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/mantaray.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sleepershark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/sleepershark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: goblinshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/goblinshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: tigershark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/tigershark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: elephantseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/elephantseal.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: anaconda};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/anaconda.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: walrus};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/walrus.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sawfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/sawfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: AST};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/alligatorsnappingturtle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: GST};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantsoftshellturtle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: GSTclosed};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/giantsoftshellturtleclosed.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: gar};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/alligatorgar.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: humpback};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/humpbackwhale.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: coconutcrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/coconutcrab.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: morayeel};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/morayeel.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: colossalsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/colossalsquid.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: threshershark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/threshershark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: torpedoray};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/atlantictorpedo.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: baskingshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/baskingshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: leatherback};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/leatherbackturtle.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bullshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/bullshark.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

//AI
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pollock};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/pollock.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: remora};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/remora.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: dragonfly};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/dragonfly.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: lanternfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/lanternfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: babypenguin};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/babypenguin.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: LMJ};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/lionmanejellyfish.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sardine};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/sardine.png"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: firefly};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/firefly.png"
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