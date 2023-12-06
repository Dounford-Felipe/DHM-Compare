var lastDialogueOpenedIdGlobal = "";

function openDialogue(idChosen, widthChosen, positionChosen)
{
	if(!isMobileGlobal)
		document.getElementById(idChosen).style.width = "400px";
	
	
	var scrolledPixels = $(window).scrollTop();
	document.getElementById(idChosen).style.top = scrolledPixels + "px";
	
	
	document.getElementById(idChosen).style.display = "";
	
	if(username != 0)
	dimScreen(true);
	lastDialogueOpenedIdGlobal = idChosen;
		/*var scrolledPixels = $(window).scrollTop();
	
		if(!isMobileGlobal)
			$("#" + idChosen).dialog({modal:true, width:"500px"});
		else
			$("#" + idChosen).dialog({modal:true, width:"90%"});
		
		scrolledPixels += window.innerHeight * 0.15;
		$("#" + idChosen).parent().css({position:"absolute",top:scrolledPixels}).end().dialog('open');*/
}

function confirmDialogue(widthChosen, textChosen, btn1Text, btn2Text, cmd)
{
	if(!isMobileGlobal)
		document.getElementById("dialogue-confirm").style.width = "400px";
	
	document.getElementById("dialogue-confirm-text").innerHTML = textChosen;
	document.getElementById("dialogue-confirm-yes").value = btn1Text;
	
	if(btn1Text.length == 0)
		document.getElementById("dialogue-confirm-yes").style.display = "none";
	else
		document.getElementById("dialogue-confirm-yes").style.display = "";
	
	if(btn2Text.length == 0)
		document.getElementById("dialogue-confirm-no").style.display = "none";
	else
		document.getElementById("dialogue-confirm-no").style.display = "";
	
	document.getElementById("dialogue-confirm-no").value = btn2Text;
	document.getElementById("dialogue-confirm-cmd").value = cmd;
	
	var scrolledPixels = $(window).scrollTop();
	document.getElementById("dialogue-confirm").style.top = scrolledPixels + "px";
	
	//document.getElementById("dialogue-confirm").style.display = "";
	//$("#dialogue-confirm").dialog({width:widthChosen});
	/*scrolledPixels += window.innerHeight * 0.15;
	$('#dialogue-confirm').parent().css({position:"fixed",top:scrolledPixels}).end().dialog('open');*/
	
	document.getElementById("dialogue-confirm").style.display = "";
	dimScreen(true);
	lastDialogueOpenedIdGlobal = "dialogue-confirm";
	
}

function confirmDialogue2(widthChosen, textChosen, btn1Text, extraBtnText, btn2Text, cmd, cmdExtra)
{
	if(!isMobileGlobal)
		document.getElementById("dialogue-confirm2").style.width = "400px";
	
	document.getElementById("dialogue-confirm2-text").innerHTML = textChosen;
	document.getElementById("dialogue-confirm2-yes").value = btn1Text;
	
	if(btn1Text.length == 0)
		document.getElementById("dialogue-confirm2-yes").style.display = "none";
	else
		document.getElementById("dialogue-confirm2-yes").style.display = "";
	
	if(btn2Text.length == 0)
		document.getElementById("dialogue-confirm2-no").style.display = "none";
	else
		document.getElementById("dialogue-confirm2-no").style.display = "";
	
	if(extraBtnText.length == 0)
		document.getElementById("dialogue-confirm2-extra").style.display = "none";
	else
		document.getElementById("dialogue-confirm2-extra").style.display = "";
	
	document.getElementById("dialogue-confirm2-extra").value = extraBtnText;
	document.getElementById("dialogue-confirm2-no").value = btn2Text;
	document.getElementById("dialogue-confirm2-cmd").value = cmd;
	document.getElementById("dialogue-confirm2-cmd-extra").value = cmdExtra;
	
	var scrolledPixels = $(window).scrollTop();
	document.getElementById("dialogue-confirm2").style.top = scrolledPixels + "px";

	
	document.getElementById("dialogue-confirm2").style.display = "";
	dimScreen(true);
	lastDialogueOpenedIdGlobal = "dialogue-confirm2";
	
}


function openChestDialogue()
{
	if(goldKey == 0 && sapphireKey == 0 && emeraldKey == 0 && rubyKey == 0 && diamondKey == 0)
	{
		confirmDialogue("90%","You must craft a key to open a treasure chest.","Close","","");
		return;
	}
	
	if(goldKey > 0) document.getElementById("dialogue-chest-open-goldKey").style.display = ""; else document.getElementById("dialogue-chest-open-goldKey").style.display = "none";
	if(sapphireKey > 0) document.getElementById("dialogue-chest-open-sapphireKey").style.display = ""; else document.getElementById("dialogue-chest-open-sapphireKey").style.display = "none";
	if(emeraldKey > 0) document.getElementById("dialogue-chest-open-emeraldKey").style.display = ""; else document.getElementById("dialogue-chest-open-emeraldKey").style.display = "none";
	if(rubyKey > 0) document.getElementById("dialogue-chest-open-rubyKey").style.display = ""; else document.getElementById("dialogue-chest-open-rubyKey").style.display = "none";
	if(diamondKey > 0) document.getElementById("dialogue-chest-open-diamondKey").style.display = ""; else document.getElementById("dialogue-chest-open-diamondKey").style.display = "none";
	

	openDialogue("dialogue-chest-open");
}

function openGreenChestDialogue()
{
	if(promethiumKey == 0 && promethiumSapphireKey == 0 && promethiumEmeraldKey == 0 && promethiumRubyKey == 0 && promethiumDiamondKey == 0)
	{
		confirmDialogue("90%","You must craft a key to open a treasure chest.","Close","","");
		return;
	}
	
	if(promethiumKey > 0) document.getElementById("dialogue-chest-open-promethiumKey").style.display = ""; else document.getElementById("dialogue-chest-open-promethiumKey").style.display = "none";
	if(promethiumSapphireKey > 0) document.getElementById("dialogue-chest-open-promethiumSapphireKey").style.display = ""; else document.getElementById("dialogue-chest-open-promethiumSapphireKey").style.display = "none";
	if(promethiumEmeraldKey > 0) document.getElementById("dialogue-chest-open-promethiumEmeraldKey").style.display = ""; else document.getElementById("dialogue-chest-open-promethiumEmeraldKey").style.display = "none";
	if(promethiumRubyKey > 0) document.getElementById("dialogue-chest-open-promethiumRubyKey").style.display = ""; else document.getElementById("dialogue-chest-open-promethiumRubyKey").style.display = "none";
	if(promethiumDiamondKey > 0) document.getElementById("dialogue-chest-open-promethiumDiamondKey").style.display = ""; else document.getElementById("dialogue-chest-open-promethiumDiamondKey").style.display = "none";
	

	openDialogue("dialogue-green-chest-open");
}

function openDailyChestDialogue()
{
	if(bronzeKey == 0 && bronzeSapphireKey == 0 && bronzeEmeraldKey == 0 && bronzeRubyKey == 0 && bronzeDiamondKey == 0)
	{
		confirmDialogue("90%","You must craft a key to open a treasure chest.","Close","","");
		return;
	}
	
	if(bronzeKey > 0) document.getElementById("dialogue-chest-open-bronzeKey").style.display = ""; else document.getElementById("dialogue-chest-open-bronzeKey").style.display = "none";
	if(bronzeSapphireKey > 0) document.getElementById("dialogue-chest-open-bronzeSapphireKey").style.display = ""; else document.getElementById("dialogue-chest-open-bronzeSapphireKey").style.display = "none";
	if(bronzeEmeraldKey > 0) document.getElementById("dialogue-chest-open-bronzeEmeraldKey").style.display = ""; else document.getElementById("dialogue-chest-open-bronzeEmeraldKey").style.display = "none";
	if(bronzeRubyKey > 0) document.getElementById("dialogue-chest-open-bronzeRubyKey").style.display = ""; else document.getElementById("dialogue-chest-open-bronzeRubyKey").style.display = "none";
	if(bronzeDiamondKey > 0) document.getElementById("dialogue-chest-open-bronzeDiamondKey").style.display = ""; else document.getElementById("dialogue-chest-open-bronzeDiamondKey").style.display = "none";
	
	
	openDialogue("dialogue-daily-chest-open");
}

function chestConfirmUseKey(keyChosen)
{
	var chestTypeChosen = getChestTypeFromKey(keyChosen);
	if(window[chestTypeChosen] >= 2)
	{
		openDialogueChests(chestTypeChosen, keyChosen);
	}
	else
		confirmDialogue("90%","<center><img src='images/"+keyChosen+".png' class='img-medium' /><hr />Use "+getItemName(keyChosen)+" to open chest?</center>","Open","Cancel","OPEN_CHEST=" + keyChosen)
}

function openDialogueChests(chestChosen, keyChosen)
{
	initAmountWidget("amount-widget-multichests",keyChosen,1,[chestChosen, keyChosen],[1,1],"images/"+chestChosen+".png","images/"+keyChosen+".png","OPEN_CHEST_MULTI","NO_CAP")
	openDialogue("dialogue-multichests","90%")
}


function getChestTypeFromKey(keyChosen)
{
	if(keyChosen.startsWith("bronze"))
		return "dailyChest";
	else if(keyChosen.startsWith("promethium"))
		return "greenTreasureChest";
	else
		return "treasureChest";
}

function dimScreen(flag)
{
	if(flag)
	{
		document.getElementById("timeMachine-dimmer").style.display = "";
		document.getElementById("timeMachine-dimmer").style.backgroundColor = "black";
		document.getElementById("timeMachine-dimmer").style.opacity = "0.7";
	}
	else
	{
		document.getElementById("timeMachine-dimmer").style.display = "none";
		document.getElementById("timeMachine-dimmer").style.backgroundColor = "";
		document.getElementById("timeMachine-dimmer").style.opacity = "1";
	}
}

function openTestDialogue()
{
	if(!isMobileGlobal)
		document.getElementById("dialogue-test").style.width = "400px";
	
	document.getElementById("dialogue-test").style.display = "";
}

function closeSmittysDialogue(elementId)
{
	if(document.getElementById(elementId).style.display != "none")
	{
	document.getElementById(elementId).style.display = "none";
	dimScreen(false);
	lastDialogueOpenedIdGlobal = "";
	}
}

function closeSmittysDialogueGlobal()
{
	if(lastDialogueOpenedIdGlobal != "")
		closeSmittysDialogue(lastDialogueOpenedIdGlobal);
}

function openOptionsDialogue()
{
	
	//new
	if(isHardcore == 1)
		document.getElementById("misc-username").innerHTML = username.charAt(0).toUpperCase() + username.slice(1) + " <img src='images/hardcoreIcon.png' class='img-small' />";
	else
		document.getElementById("misc-username").innerHTML = username.charAt(0).toUpperCase() + username.slice(1);
	
	document.getElementById("iframe-profile").src = "https://dhm.idle-pixel.com/hiscores/search.php?user=" + username;
	document.getElementById("profile-seperate-window").href = "https://dhm.idle-pixel.com/hiscores/search.php?user=" + username;
	
	if((username + "").startsWith("guest"))
	{
		document.getElementById("dialogue-profile-guest-button").style.display = "";
		document.getElementById("dialogue-profile-guest-username").innerHTML = username;
		document.getElementById("dialogue-profile-guest-password").innerHTML = guestPassword;
	}
	
	if(referralTopBar > 0)
	{
		document.getElementById("refer-a-friend-link").value = "dhm.idle-pixel.com/play/?autologin=" + playerId;
		if(referralClaimed) document.getElementById('refer-a-friend-img').src = "images/check.png";
	}
	
	if(skeletonMageItem3 == 1)
	{
		document.getElementById("boss-skele-mage-btn").style.display = "";
	}
	else 
		document.getElementById("boss-skele-mage-btn").style.display = "none";
	
	//openDialogue('dialogue-profile','90%');
	navigate("misc");
}

function convertFromGuestAccount()
{
	openDialogue('dialogue-convert-guest','90%');
}

function refreshProfileDialogueData()
{
	var hardcoreHTML = "";
	if(isHardcore == 1)
	hardcoreHTML = "<img src='images/hardcoreIcon.png' class='img-small' style='margin-top:-7px;'  /> "

	
	if(profileSoundOff == 0)
	{
		
		document.getElementById("profile-profileSoundOff-text").innerHTML = "MEDIUM";
	}
	else if(profileSoundOff == 1)
	{
		
		document.getElementById("profile-profileSoundOff-text").innerHTML = "LOW";
	}
	else if(profileSoundOff == 3)
	{
		document.getElementById("profile-profileSoundOff-text").innerHTML = "HIGH";
		
	}
	else if(profileSoundOff == 2)
	{
		document.getElementById("profile-profileSoundOff-text").innerHTML = "OFF";
		
	}
	
	if(profileSoundOff != 2)
	{
		document.getElementById("profile-profileSoundOff-img").src = "images/soundOn.png";
		document.getElementById("profile-profileSoundOff-text").style.color = "green";
		document.getElementById("profile-profileSoundOff-checkmark").src = "images/check.png";
	}
	else
	{
		document.getElementById("profile-profileSoundOff-img").src = "images/soundOff.png";
		document.getElementById("profile-profileSoundOff-text").style.color = "red";
		document.getElementById("profile-profileSoundOff-checkmark").src = "images/x.png";
	}
	
	if(localStorage.getItem("login-autologin-off") == "1") document.getElementById("profile-autologin").src = "images/x.png";
}

function clicksBloodMoonNotification()
{
	if(theLootingRingQuest2 == -1)
	{
		if(bloodMoonRingOn == 0)
			confirmDialogue('90%','<center><img src="images/bloodMoonIcon.png" class="img-large" /><br /><br />The blood moon shines bright red.</center>','Stare again','Close','STARE_BLOOD_MOON');
		else
			confirmDialogue2('90%','<center><img src="images/bloodMoonIcon.png" class="img-large" /><br /><br />The blood moon shines bright red.</center>','Stare again','Cancel Blood Moon','Close','STARE_BLOOD_MOON','UNSTARE_BLOOD_MOON');
	}
	else
		confirmDialogue('90%','<center><img src="images/bloodMoonIcon.png" class="img-large" /><br /><br />The blood moon shines bright red.</center>','Close','','');
}
function lootDialogueWithResend(data)
{
	var dataArray = data.split("~");
	var resendCommand = dataArray.pop();
	var title = dataArray[0];
	var htmlOutput = "<h1 style='text-align:center;'>"+title+"</h1>";
	
	for(var i = 1; i < dataArray.length; i++)
	{
		var imageChosen = dataArray[i]; i++;
		var label = dataArray[i]; i++;
		var backgroundColor = dataArray[i]; i++;
		var borderColor = dataArray[i];
		htmlOutput += "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='images/"+getPngOrGif(imageChosen, false)+"' class='img-small-medium' /> "+label+"</span>";
	}
	
	htmlOutput+= "<hr />";

	var collectAndResendButtonValue = "Collect and resend"
	if(resendCommand.startsWith("REFINE_GOLD"))
		collectAndResendButtonValue = "Collect and refine again"
	confirmDialogue2("90%",htmlOutput,"Collect",collectAndResendButtonValue,"","",resendCommand);
}

