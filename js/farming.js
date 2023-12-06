function Seeds(itemName, levelReq, stopsDieingLevel, xp, bonemealCost, description, growtime, isTreeSeed)
{
    this.itemName = itemName;
	this.levelReq = levelReq;
	this.stopsDieingLevel = stopsDieingLevel;
    this.xp = xp;
    this.bonemealCost = bonemealCost;
	this.description = description;
	this.isTreeSeed = isTreeSeed;
	this.growtime = growtime;
}

var seedsArrayGlobal = [];
function initSeedsArray()
{
	var seedName = "";
	var indexId = 0;
	var levelReq = 0;
	var stopsDieingLevel = 0;
	var xpGained = 0;
	var bonemealNeeded = 0;
	var growtime = 0;
	var desc = "";
	var isTreeSeed = false;
	
	
	
	seedName = "pumpkinSeeds";
	levelReq = 1;
	stopsDieingLevel = 0;
	xpGained = 100;
	bonemealNeeded = 0;
	growtime = 7200;
	desc = "A pumpkin seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "dottedGreenLeafSeeds";
	levelReq = 1;
	stopsDieingLevel = 20;
	xpGained = 500;
	bonemealNeeded = 0;
	desc = "A common leaf seed.";
	growtime = 900;
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq,stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "redMushroomSeeds";
	levelReq = 1;
	stopsDieingLevel = 0;
	xpGained = 100;
	bonemealNeeded = 0;
	growtime = 900;
	desc = "A common leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "treeSeeds";
	levelReq = 15;
	stopsDieingLevel = 30;
	xpGained = 5000;
	bonemealNeeded = 0;
	growtime = 3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "greenLeafSeeds";
	levelReq = 20;
	stopsDieingLevel = 40;
	xpGained = 1500;
	bonemealNeeded = 0;
	growtime = 1800;
	desc = "A common leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "oakTreeSeeds";
	levelReq = 30;
	stopsDieingLevel = 50;
	xpGained = 12000;
	bonemealNeeded = 1;
	growtime = 7200;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	
	seedName = "limeLeafSeeds";
	levelReq = 40;
	stopsDieingLevel = 60;
	xpGained = 4000;
	bonemealNeeded = 0;
	growtime = 3600;
	desc = "An uncommon leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "willowTreeSeeds";
	levelReq = 50;
	stopsDieingLevel = 70;
	xpGained = 20000;
	bonemealNeeded = 5;
	growtime = 14400;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	
	seedName = "goldLeafSeeds";
	levelReq = 60;
	stopsDieingLevel = 80;
	xpGained = 10000;
	bonemealNeeded = 10;
	growtime = 7200;
	desc = "A rare leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "mapleTreeSeeds";
	levelReq = 70;
	stopsDieingLevel = 85;
	xpGained = 40000;
	bonemealNeeded = 20;
	growtime = 21600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "appleTreeSeeds";
	levelReq = 75;
	stopsDieingLevel = 90;
	xpGained = 50000;
	bonemealNeeded = 25;
	growtime = 21600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
		
	seedName = "goldAppleTreeSeeds";
	levelReq = 300;
	stopsDieingLevel = 1500;
	xpGained = 5000000;
	bonemealNeeded = 1000;
	growtime = 3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "redwoodTreeSeeds";
	levelReq = 75;
	stopsDieingLevel = 100;
	xpGained = 95000;
	bonemealNeeded = 35;
	growtime = 28800;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "crystalLeafSeeds";
	levelReq = 100;
	stopsDieingLevel = 130;
	xpGained = 25000;
	bonemealNeeded = 50;
	growtime = 10800;
	desc = "A rare leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "pineTreeSeeds";
	levelReq = 100;
	stopsDieingLevel = 130;
	xpGained = 125000;
	bonemealNeeded = 75;
	growtime = 10*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "hauntedTreeSeeds";
	levelReq = 150;
	stopsDieingLevel = 190;
	xpGained = 200000;
	bonemealNeeded = 120;
	growtime = 12*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "jungleTreeSeeds";
	levelReq = 225;
	stopsDieingLevel = 300;
	xpGained = 250000;
	bonemealNeeded = 150;
	growtime = 14*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "lavaTreeSeeds";
	levelReq = 325;
	stopsDieingLevel = 400;
	xpGained = 300000;
	bonemealNeeded = 200;
	growtime = 16*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "goldTreeSeeds";
	levelReq = 400;
	stopsDieingLevel = 500;
	xpGained = 400000;
	bonemealNeeded = 500;
	growtime = 18*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "magicTreeSeeds";
	levelReq = 700;
	stopsDieingLevel = 1000;
	xpGained = 900000;
	bonemealNeeded = 800;
	growtime = 20*3600;
	desc = "A tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	//lvl 200 xp = 275k w/ bonemeal 150
	
	seedName = "cactusTreeSeeds";
	levelReq = 250;
	stopsDieingLevel = 300;
	xpGained = 325000;
	bonemealNeeded = 175;
	growtime = 14*3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "bananaTreeSeeds";
	levelReq = 350;
	stopsDieingLevel = 450;
	xpGained = 425000;
	bonemealNeeded = 220;
	growtime = 16*3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "palmTreeSeeds";
	levelReq = 500;
	stopsDieingLevel = 650;
	xpGained = 625000;
	bonemealNeeded = 500;
	growtime = 20*3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;

	
	seedName = "stripedGreenLeafSeeds";
	levelReq = 600;
	stopsDieingLevel = 720;
	xpGained = 5000000;
	bonemealNeeded = 1000;
	growtime = 30*3600;
	desc = "An very rare leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "pineappleTreeSeeds";
	levelReq = 700;
	stopsDieingLevel = 850;
	xpGained = 825000;
	bonemealNeeded = 650;
	growtime = 22*3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "stripedGoldLeafSeeds";
	levelReq = 1000;
	stopsDieingLevel = 1200;
	xpGained = 12500000;
	bonemealNeeded = 5000;
	growtime = 40*3600;
	desc = "An very rare leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "starfruitTreeSeeds";
	levelReq = 1000;
	stopsDieingLevel = 1250;
	xpGained = 1200000;
	bonemealNeeded = 1000;
	growtime = 26*3600;
	desc = "A fruit tree seed.";
	isTreeSeed = true;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "carnivorousSeeds";
	levelReq = 1250;
	stopsDieingLevel = 1500;
	xpGained = 20000000;
	bonemealNeeded = 8000;
	growtime = 7200;
	desc = "A carnviorous seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
	seedName = "stripedCrystalLeafSeeds";
	levelReq = 1500;
	stopsDieingLevel = 1800;
	xpGained = 30000000;
	bonemealNeeded = 20000;
	growtime = 55*3600;
	desc = "An extremely rare leaf seed.";
	isTreeSeed = false;
	seedsArrayGlobal[seedName] = new Seeds(seedName, levelReq, stopsDieingLevel, xpGained, bonemealNeeded, desc, growtime, isTreeSeed);
	seedsArrayGlobal[indexId] = seedsArrayGlobal[seedName]; indexId++;
	
}

