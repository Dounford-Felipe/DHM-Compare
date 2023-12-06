var craftListGlobal = "none";
function CraftingRecipe(itemName, skill, skillLevel, recipe, recipeCost, description, isMultiCraft, itemNameDisplay)
{
    this.itemName = itemName;
	this.skill = skill;
    this.skillLevel = skillLevel;
    this.recipe = recipe;
    this.recipeCost = recipeCost;
	this.description = description;
	this.isMultiCraft = isMultiCraft;
	this.itemNameDisplay = itemNameDisplay;
}

function BrewingRecipe(itemName, timeInSeconds, skill, skillLevel, recipe, recipeCost, description, itemNameDisplay, brewingNextPotionLevelNeeded, brewingNextPotionLevelNeededDesc, xp)
{
    this.itemName = itemName;
	this.skill = skill;
    this.skillLevel = skillLevel;
    this.recipe = recipe;
    this.recipeCost = recipeCost;
	this.description = description;
	this.itemNameDisplay = itemNameDisplay;
	this.timeInSeconds = timeInSeconds;
	this.brewingNextPotionLevelNeeded = brewingNextPotionLevelNeeded;
	this.brewingNextPotionLevelNeededDesc = brewingNextPotionLevelNeededDesc;
	this.xp = xp;
}

