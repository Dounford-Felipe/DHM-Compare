function getPotionTimer(potionChosen)
{
	var amount = 0;
	switch(potionChosen)
	{
		case "furnaceSpeedPotion":
		amount = 900 * getBrewingKitMultiplier();
		break;
		case "seedFinderPotion":
		amount = 900 * getBrewingKitMultiplier();
		break;
		case "compostPotion":
		case "fastCompostPotion":
		amount = 900 * getBrewingKitMultiplier();
		break;
		case "treeCompostPotion":
		amount = 900 * getBrewingKitMultiplier();
		break;
		case "fishingSpeedPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "woodcuttingXpPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "exploringSpeedPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "baitPotion":
		amount = 3600 * getBrewingKitMultiplier();
		break;
		case "farmingXpPotion":
		amount = 60 * getBrewingKitMultiplier();
		break;
		case "oilPotion":
		amount = 3600 * 3 * getBrewingKitMultiplier();
		break;
		case "coinPotion":
		amount = 3600 * 6 * getBrewingKitMultiplier();
		break;
		case "piratesPotion":
		amount = 3600 * 6 * getBrewingKitMultiplier();
		break;
		case "researchSpeedPotion":
		amount = 3600 * 3 * getBrewingKitMultiplier();
		break;
		case "richPiratesPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "richCombatPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "richGeodePotion":
		amount = 3600 * getBrewingKitMultiplier();
		break;
		case "richSeedFinderPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "promethiumPotion":
		case "titaniumPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "rocketSpeedPotion":
		amount = 1800 * getBrewingKitMultiplier();
		break;
		case "superRocketSpeedPotion":
		amount = 900 * getBrewingKitMultiplier();
		break;
		case "fruitTreePotion":
		amount = 3600 * 2 * getBrewingKitMultiplier();
		break;
		default:
		amount = 0;
		break;
	}
	
	return parseInt(amount)
}

function refreshPotionCooldowns(timerVariable)
{
	var potionSelected = timerVariable.substr(0, timerVariable.length - 8);
	var timerAt = window[potionSelected + "Cooldown"];
	
	if(timerAt > 0)
		document.getElementById("potion-timer-cd-"+potionSelected).innerHTML = formatTime(timerAt);
	else
		document.getElementById("potion-timer-cd-"+potionSelected).innerHTML = "Ready";
}

function refreshPotionTimers(timerVariable)
{
	var potionSelected = timerVariable.substr(0, timerVariable.length - 5);
	var timerAt = window[potionSelected + "Timer"];
	
	if(timerAt < 0)
		return;
	
	if(!isNotNull(document.getElementById(potionSelected + "-timer")))
	{
		addToBrewingPotionTimers(potionSelected,"item-section-potions-active");
	}

	document.getElementById(potionSelected + "-timer").innerHTML = formatTime(timerAt);
	
	if(timerAt == 0)
		document.getElementById(potionSelected + "-potion-timer").style.display = "none";
	else
		document.getElementById(potionSelected + "-potion-timer").style.display = "";
}

function refreshWoodcuttingUpgradePotionDialogue()
{
	for(var i = 1; i <= 6; i++)
	{
		if(window["treeStage" + i] == 4)
		{
			document.getElementById("dialogue-woodcuttingUpgradePotion-img-patch-" + i).src = "images/" + window["tree" + i] + ".png";
		}
		else if(window["treeStage" + i] > 0)
		{
			document.getElementById("dialogue-woodcuttingUpgradePotion-img-patch-" + i).src = "images/" + window["tree" + i] + "_grey.png";
		}
		else
			document.getElementById("dialogue-woodcuttingUpgradePotion-img-patch-" + i).src = "images/none.png";
	}
}

