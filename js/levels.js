function getLevel(playerXP)
{
	if(playerXP == 0)
		return 1;
	
	for(var i = 1; i <= 10000; i++)
	{
		var power = 3 + (i / 100000);
		var xp = Math.pow(i, power);
		if(playerXP < xp)
			return i - 1;
	}
	
	return 10000;
}

function getXpNeeded(level)
{
	return parseInt(Math.pow(level, 3 + (level / 100000)));
}

function getHTMLXPTable()
{
	var htmlOutput = "";
	
	htmlOutput += "<table style='background:white;' border=1>";
	
	htmlOutput += "<tr><th>Level</th><th>XP</th><th>Delta XP</th><tr>";
	for(var i = 1; i <= 10000; i++)
	{
		var xpNeeded = getXpNeeded(i);
		var currentLevel = i;
		var prevLevel = currentLevel - 1;
		if(prevLevel == 0) prevLevel = 1;
		
		htmlOutput += "<tr><td>Level " + i + "</td><td>"+xpNeeded+"</td><td>" + (xpNeeded - getXpNeeded(prevLevel)) + "</td>";
	}
	htmlOutput += "</table>";
	
	return htmlOutput;
}

function refreshXpBar(skillChosen)
{
	document.getElementById("globalLevel-status").innerHTML = getGlobalLevel();
	
	var currentXp = window[skillChosen + "Xp"];
	var nextLevelXp = getXpNeeded(getLevel(currentXp) + 1);
	var prevLevelXp = getXpNeeded(getLevel(currentXp));
	
	
	var widthFound = ((currentXp-prevLevelXp)/(nextLevelXp - prevLevelXp)) * 100;
	
	if(widthFound > 100) widthFound = 100;
	
	if(getLevel(currentXp) >= 10000)
	{
		document.getElementById("inner-skill-xp-bar-" + skillChosen).style.background = "none";
		document.getElementById("inner-skill-xp-bar-" + skillChosen).style.backgroundColor = "cyan";
	}
	
	document.getElementById("inner-skill-xp-bar-" + skillChosen).style.minWidth = widthFound + "%";
	document.getElementById("inner-skill-xp-bar-" + skillChosen).style.maxWidth = widthFound + "%";
	
	refreshCraftingTabXpBar(skillChosen);
}

function refreshCraftingTabXpBar(skillChosen)
{
	document.getElementById("globalLevel-status").innerHTML = getGlobalLevel();
	
	var currentXp = window[skillChosen + "Xp"];
	document.getElementById(skillChosen + "-inner-level-label").innerHTML = getLevel(currentXp);
	
	var nextLevelXp = getXpNeeded(getLevel(currentXp) + 1);
	var prevLevelXp = getXpNeeded(getLevel(currentXp));
	
	
	var widthFound = ((currentXp-prevLevelXp)/(nextLevelXp - prevLevelXp)) * 100;
	
	if(widthFound > 100) widthFound = 100;
	
	if(getLevel(currentXp) >= 10000)
	{
		document.getElementById(skillChosen + "-inner-xp-bar-2").style.background = "none";
		document.getElementById(skillChosen + "-inner-xp-bar-2").style.backgroundColor = "cyan";
	}
	
	document.getElementById(skillChosen + "-inner-xp-bar-2").style.minWidth = widthFound + "%";
	document.getElementById(skillChosen + "-inner-xp-bar-2").style.maxWidth = widthFound + "%";
}

function getGlobalLevel()
{
	var globalLevel = 0;
	if(miningUnlocked == 1)
		globalLevel += getLevel(miningXp);
	if(craftingUnlocked == 1)
		globalLevel += getLevel(craftingXp);
	if(woodcuttingUnlocked == 1)
		globalLevel += getLevel(woodcuttingXp);
	if(farmingUnlocked == 1)
		globalLevel += getLevel(farmingXp);
	if(brewingUnlocked == 1)
		globalLevel += getLevel(brewingXp);
	if(exploringUnlocked == 1)
		globalLevel += getLevel(exploringXp);
	if(cookingUnlocked == 1)
		globalLevel += getLevel(cookingXp);
	
	return globalLevel;
}

