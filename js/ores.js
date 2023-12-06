function Geode(itemName, xpGained)
{
    this.itemName = itemName;
	this.xpGained = xpGained;
}
var geodesArrayGlobal = [];

function initGeodesArray()
{
	var geodeName = "";
	var xpGained = 0;
	var indexId = 0;
	
	geodeName = "limeQuartzMineral";
	xpGained = 5000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "fluoriteMineral";
	xpGained = 20000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "topazMineral";
	xpGained = 50000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "blueMarbleMineral";
	xpGained = 15000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "sulferMineral";
	xpGained = 50000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "purpleQuartzMineral";
	xpGained = 150000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "limoniteMineral";
	xpGained = 30000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "crystalPrismeMineral";
	xpGained = 150000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "clearMarbleMineral";
	xpGained = 300000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "denseMarbleMineral";
	xpGained = 60000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "jadeMineral";
	xpGained = 300000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "opalMineral";
	xpGained = 600000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "amethystMineral";
	xpGained = 120000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "tashmarineMineral";
	xpGained = 600000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "tanzaniteMineral";
	xpGained = 1200000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "seaCrystalMineral";
	xpGained = 200000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "amberMineral";
	xpGained = 1000000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
	geodeName = "smoothPearlMineral";
	xpGained = 2400000;
	geodesArrayGlobal[geodeName] = new Geode(geodeName, xpGained);
	geodesArrayGlobal[indexId] = geodesArrayGlobal[geodeName]; indexId++;
	
}

function examineGeode(mineralChosen)
{
	sendBytes("EXAMINE_MINERAL=" + mineralChosen);
}