function initFarmingSlots()
{
	for(var i = 1; i <= 6; i++)
	{
			setFarmPatchThumbnail(i, window["farm"+i], window["farmTimer" + i], window["farmUnlocked"+i] == 1, window["farmStar" + i])
	}
}

function getMaxPlanterIterations()
{
	if(titaniumPlanter == 1)
		return parseInt(getLevel(farmingXp) / 10) * 3;
	else
		return parseInt(getLevel(farmingXp) / 10);
}

function refreshSeedLevelRequirementColors()
{
	for(var i = 0; i < seedsArrayGlobal.length; i++)
	{
		var seed = seedsArrayGlobal[i];
		if(seed.levelReq > getLevel(farmingXp))
			document.getElementById(seed.itemName + "-" + "level").style.color = lightRedColor;
		else
			document.getElementById(seed.itemName + "-" + "level").style.color = lightGreenColor;
		
		if(seed.stopsDieingLevel == 0)
			document.getElementById(seed.itemName + "-stops-dieing-" + "level").style.display = "none";
		if(seed.bonemealCost == 0)
			document.getElementById(seed.itemName + "-bonemealCost").style.display = "none";
		
		if(seed.stopsDieingLevel > getLevel(farmingXp))
			document.getElementById(seed.itemName + "-stops-dieing-" + "level").style.color = lightRedColor;
		else
			document.getElementById(seed.itemName + "-stops-dieing-" + "level").style.color = lightGreenColor;
		
		if(seed.bonemealCost > bonemeal)
			document.getElementById(seed.itemName + "-bonemealCost").style.color = lightRedColor;
		else
			document.getElementById(seed.itemName + "-bonemealCost").style.color = lightGreenColor;
	}
}

