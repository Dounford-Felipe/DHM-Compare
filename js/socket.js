var webSocket;
var serverIp = getServerIp(1);
var websocketReadyGlobal = false;

function initWebsocket()
{
	webSocket = null;
	webSocket = new WebSocket(serverIp);
	initWebSocketFunctions();
}

function getServerIp(serverId)
{
	serverId = parseInt(serverId);

	switch(serverId)
	{
		default:


		//LOCAL DEV
		//return "ws://127.0.0.1:443";

		//PRODUCTION
		return "wss://dhm.idle-pixel.com:440";
	}
}

var clientTicking = false;
var reconnecting = false;
function clientTick()
{
	if(webSocket.readyState == 3 && !reconnecting)
	{
		reconnect();
	}
	
	showIdleNotifications();
	
}

function logout()
{
	openDialogue('dialogue-logout')
}

var autoreconnectGlobal = true;
function reconnect()
{
	if(lastDialogueOpenedIdGlobal == "")
	openDialogue('dialogue-reconnecting');
	/*if(autoreconnectGlobal)
	{
		alert("Press OK to reconnect...")
		webSocket.close();
		console.log("reconnect");
		
		initWebsocket();
	
		setTimeout( function(){ sendBytes("RECONNECT=" + username + "~" + localStorage.getItem("browser_token")); }, 2000);
	}*/
	
}


