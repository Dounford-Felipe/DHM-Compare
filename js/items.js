var blueOrbsGlobal = ["blueRakeOrb","blueFishingRodOrb","blueAxeOrb","blueOilWellOrb"];
var greenOrbsGlobal = ["greenOilFactoryOrb","greenCharcoalFoundryOrb","greenMetelDetectorOrb","greenExploringOrb"];

//sets all items to 0
function initItemsArray(jsItemArrayFromFile)
{
	for(var i = 0; i < jsItemArrayFromFile.length; i++)
	{
		window[jsItemArrayFromFile[i]] = 0;
	}
}


/*
ignoreItemsAlreadySet = will load itemChanged - used after time machine or load first time
*/
function refreshItemsFromServer(dataItemsFromServer, ignoreItemsAlreadySet)
{
	var dataItemsFromServerArray = dataItemsFromServer.split("~");
	var dataItemsThatChanged = [];
	
	for(var i = 0; i < dataItemsFromServerArray.length; i++)
	{
		var itemName = dataItemsFromServerArray[i]; i++;
		var itemValue = dataItemsFromServerArray[i];
		
		//check if this item has already been set, if no, then we reset it
		if(window[itemName] != itemValue)
		{
			if(isNaN(itemValue) || itemName == "username")
				window[itemName] = itemValue;
			else
				window[itemName] = parseFloat(itemValue);
			
			dataItemsThatChanged.push(itemName);
		}
	}
	
	manageChangedItems(dataItemsThatChanged);
}

function buyFromShop(itemToBuy, picturesArray, labelArray, hasItemArray, serverCommand, buttonName)
{
	var htmlOutput = "";
	var backgroundColor = "";
	var borderColor = "";
	var imgCheckmarkTag = "";
	for(var i = 0; i < picturesArray.length; i++)
	{
		var imageChosen = picturesArray[i];
		var label = labelArray[i];
		var hasItem = hasItemArray[i];
		
		if(hasItem)
		{
			backgroundColor = "#99ff99";
			borderColor = "#004d00";
			imgCheckmarkTag = "<img src='images/check.png' class='img-tiny' />";
			htmlOutput += "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='"+imageChosen+"' class='img-small-medium' /> "+label+" "+imgCheckmarkTag+"</span>";
		}
		else
		{
			backgroundColor = "#ffcccc";
			borderColor = "#4d0000";
			imgCheckmarkTag = "<img src='images/x.png' class='img-tiny' />";
			htmlOutput += "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='"+imageChosen+"' class='img-small-medium' /> "+label+" "+imgCheckmarkTag+"</span>";
		}
	}
	
	htmlOutput+= "<hr />";

	confirmDialogue("90%",htmlOutput,buttonName,"Cancel",""+serverCommand+"=" + itemToBuy);
}


function refreshShop()
{
	if(bloodShop >= 1)
	{
		document.getElementById("shop-backButton1").style.display = "none";
		document.getElementById("bloodShop-buttons").style.display = "";
	}
	if(bloodShop >= 2)
	{
		document.getElementById("blood-shop-mysteryGemBox-2").style.display = "";
		document.getElementById("blood-shop-enrichedPotions-2").style.display = "";
		document.getElementById("blood-shop-purchase-2").style.display = "";
		document.getElementById("blood-shop-hpEmblem-2").style.display = "";
		document.getElementById("blood-shop-magicEmblem-2").style.display = "";
		document.getElementById("blood-shop-veryHighWindMagicOrb-2").style.display = "";
		document.getElementById("blood-shop-bloodMoonMagicOrb-2").style.display = "";
		document.getElementById("blood-shop-superBait-2").style.display = "";
		document.getElementById("blood-shop-changeSpellUpgrade-2").style.display = "";
		
		document.getElementById("td-bc-uniques").style.display = "";
		document.getElementById("td-bc-buffs").style.display = "";
		document.getElementById("td-bc-items").style.display = "";
	}
	
	if(theGemGoblinQuest == -1)
	{
		document.getElementById("bloodShop-buttons").style.display = "none";
		document.getElementById("bloodShopAndGemGoblin-buttons").style.display = "";
	}
	
	if(hpEmblem3Bought > 0)
	{
		document.getElementById("blood-shop-hpEmblem-2").style.display = "none";
	}
	
	if(boughtHpEmblem5 > 0)
	{
		document.getElementById("shop-hpEmblem5Uncharged").style.display = "none";
	}
	if(boughtMagicEmblem3Uncharged)
	{
		document.getElementById("shop-magicEmblem3Uncharged").style.display = "none";
	}
	if(magicEmblem2Bought > 0)
	{
		document.getElementById("blood-shop-magicEmblem-2").style.display = "none";
	}
	
	if(questGuides > 0)
	{
		document.getElementById("shop-questGuides").style.display = "none";
	}
	if(minerCost == 0)
	{
		document.getElementById("shop-miners").style.display = "none";
	}
	
	if(piratesCost == 0)
	{
		document.getElementById("shop-pirates").style.display = "none";
	}
	
	if(rustySwordBought == 1)
	{
		document.getElementById("shop-rustySword").style.display = "none";
	}
	
	if(teleportSpellScrollBought > 0)
		document.getElementById("shop-teleportSpellScroll").style.display = "none";
	
	if(sapphireFishingRod == 1 || emeraldFishingRod == 1 || rubyFishingRod == 1 || diamondFishingRod == 1 || fishingRod == 1 || bloodDiamondFishingRod == 1 || fishingHook == 1)
	{
		document.getElementById("shop-fishingHook").style.display = "none";
	}
	
	if(miners < 10)
	{
		if(minerCost > coins)
		{
			document.getElementById("shop1-minerCost").style.color = "red";
			document.getElementById("shop1-minerCost-check").src = "images/x.png";
		}
		else
		{
			document.getElementById("shop1-minerCost").style.color = "lime";
			document.getElementById("shop1-minerCost-check").src = "images/check.png";
		}
	}
	if(stoneFurnace == 0)
	{
		if(coins < 20)
		{
			document.getElementById("shop1-stoneFurnace").style.color = "red";
			document.getElementById("shop1-stoneFurnace-check").src = "images/x.png";
		}
		else
		{
			document.getElementById("shop1-stoneFurnace").style.color = "lime";
			document.getElementById("shop1-stoneFurnace-check").src = "images/check.png";
		}
		
		if(stone < 10)
		{
			document.getElementById("shop1-stoneFurnaceOres").style.color = "red";
			document.getElementById("shop1-stoneFurnaceOres-check").src = "images/x.png";
		}
		else
		{
			document.getElementById("shop1-stoneFurnaceOres").style.color = "lime";
			document.getElementById("shop1-stoneFurnaceOres-check").src = "images/check.png";
		}
	}

	if(missions == 0)
	{
		if(coins >= 100)
		{
			document.getElementById("shop-missions-price").style.color = "lime";
			document.getElementById("shop-missions-price").innerHTML = "100 " + "<img src='images/check.png' class='img-tiny' />"
		}
		else
		{
			document.getElementById("shop-missions-price").style.color = "red";
			document.getElementById("shop-missions-price").innerHTML = "100 " + "<img src='images/x.png' class='img-tiny' />"
		}
	}
	
	if(gemFinder == 0)
	{
		if(coins >= 1000)
		{
			document.getElementById("shop-gemFinder-price").style.color = "lime";
			document.getElementById("shop-gemFinder-price").innerHTML = "1000 " + "<img src='images/check.png' class='img-tiny' />"
		}
		else
		{
			document.getElementById("shop-gemFinder-price").style.color = "red";
			document.getElementById("shop-gemFinder-price").innerHTML = "1000 " + "<img src='images/x.png' class='img-tiny' />"
		}
	}
	
	if(researcher == 0)
	{
		if(coins >= 25000)
		{
			document.getElementById("shop-researcher-price").style.color = "lime";
			document.getElementById("shop-researcher-price").innerHTML = "25,000 " + "<img src='images/check.png' class='img-tiny' />"
		}
		else
		{
			document.getElementById("shop-researcher-price").style.color = "red";
			document.getElementById("shop-researcher-price").innerHTML = "25,000 " + "<img src='images/x.png' class='img-tiny' />"
		}
	}
	
	if(stoneFurnace > 0)
	{
		document.getElementById("shop-stoneFurnace").style.display = "none";
	
	}
	
	if(threeHpCombatPotions > 0)
	{
		document.getElementById("shop-threeHpCombatPotions").style.display = "none";
	}
	if(gemFinder > 0)
		document.getElementById("shop-gemFinder").style.display = "none";
	
	if(researcher > 0)
		document.getElementById("shop-researcher").style.display = "none";
	
	if(missions > 0)
		document.getElementById("shop-missions").style.display ="none";
	
	if(farmer > 0)
		document.getElementById("shop-farmer").style.display ="none";
	if(lumberjack > 0)
		document.getElementById("shop-lumberjack").style.display ="none";
	

	
	if(piratesNavigation == 1)
		document.getElementById("shop-piratesNavigation").style.display = "none";
	
	if(timeMachine > 0)
		document.getElementById("shop-timeMachine").style.display = "none";
	if(drillBits > 0)
		document.getElementById("shop-drillBits").style.display = "none";
	if(crusherContainers > 0)
		document.getElementById("shop-crusherContainers").style.display = "none";
	if(giantDrillHeads > 0)
		document.getElementById("shop-giantDrillHeads").style.display = "none";
	if(roadHeadersSpikes > 0)
		document.getElementById("shop-roadHeadersSpikes").style.display = "none";
	if(excavatorsSawBlades > 0)
		document.getElementById("shop-excavatorsSawBlades").style.display = "none";
	if(richGeodePotionBought > 0)
		document.getElementById("shop-richGeodePotionBought").style.display = "none";
	if(toolUpgrade > 0)
		document.getElementById("shop-toolUpgrade").style.display = "none";
	if(boughtTreasureChest > 0)
		document.getElementById("shop-boughtTreasureChest").style.display = "none";
	if(combatInformation > 0)
		document.getElementById("shop-combatInformation").style.display = "none";
	if(combatInformation2 > 0)
		document.getElementById("shop-combatInformation2").style.display = "none";
	
	if(learnPromethiumSmeltingScroll == 1)
		document.getElementById("shop-learnPromethiumSmeltingScroll").style.display = "none";
	if(learnTitaniumSmeltingScroll == 1)
		document.getElementById("shop-learnTitaniumSmeltingScroll").style.display = "none";
	if(learnAncientSmeltingScroll == 1)
		document.getElementById("shop-learnAncientSmeltingScroll").style.display = "none";
	
	if(amulet == "boneAmulet" || boneAmulet > 0 || boneRing > 0)
		document.getElementById("shop-boneAmulet").style.display = "none";
	if(ghostScanAmuletBought == 1)
		document.getElementById("shop-ghostScanAmulet").style.display = "none";
	if(trawler == 1)
	document.getElementById("shop-trawler").style.display = "none";

	if(refinedGoldBarsBought > 0)
	{
		document.getElementById("shop-refinedGoldBars").style.display = "none";
	}
	
	if(dailyMissions == 1)
		document.getElementById("shop-dailyMissions").style.display = "none";
	
	refreshBloodShop();
	
	
}

function refreshBloodShop()
{
	//capacity
	if(bloodCrystals >= capacityLevelPrice)
	{
		document.getElementById("img-check-capacity-bc").src = "images/check.png";
	}
	else
		document.getElementById("img-check-capacity-bc").src = "images/x.png";

	
	if(capacityLevel >= 8)
	{
		document.getElementById("capacity-total-level-bc").innerHTML = "<span style='color:lime'>" + (capacityLevel - 1) + "/7</span>";
		document.getElementById("capacityPrice-bc").style.display = "none";
	}
	else
		document.getElementById("capacity-total-level-bc").innerHTML = (capacityLevel - 1) + "/7";
	
	
	//wc slots
	if(bloodCrystals >= unlockWoodcuttingPatchPrice)
	{
		document.getElementById("img-check-woodcutting-patch-bc").src = "images/check.png";
	}
	else
		document.getElementById("img-check-woodcutting-patch-bc").src = "images/x.png";
	

	if(bloodCrystals >= unlockFarmingPatchPrice)
	{
		document.getElementById("img-check-farming-patch-bc").src = "images/check.png";
	}
	else
		document.getElementById("img-check-farming-patch-bc").src = "images/x.png";
	
	var treesUnlocked = 0;
	var farmUnlocked = 0;
	for(var i = 3; i <= 6; i++)
	{
		if(window["treeUnlocked" + i] == 1) treesUnlocked++;
		if(window["farmUnlocked" + i] == 1) farmUnlocked++;
	}
	
	if(treesUnlocked >= 4)
	{
		document.getElementById("woodcutting-unlocked-level-bc").innerHTML = "<span style='color:lime'>" + (treesUnlocked) + "/4</span>";
		document.getElementById("woodcuttingPatchPrice-bc").style.display = "none";
	}
	else
		document.getElementById("woodcutting-unlocked-level-bc").innerHTML = (treesUnlocked) + "/4";
	
	if(farmUnlocked >= 4)
	{
		document.getElementById("farming-unlocked-level-bc").innerHTML = "<span style='color:lime'>" + (farmUnlocked) + "/4</span>";
		document.getElementById("farmingPatchPrice-bc").style.display = "none";
	}
	else
		document.getElementById("farming-unlocked-level-bc").innerHTML = (farmUnlocked) + "/4";
	
	var uniqueBCItems = ["hpEmblem3Absorbed","magicEmblem2Absorbed"];
	
	var hasUniqueItems = 0;
	
	for(var i = 0 ; i < uniqueBCItems.length; i++)
	{
		if(window[uniqueBCItems[i]] == 1)
			hasUniqueItems++;
	}
	
	if(hasUniqueItems == uniqueBCItems.length)
	{
		document.getElementById("uniques-items-level-bc").innerHTML = "<span style='color:lime'>" + (hasUniqueItems) + "/"+uniqueBCItems.length+"</span>";
	}
	else
		document.getElementById("uniques-items-level-bc").innerHTML = (hasUniqueItems) + "/"+uniqueBCItems.length;
	
	//enriched potions
	var testingFor = "";
	
	testingFor = "richSeedFinderPotion"; if(window[testingFor + "Unlocked"]) { document.getElementById('enriched-potion-locked-' + testingFor).style.display = "none"; document.getElementById('enriched-potion-unlocked-' + testingFor).style.display = ""}
	testingFor = "richPiratesPotion"; if(window[testingFor + "Unlocked"]) { document.getElementById('enriched-potion-locked-' + testingFor).style.display = "none"; document.getElementById('enriched-potion-unlocked-' + testingFor).style.display = ""}
	testingFor = "richGeodePotion"; if(window[testingFor + "Unlocked"]) { document.getElementById('enriched-potion-locked-' + testingFor).style.display = "none"; document.getElementById('enriched-potion-unlocked-' + testingFor).style.display = ""}
	testingFor = "richCombatPotion"; if(window[testingFor + "Unlocked"]) { document.getElementById('enriched-potion-locked-' + testingFor).style.display = "none"; document.getElementById('enriched-potion-unlocked-' + testingFor).style.display = ""}

	var totalBuffsOwned = getTotalBuffsOwned();
	if(totalBuffsOwned >= 8)
		document.getElementById("totalBuffsOwned-label").innerHTML = "<span style='color:lime'>" + (totalBuffsOwned) + "/"+8+"</span>";
	else
		document.getElementById("totalBuffsOwned-label").innerHTML = totalBuffsOwned + "/"+8;
	
}

function showShopItems(communityCenterLevel)
{
	var selector = "[data-shop-community="+communityCenterLevel+"]";
	var elementsFound = $(selector);
	for(var j = 0; j < elementsFound.length; j++)
	{
			elementsFound[j].style.display = "";
	}
	refreshShop();
}

function addCursorToAllOnclickElements()
{
	var selector = "[onclick]";
	var elementsFound = $(selector);
	for(var j = 0; j < elementsFound.length; j++)
	{
			elementsFound[j].style.cursor = "pointer";
	}
}