function refreshDialogueSeedsToSelectReplant()
{
	
	var htmlOutputTreeSeeds = "";
	var htmlOutputLeafSeeds = "";
	var htmlOutputSecondarySeeds = "";
	for(var i = 0; i < seedsArrayGlobal.length; i++)
	{
		var seed = seedsArrayGlobal[i];
		var seedName = seed.itemName;
		if(window[seedName] > 0)
		{
			if(seedName.toLowerCase().indexOf("tree") !== -1)
			{
				htmlOutputTreeSeeds += "<img style='cursor:pointer;' onclick='setBobsAutoReplantSeed(\""+seedName+"\")' src='images/"+seed.itemName+".png' class='img-medium' />";
			}
			else if(seedName.indexOf("Leaf") !== -1)
			{
				htmlOutputLeafSeeds += "<img style='cursor:pointer;' onclick='setBobsAutoReplantSeed(\""+seedName+"\")' src='images/"+seed.itemName+".png' class='img-medium' />";
			}
			else
			{
				htmlOutputSecondarySeeds += "<img style='cursor:pointer;' onclick='setBobsAutoReplantSeed(\""+seedName+"\")' src='images/"+seed.itemName+".png' class='img-medium' />";
			}
			
		}
	}
	
	document.getElementById("dialogue-bob-select-tree-seed").innerHTML = htmlOutputTreeSeeds;
	document.getElementById("dialogue-bob-select-leaf-seed").innerHTML = htmlOutputLeafSeeds;
	document.getElementById("dialogue-bob-select-secondary-seed").innerHTML = htmlOutputSecondarySeeds;
}

function setBobsAutoReplantSeed(seedName)
{
	sendBytes("FARMER_SET_SEED=" + seedName);
	document.getElementById("dialogue-bob-seed-img").src = "images/"+seedName+".png";
	closeSmittysDialogue('dialogue-bob-select-seed');
	openDialogue('dialogue-bob');
}

function isFarmingPatchEmpty(patchId)
{
	if((window["farm" + patchId] == 0 || window["farm" + patchId] == "none") && window["farmUnlocked" + patchId] == 1)
		return true;
	else
		return false;
}

function clicksSeed(seedName, isPlanting)
{
	selectedSeedToPlantGlobal = seedName;
	navigate("farmingPlant");
	refreshFarmingPatchesToPlant(isPlanting);
}

var selectedSeedToPlantGlobal = "";
function refreshFarmingPatchesToPlant(isPlanting)
{
	//make patches grey
	var tds = document.getElementById("farming-patches-plant").getElementsByTagName("td");
	
	for(var i = 0; i < tds.length; i++)
	{
		var patchId = i + 1;
		if(!isFarmingPatchEmpty(patchId))
		{
			if(isPlanting)
			{
				tds[i].style.backgroundColor = "grey";
				tds[i].innerHTML = "";
			}
			else
			{
				
				tds[i].style.backgroundColor = "grey";
				
				if(window["farmUnlocked" + patchId] == 1)
				tds[i].innerHTML = "IN USE";
			}
		}
		else
		{
			if(isPlanting)
			{
				tds[i].style.backgroundColor = "rgb(30,75,5)";
				tds[i].innerHTML = "PLANT";
			}
			else
			{
				tds[i].style.backgroundColor = "rgb(30,75,5)";
				tds[i].innerHTML = "EMPTY";
			}
		}
	}
}


