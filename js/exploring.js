var exploringAreasGlobal = [];
var exploringAreasIndexGlobal = [];
var exploringMetalDetectorStatuesGlobal= ["bronzeStatueMetalDetector","bronzeStatueMetalDetector2","bronzeStatueMetalDetector3","bronzeStatueMetalDetector4","ironStatueMetalDetector","ironStatueMetalDetector2","ironStatueMetalDetector3","ironStatueMetalDetector4","silverStatueMetalDetector","silverStatueMetalDetector2","silverStatueMetalDetector3","silverStatueMetalDetector4","goldStatueMetalDetector","goldStatueMetalDetector2","goldStatueMetalDetector3","goldStatueMetalDetector4","promethiumStatueMetalDetector","promethiumStatueMetalDetector2","promethiumStatueMetalDetector3","promethiumStatueMetalDetector4","titaniumStatueMetalDetector","titaniumStatueMetalDetector2","titaniumStatueMetalDetector3","titaniumStatueMetalDetector4","bronzeSuperStatueMetalDetector","bronzeSuperStatueMetalDetector2","bronzeSuperStatueMetalDetector3","bronzeSuperStatueMetalDetector4","ironSuperStatueMetalDetector","ironSuperStatueMetalDetector2","ironSuperStatueMetalDetector3","ironSuperStatueMetalDetector4","silverSuperStatueMetalDetector","silverSuperStatueMetalDetector2","silverSuperStatueMetalDetector3","silverSuperStatueMetalDetector4","goldSuperStatueMetalDetector","goldSuperStatueMetalDetector2","goldSuperStatueMetalDetector3","goldSuperStatueMetalDetector4","promethiumSuperStatueMetalDetector","promethiumSuperStatueMetalDetector2","promethiumSuperStatueMetalDetector3","promethiumSuperStatueMetalDetector4","titaniumSuperStatueMetalDetector","titaniumSuperStatueMetalDetector2","titaniumSuperStatueMetalDetector3","titaniumSuperStatueMetalDetector4","bronzeMegaStatueMetalDetector","bronzeMegaStatueMetalDetector2","bronzeMegaStatueMetalDetector3","bronzeMegaStatueMetalDetector4","ironMegaStatueMetalDetector","ironMegaStatueMetalDetector2","ironMegaStatueMetalDetector3","ironMegaStatueMetalDetector4","silverMegaStatueMetalDetector","silverMegaStatueMetalDetector2","silverMegaStatueMetalDetector3","silverMegaStatueMetalDetector4","goldMegaStatueMetalDetector","goldMegaStatueMetalDetector2","goldMegaStatueMetalDetector3","goldMegaStatueMetalDetector4"]
exploringCurrentAreaMaxIndexChosenGlobal = 0;

function ExploringArea(areaName, cooldown, energyNeeded, levelNeeded, index)
{
    this.areaName = areaName;
	this.cooldown = cooldown;
    this.energyNeeded = energyNeeded;
	this.index = index;
	this.levelNeeded = levelNeeded;
}

function initExploring()
{
	var areaName = "";
	var cooldown = 0;
	var energyNeeded = 0;
	var level = 0;
	
	var index = 0;
	if(exploringAreasGlobal.length == 0)
	{
		areaName = "fields";
		cooldown = 900;
		energyNeeded = 50;
		level = 1;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded, level,index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "forests";
		cooldown = 1800;
		energyNeeded = 250;
		level = 10;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded, level,index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "caves";
		cooldown = 3600;
		energyNeeded = 1000;
		level = 30;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "volcano";
		cooldown = 3600 +1800;
		energyNeeded = 5000;
		level = 50;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "northernFields";
		cooldown = 3600 * 2;
		energyNeeded = 8000;
		level = 75;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "hauntedMansion";
		cooldown = 3600 * 3;
		energyNeeded = 20000;
		level = 110;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "desert";
		cooldown = 3600 * 4 + 1800;
		energyNeeded = 50000;
		level = 160;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "ocean";
		cooldown = 3600 * 6;
		energyNeeded = 120000;
		level = 200;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "jungle";
		cooldown = 3600 * 8;
		energyNeeded = 200000;
		level = 250;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "dungeonEntrance";
		cooldown = 3600 * 10;
		energyNeeded = 500000;
		level = 300;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "dungeon";
		cooldown = 3600 * 12;
		energyNeeded = 1000000;
		level = 400;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "dungeonCoffin";
		cooldown = 3600 * 14;
		energyNeeded = "???";
		level = 480;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "castle";
		cooldown = 3600 * 15;
		energyNeeded = 3000000;
		level = 530;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "cemetery";
		cooldown = 3600 * 16;
		energyNeeded = 7000000;
		level = 600;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "factory";
		cooldown = 3600 * 18;
		energyNeeded = 10000000;
		level = 700;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "hauntedWoods";
		cooldown = 3600 * 20;
		energyNeeded = 14000000;
		level = 800;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "deepOcean";
		cooldown = 3600 * 23;
		energyNeeded = 20000000;
		level = 1000;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		areaName = "bloodMoon";
		cooldown = 3600 * 23;
		energyNeeded = "???";
		level = 1250;
		exploringAreasGlobal[areaName] = (new ExploringArea(areaName, cooldown, energyNeeded,level, index));
		exploringAreasIndexGlobal[index] = (new ExploringArea(areaName, cooldown, energyNeeded,level,index)); index++;
		
		exploringCurrentAreaMaxIndexChosenGlobal = index;
	}
	



	$("#img-hauntedWoods1").on("click", function (event) {
		 
	if(curiousGhostActive == 1) {sendBytes('FIGHT_CURIOUS_GHOST'); return;}
		
	var img = document.getElementById('img-hauntedWoods1');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	var xCoord = event.pageX - this.offsetLeft;
	var yCoord = event.pageY - this.offsetTop;
			
	//alert("X Coordinate: " + (xCoord) + "<br/> Y Coordinate: " + (yCoord));
	var pixelData = canvas.getContext('2d').getImageData(xCoord, yCoord, 1, 1).data;
	
	
	
	if(pixelData[0] > 0 && pixelData[1] > 0 && pixelData[2] > 0)
	{
		sendBytes("HAUNTED_WOODS_1")
	}
	
	});
 
 
}

function refreshSlots(slotVariable)
{
	
	if(window[slotVariable] == 0)
		img = "none";
	else
		img = window[slotVariable];
	
	if(img == "none")
		img = slotVariable + "Slot";
	
	
	document.getElementById("equipment-" + slotVariable + "-slot").src = "images/" + getPngOrGif(img, false);
}

function refreshHeroGraphics()
{
	var genderFound = "Female";
	if(heroGender == "male")
		genderFound = "Male";
	
	if(weapon == 0 || weapon == "none")
	{
		document.getElementById("explorer-weapon-img").src = "images/noneWield.png";
		document.getElementById("explorer-weapon-img2").src = "images/noneWield.png";
	}
	else
	{
		document.getElementById("explorer-weapon-img").src = "images/"+weapon+genderFound+"Wield" + getPngOrGif(weapon, true);
		document.getElementById("explorer-weapon-img2").src = "images/"+weapon+genderFound+"Wield" + getPngOrGif(weapon, true);
	}
}
function setAreaScreenByIndex(areaIndex)
{
	var areaName = exploringAreasIndexGlobal[areaIndex].areaName;
	
	if(areaIndex > 0)
	{
		var prevArea = exploringAreasIndexGlobal[areaIndex - 1].areaName;

		if(window[prevArea + "Map"] == 0)
		{
			if(researcher == 0)
			{
				confirmDialogue("90%","<center><img src='images/researcher.png' class='img-medium' /> <br /><br /> \"I will need you to research more on exploring to show you how to unlock other areas.\"<br /><br /><i>Hire the researcher from the game shop.</i>","Close","","")
				exploringCurrentAreaIndexChosenGlobal = 0;
				return;
			}
			
			if(exploringResearchLevel < 2)
			{
				confirmDialogue("90%","<center><img src='images/researcher.png' class='img-medium' /> <br /><br /> \"I will need you to research more on exploring to show you how to unlock other areas.\"","Close","","")
				exploringCurrentAreaIndexChosenGlobal = 0;
				return;
			}
			
			if(prevArea + "Map" == "fieldsMap")
			{
				confirmDialogue("90%","<center><img src='images/fieldsMap.png' class='img-medium' /> <br /><br /> You need to find a map from the loot bags to venture into the next area.","Close","","")
				exploringCurrentAreaIndexChosenGlobal = 0;
				return;
			}
			exploringCurrentAreaIndexChosenGlobal--;
			if(bloodCrystals >= 500) document.getElementById("buy-map-checkmark").src = "images/check.png"; else document.getElementById("buy-map-checkmark").src = "images/x.png";
			document.getElementById("current-area-selected").value = prevArea;
			openDialogue("dialogue-area-locked");
			
			return;
		}
	}
	sendBytes('SET_EXPLORING_MAP=' + areaIndex);
	setAreaScreen(areaName);
}

