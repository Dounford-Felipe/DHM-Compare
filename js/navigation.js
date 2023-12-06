var lastTabId = "main"


function navigateAndLoadImages(tabId,section)
{
	loadImages(section);
	navigate(tabId);
}
function navigate(tabId)
{
	if(tabId == "purchaseCrystals" && treasureMap == 7)
		sendBytes("CLICKS_PURCHASE_BLOOD_CRYSTALS");
	
	if(canNavigate(tabId))
	{
		hideAllTabs();
		document.getElementById("tab-" + tabId).style.display = "";
		
		if(tabId != "craftingItems" && tabId != "levelup" && tabId != "craftingAnItem")
		lastTabId = tabId;
		refreshShowBrewingTimers();
		$(window).scrollTop(0);
	}
}

function generateDropdownSearchHTML(buttonName, serverMessage, arrayOfOptions, showOptionsAsGetItemName, customOptions)
{
	var htmlOutput = "";
	
	htmlOutput += "<div class='dropdown'>";
	htmlOutput += "<button onclick='dropDownButton(\"drop-down-"+serverMessage+"\")' class='dropbtn'>"+buttonName+"</button>";
	htmlOutput += "<div id='drop-down-"+serverMessage+"' class='dropdown-content'>";
	htmlOutput += "<input type='text' placeholder='Search...' id='search-filter-input-"+serverMessage+"' onkeyup='filterFunction(\""+serverMessage+"\")' class='dropdown-content-input-search'>";
	
	if(customOptions == "marketSearch")
		htmlOutput += "<a onclick='sendBytes(\""+serverMessage+"="+"none"+"\");dropDownButton(\"drop-down-"+serverMessage+"\")'>"+"<i>Show All</i>"+"</a>"
	for(var i = 0; i < arrayOfOptions.length; i++)
	{
		var itemNameDisplay = arrayOfOptions[i];
		if(showOptionsAsGetItemName) itemNameDisplay = getItemName(arrayOfOptions[i])
		htmlOutput += "<a onclick='sendBytes(\""+serverMessage+"="+arrayOfOptions[i]+"\");dropDownButton(\"drop-down-"+serverMessage+"\")'>"+itemNameDisplay+"</a>"
	}
	
	htmlOutput += "</div>";
	htmlOutput += "</div>";
	
	return htmlOutput;
}