function lootDialogue(data)
{
	var dataArray = data.split("~");
	var title = dataArray[0];
	var delayMs = dataArray[1];
	var htmlOutput = "<h1 style='text-align:center;'>"+title+"</h1>";
	
	for(var i = 2; i < dataArray.length; i++)
	{
		var imageChosen = dataArray[i]; i++;
		var label = dataArray[i]; i++;
		var backgroundColor = dataArray[i]; i++;
		var borderColor = dataArray[i];
		htmlOutput += "<span class='loot-span' style='background-color:"+backgroundColor+";border:1px solid "+borderColor+"'><img src='images/"+getPngOrGif(imageChosen, false)+"' class='img-small-medium' /> "+label+"</span>";
	}
	
	htmlOutput+= "<hr />";

	if(delayMs == 0) confirmDialogue("90%",htmlOutput,"Collect","","");
	else
	{
		setTimeout(function(){ confirmDialogue("90%",htmlOutput,"Collect","",""); }, delayMs);
	}
}


function refreshMissionCompleted(bitsFound)
{
	if(bitsFound.indexOf("N") !== -1)
	{
		document.getElementById("missions-completed-area").innerHTML = "<hr class='hr-thin' /> <b>Completed:</b> " + (missionId - 1);
	}
	else
		document.getElementById("missions-completed-area").innerHTML = "<hr class='hr-thin'  /> <span style='color:lime'>REWARD AVAILABLE";
}
function confirmRecipeDialogue(craftingRecipeChosen, backButtonTab)
{
	
	var itemName = craftingRecipeChosen.itemName;
	var skill = craftingRecipeChosen.skill; //array
	var skillLevel = craftingRecipeChosen.skillLevel; // array
	var recipe = craftingRecipeChosen.recipe; //array
	var recipeCost = craftingRecipeChosen.recipeCost; //array
	var multiCraftOn = craftingRecipeChosen.isMultiCraft; //false if n/a, number if more than 1
	var itemNameDisplay = craftingRecipeChosen.itemNameDisplay;
	var desc = craftingRecipeChosen.description;



	if(backButtonTab == "brew")
	{
		initAmountWidget("amount-widget-brew",itemName,craftingRecipeChosen.xp,recipe,recipeCost,"images/"+itemName+".png","images/brewingSkill.png","BREW","NO_CAP");
		amountWidgetAmountInputElementGlobal.value = 1;
		amountWidgetOnKeyUp();
		openDialogue("dialogue-brew","90%");
		return;
	}
	
	if(multiCraftOn > 0)
	{
		if(itemName == "ironBucket")
		{
			if(lavaTotal >= 100)
			{
				var checkboxImg = document.getElementById("multicraft-autocraftironbuckets");
				if(autocraftIronBuckets == 1)
					checkboxImg.src = "images/rememberMeIconOn_dark.png";
				
			}
		
			document.getElementById("dialogue-multi-craft-autoIronBuckets").style.display = "";
		}
		else
		{
			document.getElementById("dialogue-multi-craft-autoIronBuckets").style.display = "none";
		}
		initAmountWidget("amount-widget-multi-craft",itemName,0,recipe,recipeCost,"images/"+itemName+".png","images/empty100_100.png","CRAFTING_MULTI_ITEMS",multiCraftOn - window[itemName]);
		amountWidgetAmountInputElementGlobal.value = 1;
		amountWidgetOnKeyUp();
		openDialogue("dialogue-multi-craft","90%");
		return;
	}
	
	
	var htmlOutput = "";
	htmlOutput += "<center><div class='main-button-lighter' style='border-radius: 0;'><h3>"+itemNameDisplay+"</h3><img src='images/"+getPngOrGif(itemName, false)+"' class='img-large' /> <br /><br /><b>"+desc+"</b><br /><br /></div></center>";
	htmlOutput += "<div class='main-button' style='padding:10px; border-radius: 0px;'>";
	//level needed label
	var canCraft = true;
	for(var i = 0; i < skill.length; i++)
	{
		var color = "red";
		if(getLevel(window[skill[i] + "Xp"]) >= skillLevel[i])
			color = "lime";
		
		//used to hide craft button
		if(canCraft && color == "red") 
			canCraft = false;
		
		htmlOutput += "<span class='wrap-text' style='color:"+color+"'><img src='images/"+skill[i]+"Skill.png' class='img-small' />";
		htmlOutput += " Level " + skillLevel[i] + "</span>";
		htmlOutput += "<span style='color:white;margin:0px 20px;'></span>";
	}
	
	//level needed label
	
	for(var i = 0; i < recipe.length; i++)
	{
		htmlOutput += "<span style='display:inline-block;'><img src='images/"+recipe[i]+".png' class='img-small' />";
		
		var color = "red";
		if(window[recipe[i]] >= recipeCost[i])
			color = "lime";
		
		//used to hide craft button
		if(canCraft && color == "red") 
			canCraft = false;
		
		htmlOutput += "<span style='color:"+color+"'>" + formatNumber(recipeCost[i]) + " "+ getItemName(recipe[i]) +"&nbsp;&nbsp;&nbsp;&nbsp;</span></span>";
	}
	htmlOutput += "</div>";
	htmlOutput += "<hr />";
	htmlOutput += "<center><input type='button' style='background-color:rgb(42, 142, 142);width:70%' value='Make' onclick='sendBytes(\""+backButtonTab.toUpperCase()+"="+itemName+"\")' /></center>"
	
	document.getElementById("item-section-crafting-an-item").innerHTML = htmlOutput;
	navigate('craftingAnItem');
	document.getElementById("dynamicLoaderBackButton").setAttribute("onclick","navigate('"+backButtonTab+"')")
}

function researchDialogue(skill)
{
	var cost = window[skill + "ResearchLevelNextPrice"]
	var htmlOutput = "";
	var checkMark = "<img src='images/check.png' class='img-tiny' />";
	if(coins < cost)
		checkMark = "<img src='images/x.png' class='img-tiny' />";
	
	htmlOutput += "<center><div class='basic-smallbox-light'>";
	
	htmlOutput += "<img src='images/researcher.png' class='img-medium' /> "; 
	htmlOutput += "<img src='images/"+skill+"Skill.png' class='img-small' />";
	
	htmlOutput += "</div></center><br />"
	
	
	htmlOutput += "<center><div class='basic-smallbox-lighter'>";
	htmlOutput += "<b>For this type of research, I'm going to need a budget of:</b><br /> <img src='images/coins_dark.png' class='img-small' /> " + formatNumber(cost) + " " + checkMark;
	htmlOutput += "</div></center>"
	
	confirmDialogue("90%",htmlOutput,"Start Research","Cancel","RESEARCH="+skill);
}
function confirmedDialogue(dialogue, val)
{
	if(val.length > 0)
	sendBytes(val);
}

function openPlanterDialogue()
{
	if(farmerSeedSelected == 0 || farmerSeedSelected == "none")
	{
		confirmDialogue("90%","You need to set a seed in the previous interface before using the planter.","Close","","");
		return;
	}
	
	document.getElementById("planter-seedchosen").innerHTML = "<b>Set: </b>"  + getItemName(farmerSeedSelected);
	document.getElementById("planter-seedchosen-img").src = "images/"+farmerSeedSelected+".png";
	
	document.getElementById("planter-iterations").innerHTML = getMaxPlanterIterations() + " Harvests & Replants <span onclick='closeSmittysDialogue('dialogue-planter');tutorialPlanterDialogue()' style='color:blue;display:none;'> (?)</span><br /><span style='color:grey'>Scales with farming level.</span>";
	openDialogue("dialogue-planter");
}

function tutorialPlanterDialogue()
{
	confirmDialogue("90%","Based on your farming level, the planter can run continuously for <b>" + getMaxPlanterIterations() + " harvests.</b>  Once the planter reaches " + getMaxPlanterIterations() + ", it will have to be reconfigured.","Close","","")
}

function openFarmerDialogues()
{
	if(farmerSeedSelected == 0 || farmerSeedSelected == "none")
		document.getElementById("dialogue-bob-seed-img").src = "images/setSeed.png";
	else
		document.getElementById("dialogue-bob-seed-img").src = "images/"+farmerSeedSelected+".png";
	
	if(planter > 0)
		document.getElementById("planter-goto-button-area").style.display = "";
	
	if(planterOn > 0)
	{
		confirmDialogue2("90%","The planter is currently being used.  You may either stop the planter from running or reset it.<br /><br /><b>No seeds will be lost.</b>","Stop Planter","Reset Planter","Nevermind","RESET_PLANTER","REAPLY_PLANTER");
		return;
	}
	openDialogue("dialogue-bob");
}

function rerollRecipeDialogue()
{
	confirmDialogue('90%','Would you like to reroll the 3 recipes offers?','Reroll','Cancel','REROLL_CHEF_RECIPE')
}

function declineRecipeOffer()
{
	confirmDialogue('90%','<center><img src="images/chef.png" class="img-medium" /><br /><br />You do not like my recipes? Ok I can change them but you might have to wait longer than if you were just to make it.<br /><br /><span style="color:grey">The cooldown when declining a recipe for a reroll is twice as long.</span></center>','Decline Recipe','Cancel','DECLINE_CHEF_RECIPE')
}

function showMaxResearchLevels()
{
	document.getElementById("researcher-showmax-mining").style.display = "";
	document.getElementById("researcher-showmax-crafting").style.display = "";
	document.getElementById("researcher-showmax-woodcutting").style.display = "";
	document.getElementById("researcher-showmax-farming").style.display = "";
	document.getElementById("researcher-showmax-brewing").style.display = "";
	document.getElementById("researcher-showmax-exploring").style.display = "";
	document.getElementById("researcher-showmax-cooking").style.display = "";
}

