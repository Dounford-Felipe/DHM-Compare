var furnaceSelectedOreGlobal;
var furnaceSelectedBarGlobal;

function openFurnaceWidget(oreChosen, barItMakes)
{
	furnaceSelectedOreGlobal = oreChosen;
	furnaceSelectedBarGlobal = barItMakes;
	document.getElementById("dialogue-smeltItemImage").src = "images/" + barItMakes + ".png";
	setInputValue(getMaxBarsCanBeMade(oreChosen, barItMakes))
	openDialogue("dialogue-furnace2","90%");
}


function setInputValue(val)
{
	document.getElementById("furnace-widget-input").value = val;
	if(getInputValue() <= 0 || isNaN(getInputValue()))
		setInputValue(1);
	
	widgetFurnaceRefreshItemsUsed();
	
}

function getInputValue()
{
	return parseInt(document.getElementById("furnace-widget-input").value);
}

function increaseByOne()
{
	setInputValue(parseInt(getInputValue())+1)
}

function decreaseByOne()
{
	setInputValue(parseInt(getInputValue())-1)
}

//depending on ore, oil and furnace capacity
function getMaxBarsCanBeMade(oreChosen, barChosen)
{
	var oilNeededPerBar = getOilCost(oreChosen);
	
	//using oil
	var maxBars = 100000;
	if(oreChosen != "ancientOre")
	var maxBars = parseInt(oil/oilNeededPerBar);
	
	
	//check if has ores
	if(window[oreChosen] < maxBars)
		maxBars = window[oreChosen];
	
	//capacity
	if(maxBars > furnaceCapacity)
		maxBars = furnaceCapacity;
	
	//lava
	if(oreChosen == "promethium")
	{
		if(maxBars > lava)
			maxBars = lava;
	}
	
	//lava
	if(oreChosen == "titanium")
	{
		if(maxBars > charcoal)
			maxBars = charcoal;
	}
	
	if(oreChosen == "ancientOre")
	{
		if(maxBars > plasma)
			maxBars = plasma;
	}
	
	return maxBars;
}

function startSmelting()
{
	sendBytes("SMELT=" + furnaceSelectedOreGlobal + "~" + getInputValue());
}

function widgetFurnaceRefreshItemsUsed()
{
	var outputHtml = "";
	var oilNeededPerBar = getOilCost(furnaceSelectedOreGlobal);
	var xpEarned = getXP(furnaceSelectedOreGlobal);
	var currentValueInput = getInputValue();
	
	if(furnaceSelectedOreGlobal != "ancientOre")
	outputHtml += createHTMLBoxWithChecks("oil",oilNeededPerBar * getInputValue(), oilNeededPerBar * getInputValue())
	outputHtml += createHTMLBoxWithChecks(furnaceSelectedOreGlobal,currentValueInput, currentValueInput)
	if(furnaceSelectedOreGlobal == "promethium")
	outputHtml += createHTMLBoxWithChecks("lava",currentValueInput, currentValueInput)
	if(furnaceSelectedOreGlobal == "titanium")
	outputHtml += createHTMLBoxWithChecks("charcoal",currentValueInput, currentValueInput)
	if(furnaceSelectedOreGlobal == "ancientOre")
	outputHtml += createHTMLBoxWithChecks("plasma",currentValueInput, currentValueInput)
	outputHtml += createHTMLBox("craftingSkill",formatNumber(xpEarned * currentValueInput) + " xp")
	document.getElementById("furnace-items-used-area").innerHTML = outputHtml;
}

function widgetFurnaceClickHalf()
{
	setInputValue(parseInt(document.getElementById("furnace-widget-input").value * 0.5))
}

function widgetFurnaceClickMax()
{
	setInputValue(getMaxBarsCanBeMade(furnaceSelectedOreGlobal, furnaceSelectedBarGlobal));
}