function setFarmPatchThumbnail(patchId, farm, farmTimer, isUnlocked, farmStar)
{
	var labelTag = document.getElementById("farm-thumbnail-label-" + patchId);
	var imgTag = document.getElementById("farm-thumbnail-img-" + patchId);
	var farmStarImg = document.getElementById("farm-thumbnail-img-" + patchId + "-star");
	
	if(!isUnlocked)
	{
		labelTag.innerHTML = "<span style='color:gold'>Locked</span>";
		imgTag.src = "images/locked.png";
		return;
	}
	
	switch(farmTimer)
	{
		case 1:
			labelTag.innerHTML = "READY";
			var imgName = removeSeedsFromString(farm) + ".png";
			if(imgName == "carnivorous.png") imgName = "carnivorousPlant2Monster.gif"
			imgTag.src = "images/"+imgName;
		break;
		case 0:
			labelTag.innerHTML = "NONE";
			imgTag.src = "images/empty100_100.png";
		break;
		default:
			imgTag.src = "images/"+removeSeedsFromString(farm)+"_grey.png";
			labelTag.innerHTML = formatTime(farmTimer);
		break;
	}
	
	if(farmStar != 0 && farmStar != "none")
	{
		farmStarImg.src = "images/" + farmStar + ".png";
		farmStarImg.style.display = "";
	}
	else
		farmStarImg.style.display = "none";
}

function removeSeedsFromString(value)
{
	if(value == 0 || value == "none") return "empty100_100";
	return value.substr(0, value.length - 5);
}

function getSeedLevelRequirement(seedChosen)
{
	switch(seedChosen)
	{
		case "dottedGreenLeafSeeds":
			return 1;
		case "redMushroomSeeds":
			return 1;
		default:
			return 0;
	}
}

function getHarvestXp(seedChosen)
{
	switch(seedChosen)
	{
		case "dottedGreenLeafSeeds":
			return 1500;
		case "redMushroomSeeds":
			return 500;
		default:
			return 0;
	}
}

var lastLoadFarmPatch = "";
function loadFarm(patchId)
{
	var farmTimer = window["farmTimer" + patchId];
	
	
	if(farmTimer == 0)
	{
		document.getElementById("tab-farm-top-bar-name-timer").style.display = "none";
		document.getElementById("farm-div-img").style.display = "none";
		return;
	}
	
	document.getElementById("tab-farm-top-bar-name-timer").style.display = "";
	document.getElementById("tab-farm-name").innerHTML = getItemName(removeSeedsFromString(window["farm" + patchId])).toUpperCase();
	
	if(farmTimer == 1)
		document.getElementById("tab-farm-timer").innerHTML = "READY";
	else if(farmTimer > 1)
		document.getElementById("tab-farm-timer").innerHTML = formatTime(farmTimer);
	
	if(window["farmStage" + patchId] >= 1 && window["farmStage" + patchId] <= 4)
	{
		document.getElementById("farm-div-img").style.display = "";
		if(window["farm" + patchId].toLowerCase().includes("tree"))
		document.getElementById("farm-div-img").src = "images/farm_" + removeSeedsFromString(window["farm" + patchId]) + window["farmStage" + patchId] + ".png";
		else
		document.getElementById("farm-div-img").src = "images/" + removeSeedsFromString(window["farm" + patchId]) + window["farmStage" + patchId] + ".png";
	
		document.getElementById("farm-div").setAttribute("onclick","sendBytes('HARVEST="+patchId+"')");
		
		if(window["farmStar" + patchId] != "none" && window["farmStar" + patchId] != 0)
		{
			document.getElementById("farm-div-img-star").style.display = "";
			document.getElementById("farm-div-img-star").src = "images/" + window["farmStar" + patchId] + ".png";
		}
		else
			document.getElementById("farm-div-img-star").style.display = "none";
	}
}

function getBonemealAmount(boneChosen)
{
	switch(boneChosen)
	{
		case "bones":
		return 1;
		case "ashes":
		return 2;
		case "iceBones":
		return 3;
		case "zombieBones":
		return 4;
		case "bloodBones":
		return 5;
		case "rainbowFishBones":
		return 100;
	}
}

