var enableLoginFunctionsGlobal = true;


function clicksConfirmLoginButtonToPlay()
{
	if(enableLoginFunctionsGlobal)
	{
		showLoginMessageAsConnecting()
		var rememberMe = 1;
		if(!loginRememberMeButtonGlobal) rememberMe = 0;
		var usernameEntered = document.getElementById("login-username-text-box").value;
		var passwordEntered = document.getElementById("login-password-text-box").value;
		sendBytes("LOGIN=" + usernameEntered + "~" + passwordEntered + "~" + rememberMe + "~" + localStorage.getItem("browser_token"));
	}
}

function clicksConfirmCreateAccountButton()
{
	if(enableLoginFunctionsGlobal)
	{
		showLoginMessageAsConnecting()
		var isHardcore = 0;
		if(hardcoreCheckboxGlobal) isHardcore = 1;
		
		var usernameEntered = document.getElementById("newaccount-username-text-box").value;
		var passwordEntered = document.getElementById("newaccount-password-text-box").value;
		var confirmPasswordEntered = document.getElementById("newaccount-confirm-password-text-box").value;
		sendBytes("CREATE_USER=" + usernameEntered + "~" + passwordEntered + "~" + confirmPasswordEntered + "~" + isHardcore + "~" + autologin);
	}
}

function showLoginMessageAsConnecting()
{
	enableLoginFunctionsGlobal = false;
	document.getElementById("login-message").style.display = "";
	document.getElementById("login-message").innerHTML = "Connecting..."
}

function showLoginMessageAsFailed()
{
	enableLoginFunctionsGlobal = true;
	document.getElementById("login-message").style.display = "";
	document.getElementById("login-message").innerHTML = "Server Offline.<br />Please try again.";
	document.getElementById("login-server-offline-panel").style.display = "";
	document.getElementById("main-login-panel-box-containing-all").style.display = "none";
}

function clicksLoginPreset(usernameFound, loginTokenFound)
{
	if(enableLoginFunctionsGlobal)
	{
		
		showLoginMessageAsConnecting();
		
		if(websocketReadyGlobal)
			sendBytes("PRESET_LOGIN=" + usernameFound + "~" + loginTokenFound + "~" + localStorage.getItem("browser_token"));
		else
		{
			 var waitForSocketToConnectInterval = window.setInterval(function()
			 {
				 if(websocketReadyGlobal != null)
				 {
					 if(websocketReadyGlobal)
					 {
						 sendBytes("PRESET_LOGIN=" + usernameFound + "~" + loginTokenFound + "~" + localStorage.getItem("browser_token"));
						 clearInterval(waitForSocketToConnectInterval);
					 }
				}
			 
			}, 1000);
		}
	
	}
}


function changePasswordButton()
{
	sendBytes('CHANGE_PASSWORD=' + document.getElementById('change-password-current').value +'~'+ document.getElementById('change-password-new').value +'~'+  document.getElementById('change-password-new2').value)
	document.getElementById('change-password-current').value  = "";
	document.getElementById('change-password-new').value  = "";
	document.getElementById('change-password-new2').value  = "";
}

function convertGuestButton()
{
	sendBytes('CONVERT_ACCOUNT=' + document.getElementById('convert-guest-username').value +'~'+ document.getElementById('convert-guest-password-new').value +'~'+  document.getElementById('convert-guest-password-new2').value)
}

function hideAllLoginScreens()
{
	document.getElementById('login-panel-2-buttons').style.display = 'none';
	document.getElementById('login-panel-login').style.display = 'none';
	document.getElementById('back-login-arrow').style.display = 'none';
	document.getElementById('newaccount-panel-login').style.display = 'none';
}

function clicksBackLoginArrow()
{
	hideAllLoginScreens();
	document.getElementById('login-panel-2-buttons').style.display = '';
}

function showNewAccountScreen(referalId)
{
	hideAllLoginScreens();
	document.getElementById('newaccount-panel-login').style.display = '';
	document.getElementById('back-login-arrow').style.display = '';
	if(referalId > 0)
	{
		document.getElementById("login-form-referal-area").style.display = "";
		document.getElementById("login-form-referal-area").innerHTML = "<b>Referral ID:</b> " + referalId;
	}
	else
	{
		document.getElementById("login-form-referal-area").style.display = "none";	
	}
}

function showLoginScreen()
{
	hideAllLoginScreens();
	document.getElementById('login-panel-login').style.display = '';
	document.getElementById('back-login-arrow').style.display = '';
}