function refreshResearcherMaxLevels()
{
	if(researchMaxLevelNotif == 0 && miningResearchLevel >= 5 && craftingResearchLevel >= 5 && woodcuttingResearchLevel >= 5 && farmingResearchLevel >= 5 && brewingResearchLevel >= 5 && exploringResearchLevel >= 5&& cookingResearchLevel >= 5)
	{
		sendBytes("TOGGLE_RESEARCH_MAX_NOTIF");
		showMaxResearchLevels();
		confirmDialogue('90%',"<center><img src='images/researcher.png' class='img-large' /></center><br /><br />\"Wow, you have researched a lot with me.<br /><br />I have identified how much I can research for each skill.  The labels have been updated for your information.\"<hr /><br /><i style='color:grey'>You may now see how many perks each skill has.</i>",'Close','')
	}
	
	if(researchMaxLevelNotif == 1)
		showMaxResearchLevels();
}
function showResearchPerksDialogue(skillChosen)
{
	var levelFound = window[skillChosen + "ResearchLevel"];
	
	var htmlOutput = "";
	

	if(skillChosen == "mining")
	{
		
		if(levelFound >= 8)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/mars.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to send your rocket to mars.</td></tr></table></div>";
		
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/doubleMinerals.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>25% chance to get two minerals instead of one when identifying unknown minerals.</td></tr></table></div>";
		
		if(levelFound >= 6)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/miningResearchLevel6.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to convert gems into their next tier.</td></tr></table></div>";
		
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/miningResearchLevel5.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Gem finder now immediately collects what he finds.</td></tr></table></div>";
		
		if(levelFound >= 4)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/miningResearchLevel4.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to mine geodes from mining machinery.</td></tr></table></div>";
		
		if(levelFound >= 3)
		{
			var htmlSpanOnOff = "<span style='color:red;'>OFF</span>";
			if(toggleBloodCrystalsOff == 0)
				htmlSpanOnOff = "<span style='color:lime;'>ON</span>";
			
			htmlOutput += "<div id='miningResearchLevel3-mainbutton' onclick='sendBytes(\"PROFILE=toggleBloodCrystalsOff\");toggleTextForBloodCrystalsOnOff()' style='cursor:pointer' class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/bloodCrystalsPending.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability for your gem finder to also find blood crystals.<hr /><b>Click to toggle on or off: </b> "+htmlSpanOnOff+"</td></tr></table></div>";
		}
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/capacityBag2.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to gain mining XP even if you are at full capacity.</td></tr></table></div>";
	}
	
	if(skillChosen == "crafting")
	{
		if(levelFound >= 11)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/robotMiner.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to craft a socketable mining robot.</td></tr></table></div>";
		
		if(levelFound >= 10)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/magnet.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to craft a magnet.</td></tr></table></div>";
		
		if(levelFound >= 9)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/mineralNecklace2.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to upgrade your mineral necklace.</td></tr></table></div>";
		
		if(levelFound >= 8)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/lavaPlantMoreLava.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Lava plant produces three times more lava.</td></tr></table></div>";
		
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/charcoalFoundry.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Adds 10% yield chance of successfully getting a charcoal.</td></tr></table></div>";
		
		if(levelFound >= 6)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/mineralNecklace.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to craft a necklace using minerals found in geodes.</td></tr></table></div>";
		
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/boatsIcon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to craft boats.</td></tr></table></div>";
		
		if(levelFound >= 4)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/craftingResearchLevel4Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Your furnace is much faster.</td></tr></table></div>";
		
		if(levelFound >= 3)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/researchCraftingLevel3.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>20% chance to produce two bars instead of one without using an extra ore.</td></tr></table></div>";
		
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/barsValueIncrease.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Smelted bars are now worth 4 times more coins.</td></tr></table></div>";
	}
	
	if(skillChosen == "woodcutting")
	{
		if(levelFound >= 9)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/woodcuttingResearchLevel9.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>When harvesting apple trees, there is a 25% chance that the seed becomes golden.<br /><span style='color:grey'>Requires Chef 2 Quest</span></td></tr></table></div>";
		
		if(levelFound >= 8)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/woodcuttingResearchLevel8.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% chance for any tree to instantly regrow when chopped.</td></tr></table></div>";
		
		if(levelFound >= 7)
		{
			var extraHTML = "";
			if(goldStarLampActive == 1)
				extraHTML = "<br /><img src='images/goldStarLamp.png' class='img-small' /> and 20 times the logs";
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/goldStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All trees have a 2% chance to give 20 times the XP"+extraHTML+".</td></tr></table></div>";
		}
			
		if(levelFound >= 6)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/woodcuttingResearchLevel6.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability for fruit trees to grow.</td></tr></table></div>";
		
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/shiny.gif' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>2% chance of trees growing into its shiny form.</td></tr></table></div>";
		
		if(levelFound >= 4)
		{
			var extraHTML = "";
			if(silverStarLampActive == 1)
				extraHTML = "<br /><img src='images/silverStarLamp.png' class='img-small' /> and 5 times the logs"
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/silverStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All trees have a 10% chance to give 5 times the XP"+extraHTML+".</td></tr></table></div>";
		}
			
		if(levelFound >= 3)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/woodcuttingResearchLevel3.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Tree roots are now worth 4 times more coins.</td></tr></table></div>";
		
		if(levelFound >= 2)
		{
			var extraHTML = "";
			if(bronzeStarLampActive == 1)
				extraHTML = "<br /><img src='images/bronzeStarLamp.png' class='img-small' /> and double logs";
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/bronzeStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All trees have a 20% chance to give double XP"+extraHTML+".</td></tr></table></div>";
		}
			
	}
	
	if(skillChosen == "farming")
	{
		if(levelFound >= 12)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/carnivorousSeeds.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Rare chance of finding carnivorous seeds when harvesting leaves.</td></tr></table></div>";
	
	
		if(levelFound >= 11)
		{
			var extraHTML = "";
			if(goldStarLampActive == 1)
				extraHTML = "<br /><img src='images/goldStarLamp.png' class='img-small' /> and 20 times the harvest of leaves/mushrooms";
			
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/goldStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All crops have a 2% chance to give 20 times the XP"+extraHTML+".</td></tr></table></div>";
		}
		
		if(levelFound >= 10)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/doubleSeeds.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Leaf and mushroom seeds found in exploring loot bags are doubled.</td></tr></table></div>";
	
		if(levelFound >= 9)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/stripedLeafSeeds.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Very rarely, your rake can find striped leaf seeds.</td></tr></table></div>";
	
		if(levelFound >= 8)
		{
			var extraHTML = "";
			if(silverStarLampActive == 1)
				extraHTML = "<br /><img src='images/silverStarLamp.png' class='img-small' /> and 5 times the harvest of leaves/mushrooms";
			
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/silverStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All crops have a 10% chance to give 5 times the XP"+extraHTML+".</td></tr></table></div>";
		}
			
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/farmingResearchLevel7.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% chance to get your seed back when harvesting crops or trees.</td></tr></table></div>";

		if(levelFound >= 6)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/farmingResearchLevel6.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Earn 4 times the bait.</td></tr></table></div>";

		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/farmingResearchLevel4Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Chopping down farmed trees will give 5 times the logs.</td></tr></table></div>";
	
		if(levelFound >= 4)
		{
			var extraHTML = "";
			if(bronzeStarLampActive == 1)
				extraHTML = "<br /><img src='images/bronzeStarLamp.png' class='img-small' /> and double the harvest of leaves/mushrooms";
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/bronzeStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All crops have a 20% chance to give double XP"+extraHTML+".</td></tr></table></div>";
		}
			
		if(levelFound >= 3)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/bait.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Harvesting crops will now give fishing bait giving more farming XP.</td></tr></table></div>";
	
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/tenPercInstaGrow.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% chance for a seed to instantly grow when planted, without dying.</td></tr></table></div>";
	
	}
	
	if(skillChosen == "brewing")
	{
		if(levelFound >= 8)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/potionStacker3.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to drink twenty of the same type of potion stacking the timer.</td></tr></table></div>";
	
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/brewingResearchLevel7Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% chance that making a potion refunds ingredients.</td></tr></table></div>";
	
		if(levelFound >= 6)
			htmlOutput += "<div onclick='clicksBrewingResearch6()' class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/brewingResearchLevel6Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>1% chance that drinking a potion in combat will make that potion free to use, forever.<hr />Click for more info</td></tr></table></div>";
	
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/potionStacker2.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to drink five of the same type of potion stacking the timer.</td></tr></table></div>";
	
		if(levelFound >= 4)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/brewingResearchLevel4Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Making a potion has a chance to yield another one without the use of more ingredients.</td></tr></table></div>";
	
		if(levelFound >= 3)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/brewingResearchLevel3Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Drinking potions now gives you brewing xp.</td></tr></table></div>";
	
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/potionStacker.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to drink two of the same type of potion stacking the timer.</td></tr></table></div>";
	}
	
	if(skillChosen == "exploring")
	{
		if(levelFound >= 12)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/superShiny.gif' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% chance that a shiny monster becomes super shiny.</td></tr></table></div>";
		
		if(levelFound >= 11)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/gemGoblins.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>10% extra chance of finding gem goblins.</td></tr></table></div>";
		
		if(levelFound >= 10)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/energy.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>20% chance of getting a refunded the energy when exploring an area.</td></tr></table></div>";
		
		if(levelFound >= 9)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/shiny.gif' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>2% chance of a monster being shiny.</td></tr></table></div>";
		
		if(levelFound >= 8)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/poisonIcon5.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Poison now has a base damage of 5 instead of 1.</td></tr></table></div>";
		
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/amuletToRings.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to convert three amulets into one ring.</td></tr></table></div>";
		
		if(levelFound >= 6)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/moreLava.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to bring multiple lava buckets to the volcano for faster filling.</td></tr></table></div>";
		
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/shiny.gif' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>2% chance of finding shiny loot bags.</td></tr></table></div>";
		
		if(levelFound >= 4)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/exploringResearchLevel4Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability to convert artifacts into more exploring xp.</td></tr></table></div>";
		
		if(levelFound >= 3)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/exploringResearchLevel3Icon.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Ability find two of the same artifact in one loot bag.</td></tr></table></div>";
		
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/fieldsMap.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>5% chance to find area maps from loot bags, unlocking the next exploring location.</td></tr></table></div>";
	}
	
	if(skillChosen == "cooking")
	{
		if(levelFound >= 9)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/fasterBoats.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Boats travel twice as fast.</td></tr></table></div>";
		
		if(levelFound >= 8)
		{
			var extraHTML = "2%";
			if(goldStarLampActive == 1)
				extraHTML = "<strike>"+extraHTML+"</strike> <br /><img src='images/bronzeStarLamp.png' class='img-small' /> 4%";
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/goldStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Cooking food has a "+extraHTML+" chance to give 20 times the XP and energy.</td></tr></table></div>";
		}
			
		if(levelFound >= 7)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/boatsMoreFish.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Row boat and canoe bring four times the fish.</td></tr></table></div>";
		
		if(levelFound >= 6)
		{
			var extraHTML = "10%";
			if(silverStarLampActive == 1)
				extraHTML = "<strike>"+extraHTML+"</strike> <br /><img src='images/silverStarLamp.png' class='img-small' /> 20%";
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/silverStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Cooking food has a "+extraHTML+" chance to give 5 times the XP and energy.</td></tr></table></div>";
		}
		
		if(levelFound >= 5)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/researchCookingLevel4.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>All types of wood now generate twice the heat.</td></tr></table></div>";
		
		if(levelFound >= 4)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/fishBones.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Exluding shrimp, consuming fish will now yield fish bones.</td></tr></table></div>";
		
		if(levelFound >= 3)
		{
			var extraHTML = "20%";
			if(bronzeStarLampActive == 1)
				extraHTML = "<strike>"+extraHTML+"</strike> <br /><img src='images/bronzeStarLamp.png' class='img-small' /> 40%";
			
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/bronzeStar.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Cooking food has a "+extraHTML+" chance to give double XP and energy.</td></tr></table></div>";
		}
			
		
		if(levelFound >= 2)
			htmlOutput += "<div class='main-button' style='padding:5px;'><table><tr><td width='30%'><img src='images/burningFoodXp.png' class='img-medium' /></td><td style='font-size:13pt;text-align:right;padding-right:20px;'>Burning food will grant 10% of the orignal cook XP.</td></tr></table></div>";
	}
	
	confirmDialogue("90%",htmlOutput,"Close","","")
}

function clicksRobotMiner()
{
	if(robotMinerTimer == 0)
	{
		if(sapphireRobotMiner == 1)
		{
			document.getElementById("dialogue-robotMiner-gemType").src = "images/emerald.png";
			document.getElementById("dialogue-robotMiner-gemType-label").innerHTML = "10 Emeralds"
		}
		else if(emeraldRobotMiner == 1)
		{
			document.getElementById("dialogue-robotMiner-gemType").src = "images/ruby.png";
			document.getElementById("dialogue-robotMiner-gemType-label").innerHTML = "10 Rubies"
		}
		else if(rubyRobotMiner == 1)
		{
			document.getElementById("dialogue-robotMiner-gemType").src = "images/diamond.png";
			document.getElementById("dialogue-robotMiner-gemType-label").innerHTML = "10 Diamonds"
		}
		else if(diamondRobotMiner == 1)
		{
			document.getElementById("dialogue-robotMiner-gemType").src = "images/bloodDiamond.gif";
			document.getElementById("dialogue-robotMiner-gemType-label").innerHTML = "10 Blood Diamonds"
		}
		else if(bloodDiamondRobotMiner == 1)
		{
			robotMinerEnterDepth();
			return;
		}
			
		openDialogue("dialogue-robotMiner");
	}
	else if(robotMinerTimer == 1)
	{
		sendBytes("COLLECT_ROBOT_MINER")
	}
	else if(robotMinerTimer > 1)
	{
		confirmDialogue("90%","<center><img src='images/"+getRobotMinerType()+".png' class='img-large' /><br /><br />Your robot is currently hard at work digging and collecting ore!","Close","","");
	}
}

function robotMinerEnterDepth()
{
	initAmountWidget("amount-widget-robotMinerSend",getRobotMinerType(),1,["plasma"],[0.1],"images/"+getRobotMinerType()+".png","images/updown_icon.png","SEND_ROBOT_MINER",robotMinerDepth)
	openDialogue("dialogue-robotMinerSend","90%")
}

function getRobotMinerType()
{
	if(sapphireRobotMiner == 1)
		return "sapphireRobotMiner";
	else if(emeraldRobotMiner == 1)
		return "emeraldRobotMiner";
	else if(rubyRobotMiner == 1)
		return "rubyRobotMiner";
	else if(diamondRobotMiner == 1)
		return "diamondRobotMiner";
	else if(bloodDiamondRobotMiner == 1)
		return "bloodDiamondRobotMiner";
	else
		return "robotMiner";
}

function clicksBrewingResearch6()
{
	confirmDialogue("90%","For every potion in combat, drinking it has a 1% chance that this perk triggers.  The icon of the potion in question will change as shown below:<br /><br /><img src='images/brewingResearchLevel6Icon_tut.png' /><br /><br />In this example, the hp potion was triggered by the perk.  This allows the player to heal 5 hp for every fight, without ever consuming an HP potion again.","Close","","");
}


function clicksMineralNecklace()
{
	if(chefQuest2 == -1) document.getElementById("chef-mineralNecklace").style.display = "";
	openDialogue("dialogue-mineralNecklace");
}

var geodesNecklaceCurrentPersonSelectedGlobal = 0;
function clicksPersonChosenButton()
{
	geodesNecklacePersons = ["miners","gemFinder","farmer","lumberjack", heroGender + "Explorer"];
	geodesNecklaceCurrentPersonSelectedGlobal++;
	if(geodesNecklacePersons.length == geodesNecklaceCurrentPersonSelectedGlobal) geodesNecklaceCurrentPersonSelectedGlobal = 0;
	
	var personChosen = geodesNecklacePersons[geodesNecklaceCurrentPersonSelectedGlobal];
	//change image
	document.getElementById("mineralNecklace-personChosenButton-img").src = "images/" + personChosen + ".png";
	
	if(personChosen == "miners")
	{
		document.getElementById("mineralNecklace-personChosenButton-length").innerHTML = "0 hours";
		var buff1 = "0% chance that ores will be doubled when mined from miners and machinery.";
		var buff2 = "0% chance that ores will be doubled when mined from miners and machinery.";
		document.getElementById("mineralNecklace-personChosenButton-desc").innerHTML = buff1 +"<br />"+buff2;
	}
	else if(personChosen == "gemFinder")
	{
		document.getElementById("mineralNecklace-personChosenButton-length").innerHTML = "0 hours";
		document.getElementById("mineralNecklace-personChosenButton-desc").innerHTML = "Finding a gem will give you two instead of one.";
	}
	else if(personChosen == "farmer")
	{
		document.getElementById("mineralNecklace-personChosenButton-length").innerHTML = "0 hours";
		document.getElementById("mineralNecklace-personChosenButton-desc").innerHTML = "Find 300% more seeds.";
	}
	else if(personChosen == "lumberjack")
	{
		document.getElementById("mineralNecklace-personChosenButton-length").innerHTML = "0 hours";
		document.getElementById("mineralNecklace-personChosenButton-desc").innerHTML = "Guarantees that a new tree will grow given a patch is empty.";
	}
	else if(personChosen == heroGender + "Explorer")
	{
		document.getElementById("mineralNecklace-personChosenButton-length").innerHTML = "<span style='font-size:20pt;display:inline-block;vertical-align: middle;'>&infin;</span>"
		document.getElementById("mineralNecklace-personChosenButton-desc").innerHTML = "Gain combat bonuses.";
	}
}

function getAllStatuesPrice()
{
	var price = 0;
	
	for(var i = 0; i < exploringMetalDetectorStatuesGlobal.length; i++)
	{
		var statueFound = exploringMetalDetectorStatuesGlobal[i];
		if(window[statueFound] > 0) price += (getItemPrice(statueFound) * window[statueFound]);
	}

	return price;
}

