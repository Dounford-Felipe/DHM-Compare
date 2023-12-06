function initTreeSlots()
{
	for(var i = 1; i <= 6; i++)
	{
			setTreePatchThumbnail(i, window["tree"+i], window["treeTimer" + i], window["treeUnlocked"+i] == 1, window["treeStar" + i])
	}
}

function setTreePatchThumbnail(patchId, tree, treeTimer, isUnlocked, treeStar)
{
	var labelTag = document.getElementById("tree-thumbnail-label-" + patchId);
	var imgTag = document.getElementById("tree-thumbnail-img-" + patchId);
	var treeStarImg = document.getElementById("tree-thumbnail-img-" + patchId + "-star");
	
	if(!isUnlocked)
	{
		labelTag.innerHTML = "<span style='color:gold'>Locked</span>";
		imgTag.src = "images/locked.png";
		return;
	}
	
	switch(treeTimer)
	{
		case 1:
			labelTag.innerHTML = "READY";
			imgTag.src = "images/"+tree+".png";
		break;
		case 0:
			labelTag.innerHTML = "NONE";
			imgTag.src = "images/empty100_100.png";
		break;
		default:
			imgTag.src = "images/"+tree+"_grey.png";
			labelTag.innerHTML = formatTime(treeTimer);
		break;
	}
	
	if(treeStar != 0 && treeStar != "none")
	{
		treeStarImg.src = "images/" + treeStar + ".png";
		treeStarImg.style.display = "";
	}
	else
		treeStarImg.style.display = "none";
}

function getCurrentAxe()
{
	if(axe == 1)
		return "axe";
	if(sapphireAxe == 1)
		return "sapphireAxe";
	if(emeraldAxe == 1)
		return "emeraldAxe";
	if(rubyAxe == 1)
		return "rubyAxe";
	if(diamondAxe == 1)
		return "diamondAxe";
	if(bloodDiamondAxe == 1)
		return "bloodDiamondAxe";
	
	return "none";
}



function getCurrentShovel()
{
	if(shovel == 1)
		return "shovel";
	if(sapphireShovel == 1)
		return "sapphireShovel";
	if(emeraldShovel == 1)
		return "emeraldShovel";
	if(rubyShovel == 1)
		return "rubyShovel";
	if(diamondShovel == 1)
		return "diamondShovel";
	if(bloodDiamondShovel == 1)
		return "bloodDiamondShovel";
	
	return "none";
}

function getCurrentMachete()
{
	if(machete == 1)
		return "machete";
	if(sapphireMachete == 1)
		return "sapphireMachete";
	if(emeraldMachete == 1)
		return "emeraldMachete";
	if(rubyMachete == 1)
		return "rubyMachete";
	if(diamondMachete == 1)
		return "diamondMachete";
	if(bloodDiamondMachete == 1)
		return "bloodDiamondMachete";
	
	return "none";
}

function getCurrentMacheteMultiplier()
{

	if(getCurrentMachete() == "machete")
		return 1;
	else if(getCurrentMachete() == "sapphireMachete")
		return 2;
	else if(getCurrentMachete() == "emeraldMachete")
		return 3;
	else if(getCurrentMachete() == "rubyMachete")
		return 4;
	else if(getCurrentMachete() == "diamondMachete")
		return 5;
	else if(getCurrentMachete() == "bloodDiamondMachete")
		return 8;
	
	return 0;
}


function getCurrentShovelMultiplier()
{
	if(getCurrentShovel() == "shovel")
		return 1;
	else if(getCurrentShovel() == "sapphireShovel")
		return 2;
	else if(getCurrentShovel() == "emeraldShovel")
		return 3;
	else if(getCurrentShovel() == "rubyShovel")
		return 4;
	else if(getCurrentShovel() == "diamondShovel")
		return 5;
	else if(getCurrentShovel() == "bloodDiamondShovel")
		return 50;
	
	return 0;
}

function getCurrentAxeMultiplier()
{
	if(getCurrentAxe() == "axe")
		return 1;
	else if(getCurrentAxe() == "sapphireAxe")
		return 2;
	else if(getCurrentAxe() == "emeraldAxe")
		return 3;
	else if(getCurrentAxe() == "rubyAxe")
		return 4;
	else if(getCurrentAxe() == "diamondAxe")
		return 5;
	else if(getCurrentAxe() == "bloodDiamondAxe")
		return 12;
	
	return 0;
}

var lastLoadTreePatch = "";
function loadTree(patchId)
{
	var treeTimer = window["treeTimer" + patchId];
	
	if(treeTimer == 0)
	{
		document.getElementById("tab-tree-top-bar-name-timer").style.display = "none";
		document.getElementById("tree-div-img").style.display = "none";
		return;
	}
	
	document.getElementById("tab-tree-top-bar-name-timer").style.display = "";
	document.getElementById("tab-tree-name").innerHTML = getItemName(window["tree" + patchId]).toUpperCase();
	
	if(window["treeShiny" + patchId] == 1)
		applyShinyGif("tree-div-img", true)
	else
		applyShinyGif("tree-div-img", false)
	
	if(treeTimer == 1)
		document.getElementById("tab-tree-timer").innerHTML = "READY";
	else if(treeTimer > 1)
		document.getElementById("tab-tree-timer").innerHTML = formatTime(treeTimer);
	
	if(window["treeStage" + patchId] >= 1 && window["treeStage" + patchId] <= 4)
	{
		document.getElementById("tree-div-img").style.display = "";
		document.getElementById("tree-div-img").src = "images/" + window["tree" + patchId] + window["treeStage" + patchId] + ".png";
		document.getElementById("tree-div").setAttribute("onclick","sendBytes('CHOP_TREE="+patchId+"')");
		
		if(window["treeStar" + patchId] != "none" && window["treeStar" + patchId] != 0)
		{
			document.getElementById("tree-div-img-star").style.display = "";
			document.getElementById("tree-div-img-star").src = "images/" + window["treeStar" + patchId] + ".png";
		}
		else
			document.getElementById("tree-div-img-star").style.display = "none";
	}
}