function confirmBuyExploringMap(areaChosen)
{
	confirmDialogue('90%','Unlock the next exploring area for 500 blood crystals?','Unlock','Close','BUY_AREA_MAP=' + areaChosen);
}
function getCooldownReduction(timeIn)
{
	if(exploringSpeedRingOn == 1)
		timeIn *= 0.75;
	
	return parseInt(timeIn);
}

function getEnergyReduction(energyIn)
{
	if(isNaN(energyIn)) return energyIn;
	else
	return parseInt(energyIn);
}

var currentScreenAreaGlobal = "";
function setAreaScreen(exploringAreaName)
{
	var areaNameFound = exploringAreasGlobal[exploringAreaName].areaName;
	var energyFound = getEnergyReduction(exploringAreasGlobal[exploringAreaName].energyNeeded);
	var cooldownFound = getCooldownReduction(exploringAreasGlobal[exploringAreaName].cooldown);
	var levelNeeded = exploringAreasGlobal[exploringAreaName].levelNeeded;
	var indexFound = exploringAreasGlobal[exploringAreaName].index;
	currentScreenAreaGlobal = areaNameFound;
	
	
	if(indexFound == 0)
	{
		document.getElementById("exploring-areas-back-arrow-img").src = "images/back.png";
		document.getElementById("explore-back-skip-td").style.display = "none";
	}
	else
	{
		document.getElementById("explore-back-skip-td").style.display = "";
		document.getElementById("exploring-areas-back-arrow-img").src = "images/back_gold.png";
	}
	
	if(indexFound >= exploringCurrentAreaMaxIndexChosenGlobal - 1)
	{
		document.getElementById("exploring-areas-foward-arrow-img").style.visibility = "hidden";
	}
	else
	{
		if(window[areaNameFound + "Map"] == 0)
			document.getElementById("exploring-areas-foward-arrow-img").src = "images/locked.png";
		else
			document.getElementById("exploring-areas-foward-arrow-img").src = "images/foward_gold.png";
		
		document.getElementById("exploring-areas-foward-arrow-img").style.visibility = "visible";
	}
	
	if(totalDonations >= 32 && !isNaN(energyFound))
		energyFound *= 0.8;
	
	var exploringAreaLabel = getItemName(areaNameFound).toUpperCase();
	document.getElementById("exploring-area-title").innerHTML = "<b>Click to Explore: </b>" + exploringAreaLabel;
	document.getElementById("exploring-area-cd").innerHTML = formatTime(cooldownFound);
	
	if(forestsMap == 1) document.getElementById("explore-select-td").style.display = "";
	
	if(isNaN(energyFound)) document.getElementById("exploring-area-energy").innerHTML = energyFound;
	else document.getElementById("exploring-area-energy").innerHTML = formatNumber(energyFound);
	
	document.getElementById("exploring-area-level").innerHTML = formatNumber(levelNeeded);
	document.getElementById("exploring-area-background-img").src = "images/" + areaNameFound + ".png";
	if(areaNameFound == "bloodMoon" && bloodMoonTimer > 0) document.getElementById("exploring-area-background-img").src = "images/bloodMoonActive.png";
	if(areaNameFound == "hauntedMansion" && bloodMoonTimer > 0) document.getElementById("exploring-area-background-img").src = "images/hauntedMansionBM.png";
	document.getElementById("body-tag-child").style.backgroundImage = "none";
	document.getElementById("body-tag-child").style.border = "none";
	
	var greenColor = lightGreenColor;
	var redColor = lightRedColor;
	var canExplore = true;
	
	if(!isNaN(energyFound))
	if(energy < energyFound)
	{
		canExplore = false;
		document.getElementById("exploring-area-energy").style.color = redColor;
	}
	else
		document.getElementById("exploring-area-energy").style.color = greenColor;
	
	if(explorerCooldown > 0)
	{
		canExplore = false;
		document.getElementById("exploring-area-cd").style.color = redColor;
	}
	else
		document.getElementById("exploring-area-cd").style.color = greenColor;
	
	if(getLevel(exploringXp) < levelNeeded)
	{
		canExplore = false;
		document.getElementById("exploring-area-level-td").style.color = redColor;
	}
	else
		document.getElementById("exploring-area-level-td").style.color = greenColor;
	
	if(canExplore)
		document.getElementById("exploring-area-title").style.color = greenColor;
	else
		document.getElementById("exploring-area-title").style.color = redColor;
	
	if(goblinCousin > 0)
	{
		if(areaNameFound == "dungeonCoffin" || areaNameFound == "bloodMoon")
			document.getElementById("exploring-area-button-goblinCousin").style.display = "none";
		else
			document.getElementById("exploring-area-button-goblinCousin").style.display = "";
		
		document.getElementById("exploring-area-button-goblinCousin").onclick = function() {confirmDialogue("90%","<center><img src='images/goblinCousin.png' class='img-large' /> <hr /> Explore with goblin?</center>","Explore","Cancel","EXPLORE_GOBLIN="+areaNameFound) }
	}
		
	
	if(areaNameFound == "dungeonCoffin")
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","clicksCoffinExploring()");
		document.getElementById("exploring-area-button-2").setAttribute("onclick","clicksCoffinExploring()");
	}
		
	else if(areaNameFound == "bloodMoon")
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","clicksBloodMoonExploring()");
		document.getElementById("exploring-area-button-2").setAttribute("onclick","clicksBloodMoonExploring()");
	}
		
	else if(areaNameFound == "northernFields" && bloodMoonTimer == 0)
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/bearFurMask.png'],['Level "+levelNeeded+"', "+energyFound+",'Cold Resistant'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasColdResistance()+"],'EXPLORE','Explore')")
		document.getElementById("exploring-area-button-2").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/bearFurMask.png'],['Level "+levelNeeded+"', "+energyFound+",'Cold Resistant'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasColdResistance()+"],'EXPLORE','Explore')")
	}
		
	else if(areaNameFound == "ocean")
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/oxygenTank.png'],['Level "+levelNeeded+"', "+energyFound+",'Oxygen Tank'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasOxygenTank()+"],'EXPLORE','Explore')")
		document.getElementById("exploring-area-button-2").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/oxygenTank.png'],['Level "+levelNeeded+"', "+energyFound+",'Oxygen Tank'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasOxygenTank()+"],'EXPLORE','Explore')")
	}
		
	else if(areaNameFound == "deepOcean")
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/ancientOxygenTank.png'],['Level "+levelNeeded+"', "+energyFound+",'Ancient Oxygen Tank'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasAncientOxygenTank()+"],'EXPLORE','Explore')")
		document.getElementById("exploring-area-button-2").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/ancientOxygenTank.png'],['Level "+levelNeeded+"', "+energyFound+",'Ancient Oxygen Tank'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+hasAncientOxygenTank()+"],'EXPLORE','Explore')")
	}
		
	else if(areaNameFound == "dungeon")
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/dungeonKey.png'],['Level "+levelNeeded+"', "+energyFound+",'Dungeon Key'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+1+" <= "+dungeonKey+"],'EXPLORE','Explore')")
		document.getElementById("exploring-area-button-2").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png','images/dungeonKey.png'],['Level "+levelNeeded+"', "+energyFound+",'Dungeon Key'],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+", "+1+" <= "+dungeonKey+"],'EXPLORE','Explore')")
	}
		
	else
	{
		document.getElementById("exploring-area-button-1").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png'],['Level "+levelNeeded+"', "+energyFound+"],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+"],'EXPLORE','Explore')")
		document.getElementById("exploring-area-button-2").setAttribute("onclick","buyFromShop('"+areaNameFound+"',['images/exploringSkill.png','images/steak.png'],['Level "+levelNeeded+"', "+energyFound+"],["+levelNeeded+" <= "+getLevel(exploringXp)+", "+energyFound+" <= "+energy+"],'EXPLORE','Explore')")
	}
}