function refreshChangedItemSwitch(changedItem)
{
	
	//quest management
	
	if(changedItem.endsWith("Quest"))
	{
		

		refreshQuestsInProgressLabel();
		
		if(window[changedItem] > 0 || window[changedItem] == -1)
			document.getElementById("quest-button-" + changedItem).style.display = "";
		
		if(window[changedItem] == -1)
		{
			

		if(changedItem == "houseQuest")
			document.getElementById("bottom-nav-bar").style.display = "";
		if(window[changedItem + "2"] > 0 || window[changedItem + "2"] == -1 || window[changedItem + "3"] > 0 || window[changedItem + "3"] == -1) return;
			document.getElementById("quest-completed-" + changedItem).style.display = "";
		}
		
	}
	//end of quests
	if(changedItem.endsWith("Quest2"))
	{
		refreshQuestsInProgressLabel();
		
			if(window[changedItem] == 0) return;
			
			
			var oldQuestName = changedItem.substr(0, changedItem.length - 1);
			if(window[oldQuestName + "3"] > 0 || window[oldQuestName + "3"] == -1) return;
			
			document.getElementById("quest-completed-" + oldQuestName).style.display = "none";
			document.getElementById("quest-completed-" + changedItem).style.display = "";
			document.getElementById(oldQuestName + "-onclick-element").setAttribute("onclick","sendBytes('QUEST="+changedItem+"~0')")
			if(window[changedItem] == -1)
			{
				document.getElementById("quest-completed-" + oldQuestName).style.display = "";
				document.getElementById("quest-completed-" + oldQuestName).innerHTML = "Completed (2) "
				document.getElementById("quest-completed-" + changedItem).style.display = "none";
			}
	}
	
	if(changedItem.endsWith("Quest3"))
	{
		refreshQuestsInProgressLabel();
		
		if(window[changedItem] == 0) return;
		
		var oldQuestName = changedItem.substr(0, changedItem.length - 1);
	
		document.getElementById("quest-completed-" + oldQuestName).style.display = "none";
		document.getElementById("quest-completed-" + changedItem).style.display = "";
		
		document.getElementById(oldQuestName + "-onclick-element").setAttribute("onclick","sendBytes('QUEST="+changedItem+"~0')")
		if(window[changedItem] == -1)
		{
			document.getElementById("quest-completed-" + oldQuestName).style.display = "";
			document.getElementById("quest-completed-" + oldQuestName).innerHTML = "Completed (3)"
			document.getElementById("quest-completed-" + changedItem).style.display = "none";
		}
	}
	
	if(changedItem.endsWith("PotionUnlocked"))
	{
		refreshBloodShop();
	}
	
	if(changedItem.endsWith("CombatPotion"))
		firstLoadCombatSpellsAndPotionsIterfaceGlobal = true;
	
	if(changedItem.endsWith("TopBar"))
	{
		if(changedItem == "chatTopBar") return;
		
		if(window[changedItem] == 1)
			document.getElementById(changedItem).style.display = "";
		else
			document.getElementById(changedItem).style.display = "none";
	}
	if(changedItem.endsWith("RingOn"))
	{
		if(document.getElementById(changedItem + "-equiped") != null)
		{
			if(window[changedItem] == 1)
				document.getElementById(changedItem + "-equiped").style.display = "";
			else
				document.getElementById(changedItem + "-equiped").style.display = "none";
		}
	}
	
	
	if(changedItem.toLowerCase().endsWith("treeignore"))
	{
		if(window[changedItem] == 1)
			document.getElementById("lumberjack-ignore-" + changedItem).style.display = "";
		else
			document.getElementById("lumberjack-ignore-" + changedItem).style.display = "none";
	}
		
	if(changedItem.endsWith("PotionTimer"))
		refreshPotionTimers(changedItem);
	
	if(changedItem.endsWith("CombatPotionUsed") || changedItem.endsWith("SpellCooldown") || changedItem.endsWith("EnemyTimer"))
		refreshCombatPotionsAndSpells();

	if(changedItem.endsWith("PotionCooldown"))
		refreshPotionCooldowns(changedItem);
	if(changedItem.endsWith("Notification"))
		setNotification(window[changedItem], changedItem);
	if(blueOrbsGlobal.indexOf(changedItem) > -1)
		refreshBlueOrbsInfo();
	if(greenOrbsGlobal.indexOf(changedItem) > -1)
		refreshGreenOrbsInfo();
	
	switch(changedItem)
		{
			case "isMayor":
			if(isMayor == 1) showMayorMainButton();
			break;

			case "miningUnlocked":
				if(miningUnlocked > 0)
				{
					document.getElementById("menu-button-mining-unlock-label").style.display = "none";
					document.getElementById("menu-button-mining-level").innerHTML = "Level " + getLevel(miningXp);
					document.getElementById("menu-button-mining-xp-bar").style.display = "";
					document.getElementById("main-skill-button-crafting").style.display = ""; //make crafting button visible, but locked
					if(craftingUnlocked == 0) document.getElementById("globalLevel-status").innerHTML = 1;
				}
			break;
			case "craftingUnlocked":
				if(craftingUnlocked > 0)
				{
					document.getElementById("menu-button-crafting-unlock-label").style.display = "none";
					document.getElementById("menu-button-crafting-level").innerHTML = "Level " + getLevel(craftingXp);
					document.getElementById("menu-button-crafting-xp-bar").style.display = "";
					document.getElementById("main-skill-button-woodcutting").style.display = ""; //make woodcutting button visible, but locked
				}
			break;
			
		
			case "woodcuttingUnlocked":
				if(woodcuttingUnlocked > 0)
				{
					document.getElementById("menu-button-woodcutting-unlock-label").style.display = "none";
					document.getElementById("menu-button-woodcutting-level").innerHTML = "Level " + getLevel(woodcuttingXp);
					document.getElementById("menu-button-woodcutting-xp-bar").style.display = "";
					document.getElementById("main-skill-button-farming").style.display = ""; //make farming button visible, but locked
					document.getElementById("main-skill-button-brewing").style.display = ""; //make brewing button visible, but locked
					document.getElementById("main-skill-button-exploring").style.display = ""; //make exploring button visible, but locked
					document.getElementById("main-skill-button-cooking").style.display = ""; //make cooking button visible, but locked
				}
			break;
			
			case "rustySwordBought":
				if(rustySwordBought == 1) document.getElementById("explorer-combat-stats-label").style.display = "";
			break;
			case "farmingUnlocked":
				if(farmingUnlocked > 0)
				{
					document.getElementById("menu-button-farming-unlock-label").style.display = "none";
					document.getElementById("menu-button-farming-level").innerHTML = "Level " + getLevel(farmingXp);
					document.getElementById("menu-button-farming-xp-bar").style.display = "";
				}
			break;
			
			case "coinsWellWon":
				if(coinsWellWon > 0)
					document.getElementById("notification-coinsWellWon").style.display = "";
				else
					document.getElementById("notification-coinsWellWon").style.display = "none";
			break;
			
			case "bloodCrystalsWellWon":
				if(coinsWellWon > 0)
					document.getElementById("notification-bloodCrystalsWellWon").style.display = "";
				else
					document.getElementById("notification-bloodCrystalsWellWon").style.display = "none";
			break;
			
			case "ghostScanCombatPotionUsed":
				refreshMonsterImages();
			break;
			
			case "fightStartTimer":
				document.getElementById("fight-starts-in-div").innerHTML = "<b>Fight in: </b>" + window[changedItem];
				
				if(window[changedItem] == 0 && document.getElementById("fight-starts-in-div").style.display != "none")
					document.getElementById("fight-starts-in-div").style.display = "none";
				
				if(window[changedItem] > 0 && document.getElementById("fight-starts-in-div").style.display == "none")
					document.getElementById("fight-starts-in-div").style.display = "";
				
			break;
			
			case "profileSoundOff":
			refreshProfileDialogueData();
			break;
			
			case "shinyMonster":
				if(shinyMonster >= 1)
				{
					applyShinyGifMonster("img-tag-monster-shiny", true);
				}
					
				else
				{
					applyShinyGifMonster("img-tag-monster-shiny", false);
				}
			break;
			case "profileNotificationsOffPlanter":
			case "profileNotificationsOffRocket":
			case "profileNotificationsOffFurnace":
			case "profileNotificationsOffTrain":
			if(window[changedItem] == 0)
				document.getElementById(changedItem + "-check-img").src = "images/check.png";
			else
				document.getElementById(changedItem + "-check-img").src = "images/x.png";
			break;
			case "brewingUnlocked":
				if(brewingUnlocked > 0)
				{
					document.getElementById("menu-button-brewing-unlock-label").style.display = "none";
					document.getElementById("menu-button-brewing-level").innerHTML = "Level " + getLevel(brewingXp);
					document.getElementById("menu-button-brewing-xp-bar").style.display = "";
				}
			break;
			
			case "exploringUnlocked":
				if(exploringUnlocked > 0)
				{
					document.getElementById("menu-button-exploring-unlock-label").style.display = "none";
					document.getElementById("menu-button-exploring-level").innerHTML = "Level " + getLevel(exploringXp);
					document.getElementById("menu-button-exploring-xp-bar").style.display = "";
				}
			break;
			
			case "activePreset":
				refreshPresetIcons();
				refreshPresetIconsInCombat();
			break;
			
			case "mayorResourceElectricity":
			case "mayorResourceElectricityNeeded":
			case "mayorResourceWater":
			case "mayorResourceEducation":
			case "mayorResourceEducationNeeded":
			case "mayorResourceSecurity":
			case "mayorResourceSecurityNeeded":
			case "mayorResourceLuxury":
			case "mayorResourceLuxuryNeeded":
			case "mayorPollutionPercentage":
				refreshMayorRecourceRatings();
			break;
			
			case "cookingUnlocked":
				if(cookingUnlocked > 0)
				{
					document.getElementById("menu-button-cooking-unlock-label").style.display = "none";
					document.getElementById("menu-button-cooking-level").innerHTML = "Level " + getLevel(cookingXp);
					document.getElementById("menu-button-cooking-xp-bar").style.display = "";
				}
			break;
			
			
			case "miningXp":
					if(miningUnlocked > 0)
					{
						document.getElementById("menu-button-mining-level").innerHTML = "Level " + getLevel(miningXp);
						refreshXpBar("mining");
					}
			break;

			case "cookingXp":
					if(cookingUnlocked > 0)
					{
						document.getElementById("menu-button-cooking-level").innerHTML = "Level " + getLevel(cookingXp);
						refreshXpBar("cooking");
					}
			break;
			
			case "trainTimer":
				if(trainTimer > 1)
				{
					document.getElementById("train-timer").innerHTML = formatTime(trainTimer);
				}
				else if(trainTimer == 1)
				{
					document.getElementById("train-timer").innerHTML = "Collect";
				}
				else
					document.getElementById("train-timer").innerHTML = "Ready";
				
			break;
			
			case "rocketKm":
			case "rocketReturningTimer":
				if(rocketReturningTimer > 0)
				{
					document.getElementById("rocket-timer").innerHTML = "Landing on earth in " + formatTime(rocketReturningTimer);
					return;
				}
				if(rocketKm == 1)
					document.getElementById("rocket-timer").innerHTML = "Collect";
				else if(rocketKm == 0)
					document.getElementById("rocket-timer").innerHTML = "Ready";
				else if(rocketKm > 0)
				{
					var outputHtml = "";
					if(rocketReturning == 1)
						outputHtml = formatNumber(rocketKm) + " Km left (Returning)";
					else
						outputHtml = formatNumber(rocketKm) + " Km left";
					
					outputHtml += "<br />Average Velocity: " + formatNumber(rocketVelocity) + "km/s";
					
					document.getElementById("rocket-timer").innerHTML = outputHtml;
				}
					
					
			break;
			case "barRefineryTimer":
				if(barRefineryTimer > 1)
				{
					document.getElementById("goldBarRefinery-timer").innerHTML = formatTime(barRefineryTimer);
					document.getElementById("promethiumBarRefinery-timer").innerHTML = formatTime(barRefineryTimer);
				}
				else if(barRefineryTimer == 1)
				{
					if(promethiumBarRefinery > 0) document.getElementById("bar-refinery-img-tag").src = "images/promethiumBarRefinery.png";
					document.getElementById("goldBarRefinery-timer").innerHTML = "Collect";
					document.getElementById("promethiumBarRefinery-timer").innerHTML = "Collect";
				}
				else
				{
					if(promethiumBarRefinery > 0) document.getElementById("bar-refinery-img-tag").src = "images/promethiumBarRefinery.png";
					document.getElementById("goldBarRefinery-timer").innerHTML = "Ready";
					document.getElementById("promethiumBarRefinery-timer").innerHTML = "Ready";
				}
					
				
			break;
			
			case "lobsterCageActive":
			case "lobsterCageTimer":
				if(lobsterCageTimer > 0)
				{
					if(lobsterCageActive == 0)
						document.getElementById("lobsterCage-status").innerHTML = "Preparing traps: " + formatTime(lobsterCageTimer);
					else if(lobsterCageActive == 1)
						document.getElementById("lobsterCage-status").innerHTML = "Retrieving traps: " + formatTime(lobsterCageTimer);
				}
				else
				{
					if(lobsterCageActive == 0)
						document.getElementById("lobsterCage-status").innerHTML = "Inactive";
					else if(lobsterCageActive == 1)
						document.getElementById("lobsterCage-status").innerHTML = "Active";
				}
				
			break;
			case "magicEmblem1Absorbed":
				if(magicEmblem1Absorbed == 1)
					document.getElementById("blood-shop-magicEmblem-2").style.display = "";
			break;
			case "mineralNecklaceTimer":
				if(mineralNecklaceTimer > 0)
				{
					document.getElementById("mineralNecklace-timer").innerHTML = formatTime(mineralNecklaceTimer);
					document.getElementById("mineralNecklace-timer2").innerHTML = formatTime(mineralNecklaceTimer);
					
					if(mineralNecklaceWielder != 0 && mineralNecklaceWielder != "none")
					{
						document.getElementById("notification-mineralNecklaceTimer").innerHTML = "<img src='images/mineralNecklace_light.png' class='img-small' /> " + formatTime(mineralNecklaceTimer);
						document.getElementById("notification-mineralNecklaceTimer").style.display = "";
					}
					else
						document.getElementById("notification-mineralNecklaceTimer").style.display = "none";
				}
				else
				{
					document.getElementById("mineralNecklace-timer").innerHTML = "Uncharged";
					document.getElementById("mineralNecklace-timer2").innerHTML = "UNCHARGED";
				}
			break;
			

			
			case "mineralNecklaceWielder":
			
			document.getElementById("dialogue-mineralNecklace-miners-equipped-label").style.display = "none";
			document.getElementById("dialogue-mineralNecklace-gemFinder-equipped-label").style.display = "none";
			document.getElementById("dialogue-mineralNecklace-lumberjack-equipped-label").style.display = "none";
			document.getElementById("dialogue-mineralNecklace-farmer-equipped-label").style.display = "none";
			document.getElementById("dialogue-mineralNecklace-chef-equipped-label").style.display = "none";
			document.getElementById("mineralNecklace-paused").style.display = "";
			if(mineralNecklaceWielder == 0 || mineralNecklaceWielder == "none")
			{
				document.getElementById("mineralNecklace-equipped").innerHTML = "Unequipped";
				document.getElementById("notification-mineralNecklaceTimer").style.display = "none";
			}
			else
			{
				document.getElementById("mineralNecklace-equipped").innerHTML = getItemName(mineralNecklaceWielder);
				document.getElementById("dialogue-mineralNecklace-"+mineralNecklaceWielder+"-equipped-label").style.display = "";
				document.getElementById("mineralNecklace-paused").style.display = "none";
			}
			break;
			
			case "ancientLavaPlant":
			if(ancientLavaPlant == 1)
				document.getElementById("item-box-lavaPlant").style.display = "none";
			
			break;
			case "mayorTimer":
			if(mayorTimer > 0)
			{
				document.getElementById("notification-mayorTimer").style.display = "";
				document.getElementById("notification-mayorTimer-value").innerHTML = formatTime(mayorTimer);
				document.getElementById("notification-mayorTimer-img").src = "images/" + mayorTimerItem + ".png";
			}
			else
				document.getElementById("notification-mayorTimer").style.display = "none";
			break;
			case "rowBoatTimer":
			case "trawlerTimer":
			case "canoeBoatTimer":
			case "trawlerTimer":
			case "steamBoatTimer":
				if(window[changedItem] > 1)
					document.getElementById(changedItem + "-timer").innerHTML = formatTime(window[changedItem]);
				else if(window[changedItem] == 1)
					document.getElementById(changedItem + "-timer").innerHTML = "Collect";
				else
					document.getElementById(changedItem + "-timer").innerHTML = "Ready";
			break;
			
			case "sailBoatTimer":
			case "currentWind":
				if(sailBoatTimer > 1)
					document.getElementById("sailBoatTimer" + "-timer").innerHTML = formatTime(sailBoatTimer) + "<br /><img src='images/windIcon.png' class='img-tiny' /> Wind: " + getCurrentWindLevel(sentWind) + " <img src='images/locked.png' class='img-tiny' />";
				else if(sailBoatTimer == 1)
					document.getElementById("sailBoatTimer" + "-timer").innerHTML = "Collect<br /><img src='images/windIcon.png' class='img-tiny' /> Wind: " + getCurrentWindLevel(sentWind) + " <img src='images/locked.png' class='img-tiny' />";
				else
					document.getElementById("sailBoatTimer" + "-timer").innerHTML = "Ready<br /><img src='images/windIcon.png' class='img-tiny' /> Wind: " + getCurrentWindLevel(currentWind);
			
				if(currentWind == 3 && sailBoat == 1 && sailBoatTimer == 0)
					document.getElementById("notification-veryHighWindNotification").style.display = "";
				else
					document.getElementById("notification-veryHighWindNotification").style.display = "none";
				
			break;
			case "playtime":
				document.getElementById("playtime-label").innerHTML = formatTime(playtime);
			break;
			
			case "teleportSpellCooldown":
				if(teleportSpellCooldown > 0)
				{
					document.getElementById("explorer-teleportCd-label").style.display = "";
					document.getElementById("explorer-teleportCd-label-value").innerHTML = formatTime(teleportSpellCooldown) + "<br />";
				}
				else
					document.getElementById("explorer-teleportCd-label").style.display = "none";
			break;
			
			case "disableTradeRequests":
			if(disableTradeRequests == 1) document.getElementById("recieveTradeRequests-td").innerHTML = "OFF"; else document.getElementById("recieveTradeRequests-td").innerHTML = "ON";
			break;
			case "sapphireBrewingKit":
			case "emeraldBrewingKit":
			case "rubyBrewingKit":
			case "diamondBrewingKit":
				refreshBrewingTimerDisplayers();
			break;
	
			case "fightDone":
				if(fightDone == 0)
					document.getElementById('fight-label').style.color = 'lime';
				else
					document.getElementById('fight-label').style.color = '#ff6666';
			break;
			case "profileDialogueOffFarmer":
			case "profileDialogueOffLumberjack":
			case "profileDialogueOffExploring":
			case "profileDialogueOffMonsters":
			openProfileLootDialogueToggles();
			break;
			
			case "robotMinerTimer":
				if(robotMinerTimer == 0)
				{
					document.getElementById("robotMiner-timer").innerHTML = "Ready";
					document.getElementById("sapphireRobotMiner-timer").innerHTML = "Ready";
					document.getElementById("emeraldRobotMiner-timer").innerHTML = "Ready";
					document.getElementById("rubyRobotMiner-timer").innerHTML = "Ready";
					document.getElementById("diamondRobotMiner-timer").innerHTML = "Ready";
					document.getElementById("bloodDiamondRobotMiner-timer").innerHTML = "Ready";
					document.getElementById("notification-robotMinerNotification").style.display = "none";
				}
				else if(robotMinerTimer == 1)
				{
					document.getElementById("robotMiner-timer").innerHTML = "Collect";
					document.getElementById("sapphireRobotMiner-timer").innerHTML = "Collect";
					document.getElementById("emeraldRobotMiner-timer").innerHTML = "Collect";
					document.getElementById("rubyRobotMiner-timer").innerHTML = "Collect";
					document.getElementById("diamondRobotMiner-timer").innerHTML = "Collect";
					document.getElementById("bloodDiamondRobotMiner-timer").innerHTML = "Collect";
					document.getElementById("notification-robotMinerNotification").style.display = "";
				}
				else if(robotMinerTimer > 1)
				{
					document.getElementById("robotMiner-timer").innerHTML = formatTime(robotMinerTimer);
					document.getElementById("sapphireRobotMiner-timer").innerHTML = formatTime(robotMinerTimer);
					document.getElementById("emeraldRobotMiner-timer").innerHTML = formatTime(robotMinerTimer);
					document.getElementById("rubyRobotMiner-timer").innerHTML = formatTime(robotMinerTimer);
					document.getElementById("diamondRobotMiner-timer").innerHTML = formatTime(robotMinerTimer);
					document.getElementById("bloodDiamondRobotMiner-timer").innerHTML = formatTime(robotMinerTimer);
				}
			break;
			case "miners":
			if(miners > 0)
			document.getElementById("item-img-miners").src = "images/miners.gif";
			break;
		
			case "lavaPlantPipe4":
			if(lavaPlantPipe4 == 1)
			{
				document.getElementById("lavaPlant-installed-label").style.display = 'none';
				document.getElementById("lavaPlant-oil").style.display = '';
				document.getElementById("lavaPlant-lava").style.display = '';
				document.getElementById("lavaPlant-status").style.display = '';
				document.getElementById("lavaPlant-status").innerHTML = "<br />Status: Off"; 
			}
			break;
			
			case "ancientLavaPlantPipe4":
			if(ancientLavaPlantPipe4 == 1)
			{
				document.getElementById("ancientLavaPlant-installed-label").style.display = 'none';
				document.getElementById("ancientLavaPlant-oil").style.display = '';
				document.getElementById("ancientLavaPlant-lava").style.display = '';
				document.getElementById("ancientLavaPlant-status").style.display = '';
				document.getElementById("ancientLavaPlant-status").innerHTML = "<br />Status: Off"; 
			}
			break;
			
			case "lavaPlantOn":
				if(lavaPlantOn == 1)
				{
					document.getElementById("lavaPlant-status").innerHTML = "<br />Status: On";
					document.getElementById("ancientLavaPlant-status").innerHTML = "<br />Status: On";
				}
				else
				{
					document.getElementById("lavaPlant-status").innerHTML = "<br />Status: Off"; 
					document.getElementById("ancientLavaPlant-status").innerHTML = "<br />Status: Off"; 
				}					
			break;
			
			
			case "hideBrewingTimers":
				refreshShowBrewingTimers();
			break;
			case "dailyMissionTimer":
			if(document.getElementById("dailyTimer-span") != null)
			document.getElementById("dailyTimer-span").innerHTML = formatTime(dailyMissionTimer);
			break;
			
			case "dailyMissionTracker":
				if(document.getElementById("dailyTracker-span") != null && lastTabId == "missions")
				if(dailyMissionTracker > 0)
					document.getElementById("dailyTracker-span").innerHTML = " (" + formatNumber(dailyMissionTracker) + ")";
			break;
			
			case "artifactPotionActive":
				if(artifactPotionActive > 0)
				{
					document.getElementById("explorer-artifactPotions").style.display = "";
					document.getElementById("explorer-artifactPotions").innerHTML = "<br /><img src='images/artifactPotion.png' class='img-tiny' /> " +  artifactPotionActive + " Artifact potions";
				}
				else
					document.getElementById("explorer-artifactPotions").style.display = "none";
			break;
			case "fertilizeSoil1":
			case "fertilizeSoil2":
			case "fertilizeSoil3":
			case "fertilizeSoil4":
			case "fertilizeSoil5":
			case "fertilizeSoil6":
			refreshPatchIconOverlay();
			refreshFertilizeFarmingPotionInterface();
			break;
			
			case "furnacePercentage":
				refreshFurnaceNotification(furnacePercentage);
				if(furnacePercentage > 0)
				{
					if(!document.getElementById("item-img-" + getBestFurnace() != null))
					if(!document.getElementById("item-img-" + getBestFurnace()).src.endsWith("images/"+getBestFurnace()+"On.gif"))
					document.getElementById("item-img-" + getBestFurnace()).src = "images/"+getBestFurnace()+"On.gif"
				}
				else
				{
					if(!document.getElementById("item-img-" + getBestFurnace() != null))
					if(!document.getElementById("item-img-" + getBestFurnace()).src.endsWith("images/"+getBestFurnace()+".png"))
					document.getElementById("item-img-" + getBestFurnace()).src = "images/"+getBestFurnace()+".png"
				}
			break;
			
			case "titaniumCharcoalFoundry":
				if(titaniumCharcoalFoundry > 0)
				{
					document.getElementById("item-box-charcoalFoundry").style.display = "none";
					document.getElementById("notification-charcoalFoundryPercentage-image").src = "images/titaniumCharcoalFoundry_light.png";
				}
					
			break;
			
			case "waterPipingIssue":
				if(waterPipingIssue > 0)
				{
					document.getElementById("waterPipingIssue-label").style.display = "";
				}
				else
					document.getElementById("waterPipingIssue-label").style.display = "none";
			break;
			
			case "charcoalFoundryPercentage":
				refreshCharcoalFoundryNotification(charcoalFoundryPercentage);
			break;
			
			case "goblinCousin":
			case "explorerCooldown":

				if(explorerCooldown > 0)
				{
					document.getElementById("explorer-cooldown-label").innerHTML = formatTime(explorerCooldown) + " ("+getItemName(exploringArea)+")";
					document.getElementById("exlorer-cooldown-span").style.display = "";
					document.getElementById('notification-exploringNotification').style.display = "none";
				}
				else
				{
					document.getElementById("exlorer-cooldown-span").style.display = "none";
					if(exploringUnlocked == 1)document.getElementById('notification-exploringNotification').style.display = "";
				}
			break;
			
			
			
			case "autoTickHealOn":
			if(document.getElementById("autoTickHeal-label") == null) return;
			if(autoTickHealOn == 0)
			{
				document.getElementById("autoTickHeal-label").style.color = "red";
				document.getElementById("autoTickHeal-label").innerHTML = "OFF";
				document.getElementById("dialogue-autoTickHeal-on").innerHTML = "OFF";
				document.getElementById("dialogue-autoTickHeal-on-check").src = "images/x.png";
				document.getElementById("dialogue-autoTickHeal-selectPriority-Area").style.display = "none";
			}
			else
			{
				document.getElementById("autoTickHeal-label").style.color = "lime";
				document.getElementById("autoTickHeal-label").innerHTML = "ON";
				document.getElementById("dialogue-autoTickHeal-on").innerHTML = "ON";
				document.getElementById("dialogue-autoTickHeal-on-check").src = "images/check.png";
				document.getElementById("dialogue-autoTickHeal-selectPriority-Area").style.display = "";
			}
			break;
			
			case "autoTickHealPriority":
				refreshAutoTickHealPriorityTable();
			break;
			case "missions":
			case "dailyMissions":
			if(missions == 1)
			{
				document.getElementById("main-button-missions").style.display = "";
				if(brewingUnlocked == 0) document.getElementById("unlock-brewing-req2").style.textDecoration = "line-through";
				
				document.getElementById("missions-completed-area").style.display = "";
				document.getElementById("missions-completed-area").innerHTML = "<hr /> Completed " + (missionId - 1);
			}
			
			refreshShop();
			break;
			
			case "refinedGoldBarsBought":
			case "teleportSpellScrollBought":
			refreshShop();
			break;
			
			case "bloodCrystalsTotal":
			if(bloodCrystalsTotal > 0)
				document.getElementById("top-bar-bc").style.display = "";
			
			break;
			case "piratesNavigation":
			refreshShop();
			document.getElementById("piratesNavigation-label").style.display = "";
			break;
			
			case "titaniumSpyglass":
				if(titaniumSpyglass > 0)
				document.getElementById("pirates-greenmap-label").style.display = "";
			break;
			case "magicEmblem2Bought":
			case "hpEmblem3Bought":
			case "learnPromethiumSmeltingScroll":
			case "learnTitaniumSmeltingScroll":
			case "learnAncientSmeltingScroll":
			refreshShop();
			break;
			
			case "missionReward":
			if(missionReward > 0)
			{
				document.getElementById("notification-missionReward").style.display = "";
			}
			else
				document.getElementById("notification-missionReward").style.display = "none";
			break;
			
			case "oil":
				//if(lastTabId == "crafting")
				{
					if(oil > 0)
						document.getElementById("oil-display-in-crafting").style.display = "";
				}
			break;
			case "richGeodePotionBought":
			refreshShop();
			break;
			
			case "gloveSlotUnlocked":
				document.getElementById("equipement-slot-glove").style.display = "";
			break;
			case "bootsSlotUnlocked":
				document.getElementById("equipement-slot-boots").style.display = "";
			break;
			
			case "head":
			case "amulet":
			case "weapon":
			case "cape":
			case "body":
			case "shield":
			case "leg":
			case "glove":
			case "boots":
				refreshSlots(changedItem);
				refreshHeroGraphics();
			break;
			
				if(exploringUnlocked > 0)
				{
					document.getElementById("menu-button-exploring-level").innerHTML = "Level " + getLevel(exploringXp);
					document.getElementById("menu-button-exploring-xp-bar").style.display = "";
					document.getElementById("main-skill-button-cooking").style.display = ""; //make cooking button visible, but locked
				}
			break;
			
			case "wellTimer":
				var currentTime = new Date().getTime();
				if(wellTimer > 0)
				{
					document.getElementById("coins-well-time-left").innerHTML = formatTime(wellTimer);
					document.getElementById("bloodCrystals-well-time-left").innerHTML = formatTime(wellTimer);
				}
				else
				{
					document.getElementById("coins-well-time-left").innerHTML = "Currently Picking Winner...";
					document.getElementById("bloodCrystals-well-time-left").innerHTML = "Currently Picking Winner...";
				}
			break;
			
			case "chefTimer":
				if(chefTimer > 1) document.getElementById("chef-timer").innerHTML = formatTime(chefTimer);
				if(chefTimer == 1) 
				{
					document.getElementById("chef-timer").innerHTML = "<span style='color:lime'>Available</span>";
					document.getElementById("notification-chefNotification").style.display = "";
				}
				else
					document.getElementById("notification-chefNotification").style.display = "none";
			break;
			case "drillBits":
			case "crusherContainers":
			case "giantDrillHeads":
			case "roadHeadersSpikes":
			case "excavatorsSawBlades":
				if(window[changedItem] == 1)
				{
				document.getElementById(changedItem + "-label").style.display = "";
				refreshShop();
				}
			break;
			
			case "treeRootsPotionActive":
			if(treeRootsPotionActiveTotal > 0)
			{
				document.getElementById("tree-root-potions-label-1").style.display = "";
				document.getElementById("tree-root-potions-label-2").style.display = "";
				document.getElementById("tree-root-potions-label-3").style.display = "";
				document.getElementById("tree-root-potions-label-4").style.display = "";
				document.getElementById("tree-root-potions-label-5").style.display = "";
				document.getElementById("tree-root-potions-label-6").style.display = "";
			}
			break;
			case "ghostScanAmuletBought":
			case "trawler":
			refreshShop();
			break;
			
			case "boughtTreasureChest":
			case "boughtHpEmblem5":
			case "boughtMagicEmblem3Uncharged":
			case "toolUpgrade":
			refreshShop();
			break;
			
			case "witchesPotion2Cd":
			if(witchesPotion2Cd > 0)
			{
				document.getElementById("witches-potion-2-caulrdon-cd").style.display = "";
				document.getElementById("witches-potion-2-caulrdon-cd").innerHTML = "<br /><b>Cooldown:</b> " + formatTime(witchesPotion2Cd);
			}
			else if(witchesPotion2Cd == 0) 
				document.getElementById("witches-potion-2-caulrdon-cd").style.display = "none";
			break;
			case "rover":
				if(rover == 1)
				document.getElementById("roverActive-label").style.display = "";
			break;
			
			case "satelliteOnRocket":
				if(satelliteOnRocket == 1)
				{
					document.getElementById("satelliteOnRocket-label").style.display = "";
				}
				else
					document.getElementById("satelliteOnRocket-label").style.display = "none";
			break;
			case "monsterName":
				if(lastTabId == "combat" && (monsterName == "none" || monsterName == 0))
				{
					//do nothing
					break;
				}
				else
				{
					if(monsterName == "none" || monsterName == 0)
						document.getElementById("img-tag-monster").src = "images/empty100_100.png";
					else
						refreshMonsterImages();
				}
			break;
		
			case "tradingPostOffer":
				if(tradingPostOffer == 1)
					document.getElementById('trading-add-post-success-area').style.display = "";
				else
					document.getElementById('trading-add-post-success-area').style.display = "none";
			break;
			
			case "eventName":
			if(eventName != "none")
			{
				document.getElementById("main-button-event").style.display = "";
				document.getElementById("event-button-img").src = "images/"+eventName+"Event.png";
				document.getElementById("tab-event-img").src = "images/"+eventName+"Event.png";
			}
			else
			{
				document.getElementById("main-button-event").style.display = "none";
			}
			break;
			
			
			case "eventStatus":
			if(eventStatus == "coming")
			{
				document.getElementById("event-status").innerHTML = "On its way";
				document.getElementById("tab-event-title-timer").innerHTML = "Event starts in:";
				document.getElementById('notification-eventFullyActiveNotification').style.display = "none";
			}
			else if(eventStatus == "active")
			{
				document.getElementById("event-status").innerHTML = "Active";
				document.getElementById("tab-event-title-timer").innerHTML = "Percentage left:";
				document.getElementById("event-button-img").src = "images/"+eventName+"Event.png";
				document.getElementById("tab-event-img").src = "images/"+eventName+"Event.png";
				document.getElementById('notification-eventFullyActiveNotification').style.display = "none";
			}
			else if(eventStatus == "fullActive")
			{
				document.getElementById("event-status").innerHTML = "Glowing";
				document.getElementById("event-button-img").src = "images/"+eventName+"ActionEvent.png";
				document.getElementById("tab-event-img").src = "images/"+eventName+"ActionEvent.png";
				shake("tab-event-img");
				shake("event-button-img");
				document.getElementById("eventFullyActiveNotification-img").src = "images/"+eventName+"Event.png";
				document.getElementById('notification-eventFullyActiveNotification').style.display = "";
			}
			else if(eventStatus == "idle")
			{
				document.getElementById('notification-eventFullyActiveNotification').style.display = "none";
				document.getElementById("event-status").innerHTML = "Finished";
			}
			break;
			
			case "bmHauntedMansionBossFlag":
			if(bmHauntedMansionBossFlag > 0)
				document.getElementById("haunted-painting-letters").style.display = "";
			
			break;
			
			case "playerMarketSoldItemNotif":
			if(playerMarketSoldItemNotif > 0)
				document.getElementById("notification-playerMarketNotification").style.display = "";
			else
				document.getElementById("notification-playerMarketNotification").style.display = "none";
			break;
			case "eventPerc":
			case "eventTimer":
			{
				if(eventStatus == "coming")
				{
					document.getElementById("event-timer").innerHTML = formatTime(eventTimer);
					document.getElementById("tab-event-timer").innerHTML = formatTime(eventTimer);
				}
				else
				{
					document.getElementById("event-timer").innerHTML = eventPerc + "%";
					document.getElementById("tab-event-timer").innerHTML = eventPerc + "%";
				}
				
				if(eventPerc > 0)
				{
					document.getElementById("eventPercNotification-img").src = "images/"+eventName+"Event.png";
					document.getElementById("notification-eventPercNotification").style.display = "";
					document.getElementById("eventPercNotification-span").innerHTML = eventPerc + "%";
				}
				else
					document.getElementById("notification-eventPercNotification").style.display = "none";
			}
			break;
			

			
			case "bait":
			case "superBait":
				if(bait > 0 || superBait > 0)
				{
					document.getElementById("fishing-rod-requires-bait-1").style.display = "none";
					document.getElementById("fishing-rod-requires-bait-2").style.display = "none";
					document.getElementById("fishing-rod-requires-bait-3").style.display = "none";
					document.getElementById("fishing-rod-requires-bait-4").style.display = "none";
					document.getElementById("fishing-rod-requires-bait-5").style.display = "none";
					document.getElementById("fishing-rod-requires-bait-6").style.display = "none";
				}
				else
				{
					document.getElementById("fishing-rod-requires-bait-1").style.display = "";
					document.getElementById("fishing-rod-requires-bait-2").style.display = "";
					document.getElementById("fishing-rod-requires-bait-3").style.display = "";
					document.getElementById("fishing-rod-requires-bait-4").style.display = "";
					document.getElementById("fishing-rod-requires-bait-5").style.display = "";
					document.getElementById("fishing-rod-requires-bait-6").style.display = "";
				}
			break;

			case "waterFilteringMove":
			if(waterFilteringMove == 1)
			{
				document.getElementById("item-img-waterFilteringPlant").src = "images/waterFilteringMove.png";
				document.getElementById("water-filtering-plant-L").innerHTML = "250,000";
			}
			break;
			
		
			
			case "drillsOn":
				if(drillsOn > 0)
					document.getElementById("item-img-drills").src = "images/drills.gif";
				else
					document.getElementById("item-img-drills").src = "images/drills.png";
			break;
			
			case "crushersOn":
				if(crushersOn > 0)
					document.getElementById("item-img-crushers").src = "images/crushers.gif";
				else
					document.getElementById("item-img-crushers").src = "images/crushers.png";
			break;
			
			case "giantDrillsOn":
				if(giantDrillsOn > 0)
					document.getElementById("item-img-giantDrills").src = "images/giantDrills.gif";
				else
					document.getElementById("item-img-giantDrills").src = "images/giantDrills.png";
			break;
			
			case "roadHeadersOn":
				if(roadHeadersOn > 0)
					document.getElementById("item-img-roadHeaders").src = "images/roadHeaders.gif";
				else
					document.getElementById("item-img-roadHeaders").src = "images/roadHeaders.png";
			break;
			
			case "excavatorsOn":
				if(excavatorsOn > 0)
					document.getElementById("item-img-excavators").src = "images/excavators.gif";
				else
					document.getElementById("item-img-excavators").src = "images/excavators.png";
			break; 
			
			case "giantExcavatorsOn":
				if(giantExcavatorsOn > 0)
					document.getElementById("item-img-giantExcavators").src = "images/giantExcavators.gif";
				else
					document.getElementById("item-img-giantExcavators").src = "images/giantExcavators.png";
			break; 
			
			case "bloodCrystalsTradable":
			if(bloodCrystalsTradable > 0) document.getElementById("tradingPost-tradableBloodCrystals").style.display = "";
			else document.getElementById("tradingPost-tradableBloodCrystals").style.display = "none";
			break;
			
			case "mayorUniqueBookKeeping":
			if(mayorUniqueBookKeeping == 1)
				document.getElementById("mayorsBookKeeping-label").style.display = "";
			break;
			case "cleanEnergyOn":
			case "efficientWaterPipesOn":
			case "taxesOn":
			case "medicareOn":
			case "megaphoneOn":
			case "promoteEducationOn":
			case "electricityBoostOn":
			case "policeBoostOn":
				if(window[changedItem] == 1)
				{
					document.getElementById("mayor-service-" + changedItem).src = "images/check.png";
				}
				else
				{
					document.getElementById("mayor-service-" + changedItem).src = "images/x.png";
				}
				if(changedItem == "efficientWaterPipesOn")
					document.getElementById('waterPiping-volume-label').innerHTML = "<img src='images/mayorWaterResource.png' class='img-tiny' /> Volume: " + formatNumber(getVolumeFromWaterPipes());
			break;
			
			case "waterPiping":
			document.getElementById('waterPiping-volume-label').innerHTML = "<img src='images/mayorWaterResource.png' class='img-tiny' /> Volume: " + formatNumber(getVolumeFromWaterPipes());
			break;
			
			case "fishingHook":
			case "unlockWoodcuttingPatchPrice":
			case "unlockFarmingPatchPrice":
			case "capacityLevelPrice":
			case "timeMachine":
				refreshShop();
			break;
			
			case "goblinCousinGear":
				if(goblinCousinGear == 1)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/bearFurBody.png' class='img-tiny' /> " + "Minimal protection";
				}
				if(goblinCousinGear == 2)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/lavaSnakeskinBody.png' class='img-tiny' /> " + "Bad protection";
				}
				if(goblinCousinGear == 3)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/ghostScanAmulet.png' class='img-tiny' /> " + "Below average protection";
				}
				if(goblinCousinGear == 4)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/lizardskinBody.png' class='img-tiny' /> " + "OK protection";
				}
				if(goblinCousinGear == 5)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/oxygenAmulet.png' class='img-tiny' /> " + "Decent protection";
				}
				if(goblinCousinGear == 6)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/elephantBody.png' class='img-tiny' /> " + "Satisfied protection";
				}
				if(goblinCousinGear == 7)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/promethiumBody.png' class='img-tiny' /> " + "Good protection";
				}
				if(goblinCousinGear == 8)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/titaniumBody.png' class='img-tiny' /> " + "Great protection";
				}
				if(goblinCousinGear == 9)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/enchantedScythe.gif' class='img-tiny' /> " + "Super protection";
				}
				if(goblinCousinGear == 10)
				{
					document.getElementById("goblinCousin-armour").innerHTML = "<img src='images/tridentSoldierHelmet.png' class='img-tiny' /> " + "Perfect protection";
				}
			break;
			
			case "threeHpCombatPotions":
			refreshShop();
			break;
			case "treeShiny1":
			case "treeShiny2":
			case "treeShiny3":
			case "treeShiny4":
			case "treeShiny5":
			case "treeShiny6":
				var treeId = changedItem.substr(changedItem.length - 1, changedItem.length)
				if(window[changedItem] == 1)
				{
					
					applyShinyGif("tree-thumbnail-img-" + treeId, true)
				}
				else
				{
					applyShinyGif("tree-thumbnail-img-" + treeId, false)
				}
			break;
			case "explorer":
				refreshShop();
				document.getElementById("item-img-" + changedItem).src = "images/" + heroGender + "Explorer.png";
			break;
			
			case "heroGender":
				document.getElementById("explore-tr").src = "images/" + heroGender + "Explorer.png";
			break;
	
			
			case "exploringResearchLevel":
			case "miningResearchLevel":
			case "brewingResearchLevel":
			case "farmingResearchLevel":
			case "woodcuttingResearchLevel":
			case "craftingResearchLevel":
			case "cookingResearchLevel":
				if(window[changedItem] >= 2)
				{
					document.getElementById(changedItem + "-perks-td-btn").style.display = "";
				}
				
				if(craftingResearchLevel >= 2)
				{
					document.getElementById("bronzeBars-sell-price").innerHTML = formatNumber(getItemPrice('bronzeBars'));
					document.getElementById("ironBars-sell-price").innerHTML = formatNumber(getItemPrice('ironBars'));
					document.getElementById("silverBars-sell-price").innerHTML = formatNumber(getItemPrice('silverBars'));
					document.getElementById("goldBars-sell-price").innerHTML = formatNumber(getItemPrice('goldBars'));
					document.getElementById("promethiumBars-sell-price").innerHTML = formatNumber(getItemPrice('promethiumBars'));
					document.getElementById("titaniumBars-sell-price").innerHTML = formatNumber(getItemPrice('titaniumBars'));
					document.getElementById("ancientOreBars-sell-price").innerHTML = formatNumber(getItemPrice('ancientOreBars'));
				}
				
				if(woodcuttingResearchLevel >= 3)
				{
					document.getElementById("treeRoots-sell-price").innerHTML = formatNumber(getItemPrice('treeRoots'));
				}

					
			break;
			case "researcher":
				if(researcher > 0)
				{
					document.getElementById("main-button-researcher-td-1").style.display = "";
					document.getElementById("main-button-researcher-td-2").style.display = "";
					document.getElementById("shop-researcher").style.display = "none";
					refreshShop();
				}
			break;
			case "researcherTimer":
				if(researcherTimer > 1)
				{
					document.getElementById("researcher-status-1").innerHTML = "<img class='img-tiny' src='images/"+researcherSkillChosen+"Skill_white.png' /> " + formatTime(researcherTimer);
					document.getElementById("researcherTimer-2").innerHTML = "<img class='img-small-medium' src='images/"+researcherSkillChosen+"Skill_white.png' /> " + formatTime(researcherTimer);
					document.getElementById("researcherTimer-2-div").style.display = "";
					
				}
				else if(researcherTimer == 1)
				{
					document.getElementById("researcher-status-1").innerHTML = "<img class='img-tiny' src='images/"+researcherSkillChosen+"Skill_white.png' /> <span style='color:lime'>DONE</span>";
					document.getElementById("researcherTimer-2-div").style.display = "";
					document.getElementById("researcherTimer-2").innerHTML = "<img class='img-small-medium' src='images/"+researcherSkillChosen+"Skill_white.png' /> " + "<span style='color:lime'>DONE<br /><br /><img src='images/arrowRight.gif' class='img-small' /> <i style='color:orange;font-size:10pt'>Click to Complete</i></span>";
				}
				else if(researcherTimer == 0)
				{
					document.getElementById("researcher-status-1").innerHTML = "IDLE";
					document.getElementById("researcherTimer-2-div").style.display = "none";
				}
			break;
			
			case "mayorRating":
				if(mayorRating == 0 || mayorRating == "bad")
					document.getElementById("mayor-manage-label").style.color = "red";
				else if(mayorRating == "medium")
					document.getElementById("mayor-manage-label").style.color = "yellow";
				else if(mayorRating == "good")
					document.getElementById("mayor-manage-label").style.color = "lime";
				else if(mayorRating == "great")
					document.getElementById("mayor-manage-label").style.color = "lime";
				else if(mayorRating == "perfect")
					document.getElementById("mayor-manage-label").style.color = "cyan";
				
				refreshMayorTab();
			break;
			
			case "cityWallsOff":
				refreshMayorTab();
			break;
			
			case "bloodShop":
				if(bloodShop >= 2)
					document.getElementById("buy-blood-crystals-top-btn").style.display = "";
				
					refreshShop();
				
			break;
			case "minerCost":
			case "piratesCost":
			case "stoneFurnace":
			case "farmer":
			case "clickedMiner":
					refreshShop();
					if(stoneFurnace > 0 && craftingUnlocked == 0 && clickedMiner == 1) document.getElementById("menu-button-crafting-unlock-label").style.display = "";
					if(stoneFurnace > 0 && craftingUnlocked == 0) document.getElementById("unlock-crafting-req1").style.textDecoration = "line-through";
					if(clickedMiner > 0 && craftingUnlocked == 0) document.getElementById("unlock-crafting-req2").style.textDecoration = "line-through";
						
			break;
			
			
			case "gemGoblinItem1Amount":
			case "gemGoblinItem2Amount":
			case "gemGoblinItem3Amount":
				refreshGemGoblinShop();
			break;
			
			break;
			
			case "lumberjack":
			if(lumberjack > 0)
			{
				document.getElementById("lumberjack-message-ignore-trees").style.display = "";
				refreshShop();
			}
			break;
			case "craftingXp":
					if(miningUnlocked > 0)
					{
						document.getElementById("menu-button-crafting-level").innerHTML = "Level " + getLevel(craftingXp);
						refreshXpBar("crafting");
					}
			break;
			
			
			case "woodcuttingXp":
					if(woodcuttingUnlocked > 0)
					{
						document.getElementById("menu-button-woodcutting-level").innerHTML = "Level " + getLevel(woodcuttingXp);
						refreshXpBar("woodcutting");
					}
			break;
			
			case "bloodMoonTimer":
			if(currentScreenAreaGlobal == "bloodMoon")
			{
					if(bloodMoonTimer > 0)
					{
						document.getElementById("exploring-area-background-img").src = "images/bloodMoonActive.png";
						
					}
					else
					{
						document.getElementById("exploring-area-background-img").src = "images/bloodMoon.png";
						
					}
			}
			
			if(bloodMoonTimer > 0)
			{
				document.getElementById("notification-bloodMoon").style.display = "";
				document.getElementById("notification-bloodMoon-value").innerHTML = formatTime(bloodMoonTimer);
				document.getElementById("exploring-areas-button-img").src = "images/bloodMoonIcon.png";
			}
			else
			{
				document.getElementById("notification-bloodMoon").style.display = "none";
				document.getElementById("exploring-areas-button-img").src = "images/exploringSkill.png";
			}
			
		
			break;
			case "equipedArrows":
				document.getElementById("arrows-equiped").style.display = "none";
				document.getElementById("fireArrows-equiped").style.display = "none";
				document.getElementById("iceArrows-equiped").style.display = "none";
				document.getElementById("poisonArrows-equiped").style.display = "none";
				document.getElementById("superArrows-equiped").style.display = "none";
				document.getElementById("superPoisonArrows-equiped").style.display = "none";
				document.getElementById("bow-arrow-type").style.innerHTML = "Arrow: None";
				document.getElementById("superBow-arrow-type").style.innerHTML = "Arrow: None";
				document.getElementById("enchantedSuperBow-arrow-type").style.innerHTML = "Arrow: None";
				
				if(equipedArrows != 0 && equipedArrows != "none")
				{	
					document.getElementById(equipedArrows + "-equiped").style.display = "";
					document.getElementById("bow-arrow-type").innerHTML = "<img src='images/"+equipedArrows+".png' class='img-tiny' /> " + getItemName(equipedArrows);
					document.getElementById("superBow-arrow-type").innerHTML = "<img src='images/"+equipedArrows+".png' class='img-tiny' /> " + getItemName(equipedArrows);
					document.getElementById("enchantedSuperBow-arrow-type").innerHTML = "<img src='images/"+equipedArrows+".png' class='img-tiny' /> " + getItemName(equipedArrows);
				}
			break;
			
			
			
			case "preset1Color":
			case "preset1Icon":
			case "preset2Color":
			case "preset2Icon":
			case "preset3Color":
			case "preset3Icon":
			case "preset4Color":
			case "preset4Icon":
			case "preset5Color":
			case "preset5Icon":
			case "preset6Color":
			case "preset6Icon":
				refreshPresetIcons();
			break;
			
			case "sandstormTimerOnHeroTimer":
			refreshCombatPotionsAndSpells();
			break;
			
			
			case "infectedTimer":
			if(infectedTimer > 0)
			{
				document.getElementById("notification-infected").style.display = "";
				document.getElementById("notification-infected-value").innerHTML = formatTime(infectedTimer);
				refreshCombatPotionsAndSpells();
			}
			else
				document.getElementById("notification-infected").style.display = "none";
			

			case "resetFightingPotion":
			case "resetFightingPotionUsed":
				if(resetFightingPotion > 0)
					document.getElementById("combat-resetPotion-button").style.display = "";
				else
					document.getElementById("combat-resetPotion-button").style.display = "none";
				
				if(resetFightingPotionUsed == 1)
					document.getElementById("img-resetPotion").src = "images/resetFightingPotionUsed.png";
				else
					document.getElementById("img-resetPotion").src = "images/resetFightingPotion.png";
			break;
			
			case "heroHp":
				refreshHeroHpBar();
			break;
			case "monsterHp":
			refreshHpBar();
			break;
			
			case "farmingXp":
					if(farmingUnlocked > 0)
					{
						document.getElementById("menu-button-farming-level").innerHTML = "Level " + getLevel(farmingXp);
						refreshXpBar("farming");
					}
			break;
			
			case "brewingXp":
					if(brewingUnlocked > 0)
					{
						document.getElementById("menu-button-brewing-level").innerHTML = "Level " + getLevel(brewingXp);
						refreshXpBar("brewing");
					}
			break;

			
			case "exploringXp":
					if(exploringUnlocked > 0)
					{
						document.getElementById("menu-button-exploring-level").innerHTML = "Level " + getLevel(exploringXp);
						refreshXpBar("exploring");
					}
			break;
			
			
			
			case "oilOut":
				if(oilOut == 0)
				{
					document.getElementById("oil-out-label").style.display = "none";
					document.getElementById("oil-out-label-2").style.display = "none";
				}
				else
				{
					document.getElementById("oil-out-label").style.display = "";
					document.getElementById("oil-out-label-2").style.display = "";
				}
			break;
			
			case "smeltingCurrentTimer":
				if(smeltingCurrentTimer > 0)
				document.getElementById("smelting-label-" + getBestFurnace()).style.display = "";
			else
				document.getElementById("smelting-label-" + getBestFurnace()).style.display = "none";
			break;
			
			case "charcoalFoundryCurrentTimer":
				if(charcoalFoundryCurrentTimer > 0)
				{
					document.getElementById("charcoalFoundry-label").style.display = "";
					document.getElementById("charcoalFoundry-label-2").style.display = "";
				}
			else
			{
				document.getElementById("charcoalFoundry-label").style.display = "none";
				document.getElementById("charcoalFoundry-label-2").style.display = "none";
			}
			break;
			
			case "sapphirePending":
			case "emeraldPending":
			case "rubyPending":
			case "diamondPending":
			case "bloodCrystalsPending":
			case "bloodDiamondPending":
				if(window[changedItem] > 0)
					document.getElementById("img-gemPending").src = "images/"+changedItem+".png";
				else
					document.getElementById("img-gemPending").src = "images/gemPending.png";
			break;
			
			case "serverUpdateTimer":
				if(serverUpdateTimer > 0)
				{
					document.getElementById("notification-updateNotification").style.display = "";
					document.getElementById("notification-updateNotification").innerHTML = "New update in <span>"+formatTime(serverUpdateTimer)+"</span><br /> Click <a style='text-decoration:none;color:gold;' href='updatelog.html' target='_blank' /><u>here</u></a> for the update log.";
				}
				else
				{
					document.getElementById("notification-updateNotification").style.display = "none";
				}
			break;
			
			case "tree1":
			case "tree2":
			case "tree3":
			case "tree5":
			case "tree4":
			case "tree6":
			case "treeUnlocked1":
			case "treeUnlocked2":
			case "treeUnlocked3":
			case "treeUnlocked5":
			case "treeUnlocked4":
			case "treeUnlocked6":
			case "treeTimer1":
			case "treeTimer2":
			case "treeTimer3":
			case "treeTimer5":
			case "treeTimer4":
			case "treeTimer6":
			if(lastTabId == "woodcutting")
			{
					initTreeSlots();
			}
			if(lastTabId == "tree")
			{
				var patchId = parseInt(changedItem.substr(changedItem.length - 1));
				if(lastLoadTreePatch == patchId)
					loadTree(patchId);
			}
			break;
			
			case "goblinCousinCooldown":
				
				if(goblinCousinCooldown == 0)
				{
					
					document.getElementById("goblinCousin-status").innerHTML = "Ready";
					document.getElementById("explore-with-goblin-span").innerHTML = "Explore with Goblin";
					document.getElementById('notification-exploringNotification2').style.display = "";
				}
				else 
				{
					document.getElementById('notification-exploringNotification2').style.display = "none";
					document.getElementById("goblinCousin-status").innerHTML = formatTime(goblinCousinCooldown) + " <span style='color:orange'>("+getItemName(goblinExploringArea)+")</span>";
					document.getElementById("explore-with-goblin-span").innerHTML = formatTime(goblinCousinCooldown) + " <span style='color:orange'>("+getItemName(goblinExploringArea)+")</span>";
				}
			break;
			
			case "combatInformation":
				
				if(combatInformation == 1)
				{
					document.getElementById("combat-information-button").style.display = "";
					refreshShop();
				}
			break;
			case "combatInformation2":
			{
				if(combatInformation2 == 1)
				{
					document.getElementById("img-combatInformation").src = "images/combatInformation2.png";
					refreshShop();
				}
			}
			break;
			
			case "gemGoblinTimer":
				document.getElementById("gemGoblinShop-changeTimer").innerHTML = formatTime(gemGoblinTimer)
			break;
			
			case "communityCenter":
			case "communityCenter2":
			case "communityCenter3":
			case "communityCenter4":
			case "communityCenter5":
			case "communityCenter6":
			case "communityCenter7":
			case "communityCenter8":
			case "communityCenter9":
			case "communityCenter10":
			case "communityCenter11":
				if(communityCenter11 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter11.png";
					showShopItems(11);
					showShopItems(10);
					showShopItems(9);
					showShopItems(8);
					showShopItems(7);
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter10 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter10.png";
					showShopItems(10);
					showShopItems(9);
					showShopItems(8);
					showShopItems(7);
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter9 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter9.png";
					showShopItems(9);
					showShopItems(8);
					showShopItems(7);
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter8 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter8.png";
					showShopItems(8);
					showShopItems(7);
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter7 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter7.png";
					showShopItems(7);
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter6 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter6.png";
					showShopItems(6);
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter5 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter5.png";
					showShopItems(5);
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter4 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter4.png";
					showShopItems(4);
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter3 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter3.png";
					showShopItems(3);
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter2 == 1)
				{
					document.getElementById("shop-button-img").src = "images/communityCenter2.png";
					showShopItems(2);
					showShopItems(1);
				}
				else if(communityCenter == 1)
					document.getElementById("shop-button-img").src = "images/communityCenter.png";
				
				if(communityCenter == 1)
				{
					showShopItems(1);
					
					if(brewingUnlocked == 0) document.getElementById("unlock-brewing-req1").style.textDecoration = "line-through"
				}
				
				loadCraftablesList();
			break;
			
			
		
			
			case "promethiumBarRefinery":
			if(promethiumBarRefinery == 1) document.getElementById("item-box-goldBarRefinery").style.display = "none";
			break;
			
			case "ironOilWell":
				if(ironOilWell == 1)
					document.getElementById("item-box-bronzeOilWell").style.display = "none";
			break;
			
			case "promethiumOilFactory":
				if(window[changedItem] == 1)
					document.getElementById("item-box-goldOilFactory").style.display = "none";
			break;
			
			case "titaniumOilFactory":
				if(window[changedItem] == 1)
					document.getElementById("item-box-promethiumOilFactory").style.display = "none";
			break;
			
			
			case "goldOilFactory":
				if(window[changedItem] == 1)
					document.getElementById("item-box-silverOilFactory").style.display = "none";
			break;
			
			
			case "silverOilFactory":
				if(window[changedItem] == 1)
					document.getElementById("item-box-ironOilFactory").style.display = "none";
			break;
			
			case "ironOilFactory":
				if(window[changedItem] == 1)
					document.getElementById("item-box-bronzeOilFactory").style.display = "none";
			break;
			
			case "ancientOilWell":
				if(window[changedItem] == 1)
					document.getElementById("item-box-titaniumOilWell").style.display = "none";
			break;
			
			case "titaniumOilWell":
				if(window[changedItem] == 1)
					document.getElementById("item-box-promethiumOilWell").style.display = "none";
			break;
			
			
			case "promethiumOilWell":
				if(window[changedItem] == 1)
					document.getElementById("item-box-goldOilWell").style.display = "none";
			break;
			
			case "goldOilWell":
				if(window[changedItem] == 1)
					document.getElementById("item-box-silverOilWell").style.display = "none";
			break;
			
			case "silverOilWell":
				if(window[changedItem] == 1)
					document.getElementById("item-box-ironOilWell").style.display = "none";
			break;
			
			case "titaniumFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-promethiumFurnace").style.display = "none";
			break;
			
			case "ancientFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-titaniumFurnace").style.display = "none";
			break;
			
			case "superLobsterCage":
				if(window[changedItem] == 1)
					document.getElementById("item-img-lobsterCage").src = "images/superLobsterCage.png";
			break;
			
			case "promethiumFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-goldFurnace").style.display = "none";
			break;
			
			case "goldFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-silverFurnace").style.display = "none";
			break;
			
			case "silverFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-ironFurnace").style.display = "none";
			break;
			
			case "ironFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-bronzeFurnace").style.display = "none";
			break;
			
			case "bronzeFurnace":
				if(window[changedItem] == 1)
					document.getElementById("item-box-stoneFurnace").style.display = "none";
			break;
			
			case "isHardcore":
				if(isHardcore > 0)
				{
					document.getElementById("hc-tradingPost-disabled").style.display = "";
					document.getElementById("hc-wells-disabled").style.display = "";
					document.getElementById("hc-timeMachine-disabled").style.display = "";
					document.getElementById("refer-a-friend-link").style.display = "none";
					document.getElementById("hc-bc-mysteryGems-disabled").style.display = "";
					document.getElementById("hc-bc-enrichedPotions-disabled").style.display = "";
					document.getElementById("hc-bc-emptyOrbs-disabled").style.display = "";
				}
			break;
			case "planterOn":
			case "planterAt":
				if(planterOn == 1)
				{
					document.getElementById("notification-planterNotification").style.display = "";
					document.getElementById("notification-planterNotification-label").innerHTML = planterAt + "/" + getMaxPlanterIterations();
				}
				else
					document.getElementById("notification-planterNotification").style.display = "none";
			break;
			case "planter":
				if(planter > 0)
					document.getElementById("planter-label").style.display = "";
			break;
			case "titaniumPlanter":
			case "ancientPlanter":
				if(titaniumPlanter > 0)
				{
					document.getElementById("planter-label-img").src = "images/titaniumPlanter_light.png";
					document.getElementById("planter-notif-img").src = "images/titaniumPlanter_light.png";
					document.getElementById("planter-notif-img-2").src = "images/titaniumPlanter_light.png";
				}
				if(ancientPlanter > 0)
				{
					document.getElementById("planter-label-img").src = "images/ancientPlanter.png";
					document.getElementById("planter-notif-img").src = "images/ancientPlanter.png";
					document.getElementById("planter-notif-img-2").src = "images/ancientPlanter.png";
					document.getElementById("ancientPlanter-fertilizeSoilPotion").style.display = "inline-block";
				}
			break;
			
			case "ancientPlanterFertilizeSoilOn":
			if(ancientPlanterFertilizeSoilOn == 0)
				document.getElementById("ancientPlanter-fertilizeSoilPotion-toggle").src = "images/x.png";
			else
				document.getElementById("ancientPlanter-fertilizeSoilPotion-toggle").src = "images/check.png";
			break;
			case "gemFinder":
			if(gemFinder > 0)
				refreshShop();
			break;
			
			case "gemGoblinShopNotification":
				if(gemGoblinShopNotification == 1)
					document.getElementById("notification-gemGoblinShopNotification").style.display = "";
				else
					document.getElementById("notification-gemGoblinShopNotification").style.display = "none";
			break;
			case "rocketBoosters":
			case "superRocketBoosters":
			
				if(rocketBoosters > 0)
				{
					document.getElementById("rocket-boosters-label").style.display = "";
					
					if(superRocketBoosters > 0)
					{
						document.getElementById("rocket-boosters-img").src = "images/superRocketBoosters.png";
						document.getElementById("rocket-boosters-label-text").innerHTML = "Boosters+";
					}
				}
			break;
			
			case "titaniumHeatShield":
				if(titaniumHeatShield > 0)
					document.getElementById("rocket-heatShield-label").style.display = "";
			break;
			
			case "initQuests":
				if(initQuests == 1)
					document.getElementById("main-button-quests").style.display = "";
			break;
		
			case "farm1":
			case "farm2":
			case "farm3":
			case "farm5":
			case "farm4":
			case "farm6":
			if(lastTabId == "farming")
			{
					initFarmingSlots();
			}
			if(lastTabId == "farm")
			{
				var patchId = parseInt(changedItem.substr(changedItem.length - 1));
				if(lastLoadFarmPatch == patchId)
					loadFarm(patchId)
			}
			refreshFarmingPatchesToPlant(true);
			break;
			case "farmUnlocked1":
			case "farmUnlocked2":
			case "farmUnlocked3":
			case "farmUnlocked5":
			case "farmUnlocked4":
			case "farmUnlocked6":
			case "farmTimer1":
			case "farmTimer2":
			case "farmTimer3":
			case "farmTimer5":
			case "farmTimer4":
			case "farmTimer6":
			if(lastTabId == "farming")
			{
					initFarmingSlots();
			}
			if(lastTabId == "farm")
			{
				var patchId = parseInt(changedItem.substr(changedItem.length - 1));
				if(lastLoadFarmPatch == patchId)
					loadFarm(patchId)
			}
			break;
			
			case "questGuides":
			if(questGuides > 0)
			{
				refreshShop();
				document.getElementById("questGuides-btn").style.display = "";
			}
			break;
			
			case "miners":
			if(miners > 0 && miningUnlocked == 0) 
			{
				document.getElementById("menu-button-mining-unlock-label").style.display = "";
				document.getElementById("unlock-mining-req1").style.textDecoration = "line-through"
			}
			break;
			
			case "axe":
			if(axe > 0 && woodcuttingUnlocked == 0)
			{
				document.getElementById("menu-button-woodcutting-unlock-label").style.display = "";
				document.getElementById("unlock-woodcutting-req1").style.textDecoration = "line-through"
			}
			break;
			
			case "rake":
			if(rake > 0 && farmingUnlocked == 0) 
			{
				document.getElementById("menu-button-farming-unlock-label").style.display = "";
				document.getElementById("unlock-farming-req1").style.textDecoration = "line-through"
			}
			
			break;
			
			case "brewingKit":
			if(brewingKit > 0 && brewingUnlocked == 0) 
			{
				document.getElementById("menu-button-brewing-unlock-label").style.display = "";
				document.getElementById("unlock-brewing-req3").style.textDecoration = "line-through"
			}
			break;
			
			case "totalDonations":
			if(totalDonations > 0)
				document.getElementById("messages-menu-btn").style.display = "";
			break;
			case "unreadMail":
			if(unreadMail > 0)
			{
				document.getElementById("notification-new-mail-notification").style.display = "";
			}
			else
				document.getElementById("notification-new-mail-notification").style.display = "none";
			break;
			
			case "home":
				if(window[changedItem] > 0)
					document.getElementById("main-button-home").style.display = "";
				
				if(window[changedItem] == 1)
				{
					document.getElementById("home-selected").innerHTML = "Cabin";
					document.getElementById("home-button-img").src = "images/home" + window[changedItem] + ".png";
				}
				else if(window[changedItem] == 2)
				{
					document.getElementById("home-selected").innerHTML = "Fort";
					document.getElementById("home-button-img").src = "images/home" + window[changedItem] + ".png";
				}
				else if(window[changedItem] == 3)
				{
					document.getElementById("home-selected").innerHTML = "Mansion";
					document.getElementById("home-button-img").src = "images/home" + window[changedItem] + ".png";
				}
			break;
			
			case "ancientOven":
				if(ancientOven == 1)
					document.getElementById("item-box-titaniumOven").style.display = "none";
			break;
			
			case "titaniumOven":
				if(titaniumOven == 1)
					document.getElementById("item-box-promethiumOven").style.display = "none";
			break;
			
			case "promethiumOven":
				if(promethiumOven == 1)
					document.getElementById("item-box-goldOven").style.display = "none";
			break;
			
			case "goldOven":
				if(goldOven == 1)
					document.getElementById("item-box-silverOven").style.display = "none";
			break;
			
			
			case "silverOven":
				if(silverOven == 1)
					document.getElementById("item-box-ironOven").style.display = "none";
			break;
			
			case "ironOven":
				if(ironOven == 1)
					document.getElementById("item-box-bronzeOven").style.display = "none";
			break;
			
			case "bronzeOven":
			{
				if(cookingUnlocked == 0)
				{
					document.getElementById("menu-button-cooking-unlock-label").style.display = "";
					document.getElementById("unlock-cooking-req1").style.textDecoration = "line-through";
				}
				
			}
			break;
			
			case "metalDetector":
			case "shovel":
				if(window[changedItem] > 0)
					loadCraftablesList();
			break;
			
			case "missionBits":
				refreshMissionCompleted(missionBits);
			break;
			
			case "coinsWellTotalAmount":
				if(coinsWellAmount > 0)
				{
					document.getElementById("coins-well-input-information").style.display = "";
					var winPercentage = coinsWellAmount / coinsWellTotalAmount;
					winPercentage *= 100;
					document.getElementById("coins-well-input-information-win-perc").innerHTML = parseFloat(winPercentage.toFixed(2)) + "%";
				}
				else
					document.getElementById("coins-well-input-information").style.display = "none";
			break;
			
			case "bloodCrystalsWellTotalAmount":
				if(bloodCrystalsWellAmount > 0)
				{
					document.getElementById("bloodCrystals-well-input-information").style.display = "";
					var winPercentage = bloodCrystalsWellAmount / bloodCrystalsWellTotalAmount;
					winPercentage *= 100;
					document.getElementById("bloodCrystals-well-input-information-win-perc").innerHTML = parseFloat(winPercentage.toFixed(2)) + "%";
				}
				else
					document.getElementById("bloodCrystals-well-input-information").style.display = "none";
			break;
			
			case "bloodCrystalsTradableTotal":
				document.getElementById("bloodCrystalsTradable-label2").style.display = "";
			break;
		
		}
}

