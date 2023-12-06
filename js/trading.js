var addingItemToTradeBooleanGlobal = false;
var addingItemToPlayerMarketBooleanGlobal = false;
var playerMarketItemToSellNameGlobal = "";
var playerMarketItemToSellAmountGlobal = "";
var playerMarketItemToBuyNameGlobal = "";
var playerMarketItemToBuyAmountGlobal = "";
var isInTradeScreenGlobal = false;
var lastItemSelectedTradingGlobal = "none";
var TRADING_SLOTS = 3;
var tradablesArrayGlobal = [];
var tradablesPlayerMarketArrayGlobal = [];
var tradingItemNamesArray = [];
var tradingItemAmountArray = [];
var traderTradingItemNamesArray = [];
var traderTradingItemAmountArray = [];
var tradeAccepted = false;

var buyingItemFromPlayerMarketClickedMarketId = "";
var buyingItemFromPlayerMarketClickedSellItemGlobal = "";
var buyingItemFromPlayerMarketClickedSellItemAmountGlobal = "";
var buyingItemFromPlayerMarketClickedBuyItemGlobal = "";
var buyingItemFromPlayerMarketClickedBuyItemEachAmountGlobal = "";

function requestTrade()
{
	var usernameRequested = document.getElementById("dialogue-tradingPost-tradeRequest-username").value;
	sendBytes("TRADE_REQUEST=" + usernameRequested);
}

function initTrade(tradingWithUsername)
{
	for(var i = 0; i < TRADING_SLOTS; i++)
	{
		tradingItemNamesArray[i] = "none";
		tradingItemAmountArray[i] = 0;
		
		document.getElementById("trading-slot" + "-" +i).innerHTML  = "<td></td><td></td><td></td>";
		document.getElementById("trader-trading-slot" + "-" +i).innerHTML  = "<td></td><td></td><td></td>";
	}

	document.getElementById("tradeScreen-title").innerHTML = tradingWithUsername.toUpperCase();
	document.getElementById("trading-slot-title-trader").innerHTML = tradingWithUsername.toUpperCase() + "'s OFFERS";
	isInTradeScreenGlobal = true;
	document.getElementById("notification-tradingPostNotification").style.display = "";
	tradeAccepted = false;
	document.getElementById("tradingPost-otherPlayerAcceptedMsg").style.display = "none";
	document.getElementById("tradingPost-offerButton").style.borderColor = "grey";
	navigate("tradingPost");
}

function refreshTradables(data)
{
	tradablesArrayGlobal = data.split("~");
}
	
function refreshPlayerMarketTradables(data)
{
	if(tradablesPlayerMarketArrayGlobal.length > 0) return;
	
	tradablesPlayerMarketArrayGlobal = data.split("~");
	
	var searchDropdownArray = [];
	for(var i = 0; i < tradablesPlayerMarketArrayGlobal.length; i+=2)
		searchDropdownArray.push(tradablesPlayerMarketArrayGlobal[i]);
	
	document.getElementById("div-playerMarket-optionsArea").innerHTML = "<div style='text-align:center'>" +generateDropdownSearchHTML("Search","MARKET_FILTER_ITEM", searchDropdownArray, true, "marketSearch") +"</div>";
}

function setOtherPlayerHasAccepted()
{
	document.getElementById("tradingPost-offerButton").style.borderColor = "red";
	document.getElementById("tradingPost-otherPlayerAcceptedMsg").style.display = "";
	document.getElementById("tradingPost-otherPlayerAcceptedMsg").innerHTML = "OTHER PLAYER HAS ACCEPTED";
	tradeAccepted = true;
}

function localPlayerHasAccepted()
{
	document.getElementById("tradingPost-offerButton").style.borderColor = "red";
	document.getElementById("tradingPost-otherPlayerAcceptedMsg").innerHTML = "WAITING FOR PLAYER";
	document.getElementById("tradingPost-otherPlayerAcceptedMsg").style.display = "";
	document.getElementById("acceptTrade-button").style.display = "none";
}

function addTradingItemButton()
{
	if(tradeAccepted)
	{
		confirmDialogue("90%","You may not change your trade offers after the trade have been accepted.","Close","","")
		return;
	}
	
	if(hasTradingSlotsAvailable())
	{
		confirmDialogue("90%","Select an item you wish to trade","Close","","");
		addingItemToTradeBooleanGlobal = true;
		navigate("main");
	}
	else
		confirmDialogue("90%","You may only trade a maximum of 3 item types at a time.","Close","","");
}


function isTradable(itemName)
{
	return tradablesArrayGlobal.includes(itemName);
}

function isPlayerMarketTradable(itemName)
{
	return tradablesPlayerMarketArrayGlobal.includes(itemName);
}

function tryToAddItemToTradeScreen(itemName)
{
	if(isTradable(itemName))
	{
		navigate("tradingPost");
		lastItemSelectedTradingGlobal = itemName;
		initAmountWidget("amount-widget-tradingPost",itemName,1,[itemName],[1],"images/tradingPost.png","images/"+itemName+".png","","NO_CAP");
		openDialogue("dialogue-tradingPost-enterAmount","90%");
	}
	addingItemToTradeBooleanGlobal = false;
}