function command(data)
{
	
	if(data.startsWith("FORCE_LOGIN="))
	{
		var usernameFound = data.substr(12);
		document.getElementById("login-username-text-box").value = usernameFound;
		clicksBackLoginArrow();
		showLoginScreen();
		document.getElementById("login-password-text-box").style.border = "2px solid lime";
		
	}
	else if(data.startsWith("AUTO_RECONNECT="))
	{
		
		if(data.substr(15) == "false")
			disableReconnecting = true;
		else
			disableReconnecting = false;
	}
	else if(data == "DISPLAY_GAME")
	{
		$(document).keydown(function(e)
		{
			
			if((knightsQuest2 > 0 || knightsQuest2 == -1) && (lastTabId == "combat" || lastTabId == "equipment"))
			switch(e.keyCode)
			{
				case 49: 
				case 97: 
					sendBytes("LOAD_PRESETS=1");
				break;
				case 50: 
				case 98: 
					sendBytes("LOAD_PRESETS=2");
				break;
				case 51: 
				case 99: 
					sendBytes("LOAD_PRESETS=3");
				break;
				case 52: 
				case 100: 
					sendBytes("LOAD_PRESETS=4");
				break;
				case 53: 
				case 101: 
					sendBytes("LOAD_PRESETS=5");
				break;
				case 54: 
				case 102: 
					sendBytes("LOAD_PRESETS=6");
				break;
			}
		});

		if(!clientTicking)
		{
			clientTick();
			clientLoop = setInterval(clientTick, 1000);
			setInterval(fastTick, 25);
			clientTicking = true;
		}
		
		document.getElementById("login-screen").style.display = "none";
		document.getElementById("game-screen").style.display = "";

		if((username + "").startsWith("guest"))
		{
			localStorage.setItem("login-password-sticky", guestPassword);
			if(autologin > 0) sendBytes("SET_REFERRAL=" + autologin)
		}
		else
			localStorage.removeItem("login-password-sticky")
		
	}
	else if(data.startsWith("SET_LOGIN_MESSAGE="))
	{
		document.getElementById("login-message").style.display = "";
		document.getElementById("login-message").innerHTML = data.substr(18);
		if(!data.startsWith("SET_LOGIN_MESSAGE=Loading...")) enableLoginFunctionsGlobal = true;
	}
	else if(data.startsWith("SET_LOCAL_STORAGE="))
	{
		var dataArray = data.substr(18).split("~");
		localStorage.setItem(dataArray[0], dataArray[1])
	}
	else if(data.startsWith("ADD_TO_LOGIN_PRESETS="))
	{
		var presetData = data.substr(21);
		var usernameFound = presetData.split("~")[0];
		
		if(localStorage.getItem("login_presets") === undefined || localStorage.getItem("login_presets") === null)
		{
			localStorage.setItem("login_presets",presetData);
		}
		else
		{
			var currentLoginPresets = localStorage.getItem("login_presets");
			
			if(!currentLoginPresets.includes(usernameFound))
			
			currentLoginPresets += "~" + presetData;
			
			localStorage.setItem("login_presets",currentLoginPresets);
		}
	}
	else if(data.startsWith("REFRESH_ITEMS_FIRST_TIME="))
	{
		refreshItemsFromServer(data.substr(25), true);
	}
	else if(data.startsWith("REFRESH_ITEMS="))
	{
		refreshItemsFromServer(data.substr(14), false);
		lastRefreshItemsGlobal = new Date().getTime();
	}
	else if(data.startsWith("CLOSING_SERVER"))
	{
		closeServer();
		openDialogue('dialogue-server-restart');
	}
	else if(data.startsWith("PLAY_SOUND="))
	{
		playSound(data.substr(11));
	}
	else if(data.startsWith("MESSAGE="))
	{
		confirmDialogue("90%",data.substr(8),"Close","","")
	}
	else if(data.startsWith("CLEAR_PASSWORD_FIELD"))
	{
		document.getElementById("login-password").value = "";
		document.getElementById("login-password").style.border = "2px solid red";
	}
	else if(data.startsWith("LOOT_DIALOGUE_WITH_RESEND="))
	{
		lootDialogueWithResend(data.substr(26));
	}
	else if(data.startsWith("LOOT_DIALOGUE="))
	{
		lootDialogue(data.substr(14));
	}
	else if(data.startsWith("ENTER_ORBIT_NUMBER"))
	{
		openDialogue("dialogue-enterOrbitNumber1","90%");
	}
	else if(data.startsWith("CONFIRM_DIALOGUE="))
	{
		var dataArray = data.substr(17).split("~");
		confirmDialogue("90%",dataArray[0],dataArray[1],dataArray[2],dataArray[3].split(",").join("~"));
	}
	else if(data.startsWith("ST="))
	{
		var dataArray = data.substr(3).split("~");
		var timeInMs = parseInt(dataArray[3]);
		setTimeout( function(){ scrollText(dataArray[0], dataArray[1], dataArray[2]);}, timeInMs);
	}
	else if(data.startsWith("REFRESH_MAIL_TO_ANSWER="))
	{
		refreshMailToAnswer(data.substr(23));
	}
	else if(data == "GEM_FINDER_FOUND_SMTH")
	{
		var messagesPossible = ["I found something!","Something is shiny here!","Oh look at this beauty!","I think I found something!","Something for you!","I seem to see a gem!"]
		document.getElementById("gemFinderFoundMessage-label").innerHTML = '"' + messagesPossible[Math.floor(Math.random()*messagesPossible.length)] + '"';
		openDialogue("dialogue-gemFinderFound");
	}
	else if(data.startsWith("HIT_SPLAT="))
	{
		if(monsterName == "none" || monsterName == 0) return;
		var dataArray = data.substr(10).split("~");
		if(dataArray[5] == "img-tag-hero-hitplat")
			newScrollTextHitSplatHero(dataArray[0], dataArray[1], dataArray[2], dataArray[3], dataArray[4], dataArray[5]);
		else if(dataArray[5] == "witches-potion-2-caulrdon")
			scrollTextHitSplatOther(dataArray[0], dataArray[1], dataArray[2], dataArray[3], dataArray[4], dataArray[5]);
		else
			newScrollTextHitSplatNpc(dataArray[0], dataArray[1], dataArray[2], dataArray[3], dataArray[4], dataArray[5]);
	}
	else if(data.startsWith("ANIMATE_IMAGE="))
	{
		var dataS = data.substr(14).split("~");
		animateImage(dataS[0], dataS[1], parseInt(dataS[2]), parseInt(dataS[3]), parseInt(dataS[4]), dataS[5], parseInt(dataS[6]), dataS[7]);
	}
	else if(data.startsWith("ANIMATE="))
	{
		var dataArray = data.substr(8).split("~");

		if(dataArray[0] == "shake")
			shake(dataArray[1])
		if(dataArray[0] == "rocketLaunch")
			rocketLaunchAnimation(0)
	}
	else if(data.startsWith("SWITCH_SCREEN="))
	{
		navigate(data.substr(14));
	}
	else if(data.startsWith("UNSWITCH_COMBAT_TAB"))
	{
		if(lastTabId == "combat")
			navigate('exploring');
	}
	else if(data.startsWith("REFRESH_MISSIONS="))
	{
		refreshMissionsTable(data.substr(17));
	}
	else if(data.startsWith("REFRESH_DAILY_MISSIONS="))
	{
		refreshDailyMissionsTable(data.substr(23));
	}
	else if(data.startsWith("SELECT_EXPLORER"))
	{
		openDialogue("dialogue-select-explorer","90%");
	}
	else if(data.startsWith("OPEN_DIALOGUE="))
	{
		openDialogue(data.substr(14));
	}
	else if(data.startsWith("LEVEL_UP_MSG="))
	{
		var dataArray = data.substr(13).split("~");
		animateLevelup(dataArray[0], dataArray[1]);
	}
	else if(data.startsWith("SELECT_HOUSE"))
	{
		selectHouseDialogue();
	}
	else if(data.startsWith("DONT_AUTORECONNECT"))
	{
		autoreconnectGlobal = false;
	}
	else if(data.startsWith("REFRESH_CRAFTING_LIST"))
	{
		loadCraftablesList();
	}
	else if(data.startsWith("TIME_MACHINE_OVER"))
	{
		closeSmittysDialogue("dialogue-time-machine-running");
		confirmDialogue('90%','<center><img src="images/timeMachine.png" class="img-large" /><hr /><br />Time Machine succesfully operated.</center>','Close','','')
		playSound("mission1SoundGlobal");
	}
	else if(data == "RECONNECTED")
	{
		closeSmittysDialogue("dialogue-reconnecting");
	}
	else if(data.startsWith("REFRESH_COMBAT_INFORMATION="))
	{
		refreshCombatInformation(data.substr(27));
	}
	else if(data.startsWith("INIT_TRADE_SCREEN="))
	{
		initTrade(data.substr(18));
	}
	else if(data.startsWith("REFRESH_TRADER_SCREEN="))
	{
		updateTraderGlobalVariables(data.substr(22));
	}
	else if(data.startsWith("TRADE_ACCEPTED"))
	{
		setOtherPlayerHasAccepted();
	}
	else if(data.startsWith("RESET_TRADE"))
	{
		resetTrade();
	}
	else if(data.startsWith("REFRESH_TRADABLES="))
	{
		refreshTradables(data.substr(18));
	}
	else if(data.startsWith("REFRESH_PLAYERMARKET_TRADABLES="))
	{
		refreshPlayerMarketTradables(data.substr(31));
	}
	else if(data.startsWith("REFRESH_DESERT_PUZZLEBOX="))
	{
		refreshDesertPuzzleBoxTable(data.substr(25));
	}
	else if(data.startsWith("REFRESH_PUZZLE_CHEST_4="))
	{
		refreshPuzzle4(data.substr(23));
	}
	else if(data.startsWith("REFRESH_PUZZLEBOX_2="))
	{
		refreshPuzzleBox2(data.substr(20))
	}
	else if(data.startsWith("REFRESH_CLIENT_FORM"))
	{
		resetDonorForm();
	}
	else if(data.startsWith("REFRESH_MAYOR_TAB"))
	{
		refreshMayorTab();
	}
	else if(data.startsWith("REFRESH_PUZZLE_3="))
	{
		refreshPuzzle3(data.substr(17))
	}
	else if(data.startsWith("ANIMATION_DELAY="))
	{
		var msDelay = parseInt(data.substr(16));
		animationDelayMs = msDelay;
	}
	else if(data.startsWith("OPEN_WITCHES_POTION_BURN_DIALOGUE="))
	{
		openDialogueToCookBurntLeaves(data.substr(34))
	}
	else if(data.startsWith("REFRESH_MAIL="))
	{
		refreshMail(data.substr(13))
	}
	else if(data.startsWith("REFRESH_GOBLIN_SHOP="))
	{
		refreshGemGoblinShop(data.substr(20))
	}
	else if(data == "RESET_MAIL_FORM")
	{
		document.getElementById("mail-title-new").value = "";
		document.getElementById("mail-textarea").value = "";
	}
	else if(data.startsWith("TUTORIAL="))
	{
		loadTutorial(data.substr(9))
	}
	else if(data.startsWith("NPC_DEATH_ANIM"))
	{
		animateEnemyDeath();
	}
	else if(data.startsWith("ANIMATE_IN_COMBAT="))
	{
		var dataArray = data.substr(18).split("~")
		playOverlayImage(dataArray[0], dataArray[1], dataArray[2], dataArray[3])
	}
	else if(data.startsWith("STOP_ANIMATION_MONSTER"))
	{
		stopOverlayImage();
	}
	else if(data.startsWith("REFRESH_MARKET="))
	{
		refreshMarketData(data.substr(15));
	}
	else if(data.startsWith("REFRESH_MARKET_SLOTS="))
	{
		refreshMarketSlots(data.substr(21));
	}
	
	tick();
}