function openSellDialogue(itemChosen)
{
	if(bronzeStatueMetalDetectorTotal >= 10 && itemChosen.endsWith("StatueMetalDetector") || itemChosen.endsWith("StatueMetalDetector2") || itemChosen.endsWith("StatueMetalDetector3") || itemChosen.endsWith("StatueMetalDetector4"))
	{
		var btnName = "Sell all statues owned";
		
		document.getElementById("dialogue-sell-extra-btn").style.display = "";
		document.getElementById("dialogue-sell-extra-btn-element").value = btnName;
		
		document.getElementById("dialogue-sell-extra-btn-element").onclick = 
		function()
		{ 
			confirmDialogue("90%","<center><img src='images/statueCollection.png' class='img-large' /><br /><br />Sell every type of statue you own?<br /><br /><div class='basic-smallbox-green' style='display:inline-block;'><img src='images/coins.png' class='img-small' /> + "+formatNumber(getAllStatuesPrice())+"</div></center>","Sell all","Cancel","SELL_ALL_STATUES");
			closeSmittysDialogue('dialogue-sellItem')
		};
	}
	else
		document.getElementById("dialogue-sell-extra-btn").style.display = "none";
	
	var price = getItemPrice(itemChosen);
	document.getElementById("dialogue-sellItemChosen").value = itemChosen;
	document.getElementById("dialogue-sellItemImage").src = "images/" + itemChosen + ".png";
	document.getElementById("dialogue-itemCost").innerHTML = formatNumber(price);
	document.getElementById("dialogue-sellItemCost").value = price;

	var defaultValueInput = window[itemChosen];
	if(price >= 100000 || itemChosen.endsWith("Leaf") || itemChosen.endsWith("Mushroom")) defaultValueInput = 1;
	
	setCoinAndOilAmountWidget(price, defaultValueInput);
	setSellWidgetValues("SELL=" + itemChosen,defaultValueInput, window[itemChosen])
	
	openDialogue("dialogue-sellItem","90%")
	
}

function openTreePatchUnlockDialogue()
{
	if(unlockWoodcuttingPatchPrice > 0)
	buyFromShop('unlockWoodcuttingPatch',['images/bloodCrystals.png'],[unlockWoodcuttingPatchPrice],[bloodCrystals >= unlockWoodcuttingPatchPrice], 'BUY_FROM_SHOP','Purchase');
}

function openFarmPatchUnlockDialogue()
{
	if(unlockFarmingPatchPrice > 0)
	buyFromShop('unlockFarmingPatch',['images/bloodCrystals.png'],[unlockFarmingPatchPrice],[bloodCrystals >= unlockFarmingPatchPrice], 'BUY_FROM_SHOP','Purchase');
}

function openCapacityBagDialogue()
{

	if(capacityLevel == 8)
		return;
	
	var newOilCapacity = -1;
	var newStoneCapacity = -1;
	var newCopperCapacity = -1;
	var newIronCapacity = -1;
	var newSilverCapacity = -1;
	var newGoldCapacity = -1;
	var newPromethiumCapacity = -1;
	var newTitaniumCapacity = -1;

	var currentOilCapacity = oilCapacity;
	var currentStoneCapacity = stoneCapacity
	var currentCopperCapacity = copperCapacity
	var currentIronCapacity = ironCapacity
	var currentSilverCapacity = silverCapacity
	var currentGoldCapacity = goldCapacity
	var currentPromethiumCapacity = promethiumCapacity
	var currentTitaniumCapacity = titaniumCapacity;
	

	if(capacityLevel == 1)
	{
		newStoneCapacity = 1000;
		newOilCapacity = 500;
		newCopperCapacity = 200;
		newIronCapacity = 50;
	}
	else if(capacityLevel == 2)
	{
		newStoneCapacity = 10000;
		newOilCapacity = 1000;
		newCopperCapacity = 500;
		newIronCapacity = 250;
		newSilverCapacity = -1;
		newGoldCapacity = -1;
	}
	else if(capacityLevel == 3)
	{
		newStoneCapacity = 50000;
		newOilCapacity = 10000;
		newCopperCapacity =  5000;
		newIronCapacity = 2500;
		newSilverCapacity = 200;
		newGoldCapacity = 50;
	}
	else if(capacityLevel == 4)
	{
		newStoneCapacity = 1000000;
		newOilCapacity = 100000;
		newCopperCapacity = 50000;
		newIronCapacity = 10000;
		newSilverCapacity = 1000;
		newGoldCapacity = 500;
		newPromethiumCapacity = 10;
	}
	else if(capacityLevel == 5)
	{
		newStoneCapacity = 5000000;
		newOilCapacity = 1000000;
		newCopperCapacity = 500000;
		newIronCapacity = 100000;
		newSilverCapacity = 10000;
		newGoldCapacity = 5000;
		newPromethiumCapacity = 15;
	}
	else if(capacityLevel == 6)
	{
		newStoneCapacity = 10000000;
		newOilCapacity = 10000000;
		newCopperCapacity = 1000000;
		newIronCapacity = 500000;
		newSilverCapacity = 50000;
		newGoldCapacity = 10000;
		newPromethiumCapacity = 50;
		newTitaniumCapacity = 20;
	}
	else if(capacityLevel == 7)
	{
		newStoneCapacity = "&infin;";
		newOilCapacity = "&infin;";
		newCopperCapacity = "&infin;";
		newIronCapacity = "&infin;";
		newSilverCapacity = "&infin;";
		newGoldCapacity = "&infin;";
		newPromethiumCapacity = "&infin;";
		newTitaniumCapacity = "&infin;";
	}

	var htmlOutput = "<center><h2 style='color:orange;'>CAPACITY INCREASE</h2></center><div class='basic-smallbox-light'><center>";
	htmlOutput += "<table width='100%'>";
	htmlOutput += "<tr style='border-bottom:2px solid black;'><th>ITEM</th><th style='text-align:center'>Current</th><th style='text-align:right'></th><th style='text-align:right'>New</th></tr>"
	htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/oil.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentOilCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newOilCapacity)+"</td></tr>";
	htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/stone.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentStoneCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newStoneCapacity)+"</td></tr>";
	htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/copper.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentCopperCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newCopperCapacity)+"</td></tr>";
	htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/iron.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentIronCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newIronCapacity)+"</td></tr>";
	if(newSilverCapacity != -1) htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/silver.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentSilverCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newSilverCapacity)+"</td></tr>";
	if(newGoldCapacity != -1) htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/gold.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentGoldCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newGoldCapacity)+"</td></tr>";
	if(newPromethiumCapacity != -1) htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/promethium.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentPromethiumCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newPromethiumCapacity)+"</td></tr>";
	if(newTitaniumCapacity != -1) htmlOutput += "<tr><td style='text-align:center;border-right:1px solid black;'><img src='images/titanium.png' class='img-small-medium' /></td><td style='text-align:center;'>" + formatNumber(currentTitaniumCapacity) + "</td><td style='text-align:right;'>&#x2192;</td><td style='text-align:right;'>"+formatNumber(newTitaniumCapacity)+"</td></tr>";
	
	htmlOutput += "</table>";
	htmlOutput += "</center></div><br /><br />" + createHTMLBoxWithChecks("bloodCrystals",capacityLevelPrice, formatNumber(capacityLevelPrice));
	confirmDialogue("90%",htmlOutput,"Purchase","Close","BUY_FROM_SHOP=capacityBag");
}

function upgradeLootingRingDialogue()
{
	if(theLootingRingQuest2 == 2)
	{
		confirmDialogue("90%","<center><img src='images/lootingRingWizard.png' class='img-large' /><hr /><br />Your looting ring is extremely powerful, and legend says that a blood looting ring is required to trigger a blood moon.<br /><br />Would you like me to upgrade your ring?<br /><br />" + createHTMLBoxWithChecks("bloodDiamond",1, formatNumber(1)), "Upgrade","Close","UPGRADE_LOOTING_RING");
	}
	else if(theLootingRingQuest2 == -1)
	{
		confirmDialogue("90%","<center><img src='images/lootingRingWizard.png' class='img-large' /><hr /><br />Would you like me to further upgrade the looting ring at the cost of one blood diamond?<br /><br />" + createHTMLBoxWithChecks("bloodDiamond",1, formatNumber(1)), "Upgrade","Close","UPGRADE_LOOTING_RING");
	}
	else if(theLootingRingQuest2 == 3)
	{
		confirmDialogue("90%","<center><img src='images/lootingRingWizard.png' class='img-large' /><hr /><br />Would you like me to further upgrade the looting ring at the cost of one blood diamond?<br /><br />" + createHTMLBoxWithChecks("bloodDiamond",1, formatNumber(1)), "Upgrade","Close","UPGRADE_LOOTING_RING");
	}
	else
		confirmDialogue("90%","<center><img src='images/lootingRingWizard.png' class='img-large' /><hr /><br />Would you like me to further upgrade the looting ring at the cost of one diamond?<br /><br />" + createHTMLBoxWithChecks("diamond",1, formatNumber(1)), "Upgrade","Close","UPGRADE_LOOTING_RING");
}

function refineGoldBars()
{
	confirmDialogue("90%","<center><img src='images/goldBarRefinery.png' class='img-large' /><hr />Refine gold bars?<br /><br />" + createHTMLBoxWithChecks("oil",500000, formatNumber(500000)) + createHTMLBoxWithChecks("goldBars",100, formatNumber(100)) + "</center>","Refine","Close","REFINE_GOLD_BARS=goldBars");
}
function refinePromethiumBars()
{
	confirmDialogue("90%","<center><img src='images/promethiumBarRefinery.png' class='img-large' /><hr />Refine promethium bars?<br /><br />" + createHTMLBoxWithChecks("oil",2000000, formatNumber(2000000)) + createHTMLBoxWithChecks("promethiumBars",100, formatNumber(100)) + "</center>","Refine","Close","REFINE_GOLD_BARS=promethiumBars");
}

function clicksGoblinShopItem(indexFound)
{
	if(window["gemGoblinItem"+indexFound+"Amount"] == 0) return;
	
	var gemFound = window["gemGoblinItem"+indexFound+"CostGem"];
	var gemFoundAmount = window["gemGoblinItem"+indexFound+"CostGemAmount"];
	var bcFound = window["gemGoblinItem"+indexFound+"CostBC"];
	
	
	document.getElementById("gemGoblinShopBuyMenu-gemImg").src = "images/" + gemFound + ".png";
	
	var checkImg = "<img src='images/check.png' class='img-tiny' />"; if(gemFoundAmount > window[gemFound]) checkImg = "<img src='images/x.png' class='img-tiny' />";
	document.getElementById("gemGoblinShopBuyMenu-gemImg").src = "images/" + gemFound + ".png";
	document.getElementById("gemGoblinShopBuyMenu-gemAmount-span").innerHTML = " " + gemFoundAmount + " " + checkImg;
	
	
	var checkImg = "<img src='images/check.png' class='img-tiny' />"; if(bcFound > bloodCrystals) checkImg = "<img src='images/x.png' class='img-tiny' />";
	document.getElementById("gemGoblinShopBuyMenu-bcAmount-span").innerHTML = " " + bcFound + " " + checkImg;
	
	if(theGemGoblinQuest2 == -1)
	{
		document.getElementById("dialogue-gemGoblinShopBuyMenu-buttonName").innerHTML = "BUY WITH ITEMS";
		document.getElementById("dialogue-gemGoblinShopBuyMenu-gemBtn-img").src = "images/gemGoblinShopUpgrade.png";
	}
	document.getElementById("dialogue-gemGoblinShopBuyMenu-gemBtn").setAttribute("onclick","confirmGemGoblyBuy('"+indexFound+"','GEMS')");
	document.getElementById("dialogue-gemGoblinShopBuyMenu-bcBtn").setAttribute("onclick","confirmGemGoblyBuy('"+indexFound+"','BC')");
	
	openDialogue("dialogue-gemGoblinShopBuyMenu","90%");
}