function submitNewTradingPostOffer()
{
	var itemChosen = document.getElementById("trading-list-offer-hidden").value;
	var amount = document.getElementById("trading-list-offer-amount").value;
	var message = document.getElementById("trading-list-offer-message").value;
	message = removeChars(message);
	sendBytes("POST_TRADING_OFFER="+ itemChosen + "~" + amount + "~" + message);
}

//lux
function removeChars(inputString) {
    return inputString.replace(/[^\x00-\x7F]/g, "");
}

function tryToAddItemToTradeList(itemName)
{
	if(isTradable(itemName))
	{
		document.getElementById("trading-list-offer-button").value = getItemName(itemName);
		document.getElementById("trading-list-offer-button").style.color = "green";
		document.getElementById("trading-list-offer-hidden").value = itemName;
		document.getElementById("trading-list-offer-inputs").style.display = "";
		document.getElementById("trading-list-offer-message").setAttribute("placeholder","Buying/Selling " + getItemName(itemName) + " for 3 diamonds.")
	}
	else
		confirmDialogue("90%","This item is not tradable.  If you think it should be, contact the developper Smitty.","Close","","");
	
	navigate("trading-list-post");
}

function hasTradingSlotsAvailable()
{
	for(var i = 0; i < TRADING_SLOTS; i++)
	{
		if(tradingItemNamesArray[i] == "none")
			return true;
	}
	
	return false;
}

function refreshLocalTradeScreen(itemArray, amountArray, slotId)
{
	var amountLoaded = 0;
	for(var i = 0; i < itemArray.length; i++)
	{
		var itemNameFound = itemArray[i];
		var itemAmountFound = amountArray[i];
		if(itemNameFound != "none")
		{
			if(slotId.startsWith("trader-trading"))
				document.getElementById(slotId + "-" +i).innerHTML = "<td style='width:75%'><img src='images/"+itemNameFound+".png' class='img-small' /> "+ getItemName(itemNameFound)+"</td><td style='text-align:right'>"+formatNumber(itemAmountFound)+"</td><td></td>";
			else
				document.getElementById(slotId + "-" +i).innerHTML = "<td style='width:75%'><img src='images/"+itemNameFound+".png' class='img-small' /> "+ getItemName(itemNameFound)+"</td><td style='text-align:right'>"+formatNumber(itemAmountFound)+"</td><td><img onclick='removeTradingItem("+i+")' src='images/x.png' class='img-tiny' /></td>";
			
			amountLoaded++;
		}
		else
		{
			document.getElementById(slotId + "-" +i).innerHTML  = "<td></td><td></td>";
		}
	}
	
}

function removeTradingItem(slot)
{
	if(tradeAccepted)
	{
		confirmDialogue("90%","You may not change your trade offers after the trade has been accepted.","Close","","")
		return;
	}
	
	tradingItemNamesArray[slot] = "none";
	traderTradingItemAmountArray[slot] = 0;
	refreshLocalTradeScreen(tradingItemNamesArray, tradingItemAmountArray, "trading-slot");
	refreshTradingItemsToOtherPlayer();
}
function refreshTradingItemsToOtherPlayer()
{
	var bytesToSend = "REFRESH_TRADE_SCREEN=";
	
	for(var i = 0; i < tradingItemNamesArray.length; i++)
	{
		var itemNameFound = tradingItemNamesArray[i];
		var itemAmountFound = tradingItemAmountArray[i];
		bytesToSend += itemNameFound + "~" + itemAmountFound + "~";
	}

	bytesToSend = bytesToSend.substr(0, bytesToSend.length - 1);
	sendBytes(bytesToSend);
}

function updateTraderGlobalVariables(data)
{
	var dataArray = data.split("~");
	var item1 = dataArray[0];
	var amount1 = dataArray[1];
	var item2 = dataArray[2];
	var amount2 = dataArray[3];
	var item3 = dataArray[4];
	var amount3 = dataArray[5];
	
	traderTradingItemNamesArray[0] = item1;
	traderTradingItemNamesArray[1] = item2;
	traderTradingItemNamesArray[2] = item3;
	
	traderTradingItemAmountArray[0] = amount1;
	traderTradingItemAmountArray[1] = amount2;
	traderTradingItemAmountArray[2] = amount3;
	
	refreshLocalTradeScreen(traderTradingItemNamesArray, traderTradingItemAmountArray, "trader-trading-slot")
}

function requestToRefreshTradables()
{
	sendBytes("REQUEST_REFRESH_TRADABLES");
}