function refreshWoodcuttingDowngradePotionDialogue()
{
	for(var i = 1; i <= 6; i++)
	{
		if(window["treeStage" + i] == 4)
		{
			document.getElementById("dialogue-woodcuttingDowngradePotion-img-patch-" + i).src = "images/" + window["tree" + i] + ".png";
		}
		else if(window["treeStage" + i] > 0)
		{
			document.getElementById("dialogue-woodcuttingDowngradePotion-img-patch-" + i).src = "images/" + window["tree" + i] + "_grey.png";
		}
		else
			document.getElementById("dialogue-woodcuttingDowngradePotion-img-patch-" + i).src = "images/none.png";
	}
}

function refreshFertilizeFarmingPotionInterface()
{
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-1").src = "images/" + "x_green.png";
	if(farm1 != "none" && fertilizeSoil1 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-1").src = "images/" + removeSeedsFromString(farm1) + ".png";
	if(farm1 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-1").src = "images/" + "x_green.png";
	
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-2").src = "images/" + "x_green.png";
	if(farm2 != "none" && fertilizeSoil2 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-2").src = "images/" + removeSeedsFromString(farm2) + ".png";
	if(farm2 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-2").src = "images/" + "x_green.png";
	
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-3").src = "images/" + "x_green.png";
	if(farm3 != "none" && fertilizeSoil3 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-3").src = "images/" + removeSeedsFromString(farm3) + ".png";
	if(farm3 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-3").src = "images/" + "x_green.png";
	
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-4").src = "images/" + "x_green.png";
	if(farm4 != "none" && fertilizeSoil4 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-4").src = "images/" + removeSeedsFromString(farm4) + ".png";
	if(farm4 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-4").src = "images/" + "x_green.png";
	
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-5").src = "images/" + "x_green.png";
	if(farm5 != "none" && fertilizeSoil5 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-5").src = "images/" + removeSeedsFromString(farm5) + ".png";
	if(farm5 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-5").src = "images/" + "x_green.png";
	
	document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-6").src = "images/" + "x_green.png";
	if(farm6 != "none" && fertilizeSoil6 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-6").src = "images/" + removeSeedsFromString(farm6) + ".png";
	if(farm6 == 0) document.getElementById("dialogue-fertilizeFarmingPatchPotion-img-patch-6").src = "images/" + "x_green.png";
}

function refreshSuperCompostPotionInterface()
{
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-1").src = "images/" + "x_green.png";
	if(farm1 != "none" && farmStage1 > 0 && farmStage1 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-1").src = "images/" + removeSeedsFromString(farm1) + ".png";
	if(farm1 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-1").src = "images/" + "x_green.png";
		
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-2").src = "images/" + "x_green.png";
	if(farm2 != "none"  && farmStage2 > 0 && farmStage2 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-2").src = "images/" + removeSeedsFromString(farm2) + ".png";
	if(farm2 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-2").src = "images/" + "x_green.png";
		
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-3").src = "images/" + "x_green.png";
	if(farm3 != "none" && farmStage3 > 0 && farmStage3 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-3").src = "images/" + removeSeedsFromString(farm3) + ".png";
	if(farm3 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-3").src = "images/" + "x_green.png";
		
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-4").src = "images/" + "x_green.png";
	if(farm4 != "none"  && farmStage4 > 0 && farmStage4 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-4").src = "images/" + removeSeedsFromString(farm4) + ".png";
	if(farm4 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-4").src = "images/" + "x_green.png";
		
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-5").src = "images/" + "x_green.png";
	if(farm5 != "none" && farmStage5 > 0 && farmStage5 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-5").src = "images/" + removeSeedsFromString(farm5) + ".png";
	if(farm5 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-5").src = "images/" + "x_green.png";
		
	document.getElementById("dialogue-superCompostPatchPotion-img-patch-6").src = "images/" + "x_green.png";
	if(farm6 != "none" && farmStage6 > 0 && farmStage6 < 4) document.getElementById("dialogue-superCompostPatchPotion-img-patch-6").src = "images/" + removeSeedsFromString(farm6) + ".png";
	if(farm6 == 0) document.getElementById("dialogue-superCompostPatchPotion-img-patch-6").src = "images/" + "x_green.png";
}

function drinkPotion(potionChosen)
{
	if(potionChosen == "fertilizeSoilPotion")
	{
		refreshFertilizeFarmingPotionInterface();
		openDialogue("dialogue-fertilizeFarmingPatchPotion");
		return;
	}
	if(potionChosen == "superCompostPotion")
	{
		refreshSuperCompostPotionInterface();
		openDialogue("dialogue-superCompostPatchPotion");
		return;
	}
	
	if(potionChosen == "woodcuttingUpgradePotion")
	{
		refreshWoodcuttingUpgradePotionDialogue();
		openDialogue("dialogue-woodcuttingUpgradePotion")
		return;
	}
	
	if(potionChosen == "woodcuttingDowngradePotion")
	{
		refreshWoodcuttingDowngradePotionDialogue();
		openDialogue("dialogue-woodcuttingDowngradePotion")
		return;
	}
	
	if(potionChosen == "richCombatPotion" && fightDone > 0)
	{
		confirmDialogue("90%","<b style='color:red'>Are you sure you want to drink this when you are currently unable to fight?</b>","Drink Anyway","Cancel","DRINK=" + potionChosen)
		return;
	}
	
	if(isCombatPotion(potionChosen))
	{
		confirmDialogue("90%","<center><img src='images/combat.png' class='img-large' /></center><br /><br /><center>This potion can only be used in the combat interface during a fight.</center>","Close","","");
		return;
	}
	if(getResearchStackablePotionsAmount() == 1 || potionChosen == "resetFightingPotion" || potionChosen == "cureInfectionPotion")
	{
		var htmlOutput = "";
		htmlOutput += "<center>"
		htmlOutput += "<div class='basic-smallbox-light'><img src='images/"+potionChosen+".png' class='img-medium' /></div>";
		htmlOutput += "<hr />";
		htmlOutput += "Drink a " + getItemName(potionChosen) + "?";
		htmlOutput += "</center>"

		confirmDialogue("90%",htmlOutput,"Drink","Cancel","DRINK=" + potionChosen)
	}
	else
	{
		var potionTimer = getPotionTimer(potionChosen);
		
		if(potionTimer == 0)
		{
			document.getElementById("dialogue-drinkPotion-currentyRunning-area2").style.display = "";
			document.getElementById("dialogue-drinkPotion-currentyRunning-area").style.display = "none";
		}
		else
		{
			document.getElementById("dialogue-drinkPotion-currentyRunning-area2").style.display = "none";
			document.getElementById("dialogue-drinkPotion-currentyRunning-area").style.display = "";
		}
		
		var maxStack = getMaxPotionsToDrinkEffeciantly(potionChosen);
		if(maxStack > window[potionChosen]) maxStack = window[potionChosen];
		if(potionChosen == "farmingXpPotion") maxStack = 1;
		document.getElementById('widget-sell-input-drinkPotion').value = maxStack; 
		
		//document.getElementById('widget-sell-input-drinkPotion').value = 1; brogginini said to remove this
		

		document.getElementById("dialogue-drinkPotion-mainImage").src = "images/" + potionChosen + ".png";
		
		document.getElementById("dialogue-drinkPotion-potion-chosen").value = potionChosen;
		openDialogue("dialogue-drinkPotion");
	}
	
}

function dialogueBrewingDrinkMaxButton()
{
	var potionChosen = document.getElementById('dialogue-drinkPotion-potion-chosen').value;
	if(getPotionTimer(potionChosen) == 0) //not timer potion
		document.getElementById('widget-sell-input-drinkPotion').value = window[potionChosen];
	else
	{
		var maxStack = getMaxPotionsToDrinkEffeciantly(potionChosen);
		if(maxStack > window[potionChosen]) maxStack = window[potionChosen];
		document.getElementById('widget-sell-input-drinkPotion').value = maxStack;
	}
}
function getMaxPotionsToDrinkEffeciantly(potionChosen)
{
	var potionTimer = getPotionTimer(potionChosen);
	var currentTimerRunning = window[potionChosen + "Timer"];
	var potionsRunning = 0;
	if(currentTimerRunning > 0) potionsRunning = parseInt(currentTimerRunning / potionTimer) + 1;
	document.getElementById("dialogue-drinkPotion-currentlyRunning").innerHTML = potionsRunning;
	var defaultInput = getResearchStackablePotionsAmount() - potionsRunning;
	return defaultInput;
}

function drinkMultiplePotions()
{
	var potionChosen = document.getElementById("dialogue-drinkPotion-potion-chosen").value;
	var amountToDrink = document.getElementById("widget-sell-input-drinkPotion").value;
	
	sendBytes("MULTI_DRINK=" + potionChosen + "~" + amountToDrink)
}
function getResearchStackablePotionsAmount()
{
	if(brewingResearchLevel >= 8)
		return 20;
	else if(brewingResearchLevel >= 5)
		return 5;
	else if(brewingResearchLevel >= 2)
		return 2;
	else
		return 1;
}

function getCurrentBrewingKit()
{
	if(brewingKit == 1)
		return "brewingKit";
	if(sapphireBrewingKit == 1)
		return "sapphireBrewingKit";
	if(emeraldBrewingKit == 1)
		return "emeraldBrewingKit";
	if(rubyBrewingKit == 1)
		return "rubyBrewingKit";
	if(diamondBrewingKit == 1)
		return "diamondBrewingKit";
	if(bloodDiamondBrewingKit == 1)
		return "bloodDiamondBrewingKit";
	
	return "none";
}

function getBrewingKitMultiplier()
{
	if(bloodDiamondBrewingKit == 1)
		return 2.5;
	else if(diamondBrewingKit == 1)
		return 2;
	else if(rubyBrewingKit == 1)
		return 1.6;
	else if(emeraldBrewingKit == 1)
		return 1.4;
	else if(sapphireBrewingKit == 1)
		return 1.2;
	
	else return 1;
}

function hideCombatPotions(hiddenFlag)
{
	for(var i = 0; i < brewingRecipesGlobalIndex.length; i++)
	{
		var potionFound = brewingRecipesGlobalIndex[i].itemName;
		if(potionFound.toLowerCase().includes("combat") && window[potionFound] > 0)
		{
			if(!hiddenFlag)
				document.getElementById("item-box-" + potionFound).style.display = "";
			else
			{
				if(window[potionFound + "Free"] == 1)
				{
					document.getElementById("item-box-" + potionFound).style.display = "none";
				}
			}
		}
	}
}

function refreshBrewingTimerDisplayers()
{
	var potionChosen = "";
	
	for(var i = 0; i < brewingRecipesGlobalIndex.length; i++)
	{
		potionChosen = brewingRecipesGlobalIndex[i].itemName;
		if(getPotionTimer(potionChosen) > 0)
		document.getElementById("potion-timer-" + potionChosen).innerHTML = formatTime(getPotionTimer(potionChosen));
	}
}

function refreshShowBrewingNotificationBrewingTab()
{
	var turnOn = 0;
	
	if(document.getElementById("clicksPotionNotification-showOnlyInBrewing").src.endsWith("rememberMeIconOn_dark.png"))
		turnOn = 1;
	
	sendBytes("HIDE_BREWING_TIMERS=" + turnOn)
}

function refreshShowBrewingTimers()
{
	if(hideBrewingTimers == 0) return;
	if(hideBrewingTimers == 1)
	{
		if(lastTabId == "brewing")
			document.getElementById("item-section-potions-active").style.display = "";
		else
			document.getElementById("item-section-potions-active").style.display = "none";
	}
}