function confirmGemGoblyBuy(indexFound, gemOrBc)
{
	sendBytes("BUY_GEM_GOBLIN=" + indexFound + "~" + gemOrBc);
	closeSmittysDialogue('dialogue-gemGoblinShopBuyMenu');
}
function upgradeToolDialogue(tool)
{
	
	var nextUpgradeGem = "";
	
	if(tool.includes("bloodDiamond"))
		nextUpgradeGem = "MAXED";
	else if(tool.includes("diamond") && toolUpgrade == 1)
		nextUpgradeGem = "bloodDiamond";
	else if(tool.includes("diamond") && toolUpgrade == 0)
		nextUpgradeGem = "MAXED";
	else if(tool.includes("ruby"))
		nextUpgradeGem = "diamond";
	else if(tool.includes("emerald"))
		nextUpgradeGem = "ruby";
	else if(tool.includes("sapphire"))
		nextUpgradeGem = "emerald";
	else 
		nextUpgradeGem = "sapphire";
	
	
	
	
	if(tool.toLowerCase().endsWith("axe"))
	{
		document.getElementById("dialogue-upgradeTool-chosen").value = "axe";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentAxe() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=axe\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/woodcuttingSkill.png' class='img-small' /><b>Log Multiplier:</b> " + getCurrentAxeMultiplier();
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your base multiplier by upgrading your axe with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			
		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "<span class='tool-upgrade-btn' onclick='viewTreesChopped()' style='color:white;'>Trees Chopped</span>";
	}

	if(tool.toLowerCase().endsWith("rake"))
	{
		document.getElementById("dialogue-upgradeTool-chosen").value = "rake";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentRake() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=rake\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/greenLeaf.png' class='img-small' /> <b>Bonus Leaves:</b> x" + getCurrentRakeChance();
		if(getCurrentRake() == "bloodDiamondRake") htmlEffect +=  "<br /><img src='images/redMushroom.png' class='img-small' /> <b>Bonus Mushrooms:</b> x" + getCurrentRakeChance();
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your chance of finding seeds by upgrading your rake with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			
		if(farmingResearchLevel >= 9) document.getElementById("rake-striped-seeds-found").style.display = "";
		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "<span class='tool-upgrade-btn' onclick='viewSeedsFound()' style='color:white;'>Seeds Found</span>";
	}
	
	if(tool.toLowerCase().endsWith("secateurs"))
	{
		document.getElementById("dialogue-upgradeTool-chosen").value = "Secateurs";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentSecateurs() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=secateurs\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/kindle.png' class='img-small' /> <b>Bonus Kindle:</b> x" + getCurrentSecateursChance();
		if(getCurrentSecateurs() == "bloodDiamondSecateurs") htmlEffect +=  "<br /><img src='images/goldenKindle.png' class='img-small' /> Rare chance of snipping golden kindle.";
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your kindles by upgrading your secateurs with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			
		if(farmingResearchLevel >= 9) document.getElementById("rake-striped-seeds-found").style.display = "";
		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "";
	}

	if(tool.toLowerCase().endsWith("shovel"))
	{
		document.getElementById("dialogue-upgradeTool-chosen").value = "shovel";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentShovel() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=shovel\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/treeRoots.png' class='img-small' /><b>Roots Multiplier:</b> " + getCurrentShovelMultiplier();
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your base multiplier by upgrading your shovel with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			
		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "";
	}
	
	if(tool.toLowerCase().endsWith("machete"))
	{
		document.getElementById("dialogue-upgradeTool-chosen").value = "machete";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentMachete() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=machete\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/apple.png' class='img-small' /><b>Fruit Multiplier:</b> " + getCurrentMacheteMultiplier();
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your base multiplier by upgrading your machete with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			

		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "";
	}
	

	if(tool.toLowerCase().endsWith("brewingkit"))
	{
		
		document.getElementById("dialogue-upgradeTool-chosen").value = "brewingKit";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentBrewingKit() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=brewingKit\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/brewingSkill.png' class='img-small' /><b>Time Bonus:</b> " + (getBrewingKitMultiplier() * 100 - 100) + "%";
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your base multiplier by upgrading your brewing kit with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			

		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "";
	}
	
	if(tool.toLowerCase().endsWith("brewingkit"))
	{
		
		document.getElementById("dialogue-upgradeTool-chosen").value = "brewingKit";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentBrewingKit() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=brewingKit\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/brewingSkill.png' class='img-small' /><b>Time Bonus:</b> " + (getBrewingKitMultiplier() * 100 - 100) + "%";
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your potion duration by upgrading your brewing kit with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			

		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "";
	}
	
	if(tool.toLowerCase().endsWith("fishingrod"))
	{
		
		document.getElementById("dialogue-upgradeTool-chosen").value = "fishingRod";
		document.getElementById("dialogue-upgradeTool-image").src = "images/" + getCurrentFishingRod() + ".png";
		
		var upgradeToolHTMLButton = "<span onclick='sendBytes(\"UPGRADE_TOOL=fishingRod\");closeSmittysDialogue(\"dialogue-upgradeTool\")' class='tool-upgrade-btn'>Upgrade</span>";
		var htmlEffect = "<img src='images/"+getCurrentFishingRod()+".png' class='img-small' /><b>You can catch:<br /><br /></b>";
		
		if(getCurrentFishingRod() == "fishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
		}
		else if(getCurrentFishingRod() == "sapphireFishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
			htmlEffect += "<img src='images/rawSardine.png' class='img-small' /> Sardine<br />";
		}
		else if(getCurrentFishingRod() == "emeraldFishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
			htmlEffect += "<img src='images/rawSardine.png' class='img-small' /> Sardine<br />";
			htmlEffect += "<img src='images/rawTuna.png' class='img-small' /> Tuna<br />";
		}
		else if(getCurrentFishingRod() == "rubyFishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
			htmlEffect += "<img src='images/rawSardine.png' class='img-small' /> Sardine<br />";
			htmlEffect += "<img src='images/rawTuna.png' class='img-small' /> Tuna<br />";
			htmlEffect += "<img src='images/rawSwordfish.png' class='img-small' /> Swordfish<br />";
		}
		else if(getCurrentFishingRod() == "diamondFishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
			htmlEffect += "<img src='images/rawSardine.png' class='img-small' /> Sardine<br />";
			htmlEffect += "<img src='images/rawTuna.png' class='img-small' /> Tuna<br />";
			htmlEffect += "<img src='images/rawSwordfish.png' class='img-small' /> Swordfish<br />";
			htmlEffect += "<img src='images/rawShark.png' class='img-small' /> Shark<br />";
		}
		else if(getCurrentFishingRod() == "bloodDiamondFishingRod")
		{
			htmlEffect += "<img src='images/rawShrimp.png' class='img-small' /> Shrimp<br />";
			htmlEffect += "<img src='images/rawSardine.png' class='img-small' /> Sardine<br />";
			htmlEffect += "<img src='images/rawTuna.png' class='img-small' /> Tuna<br />";
			htmlEffect += "<img src='images/rawSwordfish.png' class='img-small' /> Swordfish<br />";
			htmlEffect += "<img src='images/rawShark.png' class='img-small' /> Shark<br />";
			htmlEffect += "<img src='images/rawWhale.png' class='img-small' /> Whale<br />";
			htmlEffect += "<img src='images/rawRainbowFish.png' class='img-small' /> Rainbow fish<br />";
		}
		
		if(nextUpgradeGem != "MAXED")
		{
			htmlEffect += "<br /><br /><span style='color:silver'>Increase your types of fish that you can catch by upgrading your rod with a <br /><img src='images/"+nextUpgradeGem+".png' class='img-small' /> " + getItemName(nextUpgradeGem) + "</span>";
		}
		else
		{
			upgradeToolHTMLButton = "<i style='color:lime'>Maxed out <img src='images/check.png' class='img-tiny' /></i>"
		}
			

		document.getElementById("dialogue-upgradeTool-effect").innerHTML = htmlEffect;
		document.getElementById("dialogue-upgradeTool-upgradeButtonTd").innerHTML = upgradeToolHTMLButton;
		document.getElementById("dialogue-upgradeTool-secondaryButtonTd").innerHTML = "<span class='tool-upgrade-btn' onclick='viewFishFound()' style='color:white;'>Fish Caught</span>";
	}
	
	openDialogue("dialogue-upgradeTool","90%")
}


function viewFishFound()
{
	closeSmittysDialogue("dialogue-upgradeTool");
	openDialogue("dialogue-fishCaught","90%");
}

function viewSeedsFound()
{
	closeSmittysDialogue("dialogue-upgradeTool");
	openDialogue("dialogue-seedsFound","90%");
}
function viewTreesChopped()
{
	closeSmittysDialogue("dialogue-upgradeTool");
	openDialogue("dialogue-treesChopped","90%");
	if(treasureMap == 6) sendBytes("CLICKS_VIEW_CHOPPED_TREES");
	if(woodcuttingResearchLevel >= 6) document.getElementById('fruit-tree-totals').style.display = '';
}

function openLootFactory(itemName, openAllEnabledAtAmount)
{
	document.getElementById("dialogue-lootFactory-openLoot-itemChosen").value = itemName;
	document.getElementById("dialogue-lootFactory-openloot-text").innerHTML = "<h2>" + getItemName(itemName) + "</h2><img src='images/"+itemName+".png' class='img-medium' /><br /><hr />";
	
	if(window[itemName] >= openAllEnabledAtAmount)
	{
		openLootFactoryMulti(itemName)
	}
	else
	{
		document.getElementById("open-all-loot-button-factory").style.display = "none";
		document.getElementById("open-one-loot-button-factory").style.display = "";
		openDialogue("dialogue-lootFactory-openloot");
	}
	
}


function openLootFactoryMulti(itemName)
{
	initAmountWidget("amount-widget-crates",itemName,1,[itemName],[1],"images/"+itemName+".png","images/"+getMayorRatingSmileIcon(),"OPEN_FACTORY_MULTI","NO_CAP")
	openDialogue("dialogue-openCrates","90%")
}


var sellMaxValue;
var sellCommand;
var sellOrOilAmount;
//command --> SELL=stone
//command --> SMELT=copper
function setSellWidgetValues(command, currentValue, maxValue)
{
	sellOrOilAmount = currentValue;
	sellCommand = command;
	sellMaxValue = maxValue;
	
	var selector = "[data-item-sellAmount=0]";
	var elementsFound = $(selector);
	for(var j = 0; j < elementsFound.length; j++)
	{
		elementsFound[j].value = currentValue;
	}
}


function setSellAmountWidget(textElement)
{
	setAmountToSellWidget(textElement.value,-1,false);
}

function sendWidgetSellToServer()
{
	sendBytes(sellCommand + "~" + sellOrOilAmount);
}

function setCoinAndOilAmountWidget(cost, amount)
{
	document.getElementById("dialogue-itemCost").innerHTML = formatNumber(cost * amount);
}


function setAmountToSellWidget(amount,maxAmount,isAdditive)
{
	if(isAdditive)
	{
		var val = parseInt(sellOrOilAmount);
		val += amount;
		if(val > maxAmount)
			val = parseInt(sellOrOilAmount);
		
		sellOrOilAmount = val;
	}
	else
	{
		sellOrOilAmount = amount;
	}
	
	var selector = "[data-item-sellAmount=0]";
	var elementsFound = $(selector);
	for(var j = 0; j < elementsFound.length; j++)
	{
		elementsFound[j].value = sellOrOilAmount;
	}
	
	setCoinAndOilAmountWidget(document.getElementById("dialogue-sellItemCost").value, sellOrOilAmount)
}

function toggleTextForBloodCrystalsOnOff()
{
	var spanElement = document.getElementById('miningResearchLevel3-mainbutton').getElementsByTagName("span")[0];
	if(spanElement.innerHTML == "ON")
	{
		spanElement.style.color = "red";
		spanElement.innerHTML = "OFF"
	}
	else
	{
		spanElement.style.color = "lime";
		spanElement.innerHTML = "ON"
	}
}

function clicksTimeMachine(dialogueId)
{

	if(dialogueId == "openInterface") //use crystals
	{
		openDialogue("dialogue-timeMachine3", "90%");
		return;
	}
	
	//operations below
	if(dialogueId == "decreaseCrystalUseAlot")
	{
		var amountCrystals = 100;
		
		var currentBCValue = parseInt(document.getElementById("timeMachine-crystalsToUse").innerHTML);
		
		if(currentBCValue - amountCrystals < 0) document.getElementById("timeMachine-crystalsToUse").innerHTML = 0;
		if(currentBCValue - amountCrystals >= 0)
		{
			document.getElementById("timeMachine-crystalsToUse").innerHTML = currentBCValue - amountCrystals;
		}
	
	}
	
	if(dialogueId == "increaseCrystalUseAlot")
	{
		var amountCrystals = 100;
		
		var currentBCValue = parseInt(document.getElementById("timeMachine-crystalsToUse").innerHTML);
		if(currentBCValue + amountCrystals <= bloodCrystals)
		{
			document.getElementById("timeMachine-crystalsToUse").innerHTML = currentBCValue + amountCrystals;
		}
		
	}
	
	if(dialogueId == "decreaseCrystalUse")
	{
		var amountCrystals = 10;
		
		var currentBCValue = parseInt(document.getElementById("timeMachine-crystalsToUse").innerHTML);
		
		if(currentBCValue - amountCrystals < 0) document.getElementById("timeMachine-crystalsToUse").innerHTML = 0;
		if(currentBCValue - amountCrystals >= 0)
		{
			document.getElementById("timeMachine-crystalsToUse").innerHTML = currentBCValue - amountCrystals;
		}

		
	}
	
	if(dialogueId == "increaseCrystalUse")
	{
		var amountCrystals = 10;
		
		var currentBCValue = parseInt(document.getElementById("timeMachine-crystalsToUse").innerHTML);
		if(currentBCValue + amountCrystals <= bloodCrystals)
		{
			document.getElementById("timeMachine-crystalsToUse").innerHTML = currentBCValue + amountCrystals;
		}

	}
	
	if(dialogueId == "increaseCrystalUse1")
	{
		var amountCrystals = 1;
		
		var currentBCValue = parseInt(document.getElementById("timeMachine-crystalsToUse").innerHTML);
		if(currentBCValue + amountCrystals <= bloodCrystals)
		{
			document.getElementById("timeMachine-crystalsToUse").innerHTML = currentBCValue + amountCrystals;
		}

	}
	
	var crystalsToUse = document.getElementById("timeMachine-crystalsToUse").innerHTML;
	var bonusTimeInHours = parseInt(crystalsToUse/100) * 1.5;
	var timePass = getTimeMahcineTicks(parseInt(crystalsToUse));
	var minutes = 0;
	var hours = 0;
	
	for(var i = 0 ; i < timePass; i++)
	{
		if(timePass >= 3600)
		{
			hours++;
			timePass -= 3600;
		}
		else if(timePass >= 60)
		{
			minutes++;
			timePass -= 60;
		}
	}
	
	
	
	var htmlOutput = "";
	if(hours == 0)
		htmlOutput = minutes + " minutes";
	else 
	{
		htmlOutput = hours + " hours";
		if(minutes > 0)
		htmlOutput += ", " + minutes + " minutes";
	}
	
	if(bonusTimeInHours > 0)
	{
		htmlOutput += "<span style='color:grey'><br /><br /><i style='font-size:10pt'><b><u>Double</u> time per 100 crystals added: <span style='color:green'>" +  bonusTimeInHours + "h</span></b></i>";
	}
	document.getElementById("timeMachine-timeToPass").innerHTML = "<br /><br />" + htmlOutput;
}

function openLavaPipeDialogue()
{
	//show installation
	if(lavaPlantPipe4 == 0)
	{
		if(lavaPlantPipe1 == 1) document.getElementById("lavaPlant-install-lavaPlantPipe1-td").innerHTML = "<img src='images/lavaPlantPipe.png' class='img-medium' />";
		if(lavaPlantPipe2 == 1) document.getElementById("lavaPlant-install-lavaPlantPipe2-td").innerHTML = "<img src='images/lavaPlantPipe.png' class='img-medium' />";
		if(lavaPlantPipe3 == 1) document.getElementById("lavaPlant-install-lavaPlantPipe3-td").innerHTML = "<img src='images/lavaPlantPipe.png' class='img-medium' />";
		if(lavaPlantPipe4 == 1) document.getElementById("lavaPlant-install-lavaPlantPipe4-td").innerHTML = "<img src='images/lavaPlantPipe.png' class='img-medium' />";
		openDialogue('dialogue-install-lavaPlant');
	}
	else
		sendBytes("TOGGLE_LAVA_PLANT");
}

function openAncientLavaPipeDialogue()
{
	//show installation
	if(ancientLavaPlantPipe4 == 0)
	{
		if(ancientLavaPlantPipe1 == 1) document.getElementById("lavaPlant-install-ancientLavaPlantPipe1-td").innerHTML = "<img src='images/ancientLavaPlantPipe.png' class='img-medium' />";
		if(ancientLavaPlantPipe2 == 1) document.getElementById("lavaPlant-install-ancientLavaPlantPipe2-td").innerHTML = "<img src='images/ancientLavaPlantPipe.png' class='img-medium' />";
		if(ancientLavaPlantPipe3 == 1) document.getElementById("lavaPlant-install-ancientLavaPlantPipe3-td").innerHTML = "<img src='images/ancientLavaPlantPipe.png' class='img-medium' />";
		if(ancientLavaPlantPipe4 == 1) document.getElementById("lavaPlant-install-ancientLavaPlantPipe4-td").innerHTML = "<img src='images/ancientLavaPlantPipe.png' class='img-medium' />";
		openDialogue('dialogue-install-ancientLavaPlant');
	}
	else
		sendBytes("TOGGLE_LAVA_PLANT");
}

function getTimeMahcineTicks(crystalsInput)
{
	var timeToPassSeconds = 0;
	for(var i = 0; i < crystalsInput; i++)
	{
		if(crystalsInput >= 100)
		{
			crystalsInput-= 100;
			timeToPassSeconds += 10800;
			continue;
		}
		else //less than 100
		{
			timeToPassSeconds += 60 * crystalsInput;
			crystalsInput = 0;
		}
	}
	
	return timeToPassSeconds;
}