function filterFunction(serverMessage) 
{

  var input, filter, ul, li, a, i;
  input = document.getElementById("search-filter-input-" + serverMessage);
  filter = input.value.toUpperCase();
  div = document.getElementById("drop-down-" + serverMessage);
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function dropDownButton(dropdownId) 
{
  document.getElementById(dropdownId).classList.toggle("show");
}

function navigateLastTab()
{
	navigate(lastTabId);
}

function hideAllTabs()
{
	document.getElementById("tab-main").style.display = "none";
	document.getElementById("tab-mining").style.display = "none";
	document.getElementById("tab-crafting").style.display = "none";
	document.getElementById("tab-miningOres").style.display = "none";
	document.getElementById("tab-shop").style.display = "none";
	document.getElementById("tab-craftingItems").style.display = "none";
	document.getElementById("tab-craftingAnItem").style.display = "none";
	document.getElementById("tab-woodcutting").style.display = "none";
	document.getElementById("tab-tree").style.display = "none";
	document.getElementById("tab-farming").style.display = "none";
	document.getElementById("tab-farm").style.display = "none";
	document.getElementById("tab-farmingPlant").style.display = "none";
	document.getElementById("tab-missions").style.display = "none";
	document.getElementById("tab-bloodShop").style.display = "none";
	document.getElementById("tab-gemPending").style.display = "none";
	document.getElementById("tab-brewing").style.display = "none";
	document.getElementById("tab-brew").style.display = "none";
	document.getElementById("tab-researcher").style.display = "none";
	document.getElementById("tab-explore").style.display = "none";
	document.getElementById("tab-exploreSelect").style.display = "none";
	document.getElementById("tab-exploring").style.display = "none";
	document.getElementById("tab-logout").style.display = "none";
	document.getElementById("tab-levelup").style.display = "none";
	document.getElementById("tab-cooking").style.display = "none";
	document.getElementById("tab-quests").style.display = "none";
	document.getElementById("tab-home").style.display = "none";
	document.getElementById("tab-purchaseCrystals").style.display = "none";
	document.getElementById("tab-confirmPurchaseCrystals").style.display = "none";
	document.getElementById("tab-equipment").style.display = "none";
	document.getElementById("tab-orbs").style.display = "none";
	document.getElementById("tab-combat").style.display = "none";
	document.getElementById("tab-combatInformation").style.display = "none";
	document.getElementById("tab-bloodShop-mysterGemBox").style.display = "none";
	document.getElementById("tab-bloodShop-enrichedPotions").style.display = "none";
	document.getElementById("tab-tradingPost").style.display = "none";
	document.getElementById("tab-wells").style.display = "none";
	document.getElementById("tab-geodes").style.display = "none";
	document.getElementById("tab-emblemHints").style.display = "none";
	document.getElementById("tab-refer").style.display = "none";
	document.getElementById("tab-rocketLaunch").style.display = "none";
	document.getElementById("tab-bloodShop-uniqueItems").style.display = "none";
	document.getElementById("tab-bloodShop-items").style.display = "none";
	document.getElementById("tab-bloodShop-emptyOrbs").style.display = "none";
	document.getElementById("tab-bloodShop-emptyBlueOrbs").style.display = "none";
	document.getElementById("tab-bloodShop-emptyGreenOrbs").style.display = "none";
	document.getElementById("tab-bloodShop-buffs").style.display = "none";
	document.getElementById("tab-hiscores").style.display = "none";
	document.getElementById("tab-event").style.display = "none";
	document.getElementById("tab-cemetery").style.display = "none";
	document.getElementById("tab-mayor").style.display = "none";
	document.getElementById("tab-mayor-electicity").style.display = "none";
	document.getElementById("tab-mayor-water").style.display = "none";
	document.getElementById("tab-mayor-education").style.display = "none";
	document.getElementById("tab-mayor-security").style.display = "none";
	document.getElementById("tab-mayor-uniques").style.display = "none";
	document.getElementById("tab-mayor-services").style.display = "none";
	document.getElementById("tab-hauntedWoods1").style.display = "none";
	document.getElementById("tab-puzzleBox3").style.display = "none";
	document.getElementById("tab-puzzleBox4").style.display = "none";
	document.getElementById("tab-witchesPotion2Cauldron").style.display = "none";
	document.getElementById("tab-stew").style.display = "none";
	document.getElementById("tab-mail").style.display = "none";
	document.getElementById("tab-mail-new").style.display = "none";
	document.getElementById("tab-answer-mail").style.display = "none";
	document.getElementById("tab-mail-details").style.display = "none";
	document.getElementById("tab-questGuides").style.display = "none";
	document.getElementById("tab-gemGoblinShop").style.display = "none";
	document.getElementById("tab-equipement-specialEffects").style.display = "none";
	document.getElementById("tab-bloodMoonMansionDoors").style.display = "none";
	document.getElementById("tab-tutorial-shop").style.display = "none";
	document.getElementById("tab-tutorial-shop2").style.display = "none";
	document.getElementById("tab-tutorial-shop3").style.display = "none";
	document.getElementById("tab-tutorial-mining").style.display = "none";
	document.getElementById("tab-tutorial-mining2").style.display = "none";
	document.getElementById("tab-tutorial-mining3").style.display = "none";
	document.getElementById("tab-tutorial-crafting").style.display = "none";
	document.getElementById("tab-tutorial-crafting2").style.display = "none";
	document.getElementById("tab-tutorial-crafting3").style.display = "none";
	document.getElementById("tab-tutorial-woodcutting").style.display = "none";
	document.getElementById("tab-tutorial-woodcutting2").style.display = "none";
	document.getElementById("tab-tutorial-farming").style.display = "none";
	document.getElementById("tab-tutorial-farming2").style.display = "none";
	document.getElementById("tab-tutorial-missions").style.display = "none";
	document.getElementById("tab-tutorial-bcShop").style.display = "none";
	document.getElementById("tab-tutorial-bcShop2").style.display = "none";
	document.getElementById("tab-tutorial-capacity").style.display = "none";
	document.getElementById("tab-tutorial-exploring").style.display = "none";
	document.getElementById("tab-tutorial-exploring2").style.display = "none";
	document.getElementById("tab-tutorial-exploring3").style.display = "none";
	document.getElementById("tab-tutorial-exploring4").style.display = "none";
	document.getElementById("tab-tutorial-exploring5").style.display = "none";
	document.getElementById("tab-tutorial-exploringAreas").style.display = "none";
	document.getElementById("tab-tutorial-cooking").style.display = "none";
	document.getElementById("tab-tutorial-cooking2").style.display = "none";
	document.getElementById("tab-tutorial-cooking3").style.display = "none";
	document.getElementById("tab-tutorial-cooking4").style.display = "none";
	document.getElementById("tab-playerMarket").style.display = "none";
	document.getElementById("tab-playerMarket-postItem").style.display = "none";
	document.getElementById("tab-misc").style.display = "none";
	document.getElementById("tab-profileViewer").style.display = "none";
	document.getElementById("tab-candyCanePuzzle").style.display = "none";
	document.getElementById("tab-scriptConfig").style.display = "none";
	document.getElementById("tab-scriptConfigMining").style.display = "none";
	document.getElementById("tab-scriptConfigCrafting").style.display = "none";
	document.getElementById("tab-scriptConfigWoodcutting").style.display = "none";
	document.getElementById("tab-scriptConfigFarming").style.display = "none";
	document.getElementById("tab-scriptConfigSeeds").style.display = "none";
	document.getElementById("tab-scriptConfigBrewing").style.display = "none";
	document.getElementById("tab-scriptConfigPotions").style.display = "none";
	document.getElementById("tab-scriptConfigExploring").style.display = "none";
	document.getElementById("tab-scriptConfigCooking").style.display = "none";
}



function canNavigate(tabId)
{
	if(document.getElementById("body-tag-child").style.backgroundImage == "url(\"images/backgrounds/woodcutting.png\")" || document.getElementById("body-tag-child").style.backgroundImage == "url(\"images/backgrounds/gemMine.png\")")
		resetBackground();
	
	document.getElementById("notfications-area-top").style.display = "";
	hideTopBar(false);
	hideBottomBar(false);
		
	
	
	switch(tabId)
	{
		case "mining":
			if(miners == 0)
			{
				confirmDialogue("90%","To unlock this skill, you must purchase a miner from the shop.<hr /><br /><div class='center'><img src='images/miners.png' class='img-large' /></center>","Close","","");
				return false;
			}
			else if(miners == 1 && miningUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=mining");
				sendBytes("TUTORIAL=miningUnlocked");
				return false;
			}
			else
			{
				refreshMiningTab();
				return true;
			}
		break;
		case "playerMarket":
			refreshPlayerMarket();
		break;
		case "playerMarket-postItem":
		
		break;
		case "miningOres":
			refreshMiningOresKeyItemsTab();
		break;
		case "misc":
		document.getElementById("notfications-area-top").style.display = "none";
		break;
		case "candyCanePuzzle":
		initCandyCanPuzzleArray();
		loadCandyCanePuzzleTab();
		break;
		case "equipement-specialEffects":
		{
			refreshEquipmentSpecialEffects();
		}
		break;
		case "gemGoblinShop":
		{
			refreshGemGoblinShop();
			sendBytes('CLICKS_GEM_GOBLIN_SHOP')
		}
		break;
		case "purchaseCrystals":
			if(bcDiscount > 0)
				document.getElementById("bcDiscount-area").style.display = ""; 
			else 
				document.getElementById("bcDiscount-area").style.display = "none";
		return true;
		break;
		
		case "searchItem":
			document.getElementById("notfications-area-top").style.display = "none";
		break;
		
		case "mail":
		if(totalDonations == 0) return false;
		document.getElementById("notfications-area-top").style.display = "none";
		sendBytes("REFRESH_MAIL");
		return true;
		break;
		
		case "main":
		
		if(exploringUnlocked == 0 && getGlobalLevel() >= 75)
		{
			document.getElementById("menu-button-exploring-unlock-label").style.display = "";
		}
		
		return true;
		break;
		
		case "questGuides":
		
		if(questGuides == 0) return false;
		loadQuestsGuidesRequirementsTab(false);
		
		break;
		case "mayor-services":
		refreshServicesTab();
		break;
		case "mayor":
		
		if(isMayor == 0)
		{
			return false;
		}
		refreshMayorTab();
		return true;
		break;
		
		case "hauntedWoods1":
			if(hauntedWoodsFlag == 1)
			{
				document.getElementById("img-hauntedWoods1").style.display = "none";
				
				if(curiousGhostActive == 0)
					document.getElementById("img-hauntedWoodsBackground").src = "images/hauntedWoodsInside2.png"
				else if(curiousGhostActive == 1)
					document.getElementById("img-hauntedWoodsBackground").src = "images/hauntedWoodsInside3.png"
			}
		break;
		
		case "trading-list":
		if(totalDonations > 0) document.getElementById("trading-add-post-check-img").src = "images/check.png";
		
		if(tradingPostOfferTime + 24 * 3600 * 1000 < Date.now() && tradingPostOfferTime > 0)
			document.getElementById("tradingPost-offer-expired").style.display = "";
		else
			document.getElementById("tradingPost-offer-expired").style.display = "none";
		
		
		return true;
		break;
		
		case "trading-list-post":
		if(totalDonations == 0) 
		{
			confirmDialogue('90%','You must have donated to post an offer on the trading list.  This is to reduce spam/trolls posting garbage.','Close','','');
			return false;
		}
		
		requestToRefreshTradables();
		return true;
		break;
		
		case "profileViewer":
		{
			document.getElementById("notfications-area-top").style.display = "none";
		}
		break;
		
		case "hiscores":
		{
			document.getElementById("notfications-area-top").style.display = "none";
			document.getElementById("your-profile-link").href = "https://dhm.idle-pixel.com/hiscores/search.php?user=" + username;
		}
		break;
		
		case "home":
		{
			refreshHomeTab();
			return true;
		}
		break;
		case "researcher":
			if(researcherNotificationTip == 0) sendBytes("FIRST_TIME_RESEARCHER")
			refreshResearcherMaxLevels();
		break;
		case "combatInformation":
		{
			sendBytes("REFRESH_COMBAT_INFORMATION_TAB");
			return true;
		}
		break;
		case "bloodShop-enrichedPotions":
			refreshEnrichedPotionTimersShop();
			return true;
		break;
		case "wells":
		sendBytes("NAVIGATED_WELLS")
		refreshWellsTab();
		break;
		case "quests":
		loadQuestScreen();
		return true;
		break;
		case "combat":
		refreshCombatTab();
		return true;
		break;
		case "crafting":

			if(craftingUnlocked == 1)
			{
				refreshCraftingTabBars();
				showCorrectFurnace();
				refreshChangedItemSwitch("furnacePercentage");
				return true;
			}
			else if((stoneFurnace == 0 || clickedMiner == 0) && craftingUnlocked == 0)
			{
				confirmDialogue("90%","To unlock this skill, you must purchase a stone furnace from the shop and have clicked on your previous purchased miner.<hr /><br /><div class='center'><img src='images/stoneFurnace.png' class='img-large' /></center>","Close","","");
				return false;
			}
			else if(stoneFurnace == 1 && clickedMiner == 1 && craftingUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=crafting");
				return false;
			}	
		break;

		case "woodcutting":
			if(woodcuttingUnlocked == 1)
			{
				initTreeSlots();
				return true;
			}
			else if(axe == 0)
			{
				confirmDialogue("90%","To unlock this skill, you must first craft an axe.<hr /><br /><div class='center'><img src='images/axe.png' class='img-large' /></center>","Close","","");
				return false;
			}
			else if(axe == 1 && woodcuttingUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=woodcutting");
				return false;
			}
		break;
		case "farming":
			if(farmingUnlocked == 1)
			{
				initFarmingSlots();
				refreshSeedLevelRequirementColors();
				refreshShortcutPotionsFarm();
				return true;
			}
			else if(rake == 0)
			{
				confirmDialogue("90%","To unlock this skill, you must first craft a rake.<hr /><br /><div class='center'><img src='images/rake.png' class='img-large' /></center>","Close","","");
				return false;
			}
			else if(rake == 1 && farmingUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=farming");
				return false;
			}
		break;
		case "brewing":
		
			if(brewingUnlocked == 1)
			{
				refreshBrewingTimerDisplayers();
				
				if(addingItemToTradeBooleanGlobal)
					hideCombatPotions(false);
				else
					hideCombatPotions(true);
				
				return true;
			}
			else if(brewingKit == 0)
			{
				var htmlOut = "<center><u style='font-size:16pt;'>Requirements</u></center><br /><hr />";
				if(communityCenter == 0) htmlOut += "<img src='images/communityCenter.png' class='img-small' /> A community center can be made using the crafting skill.<br /><hr />";
				if(missions == 0) htmlOut += "<img src='images/missions.png' class='img-small' /> Missions can be unlocked buy purchasing the mission's book in the shop. <span style='color:grey'>(Note that the book will only be available after crafting the community center.)</span><br /><hr />";
				if(brewingKit == 0) htmlOut += "<img src='images/brewingKit.png' class='img-small' /> The brewing kit is a reward from completing 3 mission sets.<br /><br /><span style='color:grey'>(Completing missions will only become available after purchasing the mission's book from the shop)</span><br /><hr />";
				
				confirmDialogue("90%",htmlOut,"Close","","");
				return false;
			}
			else if(brewingKit == 1 && brewingUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=brewing");
				return false;
			}
		break;
		case "bloodShop":
			refreshBloodShop();
		break;
			case "cooking":
			if(cookingUnlocked == 1)
			{
				hideOvenItemsBoxes();
				refreshCookingLevelRequirementColors();
				return true;
			}
			else if(bronzeOven == 0)
			{
				confirmDialogue("90%","To unlock this skill, you must first have a bronze oven.  It can be obtained by crafting it.<hr /><br /><div class='center'><img src='images/bronzeOven.png' class='img-large' /></center>","Close","","");
				return false;
			}
			else if(bronzeOven == 1 && cookingUnlocked == 0)
			{
				sendBytes("UNLOCK_SKILL=cooking");
				return false;
			}
		break;
		case "exploreSelect":
			loadExploreSelectTab();
			return true;
		break;
		case "exploring":
			if(exploringUnlocked == 1)
			{
				if(fieldsLootingQuestRing == 1 && theLootingRingQuest == 3 && fieldsLootingQuestRingOn == 0)
				{
					confirmDialogue("90%","<center><img src='images/lootingRingWizard.png' class='img-large' /><hr /><br />Remember to equip your new looting ring.  It has been placed with your other equipment.</center>","Close","","");
				}
			
				setAreaScreenByIndex(exploringCurrentAreaIndexChosenGlobal);
				loadImages("item-section-exploring-1");
				
				return true;
			}
			else if(getGlobalLevel() < 75)
			{
				confirmDialogue("90%","To unlock this skill, you must first have a global level of 75.  Your global level is the sum of all your skill levels.<hr /><br /><div class='center'><img src='images/globalLevel.png' class='img-large' /><br /><br /><b>Global level: </b>"+getGlobalLevel()+"/75</center>","Close","","");
				return false;
			}
			else if(getGlobalLevel() >= 75 && exploringUnlocked == 0)
			{
				if(explorer == 0)
					confirmDialogue("90%","<center><img src='images/exploringSkill.png' class='img-medium' /></center><br /><br />Before unlocking this, you must select a character you wish to explore with.","Continue","Cancel","CHOOSE_EXPLORER")
				else
					sendBytes("UNLOCK_SKILL=exploring");
				return false;
			}
		break;
		case "refer":
			if(isHardcore == 1)
			{
				confirmDialogue("90%","Hardcore accounts cannot refer a friend.","Close","","");
				return false;
			}
			else
			{
				document.getElementById("notfications-area-top").style.display = "none";
				return true;
			}
		break;
		case "explore":
			if(explorer == 0)
			{
				confirmDialogue("90%","<center><img src='images/explorer.png' class='img-large' /><br /><br />You need an explorer before searching for areas.  <br /><br /><i style='color:grey'>They can be hired from the game shop after crafting the <b>community center 2</b></i>.","Close","","")
				return false;
			}
			else
				document.getElementById("notfications-area-top").style.display = "none";
		break;
		case "equipment":
			if(window.innerWidth <= 400)
			{
				document.getElementById("equipment-stats-smaller-screen").style.display = "";
				document.getElementById("equipment-stats-larger-screen").style.display = "none";
			}
			else
			{
				document.getElementById("equipment-stats-smaller-screen").style.display = "none";
				document.getElementById("equipment-stats-larger-screen").style.display = "";
			}
			
			loadEquipmentTab();
			refreshEquipmentSpecialEffects();
		break;
		case "craftingItems":
			loadCraftablesList();
		break;
		case "brew":
			loadBrewingList();
		break;
		case "emblemHints":
		refreshEmblemHintTab();
		break;
		case "tree":
			if(window["treeUnlocked" + lastLoadTreePatch] == 0)
			{
				confirmDialogue("90%","This tree patch is locked.","Close","","");
				return false;
			}
			setBackgroundImage('images/backgrounds/woodcutting.png');
		break
		case "farm":
		if(window["farmUnlocked" + lastLoadFarmPatch] == 0)
		{
			confirmDialogue("90%","This farming patch is locked.","Close","","");
			return false;
		}
		setBackgroundImage('images/backgrounds/woodcutting.png');
		break;
		case "shop":
		
		if(votingCard == 1)
		{
			sendBytes('CLICKS_SHOP_VOTE=0')
		}
	
		refreshShop();
		if(bloodShop >= 2 && bloodShopNotif == 0)
			sendBytes("FIRST_LOOK_BLOOD_SHOP_LEVEL_2")
		break;
		case "missions":
		sendBytes("REFRESH_MISSIONS");
		break;
		case "gemPending":
		setBackgroundImage('images/backgrounds/gemMine.png');
		break;
		case "logout":
		document.getElementById("top-status-bar").style.display = "none";
		return true;
		break;
	}
	return true;
}

function toggleAutoReconnect()
{
	if(localStorage.getItem("login-autologin-off") == null) 
	{
		localStorage.setItem("login-autologin-off","1");
		document.getElementById("profile-autologin").src = "images/x.png";
		confirmDialogue('90%',"You have turned off the auto-reconnect feature when the login page is loaded.<br /><br /><i style='color:grey;font-size:10pt;'>Note that only this PC is affected with this change.</i>","Close","","")
		return;
	}
	
	if(localStorage.getItem("login-autologin-off") == "1")
	{
		localStorage.setItem("login-autologin-off","0");
		document.getElementById("profile-autologin").src = "images/check.png";
	}
	else
	{
		confirmDialogue('90%',"You have turned off the auto-reconnect feature when the login page is loaded.<br /><br /><i style='color:grey;font-size:10pt;'>Note that only this PC is affected with this change.</i>","Close","","")
		
		localStorage.setItem("login-autologin-off","1");
		document.getElementById("profile-autologin").src = "images/x.png";
	}
}

function hideTopBar(flag)
{
	if(flag)
		document.getElementById("top-status-bar").style.display = "none";
	else
		document.getElementById("top-status-bar").style.display = "";
}

function hideBottomBar(flag)
{
	if(flag)
		document.getElementById("bottom-nav-bar-inner").style.display = "none";
	else
		document.getElementById("bottom-nav-bar-inner").style.display = "";
}