function addTradeItem(itemName, amount)
{
	if(tradeAccepted)
	{
		confirmDialogue("90%","You may not change your trade offers after the trade has been accepted.","Close","","")
		return;
	}
	
	if(amount <= 0 || isNaN(parseInt(amount)) || amount.length == 0)
	{
		confirmDialogue("90%","Invalid Input","Close","","");
		return;
	}
	
	if(!tradablesArrayGlobal.includes(itemName))
	{
		confirmDialogue("90%","This item is not tradable.  If you think it should be, contact the developper Smitty.","Close","","");
		return;
	}
	
	if(itemName == "bloodCrystals" && bloodCrystalsTradable < amount)
	{
		confirmDialogue("90%","<center><img src='images/bloodCrystals.png' class='img-large' /><hr />You may only trade blood crystals that have been purchased.<br /><br /><b>Tradable Crystals: </b>"+formatNumber(bloodCrystalsTradable)+"</center>","Close","","")
		return;
	}
	
	if(window[itemName] < amount)
	{
		confirmDialogue("90%","You don't have enough.","Close","","");
		return;
	}
	
	var succesfullyAddedItem = false;
	//item already exists in slots, replace amount
	for(var i = 0; i < tradingItemNamesArray.length; i++)
	{
		if(itemName == tradingItemNamesArray[i])
		{
			tradingItemAmountArray[i] = amount;
			succesfullyAddedItem = true;
		}
	}
	if(!succesfullyAddedItem)
	for(var i = 0; i < tradingItemNamesArray.length; i++)
	{
		var itemNameFound = tradingItemNamesArray[i];
		var itemAmountFound = tradingItemAmountArray[i];
		
		
		if(itemNameFound == "none")
		{
			tradingItemNamesArray[i] = itemName;
			tradingItemAmountArray[i] = amount;
			succesfullyAddedItem = true;
			break;
		}
	}
	
	refreshLocalTradeScreen(tradingItemNamesArray, tradingItemAmountArray, "trading-slot");
	refreshTradingItemsToOtherPlayer();
}

function declineTrade()
{
	sendBytes("DECLINE_TRADE");
}

function refreshWellsTab()
{
	refreshChangedItemSwitch("wellTimeSharedVariable");
}
function resetTrade()
{
	addingItemToTradeBooleanGlobal = false;
	isInTradeScreenGlobal = false;
	document.getElementById("notification-tradingPostNotification").style.display = "none";
	lastItemSelectedTradingGlobal = "none";
	tradingItemNamesArray = [];
	tradingItemAmountArray = [];
	traderTradingItemNamesArray = [];
	traderTradingItemAmountArray = [];
	tradeAccepted = false;
	
	for(var i = 0; i < TRADING_SLOTS; i++)
	{
		document.getElementById("trading-slot" + "-" +i).innerHTML  = "<td></td><td></td><td></td>";
		document.getElementById("trader-trading-slot" + "-" +i).innerHTML  = "<td></td><td></td><td></td>";
	}
	
	document.getElementById("acceptTrade-button").style.display = "";
}
function acceptTrade()
{
	localPlayerHasAccepted();
	tradeAccepted = true;
	sendBytes("ACCEPT_TRADE");
}

function clicksWell(type)
{
	if(type == 'coins' && wonCoinsWell == 1)
	{	
		sendBytes("CLAIM_FROM_GOLD_WELL");
		return;
	}
	
	if(type == 'bloodCrystals' && wonBloodCrystalsWell == 1)
	{	
		sendBytes("CLAIM_FROM_BC_WELL");
		return;
	}
	
	var coinImagePath = "images/coins.png";
	var wellImagePath = "images/goldWell.png";
	if(type == 'bloodCrystals')
	{
		coinImagePath = "images/bloodCrystals.png";
		wellImagePath = "images/bloodCrystalWell.png";
	}
	initAmountWidget("amount-widget-wells",type,1,[type],[1],wellImagePath,coinImagePath,"ADD_TO_WELL","NO_CAP")
	amountWidgetAmountInputElementGlobal.value = 100;
	amountWidgetOnKeyUp();
	openDialogue("dialogue-input-wells","90%")
}

function clicksVotingCard()
{
	if(votingCardStatus == 0)
	{
		confirmDialogue('90%',"<center><img src='images/votingCard.png' class='img-large' /><br /><br />Would you like to start collecting votes?</center>","Collect Votes","Cancel","COLLECT_VOTES")
	}
	else if(votingCardStatus == 1)
	{
		openDialogue("dialogue-votes")
	}
	else if(votingCardStatus == 2)
	{
		sendBytes("COLLECT_VOTES");
	}
}

function showMayorMainButton()
{
	document.getElementById("mayor-main-button").style.display = "";
	document.getElementById("mayor-main-button-label").style.display = "";
}

