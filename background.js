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

//skins

var earthworm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/earthworm.png";
var piraya = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/piraya.png";
var wimple = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/wimple.png";
var darkicefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkicefish.png";
var alaskancrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/alaskankingcrab.png";
var yabby = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/yabby.png";
var yellowjellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/yellowjellyfish.png";
var plasticbag = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/plasticbag.png";
var redjellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/redjellyfish.png";
var commonfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/commonfrog.png";
var bluesalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/austinbluesalamander.png"
var blackolm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackolm.png";
var orangesquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/orangesquid.png";
var fireflysquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/fireflysquid.png";
var fireflysquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/fireflysquid2.png";
var newt = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/newt.png";
var wildaxolotl = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/wildaxolotl.png";
var blackheadedgull = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackheadedgull.png";
var binocularfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/binocularfish.png";
var hen = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/hen.png";
var goose = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/goose.png";
var honduranbat = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ghostbat.png";
var honduranbat2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ghostbat2.png";
var blackbobbit = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackbobbit.png";
var blackbobbit2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackbobbit2.png";
var hornedtoad = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/hornedfrog.png";
var cameroonslipperyfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/cameroonslipperyfrog.png";
var nutria = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/nutria.png";
var adelie = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/adeliepenguin.png";
var emperor = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/emperorpenguin.png";
var gentoo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/gentoopenguin.png";
var footballfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/footballfish.png";
var rattlesnake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/rattlesnake.png";
var coralsnake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/coralsnake.png";
var redoctopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/redoctopus.png";
var ghostoctopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ghostoctopus.png";
var ribbonsawtail = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ribbonsawtail.png";
var loggerhead = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/loggerhead.png";
var streamerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/streamerfish.png";
var doubletusknarwhal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/doubletusknarwhal.png";
var amazonianmanatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/amazonianmanatee.png";
var graymanatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/graymanatee.png";
var boxjelly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/boxjellyfish.png";
var clearfinlionfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/clearfinlionfish.png";
var southernfrilledshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/southernafricanfrilledshark.png";
var capemantis = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/capemantis.png";
var japanesesalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/japanesegiantsalamander.png";
var scarredshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/scarredshark.png";
var orcad = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/orcatyped.png";
var bluewhale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluewhale.png";
var bioluminescentgsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/biogsquid.png";
var bioluminescentgsquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/biogsquid2.png";
var ferociousgsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ferociousgsquid.png";
var ferociousgsquid2 = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ferociousgsquid2.png";
var albinocach = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/albinocachalot.png";
var bluewhaleshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluewhaleshark.png";
var blackmarlin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackmarlin.png";
var brownsunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/brownsunfish.png";
var stonystonefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/stonystonefish.png";
var scarletdevil = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/scarletdevil.png";
var alligator = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/alligator.png";
var pinkhippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/pinkhippo.png";
var darkhippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkhippo.png";
var goldeneagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/goldeneagle.png";
var africanfishingeagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/africanfisheagle.png";
var sandtigershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sandtigershark.png";
var python = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/reticulatedpython.png";
var pythoncoil = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/reticulatedpython2.png";
var sawshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sawshark.png";
var suwanneesnapper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/suwanneesnapper.png";
var armoredsnapper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/armoredsnapper.png";
var orangetipgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/orangetipgar.png";
var platinumgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/platinumgar.png";
var ferociousgar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ferociousgar.png";
var muskellunge = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/muskellunge.png";