function getNextGemTier(gemChosen)
{
	if(gemChosen == "sapphire")
		return "emerald";
	else if(gemChosen == "emerald")
		return "ruby";
	else if(gemChosen == "ruby")
		return "diamond";
	else if(gemChosen == "diamond")
		return "bloodDiamond";

}

function openConvertGemDialogue(gemChosen)
{
	var nextGem = getNextGemTier(gemChosen);
	
	
	document.getElementById("gemDialogue-convert-gem-button").setAttribute("onclick","convertManyGems('"+gemChosen+"');closeSmittysDialogue('dialogue-convertGem');");
	document.getElementById("gemDialogue-sell-gem-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertGem');openSellDialogue('"+gemChosen+"')");

	document.getElementById("gemDialogue-convert-gem-button-img").src = "images/" + nextGem + ".png"
	document.getElementById("gemDialogue-convert-gem-button-text").style.fontSize = "10pt";
	document.getElementById("gemDialogue-convert-gem-button-text").innerHTML = "<img src='images/"+gemChosen+".png' class='img-tiny' /> Requires 10 " + getItemName(gemChosen);
	if(window[gemChosen] >= 10)
		document.getElementById("gemDialogue-convert-gem-button-text").style.color = lightGreenColor;
	else
		document.getElementById("gemDialogue-convert-gem-button-text").style.color = lightRedColor;
	
	openDialogue("dialogue-convertGem");
	
	
}

function convertManyGems(gemChosen)
{
		var nextGem = getNextGemTier(gemChosen);
	
		initAmountWidget("amount-widget-convertGems",gemChosen,1,[gemChosen],[10],"images/"+"researcher"+".png","images/"+nextGem+".png","CONVERT_MULTI_GEM","NO_CAP")
		amountWidgetAmountInputElementGlobal.value = 1;
		amountWidgetOnKeyUp();
		openDialogue("dialogue-convertGems","90%")
}


function openProfileLootDialogueToggles()
{
	var checkingFor = "";
	
	checkingFor =  "profileDialogueOffFarmer"; if(window[checkingFor] == 0) document.getElementById(checkingFor +"-check-img").src = "images/check.png"; else document.getElementById(checkingFor +"-check-img").src = "images/x.png";
	checkingFor =  "profileDialogueOffLumberjack"; if(window[checkingFor] == 0) document.getElementById(checkingFor +"-check-img").src = "images/check.png"; else document.getElementById(checkingFor +"-check-img").src = "images/x.png";
	checkingFor =  "profileDialogueOffMonsters"; if(window[checkingFor] == 0) document.getElementById(checkingFor +"-check-img").src = "images/check.png"; else document.getElementById(checkingFor +"-check-img").src = "images/x.png";
	checkingFor =  "profileDialogueOffExploring"; if(window[checkingFor] == 0) document.getElementById(checkingFor +"-check-img").src = "images/check.png"; else document.getElementById(checkingFor +"-check-img").src = "images/x.png";
}

function openConvertAmuletDialogue(amuletChosen)
{
	var ring = amuletChosen.substr(0, amuletChosen.length - 6) + "Ring";
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button").style.display = "";
	
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertAmulet');confirmDialogue('90%','Convert <img class=\"img-tiny\" src=\"images/"+getPngOrGif(amuletChosen, false)+"\"> <b>3 "+getItemName(amuletChosen)+"</b> into a <b><img class=\"img-tiny\" src=\"images/"+getPngOrGif(ring, false)+"\"> "+getItemName(ring)+" </b>?','Convert','Cancel','CONVERT_AMULET="+amuletChosen+"')");
	
	document.getElementById("convertAmuletDialogue-sell-convertAmulet-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertAmulet');sendBytes('EQUIP="+amuletChosen+"')");
	
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button-img").src = "images/" + getPngOrGif(ring, false);
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button-text").style.fontSize = "10pt";
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button-text").innerHTML = "<img src='images/"+getPngOrGif(amuletChosen, false)+"' class='img-tiny' /> Requires 3 " + getItemName(amuletChosen);
	if(window[ring] >= 3)
		document.getElementById("convertAmuletDialogue-convert-convertAmulet-button-text").style.color = lightGreenColor;
	else
		document.getElementById("convertAmuletDialogue-convert-convertAmulet-button-text").style.color = lightRedColor;
	
	if(exploringResearchLevel < 7)
	{
		document.getElementById("convertAmuletDialogue-convert-convertAmulet-button").style.display = "none";
	}
	else
		document.getElementById("convertAmuletDialogue-convert-convertAmulet-button").style.display = "";
	
	if(amuletChosen.endsWith("stoneAmulet") || amuletChosen.endsWith("StoneAmulet"))
	{
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").style.display = "";
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertAmulet');confirmDialogue('90%','Socket the amulet?','Add Gem','Cancel','SOCKET_STONE_AMULET="+amuletChosen+"')");
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/sapphire.png";
			
		if(amuletChosen == "sapphireStoneAmulet")
			document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/emerald.png";
		else if(amuletChosen == "emeraldStoneAmulet")
			document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/ruby.png";
		else if(amuletChosen == "rubyStoneAmulet")
			document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/diamond.png";
		else if(amuletChosen == "diamondStoneAmulet")
			document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/bloodDiamond.png";
		else if(amuletChosen == "bloodDiamondStoneAmulet")
			document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").style.display = "none";
	}
	else
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").style.display = "none";
	
	openDialogue("dialogue-convertAmulet");
}

function oepnStoneRingDialogue(ringChosen)
{
	document.getElementById("convertAmuletDialogue-convert-convertAmulet-button").style.display = "none";

	document.getElementById("convertAmuletDialogue-sell-convertAmulet-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertAmulet');sendBytes('EQUIP="+ringChosen+"')");
	
	document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").style.display = "";
	document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").setAttribute("onclick","closeSmittysDialogue('dialogue-convertAmulet');confirmDialogue('90%','Socket the ring?','Add Gem','Cancel','SOCKET_STONE_RING="+ringChosen+"')");
	document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/sapphire.png";
			
	if(ringChosen == "sapphireStoneRing")
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/emerald.png";
	else if(ringChosen == "emeraldStoneRing")
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/ruby.png";
	else if(ringChosen == "rubyStoneRing")
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/diamond.png";
	else if(ringChosen == "diamondStoneRing")
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-socket-img").src = "images/bloodDiamond.png";
	else if(ringChosen == "bloodDiamondStoneRing")
		document.getElementById("convertAmuletDialogue-socketStoneAmulet-button").style.display = "none";
	
	openDialogue("dialogue-convertAmulet");
}
function getMineralTimeAdded(mineral, amount)
{
	var timeAdded = 0;
	switch(mineral)
	{
		case "limeQuartzMineral":
			timeAdded =  60;
		break;
		case "fluoriteMineral":
			timeAdded =  420;
		break;
		case "topazMineral":
			timeAdded =  1800;
		break;
		
		case "blueMarbleMineral":
			timeAdded =  120;
		break;
		case "sulferMineral":
			timeAdded =  900;
		break;
		case "purpleQuartzMineral":
			timeAdded =  3600;
		break;
		
		case "limoniteMineral":
			timeAdded =  300;
		break;
		case "crystalPrismeMineral":
			timeAdded =  1800;
		break;
		case "clearMarbleMineral":
			timeAdded =  5700;
		break;
		
		case "denseMarbleMineral":
			timeAdded =  900;
		break;
		case "jadeMineral":
			timeAdded =  3600;
		break;
		case "opalMineral":
			timeAdded =  7200;
		break;
		
		case "amethystMineral":
			timeAdded =  2100;
		break;
		case "tashmarineMineral":
			timeAdded =  7200;
		break;
		case "tanzaniteMineral":
			timeAdded =  15600;
		break;
		
		case "seaCrystalMineral":
			timeAdded =  7200;
		break;
		case "amberMineral":
			timeAdded =  14400;
		break;
		case "smoothPearlMineral":
			timeAdded =  25200;
		break;
	}
	
	return timeAdded * amount;
}
function changeMineralNecklace()
{
	var time = 0;
	var testingFor = "";
	
	testingFor = "limeQuartzMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "fluoriteMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "topazMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	testingFor = "blueMarbleMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "sulferMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "purpleQuartzMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	testingFor = "limoniteMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "crystalPrismeMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "clearMarbleMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	testingFor = "denseMarbleMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "jadeMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "opalMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	testingFor = "amethystMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "tashmarineMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "tanzaniteMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	testingFor = "seaCrystalMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "amberMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	testingFor = "smoothPearlMineral"; time += getMineralTimeAdded(testingFor, window[testingFor]);
	
	if(time > 0)
	confirmDialogue("90%","<center><img src='images/minerals.png' class='img-large' /><hr />Charge necklace with all minerals?<br /><br />" + createHTMLBox("mineralNecklace","+" + formatTime(time) + " <img src='images/clock.png' class='img-tiny' />") + "</center>","Add Minerals","Close","MINERAL_NECKLACE_ADD_TIME");
else
	confirmDialogue("90%","You do not have minerals to charge the necklace.  Did you open your geodes?","Close","","")
}


function openEnterOrbitDialogue()
{
	initAmountWidget("amount-widget-enterOrbitNumber","oil",1,["oil"],[1],"images/satellite.png","images/rocket.png","ENTER_ORBIT_NUMBER",30000);
	openDialogue("dialogue-enterOrbitNumber","90%");
}

function buySuperBaitDialogue()
{
	initAmountWidget("amount-widget-buy-superBait","bloodCrystals",1,["bloodCrystals"],[25],"images/superBait.png","images/superBait.png","BUY_SUPER_BAIT","NO_CAP");
	amountWidgetAmountInputElementGlobal.value = 1;
	amountWidgetOnKeyUp();
	openDialogue("dialogue-buy-superBait","90%")
}

function clicksRocket()
{
	if(rocketKm > 1)
	{
			confirmDialogue("90%","<center>Your rocket is currently in space!.</center>","Close","","");
	}
	else
	{
			if(rocketKm == 1) 
				sendBytes("MANAGE_ROCKET=collect");
			else
			{
				if(miningResearchLevel >= 8)
				{
					document.getElementById("send-rocket-mars-button").style.display = "";
					
					
					if(oil >= 4000000)
						document.getElementById("rocket-menu-moon-oil-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-moon-oil-img-check").src = "images/x.png"; 
					
					if(oil >= 15000000)
						document.getElementById("rocket-menu-mars-oil-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-mars-oil-img-check").src = "images/x.png"; 
					
					if(titaniumHeatShield > 0)
					{
						document.getElementById("send-rocket-sun-button").style.display = "";
						
						if(oil >= 30000000) document.getElementById("rocket-menu-sun-oil-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-sun-oil-img-check").src = "images/x.png"; 
						if(charcoal >= 100) document.getElementById("rocket-menu-sun-charcoal-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-sun-charcoal-img-check").src = "images/x.png"; 
					}
					
						
					openDialogue("dialogue-rocketMenu-mars");
				}
				else if(titaniumHeatShield > 0 && miningResearchLevel < 8)
				{
					
					document.getElementById("send-rocket-sun-button").style.display = "";
						
					if(oil >= 30000000) document.getElementById("rocket-menu-sun-oil-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-sun-oil-img-check").src = "images/x.png"; 
					if(charcoal >= 100) document.getElementById("rocket-menu-sun-charcoal-img-check").src = "images/check.png"; else document.getElementById("rocket-menu-sun-charcoal-img-check").src = "images/x.png"; 
					
					
						
					openDialogue("dialogue-rocketMenu-mars");
				}
				else if(titaniumHeatShield == 0 && miningResearchLevel < 8)
				{
					confirmDialogue("90%","<center><img src='images/rocket.png' class='img-large' /><hr />Send your rocket to the moon?<br /><br />" + createHTMLBoxWithChecks("oil",4000000, formatNumber(4000000)) + "</center>","Launch Rocket","Close","MANAGE_ROCKET=send");
				}
			}
			
	}
}

function getHTMLBuffs(buffImg, desc, difficulty, donatedEnough)
{
	var found = totalDonations >= donatedEnough;
	if(found) ans = "<hr /><span style='color:lime;font-size:10pt'>" + "Active" + "<img src='images/check.png' class='img-tiny'></span>"; else ans = "<hr /><span style='color:yellow;font-size:10pt'>" + "Missing: $" + (donatedEnough - totalDonations) + ".00 " + "<img src='images/x.png' class='img-tiny'></span>";
	return "<div class='main-button'><table><tr><td>"+buffImg+"</td><td style='text-align:right;padding-right:20px;'><span style='font-size:13pt;'><span style='color:orange;'>"+desc+"<br />"+difficulty+ans+"</span></td></tr></table></div>";
}

function refreshBuffs()
{
	var divArea = document.getElementById("buff-area");
	divArea.innerHTML = "";
	var htmlOut = "";
	var desc ="";
	var imgTag = "";
	var donatedAmount = 0;
	var hpEmblemId = 0;
	var hpEmblemHint = 0;
	var difficulty = "";
	var imgName = "";
	
	imgName = "mail_green";
	desc = "Ability to message the Owner.";
	donatedAmount = 1;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	imgName = "moreOfflineTime";
	desc = "12 hours of offline time instead of 8 hours.";
	donatedAmount = 4; if(offlineTimeTimer > 0) donatedAmount = 0;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);

	desc = "25% more XP in every skill.";
	donatedAmount = 8; if(xpBoostTimer > 0) donatedAmount = 0;
	imgTag = "<img src='images/xpBoost.png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/xpBoost_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	imgName = "moreOil";
	desc = "10% more oil from all sources.";
	donatedAmount = 16;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	imgName = "lessEnergy";
	desc = "20% less energy usage for all areas.";
	donatedAmount = 32;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	imgName = "chests";
	desc = "Extra slot rolled on every type of chest.";
	donatedAmount = 48;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	imgName = "moreOil2";
	desc = "20% more oil from all sources.<br /><i style='font-size:10pt;'>Stacks with previous buff</i>";
	donatedAmount = 64;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += getHTMLBuffs(imgTag, desc, difficulty, donatedAmount);
	
	var autoTickHealLabel = "<span id='autoTickHeal-label' style='color:red'>OFF</span>";
	if(autoTickHealOn > 0) autoTickHealLabel = "<span id='autoTickHeal-label' style='color:lime'>ON</span>";
	
	imgName = "autoTickHeal";
	desc = "Automatically uses heal potions when reaching 0 HP.<br /><i style='font-size:12pt;color:yellow'>Customizable</i><br /><br /><b>Currently:</b> " + autoTickHealLabel;
	donatedAmount = 96;
	imgTag = "<img src='images/"+imgName+".png' class='img-medium' />"; if(totalDonations < donatedAmount) imgTag = "<img src='images/"+imgName+"_dark.png' class='img-medium' />";
	htmlOut += "<span style='cursor:pointer;' onclick='clicksAutoTickHealBuff()'>" + getHTMLBuffs(imgTag, desc, difficulty, donatedAmount) + "</span>";
	
	divArea.innerHTML = htmlOut;
}