function refreshPatchIconOverlay()
{
	for(var i = 1; i <= 6; i++)
	{
		document.getElementById("farm-thumbnail-overlay-" + i).innerHTML = "";
		
		if(window["fertilizeSoil" + i] == 1)
			document.getElementById("farm-thumbnail-overlay-" + i).innerHTML = "<img src='images/fertilizeSoilPotion.png' class='img-small' />";
	}
}


function getCurrentRake()
{
	if(rake == 1)
		return "rake";
	if(sapphireRake == 1)
		return "sapphireRake";
	if(emeraldRake == 1)
		return "emeraldRake";
	if(rubyRake == 1)
		return "rubyRake";
	if(diamondRake == 1)
		return "diamondRake";
	if(bloodDiamondRake == 1)
		return "bloodDiamondRake";
	
	return "none";
}

function getCurrentSecateurs()
{
	if(secateurs == 1)
		return "secateurs";
	if(sapphireSecateurs == 1)
		return "sapphireSecateurs";
	if(emeraldSecateurs == 1)
		return "emeraldSecateurs";
	if(rubySecateurs == 1)
		return "rubySecateurs";
	if(diamondSecateurs == 1)
		return "diamondSecateurs";
	if(bloodDiamondSecateurs == 1)
		return "bloodDiamondSecateurs";
	
	return "none";
}

function getCurrentSecateursChance()
{
	if(getCurrentSecateurs() == "secateurs")
		return 1;
	else if(getCurrentSecateurs() == "sapphireSecateurs")
		return 2;
	else if(getCurrentSecateurs() == "emeraldSecateurs")
		return 3;
	else if(getCurrentSecateurs() == "rubySecateurs")
		return 4;
	else if(getCurrentSecateurs() == "diamondSecateurs")
		return 5;
	else if(getCurrentSecateurs() == "bloodDiamondSecateurs")
		return 6;
	
	return 0;
}

function getCurrentRakeChance()
{

	if(getCurrentRake() == "rake")
		return 1;
	else if(getCurrentRake() == "sapphireRake")
		return 2;
	else if(getCurrentRake() == "emeraldRake")
		return 3;
	else if(getCurrentRake() == "rubyRake")
		return 4;
	else if(getCurrentRake() == "diamondRake")
		return 5;
	else if(getCurrentRake() == "bloodDiamondRake")
		return 6;
	
	return 0;
}

function openDialogueBones(bonesChosen)
{
	if(bonesChosen == "fishBones")
	{
		initAmountWidget("amount-widget-bones",bonesChosen,0.1,[bonesChosen],[1],"images/"+bonesChosen+".png","images/bonemealBin.png","ADD_BONEMEAL","NO_CAP")
		openDialogue("dialogue-bones","90%")
	}
	else
	{
		initAmountWidget("amount-widget-bones",bonesChosen,getBonemealAmount(bonesChosen),[bonesChosen],[1],"images/"+bonesChosen+".png","images/bonemealBin.png","ADD_BONEMEAL","NO_CAP")
		openDialogue("dialogue-bones","90%")
	}
}

function openDialogueGiveOrbsGoblin()
{
	initAmountWidget("amount-widget-goblinCousin-giveOrbs","greenExploringOrb",1,["greenExploringOrb"],[1],"images/goblinCousin.png","images/greenExploringOrb.png","GIVE_GOBLIN_GREEN_ORBS","NO_CAP")
	openDialogue("dialogue-goblinCousin-giveOrbs","90%")
}




function refreshShortcutPotionsFarm()
{
	if(fertilizeSoilPotion > 0 || superCompostPotion > 0 || farmingXpPotion > 0)
	{
		document.getElementById("table-farming-brew-potion-shortcuts").style.display = "";
		if(fertilizeSoilPotion > 0) document.getElementById("farm-shortcut-fertilizeSoilPotion").style.display = "";
		if(superCompostPotion > 0) document.getElementById("farm-shortcut-superCompostPotion").style.display = "";
		if(farmingXpPotion > 0) document.getElementById("farm-shortcut-farmingXpPotion").style.display = "";
	}
	else
		document.getElementById("table-farming-brew-potion-shortcuts").style.display = "none";
	
}