function setCraftList(val)
{
	craftListGlobal = val;
}
function loadCraftablesList()
{
		document.getElementById("item-section-crafting-3").innerHTML = "";
		var craftingRecipes = [];
		var craftableItemName = "";
		var section = "item-section-crafting-3";
		document.getElementById("population-next-building").style.display = "none";
		
		//to sell bear fur, snakeskin etc
		document.getElementById("crafting-sell-button").style.display = "none";
		
		if(craftListGlobal == "bronzeKeys")
		{
			craftableItemName = "bronzeKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[50], ["bronzeBars"],[5], "Used to open a treasure chest.",1000,"Bronze Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bronzeSapphireKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[100], ["bronzeBars","sapphire"],[5,1], "Used to open a treasure chest.",1000,"Sapphire Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bronzeEmeraldKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[150], ["bronzeBars","emerald"],[5,1], "Used to open a treasure chest.",1000,"Emerald Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bronzeRubyKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[200], ["bronzeBars","ruby"],[5,1], "Used to open a treasure chest.",1000,"Ruby Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bronzeDiamondKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[250], ["bronzeBars","diamond"],[5,1], "Used to open a treasure chest.",1000,"Diamond Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			return;
		}
		
		if(craftListGlobal.startsWith("mayor"))
		{
			var pollution;
			var power;
			var time;
			var populationRequirement;
			
			if(craftListGlobal == "mayorElectricity")
			{
				craftableItemName = "turbine";
				populationRequirement = 1;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 100;
					pollution = "No Pollution";
					time = 300;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[500], ["silverBars"],[5000], "<img src='images/mayorElectricityResource.png' class='img-tiny' /> " + formatNumber(power) + " kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Turbine"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
			
				craftableItemName = "powerplant";
				populationRequirement = 60;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 500;
					pollution = "Medium Pollution";
					time = 600;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[510], ["ironBars","goldBars"],[5000,3000], "<img src='images/mayorElectricityResource.png' class='img-tiny' /> " + formatNumber(power) + " kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Powerplant"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "oilPowerplant";
				populationRequirement = 100;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 2000;
					pollution = "High Pollution";
					time = 1800;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[520], ["ironBars","goldBars","oil"],[8000,3000,1000000], "<img src='images/mayorElectricityResource.png' class='img-tiny' /> " + formatNumber(power) + " kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Oil Powerplant"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "solarFarm";
				populationRequirement = 290;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 1500;
					pollution = "No Pollution";
					time = 3600*3;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["silverBars","promethiumBars"],[10000,250], "<img src='images/mayorElectricityResource.png' class='img-tiny' /> " + formatNumber(power) + " kWh<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Solar Farm"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "powerlines2";
				populationRequirement = 1900;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] == 0)
				{
					time = 3600*8;
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[800], ["redwoodLogs","powerlines"],[10000,1], "<img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br /> Increases your current powers lines from double to triple.",false,"Power Lines+"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				return;
			}
			
			if(craftListGlobal == "mayorWater")
			{
				craftableItemName = "waterPiping";
				populationRequirement = 65;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 100000)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[250], ["goldBars"],[25], "A primary material used to make water distrubtion systems.<br />Volume support: <img src='images/mayorWaterResource.png' class='img-tiny' /> 100 Liter per pipe<br />",100000,"Water Pipes"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "waterTower";
				populationRequirement = 65;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 30000;
					pollution = "No Pollution";
					time = 300;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[515], ["bronzeBars"],[20000], "<img src='images/mayorWaterResource.png' class='img-tiny' /> " + formatNumber(power) + " L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Water Tower"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
			
				craftableItemName = "waterFilteringPlant";
				populationRequirement = 110;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 100000;
					pollution = "No Pollution";
					time = 1800;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[550], ["bronzeBars"],[20000], "<img src='images/mayorWaterResource.png' class='img-tiny' /> " + formatNumber(power) + " L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Water Filtering Plant"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "waterFilteringMove";
				populationRequirement = 510;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] == 0)
				{
					power = 100000;
					pollution = "No Pollution";
					time = 3600*8;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[650], ["logs","mapleLogs","jungleLogs","waterFilteringPlant"],[20000,10000,5000,5], "Moves your water filtering plants above the sea, increasing its rate significantly.<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Move Water Plant"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "waterPipingValves";
				populationRequirement = 950;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 300000;
					pollution = "No Pollution";
					time = 3600*3;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[700], ["ironBars","silverBars"],[80000,70000], "<img src='images/mayorWaterResource.png' class='img-tiny' /> " + formatNumber(power) + " L<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Pipe Valves"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);

				}
				
				
				
				return;
			}
			
			if(craftListGlobal == "mayorEducation")
			{
				
				craftableItemName = "elementarySchool";
				populationRequirement = 70;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 100;
					pollution = "No Pollution";
					time = 1200;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[518], ["goldBars","promethiumBars"],[1000,100], "<img src='images/mayorEducationResourceIcon.png' class='img-tiny' /> " + formatNumber(power) + " Seats<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Elementary School"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "highschool";
				populationRequirement = 750;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 200;
					pollution = "No Pollution";
					time = 3600*5;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[700], ["silverBars","promethiumBars"],[20000,500], "<img src='images/mayorEducationResourceIcon.png' class='img-tiny' /> " + formatNumber(power) + " Seats<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"High School"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
			
				
				return;
			}
			
			if(craftListGlobal == "mayorSecurity")
			{
				
				
				craftableItemName = "fireStation";
				populationRequirement = 80;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 50;
					pollution = "No Pollution";
					time = 600;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[535], ["ironBars","goldBars","promethiumBars"],[10000,2000,75], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Fire Station"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
			
				
				craftableItemName = "policeStation";
				populationRequirement = 95;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 75;
					pollution = "No Pollution";
					time = 600;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[535], ["bronzeBars","silverBars"],[10000,10000], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Police Station"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "clinic";
				populationRequirement = 165;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 90;
					pollution = "No Pollution";
					time = 3600;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[560], ["ironBars","goldBars"],[20000,8000], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Clinic"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "prison";
				populationRequirement = 350;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 100;
					pollution = "No Pollution";
					time = 3600*3;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[650], ["bronzeBars","promethiumBars"],[20000,200], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Prison"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				craftableItemName = "museum";
				populationRequirement = 520;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] == 0)
				{
					power = "???";
					pollution = "No Pollution";
					time = 3600*5;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[750], ["ironBars","hauntedPainting"],[30000,1], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Museum"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
			
				}
				
				
				craftableItemName = "policeHeadquarters";
				populationRequirement = 1050;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName] < 5)
				{
					power = 500;
					pollution = "No Pollution";
					time = 3600*3;
				
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[870], ["silverBars","promethiumBars"],[50000,900], "<img src='images/mayorSecurityResource.png' class='img-tiny' /> " + formatNumber(power) + " Services<br /><img src='images/pollutionIcon.png' class='img-tiny' /> " + pollution + "<br /><img src='images/clock_white.png' class='img-tiny' /> " + formatTime(time)+ "<br />",false,"Police Headquarters"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				return;
			}
			
			if(craftListGlobal == "mayorUniques")
			{
				
				
				craftableItemName = "mayorUniqueBookKeeping";
				populationRequirement = 150;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[100000000], "Ability to earn mayor points based on population and mayor rating.",false,"Book Keeping"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
			
				
				craftableItemName = "extraService";
				populationRequirement = 200;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[500000000], "Ability to run an extra service.",false,"More Services"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "bulldozer";
				populationRequirement = 290;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[800000000], "Ability to destroy buildings.",false,"Bulldozer"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "parks";
				populationRequirement = 350;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["farming"],[750], ["coins"],[1900000000], "Add parks to your village increasing global happiness.",false,"Parks"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
			
				craftableItemName = "newServiceElectricityBoost";
				populationRequirement = 400;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[2100000000], "Unlocks new service.",false,"New Service"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "moreLand1";
				populationRequirement = 500;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[12000000000], "Unlocks more land increasing your population cap.",false,"Land"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
			
				craftableItemName = "powerlines";
				populationRequirement = 580;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[5000000000], "Doubles electricity output.",false,"Powerlines"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "moreLand2";
				populationRequirement = 800;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[50000000000], "Unlocks more land increasing your population cap.",false,"Land"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "cityWalls";
				populationRequirement = 1000;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[10000000000], "Ability to control the flow of population.",false,"City Walls"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "newServicePoliceBoost";
				populationRequirement = 1300;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[13000000000], "Unlocks new service.",false,"New Service"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "extraService2";
				populationRequirement = 1500;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[30000000000], "Ability to run an extra service.",false,"More Services"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				/*craftableItemName = "moreLand3";
				populationRequirement = 2000;
				if(populationRequirement > mayorPopulation) { document.getElementById("population-next-building").style.display = ""; document.getElementById("population-next-building").innerHTML = "Unlock more buildings by having a population of at least " + mayorPopulation + "/" + populationRequirement;  return; }
				if(window[craftableItemName]  == 0)
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["coins"],[300000000000], "Unlocks more land increasing your population cap.",false,"Land"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}*/
				
				
				return;
			}
		}
		
		if(craftListGlobal == "keys")
		{
			craftableItemName = "goldKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[100], ["goldBars"],[5], "Used to open a treasure chest.",1000,"Gold Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "sapphireKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[200], ["goldBars","sapphire"],[5,1], "Used to open a treasure chest.",1000,"Sapphire Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "emeraldKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["goldBars","emerald"],[5,1], "Used to open a treasure chest.",1000,"Emerald Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "rubyKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[400], ["goldBars","ruby"],[5,1], "Used to open a treasure chest.",1000,"Ruby Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "diamondKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[500], ["goldBars","diamond"],[5,1], "Used to open a treasure chest.",1000,"Diamond Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			return;
		}
		
		if(craftListGlobal == "promethiumKeys")
		{
			craftableItemName = "promethiumKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["promethiumBars"],[5], "Used to open a treasure chest.",1000,"Promethium Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumSapphireKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[400], ["promethiumBars","sapphire"],[5,1], "Used to open a treasure chest.",1000,"Sapphire Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumEmeraldKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[500], ["promethiumBars","emerald"],[5,1], "Used to open a treasure chest.",1000,"Emerald Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumRubyKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["promethiumBars","ruby"],[5,1], "Used to open a treasure chest.",1000,"Ruby Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumDiamondKey";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[700], ["promethiumBars","diamond"],[5,1], "Used to open a treasure chest.",1000,"Diamond Key"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			return;
		}
		
		if(craftListGlobal == "blueEmptyOrb")
		{
			craftableItemName = "blueAxeOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["blueEmptyOrb"],[1], "Gain more logs when chopping trees.",true,"Axe Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "blueRakeOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["blueEmptyOrb"],[1], "Gain more leaves when harvesting crops.",true,"Rake Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "blueOilWellOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["blueEmptyOrb"],[1], "Increases oil gain from oil wells.",true,"Oil Well Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "blueFishingRodOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["blueEmptyOrb"],[1], "Increase rate of catching fish",true,"Fishing Rod Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "greenEmptyOrb")
		{
			craftableItemName = "greenOilFactoryOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["greenEmptyOrb"],[1], "Hire more workers for the oil factory.",true,"Oil Factory Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "greenCharcoalFoundryOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["greenEmptyOrb"],[1], "Gain additional charcoal from the foundry.",true,"Charcoal Foundry Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "greenMetelDetectorOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["greenEmptyOrb"],[1], "Increases sell value of all statues.",true,"Metal Detector Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "greenExploringOrb";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["greenEmptyOrb"],[1], "Chance to get double, triple, or more loot bags from exploring.",true,"Exploring Orb"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "roverBlueprints")
		{
			craftableItemName = "roverTires";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["tar","ironBars"],[100,250], "An essential part to assemble a rover.",false,"Tires"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bronzeWire";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["bronzeBars"],[1000], "An essential part to assemble a rover.",false,"Copper Wire"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "solarPanels";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["glass","silverBars"],[12, 250], "An essential part to assemble a rover.",false,"Solar Panels"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "satelliteBlueprints")
		{
			craftableItemName = "satelliteAntenna";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["ironBars"],[100000], "An essential part to assemble a satellite.",false,"Antenna"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "satelliteBase";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["promethiumBars","titaniumBars"],[6000,1000], "An essential part to assemble a satellite.",false,"Satellite Base"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "satelliteSolarPanels";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["glass","silverBars"],[12, 50000], "An essential part to assemble a satellite.",false,"Solar Panels"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		
		if(craftListGlobal == "bearFur")
		{
			craftableItemName = "bearFurMask";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[130], ["bearFur"],[4], "Offers protection for the explorer.",false,"Bear Mask"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bearFurBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[130], ["bearFur"],[8], "Offers protection for the explorer.",false,"Bear Top"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "bearFurLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[130], ["bearFur"],[6], "Offers protection for the explorer.",false,"Bear Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			document.getElementById("crafting-sell-button").style.display = "";
			document.getElementById("crafting-sell-button").setAttribute("onclick","openSellDialogue('"+craftListGlobal+"')")
			document.getElementById("crafting-sell-button-price").innerHTML = formatNumber(getItemPrice(craftListGlobal));
			
			return;
		}
		
		if(craftListGlobal == "snakeskin")
		{
			craftableItemName = "snakeskinMask";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[220], ["snakeskin"],[10], "Offers protection for the explorer.",false,"Snakeskin Mask"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		
			craftableItemName = "snakeskinBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[220], ["snakeskin"],[30], "Offers protection for the explorer.",false,"Snakeskin Top"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "snakeskinLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[220], ["snakeskin"],[20], "Offers protection for the explorer.",false,"Snakeskin Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			if(snakeskinCapeScrollUsed == 1)
			{
				craftableItemName = "snakeskinCape";
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[220], ["snakeskin"],[1000], "Offers protection for the explorer.",false,"Snakeskin Cape"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			document.getElementById("crafting-sell-button").style.display = "";
			document.getElementById("crafting-sell-button").setAttribute("onclick","openSellDialogue('"+craftListGlobal+"')")
			document.getElementById("crafting-sell-button-price").innerHTML = formatNumber(getItemPrice(craftListGlobal));
			
			return;
		}
		
		if(craftListGlobal == "lavaSnakeskin")
		{
			craftableItemName = "lavaSnakeskinMask";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["lavaSnakeskin"],[10], "Offers protection for the explorer.",false,"lava Snake Mask"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "lavaSnakeskinBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["lavaSnakeskin"],[30], "Offers protection for the explorer.",false,"lava Snake Top"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "lavaSnakeskinLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["lavaSnakeskin"],[20], "Offers protection for the explorer.",false,"lava Snake Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			if(lavaSnakeskinCapeScrollUsed == 1)
			{
				craftableItemName = "lavaSnakeskinCape";
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["lavaSnakeskin"],[1000], "Offers protection for the explorer.",false,"Lava Snakeskin Cape"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			document.getElementById("crafting-sell-button").style.display = "";
			document.getElementById("crafting-sell-button").setAttribute("onclick","openSellDialogue('"+craftListGlobal+"')")
			document.getElementById("crafting-sell-button-price").innerHTML = formatNumber(getItemPrice(craftListGlobal));
			
			return;
		}
		
		if(craftListGlobal == "lizardskin")
		{
			craftableItemName = "lizardskinMask";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["lizardskin"],[10], "Offers protection for the explorer.",false,"lizard Mask"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "lizardskinBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["lizardskin"],[30], "Offers protection for the explorer.",false,"lizard Top"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "lizardskinLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["lizardskin"],[20], "Offers protection for the explorer.",false,"lizard Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			if(lizardskinCapeScrollUsed == 1)
			{
				craftableItemName = "lizardskinCape";
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["lizardskin"],[1000], "Offers protection for the explorer.",false,"Lizardskin Cape"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			document.getElementById("crafting-sell-button").style.display = "";
			document.getElementById("crafting-sell-button").setAttribute("onclick","openSellDialogue('"+craftListGlobal+"')")
			document.getElementById("crafting-sell-button-price").innerHTML = formatNumber(getItemPrice(craftListGlobal));
			
			return;
		}
		
		if(craftListGlobal == "sandstormSpellScroll")
		{
			craftableItemName = "sandstormSpellScroll";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["sandstormSpellScroll1","sandstormSpellScroll2","sandstormSpellScroll3"],[1,1,1], "Combining these will allow me to learn a new spell.",false,"Sandstorm Spellscroll"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			return;
		}
		
		if(craftListGlobal == "elephantSkin")
		{
			craftableItemName = "elephantMask";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[550], ["elephantSkin"],[10], "Offers protection for the explorer.",false,"Elephant Mask"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "elephantBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[550], ["elephantSkin"],[30], "Offers protection for the explorer.",false,"Elephant Top"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "elephantLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[550], ["elephantSkin"],[20], "Offers protection for the explorer.",false,"Elephant bottom"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			if(elephantCapeScrollUsed == 1)
			{
				craftableItemName = "elephantCape";
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["elephantSkin"],[1000], "Offers protection for the explorer.",false,"Elephant Cape"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			document.getElementById("crafting-sell-button").style.display = "";
			document.getElementById("crafting-sell-button").setAttribute("onclick","openSellDialogue('"+craftListGlobal+"')")
			document.getElementById("crafting-sell-button-price").innerHTML = formatNumber(getItemPrice(craftListGlobal));
			
			return;
		}
		
		
		if(craftListGlobal == "promethiumMould")
		{
			craftableItemName = "promethiumHelmet";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["promethiumHelmetMould","promethiumBars"],[1,300], "Offers protection for the explorer.",false,"Promethium Helmet"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["promethiumBodyMould","promethiumBars"],[1,800], "Offers protection for the explorer.",false,"Promethium Body"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "promethiumLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["promethiumLegsMould","promethiumBars"],[1,500], "Offers protection for the explorer.",false,"Promethium Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "titaniumMould")
		{
			craftableItemName = "titaniumHelmet";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[800], ["promethiumHelmet","titaniumHelmetMould","titaniumBars"],[1,1,300], "Offers protection for the explorer.",false,"Titanium Helmet"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "titaniumBody";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[800], ["promethiumBody","titaniumBodyMould","titaniumBars"],[1,1,800], "Offers protection for the explorer.",false,"Titanium Body"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "titaniumLegs";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[800], ["promethiumLegs","titaniumLegsMould","titaniumBars"],[1,1,500], "Offers protection for the explorer.",false,"Titanium Legs"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "pumpkin")
		{
			craftableItemName = "trimmedDarkMageHood";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["pumpkin","darkMageHood"],[100,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			craftableItemName = "trimmedDarkMageTop";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["pumpkin","darkMageTop"],[500,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			craftableItemName = "trimmedDarkMageBottom";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["pumpkin","darkMageBottom"],[300,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			
			return;
		}
		
		if(craftListGlobal == "candyCane")
		{
			craftableItemName = "trimmedBloodReaperHood";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["candyCane","bloodReaperHood"],[10,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			craftableItemName = "trimmedBloodReaperTop";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["candyCane","bloodReaperTop"],[30,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			craftableItemName = "trimmedBloodReaperBottom";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["candyCane","bloodReaperBottom"],[20,1], "A trimmed version, purely cosmetic.",false,"Trimmed Robe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			
			return;
		}
		
		if(craftListGlobal == "skeletonSwordEnchanter")
		{
			craftableItemName = "enchantedSkeletonSword";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["skeletonSword","shootingStar","skeletonSwordEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Skele Sword"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
		if(craftListGlobal == "superBowEnchanter")
		{
			craftableItemName = "enchantedSuperBow";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["superBow","shootingStar","superBowEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Super Bow"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
			
		if(craftListGlobal == "bloodDiamondStoneRingEnchanter")
		{
			craftableItemName = "enchantedBloodDiamondStoneRing";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["bloodDiamondStoneRing","shootingStar","bloodDiamondStoneRingEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Berserker Ring"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
		if(craftListGlobal == "poisonSquidInk")
		{
			craftableItemName = "superPoisonSpear";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["poisonSpear","poisonSquidInk"],[1,1], "Poison on this weapon will now deal more damage.",false,"Posion Spear +"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "superPoisonArrows";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["poisonArrows","poisonSquidInk"],[25,1], "Poison will now deal more damage.",true,"25 Posion Arrows +"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			craftableItemName = "superPoisonTrident";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["trident","poisonSquidInk"],[1,3], "Poisons a trident with super poison.",false,"Poison Trident +"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			return;
		}
		
		if(craftListGlobal == "squidHorn")
		{
			craftableItemName = "tridentSoldierHelmetPlus";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["tridentSoldierHelmet","squidHorn1","squidHorn2"],[1,1,1], "Upgrades the trident solider helmet for higher defence.",false,"Trident Soldier Helmet+"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			

			return;
		}
		
		if(craftListGlobal == "seaweed")
		{
			craftableItemName = "seaweedDish";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["seaweed","dottedGreenLeaf","greenLeaf"],[10,100,100], "Can be consumed for 10,000 energy.",1000000000,"Seaweed Dish"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			return;
		}
		
		if(craftListGlobal == "scytheEnchanter")
		{
			craftableItemName = "enchantedScythe";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["scythe","shootingStar","scytheEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Scythe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
		if(craftListGlobal == "invisibilityAmuletEnchanter")
		{
			craftableItemName = "enchantedInvisibilityAmulet";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["invisibilityAmulet","shootingStar","invisibilityAmuletEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Invisibility Amulet"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
		if(craftListGlobal == "boneAmuletEnchanter")
		{
			craftableItemName = "enchantedBoneAmulet";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["boneAmulet","shootingStar","boneAmuletEnchanter"],[3,1,1], "Enchants a piece of gear giving it special powers.",false,"Enchanted Bone Amulet"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);

			
			return;
		}
		
		if(craftListGlobal == "oilPlatformDeckBroken")
		{
			craftableItemName = "oilPlatformDeck";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["oilPlatformDeckBroken","oakLogs","mapleLogs","redwoodLogs","jungleLogs"],[1,8000,6000,4000,2000], "Fixes one of three parts for the offshore oil facility.",false,"Oil Platform Deck"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			
			return;
		}
		
		if(craftListGlobal == "offshoreOilRigBroken")
		{
			craftableItemName = "offshoreOilRig";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["offshoreOilRigBroken","silverBars","promethiumBars","titaniumBars"],[1,50000,5000,1000], "Fixes one of three parts for the offshore oil facility.",false,"Oil Rig"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "oilPlatformBaseBroken")
		{
			craftableItemName = "oilPlatformBase";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["oilPlatformBaseBroken","bronzeBars","ironBars","ancientOreBars"],[1,100000,75000,50], "Fixes one of three parts for the offshore oil facility.",false,"Platform Base"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "oilPlatform")
		{
			craftableItemName = "oilPlatform";
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["oilPlatformBase","offshoreOilRig","oilPlatformDeck"],[1,1,1], "An oil platform operated offshore.  Requires installation.",false,"Oil Platform"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			
			return;
		}
		
		if(craftListGlobal == "barRefinery")
		{
			craftableItemName = "goldSapphireDisplay";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[225], ["refinedGoldBars","sapphire"],[5,1], "Can be sold for a lot of coins.",false,"Sapphire Display"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			craftableItemName = "goldEmeraldDisplay";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["refinedGoldBars","emerald"],[5,1], "Can be sold for a lot of coins.",false,"Emerald Display"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			craftableItemName = "goldRubyDisplay";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[375], ["refinedGoldBars","ruby"],[5,1], "Can be sold for a lot of coins.",false,"Ruby Display"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			craftableItemName = "goldDiamondDisplay";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["refinedGoldBars","diamond"],[5,1], "Can be sold for a lot of coins.",false,"Diamond Display"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			if(promethiumBarRefinery > 0)
			{
				craftableItemName = "promethiumSapphireDisplay";
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["refinedPromethiumBars","sapphire"],[5,1], "Can be sold for a lot of coins.",false,"Sapphire Display"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "promethiumEmeraldDisplay";
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[675], ["refinedPromethiumBars","emerald"],[5,1], "Can be sold for a lot of coins.",false,"Emerald Display"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "promethiumRubyDisplay";
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[725], ["refinedPromethiumBars","ruby"],[5,1], "Can be sold for a lot of coins.",false,"Ruby Display"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
				
				craftableItemName = "promethiumDiamondDisplay";
				{
					craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[800], ["refinedPromethiumBars","diamond"],[5,1], "Can be sold for a lot of coins.",false,"Diamond Display"));
					addRecipeToTable(craftingRecipes[craftableItemName], section);
				}
			}
			return;
		}
		
		if(craftListGlobal == "skeletonCemetery")
		{
			craftableItemName = "skeletonCemetery";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["skeletonHead","skeletonLeftArm","skeletonRightArm","skeletonLeftLeg","skeletonRightLeg","bones"],[1,1,1,1,1,100], "Brings the skeleton to life, I should be well prepared.",false,"Skeleton"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			craftableItemName = "fireSkeletonCemetery";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["skeletonHead","skeletonLeftArm","skeletonRightArm","skeletonLeftLeg","skeletonRightLeg","ashes"],[1,1,1,1,1,100], "Brings the skeleton to life, I should be well prepared.",false,"Fire Skeleton"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			craftableItemName = "iceSkeletonCemetery";
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["skeletonHead","skeletonLeftArm","skeletonRightArm","skeletonLeftLeg","skeletonRightLeg","iceBones"],[1,1,1,1,1,100], "Brings the skeleton to life, I should be well prepared.<br /><b style='color:orange'>Warning: </b> Cold combat environment",false,"Ice Skeleton"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
			return;
		}
		
		craftableItemName = "bronzeOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1], ["bronzeBars"],[10], "Gain 1 oil per second.",false,"Oil Well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "axe";
		if(window[craftableItemName] == 0)
		{
			if(sapphireAxe == 0 && emeraldAxe == 0 && rubyAxe == 0 && diamondAxe == 0 && bloodDiamondAxe == 0)
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[5], ["ironBars"],[1], "Ability to cut down trees.",false,"Axe"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
			
		}
		
		craftableItemName = "bronzeFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[10], ["bronzeBars","stoneFurnace"],[30, 1], "Increases the max load of your furnace.",false,"Bronze Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[12], ["logs"],[15], "Upgrade the shop to carry new items.",false,"Community Center"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "drills";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[15], ["bronzeBars"],[50], "Mine different types of ore.",false,"Drills"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "rake";
		if(window[craftableItemName] == 0)
		{
			if(sapphireRake == 0 && emeraldRake == 0 && rubyRake == 0 && diamondRake == 0 && bloodDiamondRake == 0)
			{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[20], ["ironBars"],[1], "Ability to find seeds for farming.",false,"Rake"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
		}
		
		craftableItemName = "ironOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[25], ["ironBars","bronzeOilWell"],[10, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ironFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[30], ["ironBars"],[100], "Increases the max load of your furnace.",false,"Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}

		
		craftableItemName = "communityCenter2";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[35], ["oakLogs","communityCenter"],[15,1], "Upgrade the shop to carry new items.",false,"Community Center 2"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "crushers";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[40], ["goldBars"],[25], "Mine different types of ore.",false,"Crushers"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "silverOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[45], ["silverBars","ironOilWell"],[100, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "shovel";
		if(window[craftableItemName] == 0)
		{
			if(sapphireShovel == 0 && emeraldShovel == 0 && rubyShovel == 0 && diamondShovel == 0 && bloodDiamondShovel == 0)
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting","woodcutting"],[50,30], ["ironBars","logs"],[10,20], "Collect the tree roots after chopping a tree down, granting more woodcutting XP",false,"Shovel"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
		}
		
		craftableItemName = "communityCenter3";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[55], ["willowLogs","communityCenter2"],[15,1], "Upgrade the shop to carry new items.",false,"Community Center 3"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
	
		
		craftableItemName = "bronzeOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[60], ["stone","bronzeBars"],[5000,500], "Ability to cook food.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
			craftableItemName = "fishingRod";
		if(window[craftableItemName] == 0)
		{
			if(sapphireFishingRod == 0 && emeraldFishingRod == 0 && rubyFishingRod == 0 && diamondFishingRod == 0 && bloodDiamondFishingRod == 0)
			{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[62], ["willowLogs","fishingHook"],[5,1], "Ability to catch fish using bait.",false,"Fishing Rod"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
		}
		
		craftableItemName = "bonemealBin";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[70], ["logs","mapleLogs"],[500,50], "Ability to convert bones to bonemeal.",false,"Bonemeal Bin"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "goldOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[75], ["goldBars","silverOilWell"],[100, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ironOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[80], ["ironBars","bronzeOven"],[1000,1], "Upgrades your oven and reduces burn rates.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "silverFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[85], ["silverBars","ironFurnace"],[500,1], "Increases the max load of your furnace.",false,"Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter4";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[90], ["mapleLogs","communityCenter3"],[15,1], "Upgrade the shop to carry new items.",false,"Community Center 4"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "tradingPost";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[100], ["goldBars"],[100], "Ability to trade with other players.",false,"Trading Post"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "metalDetector";
		if(window[craftableItemName] == 0 && promethiumMetalDetector == 0 && titaniumMetalDetector == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[105], ["silverBars","goldBars"],[500,100], "Allows the explorer to find valuable metallic statues.",false,"Metal Detector"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "geodeChisel";
		if(window[craftableItemName] == 0)
		{
			if(geodeQuest == 2)
			{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[105], ["silverBars","mapleLogs"],[5,10], "You don't know how to use this.",false,"Chisel"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
		}
		
		craftableItemName = "goldFurnace";
		if(window[craftableItemName] == 0)
		{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[110], ["goldBars","silverFurnace"],[500,1], "Increases the max load of your furnace.",false,"Furnace"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "bronzeOilFactory";
		if(window[craftableItemName] == 0)
		{
				craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[115], ["bronzeBars"],[2500], "Hire factory workers to increase oil income.",false,"Factory"));
				addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "silverOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[120], ["silverBars","ironOven"],[1000,1], "Upgrades your oven and reduces burn rates.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "giantDrills";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting","mining"],[125,100], ["ironBars","silverBars"],[2000,2000], "Mine different types of ore.",false,"Giant Drills"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		
		craftableItemName = "ironBucket";
		if(window[craftableItemName] < 10)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[140], ["ironBars"],[100], "A bucket that can hold lava.",10,"Iron Bucket"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter5";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[150], ["redwoodLogs","communityCenter4"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 5"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "goldOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[160], ["goldBars","silverOven"],[1000,1], "Upgrades your oven and reduces burn rate.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "promethiumOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[170], ["promethiumBars","goldOilWell"],[10, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ironOilFactory";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[180], ["ironBars","bronzeOilFactory"],[2500, 1], "Increases factory worker capacity.",false,"Oil Factory"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "rowBoat";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[200], ["logs"],[1000], "Ability to send out your boat for extra fish.",false,"Row Boat"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "goldBarRefinery";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[210], ["ironBars","goldBars"],[5000,1000], "Ability to refine bars and craft expensive items.",false,"Gold Refinery"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter6";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[220], ["pineLogs","communityCenter5"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 6"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "promethiumMetalDetector";
		if(window[craftableItemName] == 0 && titaniumMetalDetector == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[250], ["promethiumBars","metalDetector"],[35,1], "Significantly increases the chance of finding metal statues.",false,"Metal Detector"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "train";
		{
			var showCraftable = false;
			if(trainTracks == 0 && window[craftableItemName] == 0) showCraftable = true;
			if(trainTracks == 1 && window[craftableItemName] < 5 && !showCraftable) showCraftable = true;
			
			if(showCraftable)
			{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[280], ["ironBars","goldBars"],[10000,1000], "Send a train to find ores.",false,"Mining Train"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
			}
		}
		
		craftableItemName = "promethiumFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[300], ["promethiumBars","goldFurnace"],[50,1], "Increases the max load of your furnace.",false,"Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "canoeBoat";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[350], ["oakLogs"],[1000], "Ability to send out your boat for extra fish.",false,"Canoe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "planter";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[365], ["promethiumBars","goldBars","farmer"],[20,8000,1], "Ability to automate harvesting and planting.",false,"Planter"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "promethiumOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[380], ["promethiumBars","goldOven"],[100,1], "Upgrades your oven and reduces burn rate.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "mineralNecklace";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 6)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[395], ["topazMineral","purpleQuartzMineral","clearMarbleMineral"],[15,8,3], "A necklace that can be worn by the farmer, lumberjack, explorer etc.",false,"Necklace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "trainTracks";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[400], ["promethiumBars","ironBars"],[250,25000], "Ability to craft and send up to 5 trains.",false,"Train Tracks"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "sailBoat";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[420], ["willowLogs","mapleLogs"],[1000,1000], "Ability to send out your boat for extra fish.",false,"Sail Boat"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "oxygenTank";
		if(window[craftableItemName] == 0 && cape != "oxygenTank")
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[450], ["ironBars","silverBars"],[50,10], "Ability to send your explore in deep waters.",false,"Oxygen Tank"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter7";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[480], ["hauntedLogs","communityCenter6"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 7"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "silverOilFactory";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[500], ["silverBars","ironOilFactory"],[10000, 1], "Increases factory worker capacity.",false,"Oil Factory"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "charcoalFoundry";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[520], ["ironBars","silverBars","promethiumBars"],[25000,15000,500], "Produce charcoal from logs.",false,"Charcoal Foundery"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[535], ["titaniumBars","promethiumOilWell"],[10, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "rocket";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[550], ["bronzeBars","silverBars","goldBars","promethiumBars"],[30000, 20000,10000,700], "Ability to send the rocket to the moon.",false,"Rocket"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		

		craftableItemName = "roadHeaders";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting","mining"],[575,300], ["goldBars","promethiumBars"],[20000, 1000], "Mine different types of ore.",false,"Road header"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter8";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[600], ["jungleLogs","communityCenter7"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 8"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumMetalDetector";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[615], ["titaniumBars","promethiumMetalDetector"],[35,1], "Significantly increases the chance of finding metal statues.",false,"Metal Detector"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "steamBoat";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[620], ["ironBars","redwoodLogs","pineLogs","hauntedLogs"],[20000,1000,1000,1000], "Ability to send out your boat for extra fish.",false,"Steam Boat"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
	
		craftableItemName = "titaniumSpyglass";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[630], ["titaniumBars","pirates"],[5,8], "Ability to find green treasure maps.",false,"Spyglass"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumPlanter";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[635], ["titaniumBars","goldBars","planter","farmer"],[20,16000,1,1], "Increases the amount of seeds that can be loaded into the planter.",false,"Upgrade Planter"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[650], ["titaniumBars","promethiumFurnace"],[50,1], "Increases the max load of your furnace.",false,"Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "promethiumBarRefinery";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[670], ["ironBars","promethiumBars","goldBarRefinery"],[10000,500,1], "Ability to refine bars and craft expensive items.",false,"Promethium Refinery"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		
		craftableItemName = "rocketBoosters";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[680], ["promethiumBars","silverBars","ironBars","rocket"],[1000,25000,50000,1], "Increases the rocket's speed.",false,"Rocket Boosters"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "goldOilFactory";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[700], ["goldBars","silverOilFactory"],[25000, 1], "Increases factory worker capacity.",false,"Oil Factory"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
	
		
		
		craftableItemName = "titaniumOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[720], ["titaniumBars","promethiumOven"],[95,1], "Upgrades your oven and reduces burn rate.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "lavaPlant";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[730], ["titaniumBars","ironBars","silverBars","lavaLogs"],[200,50000,20000,400], "Ability to hook up a pipe line to the volcano.  Requires installation.",false,"Lava Plant"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "lavaPlantPipe";
		if(lavaPlantPipeCrafted < 4)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[730], ["titaniumBars","promethiumBars","ironBars","silverBars"],[20,80,5000,2000], "A pipe piece capable of transporting lava.",false,"Pipe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter9";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[735], ["lavaLogs","communityCenter8"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 9"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		

		craftableItemName = "excavators";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting","mining"],[750,650], ["promethiumBars","titaniumBars"],[5000, 400], "Mine different types of ore.",false,"Excavator"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumHeatShield";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[780], ["titaniumBars","rocket","rover"],[500,1,1], "Ability to send your rocket to the sun.",false,"Titanium Heat Shield"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter10";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[820], ["goldLogs","communityCenter9"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 10"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "promethiumOilFactory";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[830], ["promethiumBars","goldOilFactory"],[8000,1], "Increases factory worker capacity.",false,"Oil Factory"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientOilWell";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[875], ["ancientOreBars","titaniumOilWell"],[5, 1], "Increases oil extraction.",false,"Oil well"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientPlanter";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[890], ["ancientOreBars","goldBars","titaniumPlanter","farmer"],[5,32000,1,1], "Ability for your planter to automatically use fertilize potions.",false,"Upgrade Planter"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumCharcoalFoundry";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[900], ["titaniumBars","ironBars","charcoalFoundry"],[1200,50000,1], "Increases charcoal yield by 15%",false,"Upgrade Charcoal Foundry"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "mineralNecklace2";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 9)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[920], ["denseMarbleMineral","amethystMineral","tanzaniteMineral","mineralNecklace"],[15,8,3,1], "Upgrades your necklace, increasing the rate of collecting crates.",false,"Necklace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "titaniumOilFactory";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[940], ["titaniumBars","promethiumOilFactory"],[3000,1], "Increases factory worker capacity.",false,"Oil Factory"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientFurnace";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[950], ["ancientOreBars","titaniumFurnace"],[40,1], "Increases the max load of your furnace.",false,"Furnace"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientOven";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1000], ["ancientOreBars","titaniumOven"],[80,1], "Upgrades your oven and reduces burn rate.",false,"Oven"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "communityCenter11";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1100], ["magicLogs","communityCenter10"],[50,1], "Upgrade the shop to carry new items.",false,"Community Center 11"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "superRocketBoosters";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1250], ["promethiumBars","titaniumBars","ancientOreBars","rocketBoosters"],[10000,5000,200,1], "Increases the rocket's speed significantly.",false,"Rocket Boosters+"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "magnet";
		if(window[craftableItemName] == 0 && craftingResearchLevel >= 10)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1270], ["unchargedMagnet","shootingStar"],[1,3], "Retrieve back your arrows when using them in combat 20% of the time.",false,"Magnet"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		
		craftableItemName = "ancientOxygenTank";
		if(window[craftableItemName] == 0 && cape != "ancientOxygenTank")
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1300], ["ancientOreBars","silverBars"],[50,10], "Ability to send your explore in deeper waters.",false,"Oxygen Tank"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "giantExcavators";
		if(window[craftableItemName] < 5)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting","mining"],[1350,1000], ["promethiumBars","titaniumBars","ancientOreBars"],[10000, 2000, 100], "Mine different types of ore.",false,"Giant Excavator"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientLavaPlant";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1420], ["ancientOreBars","goldBars","lavaLogs","lavaPlant"],[300,40000,5000,1], "Produces four times the lava.  Requires installation.",false,"Ancient Lava Plant"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "ancientLavaPlantPipe";
		if(ancientLavaPlantPipeCrafted < 4)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1420], ["ancientOreBars","promethiumBars"],[20,500], "A pipe piece capable of transporting a lot of lava.",false,"Ancient Pipe"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "superLobsterCage";
		if(window[craftableItemName] == 0)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1450], ["magicLogs","lobsterCage"],[200,1], "Increases the catch rate of lobsters by 300%.",false,"Super Lobster Cage"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
		
		craftableItemName = "robotMiner";
		if(window[craftableItemName] == 0 && sapphireRobotMiner == 0 && emeraldRobotMiner == 0 && rubyRobotMiner == 0 && diamondRobotMiner == 0 && bloodDiamondRobotMiner == 0 && craftingResearchLevel >= 11)
		{
			craftingRecipes[craftableItemName] = (new CraftingRecipe(craftableItemName,["crafting"],[1700], ["titaniumBars","ancientOreBars","trackWheels"],[10000,1500, 1], "Ability to dig deep into the earth.",false,"Robot Miner"));
			addRecipeToTable(craftingRecipes[craftableItemName], section);
		}
}

var brewingRecipesGlobal = [];
var brewingRecipesGlobalIndex = [];
var brewingRecipesByBrewingNextLevelNeededGlobal = [];
function loadBrewingList()
{
		document.getElementById("item-section-brewing-2").innerHTML = "";
		var brewingItemName = "";
		var section = "item-section-brewing-2";
		var timeInSeconds = 0;
		var brewingNextPotionLevelNeeded = 0;
		var brewingNextPotionLevelNeededDesc = "";
		var brewingLevelReq = 0;
		var brewingPotionXp = 0;
		var brewingIndexArray = 0;
		
		
		//rich pots
		brewingItemName = "richPiratesPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = -1;
		brewingPotionXp = 0;
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[0], [],[], "Pirates have a very high chance of finding maps, this potion also guarantees at least one map drop while active.","Pirates Potion ++",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "richSeedFinderPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = -1;
		brewingPotionXp = 0;
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[0], [],[], "Significantly increases the chance of finding seeds.","Pirates Potion ++",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "richGeodePotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = -1;
		brewingPotionXp = 0;
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[0], [],[], "Significantly increases the rate of finding geodes.","Geode Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		
		brewingItemName = "richCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = -1;
		brewingPotionXp = 0;
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[0], [],[], "Increases chance of triggering the research perk that let's you use a combat potion in combat for free, forever. (Increase from 1% to 10%).","<span style='font-size:35pt;'>&infin;</span> IN-COMBAT",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		//end
		
		brewingItemName = "furnaceSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 0;
		brewingPotionXp = 50;
		brewingNextPotionLevelNeededDesc = "Drink "+brewingNextPotionTracker+"/2 furnace speed potions to unlock next recipe.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[1], ["dottedGreenLeaf","redMushroom"],[3,10], "Your furnace will smelt bars twice as fast.","Furnace Speed",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "seedFinderPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 1;
		brewingLevelReq = 5;
		brewingPotionXp = 250;
		brewingNextPotionLevelNeededDesc = "Find one seed triggered by the seed finder potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","redMushroom"],[2,15], "Increases your chance of finding seeds by 10%","Seed Finder",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		
		brewingItemName = "compostPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 2;
		brewingLevelReq = 10;
		brewingPotionXp = 1000;
		brewingNextPotionLevelNeededDesc = "Drink "+brewingNextPotionTracker+"/20 potions of any kind.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["greenLeaf","redMushroom"],[1,30], "Crops grow twice as fast.","Compost Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "treeCompostPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 3;
		brewingLevelReq = 20;
		brewingPotionXp = 2500;
		brewingNextPotionLevelNeededDesc = "Drink "+brewingNextPotionTracker+"/10 compost potions to unlock next recipe.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","greenLeaf"],[10,10], "Trees grow twice as fast.","Compost Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "fishingSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 4;
		brewingLevelReq = 30;
		brewingPotionXp = 5000;
		brewingNextPotionLevelNeededDesc = "Catch a fish using the fishing speed potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","redMushroom","shrimp"],[15,50,1], "Find fish twice as fast.","Fishing Speed",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "woodcuttingXpPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 5;
		brewingLevelReq = 40;
		brewingPotionXp = 10000;
		brewingNextPotionLevelNeededDesc = "Grow "+brewingNextPotionTracker+"/5 trees with a bronze star bonus.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["greenLeaf","redMushroom"],[15,100], "If a tree starts growing, it will automatically have a bronze star bonus.","Bronze Star",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		
		brewingItemName = "exploringSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 6;
		brewingLevelReq = 50;
		brewingPotionXp = 15000;
		brewingNextPotionLevelNeededDesc = "Have 7 potions running at once.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","redMushroom"],[20,100], "Your exploring is twice as fast.","Explorer Speed",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "baitPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 7;
		brewingLevelReq = 60;
		brewingPotionXp = 22000;
		brewingNextPotionLevelNeededDesc = "Find some bait using the bait potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["greenLeaf","limeLeaf","bait"],[20,10,1], "Finds fishing bait passively.","Bait Finder",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "farmingXpPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 8;
		brewingLevelReq = 70;
		brewingPotionXp = 30000;
		brewingNextPotionLevelNeededDesc = "Trigger the farming bronze star potion "+brewingNextPotionTracker+"/20 times";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","redMushroom"],[5,250], "Planting new crops will make them have a bronze star bonus.","Bronze Star",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "woodcuttingUpgradePotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 9;
		brewingLevelReq = 80;
		brewingPotionXp = 45000;
		brewingNextPotionLevelNeededDesc = "Upgrade your trees using the upgrade potion "+brewingNextPotionTracker+"/5 times";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","limeLeaf","redMushroom"],[1,10,250], "Can be used on a woodcutting patch to upgrade the tree.","Upgrade Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "fastCompostPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 10;
		brewingLevelReq = 90;
		brewingPotionXp = 55000;
		brewingNextPotionLevelNeededDesc = "Drink the compost+ potion "+brewingNextPotionTracker+"/20 times.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","compostPotion"],[50,1], "Crops grow much faster.","Compost Potion+",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "hpCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 11;
		brewingLevelReq = 100;
		brewingPotionXp = 62000;
		brewingNextPotionLevelNeededDesc = "Heal for a total of "+brewingNextPotionTracker+"/30 hitpoints";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["greenLeaf","limeLeaf"],[100,50], "Heals 5 HP during combat.","HP Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "oilPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 12;
		brewingLevelReq = 120;
		brewingPotionXp = 75000;
		brewingNextPotionLevelNeededDesc = "Gain 140 oil per second.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","redMushroom"],[2,200], "Doubles oil income.","Oil Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "freezeCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 13;
		brewingLevelReq = 135;
		brewingPotionXp = 88000;
		brewingNextPotionLevelNeededDesc = "Use two types of potion in combat on the same fight.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","redMushroom"],[5,350], "Freezes the enemy for 5 seconds.","Freeze Enemy",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "coinPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 14;
		brewingLevelReq = 150;
		brewingPotionXp = 100000;
		brewingNextPotionLevelNeededDesc = "Generate a total of " + formatNumber(coinPotionGenerated) + "/1B coins.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","greenLeaf","coins"],[5,250,100000], "Gains coins over time.","Coin Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "artifactPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded = 15;
		brewingLevelReq = 175;
		brewingPotionXp = 130000;
		brewingNextPotionLevelNeededDesc = "Trigger the artifact potion "+brewingNextPotionTracker+"/30 times.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","goldLeaf","redMushroom"],[1,5,400], "Guarantees an artifact drop from an exploring loot bag.","Artifact Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
	
		brewingItemName = "fertilizeSoilPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 200;
		brewingPotionXp = 160000;
		brewingNextPotionLevelNeededDesc = "Harvest 16 gold leaves from one patch.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","goldLeaf","bonemeal"],[50,10,10], "Fertilizes soil for leaf and mushroom patches.","Fertilize Soil",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "ignoreDefenceCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 220;
		brewingPotionXp = 180000;
		brewingNextPotionLevelNeededDesc = "Drink the ignore defence potion "+brewingNextPotionTracker+"/15 times.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","greenLeaf"],[250,100], "Ignore enemy defence on your next hit.","Ignore Defence",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "piratesPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 250;
		brewingPotionXp = 210000;
		brewingNextPotionLevelNeededDesc = "Find a treasure map using the pirates potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","limeLeaf"],[300,50], "Doubles your chances of finding a treasure map.","Pirates Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "ghostScanCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 270;
		brewingPotionXp = 230000;
		brewingNextPotionLevelNeededDesc = "Cast ghost scan in three different fights in under 50 minutes.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","redMushroom"],[15,300], "Ability to see ghosts.","Ghost Scan",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "treeRootsPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 300;
		brewingPotionXp = 260000;
		brewingNextPotionLevelNeededDesc = "Have 4 tree roots potion active at once.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","goldLeaf","limeLeaf"],[5,25,200], "The next tree you chop down will have more roots.","Tree Roots Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "superHpCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 340;
		brewingPotionXp = 275000;
		brewingNextPotionLevelNeededDesc = "Heal for a total of " + heroHealTotal + "/500 hp";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","limeLeaf","redMushroom"],[5,50,500], "Heals 25 HP during combat.","Super HP Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "promethiumPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 400;
		brewingPotionXp = 298000;
		brewingNextPotionLevelNeededDesc = "Mine " + brewingNextPotionTracker + "/250 promethium using the promethium potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["dottedGreenLeaf","redMushroom"],[300,600], "Increases promethium from giant drills.","Promethium Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "resetFightingPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 435;
		brewingPotionXp = 315000;
		brewingNextPotionLevelNeededDesc = "Reset your combat while exploring the castle.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","greenLeaf"],[90,250], "Ability to fight a second time in the same area.","Reset Combat",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "rocketSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 475;
		brewingPotionXp = 360000;
		brewingNextPotionLevelNeededDesc = "Drink a rocket speed potion while flying towards or away from the sun.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["crystalLeaf","limeLeaf","charcoal"],[15,250,50], "Makes your rocket go much faster.","Rocket Speed",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "strengthCombatPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 550;
		brewingPotionXp = 500000;
		brewingNextPotionLevelNeededDesc = "Use a strength combat potion while fighting a zombie.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","redMushroom",],[5,1000], "Increases accuracy and attack bonus by 25%.","Strength Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "cureInfectionPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 600;
		brewingPotionXp = 580000;
		brewingNextPotionLevelNeededDesc = "Cure a zombie infection " + brewingNextPotionTracker + "/3 times.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","crystalLeaf","goldLeaf",],[1,10,50], "Cures being infected by a zombie. <br />May <u>not</u> be used in combat.","Infection Cure",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "fruitTreePotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 750;
		brewingPotionXp = 675000;
		brewingNextPotionLevelNeededDesc = "Grow "+brewingNextPotionTracker+"/20 fruits trees with the fruit tree potion.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","goldLeaf","limeLeaf"],[5,50,350], "Only fruit trees will grow.","Fruit Tree Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "titaniumPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 900;
		brewingPotionXp = 900000;
		brewingNextPotionLevelNeededDesc = "Upgrade a pineapple bush into a starfruit tree "+brewingNextPotionTracker+"/3 times";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","crystalLeaf","limeLeaf"],[8,100,500], "Increases titanium from excavators drills.","Titanium Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "woodcuttingDowngradePotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 950;
		brewingPotionXp = 1200000;
		brewingNextPotionLevelNeededDesc = "Downgrade a pine tree "+brewingNextPotionTracker+"/2  while fighting a frozen ent.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","goldLeaf","limeLeaf"],[4,200,1000], "Can be used on a woodcutting patch to downgrade the tree.","Downgrade Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "researchSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 1000;
		brewingPotionXp = 1400000;
		brewingNextPotionLevelNeededDesc = "Arrive at the sun while having a rocket speed potion running the whole trip.";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["stripedGreenLeaf","stripedGoldLeaf","greenLeaf"],[4,4,1000], "Doubles your researching speed.","Research Speed Potion",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		brewingItemName = "superRocketSpeedPotion";
		timeInSeconds = getPotionTimer(brewingItemName);
		brewingNextPotionLevelNeeded += 1;
		brewingLevelReq = 1100;
		brewingPotionXp = 1700000;
		brewingNextPotionLevelNeededDesc = "todo";
		brewingRecipesGlobal[brewingItemName] = (new BrewingRecipe(brewingItemName,timeInSeconds,["brewing"],[brewingLevelReq], ["goldLeaf","crystalLeaf","stripedGoldLeaf","stripedCrystalLeaf","charcoal"],[250,100,20,10,1000], "Makes your rocket go extremely fast.","Super Rocket Speed",brewingNextPotionLevelNeeded,brewingNextPotionLevelNeededDesc,brewingPotionXp));
		brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevelNeeded] = brewingRecipesGlobal[brewingItemName];
		brewingRecipesGlobalIndex[brewingIndexArray] = brewingRecipesGlobal[brewingItemName]; brewingIndexArray++;
		addRecipeToBrewingTable(brewingRecipesGlobal[brewingItemName], section);
		
		//---
		if(brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevel] != null)
			document.getElementById("brewing-next-unlock-text").innerHTML = brewingRecipesByBrewingNextLevelNeededGlobal[brewingNextPotionLevel].brewingNextPotionLevelNeededDesc;
		else
			document.getElementById("brewing-next-unlock-text").innerHTML = "TO DO"

}

