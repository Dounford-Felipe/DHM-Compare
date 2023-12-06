var amountWidgetParentIdGlobal = -1;
var amountWidgetAmountInputElementGlobal = -1;
var amountWidgetItemsNeededNameArrayGlobal = [];
var amountWidgetItemNeededValueArrayGlobal = [];
var amountWidgetCommandNameGlobal = "";
var amountWidgetMaxInputGlobal = -1;
var divElementShowItemsUsedAreaGlobal;
var amountWidgetItemToAddGlobal = "";
var amountWidgetGainingLabelSpanElementGlobal;
var amountWidgetGainingLabelMultiplierGlobal = -1;
function initAmountWidget(parentId, itemToAdd, gainMultiplier, itemNeededNameArray, itemNeededValueArray, largeImageToShow, iconToShow, commandName, maxValue)
{
	if(maxValue == "NO_CAP") maxValue = 10000000000;
	
	var divElement = document.getElementById(parentId);

	if(itemNeededNameArray.length != itemNeededValueArray.length)
	{
		console.log("ERROR: Arrays are not the same length:initAmountWidget()")
		return;
	}
	
	//hidden element
	var inputElementsArray = divElement.getElementsByTagName("input");
	var amountInputElement = inputElementsArray[0];
	
	//show images
	var divImageElementArea = divElement.getElementsByTagName("div")[0];
	var ImageElementArray  = divImageElementArea.getElementsByTagName("img");
	ImageElementArray[0].src = largeImageToShow;
	ImageElementArray[1].src = iconToShow;
	
	var divElementShowItemsUsedArea = divElement.getElementsByTagName("div")[3];
	
	//get max possible
	var maxPossibleEnter = maxValue;
	var canAffordAMaxOf = 0;
	for(var i = 0; i < itemNeededNameArray.length; i++)
	{
		var itemName = itemNeededNameArray[i];
		var itemAmountNeeded = itemNeededValueArray[i];
		
		var itemNameAmount = window[itemName];
		
		if(itemNameAmount < itemAmountNeeded)
		{
			maxPossibleEnter = 0;
			break;
		}
		
		canAffordAMaxOf = parseInt(itemNameAmount/itemAmountNeeded);
		
		if(canAffordAMaxOf <= maxPossibleEnter)
		maxPossibleEnter = canAffordAMaxOf;
	}

	if(maxPossibleEnter == 0)
		maxPossibleEnter = 1;
	
	amountInputElement.value = maxPossibleEnter;
	//setGlobals
	parentIdGlobal = parentId;
	amountWidgetAmountInputElementGlobal = amountInputElement;
	amountWidgetItemsNeededNameArrayGlobal = itemNeededNameArray;
	amountWidgetItemNeededValueArrayGlobal = itemNeededValueArray;
	amountWidgetCommandNameGlobal = commandName;
	divElementShowItemsUsedAreaGlobal = divElementShowItemsUsedArea;
	amountWidgetMaxInputGlobal = maxPossibleEnter;
	amountWidgetItemToAddGlobal = itemToAdd;
	amountWidgetGainingLabelSpanElementGlobal = divImageElementArea.getElementsByTagName("span")[0];
	amountWidgetGainingLabelMultiplierGlobal = gainMultiplier;
	amountWidgetOnKeyUp();
}

function amountWidgetSetMaxValue(maxPossibleEnter)
{
	amountWidgetMaxInputGlobal = maxPossibleEnter;
	amountWidgetAmountInputElementGlobal.value = maxPossibleEnter;
	amountWidgetOnKeyUp();
}

function amountWidgetGetCommand()
{
	return amountWidgetCommandNameGlobal + "=" + amountWidgetItemToAddGlobal + "~" + amountWidgetAmountInputElementGlobal.value;
}

function amountWidgetClickHalf()
{
	amountWidgetAmountInputElementGlobal.value = parseInt(amountWidgetAmountInputElementGlobal.value/2);
	amountWidgetOnKeyUp();
}

function amountWidgetClickMax()
{
	amountWidgetAmountInputElementGlobal.value = amountWidgetMaxInputGlobal;
	amountWidgetOnKeyUp();
}

function amountWidgetDecreaseByOne()
{
	var inputElement = amountWidgetAmountInputElementGlobal;
	if(isNaN(inputElement.value))
	{
		inputElement.value = 0;
	}
	else
	{
		inputElement.value = parseInt(inputElement.value) - 1;
	}
	amountWidgetOnKeyUp();
}

function amountWidgetIncreaseByOne()
{
	var inputElement = amountWidgetAmountInputElementGlobal;
	if(isNaN(inputElement.value))
	{
		inputElement.value = 1;
	}
	else
	{
		inputElement.value = parseInt(inputElement.value) + 1;
	}
	amountWidgetOnKeyUp();
}

function amountWidgetOnKeyUp()
{
	var valueEntered = amountWidgetAmountInputElementGlobal.value;

	var htmlOutput = "";
	if(!isNaN(valueEntered))
	{
		
		for(var i = 0; i < amountWidgetItemsNeededNameArrayGlobal.length; i++)
		{
			var itemName = amountWidgetItemsNeededNameArrayGlobal[i];
			var itemAmountNeeded = amountWidgetItemNeededValueArrayGlobal[i];
			itemAmountNeeded *= valueEntered;
			
			htmlOutput += createHTMLBoxWithChecks(itemName, itemAmountNeeded, itemAmountNeeded)
		}
		if(amountWidgetGainingLabelMultiplierGlobal * valueEntered <= 0)
			amountWidgetGainingLabelSpanElementGlobal.style.display = "none";
		else
			amountWidgetGainingLabelSpanElementGlobal.style.display = "";
		amountWidgetGainingLabelSpanElementGlobal.innerHTML = "+" + formatNumber(parseInt(amountWidgetGainingLabelMultiplierGlobal * valueEntered));
	}
	
	divElementShowItemsUsedAreaGlobal.innerHTML = htmlOutput;
}