function refreshMayorRecourceRatings()
{
	//electricty
	var currentResource = window["mayorResourceElectricity"];
	var neededResource = window["mayorResourceElectricityNeeded"]
	var perc = currentResource/neededResource; 
	var percForDisplay = perc * 100; if(percForDisplay > 100) percForDisplay = 100;
	
	var barColor = "red";
	if(perc >= 0.75) barColor = "yellow";
	if(perc >= 1) barColor = "#00cc00";
		
	perc *= 0.75;
	perc *= 100; //to %
	
	if(perc >= 100) perc = 100;
	if(perc <= 1) perc = 2;
	
	if(perc >= 100) barColor = "cyan";
	
	document.getElementById("progress-bar-mayor-electricty").style.background = "none";
	document.getElementById("progress-bar-mayor-electricty").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-electricty").style.minWidth = percForDisplay + "%";
	document.getElementById("progress-bar-mayor-electricty").style.maxWidth = percForDisplay + "%";
	
	//water
	var currentResource = window["mayorResourceWater"];
	var neededResource = window["mayorResourceWaterNeeded"]
	var perc = currentResource/neededResource; 
	var percForDisplay = perc * 100; if(percForDisplay > 100) percForDisplay = 100;
	
	var barColor = "red";
	if(perc >= 0.75) barColor = "yellow";
	if(perc >= 1) barColor = "#00cc00";
		
	perc *= 0.75;
	perc *= 100; //to %
	
	if(perc >= 100) perc = 100;
	if(perc <= 1) perc = 2;
	
	if(perc >= 100) barColor = "cyan";
	
	document.getElementById("progress-bar-mayor-water").style.background = "none";
	document.getElementById("progress-bar-mayor-water").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-water").style.minWidth = percForDisplay + "%";
	document.getElementById("progress-bar-mayor-water").style.maxWidth = percForDisplay + "%";
	
	//education
	var currentResource = window["mayorResourceEducation"];
	var neededResource = window["mayorResourceEducationNeeded"]
	var perc = currentResource/neededResource; 
	var percForDisplay = perc * 100; if(percForDisplay > 100) percForDisplay = 100;
	
	
	var barColor = "red";
	if(perc >= 0.75) barColor = "yellow";
	if(perc >= 1) barColor = "#00cc00";
		
	perc *= 0.75;
	perc *= 100; //to %
	
	if(perc >= 100) perc = 100;
	if(perc <= 1) perc = 2;
	
	if(perc >= 100) barColor = "cyan";

	
	document.getElementById("progress-bar-mayor-education").style.background = "none";
	document.getElementById("progress-bar-mayor-education").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-education").style.minWidth = percForDisplay + "%";
	document.getElementById("progress-bar-mayor-education").style.maxWidth = percForDisplay + "%";
	
	//security
	var currentResource = window["mayorResourceSecurity"];
	var neededResource = window["mayorResourceSecurityNeeded"]
	var perc = currentResource/neededResource; 
	var percForDisplay = perc * 100; if(percForDisplay > 100) percForDisplay = 100;
	
	var barColor = "red";
	if(perc >= 0.75) barColor = "yellow";
	if(perc >= 1) barColor = "#00cc00";
		
	perc *= 0.75;
	perc *= 100; //to %
	
	if(perc >= 100) perc = 100;
	if(perc <= 1) perc = 2;
	
	if(perc >= 100) barColor = "cyan";
	
	document.getElementById("progress-bar-mayor-security").style.background = "none";
	document.getElementById("progress-bar-mayor-security").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-security").style.minWidth = percForDisplay + "%";
	document.getElementById("progress-bar-mayor-security").style.maxWidth = percForDisplay + "%";
	
	//luxery
	var currentResource = window["mayorResourceLuxury"];
	var neededResource = window["mayorResourceLuxuryNeeded"]
	var perc = currentResource/neededResource; 
	var percForDisplay = perc * 100; if(percForDisplay > 100) percForDisplay = 100;
	
	var barColor = "red";
	if(perc >= 0.75) barColor = "yellow";
	if(perc >= 1) barColor = "#00cc00";
		
	perc *= 0.75;
	perc *= 100; //to %
	
	if(perc >= 100) perc = 100;
	if(perc <= 1) perc = 2;
	
	if(perc >= 100) barColor = "cyan";

		
	document.getElementById("progress-bar-mayor-luxury").style.background = "none";
	document.getElementById("progress-bar-mayor-luxury").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-luxury").style.minWidth = percForDisplay + "%";
	document.getElementById("progress-bar-mayor-luxury").style.maxWidth = percForDisplay + "%";
	
	//pollution
	var perc = window["mayorPollutionPercentage"] / 100;
	
	var barColor = "cyan";
	if(perc >= 0.01) barColor = "#00cc00";
	if(perc >= 0.4) barColor = "yellow";
	if(perc >= 0.7) barColor = "red";
	if(perc >= 1.01) barColor = "black";
	perc *= 100;
	if(perc == 0) perc = 1;
	if(perc > 100) perc = 100;
	
	document.getElementById("progress-bar-mayor-pollution").style.background = "none";
	document.getElementById("progress-bar-mayor-pollution").style.backgroundColor = barColor;
	document.getElementById("progress-bar-mayor-pollution").style.minWidth = perc + "%";
	document.getElementById("progress-bar-mayor-pollution").style.maxWidth = perc + "%";
	if(barColor == "black") document.getElementById("progress-bar-mayor-pollution-label-color").style.color = "red"; else document.getElementById("progress-bar-mayor-pollution-label-color").style.color = "black";
}

function managedLockedResources()
{
	if(mayorWaterUnlocked == 1) document.getElementById("mayor-water-resource-button").style.display = "";
	if(mayorEducationUnlocked == 1) document.getElementById("mayor-education-resource-button").style.display = "";
	if(mayorSecurityUnlocked == 1) document.getElementById("mayor-security-resource-button").style.display = "";
	if(mayorLuxuryUnlocked == 1) document.getElementById("mayor-luxury-resource-button").style.display = "";
	if(mayorPollutionUnlocked == 1) document.getElementById("mayor-pollution-resource-button").style.display = "";
	if(mayorServicesUnlocked == 1) document.getElementById("main-button-mayor-services-luxury").style.display = "";
	if(mayorLuxuryBuldingsUnlocked == 1) { document.getElementById("mayor-luxury-button").style.display = ""; document.getElementById("mayor-luxury-button-label").style.display = "";}
}