function openMagicEmblemDialogue(spellToSwap)
{
	var divEle = document.getElementById("magicEmblem-table");
	
	var outputHTML = "";
	

	var spellName = "fireSpell";
	var upgradeDesc = "Double damage.";
	var upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");'class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1) upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	spellName = "reflectSpell";
	upgradeDesc = "Reflect will only trigger if the enemy hits over a 0.";
	upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");'class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1)upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	spellName = "teleportSpell";
	upgradeDesc = "Reduces the cooldown of teleport by 10 minutes.";
	upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");' class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1) upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	spellName = "thunderStrikeSpell";
	upgradeDesc = "Paralyzes the enemy based on how hard you hit. <span style='color:grey;'><br />(Damage dealt/2 seconds)</span>";
	upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");' class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1) upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	spellName = "lifeStealSpell";
	upgradeDesc = "Heal on the next three melee hits instead of one.";
	upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");' class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1) upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	spellName = "sandstormSpell";
	upgradeDesc = "Casting thunderstrike while sandstorm is active will charge the particles, dealing damage for the remaining time.";
	upgradeBtn = "<span onclick='sendBytes(\"UPGRADE_SPELL="+spellName+"~"+spellToSwap+"\");closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");' class='table-upgrade-magicEmblem-upgradeBtn'>Upgrade</span>"
	if(window[spellName + "Upgraded"] == 1) upgradeBtn = "<img src='images/check.png' class='img-small' />";
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	
	
	if(outputHTML.length == 0)
	{
		confirmDialogue("90%","You need to unlock a spell first to use this.","Close","","");
		return;
	}
	divEle.innerHTML = outputHTML;
	openDialogue("dialogue-magicEmblem-upgradeSpell");
}


function refreshPresetIcons()
{
	if(knightsQuest2 > 1 || knightsQuest2 == -1)
	{
		var htmlOutput = "";
		document.getElementById("equipment-presets-area").style.display = "";
		var backgroundColor = "";
		var borderColor = "";
		var iconImage = "";
		
		for(var i = 1; i <= 6; i++)
		{
			htmlOutput += "<td style='text-align:center'>";
			var cssChosen = getCSSForPresetIcons(window["preset"+i+"Color"]);
			htmlOutput += "<div id='preset-button-equipment-"+i+"' onclick='loadPresetDialogue("+i+")' class='preset-button' "+cssChosen+"><img src='images/"+window["preset"+i+"Icon"]+".png' class='img-small' /></div>";
			htmlOutput += "</td>";
		}
		
		document.getElementById("equipment-presets-area-tr").innerHTML = htmlOutput;
	}
	
	setActivePresetsInidicator(activePreset, "equipment");
}


function refreshPresetIconsInCombat()
{
	if(knightsQuest2 > 1 || knightsQuest2 == -1)
	{
		var htmlOutput = "";
		var backgroundColor = "";
		var borderColor = "";
		var iconImage = "";
		
		for(var i = 1; i <= 6; i++)
		{
			htmlOutput += "<td style='text-align:center'>";
			var cssChosen = getCSSForPresetIcons(window["preset"+i+"Color"]);
			htmlOutput += "<div id='preset-button-combat-"+i+"' onclick='sendBytes(\"LOAD_PRESETS="+i+"\")' class='preset-button' "+cssChosen+"><img src='images/"+window["preset"+i+"Icon"]+".png' class='img-small' /></div>";
			htmlOutput += "</td>";
		}
		
		document.getElementById("equipment-presets-area-tr-combat").innerHTML = htmlOutput;
	}
	
	setActivePresetsInidicator(activePreset, "combat");
}

function loadPresetDialogue(presetId)
{
	if(presetHint == 0 && knightsQuest2 == -1)
	{
		sendBytes("PRESET_HINT");
	}
	else
	{
		document.getElementById('dialgoue-presets-load').setAttribute("onclick","sendBytes('LOAD_PRESETS="+presetId+"');closeSmittysDialogue('dialogue-presets');")
		document.getElementById('dialgoue-presets-save').setAttribute("onclick","sendBytes('SET_PRESETS="+presetId+"');closeSmittysDialogue('dialogue-presets');")
		document.getElementById('dialgoue-presets-changeIcon').setAttribute("onclick","changePresetIcon('"+presetId+"');closeSmittysDialogue('dialogue-presets');")
		document.getElementById('dialgoue-presets-changeColor').setAttribute("onclick","changePresetColor('"+presetId+"');closeSmittysDialogue('dialogue-presets');")
		openDialogue("dialogue-presets");
	}
}

function changePresetIcon(presetId)
{
	var divArea = document.getElementById('dialogue-presets-changeIcon-area');
	
	var imgNameIcon = "";
	var htmlOutput = "";
	
	
	imgNameIcon = "swordIcon";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "bow";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "staff";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "poisonIcon";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "heartIcon";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "goldBody";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "bearFurBody";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "freezeCombatPotionIcon";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	imgNameIcon = "ghostScanIcon";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_ICON="+presetId+"~"+imgNameIcon+"\");closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;border:1px solid grey;padding:5px;margin:10px;'><img src='images/"+imgNameIcon+".png' class='img-small-medium' /></div>"
	
	divArea.innerHTML = htmlOutput;
	openDialogue("dialogue-presets-changeIcon");
}

function changePresetColor(presetId)
{
	var divArea = document.getElementById('dialogue-presets-changeIcon-area');
	
	var colorChosen = "";
	var htmlOutput = "";
	
	colorChosen = "red";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	colorChosen = "green";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	colorChosen = "blue";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	colorChosen = "darkGreen";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	colorChosen = "pink";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	colorChosen = "orange";
	htmlOutput += "<div onclick='sendBytes(\"CHANGE_PRESET_COLOR="+presetId+"~"+colorChosen+"\"); closeSmittysDialogue(\"dialogue-presets-changeIcon\");' style='display:inline-block;cursor:pointer;padding:5px;margin:10px;'><img " +getCSSForPresetIcons(colorChosen) +" src='images/none.png' class='img-small-medium' /></div>"
	
	
	divArea.innerHTML = htmlOutput;
	openDialogue("dialogue-presets-changeIcon");
}

function getCSSForPresetIcons(colorChosen)
{
	if(colorChosen == "red")
	{
		var bgColor = "#b32400";
		var borderColor = "#801a00";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
	
	if(colorChosen == "green")
	{
		var bgColor = "#00b300";
		var borderColor = "#008000";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
	
	if(colorChosen == "blue")
	{
		var bgColor = "#007fcf";
		var borderColor = "#00548a";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
	
	if(colorChosen == "darkGreen")
	{
		var bgColor = "#808000";
		var borderColor = "#4d4d00";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
	
	if(colorChosen == "pink")
	{
		var bgColor = "#ffccff";
		var borderColor = "#b300b3";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
	
	if(colorChosen == "orange")
	{
		var bgColor = "#cc6600";
		var borderColor = "#804000";
		return "style='background-color:"+bgColor+";border:1px solid "+borderColor+"'";
	}
}

function openChangeSpellUpgradeDialogue()
{
	var divEle = document.getElementById("magicEmblem-table");
	
	var outputHTML = "";
	
	var spellName = "fireSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
		upgradeDesc = "";
		var upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");'  class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
		if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	spellName = "reflectSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
	upgradeDesc = "";
	upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");' class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	spellName = "teleportSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
	upgradeDesc = "";
	upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");' class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	spellName = "thunderStrikeSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
	upgradeDesc = "";
	upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");' class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	spellName = "lifeStealSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
	upgradeDesc = "";
	upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");' class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	
	spellName = "sandstormSpell";
	if(window[spellName + "Upgraded"] == 1)
	{
	upgradeDesc = "";
	upgradeBtn = "<span onclick='closeSmittysDialogue(\"dialogue-magicEmblem-upgradeSpell\");openMagicEmblemDialogue(\""+spellName+"\");' class='table-upgrade-magicEmblem-upgradeBtn'>Remove Upgrade</span>"
	if(window[spellName] > 0) { outputHTML += "<table class='table-upgrade-magicEmblem'><tr>";outputHTML += "<td>";outputHTML += "<img src='images/"+spellName+".png' class='img-small' />";outputHTML += "</td>";outputHTML += "<td>";outputHTML += upgradeDesc;outputHTML += "</td>";outputHTML += "<td style='text-align:right;'>"; outputHTML += upgradeBtn; outputHTML += "</td>"; outputHTML += "</tr></table>";}
	}
	
	if(outputHTML.length == 0)
	{
		confirmDialogue("90%","You need to unlock a spell first to use this.","Close","","");
		return;
	}
	divEle.innerHTML = outputHTML;
	openDialogue("dialogue-magicEmblem-upgradeSpell");
}

function increaseLampToRub()
{
	var currentNumber = parseInt(document.getElementById("lamps-to-rub").innerHTML);
	currentNumber++;
	if(xpLamp10k >= currentNumber) document.getElementById("lamps-to-rub").innerHTML = currentNumber;
}

function decreaseLampToRub()
{
	var currentNumber = parseInt(document.getElementById("lamps-to-rub").innerHTML);
	currentNumber--;
	if(xpLamp10k >= currentNumber && currentNumber > 0) document.getElementById("lamps-to-rub").innerHTML = currentNumber;
}

function maxLampToRub()
{
	document.getElementById("lamps-to-rub").innerHTML = xpLamp10k;
}

function getTotalBuffsOwned()
{
	 if(totalDonations >= 96)
		 return 8;
	 else if(totalDonations >= 64)
		 return 7;
	 else if(totalDonations >= 48)
		 return 6;
	  else if(totalDonations >= 32)
		 return 5;
	  else if(totalDonations >= 16)
		 return 4;
	  else if(totalDonations >= 8)
		 return 3;
	  else if(totalDonations >= 4)
		 return 2;
	 else if(totalDonations >= 1)
		 return 1;
	 else
		 return 0;

}

function refreshMail(data)
{
	
	var dataArray = data.split("~");
	var htmlOuput = "";
	htmlOuput += "<center><table style='font-size:12pt;' class='table-stats' width='90%'>";
	var backgroundColorHex = "#f2f2f2";
	for(var i = 0; i < dataArray.length; i++)
	{
		var mailId = dataArray[i]; i++;
		var mailTitle = dataArray[i]; i++;
		var mailQuestion = dataArray[i]; i++;
		var mailAnswer = dataArray[i]; i++;
		var mailUnread = dataArray[i];
		
		
		
		var mailBagAreaDiv = document.getElementById("mail-bag-area"); //mail area for titles
		if(backgroundColorHex == "#f2f2f2") backgroundColorHex = "#b3b3b3"; else backgroundColorHex = "#f2f2f2";
		var mailIcon = "mail_white.png"; if(mailUnread == 1) {mailIcon = "mail_anim.gif"; backgroundColorHex = "#ffe6ff"}
		if(mailAnswer != "null") mailTitle += "<br /><i style='font-size:8pt;'>Answered</i>";
		
		
		mailQuestion = mailQuestion.replace(/(?:\r\n|\r|\n)/g, '<br>');
		mailQuestion = mailQuestion.replace(/"/g, '&quot;');

		htmlOuput += "<tr onclick='openMailMessage(\""+mailId+"\",\""+mailQuestion+"\",\""+mailAnswer+"\")' style='cursor:pointer;background-color:"+backgroundColorHex+"'>";
		htmlOuput += "<td style='border-color:grey' width='20%'>" + "<img src='images/"+mailIcon+"' class='img-small' /> "; + "</td>"
		htmlOuput += "<td style='border-color:grey' width='80%'>" + mailTitle + "</td>"
		htmlOuput += "</tr>";
	}
	htmlOuput += "</table></center>";
	document.getElementById("mail-bag-area").innerHTML = htmlOuput;
}

function encodeHTML(s) {
	
	
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/=/g, '&#61;').replace(/~/g, '&#126;');
	

}

function openMailMessage(mailId, mailQuestion, mailAnswer)
{
	var mailDetailsArea = document.getElementById("mail-bag-details-area");
	sendBytes("VIEW_MAIL=" + mailId);
	var htmlOutput = "";
	
	
	
	htmlOutput += "<div style='border:1px solid grey; background-color:#f2f2f2;padding:5px;margin:5px 10px;color:black;'>" + encodeHTML(mailQuestion).replace(/&lt;br>/g,'<br />') + "</div><br />";
	
	
	if(mailAnswer != "null") htmlOutput += "<div style='border:1px solid #006631; background-color:#e6fff2;padding:5px;margin:5px 10px;color:black;'>" + mailAnswer + "<br /><br />-Smitty</div>";
	
	mailDetailsArea.innerHTML = htmlOutput;
	navigate("mail-details");
}

function mailTextareaListener()
{
	var lengthCharacters = document.getElementById("mail-textarea").value;
	var remaning = 500 - lengthCharacters.length;
	document.getElementById("mail-send-chars-remaining").innerHTML = remaning;
}

function sendMailNow()
{
	var mailTitle = document.getElementById("mail-title-new");
	var mailDesc = document.getElementById("mail-textarea");
	
	if(mailTitle.value.length == 0 || mailTitle.value.length > 20)
	{
		confirmDialogue("90%","Your title is either too long or is empty.","Close","","");
		return;
	}
	
	if(mailDesc.value.length == 0 || mailDesc.value.length > 500)
	{
		confirmDialogue("90%","Your message is either too long or is empty.","Close","","");
		return;
	}
	
	sendBytes("NEW_MAIL=" + mailTitle.value.replace(/=/g, '&#61;').replace(/~/g, '&#126;') + "~" + mailDesc.value.replace(/=/g, '&#61;').replace(/~/g, '&#126;'));
}

function getHTMLForQuestRequirements(imgPath, part, reqs, reqsCompleted)
{
	var htmlToReturn = "";
	htmlToReturn += "<div class='main-button'>";
	htmlToReturn += "<table>";
	htmlToReturn += "<tr>";
	htmlToReturn += "<td><img src='"+imgPath+"' class='img-medium' /></td>";
	htmlToReturn += "<td style='text-align:right;padding-right:20px;color:orange'>"+"PART" + " " + part + "<span style='font-size:10pt;color:white'><hr />";
	
	for(var i = 0; i < reqs.length; i++)
	{
		var req = reqs[i];
		var completedImage = " <img src='images/x.png' class='img-tiny' />";
		if(reqsCompleted[i] == 1) completedImage = " <img src='images/check.png' class='img-tiny' />";
		
		htmlToReturn += req + completedImage + "<br />";
	}
	htmlToReturn += "</td></tr></table></div>";
	
	return htmlToReturn;
}

function loadQuestsGuidesRequirementsTab(showCompleted)
{
	var outputHTML = "";
	var divArea = document.getElementById("questGuidesArea-div");
	var testingQuest = "";
	var questsIncompleted = 0;
	var questCompletedBoolean = false;
	
	testingQuest = "chefQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		
		var req1 = "Cooking level: 10";
		var req2 = "Exploring level: 5";
		
		var req1Completed = getLevel(cookingXp) >= 10;
		var req2Completed = getLevel(exploringXp) >= 5;
		
		outputHTML += getHTMLForQuestRequirements("images/chef.png", 1, [req1,req2], [req1Completed, req2Completed])
	}
	
	testingQuest = "chefQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Have a diamond machete";
		var req2 = "Farming level: 300";
		
		var req1Completed = bloodDiamondMachete == 1 || diamondMachete == 1;
		var req2Completed = getLevel(farmingXp) >= 300;
		
		outputHTML += getHTMLForQuestRequirements("images/chef.png", 2, [req1,req2], [req1Completed, req2Completed])
	}
	
	testingQuest = "chefQuest3";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Created 5 recipes with the chef";
		
		var req1Completed = chefRecipeTotal >= 5;
		
		outputHTML += getHTMLForQuestRequirements("images/chef.png", 3, [req1], [req1Completed])
	}
	
	testingQuest = "geodeQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Have any geode on you";
		
		var req1Completed = geode1 >= 1 || geode2 >= 1 || geode3 >= 1;
		
		outputHTML += getHTMLForQuestRequirements("images/geodeMiner.png", 1, [req1], [req1Completed]);
	}
	
	testingQuest = "knightsQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Kill any monster in the fields.";
		var req2 = "Explore the forest.";
		
		var req1Completed = chickenTotal > 0 || ratTotal > 0 || beeTotal > 0;
		var req2Completed = forestsLootTotal > 0;
		
		outputHTML += getHTMLForQuestRequirements("images/knight.png", 1, [req1, req2], [req1Completed, req2Completed]);
	}
	
	testingQuest = "knightsQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Kill a shark in the ocean";
		
		var req1Completed = oceanSharkTotal > 0;
		
		outputHTML += getHTMLForQuestRequirements("images/knight.png", 2, [req1], [req1Completed]);
	}
	
	testingQuest = "silverStatueQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Completed quest: opening geode";
		var req2 = "Explored the caves 5 times";
		
		var req1Completed = geodeQuest == -1;
		var req2Completed = cavesLootTotal >= 5;
		
		outputHTML += getHTMLForQuestRequirements("images/silverStatueQuest.png", 1, [req1,req2], [req1Completed, req2Completed])
	}
	
	testingQuest = "teddyBearQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Explored the fields, forest and caves for a combined total of 30 times";
		var req2 = "Explored the forest 5 times";
		
		var req1Completed = (fieldsLootTotal + forestsLootTotal + cavesLootTotal) >= 30;
		var req2Completed = forestsLootTotal >= 5;
		
		outputHTML += getHTMLForQuestRequirements("images/teddyBear.png", 1, [req1,req2], [req1Completed, req2Completed])
	}
	
	testingQuest = "teddyBearQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Killed all enemies in the volcano";

		
		var req1Completed = (fireMageTotal > 0 && fireHawkTotal > 0 && lavaSnakeTotal > 0);

		
		outputHTML += getHTMLForQuestRequirements("images/teddyBear.png", 2, [req1], [req1Completed])
	}
	
	testingQuest = "theGemGoblinQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Sold a sapphire to the shop.";
		var req2 = "Sold an emerald to the shop.";
		var req3 = "Sold a ruby to the shop.";
		var req4 = "Sold a diamond to the shop.";
		var req5 = "Mining level: 500"
		var req1Completed = sapphiresSold > 0;
		var req2Completed = emeraldsSold > 0;
		var req3Completed = rubiesSold > 0;
		var req4Completed = diamondsSold > 0;
		var req5Completed = getLevel(miningXp) >= 500;
		
		outputHTML += getHTMLForQuestRequirements("images/gemGoblinShop.png", 1, [req1, req2, req3, req4, req5], [req1Completed, req2Completed, req3Completed, req4Completed, req5Completed])
	}
	
	testingQuest = "theGemGoblinQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Traded with the gem goblin 30 times";
		var req1Completed = gemGoblinShopTotal >= 30;
		
		outputHTML += getHTMLForQuestRequirements("images/gemGoblinShop.png", 2, [req1], [req1Completed])
	}
	
	testingQuest = "theEngineerQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Send your rocket to space at least 5 times";

		
		var req1Completed = rocketTotal >= 5;

		
		outputHTML += getHTMLForQuestRequirements("images/engineer.png", 1, [req1], [req1Completed])
	}
	
	testingQuest = "theEngineerQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Collected at least 4 plasma";

		
		var req1Completed = plasmaTotal >= 4;

		
		outputHTML += getHTMLForQuestRequirements("images/engineer.png", 2, [req1], [req1Completed])
	}
	

	
	testingQuest = "theGamblerQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Exploring level: 50";

		
		var req1Completed =  getLevel(exploringXp) >= 50;

		
		outputHTML += getHTMLForQuestRequirements("images/gambler.png", 1, [req1], [req1Completed])
	}
	
	testingQuest = "theLootingRingQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Have a diamond on you";
		var req2 = "Killed a lava snake in the volcano";
		
		var req1Completed = diamond > 0;
		var req2Completed = lavaSnakeTotal > 0;
		
		outputHTML += getHTMLForQuestRequirements("images/lootingRingWizard.png", 1, [req1,req2], [req1Completed, req2Completed])
	}
	
	testingQuest = "theLootingRingQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Own the exploring map found in deep ocean";
		
		var req1Completed = deepOceanMap > 0;

		
		outputHTML += getHTMLForQuestRequirements("images/lootingRingWizard.png", 2, [req1], [req1Completed])
	}
	
	testingQuest = "witchesPotionQuest";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Casted the fire spell in combat 10 times";
		
		var req1Completed = fireSpellTotal >= 10;

		
		outputHTML += getHTMLForQuestRequirements("images/witchesPotion.png", 1, [req1], [req1Completed])
	}
	
	testingQuest = "witchesPotionQuest2";
	if(window[testingQuest] != -1 || showCompleted)
	{
		questsIncompleted++;
		var req1 = "Own a blood diamond berserker amulet";
		var req2 = "Explored the castle once";
		
		var req1Completed = bloodDiamondStoneAmulet > 0 || amulet == "bloodDiamondStoneAmulet" || showCompleted;
		var req2Completed = castleLootTotal > 0;

		
		outputHTML += getHTMLForQuestRequirements("images/witchesPotion.png", 2, [req1, req2], [req1Completed, req2Completed])
	}
	
	if(!showCompleted)
	{
		outputHTML = '<center><span id="special-effects-btn" onclick="loadQuestsGuidesRequirementsTab(true)" class="special-effects-btn" style="color:cyan;">Show Completed Quests</span></center><br />' + outputHTML;
	}
	
	divArea.innerHTML = outputHTML;
}