var bigeyethresher = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bigeyethresher.png"
var exoticmoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/exoticmoray.png"
var sleeperray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sleeperray.png"
var coffinray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/coffinray.png"
var southamericansnapper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/southamericansnapper.png"
var lancetfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/lancetfish.png"
var barredmoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/barredmoray.png"
var goldenpolar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/goldenpolarbear.png"
var fraserdolphin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/frasersdolphin.png"
var danaocto = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/danaoctosquid.png"
var yellowmahi = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/yellowmahi.png"
var murrelet = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/murrelet.png"
var japanesewobbegong = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/japanesewobbegong.png"
var peruvianpelican = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/peruvianpelican.png"
var darkhammerhead = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkhammerhead.png"
var bluegoblin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluegoblinshark.png"
var australiansealion = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/australiansealion.png"
var orangeclownfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkclownfish.png"
var wartyfrogfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/wartyfrogfish.png"
var ferocioussleeper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ferocioussleeper.png"
var matamata = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/matamata.png"
var darkleatherback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkleatherback.png"
var graywhale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/graywhale.png"
var ornatewobbegong = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ornatewobbegong.png"
var tassledwobbegong = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/tassledwobbegong.png"
var tern = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/tern.png"
var dragonmoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/dragonmoray.png"
var darksleeper = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darksleeper.png"
var mangrovehorseshoe = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/mangrovehorseshoe.png"
var maroonclownfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/maroonclownfish.png"
var greatwhitepelican = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/greatwhitepelican.png"
var bluespottedray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluespottedray.png"
var pelicaneel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/pelicaneel.png"
var ocellatedfrogfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ocellatedfrogfish.png"
var bluemahi = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluemahimahi.png"
var greenleatherback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/greenleatherback.png"
var mediterraneanmoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/mediterraneanmoray.png"
var commondolphin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/commondolphin.png"
var spinnerdolphin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/spinnerdolphin.png"

var peppermintfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/peppermintfish.png"
var christmascrayfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/christmascrayfish.png"
var sandyclaws = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sandyclaws.png"
var snowsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/snowsquid.png"
var toycrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/toycrab.png"
var puddingjelly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/puddingjellyfish.png"
var reindeerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/reindeerfish.png"
var cocoagull = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/cocoagull.png"
var snowglobebarreleye = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/snowglobebarreleye.png"
var snowhal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/snowhal.png"
var wondershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/wonderlandwhaleshark.png"
var grincheel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/grinchmoray.png"
var carolthresher = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/carolingthresher.png"
var snowray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/snowray.png"
var giftopod = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/giftopod.png"
var giftopodclosed = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/giftopodclosed.png"
var coldbrew = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/coldbrew.png"

var americanlobster = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/americanlobster.png"
var atlanticwalrus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/atlanticwalrus.png"
var beardedseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/beardedseal.png"
var blackwing = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blackwingflyingfish.png"
var bluecrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluecrab.png"
var jaguarcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/jaguarcrab.png"
var blindbrotula = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blindmexicanbrotula.png"
var shortfacelamprey = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/shortfacelamprey.png"
var pouchedlamprey = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/pouchedlamprey.png"
var brownclimbingcavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/browncavefish.png"
var beautyfin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/beautyfinflyingfish.png"
var flatheadcatfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/flatheadcatfish.png"
var ringedseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/ringedseal.png"
var bluelobster = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluelobster.png"
var voltaeel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/voltaelectriceel.png"
var redeel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/redelectriceel.png"
var northernelephantseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/northernelephantseal.png"
var grayelephantseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/grayelephantseal.png"
var sunburntwalrus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sunburntwalrus.png"
var sandbarshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sandbarshark.png"

var southerncavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/southerncavefish.png"
var bumblebeecatfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bumblebeecatfish.png"
var bronzewhaler = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bronzewhaler.png"

var marooncrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/maroonhermitcrab.png"
var blueberrycrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/blueberryhermitcrab.png"
var freshwaterhermit = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/freshwaterhermitcrab.png"

var kissygoblin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/kissygoblinshark.png"
var valentineauk = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/valentineauk.png"

var wahoo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/wahoo.png"
var pickhandle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/pickhandlebarracuda.png"
var weddell = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/weddellseal.png"
var crabeater = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/crabeaterseal.png"
var omuraswhale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/omuraswhale.png"
var seiwhale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/seiwhale.png"
var darkcach = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/darkcachalot.png"
var squidslayercach = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/squidslayercach.png"
var barnaclecach = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/barnaclecach.png"
var sharptailsunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/sharptailsunfish.png"
var whitesunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/whitesunfish.png"
var muggercroc = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/muggercrocodile.png"
var cubancroc = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/cubancrocodile.png"
var spinetail = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/spinetailmobula.png"
var oceanicmanta = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/oceanicmanta.png"
var bluewhalehybrid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/skins/bluewhalehybrid.png"

//animals

var clownfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/clownfish.png";
var blobfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/blobfish.png";
var worm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/worm.png";
var piranha = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/piranha.png";
var icefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/icefish.png";
var cavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/blindcavefish.png";
var crab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/crab.png";
var kingcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/kingcrab.png";
var lamprey = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/lamprey.png";
var crayfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/crayfish.png";
var climbingcavefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/climbingcavefish.png";
var jellyfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/jellyfish.png";
var frog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/frog.png";
var flyingfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/flyingfish.png";
var olm = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/olm.png";
var horseshoecrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/horseshoecrab.png";
var squid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/squid.png";
var giantisopod = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantisopod.png";
var giantisopodclosed = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantisopodclosed.png";
var littleauk = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/littleauk.png";
var catfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/catfish.png";
var axolotl = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/axolotl.png";
var hermitcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/hermitcrab.png";
var seagull = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/seagull.png";
var duck = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/duck.png";
var seal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/seal.png";
var barreleye = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/barreleye.png";
var bat = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/bat.png";
var ray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/ray.png";
var pelican = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/pelican.png";
var pufferfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/pufferfish.png";
var pufferfishfilled = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/pufferfishfilled.png";
var bobbit = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/bobbitworm.png";
var bullfrog = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/bullfrog.png";
var lobster = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/lobster.png";
var archerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/archerfish.png";
var beaver = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/beaver.png";
var penguin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/penguin.png";
var anglerfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/anglerfish.png";
var snake = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/snake.png";
var gulpereel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/gulpereel.png";
var frogfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/frogfish.png";
var seaotter = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/seaotter.png";
var octopus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/octopus.png";
var snappingturtle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/snappingturtle.png";
var sealion = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/sealion.png";
var dragonfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/dragonfish.png";
var mahimahi = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/mahimahi.png";
var barracuda = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/barracuda.png";
var hammerhead = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/hammerhead.png";
var dolphin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/dolphin.png";
var leopardseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/leopardseal.png";
var seaturtle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/seaturtle.png";
var oarfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/oarfish.png";
var narwhal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/narwhal.png";
var manatee = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/manatee.png";
var electriceel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/electriceel.png";
var humboldtsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/humboldtsquid.png";
var lionfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/lionfish.png";
var mantisshrimp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/mantisshrimp.png";
var frilledshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/frilledshark.png";
var giantsalamander = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantsalamander.png";
var wobbegong = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/wobbegong.png";

var shark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/shark.png";
var orca = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/orca.png";
var whale = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/whale.png";
var giantsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantsquid.png";
var cachalot = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/cachalot.png";
var whaleshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/whaleshark.png";
var marlin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/marlin.png";
var polarbear = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/polarbear.png";
var stonefish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/stonefish.png";
var sunfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/sunfish.png";
var crocodile = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/crocodile.png";
var hippo = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/hippo.png";
var eagle = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/eagle.png";
var mantaray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/mantaray.png";
var sleepershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/sleepershark.png";
var goblinshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/goblinshark.png";
var tigershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/tigershark.png";
var elephantseal = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/elephantseal.png";
var anaconda = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/anaconda.png";
var walrus = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/walrus.png";
var sawfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/sawfish.png";
var AST = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/alligatorsnappingturtle.png";
var GST = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantsoftshell.png";
var GSTclosed = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/giantsoftshellclosed.png";
var gar = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/gar.png";
var humpback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/humpback.png";
var coconutcrab = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/coconutcrab.png";
var morayeel = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/morayeel.png";
var colossalsquid = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/colossalsquid.png";
var threshershark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/threshershark.png";
var torpedoray = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/torpedoray.png";
var baskingshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/baskingshark.png";
var leatherback = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/leatherback.png";
var bullshark = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/bullshark.png";

var pollock = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/pollock.png";
var remora = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/remora.png";
var sardine = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/sardine.png";
var babypenguin = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/babypenguin.png";
var lanternfish = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/lanternfish.png";
var LMJ = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/lionsmane.png";
var dragonfly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/dragonfly.png";
var firefly = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/firefly.png";