function getMayorRatingSmileIcon()
{
	if(isMayor == 0)
		return "none.png";
	
	if(mayorRating == "bad")
		return "sadIcon.png";
	else if(mayorRating == "medium")
		return "neutralIcon.png";
	else if(mayorRating == "good")
		return "happyIcon.png";
	else if(mayorRating == "great")
		return "veryHappyIcon.png";
	else
		return "none.png";
	
}
function refreshMayorRatingLabels()
{
	if(mayorRating == 0 || mayorRating == "bad")
	{
		document.getElementById("mayor-rating-smile-img").src = "images/"+getMayorRatingSmileIcon();
		document.getElementById("mayor-rating-label").innerHTML = "Bad";
		document.getElementById("mayor-luck-label").innerHTML = "Reduced rate";
		document.getElementById("mayor-luck-label").style.color = "red";
	}
	else if(mayorRating == "medium")
	{
		document.getElementById("mayor-rating-smile-img").src = "images/"+getMayorRatingSmileIcon();
		document.getElementById("mayor-rating-label").innerHTML = "Medium";
		document.getElementById("mayor-luck-label").innerHTML = "Default rate";
		document.getElementById("mayor-luck-label").style.color = "yellow";
	}
	else if(mayorRating == "good")
	{
		document.getElementById("mayor-rating-smile-img").src = "images/"+getMayorRatingSmileIcon();
		document.getElementById("mayor-rating-label").innerHTML = "Good";
		document.getElementById("mayor-luck-label").innerHTML = "Good rate";
		document.getElementById("mayor-luck-label").style.color = "lime";
	}
	else if(mayorRating == "great")
	{
		document.getElementById("mayor-rating-smile-img").src = "images/"+getMayorRatingSmileIcon();
		document.getElementById("mayor-rating-label").innerHTML = "Great";
		document.getElementById("mayor-luck-label").innerHTML = "Great rate";
		document.getElementById("mayor-luck-label").style.color = "lime";
	}
}
function refreshMayorTab()
{
	managedLockedResources();
	refreshMayorRatingLabels();
	if(cityWalls == 1)
	{
		if(cityWallsOff == 0)
		{
			document.getElementById('city-walls-on-img-icon').src = "images/mayorPopulation.png";
			document.getElementById('city-walls-on-label').innerHTML = "open";
			document.getElementById('city-walls-on-label').style.color = 'lime';
			document.getElementById('item-img-cityWalls').src = "images/cityWallsOpen.png"
			document.getElementById("closedWalls-label-2").style.display = "none";
		}
		else
		{
			document.getElementById('city-walls-on-img-icon').src = "images/mayorPopulation_grey.png";
			document.getElementById('city-walls-on-label').innerHTML = "closed";
			document.getElementById('city-walls-on-label').style.color = 'red';
			document.getElementById('item-img-cityWalls').src = "images/cityWallsClosed.png"
			document.getElementById("closedWalls-label-2").style.display = "";
		}
	}
	
	if(powerlines2 == 1)
	{
		document.getElementById("item-img-powerlines").src = "images/powerlines2.png";
		document.getElementById("powerlines-label").innerHTML = "Triples power output."
	}
}

function clicksMayorButton()
{
	confirmDialogue("90%","<center><img src='images/sadIcon.png' class='img-medium' /> <img src='images/neutralIcon.png' class='img-medium' /> <img src='images/happyIcon.png' class='img-medium' /></center><hr />Depending on your mayor rating, your luck in the game will change.  Having a better mayor rating increases your chances in many aspects of the game.<br /><br />Affected Luck: <ul><li>More gems and blood crystal from the gem finder.</li><li>Machinery will mine more ore and geodes.</li><li>Better chance at finding seeds with rake.</li><li>Better chance of producing star bonus (ex: cooking food, growing trees etc).</li><li>More crate drops from the mineral necklace.</li><li>Increased drop rates for every monster and loot bags.</li><li>Better chance at finding shiny loot bags and monsters.</li><li>Increased orbs from all chests.</li><li>Necklace/ring drop from daily chest.</li></ul>","Close","","")
}

function clicksCostHelp()
{
	confirmDialogue('90%','The cost indicates how much money is required <b>per person per second</b> to run this service.<br /><br /><u>For example: </u><br /><br />Given the following data:<br /><br /><img src="images/coins.png" class="img-tiny" /> <b>Cost:</b> 0.01<br /><img src="images/mayorPopulation.png" class="img-tiny" /> <b>Population: </b> 500<hr /><br /><br />Cost X Population = coins per second.<br /><br />0.01 X 500 = 5 coins per second to run this service','Close','','')
}

function toggleService(serviceName)
{
	if(window[serviceName + "On"] == 1)
	{
		confirmDialogue('90%','Turn off this service?','Turn Off','Nevermind','MAYOR_SERVICE=' + serviceName)
	}
	else
	{	
		var defaultText = "This will increase your mayor rating.";
		
		if(serviceName == "cleanEnergy")
			defaultText = "Reduces the pollution produced from powerplants by 50%"
		else if(serviceName == "efficientWaterPipes")
			defaultText = "Hire engineers to better design your water pipes, tripling the volume limit per pipe."
		else if(serviceName == "taxes")
			defaultText = "Lower tax rates increases the population's global happiness."
		else if(serviceName == "medicare")
			defaultText = "Free medicare increases the population's global happiness."
		else if(serviceName == "megaphone")
			defaultText = "Increase population gain by 300%."
		else if(serviceName == "promoteEducation")
			defaultText = "Increases the population's global happiness at the expense of requiring more educational faculties."
		else if(serviceName == "electricityBoost")
			defaultText = "Increases power output by 50%."
		else if(serviceName == "policeBoost")
			defaultText = "Doubles the staff for all police stations."
		
		confirmDialogue('90%','<center><img src="images/'+serviceName+'.png" class="img-medium" /> <br />Turn on this service?<hr /><br /><i>'+defaultText+'</i></center>','Turn On','Nevermind','MAYOR_SERVICE=' + serviceName)
	}
}