function addRecipeToBrewingTable(brewingRecipeChosen, section)
{
	var itemName = brewingRecipeChosen.itemName;
	var skill = brewingRecipeChosen.skill; //array
	var skillLevel = brewingRecipeChosen.skillLevel; // array
	var recipe = brewingRecipeChosen.recipe; //array
	var recipeCost = brewingRecipeChosen.recipeCost; //array
	var itemNameDisplay = brewingRecipeChosen.itemNameDisplay;
	var timeInSeconds = brewingRecipeChosen.timeInSeconds;
	var brewingNextPotionLevelNeeded = brewingRecipeChosen.brewingNextPotionLevelNeeded;
	var description = brewingRecipeChosen.description;

	if(brewingNextPotionLevelNeeded == -1)
		return;
	
	if(brewingNextPotionLevel < brewingNextPotionLevelNeeded)
		return;

	var sectionDiv = document.getElementById(section);
	var divButton = document.createElement("div");
	divButton.setAttribute("class","main-button-lighter");
	var tableElement = document.createElement("table");
	var trElement = document.createElement("tr");
	
	//td 1
	var tdElement = document.createElement("td");
	var imgElement = document.createElement("img");
	imgElement.setAttribute("src","images/" + itemName + ".png");
	imgElement.setAttribute("class","img-medium");
	
	//td 2
	var tdElement2 = document.createElement("td");
	tdElement2.setAttribute("class","main-button-table-tr-td2");

	
	//name
	var span2 = document.createElement("span");
	if(itemNameDisplay == null)
		span2.innerHTML = getItemName(itemName).toUpperCase();
	else
		span2.innerHTML = itemNameDisplay;
	
	if(timeInSeconds > 0)
		span2.innerHTML += "<br /><span style='color:gold;font-size:12pt;'>" + formatTime(timeInSeconds); +" </span>"; 
	
	var hr1 = document.createElement("hr");
	hr1.setAttribute("class","no-space");
	
	//desc
	var span3 = document.createElement("span");
	span3.setAttribute("class","main-button-span-desc");
	var spanThreeHTML = description + "<br />";
	
	//level needed label
	for(var i = 0; i < skill.length; i++)
	{
		var color = lightRedColor;
		if(getLevel(window[skill[i] + "Xp"]) >= skillLevel[i])
			color = lightGreenColor;
		
		if(skill == "crafting")
			spanThreeHTML += "<img src='images/"+skill[i]+"Skill2.png' class='img-tiny' />"; //lighter image
		else
			spanThreeHTML += "<img src='images/"+skill[i]+"Skill.png' class='img-tiny' />";
		
		spanThreeHTML += "<span style='color:"+color+"'> Level " + skillLevel[i] + "</span>";
		spanThreeHTML += "<br />";
	}
	
	//level needed label
	for(var i = 0; i < recipe.length; i++)
	{
		spanThreeHTML += "<img src='images/"+recipe[i]+".png' class='img-tiny' />";
		
		var color = lightRedColor;
		if(window[recipe[i]] >= recipeCost[i])
			color = lightGreenColor;
		
		spanThreeHTML += " <span style='color:"+color+";'> " + formatNumber(recipeCost[i]) + "</span>";
		spanThreeHTML += "<br />";
	}
	
	span3.innerHTML = spanThreeHTML;
	

	tdElement2.appendChild(span2);
	tdElement2.appendChild(hr1);
	tdElement2.appendChild(span3);
	tdElement.appendChild(imgElement);
	trElement.appendChild(tdElement);
	trElement.appendChild(tdElement2);
	tableElement.appendChild(trElement);
	divButton.appendChild(tableElement);
	sectionDiv.appendChild(divButton);
	
	$(divButton).click(function() 
	{
		confirmRecipeDialogue(brewingRecipeChosen,"brew");
	});
}