function animateLevelup(skillChosen, level)
{
	playSound("success3SoundGlobal");
	var mainColor = "#1a1a1a";
	var mainColorLight = "#4d4d4d";
	var mainColorBrown = "#4d2600";
	var mainColorDarkGreen = "#1a3300";
	var mainColorDarkLighterGreen = "#004d00";
	var mainColorDarkPurple = "#330033";
	var mainColorDarkLighterPurple = "#660066";
	var mainColorDarkLightGold = "#4d3d00";
	
	var colorChosen = "black";
	
	switch(skillChosen)
	{
		case "mining":
			colorChosen = mainColorBrown;
		break;
		case "crafting":
			colorChosen = mainColor;
		break;
		case "woodcutting":
			colorChosen = mainColorDarkGreen;
		break;
		case "farming":
			colorChosen = mainColorDarkGreen;
		break;
		case "brewing":
			colorChosen = mainColorDarkPurple;
		break;
		case "exploring":
			colorChosen = mainColorDarkLightGold;
		break;
	}
	
	document.getElementById("levelup-container").style.backgroundColor = colorChosen;
	document.getElementById("img-levelup").src = "images/" + skillChosen + "Skill.png";
	document.getElementById("label-levelup").innerHTML = "<u>Congratulations!</u><br /><br />Your " + skillChosen + " skill is now level: " + level;
	navigate("levelup");

	
	$('#levelup-container').animate({backgroundColor: 'white'}, 500, function() {
	
		$('#levelup-container').animate({backgroundColor: colorChosen}, 500, function() {
			
			$('#levelup-container').animate({backgroundColor: 'white'}, 500, function() {
			
				$('#levelup-container').animate({backgroundColor: colorChosen}, 500, function() {
			
					$('#levelup-container').animate({backgroundColor: 'white'}, 500, function() {
			
						$('#levelup-container').animate({backgroundColor: colorChosen}, 500, function() {
			
							$('#levelup-container').animate({backgroundColor: 'white'}, 500, function() {
				
								$('#levelup-container').animate({backgroundColor: colorChosen}, 500, function() {
				
							});
							
							});
							
						});
					});
				});
			
			});
			
		});
	});
}


function lampSelectSkill(skillChosen)
{
	resetLampChosen();
	document.getElementById("lamp-"+skillChosen+"-check-img").style.display = "";
	document.getElementById("lamp-skill-chosen").value = skillChosen;
	document.getElementById("rub-lamp-button").disabled = false;
}

function resetLampChosen()
{
	document.getElementById("rub-lamp-button").disabled = true;
	document.getElementById("lamp-mining-check-img").style.display = "none";
	document.getElementById("lamp-crafting-check-img").style.display = "none";
	document.getElementById("lamp-woodcutting-check-img").style.display = "none";
	document.getElementById("lamp-farming-check-img").style.display = "none";
	document.getElementById("lamp-brewing-check-img").style.display = "none";
	document.getElementById("lamp-exploring-check-img").style.display = "none";
	document.getElementById("lamp-cooking-check-img").style.display = "none";
}


function operateTimeMachineActive()
{
	
	document.getElementById("timeMachine-dimmer").style.display = ""
	$('#timeMachine-dimmer').animate({backgroundColor: 'black'}, 3000, function() {
	$('#timeMachine-dimmer').animate({backgroundColor: 'none'}, 500, function() {
			if(document.getElementById("timeMachine-dimmer").style.display != "none")
			{
			document.getElementById("timeMachine-dimmer").style.display = "none";
			document.getElementById("timeMachine-dimmer").style.backgroundColor = "";
			confirmDialogue('90%','<center><img src="images/timeMachine.png" class="img-large" /><hr /><br />A certain amount of time has passed.</center>','Close','','')
			playSound("mission1SoundGlobal");
			}
	});
	});
}

function skipTimeMachineAnimation()
{
	document.getElementById("timeMachine-dimmer").style.display = "none";
	document.getElementById("timeMachine-dimmer").style.backgroundColor = "";
	confirmDialogue('90%','<center><img src="images/timeMachine.png" class="img-large" /><hr /><br />A certain amount of time has passed.</center>','Close','','')
	playSound("mission1SoundGlobal");
}