function refreshServicesTab()
{
	if(firstClickServices == 0) sendBytes("FIRST_CLICK_SERVICES");
	if(newServiceElectricityBoost == 1) document.getElementById("electricityBoost").style.display = "";
	if(newServicePoliceBoost == 1) document.getElementById("policeBoost").style.display = "";
}
function getVolumeFromWaterPipes()
{
	var volumePerPipe = 100;
	if(efficientWaterPipesOn == 1) volumePerPipe = 300;
	return waterPiping * volumePerPipe;
}

function clicksMuseum()
{
	sendBytes('MANAGE_MUSEUM');
}


function refreshPlayerMarket()
{
	sendBytes("REFRESH_PLAYER_MARKET");
	document.getElementById("tab-playerMarket-loadingArea").style.display = "";
	document.getElementById("tab-playerMarket-marketArea").style.display = "none";
}

function refreshMarketData(data)
{
	
	var dataArray = data.split("~");
	
	var playerMarketAreaDiv = document.getElementById("div-playerMarket-postArea");
	var htmloutput = "";
	
	htmloutput += "<center>";
	for(var i = 0; i < dataArray.length; i++)
	{
		if(data.length == 0) break; 
		var marketId = dataArray[i]; i++;
		var varPlayerId = dataArray[i]; i++;
		var marketItemToSell = dataArray[i]; i++;
		var marketItemToSellAmount = dataArray[i]; i++;
		var marketItemToBuy = dataArray[i]; i++;
		var marketItemToBuyAmount = dataArray[i]; i++;
		var marketItemCollect = dataArray[i]; i++;
		var marketItemTime = dataArray[i];
		
		if(marketItemToSellAmount == 0) continue;
		
		var styleAttribute = ""; if(varPlayerId == playerId) styleAttribute = "style='background-image:url(images/backgrounds/background4.jpg)'"

		htmloutput += "<table onclick='clicksMarketItem("+marketId+",\""+marketItemToSell+"\","+marketItemToSellAmount+",\""+marketItemToBuy+"\","+marketItemToBuyAmount+")' "+styleAttribute+"class='player-market-table' width='90%'>";
		htmloutput += "<tr>";
		htmloutput += "<td width='50%'>"+getItemName(marketItemToSell)+"</td>";
		htmloutput += "<td width='50%'>"+getItemName(marketItemToBuy)+"</td>";
		htmloutput += "</tr>";
		
		htmloutput += "<tr>";
		htmloutput += "<td>"+"<img class='img-small-medium' src='images/"+getPngOrGif(marketItemToSell,false)+"' />"+"</td>";
		htmloutput += "<td>"+"<img class='img-small-medium' src='images/"+getPngOrGif(marketItemToBuy,false)+"' />"+"</td>";
		htmloutput += "</tr>";
		
		
		//change color of text based on if the player has the right items to buy what's for sale.
		var colorOfBuyCostEach = lightRedColor;
		if(marketItemToBuy == "bloodCrystals")
		{
			if(bloodCrystals >= marketItemToBuyAmount && bloodCrystalsTradable >= marketItemToBuyAmount)
				colorOfBuyCostEach = lightGreenColor;
		}
		else
		{
			if(window[marketItemToBuy] >= marketItemToBuyAmount)
				colorOfBuyCostEach = lightGreenColor;
		}
		
		htmloutput += "<tr>";
		htmloutput += "<td><i style='color:silver'>("+formatNumber(marketItemToSellAmount)+" left)</td>";
		htmloutput += "<td style='color:"+colorOfBuyCostEach+"'>"+formatNumber(marketItemToBuyAmount)+" each</td>";
		htmloutput += "</tr>";
		
		htmloutput += "</table>"
	}
	
	htmloutput += "</center>";
	playerMarketAreaDiv.innerHTML = htmloutput;
}