function hasColdResistance()
{
	return (head == "bearFurMask" || head == "bearFullMask") && body == "bearFurBody" && leg == "bearFurLegs";
}

function loadExploreSelectTab()
{
	var htmlOutput = "";
	
	if(deepOceanMap == 1)
	{
		htmlOutput += "<div onclick='clicksBloodMoonExploring()' class='main-button'>";
		htmlOutput += "<table>";
		htmlOutput += "<tr>";
		htmlOutput += "<td style='color:orange'>" + "STARE" + "</td>";
		htmlOutput += "<td style='text-align:right;'>" + "<img src='images/bloodMoonIcon.png' class='img-small' />" + "</td>";
		htmlOutput += "</tr>";
		htmlOutput += "</table>";
		htmlOutput += "</div>";
	}
	
	for(var i = 0; i < exploringAreasIndexGlobal.length; i++)
	{
		
		var exploringArea = exploringAreasIndexGlobal[i];
		var imageDisplay = "<img src='images/locked.png' class='img-medium' />";
		var areaNameFound = "<span style='color:#ff6666'>???</span>";
		var prevArea = "";
		
		if(i > 0)
		var prevArea = exploringAreasIndexGlobal[i - 1].areaName;

		var onclickHTML = "onclick='confirmDialogue(\"90%\",\"You need to find a map in the previous area to unlock this.\",\"Close\",\"\",\"\")'";
		var lootsFoundHtml = "";
		
		if(window[prevArea + "Map"] >= 1 || i == 0)
		{
			imageDisplay = "<img src='images/"+exploringArea.areaName+".png' class='img-medium' />";
			areaNameFound = getItemName(exploringArea.areaName).toUpperCase();
			onclickHTML = "onclick='setAreaScreenByIndex("+i+");navigate(\"explore\");'";
			
			if(window[exploringArea.areaName + "LootTotal"] > 0)
			{
				lootsFoundHtml += "<div style='margin-top:-10px;'><img src='images/"+exploringArea.areaName +"Loot.png' class='img-tiny' /> <i style='color:orange;font-size:9pt;vertical-align:text-bottom;'> " +formatNumber(window[exploringArea.areaName + "LootTotal"]) + "</i></div>";
			}
		}
		
		
		htmlOutput += "<div "+onclickHTML+" class='main-button'>";
		htmlOutput += "<table>";
		htmlOutput += "<tr>";
		htmlOutput += "<td>" + areaNameFound + lootsFoundHtml + "</td>";
		htmlOutput += "<td style='text-align:right;'>" + imageDisplay + "</td>";
		htmlOutput += "</tr>";
		htmlOutput += "</table>";
		htmlOutput += "</div>";

	}
	
	document.getElementById("explore-select-area").innerHTML = htmlOutput;
}

function clicksCoffinExploring()
{
	confirmDialogue('90%',"Hmm, there doesn't seem much to explore here.  Would you like to investigate the coffin?",'Touch Coffin','Run','FIGHT_BOSS=coffin');
}

function clicksBloodMoonExploring()
{
	if(deepOceanMap == 0) return;
	
	if(bloodMoonTimer > 0 && bloodMoonRingOn == 1)
		confirmDialogue2('90%','<center><img src="images/bloodMoonIcon.png" class="img-large" /><br /><br />The blood moon shines bright red.</center>','Stare again','Cancel Blood Moon','Close','STARE_BLOOD_MOON','UNSTARE_BLOOD_MOON');
	else
		confirmDialogue('90%',"Hmm, there doesn't seem much to explore here.",'Stare at Moon','Leave','STARE_BLOOD_MOON');
}

function hasFullDarkRobes()
{
	return (head == "darkMageHood" || head == "trimmedDarkMageHood") && (body == "darkMageTop" || body == "trimmedDarkMageTop") && (leg == "darkMageBottom" || leg == "trimmedDarkMageBottom");
}

function hasFullBloodReaperRobes()
{
	return (head == "bloodReaperHood" || head == "trimmedBloodReaperHood") && (body == "bloodReaperTop" || body == "trimmedBloodReaperTop") && (leg == "bloodReaperBottom" || leg == "trimmedBloodReaperBottom");
}

function hasOxygenTank()
{
	return cape == "oxygenTank" || cape == "ancientOxygenTank" || amulet == "oxygenAmulet" || oxygenRingOn == 1;
}

function getExploringSpeedBonus()
{
	var perc = 0;
	
	if(exploringSpeedRingOn == 1)
		perc += 25;
	
	return perc;
}

function hasAncientOxygenTank()
{
	return cape == "ancientOxygenTank" || amulet == "oxygenAmulet" || oxygenRingOn == 1;
}

function openDialogueLootBags(lootBagChosen)
{
	initAmountWidget("amount-widget-lootBags",lootBagChosen,1,[lootBagChosen],[1],"images/"+lootBagChosen+".png","images/"+getMayorRatingSmileIcon(),"OPEN_LOOT_MULTI","NO_CAP")
	openDialogue("dialogue-openLootBags","90%")
}



function oepnExploringLootDialogue(lootBagChosen)
{
	document.getElementById("dialogue-exploring-openLoot-itemChosen").value = lootBagChosen;
	document.getElementById("dialogue-exploring-openloot-text").innerHTML = "<h2>" + getItemName(lootBagChosen) + "</h2><img src='images/"+lootBagChosen+".png' class='img-medium' /><br /><br />Open Loot?<br /><hr />";
	if(teddyBearQuest == -1)
	{
		document.getElementById("examine-lootbag-btn").style.display = "";
		document.getElementById("examine-lootbag-btn2").style.display = "";
	}		
	if(window[lootBagChosen] >= 2)
	{
		openDialogueLootBags(lootBagChosen)
	}
	else
	{
		document.getElementById("open-all-loot-button").style.display = "none";
		document.getElementById("open-one-loot-button").style.display = "";
		openDialogue("dialogue-exploring-openloot");
	}
}
function loadPreviousExploringArea()
{
	if(exploringCurrentAreaIndexChosenGlobal == 0)
	{
		navigate('exploring');
	}
	else
		exploringCurrentAreaIndexChosenGlobal--;
	
	setAreaScreenByIndex(exploringCurrentAreaIndexChosenGlobal);
}

function showExploringDropRates(lootBagChosen)
{
	if(lootBagChosen.startsWith("shiny"))
	{
		lootBagChosen = lootBagChosen.substr(5);
		lootBagChosen = lootBagChosen.substr(0, 1).toLowerCase() + lootBagChosen.substr(1, lootBagChosen.length);
	}
	
	sendBytes("EXAMINE_EXPLORING_LOOT=" + lootBagChosen);
}



function getEquipementSpecialEffectsHTML(img, desc)
{
	var htmlOutput = "";
	htmlOutput += '<div class="main-button"><table><tbody><tr><td><img src="'+img+'" class="img-small-medium"></td><td style="text-align:right;padding-right:20px;"><span style="font-size:13pt;"><span style="color:orange;">'+desc+'</span></span></td></tr></tbody></table></div>';
	return htmlOutput;
}