function closeServer()
{
	disableReconnecting = true;
	clearInterval(clientLoop);
}

var lastTabIdSentGlobal = "";
function tickLastTabIdSent()
{
	if(lastTabIdSentGlobal != lastTabId)
	{
		sendBytes("LAST_TAB_ID="+ lastTabId)
		lastTabIdSentGlobal = lastTabId;
	}
}
function tick()
{
	if(lastTabId == "craftingItems")
		loadCraftablesList();
	if(lastTabId == "wells")
		refreshWellsTab();
	if(lastTabId == "main" && exploringUnlocked == 0)
		document.getElementById("ulnock-label-exploring-global-level").innerHTML = getGlobalLevel();
	
	tickLastTabIdSent();
	
}

function fastTick()
{
	if(lastTabId == "combat")
	{
		if(window.scrollY > 0)
		{
			document.getElementById("table-combat-monster-hp-bar").style.opacity = "0.5";
			document.getElementById("table-combat-monster-hp-bar-stats").style.display = "none";
		}
		else
		{
			document.getElementById("table-combat-monster-hp-bar").style.opacity = "";
			document.getElementById("table-combat-monster-hp-bar-stats").style.display = "";
		}
		
		tickCombatHitSplats();
	}
	
	if(lastTabId == "combat" && shinyMonster >= 1)
		resizeShinyImage();
	
}

function sendBytes(data)
{
	if(webSocket.readyState == 3) webSocket = new WebSocket(serverIp);
	webSocket.send(data);
}

function initWebSocketFunctions()
{
	try
	{
	
	webSocket.onerror = function(event) {
		showLoginMessageAsFailed();
	};

	webSocket.onopen = function(event) {
	  onOpen(event);
	  
	};
	
	webSocket.onclose = function(event) {
	 onClose(event);
	};

	webSocket.onmessage = function(event) {
	  onMessage(event);
	};

	function onMessage(event) 
	{
		command(event.data);
	}

	function onOpen(event) 
	{
		websocketReadyGlobal = true;
		sendBytes("PADE_LOAD");
	}
	
	function onClose(event) 
	{
		
	}

	function onError(event) 
	{

	}
}
catch(err) 
{ 
	alert(err.message);
}
	
}
		