function refreshMarketSlots(data)
{
	
	var playerMarketAreaDiv = document.getElementById("div-playerMarket-slotsArea");
	var htmloutput = "";
	
	htmloutput += "<center>";

	var dataArray = data.split("~");
	
	var slotsFilled = 0;
	for(var i = 0; i < dataArray.length; i++)
	{
		if(data.length == 0) break; 
		
		var marketId = dataArray[i]; i++;
		var varPlayerId = dataArray[i]; i++;
		var marketItemToSell = dataArray[i]; i++;
		var marketItemToSellAmount = dataArray[i]; i++;
		var marketItemToBuy = dataArray[i]; i++;
		var marketItemToBuyAmount = dataArray[i]; i++;
		var marketItemCollect = dataArray[i]; i++;
		var marketItemTime = dataArray[i];
		
		
		var soldLabel = "<i style='color:grey;font-size:10pt'><br />Click to cancel</i>"; if (marketItemCollect > 0) soldLabel = "<br /><b style='color:orange'>" + marketItemCollect + " has been sold!<br />Click to collect</b>";
		var eachLabel = ""; if(marketItemToBuyAmount > 1) eachLabel = " EACH";
		htmloutput += "<div style='background-color:#003300;font-size:14pt;pointer:cursor' class='main-button-lighter'>";
		htmloutput += "<table>";
		htmloutput += "<tr onclick='sendBytes(\"CLICKS_MARKET_SLOT="+marketId+"\")'>";
		htmloutput += "<td><img src='images/"+getPngOrGif(marketItemToSell,false)+"' class='img-small' /><br /><i style='font-size:10pt;color:silver'>("+marketItemToSellAmount+" left)</i></td>";
		htmloutput += "<td class='back-label'>FOR "+formatNumber(marketItemToBuyAmount)+" <img src='images/"+getPngOrGif(marketItemToBuy,false)+"' class='img-small' />"+eachLabel+soldLabel+"</td>";
		htmloutput += "</tr>";
		htmloutput += "</table>";
		htmloutput += "</div>";


		slotsFilled++;
	}
	htmloutput += "</center>";
	playerMarketAreaDiv.innerHTML = htmloutput;
	

	if(slotsFilled >= 3)
		document.getElementById("tab-playerMarket-marketArea-postItemButton").style.display = "none";
	else
		document.getElementById("tab-playerMarket-marketArea-postItemButton").style.display = "";

	
	document.getElementById("tab-playerMarket-loadingArea").style.display = "none";
	document.getElementById("tab-playerMarket-marketArea").style.display = "";
}

function clicksPostItem()
{
		confirmDialogue("90%","Select an item you wish to post on the market.<br /><br /><i style='color:red'>For the time being, only <u>weapons and armour</u> can be traded.</i>","Close","","");
		addingItemToPlayerMarketBooleanGlobal = true;
		navigateAndLoadImages('equipment','item-section-exploring-2');
}


function tryToAddItemToPlayerMarketSlot(itemName)
{
	if(isPlayerMarketTradable(itemName))
	{
		lastItemSelectedTradingGlobal = itemName;
		initAmountWidget("amount-widget-playerMarketSell",itemName,1,[itemName],[1],"images/guestIconMany.png","images/"+getPngOrGif(itemName,false),"","NO_CAP");
		amountWidgetAmountInputElementGlobal.value = 1;
		amountWidgetOnKeyUp();
		openDialogue("dialogue-playerMarket-enterSellAmount","90%");
	}
	else 
	{
		confirmDialogue("90%","Only weapons and armour are tradable for now.","Close","","");
		navigate('playerMarket')
	}
	
	addingItemToPlayerMarketBooleanGlobal = false;
}

function tryToSelectBuyItemToPlayerMarketSlotBC()
{
	openDialogue("dialogue-playerMarket-BC-only");
}

function tryToSelectBuyItemToPlayerMarketSlot(itemName)
{
	var minBcValue = getMinimumBCAllowedToSellFor(lastItemSelectedTradingGlobal);
	if(minBcValue > 0)
	{
		document.getElementById("min-bc-label-area").style.display = "";
		document.getElementById("min-bc-label-area-value").innerHTML = minBcValue;
	}
	else
		document.getElementById("min-bc-label-area").style.display = "none";
	
	lastItemSelectedTradingGlobal = itemName;
	document.getElementById("dialogue-playerMarket-enterBuyAmount-picture").src = "images/" + getPngOrGif(itemName, false);
	document.getElementById("dialogue-playerMarket-enterBuyAmount-input").value = minBcValue;
	openDialogue("dialogue-playerMarket-enterBuyAmount","90%");
}

function getMinimumBCAllowedToSellFor(itemName)
{
	for(var i = 0; i < tradablesPlayerMarketArrayGlobal.length; i++)
	{
		if(tradablesPlayerMarketArrayGlobal[i] == itemName)
			return tradablesPlayerMarketArrayGlobal[i + 1];
	}
	return 0;
}

function resetTradingSlotsImagesAndVars()
{
	playerMarketItemToSellNameGlobal = "";
	playerMarketItemToSellAmountGlobal = "";
	playerMarketItemToBuyNameGlobal = "";
	playerMarketItemToBuyAmountGlobal = "";
	document.getElementById("playerMarket-postItem-sellAmount").innerHTML = "";
	document.getElementById("playerMarket-postItem-buyAmount").innerHTML  = "";
	document.getElementById("playerMarket-postItem-buyImage").src = "images/postItemSelectBox.png";
}


function addPlayerMarketSellItem(itemChosen, amountChosen)
{
	document.getElementById("playerMarket-postItem-sellImage").src = "images/" + getPngOrGif(itemChosen, false);
	document.getElementById("playerMarket-postItem-sellAmount").innerHTML = "<span style='color:orange'>Selling:</span> " + getItemName(itemChosen) + " <span style='color:grey'>("+formatNumber(amountChosen)+")</span>";
	document.getElementById("playerMarket-postItem-buyAmount").innerHTML = "<span style='color:cyan'><u>Choose an item you desire.<br /></u></span>";
	document.getElementById("playerMarket-postItem-buyImage").src = "images/postItemSelectBox.png";
	navigate("playerMarket-postItem");
	playerMarketItemToSellNameGlobal = itemChosen;
	playerMarketItemToSellAmountGlobal = amountChosen;
}