function openBrewMenuFromDrinkPotion(potionName)
{
	confirmRecipeDialogue(brewingRecipesGlobal[potionName],"brew");
}

function addToBrewingPotionTimers(itemChosen, parentDiv)
{
	var itemName = itemChosen;
	
	var sectionDiv = document.getElementById(parentDiv);
	var divElement = document.createElement("div");
	divElement.setAttribute("id",itemName + "-potion-timer");
	divElement.setAttribute("class","potion-timer")
	var imgElement = document.createElement("img");
	imgElement.setAttribute("class","img-small")
	imgElement.setAttribute("src","images/" + itemName + ".png")
	var spanElement = document.createElement("span");
	spanElement.setAttribute("id", itemName + "-timer");
	spanElement.innerHTML = "#timer";
	divElement.onclick = function()
	{
		document.getElementById("clicksPotionNotification-desc").innerHTML = "<center><img src='images/"+itemName+".png' class='img-medium' /> <br /><br />"+brewingRecipesGlobal[itemName].description+"</center>"; 
		document.getElementById("clicksPotionNotification-drinkAgainButton").setAttribute("onclick","clicksItem('"+itemName+"');closeSmittysDialogue('dialogue-clicksPotionNotification');");
		document.getElementById("clicksPotionNotification-brewMore").setAttribute("onclick","openBrewMenuFromDrinkPotion('"+itemName+"');closeSmittysDialogue('dialogue-clicksPotionNotification');");
		if(hideBrewingTimers == 0) document.getElementById("clicksPotionNotification-showOnlyInBrewing").src = "images/rememberMeIconOff_dark.png"; else document.getElementById("clicksPotionNotification-showOnlyInBrewing").src = "images/rememberMeIconOn_dark.png";
		openDialogue("dialogue-clicksPotionNotification"); 
	}
	
	divElement.appendChild(imgElement);
	divElement.appendChild(spanElement);
	sectionDiv.appendChild(divElement);
}