function manageChangedItems(dataItemsThatChanged)
{	
	for(var i = 0; i < dataItemsThatChanged.length; i++)
	{
		var itemName = dataItemsThatChanged[i];
		var newValue = window[itemName];
		
		//set data-item-display
		var selector = "[data-item-display="+itemName+"]";
		var elementsFound = $(selector);
		for(var j = 0; j < elementsFound.length; j++)
		{
			elementsFound[j].innerHTML = formatNumber(newValue);
		}
		
		//special
		var changedItem = itemName
		refreshChangedItemSwitch(changedItem);
		
		var itemBox = document.getElementById("item-box-" + itemName);
		if(itemBox !== null)
		{
			if(parseInt(window[itemName]) > 0)
			{
				var itemBoxValueAmountSpan = document.getElementById("item-box-amount-" + itemName);
				itemBox.style.display = "";
				if(itemBoxValueAmountSpan != null)
					document.getElementById("item-box-amount-" + itemName).innerHTML = formatNumber(newValue) + " ";
				
				//DOCUMENTATION IMPORTANT!!! HOW WE LOAD IMAGES TO ITEM BOXES. (SEE BELOW FOR DETAILS AT FUNCTION loadImage())
				//load images if player is in that section
				if(arrayItemIsInSection[itemName] !== undefined || arrayItemIsInSection[itemName] !== null) 
				{
					var itemSection = (arrayItemIsInSection[itemName]);
					var tabNameId = document.getElementById(itemSection).parentNode.id;
					var tabId = tabNameId.substr(4);
					

					if(lastTabId == tabId) 
						loadImages(arrayItemIsInSection[itemName]);
				}
			}
			else
				itemBox.style.display = "none";
		}	
		
	}
}

function showIdleNotifications()
{
	var testForArray = ["profileNotificationsOffFurnace","profileNotificationsOffTrain","profileNotificationsOffRocket","profileNotificationsOffPlanter"];
	
	for(var i = 0 ; i < testForArray.length; i++)
	{
		if(window[testForArray[i]] == 0)
		{
			var showNotif = false;
			if(testForArray[i] == "profileNotificationsOffTrain" && trainTimer == 0 && train > 0) showNotif = true;
			if(testForArray[i] == "profileNotificationsOffRocket" && rocketReturningTimer == 0 && rocketKm == 0 && rocket > 0) showNotif = true;
			if(testForArray[i] == "profileNotificationsOffPlanter" && planterOn == 0 && planter > 0) showNotif = true;
			if(testForArray[i] == "profileNotificationsOffFurnace" && furnacePercentage == 0 && furnaceCapacity > 0) showNotif = true;
			if(testForArray[i] == "profileNotificationsOffFurnace") document.getElementById("profileNotificationsOffFurnace-img").src = "images/" + getBestFurnace() + ".png";

			if(showNotif)
			{
				document.getElementById("notification-" + testForArray[i]).style.display = "";
				
			}
			else
			{
				document.getElementById("notification-" + testForArray[i]).style.display = "none";
			}
		}
		else
		{
			if(document.getElementById("notification-" + testForArray[i]).style.display != "none")
				document.getElementById("notification-" + testForArray[i]).style.display = "none";
		}
	}
		
}
function getItemValue(itemChosen)
{
	if(isNaN(window[itemChosen]))
		return window[itemChosen];
	else
		return parseInt(window[itemChosen]);
}