function loadPresets()
{
	if(localStorage.getItem("browser_token") == undefined || localStorage.getItem("browser_token") == null)
		localStorage.setItem("browser_token",getRandomHash(12));
	
	if(localStorage.getItem("login_presets") != undefined || localStorage.getItem("login_presets") != null)
	{
		var presetAccounts = localStorage.getItem("login_presets");
		var presetAccountsArray = [];
		presetAccountsArray = presetAccounts.split("~");
		
		var loginPresetAreaDiv = document.getElementById("login-preset-area");
		var outputHTML = "";
		for(var i = 0 ; i < presetAccountsArray.length; i++)
		{
			var usernameFound = presetAccountsArray[i]; i++;
			var bloodCrystalsFound = presetAccountsArray[i]; i++;
			var totalLevelFound = presetAccountsArray[i];i++;
			var isHardcore = presetAccountsArray[i]; 
			if(localStorage.getItem(usernameFound + "_token") === undefined || localStorage.getItem(usernameFound + "_token") === null) 
				continue;
			
			var loginToken = localStorage.getItem(usernameFound + "_token");
			
			
			
			
			outputHTML += "<table id='login-preset-"+usernameFound+"' width='100%' style='color:white;margin:20px 0px;border:1px solid #2a8d8d; background-color:#1a1a1a;cursor:pointer;'><tr><td onclick='clicksLoginPreset(\""+usernameFound+"\",\""+loginToken+"\")' width='85%'></td><td style='text-align:right;'><img src='images/x.png' onclick='removeLoginPreset(\""+usernameFound+"\")' class='img-tiny' /><br /></td></tr><tr onclick='clicksLoginPreset(\""+usernameFound+"\",\""+loginToken+"\")'><td width='85%'>";
			outputHTML += "<div style='margin:5px';>";
			outputHTML += "<b style='font-size:20pt;color:gold' />" + usernameFound + "</b><br />";
			outputHTML += "<div style='text-align:left'>"
			outputHTML += "<img src='images/globalLevel.png' class='img-tiny'> " + formatNumber(totalLevelFound);
			outputHTML += "<br /><img src='images/bloodCrystals.png' class='img-tiny'> " + formatNumber(bloodCrystalsFound);
			if(isHardcore == "true") outputHTML += "<br /><img src='images/hardcoreIcon.png' class='img-tiny'> Hardcore";
			outputHTML += "</div>";
			outputHTML += "</div>";
			outputHTML += "</td><td><img src='images/foward_gold.png' class='img-medium' /></td></tr></table>";
		}
		loginPresetAreaDiv.innerHTML = outputHTML;
	}
	else
	document.getElementById("login-preset-area").innerHTML = "";
}

function removePlayerFromPresetList(usernameFoundToDelete)
{
	if(localStorage.getItem("login_presets") !== undefined || localStorage.getItem("login_presets") !== null)
	{
		var presetAccounts = localStorage.getItem("login_presets");
		var presetAccountsArray = [];
		presetAccountsArray = presetAccounts.split("~");
		
		var newPresetData = "";
	
		for(var i = 0 ; i < presetAccountsArray.length; i++)
		{
			var usernameFound = presetAccountsArray[i]; i++;
			var bloodCrystalsFound = presetAccountsArray[i]; i++;
			var totalLevelFound = presetAccountsArray[i];i++;
			var isHardcore = presetAccountsArray[i];
			
			if(usernameFoundToDelete != usernameFound) 
				newPresetData += usernameFound + "~" + bloodCrystalsFound + "~" + totalLevelFound + "~" + isHardcore + "~";
		}
		
		if(newPresetData == "")
			localStorage.removeItem("login_presets");
		else
		{
			newPresetData = newPresetData.substr(0, newPresetData.length - 1);
			localStorage.setItem("login_presets",newPresetData);
		}
	}
}

function removeLoginPreset(usernameFound)
{
	localStorage.removeItem(usernameFound + "_token");
	removePlayerFromPresetList(usernameFound)
	loadPresets();
}


function clicksGuestButtonForm()
{
	
	showLoginMessageAsConnecting();
	sendBytes("CREATE_GUEST_USER=" + localStorage.getItem("browser_token"));
}


var loginRememberMeButtonGlobal = true;
function clicksRememberMeButton()
{
	if(loginRememberMeButtonGlobal)
		loginRememberMeButtonGlobal = false;
	else
		loginRememberMeButtonGlobal = true;
	
	if(loginRememberMeButtonGlobal) document.getElementById("rememberMeIcon").src = "images/rememberMeIconOn.png";
	else document.getElementById("rememberMeIcon").src = "images/rememberMeIconOff.png";
}

var hardcoreCheckboxGlobal = false;
function clicksHardcoreCheckbox()
{
	if(hardcoreCheckboxGlobal)
		hardcoreCheckboxGlobal = false;
	else
		hardcoreCheckboxGlobal = true;
	
	if(hardcoreCheckboxGlobal) document.getElementById("hardcoreCheckboxIcon").src = "images/rememberMeIconOn.png";
	else document.getElementById("hardcoreCheckboxIcon").src = "images/rememberMeIconOff.png";
	
	if(hardcoreCheckboxGlobal)
		openDialogue('dialogue-hardcore-warning');
}

function showLoginMessage(message)
{
	document.getElementById("login-message").innerHTML = message;
	document.getElementById("login-message").style.display = "";
}

function hideLoginMessage()
{
	document.getElementById("login-message").style.display = "none";
}