function addRecipeToTable(craftingRecipeChosen, section)
{
	var itemName = craftingRecipeChosen.itemName;
	var skill = craftingRecipeChosen.skill; //array
	var skillLevel = craftingRecipeChosen.skillLevel; // array
	var recipe = craftingRecipeChosen.recipe; //array
	var recipeCost = craftingRecipeChosen.recipeCost; //array
	var multiCraftAmount = craftingRecipeChosen.isMultiCraft; //false if N/A, if not a number for max
	var itemNameDisplay = craftingRecipeChosen.itemNameDisplay;
	var description = craftingRecipeChosen.description;
	
	
	var sectionDiv = document.getElementById(section);
	var divButton = document.createElement("div");
	divButton.setAttribute("class","main-button-lighter");
	if(craftListGlobal == "mayorElectricity") divButton.setAttribute("style","background-color:#3C4108")
	if(craftListGlobal == "mayorWater") divButton.setAttribute("style","background-color:#272C71")
	if(craftListGlobal == "mayorEducation") divButton.setAttribute("style","background-color:#482340");
	if(craftListGlobal == "mayorSecurity") divButton.setAttribute("style","background-color:#492424");
	var tableElement = document.createElement("table");
	var trElement = document.createElement("tr");
	
	//td 1
	var tdElement = document.createElement("td");
	var imgElement = document.createElement("img");
	imgElement.setAttribute("src","images/" + getPngOrGif(itemName, false));
	imgElement.setAttribute("class","img-medium");
	
	//td 2
	var tdElement2 = document.createElement("td");
	tdElement2.setAttribute("class","main-button-table-tr-td2");

	
	//name
	var span2 = document.createElement("span");
	if(itemNameDisplay == null)
		span2.innerHTML = getItemName(itemName).toUpperCase();
	else
		span2.innerHTML = itemNameDisplay;
	
	var hr1 = document.createElement("hr");
	hr1.setAttribute("class","no-space");
	
	//desc
	var span3 = document.createElement("span");
	span3.setAttribute("class","main-button-span-desc");
	var spanThreeHTML = description + "<br />";
	
	//level needed label
	for(var i = 0; i < skill.length; i++)
	{
		var color = lightRedColor;
		if(getLevel(window[skill[i] + "Xp"]) >= skillLevel[i])
			color = "lime";
		
		if(skill == "crafting")
			spanThreeHTML += "<img src='images/"+skill[i]+"Skill2.png' class='img-tiny' />"; //lighter image
		else
			spanThreeHTML += "<img src='images/"+skill[i]+"Skill.png' class='img-tiny' />";
		spanThreeHTML += "<span style='color:"+color+"'> Level " + skillLevel[i] + "</span>";
		spanThreeHTML += "<br />";
	}
	
	//level needed label
	for(var i = 0; i < recipe.length; i++)
	{
		spanThreeHTML += "<img src='images/"+getPngOrGif(recipe[i], false)+"' class='img-tiny' />";
		
		var color = lightRedColor;
		if(window[recipe[i]] >= recipeCost[i])
			color = "lime";
		
		spanThreeHTML += " <span style='color:"+color+"'> " + formatNumber(recipeCost[i]) + "</span>";
		spanThreeHTML += "<br />";
	}
	
	span3.innerHTML = spanThreeHTML;
	

	tdElement2.appendChild(span2);
	tdElement2.appendChild(hr1);
	tdElement2.appendChild(span3);
	tdElement.appendChild(imgElement);
	trElement.appendChild(tdElement);
	trElement.appendChild(tdElement2);
	tableElement.appendChild(trElement);
	divButton.appendChild(tableElement);
	sectionDiv.appendChild(divButton);
	
	$(divButton).click(function() 
	{
		confirmRecipeDialogue(craftingRecipeChosen,"craftingItems");
	});
}