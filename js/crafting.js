function clicksFurnace()
{
	if(oil == 0)
	{
		if(tutorialTipsOff == 1 || tutorialTipsOil == 1)
		{
			confirmDialogue('90%',"<center><img src='images/bronzeOilWell.png' class='img-large' /></center> <hr /> You need <b>oil</b> to use a furnace.<br /><br /><img src='images/arrowRight.gif' class='img-small' /> <span style='color:green'>Craft an <b>oil well</b> to start collecting oil.</span>","Close",'','')
		}
		showTutorialPopup("tutorialTipsOil");
		return;
	}
	
	if(smeltingCurrentTimer > 0 || smeltingCurrentOreAt > 0 || smeltingCurrentOreTo > 0)
	{
		confirmDialogue("90%","Your furnace is currently running.  Stopping the furnace will cause your smelting resources go to waste.","Stop Furnace","Nevermind","RESET_FURNACE")
	}
	else
	{
		if(drills > 0)
		{
			document.getElementById("furnace-dialogue-silver").style.display = "";
			document.getElementById("furnace-dialogue-gold").style.display = "";
		}
		
		if(learnPromethiumSmeltingScroll == 1)
		{
			document.getElementById("furnace-dialogue-promethium").style.display = "";
		}
		if(learnTitaniumSmeltingScroll == 1)
		{
			document.getElementById("furnace-dialogue-titanium").style.display = "";
		}
		if(learnAncientSmeltingScroll == 1)
		{
			document.getElementById("furnace-dialogue-ancient").style.display = "";
		}
		openDialogue("dialogue-furnace1","90%");
	}
}

function clicksCharcoalFoundry()
{
	
	if(charcoalFoundryCurrentTimer > 0 || charcoalFoundryCurrentOreAt > 0 || charcoalFoundryCurrentOreTo > 0)
	{
		confirmDialogue("90%","Your charcoal foundry is currently running.  Your logs and lava will be lost if you stop the foundry!","Stop Foundry","Nevermind","RESET_FOUNDRY")
	}
	else
	{
			var tableElements = document.getElementById("dialogue-charcoalFoundry1").getElementsByTagName("div");
		
			//start i at one to always show logs button
			for(var i = 0; i < tableElements.length; i++)
			{
				var logTypeFound = tableElements[i].id.split("-")[2];
				if(window[logTypeFound] > 0)
					tableElements[i].style.display = "";
				else
				{
					if(logTypeFound != "logs")
						tableElements[i].style.display = "none";
					else
						tableElements[i].style.display = "";
				}
					
				
				document.getElementById("dialogue-charcoalFoundry1-"+logTypeFound+"-perc").innerHTML = parseInt(getCharcoalRatePerLog(logTypeFound) * 100);
				document.getElementById("dialogue-charcoalFoundry1-"+logTypeFound+"-lava").innerHTML = getLavaNeededPerLog(logTypeFound);
				document.getElementById("dialogue-charcoalFoundry1-"+logTypeFound+"-xp").innerHTML = getXpForBurningLog(logTypeFound);
			}
		

	
		openDialogue("dialogue-charcoalFoundry1","90%");
	}
}

	function getLavaNeededPerLog(log) 
	{
		switch(log)
		{
			case "logs":
				return 1;
			case "oakLogs":
				return 2;
			case "willowLogs":
				return 3;
			case "mapleLogs":
				return 4;
			case "redwoodLogs":
				return 5;
			case "pineLogs":
				return 6;
			case "hauntedLogs":
				return 7;
			case "jungleLogs":
				return 8;
			case "lavaLogs":
				return 9;
			case "goldLogs":
				return 10;
			case "magicLogs":
				return 11;
			default:
				return 0;
		}
	}
	
	function getXpForBurningLog(log) 
	{
		switch(log)
		{
		case "logs":
			return 250;
		case "oakLogs":
			return 500;
		case "willowLogs":
			return 750;
		case "mapleLogs":
			return 1000;
		case "redwoodLogs":
			return 1250;
		case "pineLogs":
			return 1500;
		case "hauntedLogs":
			return 1750;
		case "jungleLogs":
			return 2000;
		case "lavaLogs":
			return 4000;
		case "goldLogs":
			return 8000;
		case "magicLogs":
			return 20000;
		default:
			return 0;
		}
	}


	
	function getCharcoalRatePerLog(log)
	{
		var rate = 0.00;
		
		switch(log)
		{
			case "logs":
				rate = 0.05;
			break;
			case "oakLogs":
				rate = 0.10;
			break;
			case "willowLogs":
				rate = 0.15;
			break;
			case "mapleLogs":
				rate = 0.20;
			break;
			case "redwoodLogs":
				rate = 0.25;
			break;
			case "pineLogs":
				rate = 0.30;
			break;
			case "hauntedLogs":
				rate = 0.35;
			break;
			case "jungleLogs":
				rate = 0.40;
			break;
			case "lavaLogs":
				rate = 0.45;
			break;
			case "goldLogs":
				rate = 0.50;
			break;
			case "magicLogs":
				rate = 0.55;
			break;
			default:
				rate = 0;
			break;
		}
		
		
		if(craftingResearchLevel >= 7)
			rate += 0.1;
		
		if(titaniumCharcoalFoundry > 0)
			rate += 0.15;
		
		return rate;
	}
	