function clicksLobsterCage()
{
	var imgSuperCageLowering = "lobsterCageLowering.png"; if(superLobsterCage > 0) imgSuperCageLowering = "superLobsterCageLowering.png";
	var imgSuperCageRising = "lobsterCageRising.png"; if(superLobsterCage > 0) imgSuperCageRising = "superLobsterCageRising.png";
	
	if(lobsterCageTimer > 0)
	{
		if(lobsterCageActive == 0)
			confirmDialogue("90%","<center><img src='images/"+imgSuperCageLowering+"' class='img-huge' /></center><br />You are currently lowering your lobster cages on the deep ocean floors.<br /><br />They will start collecting lobsters in: <b>"+formatTime(lobsterCageTimer)+"</b>","Close","","");
		else if(lobsterCageActive == 1)
			confirmDialogue("90%","<center><img src='images/"+imgSuperCageRising+"' class='img-huge' /></center><br />You are currently rising your lobster cages back to the surface.<br /><br />You will obtain your raw lobsters in: <b>"+formatTime(lobsterCageTimer)+"</b>","Close","","");
	}
	else
	{
		if(lobsterCageActive == 0)
			confirmDialogue("90%","<center><img src='images/"+imgSuperCageLowering+"' class='img-huge' /></center><br />Send your lobster cage on the deep ocean's floor? This takes 12 hours.","Lower Lobster Cages","Cancel","LOWER_LOBSTER_CAGES");
		else if(lobsterCageActive == 1)
			confirmDialogue("90%","<center><img src='images/"+imgSuperCageRising+"' class='img-huge' /></center><br />Rise your lobster cages to the surface?  This takes 8 hours.","Collect Lobster Cages","Cancel","RISE_LOBSTER_CAGES");
	}
}

function setActivePresetsInidicator(presetId, screenType)
{
	if(knightsQuest2 > 1 || knightsQuest2 == -1)
	{
		
		if(presetId > 0)
		{
			if(document.getElementById("preset-button-"+screenType+"-" + presetId) != null)
			document.getElementById("preset-button-"+screenType+"-" + presetId).style.border  = "3px solid lime";
		}
	}
	
}

function refreshMailToAnswer(rawData)
{
	var dataArray = rawData.split("~");
	var areaForHTML = document.getElementById("answer-mail-area");
	var outputHTML = "";
	
	for(var i = 0; i < dataArray.length; i++)
	{
		
		var mailIdFound = dataArray[i]; i++;
		var playerIdFound = dataArray[i]; i++;
		var playerUsernameFound = dataArray[i]; i++;
		var playerTotalDonations = dataArray[i]; i++;
		var playerMailTitle = dataArray[i]; i++;
		var playerMailQuestion = dataArray[i];
		
		outputHTML += "<div id='div-mail-answer-"+mailIdFound+"' style='border:1px solid silver;margin:20px;padding:20px;background-color:silver;color:black;'>";
		outputHTML += "<b>Player: </b> " + playerUsernameFound + " ("+playerIdFound+") --> " + formatNumber(playerTotalDonations);
		outputHTML += "<br /><br />";
		outputHTML += "<b><u>Title</u></b><br />" + strip(playerMailTitle);
		outputHTML += "<br />";
		outputHTML += "<br />";
		outputHTML += "<b><u>Question</u></b><br />" + strip(playerMailQuestion);
		outputHTML += "<br />";
		outputHTML += "<br />";
		outputHTML += "<textarea placeholder='no [enter] key (line breaks) NO EQUAL SIGN NO QUOTES' id='text-area-"+mailIdFound+"' cols=40 rows=5></textarea>"
		outputHTML += "<br />"
		outputHTML += "<input type='button' style='margin-top:5px;width:80px;' onclick='sendMailAnswer("+mailIdFound+")' value='Send' />";
		outputHTML += "</div>"
	}
	
	outputHTML += "<hr />"
	outputHTML += "<input type='button' style='margin-top:5px;' onclick='sendBytes(\"REPULL_MAIL\")' value='REPULL_MAIL' />";
	
	areaForHTML.innerHTML = outputHTML;
}

function strip(html)
{
   var doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}


function sendMailAnswer(mailIdFound)
{
	confirmDialogue("90%","Confirm","Answer Mail","Cancel","ANSWER_MAIL=" + document.getElementById("text-area-" + mailIdFound).value + "~" + mailIdFound);
	document.getElementById("div-mail-answer-" + mailIdFound).style.display = "none";
}

function loadTutorial(typeFound)
{
	switch(typeFound)
	{
		case "shop":
			navigate("tutorial-shop");
		break;
		case "shop2":
			navigate("tutorial-shop2");
		break;
		case "shop3":
			navigate("tutorial-shop3");
		break;
		case "mining":
			navigate("tutorial-mining");
		break;
		case "crafting":
			navigate("tutorial-crafting");
		break;
		case "woodcutting":
			navigate("tutorial-woodcutting");
		break;
		case "farming":
			navigate("tutorial-farming");
		break;
		case "tutorialMissions":
			navigate("tutorial-missions");
		break;
		case "bcShop":
			navigate("tutorial-bcShop");
		break;
		case "capacity":
			navigate("tutorial-capacity");
		break;
		case "exploring":
			document.getElementById("tab-tutorial-exploring-img").src= "images/" + heroGender + "Explorer.png";
			document.getElementById("tab-tutorial-exploring-img2").src= "images/" + heroGender + "Explorer.png";
			document.getElementById("tab-tutorial-exploring-img3").src= "images/" + heroGender + "Explorer.png";
			navigate("tutorial-exploring");
		break;
		case "exploringAreas":
			document.getElementById("tab-tutorial-exploring-img").src= "images/" + heroGender + "Explorer.png";
			document.getElementById("tab-tutorial-exploring-img2").src= "images/" + heroGender + "Explorer.png";
			document.getElementById("tab-tutorial-exploring-img3").src= "images/" + heroGender + "Explorer.png";
			navigate("tutorial-exploringAreas");
		break;
		
		case "cooking":
			navigate("tutorial-cooking");
		break;
		
		
	}
}

function clicksAutoTickHealBuff()
{
	if(totalDonations < 96)
	{
		confirmDialogue('90%','You do not have this unlocked.','Close','','');
		return;
	}
	
	if(autoTickHealOn == 1) document.getElementById("dialogue-autoTickHeal-selectPriority-Area").style.display = "";
	refreshAutoTickHealPriorityTable();
	openDialogue("dialogue-autoTickHeal");
}

function refreshAutoTickHealPriorityTable()
{
	if(autoTickHealPriority == 0)
	{
		document.getElementById("dialogue-autoTickHeal-priority-hpCombatPotion").innerHTML = 1;
		document.getElementById("dialogue-autoTickHeal-priority-superHpCombatPotion").innerHTML = 2;
	}
	else if(autoTickHealPriority == 1)
	{
		document.getElementById("dialogue-autoTickHeal-priority-hpCombatPotion").innerHTML = 2;
		document.getElementById("dialogue-autoTickHeal-priority-superHpCombatPotion").innerHTML = 1;
	}
}