function clicksItem(itemChosen)
{
	//--------trading below
	if(addingItemToTradeBooleanGlobal)
	{
		if(itemChosen != "explorer")
		{
			if(addingItemToTradeBooleanGlobal) //actual trade
				tryToAddItemToTradeScreen(itemChosen);
			else
				tryToAddItemToTradeList(itemChosen); //just offer to list
			return;
		}
	}
	if(addingItemToPlayerMarketBooleanGlobal)
	{
		if(itemChosen != "explorer")
		{
			tryToAddItemToPlayerMarketSlot(itemChosen);
			return;
		}
	}
	//end trading-------------
	
	
	//sellable
	if(miningResearchLevel >= 6 && (itemChosen == "sapphire" || itemChosen == "emerald" || itemChosen == "ruby" || itemChosen == "diamond"))
	{
		openConvertGemDialogue(itemChosen);
		return;
	}
	
	if(itemChosen.endsWith("stoneAmulet") || itemChosen.endsWith("StoneAmulet"))
	{
		openConvertAmuletDialogue(itemChosen);
		return;
	}
	if(exploringResearchLevel >= 7 && itemChosen.endsWith("Amulet"))
	{
		openConvertAmuletDialogue(itemChosen);
		return;
	}
	
	if(witchesPotionQuest2 == 2 && (itemChosen == "stripedGreenLeaf" || itemChosen == "stripedGoldLeaf"))
	{
		confirmDialogue('90%','Would you like to burn these in your oven?','Burn','Cancel','OPEN_WITCHES_POTION_BURN_DIALOGUE=' + itemChosen);
		return;
	}
	
	
	var dontShowSellDialogue = ["bearFur","snakeskin","lavaSnakeskin","lizardskin","elephantSkin"]
	if(!dontShowSellDialogue.includes(itemChosen))
	{
		if(getItemPrice(itemChosen) > 0)
			openSellDialogue(itemChosen)
	}
	//seeds
	if(itemChosen.endsWith("Seeds"))
		clicksSeed(itemChosen, true);
	
	if(itemChosen.endsWith("Furnace"))
		clicksFurnace();

	if(itemChosen.toLowerCase().endsWith("arrows"))
		sendBytes("EQUIP_ARROWS=" + itemChosen);
	
	if(itemChosen.endsWith("OilFactory"))
		clicksOilFactory();
	
	if(itemChosen.endsWith("Potion"))
		drinkPotion(itemChosen);
	
	if(itemChosen.startsWith("skeletonMageItem"))
		sendBytes("FIGHT_BOSS=skeletonMage");
	
	
	if(itemChosen.endsWith("Unidentified"))
		examineGeode(itemChosen);
	
	if(itemChosen.endsWith("Loot"))
		oepnExploringLootDialogue(itemChosen);
	
	if(itemChosen.endsWith("Oven"))
		openOvenDialogueChooseLogs();
	
	if(itemChosen.startsWith("raw"))
		openDialogueToCook(itemChosen);
	
	if(itemChosen.endsWith("Artifact"))
		openDialogueToComvertArtifactToXp(itemChosen);
	
	if(itemChosen.startsWith("geode"))
		openDialogueGeode(itemChosen);
	
	if(itemChosen.endsWith("SpellScroll"))
	{
		confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /> <hr /> Read this spell scroll to learn a new combat spell?</center>","Read","Don't Read","USE_SPELL_SCROLL=" + itemChosen)
		firstLoadCombatSpellsAndPotionsIterfaceGlobal = true;
	}
	
	if(itemChosen.endsWith("Mineral"))
	{
		if(craftingResearchLevel >= 6)
		{
			var time = 0;	
			var testingFor = itemChosen; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
			confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /> <hr /> I found this in a geode.  It has granted me with some mining XP.<br /><br />I can use these to charge the necklace amulet.<br /><br />"+createHTMLBox("mineralNecklace","+" + formatTime(time) + " <img src='images/clock.png' class='img-tiny' />")+"</center>","Add to Necklace","Close","MINERAL_NECKLACE_ADD=" + testingFor)		}
		else
			confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /> <hr /> I found this in a geode.  It has granted me with some mining XP.  Wonder if there is anything else to do with this?</center>","Close","","")
	
	}
	if(itemChosen.endsWith("LootingRing"))
		upgradeLootingRingDialogue();
	else if(itemChosen.toLowerCase().endsWith("stonering") && (!itemChosen.endsWith("loodDiamondStoneRing")))
		oepnStoneRingDialogue(itemChosen);
	else if(itemChosen.endsWith("Ring"))
		sendBytes("EQUIP=" + itemChosen)
	
	if(itemChosen.endsWith("Crate"))
		openLootFactory(itemChosen, 2);
	switch(itemChosen)
	{
		
		case "miners":
			sendBytes("CLICKED_MINER")
			openWhatCanMineDialogue(itemChosen);
		break;
		
		case "trackWheels":
			confirmDialogue("90%","<center>I wonder what these are used for.</center>","Close","","");
		break;
		
		case "train":
		if(trainTimer > 1)
			confirmDialogue("90%","<center>Your train is already on a trip.</center>","Close","","");
		else
		{
			if(trainTimer == 1) 
				sendBytes("MANAGE_TRAIN=0");
			else
			{
				if(train == 1)
				confirmDialogue("90%","<center><img src='images/train.png' class='img-large' /><hr />Send your train out to mine?<br /><br />" + createHTMLBoxWithChecks("oil",500000, formatNumber(500000)) + "</center>","Send Train","Close","MANAGE_TRAIN=1");
				else if(train > 1)
				{
					if(document.getElementById("dialogue-trains-textbox").value == 0) changeTrainsToSend(1);
					openDialogue("dialogue-trains");
				}
			}
			
		}
		break;
		
		case "goblinCousin":
			openDialogue("dialogue-goblinCousin");
		break;
		
		case "carnivorousBoss":
			confirmDialogue("90%","<center><img src='images/carnivorousBoss.gif' class='img-large' /> <br /><br />Fight?</center>","Fight","Run","FIGHT_BOSS=carnivorousPlant")
		break;
		
		case "metalDetector":
		case "titaniumMetalDetector":
		case "promethiumMetalDetector":
		sendBytes("CLICKS_METAL_DETECTOR");
		break;
		case "rocket":
			clicksRocket();
		break;
		
		case "robotMiner":
		case "sapphireRobotMiner":
		case "emeraldRobotMiner":
		case "rubyRobotMiner":
		case "diamondRobotMiner":
		case "bloodDiamondRobotMiner":
			clicksRobotMiner();
		break;
		
		case "lobsterCage":
			clicksLobsterCage("normal");
		break;
		case "superLobsterCage":
			clicksLobsterCage("super");
		break;
		
		case "redSpices":
		case "yellowSpices":
		case "blueSpices":
		case "greenSpices":
			confirmDialogue('90%',"<center><img src='images/chefsStew.png' class='img-medium' /> <img src='images/"+itemChosen+".png' class='img-medium' /><br /><br />Add spices to the stew?</center>","Add Spices","Cancel","CHEFS_QUEST_3_ADD_SPICES=" + itemChosen);
		break;
		
		case "goblinCousinMissing":
			confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><br /><br />The back reads:<br /><br /><i style='color:grey'>Last seen in a place with trees near the deep ocean.</i></center>","Close","","");
		break;
		
		case "snakeskinCapeScroll":
			confirmDialogue('90%',"<center><img src='images/snakeskinCapeScroll.png' class='img-medium' /> <img src='images/craftingSkill.png' class='img-medium' /><br /><br />Learn to craft snakeskin capes?</center>","Learn","Cancel","USE_SNAKE_SKIN_CAPE_LEARN");
		break;
		
		case "lizardskinCapeScroll":
			confirmDialogue('90%',"<center><img src='images/lizardskinCapeScroll.png' class='img-medium' /> <img src='images/craftingSkill.png' class='img-medium' /><br /><br />Learn to craft lizardskin capes?</center>","Learn","Cancel","USE_LIZARD_SKIN_CAPE_LEARN");
		break;
		
		case "elephantCapeScroll":
			confirmDialogue('90%',"<center><img src='images/elephantCapeScroll.png' class='img-medium' /> <img src='images/craftingSkill.png' class='img-medium' /><br /><br />Learn to craft elephant capes?</center>","Learn","Cancel","USE_ELEPHANT_SKIN_CAPE_LEARN");
		break;
		
		case "lavaSnakeskinCapeScroll":
			confirmDialogue('90%',"<center><img src='images/lavaSnakeskinCapeScroll.png' class='img-medium' /> <img src='images/craftingSkill.png' class='img-medium' /><br /><br />Learn to craft lava snakeskin capes?</center>","Learn","Cancel","USE_LAVA_SNAKE_SKIN_CAPE_LEARN");
		break;
		
		case "gemBag":
			confirmDialogue('90%',"<center><img src='images/gemBag.png' class='img-medium' /><br /><br />Open gem bag?</center>","Open","Cancel","OPEN_GEM_GOBLIN_BAG");
		break;
			
		case "mineralNecklace":
			clicksMineralNecklace();
		break;
		
		case "chefsStew":
				navigateAndLoadImages('stew','item-section-stew-1');
		break;
		
		case "votingCard":
			clicksVotingCard();
		break;
		
		case "lavaPlant":
			openLavaPipeDialogue();
		break;
		case "ancientLavaPlant":
			openAncientLavaPipeDialogue();
		break;
		
		case "lavaPlantPipe":
			sendBytes("INSTALL_LAVA_PLANT_PIPE");
		break;
		
		case "ancientLavaPlantPipe":
			sendBytes("INSTALL_ANCIENT_LAVA_PLANT_PIPE");
		break;
		
		case "blueEmptyOrb":
		case "greenEmptyOrb":
			setCraftList(itemChosen);
			navigate('craftingItems');
		break;
		
		case "candyCanePuzzle1":
		case "candyCanePuzzle2":
		case "candyCanePuzzle3":
		case "candyCanePuzzle4":
		case "candyCanePuzzle5":
		case "candyCanePuzzle6":
		case "candyCanePuzzle7":
		case "candyCanePuzzle8":
		case "candyCanePuzzle9":
			navigate('candyCanePuzzle');
		break;
		
		
		case "sandstormSpellScroll1":
		case "sandstormSpellScroll2":
		case "sandstormSpellScroll3":
		setCraftList("sandstormSpellScroll");
			navigate('craftingItems');
		break;
		
		case "charcoalFoundry":
		case "titaniumCharcoalFoundry":
		clicksCharcoalFoundry();
		break;
		
		case "museum":
			clicksMuseum();
		break;
		
		case "cityWalls":
			if(cityWallsOff == 0)
			{
				confirmDialogue('90%',"<center><img src='images/cityWallsOpen.png' class='img-large'><br /><br />Your population is currently rising, closing the gates will stop your population from increasing.","Close Gates","Cancel","TOGGLE_CITY_WALLS");
			}
			else
			{
				confirmDialogue('90%',"<center><img src='images/cityWallsClosed.png' class='img-large'><br /><br />Opening your gates will allow more people to move into your village, given you have the land.","Open Gates","Cancel","TOGGLE_CITY_WALLS");
			}
		break;
		
		
		case "trawler":
		if(window[itemChosen + "Timer"] > 1)
				confirmDialogue("90%","<center>Your trawler is aleady out to sea.</center>","Close","","");
			else if(window[itemChosen + "Timer"] == 1)
				sendBytes("CLICKS_BOAT=" + itemChosen);
			else if(window[itemChosen + "Timer"] == 0)
			{
				var boatOutToSeaHtml = createHTMLBoxRed("boatsIcon","Any boat out to sea");
				if(canoeBoatTimer > 0 || rowBoatTimer > 0 || sailBoatTimer > 0) boatOutToSeaHtml = createHTMLBox("boatsIcon","Any boat out to sea");
				
				confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /><hr />Send your trawler on the ocean floor?<br /><br />" + createHTMLBoxWithChecks("bait",getBaitNeeded(itemChosen), formatNumber(getBaitNeeded(itemChosen))) + " " + boatOutToSeaHtml +"</center>","Send Boat","Close","CLICKS_BOAT=" + itemChosen);
			}
		break;
		case "rowBoat":
		case "canoeBoat":
		case "steamBoat":
			if(window[itemChosen + "Timer"] > 1)
				confirmDialogue("90%","<center>Your boat is aleady sent out.</center>","Close","","");
			else if(window[itemChosen + "Timer"] == 1)
				sendBytes("CLICKS_BOAT=" + itemChosen);
			else if(window[itemChosen + "Timer"] == 0)
				confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /><hr />Send your boat to catch fish?<br /><br />" + createHTMLBoxWithChecks("bait",getBaitNeeded(itemChosen), formatNumber(getBaitNeeded(itemChosen))) + "</center>","Send Boat","Close","CLICKS_BOAT=" + itemChosen);
		break;
		
		case "sailBoat":
			if(window[itemChosen + "Timer"] > 1)
				confirmDialogue("90%","<center>Your boat is aleady sent out.</center>","Close","","");
			else if(window[itemChosen + "Timer"] == 1)
				sendBytes("CLICKS_BOAT=" + itemChosen);
			else if(window[itemChosen + "Timer"] == 0)
				confirmDialogue("90%","<center><img src='images/"+itemChosen+".png' class='img-large' /><hr />Send your boat to catch fish?<br /><br /><img src='images/windIcon.png' class='img-small' /> <b>Wind level:</b> "+getCurrentWindLevel(currentWind)+"<br /><br />" + createHTMLBoxWithChecks("bait",getBaitNeeded(itemChosen), formatNumber(getBaitNeeded(itemChosen))) + "</center>","Send Boat","Close","CLICKS_BOAT=" + itemChosen);
		break;
		
		case "goldBarRefinery":
		case "promethiumBarRefinery":
			if(barRefineryTimer == 1) 
				sendBytes("REFINE_GOLD_BARS=collect")
			else 
			{
				if(promethiumBarRefinery > 0) document.getElementById("barRefinery-promethiumBars").style.display = "";
				openDialogue("dialogue-barRefinery");
			}
		break;
		
	
		
		case "puzzleChest":
			sendBytes("CLICKED_DESERT_PUZZLE_BOX");
			openDialogue("dialogue-puzzleChest-desertLizard2");
		break;
		case "puzzleChest2":
			sendBytes("CLICKED_PUZZLE_CHEST_2");
			openDialogue("dialogue-puzzleChest-2");
		break;
		case "puzzleChest3":
			sendBytes("CLICKED_PUZZLE_CHEST_3");
			navigate('puzzleBox3')
		break;
		case "puzzleChest4":
			sendBytes("CLICKED_PUZZLE_CHEST_4");
			navigate('puzzleBox4')
		break;
		case "gemFinder":
			sendBytes("CLICKS_GEM_FINDER");
			openWhatCanMineDialogue(itemChosen);
		break;
		case "feather":
		case "fireFeather":
		case "iceFeather":
		case "bloodFeather":
		clicksFeathers(itemChosen);
		break;
		case "wells":
		navigate("wells");
		break;
		case "bloodCrystals":
		if(bloodShop >= 2) { navigate('purchaseCrystals'); playFowardMenuSound();}
		break;
		
		case "chef":
		clicksChef();
		break;
		case "drills":
		case "crushers":
		case "giantDrills":
		case "roadHeaders":
		case "excavators":
		case "giantExcavators":
		openMachineryDialogue(itemChosen);
		break;
		case "axe":
		case "sapphireAxe":
		case "emeraldAxe":
		case "rubyAxe":
		case "diamondAxe":
		case "bloodDiamondAxe":
		case "rake":
		case "sapphireRake":
		case "emeraldRake":
		case "rubyRake":
		case "diamondRake":
		case "bloodDiamondRake":
		case "secateurs":
		case "sapphireSecateurs":
		case "emeraldSecateurs":
		case "rubySecateurs":
		case "diamondSecateurs":
		case "bloodDiamondSecateurs":
		case "brewingKit":
		case "sapphireBrewingKit":
		case "emeraldBrewingKit":
		case "rubyBrewingKit":
		case "diamondBrewingKit":
		case "bloodDiamondBrewingKit":
		case "shovel":
		case "sapphireShovel":
		case "emeraldShovel":
		case "rubyShovel":
		case "diamondShovel":
		case "bloodDiamondShovel":
		case "machete":
		case "sapphireMachete":
		case "emeraldMachete":
		case "rubyMachete":
		case "diamondMachete":
		case "bloodDiamondMachete":
			upgradeToolDialogue(itemChosen);
		break;
		case "fishingRod":
		case "sapphireFishingRod":
		case "emeraldFishingRod":
		case "rubyFishingRod":
		case "diamondFishingRod":
		case "bloodDiamondFishingRod":
		if(farmingResearchLevel < 3 && bait == 0)
			confirmDialogue("90%","<center><img src='images/researcher.png' class='img-medium' /><hr /><img src='images/atom.png' class='img-small' /> You can find fishing bait by gaining a researching farming level of 2.</center>","Close","","");
		else
			upgradeToolDialogue(itemChosen);
		break;
		case "piranha":
		case "piranha2":
		case "piranha3":
		case "piranha4":
		case "shrimp":
		case "sardine":
		case "tuna":
		case "swordfish":
		case "seaweedDish":
		case "shark":
		case "shrimp2":
		case "sardine2":
		case "tuna2":
		case "swordfish2":
		case "shark2":
		case "whale2":
		case "rainbowFish2":
		case "shrimp3":
		case "sardine3":
		case "tuna3":
		case "swordfish3":
		case "shark3":
		case "whale3":
		case "rainbowFish3":
		case "shrimp4":
		case "sardine4":
		case "tuna4":
		case "swordfish4":
		case "shark4":
		case "whale4":
		case "rainbowFish4":
		case "whale":
		case "rainbowFish":
		case "potato":
		case "apple":
		case "goldApple":
		case "bananas":
		case "coconuts":
		case "caveCarrot":
		case "honey":
		case "chicken":
		case "bloodChicken":
		case "cheese":
		case "starfruit":
		case "pineapple":
		case "nopal":
		case "snail":
		case "snail2":
		case "snail3":
		case "snail4":
		case "lobster":
		case "lobster2":
		case "lobster3":
		case "lobster4":
		case "crab":
		case "crab2":
		case "crab3":
		case "crab4":
		case "seaTurtle":
		case "seaTurtle2":
		case "seaTurtle3":
		case "seaTurtle4":
		case "mantaRay":
		case "mantaRay2":
		case "mantaRay3":
		case "mantaRay4":
		case "eel":
		case "eel2":
		case "eel3":
		case "eel4":
			openDialogueToEat(itemChosen);
		break;
		case "pumpkin":
			openDialogue("dialogue-pumpkin-menu");
		break;
		case "candyCane":
			openDialogue("dialogue-candyCane-menu");
		break;
		case"bonemealBin":
			if(bones >= 1)
				confirmDialogue("90%","Select your bones from exploring to add them to the bonemeal bin.","Close","","");
			else 
				confirmDialogue("90%","You don't have any bones to put in your bin.","Close","","");
			break;
		break;
		
		case "bulldozer":
		confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><hr />Click on any building you wish to get rid of.","Close","","")
		break;
		case "turbine":
		case "powerplant":
		case "oilPowerplant":
		case "solarFarm":
		case "waterTower":
		case "waterFilteringPlant":
		case "elementarySchool":
		case "fireStation":
		case "policeStation":
		case "clinic":
		case "prison":
		case "highschool":
		
		if(bulldozer > 0)
		{
			confirmDialogue('90%',"<center><img src='images/bulldozer.png' class='img-medium' /> <img src='images/"+itemChosen+".png' class='img-medium' /><hr />Bulldoze "+getItemName(itemChosen)+"?</center>","Bulldoze","Cancel","BULLDOZE=" + itemChosen)
		}
		break;
		
		case "sand":
			confirmDialogue('90%','Insert the sand in the furnace?','Insert Sand','Cancel','MAKE_GLASS')
		break;
		
		case "satellite":
			confirmDialogue('90%','Load satellite on the rocket?','Load Satellite','Cancel','LOAD_SATELLITE')
		break;
		
		case "zombieFlesh":
			confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><hr />Eat the zombie flesh?</center>","Consume","Cancel","EAT_ZOMBIE_FLESH")
		break;
		case "zombieFlesh2":
			confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><hr />Eat the zombie flesh?</center>","Consume","Cancel","EAT_ZOMBIE_FLESH_2")
		break;
		case "zombieFlesh3":
			confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><hr />Eat the zombie flesh?</center>","Consume","Cancel","EAT_ZOMBIE_FLESH_3")
		break;
		case "zombieFlesh4":
			confirmDialogue('90%',"<center><img src='images/"+itemChosen+".png' class='img-medium' /><hr />Eat the zombie flesh?</center>","Consume","Cancel","EAT_ZOMBIE_FLESH_4")
		break;
		
		case"bones":
		case"ashes":
		case"iceBones":
		case"fishBones":
		case"zombieBones":
		case"rainbowFishBones":
		case"bloodBones":
			openDialogueBones(itemChosen);
		break;
		case "farmer":
			openFarmerDialogues();
		break;
		case "lumberjack":
			sendBytes("CHOP_ALL")
		break;
		
		case "pirates":
		if(hasAnOrb())
		{
			playFowardMenuSound();
			navigateAndLoadImages('orbs','item-section-orbs-1');
		}			
		break;
		case "xpLamp10k":
			resetLampChosen();
			document.getElementById("lamps-to-rub").innerHTML = 1;
			if(xpLamp10k > 1) document.getElementById('multi-lamp').style.display = ""; else document.getElementById('multi-lamp').style.display = "none";
			document.getElementById("lamp-chosen").value = itemChosen;
			openDialogue("dialogue-xpLamp","90%")
		break;
		
		case "mysteryGemBox":
			initAmountWidget("amount-widget-mysteryGemBox",'mysteryGemBox',1,['mysteryGemBox'],[1],"images/mysteryGemBoxGems.png","images/mysteryGemBox.png","MYSTERY_GEM_BOX","NO_CAP");
			amountWidgetAmountInputElementGlobal.value = 1;
			amountWidgetOnKeyUp();
			openDialogue("dialogue-mysteryGemBox","90%");
		break;
		
		case "timeMachine":
			if(timeMachineBloodCrystals > 0) { sendBytes("REFUND_TIME_MACHINE"); return;}
			if(treasureMap == 2) sendBytes("CLICKS_TIME_MACHINE");
			clicksTimeMachine("openInterface");
		break;
		
		case "damagedTeddyBear":
			if(teddyBearQuest != 3) return;
			if(bearFur == 0)
				confirmDialogue("90%","Seems like this teddy bear has a missing arm, maybe there's a way to fix it?","Close","","");
			else
				confirmDialogue("90%","Try to fix teddy bear using bear fur?","Fix","Cancel","QUEST_FIX_TEDDY_BEAR");
		break;
		case "explorer":
			if(rustySwordBought == 0 && cookingUnlocked == 1)
			{
				confirmDialogue("90%","<center><img src='images/combat.png' class='img-large' /><hr />You do not have access to the equipment's section yet.<br /><br /><i style='color:grey'>Buy a rusty sword from the shop to unlock this</i></center>","Close","","")
				return;
			}
			if(rustySwordBought == 1 || addingItemToTradeBooleanGlobal) 
			{
				navigateAndLoadImages('equipment','item-section-exploring-2');
				resetBackground();
				playFowardMenuSound();
				document.getElementById("fight-button").style.display = "";
			}
		break;
		
		case "rustySword":
		case "stinger":
		case "bloodStinger":
		case "boneAmulet":
		case "ghostScanAmulet":
		case "invisibilityAmulet":
		case "enchantedInvisibilityAmulet":
		case "oxygenTank":
		case "ancientOxygenTank":
		case "lightbulb":
		case "sharkFin":
		case "elephantCape":
		case "bearFurMask":
		case "bearFullMask":
		case "bearFurBody":
		case "ironDagger":
		case "offhandIronDagger":
		case "bow":
		case "superBow":
		case "bearFurLegs":
		case "snakeskinMask":
		case "snakeskinBody":
		case "snakeskinLegs":
		case "snakeskinCape":
		case "lizardskinCape":
		case "elephantCape":
		case "knightsCape":
		case "lavaSnakeskinCape":
		case "lavaSnakeskinMask":
		case "lavaSnakeskinBody":
		case "lavaSnakeskinLegs":
		case "lizardskinMask":
		case "lizardskinBody":
		case "lizardskinLegs":
		case "elephantMask":
		case "elephantBody":
		case "elephantLegs":
		case "promethiumHelmet":
		case "promethiumBody":
		case "promethiumLegs":
		case "titaniumHelmet":
		case "titaniumBody":
		case "titaniumLegs":
		case "goldHelmet":
		case "goldBody":
		case "goldLegs":
		case "tridentSoldierHelmet":
		case "tridentSoldierHelmetPlus":
		case "steelHelmet":
		case "steelBody":
		case "fireGloves":
		case "iceGloves":
		case "steelLegs":
		case "skeletonShield":
		case "jungleShield":
		case "superJungleShield":
		case "knightsShield":
		case "birdFeed":
		case "fireBirdFeed":
		case "iceBirdFeed":
		case "skeletonSword":
		case "enchantedSkeletonSword":
		case "enchantedSuperBow":
		case "scythe":
		case "trident":
		case "superPoisonTrident":
		case "superPoisonSpear":
		case "enchantedScythe":
		case "poisonSpear":
		case "stoneAmulet":
		case "sapphireStoneAmulet":
		case "emeraldStoneAmulet":
		case "rubyStoneAmulet":
		case "diamondStoneAmulet":
		case "bloodDiamondStoneAmulet":
		case "mace":
		case "staff":
		case "darkMageHood":
		case "darkMageTop":
		case "darkMageBottom":
		case "trimmedDarkMageHood":
		case "trimmedDarkMageTop":
		case "trimmedDarkMageBottom":
		case "bloodReaperHood":
		case "bloodReaperTop":
		case "bloodReaperBottom":
		case "trimmedBloodReaperHood":
		case "trimmedBloodReaperTop":
		case "trimmedBloodReaperBottom":
		case "silverScimitar":
			sendBytes("EQUIP=" + itemChosen)
		break;
		
		case "bronzeStarLamp":
		if(bronzeStarLampChargeTrees >= 50 && bronzeStarLampChargeFarm >= 50 && bronzeStarLampChargeFood >= 50)
		{
			confirmDialogue("90%","<center><img src='images/bronzeStarLamp.png' class='img-large' /><br /><br />The lamp is almost ready, a <img src='images/shootingStar.png' class='img-small' /> shooting star will fininalize the charge.</center>","Add Shooting Star","Cancel","USE_STAR_LAMP=bronze")
		}
		else
		{
			confirmDialogue("90%","<center><img src='images/bronzeStarLamp.png' class='img-large' /><br /><br /><img src='images/bronzeStar.png' class='img-small' /> This lamp can only be used once charged. <img src='images/bronzeStar.png' class='img-small' /> <br /><br />You must chop down 50 bronze star trees, harvest 50 bronze star farming plots, and eat a total of 50 bronze star fish.</center>","Close","","")
		}
		break;
		
		case "silverStarLamp":
		if(silverStarLampChargeTrees >= 50 && silverStarLampChargeFarm >= 50 && silverStarLampChargeFood >= 50)
		{
			confirmDialogue("90%","<center><img src='images/silverStarLamp.png' class='img-large' /><br /><br />The lamp is almost ready, a <img src='images/shootingStar.png' class='img-small' /> shooting star will fininalize the charge.</center>","Add Shooting Star","Cancel","USE_STAR_LAMP=silver")
		}
		else
		{
			confirmDialogue("90%","<center><img src='images/silverStarLamp.png' class='img-large' /><br /><br /><img src='images/silverStar.png' class='img-small' /> This lamp can only be used once charged. <img src='images/silverStar.png' class='img-small' /> <br /><br />You must chop down 50 silver star trees, harvest 50 silver star farming plots, and eat a total of 50 silver star fish.</center>","Close","","")
		}
		break;
		
		case "goldStarLamp":
		if(goldStarLampChargeTrees >= 50 && goldStarLampChargeFarm >= 50 && goldStarLampChargeFood >= 50)
		{
			confirmDialogue("90%","<center><img src='images/goldStarLamp.png' class='img-large' /><br /><br />The lamp is almost ready, a <img src='images/shootingStar.png' class='img-small' /> shooting star will fininalize the charge.</center>","Add Shooting Star","Cancel","USE_STAR_LAMP=gold")
		}
		else
		{
			confirmDialogue("90%","<center><img src='images/goldStarLamp.png' class='img-large' /><br /><br /><img src='images/goldStar.png' class='img-small' /> This lamp can only be used once charged. <img src='images/goldStar.png' class='img-small' /> <br /><br />You must chop down 50 gold star trees, harvest 50 gold star farming plots, and eat a total of 50 gold star fish.</center>","Close","","")
		}
		break;
		
		case "skeletonHead":
		case "skeletonLeftArm":
		case "skeletonRightArm":
		case "skeletonLeftLeg":
		case "skeletonRightLeg":
		if(skeletonHead > 0 && skeletonLeftArm > 0 && skeletonRightArm > 0 && skeletonLeftLeg > 0 && skeletonRightLeg > 0)
		{
			setCraftList('skeletonCemetery');
			navigate('craftingItems');
		}
		break;
		
		case "oilPlatform":
			sendBytes('INSTALL_OIL_PLATFORM');
		break;
		
		case "oilPlatformDeckBroken":
			setCraftList('oilPlatformDeckBroken');
			navigate('craftingItems');
		break;
		
		case "seaweed":
			setCraftList('seaweed');
			navigate('craftingItems');
		break;
		
		case "offshoreOilRigBroken":
			setCraftList('offshoreOilRigBroken');
			navigate('craftingItems');
		break;
		case "oilPlatformBaseBroken":
			setCraftList('oilPlatformBaseBroken');
			navigate('craftingItems');
		break;
		
		case "oilPlatformBase":
		case "offshoreOilRig":
		case "oilPlatformDeck":
			setCraftList('oilPlatform');
			navigate('craftingItems');
		break;
		
		case "treasureMap":
			if(treasureMap == 1) confirmDialogue("90%","<b>CLUE</b><hr />Weaker than bones, and even weaker as I do not yield.","Close","","");
			if(treasureMap == 2) confirmDialogue("90%","<b>CLUE</b><hr />Wish it was tomorrow.","Close","","");
			if(treasureMap == 3) confirmDialogue("90%","<b>CLUE</b><hr />Pure Au.","Close","","");
			if(treasureMap == 4) confirmDialogue("90%","<b>CLUE</b><hr />A toast for a faster melt.","Close","","");
			if(treasureMap == 5) confirmDialogue("90%","<b>CLUE</b><hr />Full of spots to be sold.","Close","","");
			if(treasureMap == 6) confirmDialogue("90%","<b>CLUE</b><hr />What a nice collection. <br />BURN THEM.","Close","","");
			if(treasureMap == 7) confirmDialogue("90%","<b>CLUE</b><hr />Don't come in my store unless you bring the blood.","Close","","");
		break;
		case "greenTreasureMap":
			if(greenTreasureMap == 1) confirmDialogue("90%","<b>CLUE</b><hr />Freezing most things conserves them, including calcium.","Close","","");
			if(greenTreasureMap == 2) confirmDialogue("90%","<b>CLUE</b><hr />Burn me to allow you to burn me again.","Close","","");
			if(greenTreasureMap == 3) confirmDialogue("90%","<b>CLUE</b><hr />IV Crushers.","Close","","");
			if(greenTreasureMap == 4) confirmDialogue("90%","<b>CLUE</b><hr />Naturally, the color of your coins but is no ore.  Sell me.","Close","","");
			if(greenTreasureMap == 5) confirmDialogue("90%","<b>CLUE</b><hr />As you get warmer, the beep increases in frequency.","Close","","");
			if(greenTreasureMap == 6) confirmDialogue("90%","<b>CLUE</b><hr />Fancy vials filled with enriched liquid.","Close","","");
			if(greenTreasureMap == 7) confirmDialogue("90%","<b>CLUE</b><hr />Well well well, what do we have here.","Close","","");
		break;
		
		case "hpEmblemsTab":
		case "emblemsTab":
			navigate("emblemHints");
		break;
		case "treasureChest":
			openDialogue("dialogue-chest-menu");
		break;
		case "greenTreasureChest":
			openDialogue("dialogue-green-chest-menu");
		break;
		case "redTreasureChest":
			confirmDialogue('90%',"You are too fast!  I must code this.<br /><br /><i style='color:grey'>-Smitty</i>",'Close','','')
		break;
		case "dailyChest":
			openDialogue("dialogue-daily-chest-menu");
		break;
		case "mimicItem":
			confirmDialogue("90%","<center><img src='images/mimicItem.png' class='img-large' /><br /><br />Fight the mimic?</center>","Fight","Cancel","FIGHT_BOSS=mimic")
		break;
		case "bearFur":
		setCraftList('bearFur');
		navigate('craftingItems');
		break;
		
		case "roverBlueprints":
		setCraftList('roverBlueprints');
		navigate('craftingItems');
		break;
		
		case "satelliteBlueprints":
		setCraftList('satelliteBlueprints');
		navigate('craftingItems');
		break;
		
		case "golemHair":
			confirmDialogue("90%","<center><img src='images/pimpedTeddyBear.png' class='img-large' /><hr />Pimp the teddy bear?<br /><br />" + createHTMLBoxWithChecks("golemHair",1, formatNumber(1)) +  createHTMLBoxWithChecks("teddyBear",1, formatNumber(1)) +"</center>","Attach Hair","Close","PIMP_TEDDY_BEAR");
		break;
		
		case "snakeskin":
		setCraftList('snakeskin');
		navigate('craftingItems');
		break;
		
		case "elephantSkin":
		setCraftList('elephantSkin');
		navigate('craftingItems');
		break;
		
		case "promethiumHelmetMould":
		case "promethiumBodyMould":
		case "promethiumLegsMould":
		setCraftList('promethiumMould');
		navigate('craftingItems');
		break;
		
		case "titaniumHelmetMould":
		case "titaniumBodyMould":
		case "titaniumLegsMould":
		setCraftList('titaniumMould');
		navigate('craftingItems');
		break;
		
		case "scytheEnchanter":
		setCraftList('scytheEnchanter');
		navigate('craftingItems');
		break;
		
		case "boneAmuletEnchanter":
		setCraftList('boneAmuletEnchanter');
		navigate('craftingItems');
		break;
		
		case "poisonSquidInk":
		setCraftList('poisonSquidInk');
		navigate('craftingItems');
		break;
		
		case "squidHorn1":
		case "squidHorn2":
		setCraftList('squidHorn');
		navigate('craftingItems');
		break;
		
		case "skeletonSwordEnchanter":
		setCraftList('skeletonSwordEnchanter');
		navigate('craftingItems');
		break;
		
		case "superBowEnchanter":
		setCraftList('superBowEnchanter');
		navigate('craftingItems');
		break;
		
		case "bloodDiamondStoneRingEnchanter":
		setCraftList('bloodDiamondStoneRingEnchanter');
		navigate('craftingItems');
		break;
		
		case "invisibilityAmuletEnchanter":
		setCraftList('invisibilityAmuletEnchanter');
		navigate('craftingItems');
		break;
		
		
		case "lizardskin":
		setCraftList('lizardskin');
		navigate('craftingItems');
		break;
		
		case "lavaSnakeskin":
		setCraftList('lavaSnakeskin');
		navigate('craftingItems');
		break;
		
		
		case "hpEmblem1Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem2Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem4Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem5Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem6Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem7Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_EMBLEM','Charge Emblem')
		break;
		case "hpEmblem1":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem2":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem3":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem4":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem5":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem6":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "hpEmblem7":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_EMBLEM','Absorb Emblem')
		break;
		case "veryHighWindMagicOrb":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_VERY_HIGH_WIND','Change Wind Speed')
		break;
		case "bloodMoonMagicOrb":
		buyFromShop(itemChosen,['images/'+itemChosen+'.png'],[1],[window[itemChosen] >= 1], 'USE_BLOOD_MOON_MAGIC_ORB','Trigge a Blood Moon')
		break;
		case "magicEmblem1Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_MAGIC_EMBLEM','Charge Emblem')
		break;
		case "magicEmblem3Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_MAGIC_EMBLEM','Charge Emblem')
		break;
		case "magicEmblem4Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_MAGIC_EMBLEM','Charge Emblem')
		break;
		case "magicEmblem5Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_MAGIC_EMBLEM','Charge Emblem')
		break;
		case "magicEmblem6Uncharged":
		buyFromShop(itemChosen,['images/bloodCrystals.png'],[250],[bloodCrystals >= 250], 'CHARGE_MAGIC_EMBLEM','Charge Emblem')
		break;
		case "magicEmblem1":
		case "magicEmblem2":
		case "magicEmblem3":
		case "magicEmblem4":
		case "magicEmblem5":
		case "magicEmblem6":
		openMagicEmblemDialogue("none");
		firstLoadCombatSpellsAndPotionsIterfaceGlobal = true;
		break;
		case "tradingPost":
		if(isInTradeScreenGlobal)
			navigate('tradingPost');
		else
		{
			if(disableTradeRequests == 1) 
				document.getElementById("recieveTradeRequests-td").innerHTML = "OFF"; 
			else 
				document.getElementById("recieveTradeRequests-td").innerHTML = "ON";
			

			document.getElementById("direct-trade-info-button").innerHTML = "<span style='font-size:10pt;'><br /><span style='color:lime'>Trading post has been made free to use by anybody. " + "<img src='images/check.png' class='img-tiny' /></span></span>";
			document.getElementById("tradingPost-directButton").onclick = function() { closeSmittysDialogue('dialogue-tradingPost-select');openDialogue('dialogue-tradingPost-tradeRequest'); /*closeSmittysDialogue('dialogue-tradingPost-select');openDialogue('dialogue-tradingPost-locked');*/ }
			
			openDialogue("dialogue-tradingPost-select");
		}
		break;
	}
}

function createHTMLBoxWithChecks(itemChosen, amountNeeded, label)
{
	var check = "<img src='images/check.png' class='img-small' />";
	var backgroundColor = "#99ff99";
	var borderColor = "#004d00";
	if(window[itemChosen] < amountNeeded)
	{
		backgroundColor = "#ffcccc";
		borderColor = "#4d0000";
		check = "<img src='images/x.png' class='img-small' />";
	}

	if(!isNaN(label)) label = formatNumber(label);
		
	var htmlOutput = "<span onclick='showTitleHTMLBox(this)' class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><span style='display:none;'>"+getItemName(itemChosen)+"<hr /></span><img src='images/"+getPngOrGif(itemChosen,false)+"' class='img-small-medium' /> "+label+" "+check+"</span>";
	return htmlOutput;
}

function showTitleHTMLBox(spanEle)
{
	spanEle.getElementsByTagName("span")[0].style.display = "";
}

function createHTMLBox(img, label)
{
	var check = "<img src='images/check.png' class='img-small' />";
	var backgroundColor = "#99ff99";
	var borderColor = "#004d00";
	var htmlOutput = "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='images/"+img+".png' class='img-small-medium' /> "+label+" "+check+"</span>";
	return htmlOutput;
}

function createHTMLBoxRed(img, label)
{
	var check = "<img src='images/x.png' class='img-small' />";
	var backgroundColor = "#ffcccc";
	var borderColor = "#4d0000";
	var htmlOutput = "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='images/"+img+".png' class='img-small-medium' /> "+label+" "+check+"</span>";
	return htmlOutput;
}

//returns 0 if not sellable
function getItemPrice(itemChosen)
{
	switch(itemChosen)
	{
		case "bronzeBars":
		{
			if(craftingResearchLevel >= 2)
				return 25 * 4;
			else
				return 25;
		}
		case "ironBars":
		{
			if(craftingResearchLevel >= 2)
				return 200 * 4;
			else
				return 200;
		}
		case "silverBars":
		{
			if(craftingResearchLevel >= 2)
				return 500 * 4;
			else
				return 500;
		}
		case "goldBars":
		{
			if(craftingResearchLevel >= 2)
				return 5000 * 4;
			else
				return 5000;
		}
		case "promethiumBars":
		{
			if(craftingResearchLevel >= 2)
				return 1000000 * 4;
			else
				return 1000000;
		}
		case "titaniumBars":
		{
			if(craftingResearchLevel >= 2)
				return 5000000 * 4;
			else
				return 5000000;
		}
		
		case "ancientOreBars":
		{
			if(craftingResearchLevel >= 2)
				return 10000000 * 4;
			else
				return 10000000;
		}
		
		case "refinedGoldBars":
			return 5000000;
		break;
		case "refinedPromethiumBars":
			return 50000000;
		break;
		case "treeRoots":
		{
			if(woodcuttingResearchLevel >= 3)
				return 250 * 4;
			else
				return 250;
		}
		case "stone":
			return 1;
		case "copper":
			return 2;
		case "iron":
			return 5;
		case "silver":
			return 50;
		case "gold":
			return 100;
		case "promethium":
			return 100;
		case "titanium":
			return 1000;
		case "ancientOre":
			return 5000;
		case "bloodstone":
			return 100000;
		case "logs":
			return 100;
		case "oakLogs":
			return 500;
		case "willowLogs":
			return 1000;
		case "mapleLogs":
			return 2500;
		case "redwoodLogs":
			return 10000;
		case "pineLogs":
			return 25000;
		case "hauntedLogs":
			return 100000;
		case "jungleLogs":
			return 250000;
		case "lavaLogs":
			return 500000;
		case "goldLogs":
			return 800000;
		case "magicLogs":
			return 1200000;
		case "sapphire":
			return 100000;
		case "emerald":
			return 200000;
		case "ruby":
			return 500000;
		case "diamond":
			return 1000000;
		case "bloodDiamond":
			return 25000000;
		case "dottedGreenLeaf":
			return 20000;
		case "greenLeaf":
		case "stripedGreenLeaf":
			return 40000;
		case "limeLeaf":
			return 500000;
		case "stripedGoldLeaf":
		case "goldLeaf":
			return 750000;
		case "crystalLeaf":
		case "stripedCrystalLeaf":
			return 1000000;
		case "redMushroom":
			return 5000;
		case "bronzeStatueMetalDetector":
			return 500000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeStatueMetalDetector2":
			return 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeStatueMetalDetector3":
			return 3000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeStatueMetalDetector4":
			return 10000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironStatueMetalDetector":
			return 800000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //800k
		case "ironStatueMetalDetector2":
			return 4500000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //4500k
		case "ironStatueMetalDetector3":
			return 8000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //8000k
		case "ironStatueMetalDetector4":
			return 15000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //15000k
		case "silverStatueMetalDetector":
			return 1500000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //1500k ---
		case "silverStatueMetalDetector2":
			return 6000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //6000k
		case "silverStatueMetalDetector3":
			return 15000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //15000k
		case "silverStatueMetalDetector4":
			return 30000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); //30000k
		case "goldStatueMetalDetector":
			return 4000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));  //4000k
		case "goldStatueMetalDetector2":
			return 10000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldStatueMetalDetector3":
			return 20000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldStatueMetalDetector4":
			return 50000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));	
		case "promethiumStatueMetalDetector":
			return 8000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); 
		case "promethiumStatueMetalDetector2":
			return 20000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumStatueMetalDetector3":
			return 40000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumStatueMetalDetector4":
			return 100000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumStatueMetalDetector":
			return 16000000 * (1 + ((greenMetelDetectorOrb * 10) / 100)); 
		case "titaniumStatueMetalDetector2":
			return 40000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumStatueMetalDetector3":
			return 100000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumStatueMetalDetector4":
			return 500000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeSuperStatueMetalDetector":
			return 30 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeSuperStatueMetalDetector2":
			return 75 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeSuperStatueMetalDetector3":
			return 200 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeSuperStatueMetalDetector4":
			return 750 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironSuperStatueMetalDetector":
			return 55 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironSuperStatueMetalDetector2":
			return 120 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironSuperStatueMetalDetector3":
			return 400 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironSuperStatueMetalDetector4":
			return 1000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverSuperStatueMetalDetector":
			return 80 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverSuperStatueMetalDetector2":
			return 200 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverSuperStatueMetalDetector3":
			return 700 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverSuperStatueMetalDetector4":
			return 1800 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldSuperStatueMetalDetector":
			return 110 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldSuperStatueMetalDetector2":
			return 300 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldSuperStatueMetalDetector3":
			return 1000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldSuperStatueMetalDetector4":
			return 2200 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumSuperStatueMetalDetector":
			return 150 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumSuperStatueMetalDetector2":
			return 550 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumSuperStatueMetalDetector3":
			return 2000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "promethiumSuperStatueMetalDetector4":
			return 3000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumSuperStatueMetalDetector":
			return 200 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumSuperStatueMetalDetector2":
			return 800 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumSuperStatueMetalDetector3":
			return 3500 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "titaniumSuperStatueMetalDetector4":
			return 5000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeMegaStatueMetalDetector":
			return 280 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeMegaStatueMetalDetector2":
			return 1500 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeMegaStatueMetalDetector3":
			return 4500 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "bronzeMegaStatueMetalDetector4":
			return 8000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironMegaStatueMetalDetector":
			return 375 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironMegaStatueMetalDetector2":
			return 4500 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironMegaStatueMetalDetector3":
			return 6000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "ironMegaStatueMetalDetector4":
			return 10000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverMegaStatueMetalDetector":
			return 450 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverMegaStatueMetalDetector2":
			return 8000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverMegaStatueMetalDetector3":
			return 10000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "silverMegaStatueMetalDetector4":
			return 15000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldMegaStatueMetalDetector":
			return 525 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldMegaStatueMetalDetector2":
			return 12000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldMegaStatueMetalDetector3":
			return 15000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "goldMegaStatueMetalDetector4":
			return 22000 * 1000000 * (1 + ((greenMetelDetectorOrb * 10) / 100));
		case "smallBagOfCash":
			return 1000000;
		case "bagOfCash":
			return 100000000;
		case "bagOfCash2":
			return 1000000000;
		case "bagOfCash3":
			return 50000000000;
		case "hauntedPainting":
			return 1000000000;
		case "goldSapphireDisplay":
			return 100 * 1000000;
		case "goldEmeraldDisplay":
			return 250 * 1000000;
		case "goldRubyDisplay":
			return 750 * 1000000;
		case "goldDiamondDisplay":
			return 2000 * 1000000;
		case "promethiumSapphireDisplay":
			return 500 * 1000000;
		case "promethiumEmeraldDisplay":
			return 1000 * 1000000;
		case "promethiumRubyDisplay":
			return 5000 * 1000000;
		case "promethiumDiamondDisplay":
			return 10000 * 1000000;
		case "moonStone":
			return 10000000;
		case "marsRock":
			return 20000000;
		case "shootingStar":
			return 10000000000;
		case "bearFur":
			return 25000;
		case "snakeskin":
			return 100000;
		case "lavaSnakeskin":
			return 250000;
		case "lizardskin":
			return 500000;
		case "elephantSkin":
			return 1000000;
		case "goldKey":
			return 250;
		case "sapphireKey":
			return 100000;
		case "emeraldKey":
			return 200000;
		case "rubyKey":
			return 500000;
		case "diamondKey":
			return 1000000;
		case "promethiumKey":
			return 10000000;
		case "promethiumSapphireKey":
			return 10100000;
		case "promethiumEmeraldKey":
			return 10200000;
		case "promethiumRubyKey":
			return 10500000;
		case "promethiumDiamondKey":
			return 11000000;
		case "bronzeKey":
			return 50;
		case "bronzeSapphireKey":
			return 100050;
		case "bronzeEmeraldKey":
			return 200050;
		case "bronzeRubyKey":
			return 500050;
		case "bronzeDiamondKey":
			return 1000050;
		
	}
	
	return 0;
}	