function addPlayerMarketBuyItem(itemChosen, amountChosen)
{
	document.getElementById("playerMarket-postItem-buyImage").src = "images/" + getPngOrGif(itemChosen, false);
	var eachLabel = ""; if(amountChosen > 0) eachLabel = " each"
	document.getElementById("playerMarket-postItem-buyAmount").innerHTML = "<span style='color:orange'>For:</span> " + formatNumber(amountChosen) + " " +  getItemName(itemChosen) + eachLabel;
	document.getElementById("playerMarket-postItem-confirmButton").style.display = "";
	playerMarketItemToBuyNameGlobal = itemChosen;
	playerMarketItemToBuyAmountGlobal = amountChosen;
}

function confirmPostPlayerMarket()
{
	var sLabel = ""; if(playerMarketItemToSellAmountGlobal > 0) sLabel = "s"
	var outputDataToServer = "ADD_MARKET_POST=" + playerMarketItemToSellNameGlobal + "~" + playerMarketItemToSellAmountGlobal + "~" + playerMarketItemToBuyNameGlobal + "~" + playerMarketItemToBuyAmountGlobal;
	confirmDialogue("90%","<span style='font-size:14pt'>Are you sure you want to sell <img src='images/"+getPngOrGif(playerMarketItemToSellNameGlobal, false)+"' class='img-small' /> " + getItemName(playerMarketItemToSellNameGlobal) + sLabel + " for <img src='images/"+getPngOrGif(playerMarketItemToBuyNameGlobal, false)+"' class='img-small' /> " + formatNumber(playerMarketItemToBuyAmountGlobal) + " " + getItemName(playerMarketItemToBuyNameGlobal) + " each?<br /><br /><i style='color:grey;font-size:12pt;'>Succesfully selling all your "+getItemName(playerMarketItemToSellNameGlobal) + sLabel +" would give you a total of <b>"+formatNumber((playerMarketItemToBuyAmountGlobal * playerMarketItemToSellAmountGlobal))+" "+getItemName(playerMarketItemToBuyNameGlobal)+"</b>.</i></span>","Confirm Post", "Close",outputDataToServer)
}

function clicksMarketItem(marketId, itemToSell, itemToSellAmount, itemToBuy, itemToBuyEachAmount)
{
	buyingItemFromPlayerMarketClickedMarketId = marketId;
	buyingItemFromPlayerMarketClickedSellItemGlobal = itemToSell;
	buyingItemFromPlayerMarketClickedSellItemAmountGlobal = itemToSellAmount;
	buyingItemFromPlayerMarketClickedBuyItemGlobal = itemToBuy;
	buyingItemFromPlayerMarketClickedBuyItemEachAmountGlobal = itemToBuyEachAmount;
	document.getElementById("dialogue-playerMarket-buyFromMarket-htmlCheckmarkArea").innerHTML = "";
	document.getElementById("dialogue-playerMarket-buyFromMarket-picture").src = "images/" + getPngOrGif(buyingItemFromPlayerMarketClickedSellItemGlobal, false);
	document.getElementById("dialogue-playerMarket-buyFromMarket-input").value = 1;
	openDialogue("dialogue-playerMarket-buyFromMarket");
	updateBuyFromMarket(1);
	
}

function updateBuyFromMarket(valueFound)
{
	if(isNaN(valueFound)) return;
	var valueParsed = parseInt(valueFound);
	
	if(valueParsed > 0)
	{
		var itemAmountNeeded = buyingItemFromPlayerMarketClickedBuyItemEachAmountGlobal * valueParsed;
		document.getElementById("dialogue-playerMarket-buyFromMarket-htmlCheckmarkArea").innerHTML = createHTMLBoxWithChecks(buyingItemFromPlayerMarketClickedBuyItemGlobal, itemAmountNeeded, itemAmountNeeded);
	}
}

function purchaseFromPlayerMarket(amountToPurchase)
{
	var costNeeded = buyingItemFromPlayerMarketClickedBuyItemEachAmountGlobal * amountToPurchase;
	confirmDialogue('90%',"<span style='color:white;'><center><h2 style='color:black;'>Confirm Transaction:</h2><br /><br /><div style='padding:10px 0px;' class='basic-smallbox'><b style='color:orange;'>You are buying:</b><br /><br /> "+formatNumber(amountToPurchase)+" X <img src='images/"+getPngOrGif(buyingItemFromPlayerMarketClickedSellItemGlobal, false)+"' class='img-small-medium' /> "+getItemName(buyingItemFromPlayerMarketClickedSellItemGlobal)+"</div><br /><div style='padding:10px 0px;' class='basic-smallbox'><b style='color:orange;'>In exchange for your:</b><br /><br /> "+formatNumber(costNeeded)+" X <img src='images/"+getPngOrGif(buyingItemFromPlayerMarketClickedBuyItemGlobal, false)+"' class='img-small-medium' /> "+getItemName(buyingItemFromPlayerMarketClickedBuyItemGlobal)+"</div></center></span>","Confirm Transaction","Cancel","PURCHASE_PLAYER_MARKET=" + buyingItemFromPlayerMarketClickedMarketId + "~" + amountToPurchase);
}
