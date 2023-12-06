function selectHouseDialogue()
{
	loadHouseItemImages(1)
	openDialogue("dialogue-selectHouse1", "90%")
}

function loadQuestScreen()
{
	refreshChangedItemSwitch("teddyBearQuest2");
	refreshChangedItemSwitch("knightsQuest2");
	refreshChangedItemSwitch("chefQuest2");
}

function loadHouseItemImages(houseId)
{
	if(houseId == 1)
	{
		if(logs >= 100)
			document.getElementById("build-house-item"+houseId+"-1").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-1").src= "images/x.png";
		
		if(oakLogs >= 50)
			document.getElementById("build-house-item"+houseId+"-2").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-2").src= "images/x.png";
		
		if(stone >= 100)
			document.getElementById("build-house-item"+houseId+"-3").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-3").src= "images/x.png";
	}
	
	if(houseId == 2)
	{
		if(stone >= 30000)
			document.getElementById("build-house-item"+houseId+"-1").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-1").src= "images/x.png";
		
		if(logs >= 200)
			document.getElementById("build-house-item"+houseId+"-2").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-2").src= "images/x.png";
	}
	
	if(houseId == 3)
	{
		if(coins >= 2000000)
			document.getElementById("build-house-item"+houseId+"-1").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-1").src= "images/x.png";
		
		if(willowLogs >= 100)
			document.getElementById("build-house-item"+houseId+"-2").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-2").src= "images/x.png";
		
		if(bloodCrystals >= 50)
			document.getElementById("build-house-item"+houseId+"-3").src= "images/check.png";
		else
			document.getElementById("build-house-item"+houseId+"-3").src= "images/x.png";
	}
}

function numberOfQuestsStarted()
{
	var questAreaImage = document.getElementById("quest-area");
	
	var questDivsArray = questAreaImage.getElementsByTagName("div");
	var questsStarted = 0;
	for(var i = 0 ; i < questDivsArray.length; i++)
	{
		var questNameTemp = questDivsArray[i].id.split("-");
		questName = questNameTemp[questNameTemp.length - 1];
		
		if(window[questName] > 0) questsStarted++;
		if(window[questName + "2"] > 0) questsStarted++;
		if(window[questName + "3"] > 0) questsStarted++;
	}
	
	return questsStarted;
}

function refreshQuestsInProgressLabel()
{
	var questsStarted = numberOfQuestsStarted();
	if(questsStarted == 0)
	{
		document.getElementById("quests-in-progress-label").style.display = "none";
	}
	else
	{
		document.getElementById("quests-in-progress-label").innerHTML = "<hr class='hr-thin' /><b>In Progress:</b> " + questsStarted;
		document.getElementById("quests-in-progress-label").style.display = "";
	}
}

function refreshDesertPuzzleBoxTable(data)
{
	var arrayData = data.split(",");
	
	for(var i = 0; i < arrayData.length; i+=0)
	{
		var xPos = arrayData[i]; i++;
		var yPos = arrayData[i]; i++;
		var isOn = arrayData[i]; i++;
		
		var color = "red";
		if(isOn == 1)
			color = "lime";
		
		document.getElementById("puzzleChest-desertLizard2-cell-" + xPos + "-" + yPos).height= "30px";
		document.getElementById("puzzleChest-desertLizard2-cell-" + xPos + "-" + yPos).width = "30px";
		document.getElementById("puzzleChest-desertLizard2-cell-" + xPos + "-" + yPos).style.backgroundColor = color;
		document.getElementById("puzzleChest-desertLizard2-cell-" + xPos + "-" + yPos).style.cursor = "pointer"
		document.getElementById("puzzleChest-desertLizard2-cell-" + xPos + "-" + yPos).setAttribute("onclick","sendBytes('DESERT_PUZZLE_CHEST_TOGGLE="+xPos+"~"+yPos+"')")
	}
}

function refreshPuzzleBox2(data)
{
	var arrayData = data.split(",");
	
	for(var i = 0; i < arrayData.length; i+=0)
	{
		var xPos = arrayData[i]; i++;
		var yPos = arrayData[i]; i++;
		var isOn = arrayData[i]; i++;
		
		var color = "red";
		if(isOn == 1)
			color = "lime";
		
		document.getElementById("puzzleChest-2-cell-" + xPos + "-" + yPos).height= "30px";
		document.getElementById("puzzleChest-2-cell-" + xPos + "-" + yPos).width = "30px";
		document.getElementById("puzzleChest-2-cell-" + xPos + "-" + yPos).style.backgroundColor = color;
		document.getElementById("puzzleChest-2-cell-" + xPos + "-" + yPos).style.cursor = "pointer"
		document.getElementById("puzzleChest-2-cell-" + xPos + "-" + yPos).setAttribute("onclick","sendBytes('PUZZLE_CHEST_2="+xPos+"~"+yPos+"')")
	}
}

function refreshPuzzle3(data)
{
	var arrayData = data.split("~");
	
	for(var i = 0; i < arrayData.length; i+=0)
	{
		var xPos = arrayData[i]; i++;
		var yPos = arrayData[i]; i++;
		var section = arrayData[i]; i++;
		var value = arrayData[i]; i++;
		var editable = arrayData[i]; i++;
		
		if(value == 0) value = "";
		document.getElementById("puzzleBox3-" + xPos + "-" + yPos + "-" + section).innerHTML = value;
		if(editable == 1) document.getElementById("puzzleBox3-" + xPos + "-" + yPos + "-" + section).style.color = "white";
	}
}

function refreshPuzzle4(data)
{
	var arrayData = data.split("~");
	
	for(var i = 0; i < arrayData.length; i+=0)
	{
		var xPos = arrayData[i]; i++;
		var yPos = arrayData[i]; i++;
		var sliderNumber = arrayData[i]; i++;
		
		
		document.getElementById("puzzleBox4-"+xPos+"-"+yPos).innerHTML = "<img src='images/puzzleChest4_"+sliderNumber+".png' ondragstart='return false;' draggable='false' style='background-color:white;' class='img-medium-small' />";
	}
}