function amountWidgetCharcoalFactory(itemName)
{
			
	var lavaNeeded = getLavaNeededPerLog(itemName);
	var xp = getXpForBurningLog(itemName);
	initAmountWidget("amount-widget-charcoalFoundry",itemName,xp,[itemName,"lava"],[1,lavaNeeded],"images/charcoal.png","images/craftingSkill.png","CHARCOAL_FOUNDRY",charcoalFoundryCapacity);
	openDialogue("dialogue-charcoalFoundry2","90%");
}


function chooseOreForFurnace(oreChosen)
{
	if(window[oreChosen] == 0)
	{
		confirmDialogue("90%","<center><img src='images/"+oreChosen+".png' class='img-medium' /><br /><br />You do not have this type of ore.</center>","Close","","");
		return;
	}

	openFurnaceWidget(oreChosen, getBarNameFromOre(oreChosen))
}

function getOilCost(oreOrMachine)
{
	switch(oreOrMachine)
	{
		case "copper":
		case "drills":
			return 1;
		case "crushers":
			return 5;
		case "giantDrills":
			return 20;
		case "roadHeaders":
			return 75;
		case "excavators":
			return 250;
		case "giantExcavators":
			return 1000;
		case "iron":
			return 10;
		case "silver":
			return 25;
		case "gold":
			return 100;
		case "promethium":
			return 10000;
		case "titanium":
			return 50000;
		case "ancientOre":
			return 0;
		case "train":
			return 500000;
		case "rocket":
			return 4000000;
	}
}

function getBestFurnace()
{
	var itemChosen = "ancientFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "titaniumFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "promethiumFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "goldFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "silverFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "ironFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "bronzeFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	var itemChosen = "stoneFurnace";
	if(window[itemChosen] == 1)
		return itemChosen;
	
	return "none";
}


function clicksFeathers(featherChosen)
{
	var arrowsChosen = "";
	var boneRequriement = "";
	var logRequirement = "";
	
	if(featherChosen == "feather") 
	{
		arrowsChosen = "arrows";
		boneRequriement = "bones";
		logRequirement = "logs";
	}
	if(featherChosen == "fireFeather")
	{	
		arrowsChosen = "fireArrows";
		boneRequriement = "bones";
		logRequirement = "willowLogs"
	}
	if(featherChosen == "iceFeather") 
	{
		arrowsChosen = "iceArrows";
		boneRequriement = "iceBones";
		logRequirement = "pineLogs"
	}
	if(featherChosen == "bloodFeather") 
	{
		arrowsChosen = "superArrows";
		boneRequriement = "bloodBones";
		logRequirement = "lavaLogs"
	}
	
	
	initAmountWidget("amount-widget-arrows",arrowsChosen,1,[featherChosen,logRequirement,boneRequriement],[1,1,1],"images/"+arrowsChosen+".png","images/none.png","CRAFT_ARROWS","NO_CAP");
	amountWidgetAmountInputElementGlobal.value = 1;
	amountWidgetOnKeyUp();
	openDialogue("dialogue-arrows","90%");
	return;
}
function refreshCraftingTabBars()
{
	if(ironBucket > 0)
	{
		if(getLevel(exploringXp) >= 65)
			document.getElementById("iron-bucket-level").style.color = lightGreenColor;
		else
			document.getElementById("iron-bucket-level").style.color = lightRedColor;
	}
}
function showCorrectFurnace()
{
	refreshChangedItemSwitch("stoneFurnace");
	refreshChangedItemSwitch("bronzeFurnace");
	refreshChangedItemSwitch("ironFurnace");
	refreshChangedItemSwitch("silverFurnace");
	refreshChangedItemSwitch("goldFurnace");
	refreshChangedItemSwitch("promethiumFurnace");
	refreshChangedItemSwitch("titaniumFurnace");
	refreshChangedItemSwitch("titaniumCharcoalFoundry");
	refreshChangedItemSwitch("promethiumBarRefinery");
	refreshChangedItemSwitch("ancientFurnace");
}


function clicksAutoCraftIronBuckets()
{
	sendBytes("TOGGLE_AUTOCRAFT_IRON_BUCKETS")
}

function refreshFurnaceNotification(perc)
{
	if(perc > 0)
	{
		document.getElementById("notification-furnacePercentage").style.display = "";
		document.getElementById("notification-furnacePercentage-value").innerHTML = perc + "%";
		document.getElementById("notification-furnacePercentage-image").src = "images/" + getBestFurnace() + ".png";
		
	}
	else
		document.getElementById("notification-furnacePercentage").style.display = "none";
}

function refreshCharcoalFoundryNotification(perc)
{
	if(perc > 0)
	{
		document.getElementById("notification-charcoalFoundryPercentage").style.display = "";
		document.getElementById("notification-charcoalFoundryPercentage-value").innerHTML = perc + "%";

	}
	else
		document.getElementById("notification-charcoalFoundryPercentage").style.display = "none";
}

function getXP(ore)
{
	switch(ore)
	{
		case "copper":
			return 100;
		case "iron":
			return 300;
		case "silver":
			return 600;
		case "gold":
			return 1000;
		case "promethium":
			return 5000;
		case "titanium":
			return 25000;
		case "ancientOre":
			return 100000;
	}
}


function getBarNameFromOre(ore)
{
	switch(ore)
	{
		case "copper":
		return "bronzeBars";
		default:
		return ore + "Bars";
	}
}