function hasAnOrb()
{
	if(blueEmptyOrb > 0 || greenEmptyOrb > 0 || redEmptyOrb > 0)
		return true;
	
	for(var i = 0; i < blueOrbsGlobal.length; i++)
	{
		if(window[blueOrbsGlobal[i]] > 0)
			return true;
	}
	
	return false;
}

function refreshHomeTab()
{
	document.getElementById("pirates-totalBlueOrbs").innerHTML = totalBlueOrbs();
	document.getElementById("pirates-totalGreenOrbs").innerHTML = totalGreenOrbs();
	if(mineralNecklace2 == 1) document.getElementById("item-img-mineralNecklace").src = "images/mineralNecklace2.png";
	if(mineralNecklace2 == 1) document.getElementById("mineralNecklace-dialogue-img").src = "images/mineralNecklace2.png";
	
}

function totalBlueOrbs()
{
	var total = 0;
	for(var i = 0; i < blueOrbsGlobal.length; i++)
	{
		if(window[blueOrbsGlobal[i]] > 0)
			total += window[blueOrbsGlobal[i]];
	}
	
	return total;
}

function totalGreenOrbs()
{
	var total = 0;
	for(var i = 0; i < greenOrbsGlobal.length; i++)
	{
		if(window[greenOrbsGlobal[i]] > 0)
			total += window[greenOrbsGlobal[i]];
	}
	
	return total;
}

function refreshEnrichedPotionTimersShop()
{
	var chosenVar = "";
	
	chosenVar = "richSeedFinderPotion"; document.getElementById("enrichedPotion-timer-" + chosenVar).innerHTML = formatTime(getPotionTimer(chosenVar));
	chosenVar = "richPiratesPotion"; document.getElementById("enrichedPotion-timer-" + chosenVar).innerHTML = formatTime(getPotionTimer(chosenVar));
	chosenVar = "richGeodePotion"; document.getElementById("enrichedPotion-timer-" + chosenVar).innerHTML = formatTime(getPotionTimer(chosenVar));
	chosenVar = "richCombatPotion"; document.getElementById("enrichedPotion-timer-" + chosenVar).innerHTML = formatTime(getPotionTimer(chosenVar));
}

function getPngOrGif(itemName, returnExtentionOnly)
{
	if(itemName == "plasma" || itemName.startsWith("enchanted") || itemName == "bloodReaperHood" || itemName == "trimmedBloodReaperHood" || itemName == "bloodDiamond" || itemName == "bloodstone")
		if(!returnExtentionOnly) return itemName + ".gif"; else return ".gif"
	else
		if(!returnExtentionOnly) return itemName + ".png"; else return ".png"
}


//DOCUMENTATION IMPORTANT!!! HOW WE LOAD IMAGES TO ITEM BOXES.
//functions used: loadImages, addImgToLoad, addItemBox
//arrays used below
//we use an array to store unseen images.
//when loading a tab, if that player has that item, we then pull the image from the server.
//START
var array_item_section_mining_1 = [];
var array_item_section_mining_2 = [];
var array_item_section_crafting_1 = [];
var array_item_section_woodcutting_1 = [];
var array_item_section_farming_1 = [];
var array_item_section_brewing_1 = [];
var array_item_section_exploring_1 = [];
var array_item_section_cooking_1 = [];
var array_item_section_exploring_2 = [];
var array_item_section_home_1 = [];
var array_item_section_orbs_1 = [];
var array_item_section_stew_1 = [];
var array_item_section_mayor_electicity = [];
var array_item_section_mayor_water = [];
var array_item_section_mayor_education = [];
var array_item_section_mayor_security = [];
var array_item_section_mayor_uniques = [];




var arrayItemIsInSection = [] // --> arrayItemIsInSection['diamond'] = item-seciton-mining-1 (used if a player gets a diamond and is in that section, refresh section)
var alreadyLoadedImages = new Set(); //put in here if image has been loaded.

function loadImages(section)
{
	var arrayImages = window["array_"+section.replaceAll("-","_")];

	for(var i = 0; i < arrayImages.length; i++)
	{
		var itemNameFound = arrayImages[i];
		if(!alreadyLoadedImages.has(itemNameFound) && window[itemNameFound] > 0)
		{
			alreadyLoadedImages.add(itemNameFound);
			var imgName = itemNameFound;
			
			//exceptions
			if(imgName == "explorer")
			{
				if(heroGender == "female") imgName = "femaleExplorer";
				else if(heroGender == "male") imgName = "maleExplorer";
			}
			
			document.getElementById("item-img-" + itemNameFound).src = "images/" + getPngOrGif(imgName, false);
			
			if(itemNameFound.startsWith("shiny") || itemNameFound == "goldHelmet" || itemNameFound == "goldBody" || itemNameFound == "goldLegs")
			{
				applyShinyGif("item-img-" + itemNameFound, true)
			}
		}
	}
}

function addImgToLoad(section, itemName)
{
	//console.log("array_"+section.replaceAll("-","_"));
	window["array_"+section.replaceAll("-","_")].push(itemName);
	arrayItemIsInSection[itemName] = section;
}
//END

//DOCUMENTATION IMPORTANT!!! HOW WE LOAD IMAGES TO ITEM BOXES. see above
function addItemBox(itemChosen, maxAmount, desc, section, color, itemName, showCapacity)
{
	if(showCapacity && capacityLevel < 8)
		desc += "<br /><span class='wrap-text'><b>Capacity:</b> <span style='vertical-align: text-top;' data-item-display='"+itemChosen+"Capacity'>0</span></span>";
	
	var sectionDiv = document.getElementById(section);
	var divButton = document.createElement("div");
	divButton.setAttribute("class","main-button-lighter");
	divButton.setAttribute("onclick","clicksItem('"+itemChosen+"')")
	divButton.setAttribute("id","item-box-" + itemChosen)
	divButton.style.backgroundColor = color;
	divButton.style.display = "none";
	
	var tableElement = document.createElement("table");
	var trElement = document.createElement("tr");
	
	//td 1
	var tdElement = document.createElement("td");
	tdElement.setAttribute("style","width:20%")
	var imgElement = document.createElement("img");
	var shinyImgElement = document.createElement("img");
	
	//set actual image
	addImgToLoad(section,itemChosen)
	
	if(itemChosen == "oil")
		imgElement.setAttribute("src","images/oil_lighter.png");
	else
	{
		//imgElement.setAttribute("src","images/" + getPngOrGif(itemChosen, false));
		imgElement.setAttribute("src","images/empty100_100.png");
	}
	//end of set actual image

	
	

	imgElement.setAttribute("id","item-img-" + itemChosen);
	imgElement.setAttribute("class","img-medium");
	
	
	var divToStackImagesElement = document.createElement("div");
	
	var exploringImageWeaponElement = document.createElement("img");
	
	if(itemChosen == "explorer")
	{
		imgElement.setAttribute("class","img-large");
		divToStackImagesElement.setAttribute("style","position: relative; left: 0; top : 0");
		exploringImageWeaponElement.setAttribute("id","explorer-weapon-img")
		exploringImageWeaponElement.setAttribute("class","img-large");
		exploringImageWeaponElement.setAttribute("src","images/noneWield.png");
		exploringImageWeaponElement.setAttribute("style","z-index:5;position: absolute");
	}
	
	//td 2
	var tdElement2 = document.createElement("td");
	tdElement2.setAttribute("class","main-button-table-tr-td2");

	//amount owned
	var span1 = document.createElement("span");
	if(maxAmount >= 0)
	{
		span1.setAttribute("class","main-button-span-item-owned");
		span1.setAttribute("id","item-box-amount-" + itemChosen);
	}
	
	//name
	var span2 = document.createElement("span");
	span2.innerHTML = getItemName(itemName).toUpperCase();
	
	var hr1 = document.createElement("hr");
	hr1.setAttribute("class","no-space")
	//desc
	var span3 = document.createElement("span");
	span3.setAttribute("class","main-button-span-desc");
	span3.innerHTML = desc;
	
	//append all
	tdElement2.appendChild(span1);
	tdElement2.appendChild(span2);
	tdElement2.appendChild(hr1);
	tdElement2.appendChild(span3);
	
	if(itemChosen == "explorer")
	{
		tdElement.appendChild(divToStackImagesElement);
		divToStackImagesElement.append(exploringImageWeaponElement)
		divToStackImagesElement.appendChild(imgElement)
	}
	else
	tdElement.appendChild(imgElement);
	
	trElement.appendChild(tdElement);
	trElement.appendChild(tdElement2);
	tableElement.appendChild(trElement);
	divButton.appendChild(tableElement);
	sectionDiv.appendChild(divButton);
}