var shrimp = "https://raw.githubusercontent.com/The-Doctorpus/doc-assets/main/images/characters/shrimp.png";

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
            "https://deeeep.io/assets/skins/custom/77-*"
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
            "https://deeeep.io/assets/skins/custom/63-*"
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
            "https://deeeep.io/assets/skins/custom/79-*"
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
            "https://deeeep.io/assets/skins/custom/71-*"
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
            "https://deeeep.io/assets/skins/custom/16-*"
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
            "https://deeeep.io/assets/skins/custom/46-*"
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
            "https://deeeep.io/assets/skins/custom/35-*"
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
            "https://deeeep.io/assets/skins/custom/24-*"
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
            "https://deeeep.io/assets/skins/custom/7-*"
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
            "https://deeeep.io/assets/skins/custom/25-*"
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
            "https://deeeep.io/assets/skins/custom/74-*"
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
            "https://deeeep.io/assets/skins/custom/30-*"
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
            "https://deeeep.io/assets/skins/custom/33-*"
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
            "https://deeeep.io/assets/skins/custom/51-*"
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
            "https://deeeep.io/assets/skins/custom/54-*"
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
            "https://deeeep.io/assets/skins/custom/78-*"
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
            "https://deeeep.io/assets/skins/muskellunge.png*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: peruvianpelican};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/105-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: lancetfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/122-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: southamericansnapper};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/132-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: barredmoray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/153-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: goldenpolar};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/169-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: fraserdolphin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/171-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: danaocto};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/177-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: yellowmahi};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/380-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: murrelet};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/503-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: japanesewobbegong};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/512-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkhammerhead};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/525-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: australiansealion};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/561-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ferocioussleeper};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/636-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: matamata};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/680-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkleatherback};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/685-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: graywhale};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/735-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bigeyethresher};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/84-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: exoticmoray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/93-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sleeperray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/94-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: coffinray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/95-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ornatewobbegong};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/734-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: tassledwobbegong};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1561-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: tern};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/884-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: dragonmoray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/885-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darksleeper};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1887-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: mangrovehorseshoe};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/891-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: maroonclownfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/892-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: greatwhitepelican};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/889-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluespottedray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/887-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluegoblin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/559-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pelicaneel};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/893-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ocellatedfrogfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/896-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wartyfrogfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/592-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluemahi};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/895-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: greenleatherback};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1566-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: orangeclownfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/570-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: mediterraneanmoray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1679-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: commondolphin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/888-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: spinnerdolphin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/894-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blindbrotula};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/354-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: southerncavefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/212-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluecrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/846-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: jaguarcrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1154-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: shortfacelamprey};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/152-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pouchedlamprey};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/226-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: brownclimbingcavefish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/347-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: beautyfin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/260-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blackwing};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1161-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bumblebeecatfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/231-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blindbrotula};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/354-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: flatheadcatfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/337-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: blueberrycrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1460-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: freshwaterhermit};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1444-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: marooncrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/912-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: beardedseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/368-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: ringedseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/746-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluelobster};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/186-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: americanlobster};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1336-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: voltaeel};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/258-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: redeel};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/596-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: northernelephantseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/136-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: grayelephantseal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1392-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: atlanticwalrus};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/259-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sunburntwalrus};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1450-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sandbarshark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/203-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bronzewhaler};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1068-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wahoo};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/2663-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: pickhandle};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/3886-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: weddell};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/3085-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: crabeater};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/3086-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: seiwhale};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/158-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: omuraswhale};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/745-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: darkcach};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/157-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: squidslayercach};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/639-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: barnaclecach};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/160-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sharptailsunfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/168-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: whitesunfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/572-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: cubancroc};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/626-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: muggercroc};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1140-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: spinetail};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/3305-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: oceanicmanta};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/3421-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: bluewhalehybrid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1481-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

//CHRISTMAS ---------------------------------------------------------------------------------------------------------------------

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: peppermintfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1634-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: christmascrayfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1462-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: sandyclaws};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1348-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: puddingjelly};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1637-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: reindeerfish};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1639-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snowsquid};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1636-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: toycrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1333-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: cocoagull};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1355-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snowglobebarreleye};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1364-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snowhal};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1534-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wondershark};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1707-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: grincheel};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1620-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: carolthresher};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1500-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: snowray};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/1721-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giftopod};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/giftsopod.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: giftopodclosed};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/giftsopodclosed.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: coldbrew};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/santabear.png?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);


//CHRISTMAS ---------------------------------------------------------------------------------------------------------------------

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: kissygoblin};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/648-*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: valentineauk};
    },
    {
        urls: [
            "https://deeeep.io/assets/skins/custom/2126-*"
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
         return {redirectUrl: hermitcrab};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/hermitcrab.png"
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

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: shrimp};
    },
    {
        urls: [
            "https://deeeep.io/assets/characters/shrimp.png"
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