function getMayorRng(randomValue)
{
	if(isMayor == 0) return randomValue;
	
	if(mayorRating == "bad") return parseInt(randomValue * 1.2);
	else if(mayorRating == "medium") return randomValue;
	else if(mayorRating == "good") return parseInt(randomValue * 0.85);
	else if(mayorRating == "great") return parseInt(randomValue * 0.75);
	else if(mayorRating == "perfect") return parseInt(randomValue * 0.68);
	else return randomValue;
}
function openWhatCanMineDialogue(machinery)
{
	var htmlOuput = "";
	
	switch(machinery)
	{
		case "miners":
		htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
		htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
		htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
		break;
		
		case "gemFinder":
		if(sapphirePending == 1 || emeraldPending == 1 || rubyPending == 1 || diamondPending == 1 || bloodDiamondPending == 1 || bloodCrystalsPending == 1)
		{
			navigate("gemPending");
			return;
		}
		else
		{
			var foundSapphireLabel = ""; if(sapphireTotal > 0) foundSapphireLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +sapphireTotal+ "</div>";
			var foundEmeraldLabel = ""; if(emeraldTotal > 0) foundEmeraldLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +emeraldTotal+ "</div>";
			var foundRubyLabel = ""; if(rubyTotal > 0) foundRubyLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +rubyTotal+ "</div>";
			var foundDiamondLabel = ""; if(diamondTotal > 0) foundDiamondLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +diamondTotal + "</div>";
			var foundBloodDiamondLabel = ""; if(bloodDiamondTotal > 0) foundBloodDiamondLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +bloodDiamondTotal+ "</div>";
			var foundBloodCrystalsLabel = ""; if(bloodCrystalsMinedTotal > 0) foundBloodCrystalsLabel = "<br /><div style='color:orange;font-size:10pt;margin-top:10px;'><b>Found:</b> " +bloodCrystalsMinedTotal+ "</div>";
			
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/sapphire.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(100000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundSapphireLabel+"</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/emerald.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(300000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundEmeraldLabel+"</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/ruby.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(500000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundRubyLabel+"</td></tr></table></div>";
			
			if(miningResearchLevel >= 3)
			{
				if(toggleBloodCrystalsOff == 0)
					htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/bloodCrystals.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(500000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundBloodCrystalsLabel+"</td></tr></table></div>";
				else
					htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/bloodCrystals.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(500000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundBloodCrystalsLabel+"<hr /><span style='color:orange'>CURRENTLY OFF</span></td></tr></table></div>";
			}
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/diamond.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(1000000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundDiamondLabel+"</td></tr></table></div>";
			
			if(bloodDiamondTotal == 0)
				htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/bloodDiamond.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/???<br /><span style='color:grey;font-size:8pt;'>per second</span></td></tr></table></div>";
			else
				htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/bloodDiamond.png' class='img-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>1/"+formatNumber(getMayorRng(25000000))+"<br /><span style='color:grey;font-size:8pt;'>per second</span>"+foundBloodDiamondLabel+"</td></tr></table></div>";
		}
		break;
		
		case "drills":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>RARE</td></tr></table></div>";
			sendBytes("EXAMINE_DRILLS_MINE")
		break;
		
		case "crushers":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
		break;
		
		case "giantDrills":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/promethium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>RARE</td></tr></table></div>";
		break;
		
		case "roadHeaders":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/promethium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/titanium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>RARE</td></tr></table></div>";
		break;
		
		case "excavators":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/promethium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON - UNCOMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/titanium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>RARE</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/ancientOre.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>VERY RARE</td></tr></table></div>";
		break;
		
		case "giantExcavators":
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/stone.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/copper.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>ALWAYS</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/iron.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/silver.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/gold.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/promethium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>COMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/titanium.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>UNCOMMON</td></tr></table></div>";
			htmlOuput += "<div class='main-button-lighter'><table><tr><td><img src='images/ancientOre.png' class='img-small-medium' /></td><td style='font-size:16pt;text-align:right;padding-right:20px;'>RARE</td></tr></table></div>";
		break;
	}
	
	confirmDialogue("90%",htmlOuput,"Close","","");
}

var selectedMachineryDialogueGlobal = "none";
function openMachineryDialogue(machinery)
{
	document.getElementById("dialogue-machinery-img").src= "images/" + machinery + ".png";
	selectedMachineryDialogueGlobal = machinery;
	document.getElementById("current-machinery-on").innerHTML = window[machinery + "On"];
	openDialogue("dialogue-machinery","90%");
}

function increaseMachineryOn()
{
	var currentMachineryOn = parseInt(document.getElementById("current-machinery-on").innerHTML);
	currentMachineryOn++;
	
	if(window[selectedMachineryDialogueGlobal] < currentMachineryOn)
		currentMachineryOn = window[selectedMachineryDialogueGlobal];
	
	document.getElementById("current-machinery-on").innerHTML = currentMachineryOn;
}

function hideOilWells()
{
	refreshChangedItemSwitch("bronzeOilWell");
	refreshChangedItemSwitch("ironOilWell");
	refreshChangedItemSwitch("silverOilWell");
	refreshChangedItemSwitch("goldOilWell");
	refreshChangedItemSwitch("promethiumOilWell");
	refreshChangedItemSwitch("titaniumOilWell");
	refreshChangedItemSwitch("ancientOilWell");
	refreshChangedItemSwitch("ironOilFactory");
	refreshChangedItemSwitch("silverOilFactory");
	refreshChangedItemSwitch("goldOilFactory");
	refreshChangedItemSwitch("promethiumOilFactory");
	refreshChangedItemSwitch("titaniumOilFactory");
	refreshChangedItemSwitch("lavaPlantOn");
	refreshChangedItemSwitch("ancientLavaPlant");
}

function decreaseMachineryOn()
{
	var currentMachineryOn = parseInt(document.getElementById("current-machinery-on").innerHTML);
	currentMachineryOn--;
	
	if(currentMachineryOn < 0)
		currentMachineryOn = 0;
	
	document.getElementById("current-machinery-on").innerHTML = currentMachineryOn;
}

function changeMachineryOn()
{
	var currentMachineryOn = parseInt(document.getElementById("current-machinery-on").innerHTML);
	sendBytes("TURN_ON="+ selectedMachineryDialogueGlobal + "~" + currentMachineryOn);
}

function changeTrainsToSend(val)
{
	var currentVal = parseInt(document.getElementById("dialogue-trains-textbox").value);
	var newVal = currentVal + val;
	
	if(newVal < 0) newVal = 0;
	if (newVal > train) newVal = train;
	
	if(newVal > 1)
		document.getElementById("send-trains-button").value = "Send Trains";
	else
		document.getElementById("send-trains-button").value = "Send Train";
	
	document.getElementById("dialogue-trains-textbox").value = newVal;
	var oilNeeded = 500000 * newVal;
	
	document.getElementById("dialogue-trains-oilNeedeArea").innerHTML = createHTMLBoxWithChecks("oil",oilNeeded, formatNumber(oilNeeded))
}

function sendTrains()
{
	var currentVal = parseInt(document.getElementById("dialogue-trains-textbox").value);
	sendBytes("MANAGE_TRAIN=" + currentVal);
}

function refreshMiningTab()
{
	if(craftingResearchLevel >= 6)
	for(var i = 0; i < geodesArrayGlobal.length; i++)
	{
		var geode = geodesArrayGlobal[i];
		
		var id = geode.itemName+ "-timer";
		document.getElementById(id).style.display = "";
	}
}
function openDialogueGeode(geodeChosen)
{
	if(geodeQuest == -1)
	{
		var priceToOpen = 100000;
		if(geodeChosen == "geode2")
			priceToOpen = 2000000;
		else if(geodeChosen == "geode3")
			priceToOpen = 25000000;
		else if(geodeChosen == "geode4")
			priceToOpen = 200000000;
		else if(geodeChosen == "geode5")
			priceToOpen = 1000000000;
		else if(geodeChosen == "geode6")
			priceToOpen = 50000000000;

		if(coins < priceToOpen)
			confirmDialogue("90%","<center><img src='images/geodeMiner.png' class='img-large'><img src='images/"+geodeChosen+".png' class='img-medium'><hr />\"I can open this for <img src='images/coins.png' class='img-tiny' /> "+formatNumber(priceToOpen)+".<br /><br />You can't seem to afford this.\"</center>","Close","","")
		else
		{
			if(window[geodeChosen] >= 2)
			{
				initAmountWidget("amount-widget-geodes",geodeChosen,1,["coins",geodeChosen],[priceToOpen,1],"images/minerals.png","images/"+geodeChosen+".png","OPEN_MULTIPLE_GEODE","NO_CAP");
				amountWidgetAmountInputElementGlobal.value = 1;
				amountWidgetOnKeyUp();
				openDialogue("dialogue-openAllGeodes","90%");
			}
			else
				confirmDialogue("90%","<center><img src='images/geodeMiner.png' class='img-large'><img src='images/"+geodeChosen+".png' class='img-medium'><hr />\"I can open this for <img src='images/coins.png' class='img-tiny' /> "+formatNumber(priceToOpen)+".<br /><br />Would you like me to open it?\"</center>","Open Geode","Cancel","OPEN_GEODE=" + geodeChosen)
		}
	}
	else
		confirmDialogue("90%","Hmm, I'm not to sure what to do with this.","Close","","");
}

function equipMineralNecklace(npcChosen)
{
	if(mineralNecklaceTimer == 0)
	{
		closeSmittysDialogue("dialogue-mineralNecklace")
		confirmDialogue("90%","You must first charge your necklace using minerals found in geodes.","Close","","")
	}
	else
	sendBytes("EQUIP_MINERAL_NECKLACE=" + npcChosen);
}



function clicksOilFactory()
{
	initAmountWidget("amount-widget-oilFactory","oilFactoryWorkers",1,["coins"],[1000000],"images/bronzeOilFactory.png","images/oil.png","OIL_FACTORY_HIRE","NO_CAP");
	amountWidgetSetMaxValue(oilFactoryWorkersMax - oilFactoryWorkers)
	openDialogue("dialogue-oilFactory","90%");
}

function refreshMiningOresKeyItemsTab()
{
	
	refreshChangedItemSwitch("miners");
	refreshChangedItemSwitch("drillsOn");
	refreshChangedItemSwitch("crushersOn");
	refreshChangedItemSwitch("giantDrillsOn");
	refreshChangedItemSwitch("roadHeadersOn");
	refreshChangedItemSwitch("giantExcavatorsOn");
	refreshChangedItemSwitch("excavatorsOn");
}