function loadItemBoxes()
{
	
	//colors
	var mainColor = "#1a1a1a";
	var mainColorLight = "#4d4d4d";
	var mainColorBrown = "#4d2600";
	var mainColorDarkGreen = "#1a3300";
	var mainColorDarkLighterGreen = "#004d00";
	var mainColorDarkPurple = "#330033";
	var mainColorDarkLighterPurple = "#993366";
	var mainColorDarkLightestPurple = "#660066";
	var mainColorDarkLightGold = "#4d2e00";
	var mainColorDarkLighterGold = "#4d3d00";
	var mainColorArtifact = "#802000";
	var mainColorGoldCooking = "#4d4d00";
	var mainColorGoldCookingSecondary = "#330d00";
	var mainColorGoldCookingSecondaryCooked = "#661a00";
	var mainColorEnergyCookingTab = "#558000";
	var itemChosen = "";
	
	//mining ite1
	addItemBox("mysteryGemBox", 0, "<span style='color:gold'>Contains a sapphire, emerald, ruby or diamond.</span><br />Equal chances of getting a type of gem. (25%)", "item-section-mining-1", mainColor,"Mystery Gem");
	
	
	addItemBox("sapphire", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('sapphire'))+" </span>", "item-section-mining-1", mainColor,"Sapphire", false);
	addItemBox("emerald", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('emerald'))+" </span>", "item-section-mining-1", mainColor,"Emerald", false);
	addItemBox("ruby", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('ruby'))+" </span>", "item-section-mining-1", mainColor,"Ruby", false);
	addItemBox("diamond", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('diamond'))+" </span>", "item-section-mining-1", mainColor,"diamond", false);
	addItemBox("bloodDiamond", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bloodDiamond'))+" </span>", "item-section-mining-1", mainColor,"blood diamond", false);
	addItemBox("gemFinderCrate", 0, "A crate filled with items.", "item-section-mining-1", mainColor,"Resource Crate");
	
	addItemBox("geode1", 0, "<span style='color:orange'>Obtained from drills.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	addItemBox("geode2", 0, "<span style='color:orange'>Obtained from crushers.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	addItemBox("geode3", 0, "<span style='color:orange'>Obtained from giant drills.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	addItemBox("geode4", 0, "<span style='color:orange'>Obtained from road headers.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	addItemBox("geode5", 0, "<span style='color:orange'>Obtained from excavators.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	addItemBox("geode6", 0, "<span style='color:orange'>Obtained from giant excavators.</span><br />Can be cracked open.", "item-section-mining-1", mainColor,"Geode", false);
	
	addItemBox("oil", 0, "<span class='wrap-text'><b>Oil Per Second:</b> <span style='color:lime;'>(+<span data-item-display='oilIn'>0</span>)</span><span id='oil-out-label' style='color:red;display:none;'>(-<span data-item-display='oilOut'>0</span>)</span></span>", "item-section-mining-1", mainColor,"oil", true);
	addItemBox("minersCrate", 0, "A crate filled with items.", "item-section-mining-1", mainColor,"Resource Crate");
	addItemBox("moonStone", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('moonStone'))+" </span>", "item-section-mining-1", mainColor,"moonstone", false);
	addItemBox("marsRock", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('marsRock'))+" </span>", "item-section-mining-1", mainColor,"mars rock", false);
	addItemBox("stone", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('stone')+" </span>", "item-section-mining-1", mainColor,"stone", true);
	addItemBox("copper", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('copper')+" </span>", "item-section-mining-1", mainColor,"copper", true);
	addItemBox("iron", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('iron')+" </span>", "item-section-mining-1", mainColor,"iron", true);
	addItemBox("silver", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('silver')+" </span>", "item-section-mining-1", mainColor,"silver", true);
	addItemBox("gold", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('gold')+" </span>", "item-section-mining-1", mainColor,"gold", true);
	addItemBox("promethium", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethium'))+" </span>", "item-section-mining-1", mainColor,"promethium", true);
	addItemBox("titanium", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('titanium'))+" </span>", "item-section-mining-1", mainColor,"titanium", true);
	addItemBox("ancientOre", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('ancientOre'))+" </span>", "item-section-mining-1", mainColor,"ancient ore", true);
	addItemBox("bloodstone", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bloodstone'))+" </span>", "item-section-mining-1", mainColor,"blood stone", false);
	
	for(var i = 0; i < geodesArrayGlobal.length; i++)
	{
		var geode = geodesArrayGlobal[i];
		addItemBox(geode.itemName + "Unidentified", 0, "<span style='color:orange;'>I can examine this.</span>", "item-section-mining-1", mainColor,"Unidentified Mineral", false)
	}
	
	for(var i = 0; i < geodesArrayGlobal.length; i++)
	{
		var geode = geodesArrayGlobal[i];
		
		var mineralTimeToAdd = "<span id='"+geode.itemName+"-timer' style='display:none;'><img src='images/clock_white.png' class='img-tiny' /> <span style='color:gold'>" + formatTime(getMineralTimeAdded(geode.itemName,1)) + "</span><br /></span>";
		addItemBox(geode.itemName, 0, mineralTimeToAdd + "<span>+"+formatNumber(geode.xpGained)+" XP</span>", "item-section-mining-1", mainColor,geode.itemName.substr(0, geode.itemName.length - 7), false)
	}
	
	//mining item2
	addItemBox("miners", 10, "<span class='wrap-text'>Mines various types of ore.<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='minersXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"miners")
	addItemBox("drills", 5, "<span style='color:yellow' class='wrap-text'><b>Drills On:</b> <span style='vertical-align: text-top;' data-item-display='drillsOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('drills')+"<br /><span id='drillBits-label' style='display:none;'> <img src='images/drillBits.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='drillsXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"drills")
	addItemBox("crushers", 5, "<span style='color:yellow' class='wrap-text'><b>Crushers On:</b> <span style='vertical-align: text-top;' data-item-display='crushersOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('crushers')+"<br /><span id='crusherContainers-label' style='display:none;'> <img src='images/crusherContainers.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='crushersXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"crushers")
	addItemBox("giantDrills", 5, "<span style='color:yellow' class='wrap-text'><b>Giant Drills On:</b> <span style='vertical-align: text-top;' data-item-display='giantDrillsOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('giantDrills')+"<br /><span id='giantDrillHeads-label' style='display:none;'> <img src='images/giantDrillHeads.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='giantDrillsXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"giant Drills");
	addItemBox("roadHeaders", 5, "<span style='color:yellow' class='wrap-text'><b>Road Headers On:</b> <span style='vertical-align: text-top;' data-item-display='roadHeadersOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('roadHeaders')+"<br /><span id='roadHeadersSpikes-label' style='display:none;'> <img src='images/roadHeadersSpikes.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='roadHeadersXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"Road Headers");
	addItemBox("excavators", 5, "<span style='color:yellow' class='wrap-text'><b>Excavators On:</b> <span style='vertical-align: text-top;' data-item-display='excavatorsOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('excavators')+"<br /><span id='excavatorsSawBlades-label' style='display:none;'> <img src='images/excavatorsSawBlades.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='excavatorsXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"Excavators");
	addItemBox("giantExcavators", 5, "<span style='color:yellow' class='wrap-text'><b>Giant excavators On:</b> <span style='vertical-align: text-top;' data-item-display='giantExcavatorsOn'>0</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+getOilCost('giantExcavators')+"<br /><img src='images/charcoal.png' class='img-tiny'> 1/min<br /><span id='giantExcavatorsSawBlades-label' style='display:none;'> <img src='images/excavatorsSawBlades.png' class='img-tiny' />Double ore income<br /></span><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='giantExcavatorsXpTotal'>0</span></span></span>", "item-section-mining-2", mainColorBrown,"Giant Excavators");
	addItemBox("train", 0, "Send your train to find ores.<span style='color:gold;' ><br />Status: <span id='train-timer'>Ready</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+formatNumber(getOilCost('train'))+"</span><br /><span data-item-display='trainTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='trainXpTotal'>0</span></span>", "item-section-mining-2", mainColorBrown,"Train");
	addItemBox("rocket", 0, "<span style='color:gold;' >Status: <span id='rocket-timer'>Ready</span></span><br /><span class='wrap-text'><img src='images/oil.png' class='img-tiny'> "+formatNumber(getOilCost('rocket'))+"</span><br /><span data-item-display='rocketTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='rocketXp'>0</span></span><span id='rocket-boosters-label' style='display:none;'><br /><img src='images/rocketBoosters.png' id='rocket-boosters-img' class='img-tiny' /> <span id='rocket-boosters-label-text'>Boosters</span></span><span id='rocket-heatShield-label' style='display:none;'><br /><img src='images/heatShieldIcon.png' class='img-tiny' /> Heat Shield</span><span style='display:none;' id='roverActive-label'><br /><img src='images/rover_white.png' class='img-tiny' /> Rover active</span><span style='display:none;' id='satelliteOnRocket-label'><br /><img src='images/satellite.png' class='img-tiny' /> Satellite Onboard</span>", "item-section-mining-2", mainColorBrown,"Rocket");
	
	addItemBox("robotMiner", 0, "<span style='color:gold;' >Status: <span id='robotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	addItemBox("sapphireRobotMiner", 0, "<span><b>Socket: </b><span style='color:grey'>10</span> <img src='images/sapphire.png' class='img-tiny' /><br /><span style='color:gold;' >Status: <span id='sapphireRobotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	addItemBox("emeraldRobotMiner", 0, "<span><b>Socket: </b><span style='color:grey'>10</span> <img src='images/emerald.png' class='img-tiny' /><br /><span style='color:gold;' >Status: <span id='emeraldRobotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	addItemBox("rubyRobotMiner", 0, "<span><b>Socket: </b><span style='color:grey'>10</span> <img src='images/ruby.png' class='img-tiny' /><br /><span style='color:gold;' >Status: <span id='rubyRobotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	addItemBox("diamondRobotMiner", 0, "<span><b>Socket: </b><span style='color:grey'>10</span> <img src='images/diamond.png' class='img-tiny' /><br /><span style='color:gold;' >Status: <span id='diamondRobotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	addItemBox("bloodDiamondRobotMiner", 0, "<span><b>Socket: </b><span style='color:grey'>10</span> <img src='images/bloodDiamond.png' class='img-tiny' /><br /><span style='color:gold;' >Status: <span id='bloodDiamondRobotMiner-timer'>Ready</span></span><br /><span style='color:gold;' >Max Depth: <span data-item-display='robotMinerDepth'></span>m</span><br /><span data-item-display='robotMinerTotal'>0</span> trips<br /><span style='color:orange'><img src='images/miningSkill_light.png' class='img-tiny' /> XP earned: <span data-item-display='robotMinerXp'>0</span></span>", "item-section-mining-2", mainColorBrown,"Robot Miner");
	
	
	addItemBox("gemFinder", -1, "<span class='wrap-text'>Searches for gems.</span>", "item-section-mining-2", mainColorBrown,"Gem Finder")
	addItemBox("bronzeOilWell", -1, "<span class='wrap-text'>+1 oil per second.</span><span id='bronzeOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("ironOilWell", -1, "<span class='wrap-text'>+3 oil per second.</span><span id='ironOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("silverOilWell", -1, "<span class='wrap-text'>+10 oil per second.</span><span id='silverOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("goldOilWell", -1, "<span class='wrap-text'>+20 oil per second.</span><span id='goldOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("promethiumOilWell", -1, "<span class='wrap-text'>+40 oil per second.</span><span id='promethiumOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("titaniumOilWell", -1, "<span class='wrap-text'>+85 oil per second.</span><span id='titaniumOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")
	addItemBox("ancientOilWell", -1, "<span class='wrap-text'>+130 oil per second.</span><span id='ancientOilWell-blueOrbLabel'></span>", "item-section-mining-2", mainColorBrown,"oilWell")

	addItemBox("bronzeOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory1-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	addItemBox("ironOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory2-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	addItemBox("silverOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory3-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	addItemBox("goldOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory4-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	addItemBox("promethiumOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory4-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	addItemBox("titaniumOilFactory", -1, "<span>+1 oil per worker.</span><br /><span style='color:orange;'>Current Workers: <span data-item-display='oilFactoryWorkers'>0</span>/<span data-item-display='oilFactoryWorkersMax'>0</span></span><span id='oilFactory4-greenOrb'></span>", "item-section-mining-2", mainColorBrown,"oilFactory")
	
	addItemBox("oilPlatform", -1, "<span>Collects oil over time.</span><span style='color:red;'><br />Requires Installation</span>", "item-section-mining-2", mainColorBrown,"Oil Platform")
	addItemBox("oilPlatformInstalled", -1, "+200 oil per second", "item-section-mining-2", mainColorBrown,"Oil Platform")
	
	addItemBox("lavaPlant", -1, "<span>Collects lava over time at the cost of oil.<br />Does not require iron buckets.</span><span id='lavaPlant-status' style='color:orange;display:none'><br />Status: On</span><span id='lavaPlant-oil' style='display:none'><br /><img src='images/oil.png' class='img-tiny' /> 300</span><span id='lavaPlant-installed-label' style='color:red;'><br />Requires Installation</span><span id='lavaPlant-lava' style='display:none'><br /><img src='images/lava.png' class='img-tiny' /> <span data-item-display='lavaPlantLava'>0</span></span>", "item-section-mining-2", mainColorBrown,"lavaPlant")
	addItemBox("lavaPlantPipe", 0, "<span>A pipe that has the capability to carry lava.</span>", "item-section-mining-2", mainColorBrown,"pipe")
	addItemBox("ancientLavaPlant", -1, "<span>Collects lava over time at the cost of oil.<br />Does not require iron buckets.</span><span id='ancientLavaPlant-status' style='color:orange;display:none'><br />Status: On</span><span id='ancientLavaPlant-oil' style='display:none'><br /><img src='images/oil.png' class='img-tiny' /> 600</span><span id='ancientLavaPlant-installed-label' style='color:red;'><br />Requires Installation</span><span id='ancientLavaPlant-lava' style='display:none'><br /><img src='images/lava.png' class='img-tiny' /> <span data-item-display='lavaPlantLava'>0</span></span>", "item-section-mining-2", mainColorBrown,"ancientLavaPlant")
	addItemBox("ancientLavaPlantPipe", 0, "<span>A pipe that has the capability to carry a lot of lava.</span>", "item-section-mining-2", mainColorBrown,"ancient pipe")
	
	
	//crafting item1
	itemChosen = "stoneFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "bronzeFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "ironFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "silverFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "goldFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "promethiumFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "titaniumFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	itemChosen = "ancientFurnace"; addItemBox(itemChosen, -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='furnaceCapacity'></span></span><br /><span style='color:lime;display:none;' id='smelting-label-"+itemChosen+"'>Smelting <span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='smeltingCurrentOreTo'></span>", "item-section-crafting-1", mainColor,"furnace")
	
	itemChosen = "goldBarRefinery"; addItemBox(itemChosen, -1, "Refines 100 gold bars into 1 pure gold bar.<br /><span style='color:orange'>Status: <span id='goldBarRefinery-timer'>Ready</span></span>", "item-section-crafting-1", mainColor,"gold refinery")
	itemChosen = "promethiumBarRefinery"; addItemBox(itemChosen, -1, "Refines 100 bars into its pure form.<br /><span style='color:orange'>Status: <span id='promethiumBarRefinery-timer'>Ready</span></span>", "item-section-crafting-1", mainColor,"promethium refinery")
	
	
	addItemBox("charcoalFoundry", -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='charcoalFoundryCapacity'>0</span></span><br /><span style='color:lime;display:none;' id='charcoalFoundry-label'>Burning <span style='vertical-align: text-top;' data-item-display='charcoalFoundryCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='charcoalFoundryCurrentOreTo'></span></span><span id='charcoalFoundry-greenOrb'></span>", "item-section-crafting-1", mainColor,"Charcoal Foundry", false);
	addItemBox("titaniumCharcoalFoundry", -1, "<span>Max load: <span style='vertical-align: text-top;' data-item-display='charcoalFoundryCapacity'>0</span></span><br /><span style='color:lime;display:none;' id='charcoalFoundry-label-2'>Burning <span style='vertical-align: text-top;' data-item-display='charcoalFoundryCurrentOreAt'>0</span>/<span style='vertical-align: text-top;' data-item-display='charcoalFoundryCurrentOreTo'></span></span><span id='charcoalFoundry-greenOrb-2'></span>", "item-section-crafting-1", mainColor,"Charcoal Foundry", false);
	
	addItemBox("roverBlueprints", -1, "<span>Instructions to create pieces for a rover.</span>", "item-section-crafting-1", mainColor,"Rover Blueprints");
	addItemBox("satelliteBlueprints", -1, "<span>Instructions to create pieces for a satellite.</span>", "item-section-crafting-1", mainColor,"Satellite Blueprints");

	
	addItemBox("ironBucket", 10, "Used to collect lava from exploring the volcano.<br /><span id='iron-bucket-level'><img src='images/exploringSkill.png' class='img-tiny'> Level 65</span>", "item-section-crafting-1", mainColor,"Iron Bucket", false);
	addItemBox("lava", 0, "A bucket of lava.", "item-section-crafting-1", mainColor,"Lava", false);
	addItemBox("charcoal", 0, "A piece of charcoal.", "item-section-crafting-1", mainColor,"Charcoal", false);
	addItemBox("plasma", 0, "Extremely hot gas considered a distinct fourth state of matter.", "item-section-crafting-1", mainColor,"Plasma", false);
	
	addItemBox("roverTires", 0, "An essential part for assembling a rover.", "item-section-crafting-1", mainColor,"Rover Tires", false);
	addItemBox("bronzeWire", 0, "A cheap and effective electrical conductor.", "item-section-crafting-1", mainColor,"Copper Wire", false);
	addItemBox("solarPanels", 0, "A clean energy source.", "item-section-crafting-1", mainColor,"Solar Panels", false);
	
	addItemBox("satelliteAntenna", 0, "An essential part for assembling a satellite.", "item-section-crafting-1", mainColor,"Satellite Antenna", false);
	addItemBox("satelliteSolarPanels", 0, "An essential part for assembling a satellite.", "item-section-crafting-1", mainColor,"Solar Panels", false);
	addItemBox("satelliteBase", 0, "An essential part for assembling a satellite.", "item-section-crafting-1", mainColor,"Satellite Base", false);
	addItemBox("satellite", 0, "A satellite built to orbit the sun.", "item-section-crafting-1", mainColor,"Satellite", false);
	
	
	addItemBox("tar", 0, "Raw material to make a strong type of rubber.", "item-section-crafting-1", mainColor,"Tar", false);
	addItemBox("tar2", 0, "Raw material to make a strong type of rubber.", "item-section-crafting-1", mainColor,"Tar", false);
	addItemBox("sand", 0, "Can be converted to glass with a furnace.", "item-section-crafting-1", mainColor,"Sand", false);
	addItemBox("glass", 0, "A glass pane.", "item-section-crafting-1", mainColor,"Glass", false);
	addItemBox("bronzeBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='bronzeBars-sell-price'>"+getItemPrice('bronzeBars')+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("ironBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='ironBars-sell-price'>"+getItemPrice('ironBars')+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("silverBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='silverBars-sell-price'>"+getItemPrice('silverBars')+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("goldBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='goldBars-sell-price'>"+getItemPrice('goldBars')+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("promethiumBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='promethiumBars-sell-price'>"+formatNumber(getItemPrice('promethiumBars'))+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("titaniumBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='titaniumBars-sell-price'>"+formatNumber(getItemPrice('titaniumBars'))+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	addItemBox("ancientOreBars", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='ancientOreBars-sell-price'>"+formatNumber(getItemPrice('ancientOreBars'))+"</span> </span>", "item-section-crafting-1", mainColor,"Bars", false)
	
	addItemBox("refinedGoldBars", 0, "A bar made of pure gold.<br /><span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('refinedGoldBars'))+" </span>", "item-section-crafting-1", mainColor,"Refined Bars", false)
	addItemBox("refinedPromethiumBars", 0, "A bar made of pure promethium.<br /><span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('refinedPromethiumBars'))+" </span>", "item-section-crafting-1", mainColor,"Refined Bars", false)
	
	displayGemChosen = "goldSapphireDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Sapphire Display");
	displayGemChosen = "goldEmeraldDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Emerald Display");
	displayGemChosen = "goldRubyDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Ruby Display");
	displayGemChosen = "goldDiamondDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Diamond Display");
	
	displayGemChosen = "promethiumSapphireDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Sapphire Display");
	displayGemChosen = "promethiumEmeraldDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Emerald Display");
	displayGemChosen = "promethiumRubyDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Ruby Display");
	displayGemChosen = "promethiumDiamondDisplay"; addItemBox(displayGemChosen, 0, "<span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice(displayGemChosen))+" </span>", "item-section-crafting-1", mainColorDarkLighterGold,"Diamond Display");
	
	
	//woodcutting item1
	addItemBox("lumberjack", -1, "Chops down all trees in one click.<br />Can modify what trees to ignore by clicking on your axe", "item-section-woodcutting-1", mainColorDarkGreen,"Lumberjack")
	addItemBox("axe", -1, "<span style='color:orange'>Trees start growing on their own.</span><br /><span class='wrap-text'>Used to chop down trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='axe1-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	addItemBox("sapphireAxe", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to chop down trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='axe2-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	addItemBox("emeraldAxe", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to chop down trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='axe3-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	addItemBox("rubyAxe", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to chop down trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='axe4-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	addItemBox("diamondAxe", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to chop down trees.</span><span id='axe5-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	addItemBox("bloodDiamondAxe", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to chop down trees.</span><span id='axe6-blueOrbLabel'></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Axe")
	
	addItemBox("shovel", -1, "<span class='wrap-text'>Collect roots from trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='tree-root-potions-label-1' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	addItemBox("sapphireShovel", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span class='wrap-text'>Collect roots from trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='tree-root-potions-label-2' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	addItemBox("emeraldShovel", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span class='wrap-text'>Collect roots from trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='tree-root-potions-label-3' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	addItemBox("rubyShovel", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span class='wrap-text'>Collect roots from trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='tree-root-potions-label-4' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	addItemBox("diamondShovel", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Collect roots from trees.</span><span id='tree-root-potions-label-5' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	addItemBox("bloodDiamondShovel", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Collect roots from trees.</span><span id='tree-root-potions-label-6' style='display:none'><br /><img src='images/treeRootsPotion.png' class='img-tiny' /> Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-woodcutting-1", mainColorDarkGreen,"Shovel");
	
	addItemBox("machete", -1, "<span class='wrap-text'>Increases yield from fruit trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	addItemBox("sapphireMachete", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span class='wrap-text'>Increases yield from fruit trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	addItemBox("emeraldMachete", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span class='wrap-text'>Increases yield from fruit trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	addItemBox("rubyMachete", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span class='wrap-text'>Increases yield from fruit trees.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	addItemBox("diamondMachete", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Increases yield from fruit trees.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	addItemBox("bloodDiamondMachete", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Increases yield from fruit trees.</span>", "item-section-woodcutting-1", mainColorDarkGreen,"Machete");
	
	addItemBox("lumberjackCrate", 0, "A crate filled with items.", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Resource Crate");
	
	addItemBox("treeRoots", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> <span id='treeRoots-sell-price'>"+getItemPrice('treeRoots')+"</span> </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Roots", false)
	
	
	addItemBox("logs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('logs')+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Logs", false)
	addItemBox("oakLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('oakLogs')+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Oak Logs", false)
	addItemBox("willowLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('willowLogs')+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Willow Logs", false)
	addItemBox("mapleLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+getItemPrice('mapleLogs')+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Maple Logs", false)
	addItemBox("redwoodLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('redwoodLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Redwood Logs", false)
	addItemBox("pineLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('pineLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Pine Logs", false)
	addItemBox("hauntedLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('hauntedLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Haunted Logs", false)
	addItemBox("jungleLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('jungleLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Jungle Logs", false)
	addItemBox("lavaLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('lavaLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Lava Logs", false)
	addItemBox("goldLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('goldLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Gold Logs", false)
	addItemBox("magicLogs", 0, "<span class='wrap-text'><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('magicLogs'))+" </span>", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Magic Logs", false)
	
	addItemBox("skeletonMageItem1", 0, "", "item-section-woodcutting-1", mainColorDarkLighterGreen,"Skeleton Mage", false)

	//farming item1
	addItemBox("farmer", -1, "<span style='display:none;' id='planter-label'><img id='planter-label-img' src='images/planter_light.png' class='img-tiny' /> Planter<br /></span>I am Bob.  I harvest all crops at once for you.", "item-section-farming-1", mainColorDarkGreen,"Farmer")
	addItemBox("rake", -1, "<span class='wrap-text'>Used to find seeds over time.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='rake1-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")
	addItemBox("sapphireRake", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to find seeds over time.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='rake2-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")
	addItemBox("emeraldRake", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to find seeds over time.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='rake3-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")
	addItemBox("rubyRake", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to find seeds over time.</span> <span class='wrap-text'>This item can be upgraded with gems.</span><span id='rake4-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")
	addItemBox("diamondRake", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to find seeds over time.</span><span id='rake5-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")
	addItemBox("secateurs", -1, "<span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	addItemBox("sapphireSecateurs", -1, "<b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /><span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	addItemBox("emeraldSecateurs", -1, "<b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /><span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	addItemBox("rubySecateurs", -1, "<b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /><span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	addItemBox("diamondSecateurs", -1, "<b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /><span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	addItemBox("bloodDiamondSecateurs", -1, "<b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /><span class='wrap-text'>Harvesting trees now also gives you kindle.</span> <span class='wrap-text'>This item can be upgraded with gems.</span>", "item-section-farming-1", mainColorDarkGreen,"Secateur")
	
	addItemBox("bloodDiamondRake", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span class='wrap-text'>Used to find seeds over time.</span><span id='rake6-blueOrbLabel'></span>", "item-section-farming-1", mainColorDarkGreen,"Rake")

	addItemBox("bonemealBin", -1, "<span class='wrap-text'>Used to plant higher level seeds.</span><br /><span class='wrap-text'><img src='images/bones.png' class='img-tiny'> <span data-item-display='bonemeal'>0</span>", "item-section-farming-1", mainColorDarkGreen,"Bonemeal")
	
	addItemBox("farmerCrate", 0, "A crate filled with items.", "item-section-farming-1", mainColorDarkLighterGreen,"Resource Crate");
	
	addItemBox("carnivorousBoss", 0, "A scary plant.", "item-section-farming-1", mainColorDarkLighterGreen,"Carnivoroius Plant");
	
	for(var i = 0; i < seedsArrayGlobal.length; i++)
	{
		var seed = seedsArrayGlobal[i];
		
		if(seed.itemName == "goldAppleTreeSeeds")
			addItemBox(seed.itemName, 0, "<span style='color:orange'>"+getItemName(seed.itemName)+"</span><br /><span id='"+seed.itemName+"-level'>Level "+seed.levelReq+"</span><br /><span id='"+seed.itemName+"-stops-dieing-level' >Stops Dying: Level "+seed.stopsDieingLevel+"<br /></span><span id='"+seed.itemName+"-bonemealCost' ><img src='images/bonemealBin.png' class='img-tiny'> "+seed.bonemealCost+"<br /></span><span><img src='images/farmingSkill.png' class='img-tiny'> "+formatNumber(seed.xp)+" XP</span><br /><img src='images/clock_white.png' class='img-tiny' /> "+formatTime(seed.growtime)+"<br /><img src='images/skullArtifact.png' class='img-tiny' />Increased death chance", "item-section-farming-1", mainColorDarkLighterGreen,"Seeds", false)
		else
			addItemBox(seed.itemName, 0, "<span style='color:orange'>"+getItemName(seed.itemName)+"</span><br /><span id='"+seed.itemName+"-level'>Level "+seed.levelReq+"</span><br /><span id='"+seed.itemName+"-stops-dieing-level' >Stops Dying: Level "+seed.stopsDieingLevel+"<br /></span><span id='"+seed.itemName+"-bonemealCost' ><img src='images/bonemealBin.png' class='img-tiny'> "+seed.bonemealCost+"<br /></span><span><img src='images/farmingSkill.png' class='img-tiny'> "+formatNumber(seed.xp)+" XP</span><br /><img src='images/clock_white.png' class='img-tiny' /> "+formatTime(seed.growtime)+"", "item-section-farming-1", mainColorDarkLighterGreen,"Seeds", false)
	}
	
	//brewing item1
	addItemBox("brewingKit", -1, "<span>Used for potion mixing.</span> <span>This item can be upgraded with gems.</span>", "item-section-brewing-1", mainColorDarkLighterPurple,"Brewing Kit");
	addItemBox("sapphireBrewingKit", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span>Used for potion mixing.</span> <span>This item can be upgraded with gems.</span>", "item-section-brewing-1", mainColorDarkLighterPurple,"Brewing Kit");
	addItemBox("emeraldBrewingKit", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span>Used for potion mixing.</span> <span>This item can be upgraded with gems.</span>", "item-section-brewing-1", mainColorDarkLighterPurple,"Brewing Kit");
	addItemBox("rubyBrewingKit", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span>Used for potion mixing.</span> <span>This item can be upgraded with gems.</span>", "item-section-brewing-1", mainColorDarkLighterPurple,"Brewing Kit");
	addItemBox("diamondBrewingKit", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span>Used for potion mixing.</span>", "item-section-brewing-1", mainColorDarkPurple,"Brewing Kit");
	addItemBox("bloodDiamondBrewingKit", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span>Used for potion mixing.</span>", "item-section-brewing-1", mainColorDarkPurple,"Brewing Kit");

	
	var potionChosen = ""
	
	//bc potions
	addItemBox("richSeedFinderPotion", 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>Find a large amount of seeds.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-richSeedFinderPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Seed Finder");
	addItemBox("richPiratesPotion", 0, "<img src='images/mainIcon.png' class='img-tiny'> Misc<br /><span>Pirates have a very high chance of finding maps, this potion also guarantees at least one map drop while active.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-richPiratesPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Pirates potion");
	addItemBox("richGeodePotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Significantly increases the rate of finding geodes.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-richGeodePotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Geode potion");
	addItemBox("richCombatPotion", 0, "<img src='images/combatSkill.png' class='img-tiny'> Combat<br /><span>Increases chance of triggering the research perk that let's you use a combat potion in combat for free, forever. (Increase from 1% to 10%).</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-richCombatPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"infinite incombat");
	
	
	//mining potions
	addItemBox("oilPotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Doubles oil income.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-oilPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"oil potion");
	addItemBox("promethiumPotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Mine more promethium from giant drills.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-promethiumPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"promethium potion");
	addItemBox("titaniumPotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Mine more titanium from the excavators.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-titaniumPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"titanium potion");
	addItemBox("rocketSpeedPotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Increases rocket velocity.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-rocketSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"rocket speed");
	addItemBox("superRocketSpeedPotion", 0, "<img src='images/miningSkill.png' class='img-tiny'> Mining<br /><span>Drastically increases rocket velocity.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-superRocketSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"super rocket speed");
	
	//furnace pots
	addItemBox("furnaceSpeedPotion", 0, "<img src='images/craftingSkill.png' class='img-tiny'> Crafting<br /><span>Doubles furnace speed.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-furnaceSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"furnace speed");
	//wc pots
	addItemBox("treeCompostPotion", 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>Trees grow twice as fast.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-treeCompostPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"compost");
	addItemBox("woodcuttingXpPotion", 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>"+brewingRecipesGlobal["woodcuttingXpPotion"].description+"</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-woodcuttingXpPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Bronze Star");
	potionChosen = "woodcuttingUpgradePotion"; addItemBox(potionChosen, 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>"+brewingRecipesGlobal[potionChosen].description+"</span><span style='color:gold;' ><br />Cooldown: <span id='potion-timer-cd-"+potionChosen+"'>Ready</span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Tree Upgrade");
	potionChosen = "woodcuttingDowngradePotion"; addItemBox(potionChosen, 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>"+brewingRecipesGlobal[potionChosen].description+"</span><span style='color:gold;' ><br />Cooldown: <span id='potion-timer-cd-"+potionChosen+"'>Ready</span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Tree Downgrade");
	addItemBox("treeRootsPotion", 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>The next tree chopped yields more roots.</span><span style='color:gold;' ><br />Active: <span data-item-display='treeRootsPotionActive'>0</span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"tree root potion");
	addItemBox("fruitTreePotion", 0, "<img src='images/woodcuttingSkill.png' class='img-tiny'> Woodcutting<br /><span>Only fruit trees will grow.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-fruitTreePotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"fruit tree potion");
	
	//farm pots
	addItemBox("seedFinderPotion", 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br />Increases your chance of finding seeds by 10%.<span style='color:gold;'><br />Lasts for <span id='potion-timer-seedFinderPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"seed finder");
	addItemBox("compostPotion", 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>Crops grow twice as fast.</span> <span style='color:gold;' ><br />Lasts for <span id='potion-timer-compostPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"compost");
	potionChosen = "fastCompostPotion"; addItemBox(potionChosen, 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>"+brewingRecipesGlobal[potionChosen].description+"</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-"+potionChosen+"'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"compost+");
	potionChosen = "fertilizeSoilPotion"; addItemBox(potionChosen, 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>"+brewingRecipesGlobal[potionChosen].description+"</span><span style='color:gold;' ></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"fertilize soil");
	
	addItemBox("superCompostPotion", 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>Can be poured over a crop growing it instantly.</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"super compost");
	potionChosen = "farmingXpPotion"; addItemBox(potionChosen, 0, "<img src='images/farmingSkill.png' class='img-tiny'> Farming<br /><span>"+brewingRecipesGlobal[potionChosen].description+"</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-"+potionChosen+"'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Bronze Star");
	
	//fish pots
	addItemBox("fishingSpeedPotion", 0, "<img src='images/tuna.png' class='img-tiny'> Fishing<br /><span>Doubles your chances of finding fish.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-fishingSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"fish speed");
	addItemBox("baitPotion", 0, "<img src='images/tuna.png' class='img-tiny'> Fishing<br /><span>Finds fishing bait passively.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-baitPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"bait finder");
	
	//exploring pots
	addItemBox("exploringSpeedPotion", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Exploring<br /><span>Doubles the exploring speed.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-exploringSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"explore speed");
	addItemBox("artifactPotion", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Exploring<br /><span>Guarantees an artifact from an exploring loot bag.</span><span style='color:gold;' ><br />Active: <span data-item-display='artifactPotionActive'>0</span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"artifact potion");
	addItemBox("resetFightingPotion", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Exploring<br /><span>Allows your explorer to fight a second time in the same area.</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"reset combat");
	
	
	//combat pots
	addItemBox("cureInfectionPotion", 0, "<img src='images/infected.png' class='img-tiny'> Cure<br /><span>Cures infections caused by a zombie.<br /><span style='color:orange'>May not be used in combat</span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Infection Cure");
	addItemBox("hpCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Heals 5 HP during combat.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"hp potion");
	addItemBox("superHpCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Heals 25 HP during combat.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"super hp potion");
	addItemBox("freezeCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Freezes your enemy for 5 seconds.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"freeze potion");
	addItemBox("ignoreDefenceCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Ignore enemy defence on next hit.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Ignore Defence");
	addItemBox("ghostScanCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Ability to see ghosts.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Ghost Scan");
	addItemBox("strengthCombatPotion", 0, "<img src='images/combat.png' class='img-tiny'> Combat<br /><span>Increases accuracy and attack bonus by 25%.</span><span style='color:gold;' ><br />Max per fight: 1</span>", "item-section-brewing-1", mainColorDarkLightestPurple,"Strength Potion");
	
	//other pots
	addItemBox("coinPotion", 0, "<img src='images/mainIcon.png' class='img-tiny'> Misc<br /><span>Gain coins over time.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-coinPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"coin potion");
	addItemBox("piratesPotion", 0, "<img src='images/mainIcon.png' class='img-tiny'> Misc<br /><span>Doubles the chances of finding treasure maps.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-piratesPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"pirates potion");
	addItemBox("researchSpeedPotion", 0, "<img src='images/mainIcon.png' class='img-tiny'> Misc<br /><span>Doubles your researcher's speed.</span><span style='color:gold;' ><br />Lasts for <span id='potion-timer-researchSpeedPotion'></span></span>", "item-section-brewing-1", mainColorDarkLightestPurple,"research speed potion");
	
	addItemBox("skeletonMageItem2", 0, "", "item-section-brewing-1", mainColorDarkPurple,"Skeleton Mage");
	
	
	addItemBox("dottedGreenLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('dottedGreenLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Dotted Green Leaf");
	addItemBox("greenLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('greenLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Green Leaf");
	addItemBox("limeLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('limeLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Lime Leaf");
	addItemBox("goldLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('goldLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Gold Leaf");
	addItemBox("crystalLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('crystalLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Crystal Leaf");
	addItemBox("burntStripedLeaf", 0, "<span>A primary ingredient?</span>", "item-section-brewing-1", mainColorDarkPurple,"Striped Burnt Leaf");
	addItemBox("stripedGreenLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('stripedGreenLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Striped Green Leaf");
	addItemBox("stripedGoldLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('stripedGoldLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Striped Gold Leaf");
	addItemBox("stripedCrystalLeaf", 0, "<span>A primary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('stripedCrystalLeaf'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Striped Crystal Leaf");
	addItemBox("redMushroom", 0, "<span>A secondary ingredient.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('redMushroom'))+" </span>", "item-section-brewing-1", mainColorDarkPurple,"Mushrooms");
	
	addItemBox("explorer", -1, "<img src='images/heartIcon.png' class='img-tiny'> <span data-item-display='heroMaxHp'>0</span><br /><span id='explorer-combat-stats-label' style='display:none;'><img src='images/attack.png' class='img-tiny'><span data-item-display='attack'>0</span><br /><img src='images/accuracy.png' class='img-tiny'><span data-item-display='accuracy'>0</span>"+"<br /><img src='images/defence.png' class='img-tiny'> "+"<span data-item-display='defence'>0</span>"+"<br /><br /></span><img src='images/steak.png' class='img-tiny'> "+"<span data-item-display='energy'>0</span><br />"+"<span id='explorer-teleportCd-label' style='display:none;'><img src='images/teleportSpell.png' class='img-tiny'><span id='explorer-teleportCd-label-value'>0</span></span><span id='explorer-greenOrb'></span><span style='display:none;' id='explorer-artifactPotions'>0</span>", "item-section-exploring-1", mainColorDarkLightGold,"explorer");
	addItemBox("goblinCousin", -1, "<img src='images/exploringSkill.png' class='img-tiny' /> <span id='goblinCousin-status'>Ready</span><br /><span id='goblinCousin-armour'><img src='images/bodySlot_black.png' class='img-tiny' /> No protection</span><span id='goblinCousin-greenOrb'></span>", "item-section-exploring-1", mainColorDarkLightGold,"goblin Cousin");
	addItemBox("goblinCousinMissing", -1, "Click to read more info.", "item-section-exploring-1", mainColorDarkLightGold,"missing goblin poster");
	addItemBox("metalDetector", -1, "Ability for your explorer to find valuable metallic statues.<span id='metalDetector1-greenOrb'></span>", "item-section-exploring-1", mainColorDarkLightGold,"metalDetector");
	addItemBox("promethiumMetalDetector", -1, "Ability for your explorer to find valuable metallic statues.<span id='metalDetector2-greenOrb'></span>", "item-section-exploring-1", mainColorDarkLightGold,"metalDetector +");
	addItemBox("titaniumMetalDetector", -1, "Ability for your explorer to find valuable metallic statues.<span id='metalDetector3-greenOrb'></span>", "item-section-exploring-1", mainColorDarkLightGold,"metalDetector ++");
	addItemBox("gemBag", 0, "<img src='images/gemGoblinMonster.png' class='img-tiny'> Gem Goblin<br />Contains a lot of verious gems.", "item-section-exploring-1", mainColorDarkLightGold,"gem bag");
	addItemBox("gemBagContent", 0, "A ton of gems and blood crystals!", "item-section-exploring-1", mainColorDarkLightGold,"Gem collection");
	

	addItemBox("bones", 0, "Rich in calcium and may be stored in a bonemeal bin.", "item-section-exploring-1", mainColorDarkLightGold,"bones");
	addItemBox("ashes", 0, "Rich in calcium and may be stored in a bonemeal bin.", "item-section-exploring-1", mainColorDarkLightGold,"ashes");
	addItemBox("iceBones", 0, "The cold preserved the calcium very well.", "item-section-exploring-1", mainColorDarkLightGold,"frozen bones");
	addItemBox("zombieBones", 0, "Bones that kept on living.", "item-section-exploring-1", mainColorDarkLightGold,"zombie bones");
	addItemBox("bloodBones", 0, "Covered in blood.", "item-section-exploring-1", mainColorDarkLightGold,"blood bones");
	addItemBox("ratsTail", 0, "A tail ripped from a dead rat.<br />Gross.", "item-section-exploring-1", mainColorDarkLightGold,"Rat tail");
	addItemBox("golemHair", 0, "Hair found from a monster in the northern fields.<br />Gross.", "item-section-exploring-1", mainColorDarkLightGold,"Hair?");
	addItemBox("entLogs", 0, "Can be added in the oven for extra heat.", "item-section-exploring-1", mainColorDarkLightGold,"ent logs");
	addItemBox("kindle", 0, "Can be added in the oven for extra heat.", "item-section-exploring-1", mainColorDarkLightGold,"kindle");
	addItemBox("lavaKindle", 0, "Can be added in the oven for extra heat.", "item-section-exploring-1", mainColorDarkLightGold,"lava kindle");
	addItemBox("goldenKindle", 0, "Can be added in the oven for extra heat.", "item-section-exploring-1", mainColorDarkLightGold,"gold kindle");
	addItemBox("zombieFlesh", 0, "Eat at your own risk.<br /><img src='images/energy.png' class='img-tiny' /> <span style='color:red'>-500,000</span> to <span style='color:green'>+500,000</span>", "item-section-exploring-1", mainColorDarkLightGold,"Zombie Flesh");
	addItemBox("zombieFlesh2", 0, "Eat at your own risk.<br /><img src='images/energy.png' class='img-tiny' /> <span style='color:red'>-1,000,000</span> to <span style='color:green'>+1,000,000</span>", "item-section-exploring-1", mainColorDarkLightGold,"Zombie Flesh");
	addItemBox("zombieFlesh3", 0, "Eat at your own risk.<br /><img src='images/energy.png' class='img-tiny' /> <span style='color:red'>-2,500,000</span> to <span style='color:green'>+2,500,000</span>", "item-section-exploring-1", mainColorDarkLightGold,"Zombie Flesh");
	addItemBox("zombieFlesh4", 0, "Eat at your own risk.<br /><img src='images/energy.png' class='img-tiny' /> <span style='color:red'>-10,000,000</span> to <span style='color:green'>+10,000,000</span>", "item-section-exploring-1", mainColorDarkLightGold,"Zombie Flesh");
	
	addItemBox("skeletonHead", 0, "A monster drop from the cemetery.<br />I wonder what it's for.", "item-section-exploring-1", mainColorDarkLightGold,"Skull");
	addItemBox("skeletonLeftArm", 0, "A monster drop from the cemetery.<br />I wonder what it's for.", "item-section-exploring-1", mainColorDarkLightGold,"Left Arm");
	addItemBox("skeletonRightArm", 0, "A monster drop from the cemetery.<br />I wonder what it's for.", "item-section-exploring-1", mainColorDarkLightGold,"Right Arm");
	addItemBox("skeletonLeftLeg", 0, "A monster drop from the cemetery.<br />I wonder what it's for.", "item-section-exploring-1", mainColorDarkLightGold,"Left Leg");
	addItemBox("skeletonRightLeg", 0, "A monster drop from the cemetery.<br />I wonder what it's for.", "item-section-exploring-1", mainColorDarkLightGold,"Right Leg");
	
	addItemBox("bronzeStarLamp", 0, "A strange lamp that needs to be charged.<span><br /><img src='images/woodcuttingSkill.png' class='img-tiny' /> <span data-item-display='bronzeStarLampChargeTrees'>0</span>/50 <img src='images/bronzeStar.png' class='img-tiny' /><br /><img src='images/farmingSkill.png' class='img-tiny' /> <span data-item-display='bronzeStarLampChargeFarm'>0</span>/50 <img src='images/bronzeStar.png' class='img-tiny' /><br /><img src='images/cookingSkill.png' class='img-tiny' /> <span data-item-display='bronzeStarLampChargeFood'>0</span>/50 <img src='images/bronzeStar.png' class='img-tiny' /></span>", "item-section-exploring-1", mainColorDarkLightGold,"Bronze Star Lamp");
	addItemBox("silverStarLamp", 0, "A strange lamp that needs to be charged.<span><br /><img src='images/woodcuttingSkill.png' class='img-tiny' /> <span data-item-display='silverStarLampChargeTrees'>0</span>/50 <img src='images/silverStar.png' class='img-tiny' /><br /><img src='images/farmingSkill.png' class='img-tiny' /> <span data-item-display='silverStarLampChargeFarm'>0</span>/50 <img src='images/silverStar.png' class='img-tiny' /><br /><img src='images/cookingSkill.png' class='img-tiny' /> <span data-item-display='silverStarLampChargeFood'>0</span>/50 <img src='images/silverStar.png' class='img-tiny' /></span>", "item-section-exploring-1", mainColorDarkLightGold,"Silver Star Lamp");
	addItemBox("goldStarLamp", 0, "A strange lamp that needs to be charged.<span><br /><img src='images/woodcuttingSkill.png' class='img-tiny' /> <span data-item-display='goldStarLampChargeTrees'>0</span>/50 <img src='images/goldStar.png' class='img-tiny' /><br /><img src='images/farmingSkill.png' class='img-tiny' /> <span data-item-display='goldStarLampChargeFarm'>0</span>/50 <img src='images/goldStar.png' class='img-tiny' /><br /><img src='images/cookingSkill.png' class='img-tiny' /> <span data-item-display='goldStarLampChargeFood'>0</span>/50 <img src='images/goldStar.png' class='img-tiny' /></span>", "item-section-exploring-1", mainColorDarkLightGold,"Gold Star Lamp");
	
	
	addItemBox("witchesLoot", 0, "A loot bag from killing a witch.", "item-section-exploring-1", mainColorDarkLightGold,"Loot");
	
	addItemBox("candyCanePuzzle1", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle2", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle3", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle4", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle5", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle6", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle7", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle8", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	addItemBox("candyCanePuzzle9", 0, "A puzzle piece.", "item-section-exploring-1", mainColorDarkLightGold,"Puzzle Piece");
	
	
	for(var i = 0; i < exploringAreasIndexGlobal.length; i++)
	{
		var areaFound = exploringAreasIndexGlobal[i];
		addItemBox(areaFound.areaName + "Loot", 0, "<img src='images/exploringSkill.png' class='img-tiny' /> " + getItemName(areaFound.areaName), "item-section-exploring-1", mainColorDarkLighterGold,"Loot", false)
		addItemBox("shiny" + areaFound.areaName.substr(0,1).toUpperCase() + areaFound.areaName.substr(1, areaFound.areaName.length) + "Loot", 0, "<img src='images/exploringSkill.png' class='img-tiny' /> " + getItemName(areaFound.areaName), "item-section-exploring-1", mainColorDarkLighterGold,"Shiny Loot", false)
	}
	
	addItemBox("feather", 0, "<img src='images/chickenMonster.png' class='img-tiny'> Chicken<br />Obtained from a chicken.", "item-section-exploring-1", mainColorDarkLighterGold,"Feather");
	addItemBox("fireFeather", 0, "<img src='images/fireHawkMonster.png' class='img-tiny'> Fire Hawk<br />Obtained from a hawk.", "item-section-exploring-1", mainColorDarkLighterGold,"Fire Feather");
	addItemBox("iceFeather", 0, "<img src='images/iceHawkMonster.png' class='img-tiny'> Ice Hawk<br />Obtained from a hawk.", "item-section-exploring-1", mainColorDarkLighterGold,"Ice Feather");
	addItemBox("bloodFeather", 0, "A feather cursed by the blood moon.", "item-section-exploring-1", mainColorDarkLighterGold,"Blood Feather");
	
	
	addItemBox("bearFur", 0, "<img src='images/bearMonster.png' class='img-tiny'> Bear<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Bear Fur");
	addItemBox("snakeskin", 0, "<img src='images/snakeMonster.png' class='img-tiny'> Snake<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Snakeskin");
	addItemBox("snakeskinCapeScroll", 0, "<img src='images/bloodSnakeMonster.png' class='img-tiny'> Snake<br />Ability to learn a new crafting recipe.", "item-section-exploring-1", mainColorDarkLighterGold,"crafting scroll");
	addItemBox("lavaSnakeskin", 0, "<img src='images/lavaSnakeMonster.png' class='img-tiny'> Lava Snake<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Lava Snakeskin");
	addItemBox("lavaSnakeskinCapeScroll", 0, "<img src='images/bloodLavaSnakeMonster.png' class='img-tiny'> Lava Snake<br />Ability to learn a new crafting recipe.<br /><span style='color:yellow'>Requires experience in crafting other capes</span>", "item-section-exploring-1", mainColorDarkLighterGold,"crafting scroll");
	addItemBox("lizardskin", 0, "<img src='images/lizardMonster.png' class='img-tiny'> Lizard<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"lizardskin");
	addItemBox("lizardskinCapeScroll", 0, "<img src='images/bloodLizardMonster.png' class='img-tiny'> Tiny Lizard<br />Ability to learn a new crafting recipe.", "item-section-exploring-1", mainColorDarkLighterGold,"crafting scroll");
	addItemBox("elephantSkin", 0, "<img src='images/elephantMonster.png' class='img-tiny'> Elephant<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"elephant pelt");
	addItemBox("elephantCapeScroll", 0, "<img src='images/bloodJungleTribeMonster.png' class='img-tiny'> Blood Jungle Tribe<br />Ability to learn a new crafting recipe.", "item-section-exploring-1", mainColorDarkLighterGold,"crafting scroll");
	
	addItemBox("promethiumHelmetMould", 0, "<img src='images/skeletonKingMonster.png' class='img-tiny'> Skeleton King<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Promethium Mould");
	addItemBox("promethiumBodyMould", 0, "<img src='images/skeletonKingMonster.png' class='img-tiny'> Skeleton King<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Promethium Mould");
	addItemBox("promethiumLegsMould", 0, "<img src='images/skeletonKingMonster.png' class='img-tiny'> Skeleton King<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Promethium Mould");
	
	addItemBox("titaniumHelmetMould", 0, "<img src='images/skeletonCemeteryMonster.png' class='img-tiny'> Cemetery Skeleton<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Titanium Mould");
	addItemBox("titaniumBodyMould", 0, "<img src='images/iceSkeletonCemeteryMonster.png' class='img-tiny'> Cemetery Skeleton<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Titanium Mould");
	addItemBox("titaniumLegsMould", 0, "<img src='images/fireSkeletonCemeteryMonster.png' class='img-tiny'> Cemetery Skeleton<br />Can be crafted into armour.", "item-section-exploring-1", mainColorDarkLighterGold,"Titanium Mould");
	
	addItemBox("skeletonSwordEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	addItemBox("scytheEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	addItemBox("boneAmuletEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	addItemBox("invisibilityAmuletEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	addItemBox("superBowEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	addItemBox("bloodDiamondStoneRingEnchanter", 0, "Enchants a specific weapon to give them additional powers.", "item-section-exploring-1", mainColorDarkLighterGold,"Enchantement Power");
	
	addItemBox("poisonSquidInk", 0, "Add a stronger poison to a poison weapon or arrows.", "item-section-exploring-1", mainColorDarkLighterGold,"Posion Squid Ink");
	addItemBox("squidHorn1", 0, "Used to upgrade the trident helmet.", "item-section-exploring-1", mainColorDarkLighterGold,"Squid horn 1");
	addItemBox("squidHorn2", 0, "Used to upgrade the trident helmet.", "item-section-exploring-1", mainColorDarkLighterGold,"Squid horn 2");
	
	addItemBox("fireSpellScroll", 0, "<img src='images/fireMageMonster.png' class='img-tiny'> Fire Mage<br />Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Fire Spell Scroll");
	addItemBox("reflectSpellScroll", 0, "<img src='images/witchesPotion.png' class='img-tiny'> Quest Monster<br />Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Reflect Spell Scroll");
	addItemBox("teleportSpellScroll", 0, "<img src='images/communityCenter7.png' class='img-tiny'> Shop<br />Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Teleport Spell Scroll");
	addItemBox("puzzleChest", 0, "<img src='images/desertLizard2Monster.png' class='img-tiny'> Desert Lizard<br />A puzzle chest.", "item-section-exploring-1", mainColorDarkLighterGold,"Puzzle Chest");
	addItemBox("puzzleChest2", 0, "<img src='images/gargoyleMonster.png' class='img-tiny'> Gargoyle<br />A puzzle chest.", "item-section-exploring-1", mainColorDarkLighterGold,"Puzzle Chest");
	addItemBox("puzzleChest3", 0, "<img src='images/skeletonMonksMonster.png' class='img-tiny'> Skeleton Monks<br />A puzzle chest.", "item-section-exploring-1", mainColorDarkLighterGold,"Puzzle Chest");
	addItemBox("puzzleChest4", 0, "<img src='images/squidMonster.png' class='img-tiny'> Squid<br />A puzzle chest.", "item-section-exploring-1", mainColorDarkLighterGold,"Puzzle Chest");
	addItemBox("thunderStrikeSpellScroll", 0, "<img src='images/desertLizard2Monster.png' class='img-tiny'> Desert Lizard<br />Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Thunderstrike Spell Scroll");
	addItemBox("lifeStealSpellScroll", 0, "<img src='images/angelMonster.png' class='img-tiny'> Angel<br />Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Life Steal Spell Scroll");
	
	addItemBox("sandstormSpellScroll", 0, "Learn to cast a new spell.", "item-section-exploring-1", mainColorDarkLighterGold,"Sandstorm Scroll");
	addItemBox("sandstormSpellScroll1", 0, "<img src='images/bloodDesertLizard2Monster.png' class='img-tiny'> Blood Desert Lizard", "item-section-exploring-1", mainColorDarkLighterGold,"Magic Spellscroll Piece");
	addItemBox("sandstormSpellScroll2", 0, "<img src='images/bloodScorpionMonster.png' class='img-tiny'> Blood Scoprion", "item-section-exploring-1", mainColorDarkLighterGold,"Magic Spellscroll Piece");
	addItemBox("sandstormSpellScroll3", 0, "<img src='images/bloodDesertLizard2Monster.png' class='img-tiny'> Blood Tiny Lizard", "item-section-exploring-1", mainColorDarkLighterGold,"Magic Spellscroll Piece");
	
	
	
	addItemBox("hauntedPainting", 0, "A painting found in the haunted mansion.<br />The back reads: <i>Selling me is bad luck</i>.<br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('hauntedPainting'))+" </span><span id='haunted-painting-letters' style='display:none'><br /><img src='images/paintingR.png' class='img-small' /><img src='images/paintingI.png' class='img-small' /><img src='images/paintingP.png' class='img-small' /><img src='images/paintingR.png' class='img-small' /><img src='images/paintingR.png' class='img-small' /><img src='images/paintingP.png' class='img-small' /><img src='images/paintingI.png' class='img-small' /></span>", "item-section-exploring-1", mainColorDarkLighterGold,"Haunted Painting");
	addItemBox("dungeonKey", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in Dungeon Entrance<br />A key to a dungeon.<br />Consumed when used.", "item-section-exploring-1", mainColorDarkLighterGold,"Dungeon Key");
	
	addItemBox("oilPlatformDeckBroken", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />Needs to be fixed.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Deck");
	addItemBox("offshoreOilRigBroken", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />Needs to be fixed.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Rig");
	addItemBox("oilPlatformBaseBroken", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />Needs to be fixed.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Base");
	
	addItemBox("oilPlatformDeck", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />It has been repaired and is in good condition.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Deck");
	addItemBox("offshoreOilRig", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />It has been repaired and is in good condition.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Rig");
	addItemBox("oilPlatformBase", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />It has been repaired and is in good condition.", "item-section-exploring-1", mainColorDarkLighterGold,"Damaged Oil Plateform Base");
	
	addItemBox("unchargedMagnet", 0, "<img src='images/exploringSkill.png' class='img-tiny'> Found in the Factory<br />This magnet seems to have decayed, creating a very weak magnetic field.", "item-section-exploring-1", mainColorDarkLighterGold,"Decayed Magnet");
	addItemBox("magnet", 0, "When shooting an arrow, the magnet pulls the arrow back 20% of the time.", "item-section-exploring-1", mainColorDarkLighterGold,"Magnet");
	addItemBox("trackWheels", 0, "I wonder what this is used for.", "item-section-exploring-1", mainColorDarkLighterGold,"Track Wheels");
	
	
	for(var i = 0; i < exploringMetalDetectorStatuesGlobal.length; i++)
	{
		addItemBox(exploringMetalDetectorStatuesGlobal[i], 0, "A statue found with the metal detector<br /><span><img src='images/coins.png' class='img-tiny'> <span id='"+exploringMetalDetectorStatuesGlobal[i]+"-price'>"+formatNumber(getItemPrice(exploringMetalDetectorStatuesGlobal[i]))+"</span></span> </span>", "item-section-exploring-1", mainColorDarkLighterGold,"Statue");
	}
	
	var artifactBaseXp = 0;
	var artifactBaseXpTwoMulti = 7;
	var artifactBaseXpThreeMulti = 15;
	artifactBaseXp = 50;
	addItemBox("brokenSwordArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='brokenSwordArtifact-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("cannonBallsArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='cannonBallsArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("oldCannonArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='oldCannonArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 115;
	addItemBox("strangeLeafArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='strangeLeafArtifact-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("ancientLogArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='ancientLogArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("rainbowFlowerArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='rainbowFlowerArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 500;
	addItemBox("clayVaseArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='clayVaseArtifact-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("batWingArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='batWingArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("skullArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='skullArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 1000;
	addItemBox("sulferArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='sulferArtifact-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("volcanicRockArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='volcanicRockArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	addItemBox("volcanicSmokeArtifact", 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='volcanicSmokeArtifact-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");

	var artifactChosen = "";
	artifactBaseXp = 5000;
	artifactChosen = "iceArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "snowballsArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "frozenHeadArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 10000;
	artifactChosen = "spiderLegsArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "broomArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "hauntedSkullArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 25000;
	artifactChosen = "scorpionsTailArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "mummyArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "egyptKingArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 50000;
	artifactChosen = "fossilArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "scubaArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "sharksJawArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 100000;
	artifactChosen = "strangerLeafArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "mossyRockArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "monkeySkullArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 200000;
	artifactChosen = "strangeJungleLeafArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "inukshukArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "hauntedMonkeySkullArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 320000;
	artifactChosen = "dungeonBrickArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "candleStickArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "skeletonKingsHeadArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 415000;
	artifactChosen = "lampArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "brokenShieldArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "dragonSkullArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 600000;
	artifactChosen = "tombStoneArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "zombieHandArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "ancientCrossArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 800000;
	artifactChosen = "cogWheelArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "robotHelmetArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "brokenTimeMachineArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 1100000;
	artifactChosen = "hauntedLeavesArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "eyeballArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "ghostScanPotionArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	artifactBaseXp = 1600000;
	artifactChosen = "deepFossilArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "starfishArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpTwoMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	artifactChosen = "ancientScubaArtifact"; addItemBox(artifactChosen, 0, "<img src='images/exploringSkill.png' class='img-tiny'> <span id='"+artifactChosen+"-artifactXp'>" +formatNumber(artifactBaseXp * artifactBaseXpThreeMulti) + "</span> xp","item-section-exploring-1", mainColorArtifact,"Artifact");
	
	addItemBox("energy", 0, "<span>Explorer's Energy</span>", "item-section-cooking-1", mainColorEnergyCookingTab,"Energy");
	addItemBox("bronzeOven", -1, "<span>50% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("ironOven", -1, "<span>40% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("silverOven", -1, "<span>30% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("goldOven", -1, "<span>20% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("promethiumOven", -1, "<span>10% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("titaniumOven", -1, "<span>5% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	addItemBox("ancientOven", -1, "<span>1% Burn Rate</span><span><br /><img src='images/heat.png' class='img-tiny' /> <span data-item-display='heat'>0</span></span>", "item-section-cooking-1", mainColorGoldCooking,"cooking oven");
	
	addItemBox("chef", -1, "Recipes completed: <span data-item-display='chefRecipeTotal'>0</span><br /><span id='chef-timer'></span>", "item-section-cooking-1", mainColorGoldCooking,"Chef");
	addItemBox("chefsStew", -1, "Click to add spices to the stew.", "item-section-cooking-1", mainColorGoldCooking,"Stew");
	
	addItemBox("chefCrate", 0, "A crate filled with items.", "item-section-cooking-1", mainColorGoldCooking,"Food Crate");
	
	
	addItemBox("fishingRod", -1, "<span>Catches fish over time.</span> <span>This item can be upgraded with gems.</span><br /><span id='fishing-rod-requires-bait-1' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod1-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	addItemBox("sapphireFishingRod", -1, "<span><b>Socket: </b><img src='images/sapphire.png' class='img-tiny' /><br /></span><span>Catches fish over time.</span> <span>This item can be upgraded with gems.</span><br /><span id='fishing-rod-requires-bait-2' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod2-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	addItemBox("emeraldFishingRod", -1, "<span><b>Socket: </b><img src='images/emerald.png' class='img-tiny' /><br /></span><span>Catches fish over time.</span> <span>This item can be upgraded with gems.</span><br /><span id='fishing-rod-requires-bait-3' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod3-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	addItemBox("rubyFishingRod", -1, "<span><b>Socket: </b><img src='images/ruby.png' class='img-tiny' /><br /></span><span>Catches fish over time.</span> <span>This item can be upgraded with gems.</span><br /><span id='fishing-rod-requires-bait-4' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod4-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	addItemBox("diamondFishingRod", -1, "<span><b>Socket: </b><img src='images/diamond.png' class='img-tiny' /><br /></span><span>Catches fish over time.</span><br /><span id='fishing-rod-requires-bait-5' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod5-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	addItemBox("bloodDiamondFishingRod", -1, "<span><b>Socket: </b><img src='images/bloodDiamond.png' class='img-tiny' /><br /></span><span>Catches fish over time.</span><br /><span id='fishing-rod-requires-bait-6' style='color:#FF6666'>Requires fishing bait.</span><span id='fishingRod6-blueOrbLabel'></span>", "item-section-cooking-1", mainColorGoldCooking,"fishing rod")
	
	addItemBox("rowBoat", -1, "Send your boat for extra fish.<span style='color:gold;' ><br />Status: <span id='rowBoatTimer-timer'>Ready</span><br /><img src='images/bait.png' class='img-tiny'> <span id='rowBoat-baitNeeded'>5</span>", "item-section-cooking-1", mainColorGoldCooking,"row boat")
	addItemBox("canoeBoat", -1, "Send your boat for extra fish.<span style='color:gold;' ><br />Status: <span id='canoeBoatTimer-timer'>Ready</span><br /><img src='images/bait.png' class='img-tiny'> <span id='canoeBoat-baitNeeded'>25</span>", "item-section-cooking-1", mainColorGoldCooking,"canoe")
	addItemBox("sailBoat", -1, "Send your boat for extra fish.<span style='color:gold;' ><br />Status: <span id='sailBoatTimer-timer'>Ready</span><br /><img src='images/bait.png' class='img-tiny'> <span id='sailBoat-baitNeeded'>100</span>", "item-section-cooking-1", mainColorGoldCooking,"sail boat")
	addItemBox("steamBoat", -1, "Send your boat for extra fish.<span style='color:gold;' ><br />Status: <span id='steamBoatTimer-timer'>Ready</span><br /><img src='images/bait.png' class='img-tiny'> <span id='steamBoat-baitNeeded'>250</span>", "item-section-cooking-1", mainColorGoldCooking,"steam boat")
	addItemBox("trawler", -1, "Drop your trawler in the sea using any boat.<span style='color:gold;' ><br />Status: <span id='trawlerTimer-timer'>Ready</span><br /><img src='images/bait.png' class='img-tiny'> <span id='trawler-baitNeeded'>500</span>", "item-section-cooking-1", mainColorGoldCooking,"trawler")
	addItemBox("lobsterCage", -1, "Collect lobsters over time.<br /><img src='images/rawShrimp.png' class='img-tiny'> Uses raw shrimp as bait<span style='color:gold;' ><br />Status: <span id='lobsterCage-status'>Inactive</span><br /><img src='images/rawLobster.png' class='img-small' /> Currently Trapped: <span data-item-display='lobsterCageCollection'>0</span><br /><img src='images/rawShrimp.png' class='img-small' /> Bait Used: <span data-item-display='lobsterCageBaitUsed'>0</span>", "item-section-cooking-1", mainColorGoldCooking,"Lobster Cage")
	
	addItemBox("bait", 0, "<span>Automatically used with fishing rod.</span>", "item-section-cooking-1", mainColorGoldCooking,"fishing bait")
	addItemBox("superBait", 0, "<span>Automatically used with fishing rod.</span>", "item-section-cooking-1", mainColorGoldCooking,"fishing bait+")
	addItemBox("fishBones", 0, "<span>Contains low levels of calcium.<br />Requires 10 to make one bonemeal.</span>", "item-section-cooking-1", mainColorGoldCookingSecondary,"fish bones")
	addItemBox("rainbowFishBones", 0, "Contains very high levels of calcium.", "item-section-cooking-1", mainColorGoldCookingSecondary,"fish bones")
	addItemBox("seaweed", 0, "Can be mixed into a dish for energy.", "item-section-cooking-1", mainColorGoldCookingSecondary,"seaweed")
	
	addItemBox("yellowSpices", 0, "<span style='color:orange'>Click to add to stew</span>", "item-section-stew-1", mainColorGoldCookingSecondary,"Yellow Spices")
	addItemBox("greenSpices", 0, "<span style='color:orange'>Click to add to stew</span>", "item-section-stew-1", mainColorGoldCookingSecondary,"Green Spices")
	addItemBox("redSpices", 0, "<span style='color:orange'>Click to add to stew</span>", "item-section-stew-1", mainColorGoldCookingSecondary,"Red Spices")
	addItemBox("blueSpices", 0, "<span style='color:orange'>Click to add to stew</span>", "item-section-stew-1", mainColorGoldCookingSecondary,"Blue Spices")
	
	
	addItemBox("hpEmblemsTab", -1, "<span style='color:gold'>Click for hints on finding more emblems.</span><br />Increases maximum HP by 10.", "item-section-exploring-2", "#996600","Emblems");
	addItemBox("emblemsTab", -1, "<span style='color:gold'>Click for hints on finding more emblems.</span>", "item-section-exploring-2", "#996600","Emblems");
	
	addItemBox("rustySword", 0, "A not so solid sword.<br /><img src='images/attack.png' class='img-tiny'> 1<br /><img src='images/accuracy.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Rusty Sword");
	addItemBox("stinger", 0, "The stinger from a bee.<br /><img src='images/attack.png' class='img-tiny'> 2<br /><img src='images/accuracy.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Stinger");
	addItemBox("bloodStinger", 0, "The stinger from a blood bee.<br /><img src='images/attack.png' class='img-tiny'> 11<br /><img src='images/accuracy.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Stinger+");
	
	var equipmentItemName = "";
	
	equipmentItemName = "knightsCape"; addItemBox(equipmentItemName, 0, "A cape obtained from the knight's quest.<br /><img src='images/defence.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Knight's Cape");
	
	
	equipmentItemName = "ironDagger"; addItemBox(equipmentItemName, 0, "An iron dagger found from a thief.<br /><img src='images/attack.png' class='img-tiny'> 3<br /><img src='images/accuracy.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Iron Dagger");
	equipmentItemName = "offhandIronDagger"; addItemBox(equipmentItemName, 0, "An iron dagger found from a blood thief.<br /><img src='images/attack.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Offhand Iron Dagger");
	equipmentItemName = "skeletonSword"; addItemBox(equipmentItemName, 0, "A sword found from a skeleton.<br /><img src='images/attack.png' class='img-tiny'> 5<br /><img src='images/accuracy.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Skele Sword");
	equipmentItemName = "enchantedSkeletonSword"; addItemBox(equipmentItemName, 0, "A sword found from a skeleton.<br /><span style='color:pink'>Fighting skeletons will give you double bones.<br />(Applied at the end of all previous bone bonuses)</span><br /><img src='images/attack.png' class='img-tiny'> 5<br /><img src='images/accuracy.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Skele Sword");
	
	equipmentItemName = "bow"; addItemBox(equipmentItemName, 0, "A bow found from a golem.<br /><span id='"+equipmentItemName+"-arrow-type'> Arrow: None</span><br /><img src='images/accuracy.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Bow");
	equipmentItemName = "superBow"; addItemBox(equipmentItemName, 0, "A bow found from a robot.<br /><span id='"+equipmentItemName+"-arrow-type'> Arrow: None</span><br /><img src='images/accuracy.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Super Bow");
	equipmentItemName = "enchantedSuperBow"; addItemBox(equipmentItemName, 0, "A bow found from a robot that has been enchanted.<br /><span style='color:pink'>Shoots two arrows at once.</span><br /><span id='"+equipmentItemName+"-arrow-type'> Arrow: None</span><br /><img src='images/accuracy.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Super Bow");
	equipmentItemName = "scythe"; addItemBox(equipmentItemName, 0, "A scythe found from the undead.<br /><span style='color:orange;'>Ignores defence on ghosts</span><br /><img src='images/attack.png' class='img-tiny'> 12<br /><img src='images/accuracy.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Scythe");
	equipmentItemName = "enchantedScythe"; addItemBox(equipmentItemName, 0, "An enchanted scythe.<br /><span style='color:orange;'>Ignores defence on ghosts<br /><span style='color:pink'>Double damage on ghosts</span></span><br /><img src='images/attack.png' class='img-tiny'> 12<br /><img src='images/accuracy.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Scythe");
	equipmentItemName = "poisonSpear"; addItemBox(equipmentItemName, 0, "A posion spear.<br /><span style='color:orange;'>Poisons enemy if hit is successful.</span><br /><img src='images/attack.png' class='img-tiny'> 3<br /><img src='images/accuracy.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Poison Spear");
	equipmentItemName = "superPoisonSpear"; addItemBox(equipmentItemName, 0, "A posion spear.<br /><span style='color:orange;'>Poisons enemy if hit is successful.</span><br /><img src='images/attack.png' class='img-tiny'> 3<br /><img src='images/accuracy.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Poison Spear+");
	equipmentItemName = "mace"; addItemBox(equipmentItemName, 0, "A mace found from a dungeon skeleton.<br /><span style='color:orange;'>Extra spike damage.</span><br /><img src='images/attack.png' class='img-tiny'> 13<br /><img src='images/accuracy.png' class='img-tiny'> 9", "item-section-exploring-2", mainColorDarkLighterGold,"Mace");
	equipmentItemName = "trident"; addItemBox(equipmentItemName, 0, "A trident found from the trident soldier.<br /><img src='images/attack.png' class='img-tiny'> 18<br /><img src='images/accuracy.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Trident");
	equipmentItemName = "superPoisonTrident"; addItemBox(equipmentItemName, 0, "A trident found from the trident soldier.<br /><span style='color:orange;'>Poisons enemy if hit is successful.</span><img src='images/attack.png' class='img-tiny'> 18<br /><img src='images/accuracy.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Poison Trident+");
	equipmentItemName = "silverScimitar"; addItemBox(equipmentItemName, 0, "A silver scimitar found from the blood tribesmen.<img src='images/attack.png' class='img-tiny'> 25<br /><img src='images/accuracy.png' class='img-tiny'> 15", "item-section-exploring-2", mainColorDarkLighterGold,"Silver Scimitar");

	equipmentItemName = "staff"; addItemBox(equipmentItemName, 0, "A staff obtain from a castle mage<br /><span style='color:orange;'>+3 damage on every spell.</span><br /><img src='images/attack.png' class='img-tiny'> 1<br /><img src='images/accuracy.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Staff");
	
	
	equipmentItemName = "arrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span><img src='images/attack.png' class='img-tiny'> 8", "item-section-exploring-2", mainColorDarkLighterGold,"Arrows");
	equipmentItemName = "fireArrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span>Double damage in cold environments.<br /><img src='images/attack.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Fire Arrows");
	equipmentItemName = "iceArrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span>Double damage in hot environments.<br /><img src='images/attack.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Ice Arrows");
	equipmentItemName = "poisonArrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span>Poisons your enemy.<br /><img src='images/attack.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Poison Arrows");
	equipmentItemName = "superPoisonArrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span>Poisons your enemy.<br /><img src='images/attack.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Poison Arrows+");
	equipmentItemName = "superArrows"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"-equiped' style='color:orange;display:none;'>Equipped<br /></span><br /><img src='images/attack.png' class='img-tiny'> 17", "item-section-exploring-2", mainColorDarkLighterGold,"Arrows+");
	
	equipmentItemName = "birdFeed"; addItemBox(equipmentItemName, 0, "Fighting in the fields will attract more chickens.", "item-section-exploring-2", mainColorDarkLighterGold,"Bird Feed");
	equipmentItemName = "fireBirdFeed"; addItemBox(equipmentItemName, 0, "Fighting in the volcano will attract more fire hawks.", "item-section-exploring-2", mainColorDarkLighterGold,"Bird Feed");
	equipmentItemName = "iceBirdFeed"; addItemBox(equipmentItemName, 0, "Fighting in the northern fields will attract more ice hawks.", "item-section-exploring-2", mainColorDarkLighterGold,"Bird Feed");
	
	equipmentItemName = "skeletonShield"; addItemBox(equipmentItemName, 0, "A shield found from a skeleton.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Skele Shield");
	equipmentItemName = "jungleShield"; addItemBox(equipmentItemName, 0, "A shield found from a tribesmen.<br /><img src='images/defence.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Jungle Shield");
	equipmentItemName = "knightsShield"; addItemBox(equipmentItemName, 0, "A shield found from a knight.<br /><img src='images/defence.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Knight Shield");
	equipmentItemName = "superJungleShield"; addItemBox(equipmentItemName, 0, "A shield found from a tribesmen.<br /><img src='images/defence.png' class='img-tiny'> 14", "item-section-exploring-2", mainColorDarkLighterGold,"Jungle Shield+");
	
	equipmentItemName = "bearFullMask"; addItemBox(equipmentItemName, 0, "Avoids bears in caves while keeping you nice and warm.<br /><img src='images/defence.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Bear Full Mask");
	
	equipmentItemName = "bearFurMask"; addItemBox(equipmentItemName, 0, "Keeps you nice and warm.<br /><img src='images/defence.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Bear Mask");
	equipmentItemName = "bearFurBody"; addItemBox(equipmentItemName, 0, "Keeps you nice and warm.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Bear Body");
	equipmentItemName = "bearFurLegs"; addItemBox(equipmentItemName, 0, "Keeps you nice and warm.<br /><img src='images/defence.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Bear Legs");
	
	equipmentItemName = "snakeskinMask"; addItemBox(equipmentItemName, 0, "Armour made of snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Snake Mask");
	equipmentItemName = "snakeskinBody"; addItemBox(equipmentItemName, 0, "Armour made of snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Snake Body");
	equipmentItemName = "snakeskinLegs"; addItemBox(equipmentItemName, 0, "Armour made of snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Snake Legs");
	equipmentItemName = "snakeskinCape"; addItemBox(equipmentItemName, 0, "Armour made of snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Snake Cape");
	
	equipmentItemName = "lavaSnakeskinMask"; addItemBox(equipmentItemName, 0, "Armour made of lava snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Lava Snake Mask");
	equipmentItemName = "lavaSnakeskinBody"; addItemBox(equipmentItemName, 0, "Armour made of lava snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Lava Snake Body");
	equipmentItemName = "lavaSnakeskinLegs"; addItemBox(equipmentItemName, 0, "Armour made of lava snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Lava Snake Legs");
	equipmentItemName = "lavaSnakeskinCape"; addItemBox(equipmentItemName, 0, "Armour made of lava snakeskin.<br /><img src='images/defence.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Lava Snake Cape");
	
	equipmentItemName = "lizardskinMask"; addItemBox(equipmentItemName, 0, "Armour made of lizard skin.<br /><img src='images/defence.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Lizard Mask");
	equipmentItemName = "lizardskinBody"; addItemBox(equipmentItemName, 0, "Armour made of lizard skin.<br /><img src='images/defence.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Lizard Body");
	equipmentItemName = "lizardskinLegs"; addItemBox(equipmentItemName, 0, "Armour made of lizard skin.<br /><img src='images/defence.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Lizard Legs");
	equipmentItemName = "lizardskinCape"; addItemBox(equipmentItemName, 0, "Armour made of lizard skin.<br /><img src='images/defence.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Lizard Cape");
	
	equipmentItemName = "elephantMask"; addItemBox(equipmentItemName, 0, "Armour made from elephant pelts.<br /><img src='images/defence.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Elephant Mask");
	equipmentItemName = "elephantBody"; addItemBox(equipmentItemName, 0, "Armour made from elephant pelts.<br /><img src='images/defence.png' class='img-tiny'> 8", "item-section-exploring-2", mainColorDarkLighterGold,"Elephant Body");
	equipmentItemName = "elephantLegs"; addItemBox(equipmentItemName, 0, "Armour made from elephant pelts.<br /><img src='images/defence.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Elephant Legs");
	equipmentItemName = "elephantCape"; addItemBox(equipmentItemName, 0, "Armour made of lizard skin.<br /><img src='images/defence.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Elephant Cape");
	
	equipmentItemName = "promethiumHelmet"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 8", "item-section-exploring-2", mainColorDarkLighterGold,"Promethium Helmet");
	equipmentItemName = "promethiumBody"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Promethium Body");
	equipmentItemName = "promethiumLegs"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Promethium Legs");
	
	equipmentItemName = "titaniumHelmet"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 10", "item-section-exploring-2", mainColorDarkLighterGold,"Titanium Helmet");
	equipmentItemName = "titaniumBody"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 14", "item-section-exploring-2", mainColorDarkLighterGold,"Titanium Body");
	equipmentItemName = "titaniumLegs"; addItemBox(equipmentItemName, 0, "Armour made from promethium bars.<br /><img src='images/defence.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Titanium Legs");
	
	equipmentItemName = "steelHelmet"; addItemBox(equipmentItemName, 0, "A helmet made of steel.<br /><img src='images/defence.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Helmet");
	equipmentItemName = "steelBody"; addItemBox(equipmentItemName, 0, "A plate body made of steel.<br /><img src='images/defence.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Body");
	equipmentItemName = "steelLegs"; addItemBox(equipmentItemName, 0, "Plate legs made of steel.<br /><img src='images/defence.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Legs");
	
	equipmentItemName = "goldHelmet"; addItemBox(equipmentItemName, 0, "A helmet made of pure gold.<br /><img src='images/defence.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Helmet");
	equipmentItemName = "goldBody"; addItemBox(equipmentItemName, 0, "A plate body made of pure gold.<br /><img src='images/defence.png' class='img-tiny'> 8", "item-section-exploring-2", mainColorDarkLighterGold,"Body");
	equipmentItemName = "goldLegs"; addItemBox(equipmentItemName, 0, "Plate legs made of pure gold.<br /><img src='images/defence.png' class='img-tiny'> 7", "item-section-exploring-2", mainColorDarkLighterGold,"Legs");
	
	equipmentItemName = "tridentSoldierHelmet"; addItemBox(equipmentItemName, 0, "A helmet from a trident soldier.<br /><img src='images/defence.png' class='img-tiny'> 12", "item-section-exploring-2", mainColorDarkLighterGold,"Trident Soldier Helmet");
	equipmentItemName = "tridentSoldierHelmetPlus"; addItemBox(equipmentItemName, 0, "A helmet from a trident soldier.<br /><img src='images/defence.png' class='img-tiny'> 15", "item-section-exploring-2", mainColorDarkLighterGold,"Trident Soldier Helmet+");
	
	equipmentItemName = "fireGloves"; addItemBox(equipmentItemName, 0, "Imbued with magical fire power.<br /><span style='color:orange;'><img src='images/fireSpell.png' class='img-tiny'> <b>Effect:</b> +3 fire spell damage</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Fire Gloves");
	equipmentItemName = "iceGloves"; addItemBox(equipmentItemName, 0, "Imbued with frost power.<br /><span style='color:orange;'><img src='images/frostSpell.png' class='img-tiny'> <b>Effect:</b> Fire spell will sometimes deal frost damage instead, dealing +6 base damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Ice Gloves");
	
	
	
	equipmentItemName = "darkMageHood"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/darkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Dark hood");
	equipmentItemName = "darkMageTop"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/darkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Dark top");
	equipmentItemName = "darkMageBottom"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/darkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Dark bottom");
	equipmentItemName = "trimmedDarkMageHood"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/trimmedDarkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Trimmed Dark hood");
	equipmentItemName = "trimmedDarkMageTop"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/trimmedDarkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Trimmed Dark top");
	equipmentItemName = "trimmedDarkMageBottom"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/trimmedDarkMageTop.png' class='img-tiny'> <b>Full set effect:</b> Double magic damage. </span>", "item-section-exploring-2", mainColorDarkLighterGold,"Trimmed Dark bottom");
	
	equipmentItemName = "bloodReaperHood"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Hood");
	equipmentItemName = "bloodReaperTop"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Top");
	equipmentItemName = "bloodReaperBottom"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Bottom");
	
	equipmentItemName = "trimmedBloodReaperHood"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Hood");
	equipmentItemName = "trimmedBloodReaperTop"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Top");
	equipmentItemName = "trimmedBloodReaperBottom"; addItemBox(equipmentItemName, 0, "Imbued with magical power.<br /><span style='color:orange;'><img src='images/bloodReaperTop.png' class='img-tiny'> <b>Full set effect:</b> Triple magic damage.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Blood Reaper Bottom");
	
	
	equipmentItemName = "oxygenTank"; addItemBox(equipmentItemName, 0, "Ability to breath underwater.<br /><img src='images/defence.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Oxygen Tank");
	equipmentItemName = "ancientOxygenTank"; addItemBox(equipmentItemName, 0, "Ability to breath deep underwater.<br /><img src='images/defence.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Oxygen Tank");
	equipmentItemName = "lightbulb"; addItemBox(equipmentItemName, 0, "Shocks your enemy every 10 seconds.<br /><img src='images/defence.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Light Bulb");
	equipmentItemName = "sharkFin"; addItemBox(equipmentItemName, 0, "Increases your attack speed when fighting underwater.", "item-section-exploring-2", mainColorDarkLighterGold,"Shark Fin");
	
	
	
	equipmentItemName = "stoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker amulet");
	equipmentItemName = "sapphireStoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker amulet");
	equipmentItemName = "emeraldStoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker  amulet");
	equipmentItemName = "rubyStoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker amulet");
	equipmentItemName = "diamondStoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker amulet");
	equipmentItemName = "bloodDiamondStoneAmulet"; addItemBox(equipmentItemName, 0, "Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker amulet");
	
	
	equipmentItemName = "boneAmulet"; addItemBox(equipmentItemName, 0, "Double regular bone drops.", "item-section-exploring-2", mainColorDarkLighterGold,"Bone amulet");
	equipmentItemName = "enchantedBoneAmulet"; addItemBox(equipmentItemName, 0, "Double bone drops.<br /><span style='color:pink'>Works on all types of bones and ashes.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Bone amulet");
	equipmentItemName = "ghostScanAmulet"; addItemBox(equipmentItemName, 0, "Ability to see ghosts.", "item-section-exploring-2", mainColorDarkLighterGold,"Ghost Scan Amulet");
	equipmentItemName = "invisibilityAmulet"; addItemBox(equipmentItemName, 0, "10% chance to evade an attack.", "item-section-exploring-2", mainColorDarkLighterGold,"Invisibility Amulet");
	equipmentItemName = "enchantedInvisibilityAmulet"; addItemBox(equipmentItemName, 0, "10% chance to evade an attack.<br /><span style='color:pink'>If evaded succesfully, the next enemy hit will guarantee another evade.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Invisibility Amulet");
	equipmentItemName = "exploringSpeedAmulet"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>15% faster exploring times.", "item-section-exploring-2", mainColorDarkLighterGold,"Exploring Speed Amulet");
	equipmentItemName = "oxygenAmulet"; addItemBox(equipmentItemName, 0, "Ability to breath underwater", "item-section-exploring-2", mainColorDarkLighterGold,"Oxygen Amulet");
	
	equipmentItemName = "stoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 1", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "sapphireStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 2", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "emeraldStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 3", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "rubyStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 4", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "diamondStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 5", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "bloodDiamondStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 6", "item-section-exploring-2", mainColorDarkLighterGold,"Berserker Ring");
	equipmentItemName = "enchantedBloodDiamondStoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Made from a type of stone found in dungeons.<br /><img src='images/attack.png' class='img-tiny'> 12<br /><span style='color:pink'>Double the stats.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Berserker Ring");
	
	equipmentItemName = "boneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Double regular bone drops.", "item-section-exploring-2", mainColorDarkLighterGold,"Bone Ring");
	equipmentItemName = "enchantedBoneRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Double bone drops.<br /><span style='color:pink'>Works on all types of bones and ashes.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Bone Ring");
	equipmentItemName = "ghostScanRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Ability to see ghosts.", "item-section-exploring-2", mainColorDarkLighterGold,"Ghost Scan Ring");
	equipmentItemName = "invisibilityRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>10% chance to evade an attack.", "item-section-exploring-2", mainColorDarkLighterGold,"Invisibility Ring");
	equipmentItemName = "enchantedInvisibilityRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>10% chance to evade an attack.<br /><span style='color:pink'>If evaded succesfully, the next enemy hit will guarantee another evade.</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Enchanted Invisibility Ring");
	equipmentItemName = "oxygenRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Ability to breath underwater.", "item-section-exploring-2", mainColorDarkLighterGold,"Oxygen Ring");
	equipmentItemName = "exploringSpeedRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>25% faster exploring times.", "item-section-exploring-2", mainColorDarkLighterGold,"Exploring Speed Ring");
	equipmentItemName = "bloodMoonRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Ability to turn off the blood moon.", "item-section-exploring-2", mainColorDarkLighterGold,"Bloodmoon Ring");
	equipmentItemName = "gemRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Double gems from goblins.", "item-section-exploring-2", mainColorDarkLighterGold,"Gem Ring");
	
	equipmentItemName = "fieldsLootingQuestRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "fieldsLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "forestsLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "cavesLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "volcanoLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "northernFieldsLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "hauntedMansionLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "desertLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "oceanLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "jungleLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "dungeonEntranceLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "dungeonLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "dungeonCoffinLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "castleLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "cemeteryLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "factoryLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "hauntedWoodsLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "deepOceanLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields<br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "fieldsBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest<br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "forestsBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves<br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "cavesBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano<br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "volcanoBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields<br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "northernFieldsBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Haunted Mansion<br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "hauntedMansionBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Haunted Mansion <img src='images/bloodDiamond.png' class='img-tiny'/><br />Desert<br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "desertBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Haunted Mansion <img src='images/bloodDiamond.png' class='img-tiny'/><br />Desert <img src='images/bloodDiamond.png' class='img-tiny'/><br />Ocean<br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "oceanBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Haunted Mansion <img src='images/bloodDiamond.png' class='img-tiny'/><br />Desert <img src='images/bloodDiamond.png' class='img-tiny'/><br />Ocean <img src='images/bloodDiamond.png' class='img-tiny'/><br />Jungle<br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	equipmentItemName = "jungleBloodLootingRing"; addItemBox(equipmentItemName, 0, "<span id='"+equipmentItemName+"On-equiped' style='color:orange;display:none;'>Equipped<br /></span>Doubles the chance for equipement drops from monsters.<br /><br /><span style='color:yellow'><u>Works in:</u><br />Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Forest <img src='images/bloodDiamond.png' class='img-tiny'/><br />Caves <img src='images/bloodDiamond.png' class='img-tiny'/><br />Volcano <img src='images/bloodDiamond.png' class='img-tiny'/><br />Northern Fields <img src='images/bloodDiamond.png' class='img-tiny'/><br />Haunted Mansion <img src='images/bloodDiamond.png' class='img-tiny'/><br />Desert <img src='images/bloodDiamond.png' class='img-tiny'/><br />Ocean <img src='images/bloodDiamond.png' class='img-tiny'/><br />Jungle <img src='images/bloodDiamond.png' class='img-tiny'/><br />Dungeon Entrance<br />Dungeon<br />Dungeon Coffin<br />Castle<br />Cemetery<br />Factory<br />Haunted Woods<br />Deep Ocean</span>", "item-section-exploring-2", mainColorDarkLighterGold,"Looting Ring");
	
	
	for(var i = 0; i < foodArrayGlobal.length; i++)
	{
		var foodFound = foodArrayGlobal[i];
		if(foodFound.itemNameRaw != "none")
		{
			addItemBox(foodFound.itemNameRaw, 0, "<span id='"+foodFound.itemNameRaw+"-level'>Level "+foodFound.levelReq+"</span><br /><span><img src='images/heat.png' class='img-tiny'> "+formatNumber(foodFound.heatRequired)+" Heat</span><br /><span><img src='images/cookingSkill.png' class='img-tiny'> "+formatNumber(foodFound.xp)+" XP</span>", "item-section-cooking-1", mainColorGoldCookingSecondary,foodFound.itemNameRaw, false)
		}
	}
	
	
	for(var i = 0; i < foodArrayGlobal.length; i++)
	{
		var foodFound = foodArrayGlobal[i];
		
		var itemNameCooked = foodFound.itemNameCooked;
		var energyGiven = formatNumber(foodFound.energyGiven);
		var itemNameDisplayLabel = foodFound.itemNameCooked;
		
		var extraInfo = "";
		if(foodFound.itemNameCooked.endsWith("2") || foodFound.itemNameCooked.endsWith("3")  || foodFound.itemNameCooked.endsWith("4"))
		{
			itemNameDisplayLabel = itemNameDisplayLabel.substr(0, itemNameDisplayLabel.length - 1);
			
			if(foodFound.itemNameCooked.endsWith("2"))
			extraInfo = "<img src='images/bronzeStar.png' class='img-tiny' /> Double energy<br />";
			if(foodFound.itemNameCooked.endsWith("3"))
			extraInfo = "<img src='images/silverStar.png' class='img-tiny' /> 5 times energy<br />";
			if(foodFound.itemNameCooked.endsWith("4"))
			extraInfo = "<img src='images/goldStar.png' class='img-tiny' /> 20 times energy<br />";
		}
		
		addItemBox(itemNameCooked, 0, extraInfo + "<span><img src='images/steak.png' class='img-tiny'> "+ energyGiven+"</span>", "item-section-cooking-1", mainColorGoldCookingSecondaryCooked,itemNameDisplayLabel, false)
	}
	
	
	addItemBox("votingCard", -1, "<span>Click to start collecting votes to potentially become the mayor of the village.</span>", "item-section-home-1", mainColorDarkLighterGreen,"Voting Card")
	
	addItemBox("tradingPost", -1, "<span>Click to trade with a player.</span><br /><img src='images/market.png' class='img-tiny'> <span data-item-display='tradesTotal'>0</span> trades.<span style='display:none;color:#80ff80' id='tradingPost-tradableBloodCrystals'><br /><img src='images/bloodCrystals.png' class='img-tiny' /> Tradable: <span data-item-display='bloodCrystalsTradable'>0</span><span style='display:none;' id='hc-tradingPost-disabled'><br /><img src='images/hardcoreIcon.png' class='img-tiny' /> DISABLED</span>", "item-section-home-1", mainColor,"trading post")
	addItemBox("timeMachine", -1, "<span>Travel to the future.</span><span style='display:none;' id='hc-timeMachine-disabled'><br /><img src='images/hardcoreIcon.png' class='img-tiny' /> DISABLED</span>", "item-section-home-1", mainColor,"Time Machine")
	addItemBox("wells", -1, "<span>Enter a prize pool with other players.</span><br /><span style='color:gold'><b>Max per User: </b><img src='images/coins.png' class='img-tiny' /> <span data-item-display='wellsMaxCoinsPerUser'>0</span></span><br /><span style='color:#ff3333'><b>Max per User: </b><img src='images/bloodCrystals.png' class='img-tiny' /> <span data-item-display='wellsMaxBcPerUser'>0</span></span><span style='display:none;' id='hc-wells-disabled'><br /><img src='images/hardcoreIcon.png' class='img-tiny' /> DISABLED</span>", "item-section-home-1", mainColor,"wells")
	addItemBox("mineralNecklace", -1, "<span style='color:gold' id='mineralNecklace-equipped'>Unequipped</span><br /><img src='images/minerals.png' class='img-tiny' />  <span style='color:orange' id='mineralNecklace-timer'>Uncharged</span><br />A special necklace that can be worn by many.", "item-section-home-1", mainColor,"Mineral Necklace");
	
	addItemBox("hpEmblem1Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem2Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem4Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem5Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem6Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem7Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem1", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem2", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem3", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem4", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem5", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem6", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("hpEmblem7", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Increases max hp of explorer by 10.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem1Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem3Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem4Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem5Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem6Uncharged", 0, "<span style='color:orange'>Needs to be charged.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	
	addItemBox("magicEmblem1", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem2", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem3", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem4", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem5", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	addItemBox("magicEmblem6", 0, "<span style='color:orange'>Can be absorbed from your explorer.</span><br /><span>Upgrades a spell of your choice.</span>", "item-section-home-1", mainColor,"emblem")
	
	
	addItemBox("veryHighWindMagicOrb", 0, "<span>Changes the <img src='images/windIcon.png' class='img-tiny' /> wind for everyone on this server to very high.</span><br /><span style='color:gold'>Lasts for 5 minutes.</span>", "item-section-home-1", mainColor,"very high wind")
	addItemBox("bloodMoonMagicOrb", 0, "<span><img src='images/bloodMoonIcon.png' class='img-tiny'/> Triggers a blood moon.<br /><span style='color:yellow'>All monsters become more powerful.</span></span><br /><span style='color:gold'>Lasts for 5 minutes.</span>", "item-section-home-1", mainColor,"blood moon")
	addItemBox("pirates", 10, "<span>Actively looking for treasure maps.</span><span style='display:none' id='piratesNavigation-label' ><br /><img src='images/piratesNavigation_white.png' class='img-tiny' /> Boat Maps</span><br /><img src='images/blueEmptyOrb.png' class='img-tiny'> <span id='pirates-totalBlueOrbs'>0</span><span style='display:none;' id='pirates-greenmap-label'><br /><img src='images/greenEmptyOrb.png' class='img-tiny'> <span id='pirates-totalGreenOrbs'>0</span></span>", "item-section-home-1", mainColor,"pirates")
	addItemBox("dailyChest", 0, "<span>A chest obtained from finishing daily missions.</span><span style='color:orange'><br />Reward scales based on account levels and key used.</span>", "item-section-home-1", mainColor,"chest")
	addItemBox("mimicItem", 0, "The daily chest has come to life!", "item-section-home-1", mainColor,"mimic")
	addItemBox("treasureMap", -1, "<span>Contains a clue.</span>", "item-section-home-1", mainColor,"treasure map")
	addItemBox("greenTreasureMap", -1, "<span>Contains a clue.</span>", "item-section-home-1", mainColor,"treasure map")
	addItemBox("treasureChest", 0, "<span>A treasure chest found from solving a map.</span>", "item-section-home-1", mainColor,"chest")
	addItemBox("greenTreasureChest", 0, "<span>A treasure chest found from solving a map.</span>", "item-section-home-1", mainColor,"chest")
	addItemBox("redTreasureChest", 0, "<span>A treasure chest found from solving a map.</span>", "item-section-home-1", mainColor,"chest")
	addItemBox("bronzeKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bronzeKey')), "item-section-home-1", mainColor,"key");
	addItemBox("bronzeSapphireKey", 0, "<span>A key used to open daily treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bronzeSapphireKey')), "item-section-home-1", mainColor,"key");
	addItemBox("bronzeEmeraldKey", 0, "<span>A key used to open daily treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bronzeEmeraldKey')), "item-section-home-1", mainColor,"key");
	addItemBox("bronzeRubyKey", 0, "<span>A key used to open daily treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bronzeRubyKey')), "item-section-home-1", mainColor,"key");
	addItemBox("bronzeDiamondKey", 0, "<span>A key used to open daily treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bronzeDiamondKey')), "item-section-home-1", mainColor,"key");
	addItemBox("goldKey", 0, "<span>A key used to open treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('goldKey')), "item-section-home-1", mainColor,"key");
	addItemBox("sapphireKey", 0, "<span>A key used to open treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('sapphireKey')), "item-section-home-1", mainColor,"key");
	addItemBox("emeraldKey", 0, "<span>A key used to open treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('emeraldKey')), "item-section-home-1", mainColor,"key");
	addItemBox("rubyKey", 0, "<span>A key used to open treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('rubyKey')), "item-section-home-1", mainColor,"key");
	addItemBox("diamondKey", 0, "<span>A key used to open treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('diamondKey')), "item-section-home-1", mainColor,"key");
	addItemBox("promethiumKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethiumKey')), "item-section-home-1", mainColor,"key");
	addItemBox("promethiumSapphireKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethiumSapphireKey')), "item-section-home-1", mainColor,"key");
	addItemBox("promethiumEmeraldKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethiumEmeraldKey')), "item-section-home-1", mainColor,"key");
	addItemBox("promethiumRubyKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethiumRubyKey')), "item-section-home-1", mainColor,"key");
	addItemBox("promethiumDiamondKey", 0, "<span>A key used to open green treasure chests.</span><br /><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('promethiumDiamondKey')), "item-section-home-1", mainColor,"key");
	addItemBox("smallBagOfCash", 0, "A bag containing some coins.<br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('smallBagOfCash'))+" </span>", "item-section-home-1", mainColor,"Bag of Coins");
	addItemBox("bagOfCash", 0, "A bag containing a lot of coins.<br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bagOfCash'))+" </span>", "item-section-home-1", mainColor,"Bag of Coins");
	addItemBox("bagOfCash2", 0, "A bag containing a lot of coins.<br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bagOfCash2'))+" </span>", "item-section-home-1", mainColor,"Bag of Coins");
	addItemBox("bagOfCash3", 0, "A bag containing a lot of coins.<br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('bagOfCash3'))+" </span>", "item-section-home-1", mainColor,"Bag of Coins");
	addItemBox("fishingHook", -1, "<span>Can be attached to a fishing rod.</span>", "item-section-home-1", mainColor,"fish hook")
	addItemBox("geodeChisel", -1, "<span>Used in a quest.</span>", "item-section-home-1", mainColor,"Chisel")
	addItemBox("xpLamp10k", 0, "<span>Grants xp in a selected skill.</span>", "item-section-home-1", mainColor,"xp lamp")
	addItemBox("shootingStar", 0, "<span>A shooting star found in outter space<br />This might be very useful in the future.</span><br /><span><img src='images/coins.png' class='img-tiny'> "+formatNumber(getItemPrice('shootingStar'))+" </span>", "item-section-home-1", mainColor,"shooting star")
	addItemBox("damagedTeddyBear", -1, "<span>A teddy bear with a missing arm.</span>", "item-section-home-1", mainColor,"Damaged Teddy");
	addItemBox("teddyBear", -1, "<span>A teddy bear.</span>", "item-section-home-1", mainColor,"Teddy Bear");
	addItemBox("pimpedTeddyBear", -1, "<span>A teddy bear with some funny looking hair.</span>", "item-section-home-1", mainColor,"Teddy Bear");
	
	
	//orbs
	addItemBox("blueEmptyOrb", 0, "<span>Can be converted into any blue orb.</span>", "item-section-orbs-1", mainColor,"empty orb");
	addItemBox("greenEmptyOrb", 0, "<span>Can be converted into any green orb.</span>", "item-section-orbs-1", mainColor,"empty orb");
	
	addItemBox("blueAxeOrb", 0, "<span>Gain +50 more logs when chopping trees.</span><br /><span style='color:gold'><b>Bonus Logs:</b> <span id='blueAxeOrb-bonusLogs'>0</span></span>", "item-section-orbs-1", mainColor,"axe orb");
	addItemBox("blueRakeOrb", 0, "<span>Gain more leaves when harvesting crops.</span><br /><span style='color:gold'><b>Bonus Leaves:</b> <span id='blueRakeOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"rake orb");
	addItemBox("blueOilWellOrb", 0, "<span>Increases oil gain.</span><br /><span style='color:gold'><b>Bonus Oil:</b> <span id='blueOilWellOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"oil well orb");
	addItemBox("blueFishingRodOrb", 0, "<span>Increases rate of catching fish.</span><br /><span style='color:gold'><b>Bonus Rate:</b> <span id='blueFishingRodOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"fishing rod orb");
	
	addItemBox("greenOilFactoryOrb", 0, "<span>Hire more workers for the oil factory.</span><br /><span style='color:gold'><b>Extra Workers:</b> <span id='greenOilFactoryOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"oil factory orb");
	addItemBox("greenCharcoalFoundryOrb", 0, "<span>Gain additonal charcoal from foundry.</span><br /><span style='color:gold'><b>Bonus Charcoal:</b> <span id='greenCharcoalFoundryOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"charcoal foundry orb");
	addItemBox("greenMetelDetectorOrb", 0, "<span>Increase sell value of all statues.</span><br /><span style='color:gold'><b>Bonus Statue Sell Price:</b> <span id='greenMetelDetectorOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"metal detector orb");
	addItemBox("greenExploringOrb", 0, "<span>Chance to get double, triple, or more loot bags from exploring and monster drops.</span><br /><span style='color:gold'><b>Double Loot Bag Rate:</b> <span id='greenExploringOrb-bonus'>0</span></span>", "item-section-orbs-1", mainColor,"exploring orb");

	//mayor electricity
	addItemBox("turbine", 0, "<span><img src='images/mayorElectricityResource.png' class='img-tiny' /> 100 kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-electicity", mainColor,"Turbines");
	addItemBox("powerplant", 0, "<span><img src='images/mayorElectricityResource.png' class='img-tiny' /> 500 kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> Medium Pollution</span>", "item-section-mayor-electicity", mainColor,"Powerplant");
	addItemBox("oilPowerplant", 0, "<span><img src='images/mayorElectricityResource.png' class='img-tiny' /> 2000 kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> High Pollution</span>", "item-section-mayor-electicity", mainColor,"Oil Powerplant");
	addItemBox("solarFarm", 0, "<span><img src='images/mayorElectricityResource.png' class='img-tiny' /> 1500 kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-electicity", mainColor,"Solar Farm");
	
	//mayor water
	addItemBox("waterPiping", 0, "Transports water between households and businesses.<br /><span id='waterPiping-volume-label'>0</span><br /><span id='waterPipingIssue-label' style='display:none;color:red'>Maximum capacity used</span>", "item-section-mayor-water", mainColor,"Water Pipes");
	addItemBox("waterTower", 0, "<span><img src='images/mayorWaterResource.png' class='img-tiny' /> 30,000 L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-water", mainColor,"Water Tower");
	addItemBox("waterFilteringPlant", 0, "<span><img src='images/mayorWaterResource.png' class='img-tiny' /> <span id='water-filtering-plant-L'>100,000</span> L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-water", mainColor,"Water Filtering");
	addItemBox("waterPipingValves", 0, "<span><img src='images/mayorWaterResource.png' class='img-tiny' /> <span id='water-filtering-plant-L'>300,000</span> L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-water", mainColor,"Pipe Valves");

	//mayor education
	addItemBox("elementarySchool", 0, "<span><img src='images/mayorEducationResourceIcon.png' class='img-tiny' /> 100 Seats<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-education", mainColor,"Elementary School");
	addItemBox("highschool", 0, "<span><img src='images/mayorEducationResourceIcon.png' class='img-tiny' /> 200 Seats<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-education", mainColor,"Highschool");

	//mayor security
	addItemBox("fireStation", 0, "<span><img src='images/mayorSecurityResource.png' class='img-tiny' /> 50 Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Fire Station");
	addItemBox("policeStation", 0, "<span><img src='images/mayorSecurityResource.png' class='img-tiny' /> 75 Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Police Station");
	addItemBox("clinic", 0, "<span><img src='images/mayorSecurityResource.png' class='img-tiny' /> 90 Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Clinic");
	addItemBox("prison", 0, "<span><img src='images/mayorSecurityResource.png' class='img-tiny' /> 100 Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Prison");
	addItemBox("museum", 0, "<span id='museum-label'>Click to manage<br /></span><span><img src='images/mayorSecurityResource.png' class='img-tiny' /> <span data-item-display='museumService'>0</span> Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Museum");
	addItemBox("policeHeadquarters", 0, "<span><img src='images/mayorSecurityResource.png' class='img-tiny' /> 500 Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> No Pollution</span>", "item-section-mayor-security", mainColor,"Police headquarters");
	
	//unique
	addItemBox("bulldozer", 0, "Ability to bulldoze a building.", "item-section-mayor-uniques", mainColor,"Bulldozer");
	addItemBox("parks", 0, "Increased population global happiness.", "item-section-mayor-uniques", mainColor,"Parks");
	addItemBox("powerlines", 0, "<span id='powerlines-label'>Doubles electicity output.</span>", "item-section-mayor-uniques", mainColor,"Powerlines");
	addItemBox("cityWalls", 0, "Controls the population flow.<br /><img src='images/mayorPopulation.png' id='city-walls-on-img-icon' class='img-tiny' /> <b>Currently:</b> <span id='city-walls-on-label' style='color:lime'>open</span>", "item-section-mayor-uniques", mainColor,"City Walls");
}

//Converts camelCase to Camel Case
function getItemName(itemName)
{
	var output = itemName.charAt(0).toUpperCase();
	for(var i = 1; i < itemName.length; i++)
	{
		if(itemName.charAt(i) == itemName.charAt(i).toUpperCase() && itemName.charAt(i) != "'")
			output += " ";
		
		output += itemName.charAt(i);
	}
	
	return output;
}


function refreshGemGoblinShop()
{
	if(theGemGoblinQuest != -1) return;
	
	var gemShopAreaDiv = document.getElementById("tab-goblinGemShop-area");
	
	var htmlOutput = "";
	var counterIndex = 1;
	
	htmlOutput += getHTMLForGemShopItem(counterIndex, window["gemGoblinItem" + counterIndex], window["gemGoblinItem" + counterIndex + "Amount"], window["gemGoblinItem" + counterIndex + "CostGem"], window["gemGoblinItem" + counterIndex + "CostGemAmount"],window["gemGoblinItem"+counterIndex+"CostBC"],window["gemGoblinItem"+counterIndex+"Desc"],window["gemGoblinItem"+counterIndex+"ItemNameFormat"]);
	counterIndex++;
		htmlOutput += getHTMLForGemShopItem(counterIndex, window["gemGoblinItem" + counterIndex], window["gemGoblinItem" + counterIndex + "Amount"], window["gemGoblinItem" + counterIndex + "CostGem"], window["gemGoblinItem" + counterIndex + "CostGemAmount"],window["gemGoblinItem"+counterIndex+"CostBC"],window["gemGoblinItem"+counterIndex+"Desc"],window["gemGoblinItem"+counterIndex+"ItemNameFormat"]);
	counterIndex++;
		htmlOutput += getHTMLForGemShopItem(counterIndex, window["gemGoblinItem" + counterIndex], window["gemGoblinItem" + counterIndex + "Amount"], window["gemGoblinItem" + counterIndex + "CostGem"], window["gemGoblinItem" + counterIndex + "CostGemAmount"],window["gemGoblinItem"+counterIndex+"CostBC"],window["gemGoblinItem"+counterIndex+"Desc"],window["gemGoblinItem"+counterIndex+"ItemNameFormat"]);
	counterIndex++;
	
	gemShopAreaDiv.innerHTML = htmlOutput;
}

function getHTMLForGemShopItem(counterIndex, itemName, amountFound, gemFound, gemAmount, bcFound, desc, displayNameFound)
{
	var htmlOutout = "";
	
	var gemCheck = "<img src='images/check.png' class='img-tiny' />";
	if(window[gemFound] < gemAmount) gemCheck = "<img src='images/x.png' class='img-tiny' />";
	
	
	var bcCheck = "<img src='images/check.png' class='img-tiny' />";
	if(bloodCrystals < bcFound) bcCheck = "<img src='images/x.png' class='img-tiny' />";
	
	var displayName = getItemName(itemName);
	if(displayNameFound != "none")
		displayName = displayNameFound;
	
	if (desc == "0" || desc == "none") desc = "";
	if(amountFound == 0) desc = "<b style='color:yellow'>Purchased!</b>"
	
	htmlOutout += "<div class='main-button' onclick='clicksGoblinShopItem("+counterIndex+")'>"
	htmlOutout += "<table>";
	htmlOutout += "<tr>";
	htmlOutout += "<td>" + "<img src='images/"+itemName+".png' class='img-medium' />" + "</td>";
	if(amountFound == 0) htmlOutout += "<td style='text-align:right;padding-right:20px;color:orange'><strike>" +displayName+"</strike><span style='font-size:10pt;color:white'><br />"+desc+"<hr /><img src='images/"+gemFound+".png' class='img-tiny' /> "+gemAmount+" "+gemCheck+"<br /><span style='color:pink;padding-right:20px;'>or</span><br />";
	else htmlOutout += "<td style='text-align:right;padding-right:20px;color:orange'>"+ formatNumber(parseInt(amountFound))+" " +displayName+"<span style='font-size:10pt;color:white'><br />"+desc+"<hr /><img src='images/"+gemFound+".png' class='img-tiny' /> "+gemAmount+" "+gemCheck+"<br /><span style='color:pink;padding-right:20px;'>or</span><br />";
	htmlOutout += "<img src='images/bloodCrystals.png' class='img-tiny' /> "+bcFound + " " + bcCheck+"</td>"
	htmlOutout += "</tr>";
	htmlOutout += "</table>";
	htmlOutout += "</div>";

	return htmlOutout;
}



function refreshBlueOrbsInfo()
{
	if(blueAxeOrb > 0)
	{
		document.getElementById("blueAxeOrb-bonusLogs").innerHTML = blueAxeOrb * 50;

		document.getElementById("axe1-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
		document.getElementById("axe2-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
		document.getElementById("axe3-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
		document.getElementById("axe4-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
		document.getElementById("axe5-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
		document.getElementById("axe6-blueOrbLabel").innerHTML = "<br /><img src='images/blueAxeOrb.png' class='img-tiny'/> " + "+" +blueAxeOrb * 50 + " logs";
	}
	if(blueRakeOrb > 0)
	{
		document.getElementById("blueRakeOrb-bonus").innerHTML = blueRakeOrb * 3;
		document.getElementById("rake1-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
		document.getElementById("rake2-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
		document.getElementById("rake3-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
		document.getElementById("rake4-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
		document.getElementById("rake5-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
		document.getElementById("rake6-blueOrbLabel").innerHTML = "<br /><img src='images/blueRakeOrb.png' class='img-tiny'/> " + "+" + blueRakeOrb * 3  + " leaves";
	}
	if(blueOilWellOrb > 0)
	{
		document.getElementById("blueOilWellOrb-bonus").innerHTML = blueOilWellOrb * 10 + "%";
		document.getElementById("bronzeOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("ironOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("silverOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("goldOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("promethiumOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("titaniumOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
		document.getElementById("ancientOilWell-blueOrbLabel").innerHTML = "<br /><img src='images/blueOilWellOrb.png' class='img-tiny'/> " + "+" + blueOilWellOrb * 10 + "%";
	}
	if(blueFishingRodOrb > 0)
	{
		document.getElementById("blueFishingRodOrb-bonus").innerHTML = "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod1-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod2-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod3-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod4-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod5-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
		document.getElementById("fishingRod6-blueOrbLabel").innerHTML = "<br /><img src='images/blueFishingRodOrb.png' class='img-tiny'/> " + "x" + parseInt(blueFishingRodOrb + 1);
	}
}

function refreshGreenOrbsInfo()
{
	if(greenOilFactoryOrb > 0)
	{
		document.getElementById("greenOilFactoryOrb-bonus").innerHTML = greenOilFactoryOrb * 10;
		document.getElementById("oilFactory1-greenOrb").innerHTML = "<br /><img src='images/greenOilFactoryOrb.png' class='img-tiny'/> " + "+" + greenOilFactoryOrb * 10 + " workers";
		document.getElementById("oilFactory2-greenOrb").innerHTML = "<br /><img src='images/greenOilFactoryOrb.png' class='img-tiny'/> " + "+" + greenOilFactoryOrb * 10 + " workers";
		document.getElementById("oilFactory3-greenOrb").innerHTML = "<br /><img src='images/greenOilFactoryOrb.png' class='img-tiny'/> " + "+" + greenOilFactoryOrb * 10 + " workers";
		document.getElementById("oilFactory4-greenOrb").innerHTML = "<br /><img src='images/greenOilFactoryOrb.png' class='img-tiny'/> " + "+" + greenOilFactoryOrb * 10 + " workers";
	}
	if(greenCharcoalFoundryOrb > 0)
	{
		document.getElementById("greenCharcoalFoundryOrb-bonus").innerHTML = greenCharcoalFoundryOrb;
		document.getElementById("charcoalFoundry-greenOrb").innerHTML = "<br /><img src='images/greenCharcoalFoundryOrb.png' class='img-tiny'/> " + "+" + greenCharcoalFoundryOrb + " charcoal";
	}
	if(greenMetelDetectorOrb > 0)
	{
		document.getElementById("greenMetelDetectorOrb-bonus").innerHTML = greenMetelDetectorOrb * 10 + "%";
		document.getElementById("metalDetector1-greenOrb").innerHTML = "<br /><img src='images/greenMetelDetectorOrb.png' class='img-tiny'/> " + "+" + greenMetelDetectorOrb * 10 + "%";
		document.getElementById("metalDetector2-greenOrb").innerHTML = "<br /><img src='images/greenMetelDetectorOrb.png' class='img-tiny'/> " + "+" + greenMetelDetectorOrb * 10 + "%";
		document.getElementById("metalDetector3-greenOrb").innerHTML = "<br /><img src='images/greenMetelDetectorOrb.png' class='img-tiny'/> " + "+" + greenMetelDetectorOrb * 10 + "%";
		
		for(var i = 0; i < exploringMetalDetectorStatuesGlobal.length; i++)
		{
			document.getElementById(exploringMetalDetectorStatuesGlobal[i] + "-price").innerHTML = formatNumber(getItemPrice(exploringMetalDetectorStatuesGlobal[i])) + "<br /><img src='images/greenMetelDetectorOrb.png' class='img-tiny'/>" + "+" + greenMetelDetectorOrb * 10 + "%";
		}
	}
	if(greenExploringOrb > 0)
	{
		document.getElementById("greenExploringOrb-bonus").innerHTML = greenExploringOrb * 10 + "%<br /><span style='color:white;'><b>Triggered:</b> " + "<span data-item-display='greenExploringOrbTriggered'>"+greenExploringOrbTriggered+"</span>" + " times";
		document.getElementById("explorer-greenOrb").innerHTML = "<img src='images/greenExploringOrb.png' class='img-tiny'/> " + "+" + greenExploringOrb * 10 + "%";
	}
	if(greenExploringGoblinOrb > 0)
	{
		document.getElementById("goblinCousin-greenOrb").innerHTML = "<br /><img src='images/greenExploringOrb.png' class='img-tiny'/> " + "+" + greenExploringGoblinOrb * 10 + "%";
		
	}
}

function setNotification(onOrOff, name)
{
	if(onOrOff == 1)
		document.getElementById("notification-" + name).style.display = "";
	else
		document.getElementById("notification-" + name).style.display = "none";
}