function refreshEquipmentSpecialEffects()
{
	var specialEffects = "";
	
	
	var imgIcon = "";
	var description = "";
	var specialEffectsCounter = 0;
	
	if(weapon == "mace")
	{
		imgIcon = "images/mace.png";
		description = "Extra spike damage";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(weapon == "scythe")
	{
		imgIcon = "images/scythe.png";
		description = "Ignores defence on ghosts";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(weapon == "staff")
	{
		imgIcon = "images/staff.png";
		description = "+3 damage on all spells";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(hasColdResistance())
	{
		imgIcon = "images/bearFurBody.png";
		description = "Resistant to cold";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(hasFullDarkRobes())
	{
		imgIcon = "images/darkMageHood.png";
		description = "Double magic damage";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(hasFullBloodReaperRobes())
	{
		imgIcon = "images/bloodReaperHood.gif";
		description = "Triple magic damage";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if((amulet == "boneAmulet" || amulet == "enchantedBoneAmulet") && (boneRingOn == 1 || enchantedBoneRingOn == 1))
	{
		imgIcon = "images/bones.png";
		description = "Triple bone loot";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	else if(amulet == "boneAmulet" || amulet == "enchantedBoneAmulet" || boneRingOn == 1 || enchantedBoneRingOn == 1)
	{
		imgIcon = "images/bones.png";
		description = "Double bone loot";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(cape == "oxygenTank" || cape == "ancientOxygenTank" || amulet == "oxygenAmulet" || oxygenRingOn == 1)
	{
		imgIcon = "images/oxygenTank.png";
		description = "Explore underwater";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(amulet == "ghostScanAmulet" || ghostScanRingOn == 1)
	{
		imgIcon = "images/ghostScanIcon.png";
		description = "See ghosts";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(getExploringSpeedBonus() > 0)
	{
		imgIcon = "images/exploringSpeedRing.png";
		description = "Explore speed: +"+getExploringSpeedBonus() + "%";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	
	var evadeChance = 0;
	if(amulet == "invisibilityAmulet")
		evadeChance += 10;
	if(amulet == "enchantedInvisibilityAmulet")
		evadeChance += 10;
	if(invisibilityRingOn == 1)
		evadeChance += 10;
	if(enchantedInvisibilityRingOn == 1)
		evadeChance += 10;
	
	if(evadeChance > 0)
	{
		imgIcon = "images/invisibilityIcon.png";
		description = evadeChance + "% evade";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(amulet == "enchantedInvisibilityAmulet")
	{
		imgIcon = "images/enchantedInvisibilityAmulet.gif";
		description = "100% on next evade after initial evade triggered from this amulet";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(enchantedInvisibilityRingOn == 1)
	{
		imgIcon = "images/enchantedInvisibilityRing.gif";
		description = "100% on next evade after initial evade triggered from this ring";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
		
	
	if(glove == "fireGloves")
	{
		imgIcon = "images/fireGloves.png";
		description = "+3 fire spell damage";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(cape == "lightbulb")
	{
		imgIcon = "images/lightbulb.png";
		description = "Shocks enemies";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	
	if(weapon == "bow" || weapon == "superBow")
	{
		if(equipedArrows != 0 && equipedArrows != "none")
		{
			imgIcon = "images/"+equipedArrows+".png";
			description = getItemName(equipedArrows) + " active";
			specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
			specialEffectsCounter++;
		}
			
	}
	
	if(weapon == "poisonSpear")
	{
		imgIcon = "images/poisonIcon.png";
		description = "Can poison";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(weapon == "superPoisonSpear" || weapon == "superPoisonTrident")
	{
		imgIcon = "images/poisonIcon5.png";
		description = "Can poison+";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
		
	if(witchesPotionQuest2 == -1)
	{
		imgIcon = "images/witchesPotion.png";
		description = "+6 Attack at the expense of not being able to wear a berserker amulet.";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(strengthCombatPotionFree == 1)
	{
		imgIcon = "images/strengthCombatPotionIcon.png";
		description = "+25% Attack & Accuracy";
		specialEffects += getEquipementSpecialEffectsHTML(imgIcon, description);
		specialEffectsCounter++;
	}
	
	if(specialEffects == "")
		document.getElementById("special-effects-btn").style.display = "none";
	else
	{
		document.getElementById("special-effects-btn").innerHTML = "Special Effects " + "("+specialEffectsCounter+")"
		document.getElementById("special-effects-btn").style.display = "";
	}
	
	
	document.getElementById("tab-equipement-specialEffects-area").innerHTML = specialEffects;
}

function loadNextExploringArea()
{
	exploringCurrentAreaIndexChosenGlobal++
	
	if(exploringCurrentAreaIndexChosenGlobal >= exploringCurrentAreaMaxIndexChosenGlobal)
		exploringCurrentAreaIndexChosenGlobal = exploringCurrentAreaMaxIndexChosenGlobal - 1;
	
	setAreaScreenByIndex(exploringCurrentAreaIndexChosenGlobal);
}

//did you just assume my gender
var chosenGenderGlobal = "none";
function selectExplorer(gender)
{
	document.getElementById("select-explorer-male-td").style.border = "none";
	document.getElementById("select-explorer-male-td").style.backgroundColor = "white";
	document.getElementById("select-explorer-female-td").style.border = "none";
	document.getElementById("select-explorer-female-td").style.backgroundColor = "white";
	
	document.getElementById("select-explorer-"+gender+"-td").style.border = "1px solid lime";
	document.getElementById("select-explorer-"+gender+"-td").style.backgroundColor = "#99ff66";
	
	document.getElementById("choose-gender-button").disabled = false;
	chosenGenderGlobal = gender;
}

function setHpBarPercentage(percentageChosen)
{
	document.getElementById("inner-hp-bar").style.minWidth = percentageChosen + "%";
	document.getElementById("inner-hp-bar").style.maxWidth = percentageChosen + "%";
}

function setHpBarValue(value)
{
	document.getElementById("hp-bar").innerHTML = value;
}

function setHeroHpBarPercentage(percentageChosen)
{
	document.getElementById("hero-inner-hp-bar").style.minWidth = percentageChosen + "%";
	document.getElementById("hero-inner-hp-bar").style.maxWidth = percentageChosen + "%";
}

function setHeroHpBarValue(value)
{
	document.getElementById("hero-hp-bar").innerHTML = value;
}

function refreshHeroHpBar()
{
	setHeroHpBarValue(heroHp + "/" + heroMaxHp);
	var percentageChosen = parseInt(heroHp / heroMaxHp * 100);
	if(percentageChosen > 100) percentageChosen = 100;
	setHeroHpBarPercentage(percentageChosen);
}


function clicksFightButton()
{
	if(infectedTimer > 0)
	{
		openDialogue('dialogue-infection-warning');
	}
	else
		lookForFight();
}
function lookForFight()
{
	
	if(fightDone > 0 && (monsterName == "none" || monsterName == 0))
	{
		confirmDialogue("90%","<center><img src='images/exploringSkill.png' class='img-medium' /><hr /> You can only fight once per exploring trip.</center>","Close","","");
		return;
	}
	if(exploringArea == "resting" && monsterName == "none")
	{
		confirmDialogue("90%","<center><img src='images/"+heroGender+"Explorer.png' /><hr /></center>\"I need to rest before fighting or exploring.\"","Close","","")
		return;
	}

	if(explorerCooldown == 0 && (monsterName == "none" || monsterName == 0))
	{
		confirmDialogue("90%","<center><img class='img-large' src='images/"+heroGender+"Explorer.png' /><img class='img-medium' src='images/exploringSkill.png' /><hr /></center>\"I need to be exploring an area to find a fight.\"","Close","","")
		return;
	}

	
	if(monsterName != 0 && monsterName != "none")
	{
		navigate("combat");
	}
	else
	{
		confirmDialogue("90%","<center><img class='img-large' src='images/"+exploringArea+".png' /><hr />Find a fight in the "+exploringArea+"?</center>","Fight","Cancel","LOOK_FOR_FIGHT");
	}
}

var scrollHitTextSet = new Set();

function scrollTextHitSplatOther(icon, foregroundColor, backgroundColor, borderC, textChosen, elementChosenS)
{
	var hashOfHit = getRandomHash(5);
	
	var imgTag = "";
	if(icon != "none")
		imgTag = "<img src='images/"+icon+"' class='img-small-medium' />";
	
	var elementChosen = document.getElementById(elementChosenS);
	var rect = elementChosen.getBoundingClientRect();
	var xCoord = rect.left + rect.right/10;
	var yCoord = (rect.bottom + rect.top) / 2;

	if(scrollHitTextSet.size > 0)
	xCoord += scrollHitTextSet.size * 120;

	scrollHitTextSet.add(hashOfHit);
	var elementToAppend = $('<div class="scroller" style="border:1px solid red;background-color:'+backgroundColor+';border:1px solid '+borderC+';color:'+foregroundColor+'">'+imgTag+ " " + textChosen+'</div>').appendTo('body');
	
	$(elementToAppend).css({position:"fixed", left:xCoord,top:yCoord});
	 $(elementToAppend).animate({top: "-=50px"}, function() { scrollHitTextSet.delete(hashOfHit);
	 $(elementToAppend).fadeOut(1000, function() { $(this).remove(); });
	 });
}

function scrollTextHitSplatNpc(icon, foregroundColor, backgroundColor, borderC, textChosen, elementChosenS)
{
	if(lastTabId != "combat") return;
	var hashOfHit = getRandomHash(5);
	
	var imgTag = "";
	if(icon != "none")
		imgTag = "<img src='images/"+icon+"' class='img-small-medium' />";
	
	var elementChosen = document.getElementById(elementChosenS);
	var rect = elementChosen.getBoundingClientRect();
	var xCoord = rect.left + rect.right/10;
	var yCoord = (rect.bottom + rect.top) / 2;

	if(scrollHitTextSet.size > 0)
	xCoord += scrollHitTextSet.size * 120;

	scrollHitTextSet.add(hashOfHit);
	var elementToAppend = $('<div class="scroller" style="border:1px solid red;background-color:'+backgroundColor+';border:1px solid '+borderC+';color:'+foregroundColor+'">'+imgTag+ " " + textChosen+'</div>').appendTo('body');
	
	$(elementToAppend).css({position:"fixed", left:xCoord,top:yCoord});
	 $(elementToAppend).animate({top: "-=50px"}, function() { scrollHitTextSet.delete(hashOfHit);
	 $(elementToAppend).fadeOut(1000, function() { $(this).remove(); });
	 });
}


var currentSplatsHitsOnEnemyTrackerArray = [];

function HitSplat(icon, foregroundColor, backgroundColor, borderC, textChosen)
{
	this.icon = icon;
	this.foregroundColor = foregroundColor;
	this.backgroundColor = backgroundColor;
	this.borderC = borderC;
	this.textChosen = textChosen;
	this.opacityPercentage = 1.0;
	this.marginTop = 0;
	this.lineBreaks = 0; 
	
	this.getElement = function()
	{
		if(this.opacityPercentage > 0.9)
			this.opacityPercentage -= 0.005;
		else if(this.opacityPercentage > 0.5 && this.opacityPercentage <= 0.9)
			this.opacityPercentage -= 0.02;
		else
			this.opacityPercentage -= 0.1;
		
		this.marginTop -= 2;
		
		var fontSize = 30; if(isMobileGlobal) fontSize = 14;
		var imgClass = "img-small-medium"; if(isMobileGlobal) imgClass = "img-small";
		
		var htmlToReturn = "";
		for(var i = 0; i < this.lineBreaks; i ++) htmlToReturn += "<br />";
		htmlToReturn += "<span style='display:inline-block; margin-top:"+this.marginTop+"px; opacity:"+this.opacityPercentage+"; border:1px solid "+borderC+"; padding:10px; background-color:"+convertHex(backgroundColor,90)+"; color:"+foregroundColor+";font-size:"+fontSize+"pt;'><img src='images/"+icon+"' class='"+imgClass+"' /> "+textChosen+"</span>"
		return htmlToReturn;
	}
}

function tickCombatHitSplats()
{
	if(lastTabId == "combat")
	{	
		if(currentSplatsHitsOnEnemyTrackerArray.length == 0)
		{
			$("#img-tag-monster-container-span").html("")
		}
		else
		{
			var elementChosen = document.getElementById("img-tag-monster");
			var monsterImageWidth = elementChosen.width;
			var monsterImageHeight = elementChosen.height;
	
			var randomHash = getRandomNumber(1,1000);
			var horizontalPosition = monsterImageWidth/2.5;
			var verticalPosition = monsterImageHeight/2.5;
			
			
			var htmlOutput = "";
		
			var addLinebreakFlag = 0;
			
			for(var i = 0; i < currentSplatsHitsOnEnemyTrackerArray.length; i++)
			{
				if(!currentSplatsHitsOnEnemyTrackerArray[i].firstTickDone)
					addLinebreakFlag++;
			}
			
			for(var i = 0; i < currentSplatsHitsOnEnemyTrackerArray.length; i++)
			{
				
				
				htmlOutput += "<div style='position:absolute;z-index:100;margin-left:"+horizontalPosition+"px;margin-top:"+verticalPosition+"px'>"
				var hitSplatObj = currentSplatsHitsOnEnemyTrackerArray[i];
				htmlOutput += hitSplatObj.getElement();
				htmlOutput += "</div>";
			}

			for(var i = 0; i < currentSplatsHitsOnEnemyTrackerArray.length; i++)
			{
				currentSplatsHitsOnEnemyTrackerArray[i].firstTickDone = true;
			}
			
			$("#img-tag-monster-container-span").html(htmlOutput); 
			
		}
	}
}

var timeTrackerForHitSplates = Date.now();

function newScrollTextHitSplatNpc(icon, foregroundColor, backgroundColor, borderC, textChosen, elementChosenS)
{
	if(lastTabId != "combat") return;

	
	var elementChosen = document.getElementById(elementChosenS);
	var monsterImageWidth = elementChosen.width;
	var monsterImageHeight = elementChosen.height;
	
	var randomHash = getRandomNumber(1,1000);
	var horizontalPosition = monsterImageWidth/2;
	horizontalPosition += getRandomNumber(-50,50);
	
	var verticalPosition = monsterImageHeight/2;
	
	var hitSplatObj = new HitSplat(icon, foregroundColor, backgroundColor, borderC, textChosen);
	
	//console.log(Date.now() - timeTrackerForHitSplates);
	if(Date.now() - timeTrackerForHitSplates < 500)
	{
		hitStackCounter++;
		if(isMobileGlobal)
			hitSplatObj.lineBreaks = 3 * hitStackCounter;
		else
			hitSplatObj.lineBreaks = 4 * hitStackCounter;
	}
	else
		hitStackCounter = 0;
	
	currentSplatsHitsOnEnemyTrackerArray.unshift(hitSplatObj);
	
	
	setTimeout(function(){  currentSplatsHitsOnEnemyTrackerArray.pop();}, 2000);
	
	/*
	still lags on mobile below and stacks
	*/
	
	timeTrackerForHitSplates = Date.now();
}

function newScrollTextHitSplatHero(icon, foregroundColor, backgroundColor, borderC, textChosen, elementChosenS)
{
	if(lastTabId != "combat") return;
	var mobileAppend = "";
	var randomHash = getRandomNumber(1,1000);
	
	if(isMobileGlobal) 
	{
		mobileAppend = "-mobile"
		var horizontalPosition = "20";
		var verticalPosition = "-50";
	}
	else
	{
		var elementChosen = document.getElementById(elementChosenS);
		var monsterImageWidth = elementChosen.width;
		var monsterImageHeight = elementChosen.height;
	
		
		var horizontalPosition = monsterImageWidth/2;
		horizontalPosition += getRandomNumber(-20,20);
	
		var verticalPosition = monsterImageHeight/2;
	}
	
	var fontsize = 30; if(isNaN(textChosen)) fontsize = 18;
	$("#img-tag-hero-container-span" + mobileAppend).append("<span id='"+randomHash+"' style='border:1px solid "+borderC+"; z-index:20;padding:10px; background-color:"+convertHex(backgroundColor,80)+"; color:"+foregroundColor+";position:absolute;font-size:"+fontsize+"pt;margin-left:"+horizontalPosition+"px;margin-top:"+verticalPosition+"px'><img src='images/"+icon+"' class='img-small-medium' /> "+textChosen+"</span>"); 
	$("#"+randomHash).animate({top: "-="+Math.abs(verticalPosition/2)+"px"}, 750); 
	$("#"+randomHash).fadeOut(1500);
	setTimeout(function(){  $("#" + randomHash).remove();}, 2000);

}

var scrollHitTextSetHero = new Set();
function scrollTextHitSplatHero(icon, foregroundColor, backgroundColor, borderC, textChosen, elementChosenS)
{
	if(lastTabId != "combat") return;
	if(isMobileGlobal) elementChosenS += "-mobile";

	var hashOfHit = getRandomHash(5);
	
	var imgTag = "";
	if(icon != "none") imgTag = "<img src='images/"+icon+"' class='img-small-medium' />";
	
	var elementChosen = document.getElementById(elementChosenS);
	var rect = elementChosen.getBoundingClientRect();
	var xCoord = (rect.left + rect.right) / 2;
	var yCoord = (rect.bottom + rect.top) / 2;

	if(scrollHitTextSetHero.size > 0)
	xCoord += scrollHitTextSetHero.size * 120;

	scrollHitTextSetHero.add(hashOfHit);
	var elementToAppend = $('<div class="scroller" style="border:1px solid red;background-color:'+backgroundColor+';border:1px solid '+borderC+';color:'+foregroundColor+'">'+imgTag+ " " + textChosen+'</div>').appendTo('body');
	
	 $(elementToAppend).css({position:"fixed", left:xCoord,top:yCoord});
	 $(elementToAppend).animate({top: "-=50px"}, function() { scrollHitTextSetHero.delete(hashOfHit);
	 $(elementToAppend).fadeOut(1000, function() { $(this).remove(); });
	 });
}

function refreshHpBar()
{
	setHpBarValue(monsterHp + "/" + monsterMaxHp);
	var percentageChosen = parseInt(monsterHp / monsterMaxHp * 100);
	if(percentageChosen > 100) percentageChosen = 100;
	setHpBarPercentage(percentageChosen);
}

function refreshCombatTab()
{
	if(isMobileGlobal) document.getElementById("hero-in-combat-image").style.display = "none";
	if(heroGender == "female") document.getElementById("img-tag-hero-hitplat").src = "images/femaleExplorer.png";
	document.getElementById("notfications-area-top").style.display = "none";
	document.getElementById("exploring-area-background-img-2").src = "images/" + exploringArea + ".png";
	document.getElementById("body-tag-child").style.backgroundImage = "none";
	document.getElementById("body-tag-child").style.border = "none";
	
	hideTopBar(true);
	hideBottomBar(true);
	
	if(knightsQuest2 != 0) document.getElementById("preset-in-combat").style.display = "";
	refreshCombatPotionsAndSpells();
	
	refreshPresetIconsInCombat();
	
	if(monsterName == 0 || monsterName == "none")
		return;
	
	
	refreshHpBar();
	refreshHeroHpBar();
	refreshMonsterImages();
	
}

function ghostscanActive()
{
	return ghostScanCombatPotionUsed > 0 || amulet == "ghostScanAmulet" || ghostScanRingOn == 1;
}

function playOverlayImage(path, timeInMs, opacityPerc, monsterTag)
{
	$("#img-tag-"+monsterTag+"-overlay").fadeOut(10, function()
	{
		if(monsterTag == "monster")
		{
			document.getElementById("img-tag-"+monsterTag+"-overlay").style.width = document.getElementById("img-tag-monster").width;
			document.getElementById("img-tag-"+monsterTag+"-overlay").style.height = document.getElementById("img-tag-monster").height;
		}
		else
		{
			document.getElementById("img-tag-"+monsterTag+"-overlay").style.width = document.getElementById("img-tag-hero-hitplat").width;
			document.getElementById("img-tag-"+monsterTag+"-overlay").style.height = document.getElementById("img-tag-hero-hitplat").height;
		}
		document.getElementById("img-tag-"+monsterTag+"-overlay").src = path;
		document.getElementById("img-tag-"+monsterTag+"-overlay").style.opacity = opacityPerc;
		$("#img-tag-"+monsterTag+"-overlay").fadeIn(timeInMs);
		
	}
	);
}

function stopOverlayImage()
{
	$("#img-tag-monster-overlay").fadeOut(1000);
	$("#img-tag-hero-overlay").fadeOut(1000);
}

function refreshMonsterImages()
{
		if(ghostscanActive() && monsterName == "ghost")
			document.getElementById("img-tag-monster").src = "images/ghostVisibleMonster.png";
		else if((ghostScanRingOn == 1 || amulet == "ghostScanAmulet") && monsterName == "bloodGhost")
			document.getElementById("img-tag-monster").src = "images/bloodGhostVisibleMonster.png";
		else if(ghostscanActive() && monsterName == "skeletonGhost")
			document.getElementById("img-tag-monster").src = "images/skeletonGhostVisibleMonster.png";
		else if((ghostScanRingOn == 1 || amulet == "ghostScanAmulet") && monsterName == "bloodSkeletonGhost")
			document.getElementById("img-tag-monster").src = "images/bloodSkeletonGhostVisibleMonster.png";
		else if(ghostscanActive() && monsterName == "reaper")
			document.getElementById("img-tag-monster").src = "images/reaperVisibleMonster.png";
		else if((ghostScanRingOn == 1 || amulet == "ghostScanAmulet") && monsterName == "bloodReaper")
			document.getElementById("img-tag-monster").src = "images/bloodReaperVisibleMonster.png";
		else if(ghostscanActive() && monsterName == "reaper2")
			document.getElementById("img-tag-monster").src = "images/reaper2VisibleMonster.gif";
		else if(ghostscanActive() && monsterName == "skeletonGhost2")
			document.getElementById("img-tag-monster").src = "images/skeletonGhost2VisibleMonster.gif";
		else if(ghostscanActive() && monsterName == "curiousGhost")
			document.getElementById("img-tag-monster").src = "images/curiousGhostVisibleMonster.png";
		else if(ghostscanActive() && monsterName == "ghostPack")
			document.getElementById("img-tag-monster").src = "images/ghostPackVisibleMonster.png";
		else if(monsterName == "bloodGolem")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "dadGoblin")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "oceanShark")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "bloodOceanShark")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "carnivorousPlant2")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "robotWheelie2")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else if(monsterName == "chicken" || monsterName == "bloodChicken" ||  monsterName == "rat" || monsterName == "bee" || monsterName == "snake" || monsterName == "ent" || monsterName == "thief" || monsterName == "bat" || monsterName == "bear" || monsterName == "skeleton")
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.gif";
		else
			document.getElementById("img-tag-monster").src = "images/" + monsterName + "Monster.png";
		
		//add spaces over monster if he is small
		document.getElementById("img-tag-monster").onload = function()
		{
			var heightToAdd = 220 - document.getElementById("img-tag-monster").height;
			
			if(heightToAdd > 0)
			{
				document.getElementById("div-extra-spaces-over-monster").style.height = heightToAdd + "px";
			}
			else
				document.getElementById("div-extra-spaces-over-monster").style.height = 0 + "px";
		}
		
}

function isCombatPotion(potionNameFound)
{
	return potionNameFound.endsWith("CombatPotion") && potionNameFound != "richCombatPotion"
}



var firstLoadCombatSpellsAndPotionsIterfaceGlobal = true;
function refreshCombatPotionsAndSpells()
{
	var htmloutput = "";
	htmloutput += "<tr>";
	var htmlAttributeOnclick = "onclick";
	//if(isMobileGlobal) htmlAttributeOnclick = "ontouchend"; <-- thought it would fix dead clicks, does not. We need to change the way the game refreshes the spells.
	
	var spellNames = ["fireSpell","reflectSpell","teleportSpell","thunderStrikeSpell","lifeStealSpell","sandstormSpell"];
	
	if(firstLoadCombatSpellsAndPotionsIterfaceGlobal)
	{
		if(!isMobileGlobal) 
		{
			document.getElementById("table-combat-monster-hp-bar").width = document.getElementById("body-tag-child").style.width;
			document.getElementById("monster-affected-table").style.left = "45%";
		}
		
		firstLoadCombatSpellsAndPotionsIterfaceGlobal = false;
		//potions
		for(var i = 0; i < brewingRecipesGlobalIndex.length; i++)
		{
			var potionNameFound = brewingRecipesGlobalIndex[i].itemName;
			
			if(isCombatPotion(potionNameFound))
			{
				if(window[potionNameFound] > 0 || window[potionNameFound + "Free"] > 0)
				{
					htmloutput += "<td>";
				
					var imgAttribute = "src='images/"+potionNameFound+".png'";
					htmloutput += "<img id='combat-potions-"+potionNameFound+"'  "+htmlAttributeOnclick+"='sendBytes(\"DRINK_COMBAT_POTION="+potionNameFound+"\");' class='img-small potion-in-combat-td not-draggable' "+imgAttribute+"/>";
					htmloutput += "</td>";
				}
			}
		}
		
		htmloutput += "</tr>";
		htmloutput += "<tr>";
		
		for(var i = 0; i < spellNames.length; i++)
		{
			var spellName = spellNames[i];
			//owns spell
			if(window[spellName] == 1)
			{
				if(spellName == "teleportSpell") //confrim before cast
					htmloutput += "<td id='combat-spell-td-"+spellNames[i]+"' style='cursor:pointer;'  onclick='confirmTeleportSpell()'>";
				else
					htmloutput += "<td id='combat-spell-td-"+spellNames[i]+"' style='cursor:pointer;' "+htmlAttributeOnclick+"='sendBytes(\"CAST_COMBAT_SPELL="+spellName+"\");'>";
				
				
				{
					var borderColor = "";
		
					if(window[spellName + "Upgraded"] > 0)
					{
						borderColor = "style='border:1px solid cyan'";
					}
					htmloutput += "<div id='combat-spells-"+spellName+"-cd' style='display:none;' class='spells-in-combat-cd not-draggable' data-item-display='"+spellName+"Cooldown'>"+formatSpellCooldown(window[spellName + "Cooldown"])+"</div><img id='combat-spells-"+spellName+"' "+borderColor+" class='img-small spells-in-combat-td not-draggable' src='images/"+spellName+".png' />";
				}
				
				htmloutput += "</td>";
			}
		}
		
		
		htmloutput += "</tr>";
		document.getElementById("combat-potions-table").innerHTML = htmloutput;
	}
	
	for(var i = 0; i < spellNames.length; i++)
	{
		var spellName = spellNames[i];
		if(document.getElementById("combat-spells-"+spellName+"-cd") == null || document.getElementById("combat-spells-"+spellName) == null) continue;
		
		if(window[spellName + "Cooldown"] >= 1)
		{
			document.getElementById("combat-spells-"+spellName+"-cd").style.display = "";
			document.getElementById("combat-spells-"+spellName).style.opacity = 0.2;
			document.getElementById("combat-spells-"+spellName).style.filter = "grayscale(100%)";
			
			if(window[spellName + "Cooldown"] >= 100)
			{
				document.getElementById("combat-spells-"+spellName+"-cd").style.fontSize = "16pt";
				document.getElementById("combat-spells-"+spellName+"-cd").style.marginTop = "10px";
			}
			else
			{
				document.getElementById("combat-spells-"+spellName+"-cd").style.fontSize = "22pt";
				document.getElementById("combat-spells-"+spellName+"-cd").style.marginTop = "";
			}
		}
		else
		{
			document.getElementById("combat-spells-"+spellName+"-cd").style.display = "none";
			document.getElementById("combat-spells-"+spellName).style.opacity = 1.0;
			document.getElementById("combat-spells-"+spellName).style.filter = "";
		}
	}
	
	for(var i = 0; i < brewingRecipesGlobalIndex.length; i++)
	{
		var potionNameFound = brewingRecipesGlobalIndex[i].itemName;
		
		if(isCombatPotion(potionNameFound))
		{
			if(window[potionNameFound] > 0 || window[potionNameFound + "Free"] > 0)
			{
				if(document.getElementById("combat-potions-" + potionNameFound) == null) continue;
				
				if(window[potionNameFound + "Used"] == 1)
				{
					document.getElementById("combat-potions-" + potionNameFound).style.border = "1px solid red";
					document.getElementById("combat-potions-" + potionNameFound).style.filter = "grayscale(100%)";
				}
				else
				{
					document.getElementById("combat-potions-" + potionNameFound).style.border = "";
					document.getElementById("combat-potions-" + potionNameFound).style.filter = "";
				}
				
				if(window[potionNameFound + "Free"] == 1)
					document.getElementById("combat-potions-" + potionNameFound).src = "images/"+potionNameFound+"Icon.png";
				
			}
		}
	}
	
	
	//show enemy stun timers etc
	var enemyStunsArray = ["poisonEnemyTimer","reflectSpellEnemyTimer","ignoreDefenceCombatPotionEnemyTimer","freezeCombatPotionEnemyTimer","thunderStrikeSpellEnemyTimer","sandstormSpellEnemyTimer","lifeStealSpellEnemyTimer","teleportSpellEnemyTimer"];
	var dontShowTimer = ["poisonEnemyTimer","reflectSpellEnemyTimer","ignoreDefenceCombatPotionEnemyTimer","lifeStealSpellEnemyTimer"];
	
	htmloutput = "<tr>";
	
	for(var i = 0; i < enemyStunsArray.length; i++)
	{
		var varName = enemyStunsArray[i];
		var varValue = window[varName];
		
		if(varValue > 0)
		{
			if(dontShowTimer.includes(varName))
				htmloutput += "<td><span class='div-enemy-supressed'> <img class='img-small' src='images/"+varName+".png' /> </span></td>";
			else
				htmloutput += "<td><span class='div-enemy-supressed' data-item-display='"+varName+"'>"+formatSpellCooldown(varValue)+" <img  class='img-small' src='images/"+varName+".png' /> </span></td>";
		}
		
		
	}
	
	htmloutput += "</tr>";
	
	document.getElementById("monster-affected-table").innerHTML = htmloutput;
	
	htmloutput = "";
	//hero reductions
	
	var monsterNameThatAffectsHero = ["zombie","ghostPackVisibile","ghostPack","bloodScorpion"];
	document.getElementById("hero-reductions").innerHTML = "";
	if(monsterNameThatAffectsHero.includes(monsterName))
	{
		htmloutput = "<td><img src='images/empty100_100.png' style='padding:6px 0px;' class='img-small' /></td>";
		if(infectedTimer > 0) htmloutput += "<td><div onclick='clicksInfectionIcon()' class='notification-bad'> <img class='img-small' src='images/infected.png' /> Infected</div></td>";
		if(heroFrozenTimer > 0) htmloutput += "<td><div class='notification-bad'> <img class='img-small' src='images/iceArtifact.png' /> <span data-item-display='heroFrozenTimer'>0</span></div></td>";
		if(sandstormTimerOnHeroTimer > 0) htmloutput += "<td><div class='notification-bad'> <img class='img-small' src='images/sandstormSpell.png' /> Blind</div></td>";
		
		document.getElementById("hero-reductions").innerHTML = htmloutput;
	}

}

function clicksInfectionIcon()
{
	if(cureInfectionPotion == 0)
		confirmDialogue('90%','<center><img src="images/infected.png" class="img-medium\" /><hr />You have been infected by a zombie.<br /><br /><i>Your hero\'s attack speed has been greatly reduced.</i><br /><br /><span style="color:grey"><img src="images/cureInfectionPotion.png" class="img-small" /> An infection potion can cure this instantly.</span></center>','Close','','')
	else
		confirmDialogue('90%','<center><img src="images/infected.png" class="img-medium\" /><hr />You have been infected by a zombie.<br /><br /><i>Your hero\'s attack speed has been greatly reduced.</i><br /><br /><div class="basic-smallbox-green" style="cursor:pointer" onclick="clicksItem(\'cureInfectionPotion\')" ><span style="color:grey"><img src="images/cureInfectionPotion.png" class="img-small-medium" /> Use Infection Cure.</span></div></center>','Close','','')
}

function confirmTeleportSpell()
{
	confirmDialogue("90%","<center><img src='images/teleportSpell.png' class='img-medium' /> Teleport out of combat?</center>","Teleport","Cancel","CAST_COMBAT_SPELL=teleportSpell")
}

function openDialogueToComvertArtifactToXp(artifactChosen)
{
	var XpPerArtifact = parseInt(document.getElementById(artifactChosen + "-artifactXp").innerHTML.replaceAll(",",""));
	
	if(exploringResearchLevel >= 4)
	{
		if(volcanoLootTotal > 0)
		{
			document.getElementById("dialogue-convertArtifact-extra-btn").style.display = "";
			
			document.getElementById("dialogue-convertArtifact-extra-btn-element").onclick = 
			function()
			{ 
				confirmDialogue("90%","<center><img src='images/artifacts.png' class='img-large' /><br /><br />Convert every owned artifact into exploring XP?</center>","Convert All","Cancel","CONVERT_ALL_ARTIFACTS");
				closeSmittysDialogue('dialogue-convertArtifact')
			};
		}
		initAmountWidget("amount-widget-convert-artifact",artifactChosen,XpPerArtifact,[artifactChosen],[1],"images/"+artifactChosen+".png","images/exploringSkill.png","CONVERT_ARTIFACT","NO_CAP");
		openDialogue("dialogue-convertArtifact","90%");
	}
	else
		confirmDialogue("90%","<center><img src='images/"+artifactChosen+".png' class='img-large' /><hr /><br />I found this artifact from an exploring loot bag.  It allowed me to gain " + formatNumber(XpPerArtifact) + " exploring XP when I found it.","Close","","")
}

function refreshCombatInformation(htmlData)
{
	document.getElementById("combatInformation-div").innerHTML = htmlData;
}

function getHTMLEmblemHints(emblemImage, desc, difficulty, emblemIdVar, ans)
{
	var found = window[emblemIdVar] == 1;
	if(found) ans = "<hr /><span style='color:lime;font-size:10pt'>" + ans + "<img src='images/check.png' class='img-tiny'></span>"; else ans = "";
	difficulty = "<br /><span style='font-size:10pt;'><img src='images/"+difficulty+"Icon.png' class='img-tiny' /> " + getItemName(difficulty);
	return "<div class='main-button'><table><tr><td>"+emblemImage+"</td><td style='text-align:right;padding-right:20px;'><span style='font-size:13pt;'><span style='color:orange;'>"+desc+difficulty+ans+"</span></td></tr></table></div>";
}

function refreshEmblemHintTab()
{
	var divArea = document.getElementById("emblemHints-area");
	divArea.innerHTML = "";
	var htmlOut = "";
	
	var imgTag1 = "<img src='images/hpEmblem_dark.png' class='img-medium' />";
	var imgTag2 = "<img src='images/hpEmblem2.png' class='img-medium' />";
	
	var imgTag = "";
	var emblemId = 0;
	var hpEmblemHint = 0;
	var difficulty = "";
	
	
	emblemId = 3; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Blood crystal shop.";
	hpEmblemAnswer = "Purchased in blood crystal shop."
	difficulty = "varies";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty,"hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId = 1; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Open me with a key.";
	hpEmblemAnswer = "Looted from a treasure chest."
	difficulty = "easy";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId++; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Explore an area filled with ghosts.";
	hpEmblemAnswer = "Looted from a haunted mansion loot bag."
	difficulty = "easy";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId = 4; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Puffy roaming the ocean.";
	hpEmblemAnswer = "Dropped from a puffer fish."
	difficulty = "medium";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId = 5; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Lava Community Center.";
	hpEmblemAnswer = "Purchased from community center #9."
	difficulty = "medium";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId = 6; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "The breath of fire.";
	hpEmblemAnswer = "Unique drop from the dragon found in the castle."
	difficulty = "hard";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	emblemId = 7; imgTag = imgTag1; if(window["hpEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
	hpEmblemHint = "Dropped from ghosts which is not in the haunted mansion nor the forest.";
	hpEmblemAnswer = "Unique drop from the ghost packs found in the haunted woods."
	difficulty = "hard";
	htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "hpEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
	
	
	if(magicEmblem1Absorbed > 0)
	{
		emblemId = 0;
		hpEmblemHint = "";
		hpEmblemAnswer = "";
		
		imgTag1 = "<img src='images/magicEmblem_dark.png' class='img-medium' />";
		imgTag2 = "<img src='images/magicEmblem1.png' class='img-medium' />";
		
		emblemId = 2; imgTag = imgTag1; if(window["magicEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
		hpEmblemHint =  "Blood crystal shop."
		hpEmblemAnswer = "Purchased in blood crystal shop."
		difficulty = "varies";
		htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "magicEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
		
		emblemId = 1; imgTag = imgTag1; if(window["magicEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
		hpEmblemHint =  "A chest with a challenge."
		hpEmblemAnswer = "Found in the puzzle chest looted from gargoyles."
		difficulty = "medium";
		htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "magicEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
		
		emblemId = 3; imgTag = imgTag1; if(window["magicEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
		hpEmblemHint =  "Gold Community Center."
		hpEmblemAnswer = "Purchased from community center #9."
		difficulty = "medium";
		htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "magicEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
		
		emblemId = 4; imgTag = imgTag1; if(window["magicEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
		hpEmblemHint =  "\"Wow, I completed " + (parseInt(missionId) - 1) + " mission sets!\"";
		hpEmblemAnswer = "Mission level 35 set reward."
		difficulty = "hard";
		htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "magicEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
		
		emblemId = 5; imgTag = imgTag1; if(window["magicEmblem"+emblemId+"Absorbed"] == 1)imgTag = imgTag2;
		hpEmblemHint =  "\"Beep Boop. Get out of my factory.  We are busy working.\"";
		hpEmblemAnswer = "Looted from a robot mage found in the factory."
		difficulty = "hard";
		htmlOut += getHTMLEmblemHints(imgTag, hpEmblemHint, difficulty, "magicEmblem"+emblemId+"Absorbed", hpEmblemAnswer);
		
	}
	
	
	divArea.innerHTML = htmlOut;
	
}

function loadEquipmentTab()
{
	refreshPresetIcons();
}

function clicksExploringButton()
{
	if(explorer == 0)
	{
		confirmDialogue("90%","<center><img src='images/explorer.png' class='img-large' /><br /><br />You need an explorer before searching for areas.  <br /><br /><i style='color:grey'>They can be hired from the game shop after crafting the <b>community center 2</b></i>.","Close","","")
		return;
	}
	
	if(tutorialTipsOff == 0 && tutorialTipsExploringAreas == 0)
	{
		sendBytes("TUTORIAL=tutorialTipsExploringAreas");
	}
	else
	{
		navigate('explore');
		setAreaScreenByIndex(exploringCurrentAreaIndexChosenGlobal);
		playFowardMenuSound();
	}
		
	
}


function animateOverMonster()
{
	document.getElementById("img-tag-monster").style.filter = "brightness(10000%)";
	$("#img-tag-monster").fadeOut(2000, function()
	{
		$("#img-tag-monster").fadeIn(100);  if(lastTabId == "combat") navigate('exploring');
		document.getElementById("img-tag-monster").style.filter = "brightness(100%)";
		
	});
}

function animateEnemyDeath()
{
	document.getElementById("img-tag-monster").style.filter = "grayscale(100%)";
	$("#img-tag-monster").fadeOut(2000, function()
	{
		$("#img-tag-monster").fadeIn(100);  if(lastTabId == "combat") navigate('exploring');
		document.getElementById("img-tag-monster").style.filter = "grayscale(0%)";
		document.getElementById("img-tag-monster").src = "images/none.png";
	});
}