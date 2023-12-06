function RawFood(itemNameRaw, itemNameCooked, levelReq, xp, energyGiven, heatRequired)
{
    this.itemNameRaw = itemNameRaw;
	this.itemNameCooked = itemNameCooked;
	this.levelReq = levelReq;
    this.xp = xp;
	this.energyGiven = parseInt(energyGiven);
	this.heatRequired = parseInt(heatRequired);
}

var foodArrayGlobal = [];
var HEAT_MULTIPLIER_GLOBAL = 0.5;
function initFoodArray()
{
	var foodNameRaw = "";
	var foodNameCooked = "";
	var indexId = 0;
	var levelReq = 0;
	var xpGained = 0;
	var energyGiven = 0;
	var heatRequired = 0;
	
	foodNameRaw = "none";
	foodNameCooked = "apple"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 25;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "cheese"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 35;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawShrimp";
	foodNameCooked = "shrimp"
	levelReq = 1;
	xpGained = 150;
	energyGiven = 50;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "potato"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 75;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "pumpkin"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "candyCane"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	
	foodNameRaw = "none";
	foodNameCooked = "honey"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "nopal"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shrimp2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawSardine";
	foodNameCooked = "sardine"
	levelReq = 20;
	xpGained = 500;
	energyGiven = 200;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	

	foodNameRaw = "rawChicken";
	foodNameCooked = "chicken"
	levelReq = 1;
	xpGained = 800;
	energyGiven = 225;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shrimp3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 250;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "bananas"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 225;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "caveCarrot"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 250;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "sardine2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 400;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawTuna";
	foodNameCooked = "tuna"
	levelReq = 50;
	xpGained = 5000;
	energyGiven = 500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawSnail";
	foodNameCooked = "snail"
	levelReq = 55;
	xpGained = 5500;
	energyGiven = 600;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shrimp4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 1000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "sardine3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 1000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "tuna2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 1000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "rawPiranha";
	foodNameCooked = "piranha"
	levelReq = 150;
	xpGained = 9000;
	energyGiven = 1000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "snail2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 1200;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawSwordfish";
	foodNameCooked = "swordfish"
	levelReq = 70;
	xpGained = 12000;
	energyGiven = 2000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "piranha2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 2000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawSeaTurtle";
	foodNameCooked = "seaTurtle"
	levelReq = 75;
	xpGained = 14000;
	energyGiven = 2500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawLobster";
	foodNameCooked = "lobster"
	levelReq = 78;
	xpGained = 16000;
	energyGiven = 3000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "tuna3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 2500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "snail3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 3000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "sardine4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 4000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "swordfish2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 4000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawEel";
	foodNameCooked = "eel"
	levelReq = 80;
	xpGained = 20000;
	energyGiven = 4000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "seaTurtle2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 5000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "rawShark";
	foodNameCooked = "shark"
	levelReq = 85;
	xpGained = 25000;
	energyGiven = 5000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "piranha3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 5000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "lobster2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 6000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawCrab";
	foodNameCooked = "crab"
	levelReq = 88;
	xpGained = 28000;
	energyGiven = 6500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawMantaRay";
	foodNameCooked = "mantaRay"
	levelReq = 120;
	xpGained = 30000;
	energyGiven = 7500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "coconuts"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 8000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "seaweedDish"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	
	
	foodNameRaw = "none";
	foodNameCooked = "eel2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 8000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawBloodChicken";
	foodNameCooked = "bloodChicken"
	levelReq = 220;
	xpGained = 60000;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "goldApple"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "tuna4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "swordfish3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shark2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawWhale";
	foodNameCooked = "whale"
	levelReq = 150;
	xpGained = 50000;
	energyGiven = 10000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "snail4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 12000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "seaTurtle3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 12500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "crab2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 13000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "lobster3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 15000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "mantaRay2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 15000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "pineapple"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 20000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "eel3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 20000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "whale2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 20000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "piranha4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 20000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shark3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 25000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "rawRainbowFish";
	foodNameCooked = "rainbowFish"
	levelReq = 300;
	xpGained = 100000;
	energyGiven = 25000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "crab3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 32500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "mantaRay3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 37500;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "swordfish4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 40000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "seaTurtle4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 50000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "whale3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 50000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "rainbowFish2"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 50000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "lobster4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 60000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "eel4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 80000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "shark4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "starfruit"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 100000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	
	foodNameRaw = "none";
	foodNameCooked = "rainbowFish3"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 125000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;


	foodNameRaw = "none";
	foodNameCooked = "crab4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 130000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "mantaRay4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 150000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "whale4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 200000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
	
	foodNameRaw = "none";
	foodNameCooked = "rainbowFish4"
	levelReq = -1;
	xpGained = -1;
	energyGiven = 500000;
	heatRequired = energyGiven * HEAT_MULTIPLIER_GLOBAL;
	foodArrayGlobal[foodNameRaw] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[foodNameCooked] = new RawFood(foodNameRaw, foodNameCooked, levelReq,xpGained, energyGiven, heatRequired);
	foodArrayGlobal[indexId] = foodArrayGlobal[foodNameRaw]; indexId++;
}

function openDialogueToEat(foodChosen)
{
	
	if(energyTotal >= 100000)
	{
		document.getElementById("dialogue-eat-extra-btn").style.display = "";
		document.getElementById("dialogue-eat-extra-btn-element").onclick = 
			function()
			{ 
				confirmDialogue("90%","<center><img src='images/foods.png' class='img-large' /><br /><br />Consume your food based on custom settings?</center>","Confirm","Cancel","CONSUME_ALL_FOOD");
				closeSmittysDialogue('dialogue-eat')
			};
			
	}
	initAmountWidget("amount-widget-eat-food",foodChosen,foodArrayGlobal[foodChosen].energyGiven,[foodChosen],[1],"images/"+foodChosen+".png","images/steak.png","CONSUME","NO_CAP")
	openDialogue("dialogue-eat","90%")
}

function openDialogueToCook(foodChosen)
{
	var energyGiven = foodArrayGlobal[foodChosen].energyGiven;
	var heatNeeded = foodArrayGlobal[foodChosen].heatRequired;
	
	initAmountWidget("amount-widget-cook-food",foodChosen,energyGiven,[foodChosen,"heat"],[1,heatNeeded],"images/"+foodChosen+".png","images/steak.png","COOK","NO_CAP");
	openDialogue("dialogue-cook","90%");
}

function openDialogueToCookBurntLeaves(stripedLeafChosen)
{
	var energyGiven = 0;
	var heatNeeded = 1000;
	
	var maxAmount = 1000 - burntStripedLeaf;
	if(maxAmount < 0) maxAmount = 0; 
	
	initAmountWidget("amount-widget-cook-food",stripedLeafChosen,energyGiven,[stripedLeafChosen,"heat"],[1,heatNeeded],"images/"+stripedLeafChosen+".png","images/steak.png","COOK",maxAmount);
	openDialogue("dialogue-cook","90%");
}


function refreshCookingLevelRequirementColors()
{
	for(var i = 0; i < foodArrayGlobal.length; i++)
	{
		var foodFound = foodArrayGlobal[i];
		if(foodFound.itemNameRaw != "none")
		{
			if(foodFound.levelReq > getLevel(cookingXp))
				document.getElementById(foodFound.itemNameRaw + "-" + "level").style.color = lightRedColor;
			else
				document.getElementById(foodFound.itemNameRaw + "-" + "level").style.color = lightGreenColor;
		}
	}
	
	if(bait >= 5)
		document.getElementById("rowBoat-baitNeeded").style.color = lightGreenColor;
	else
		document.getElementById("rowBoat-baitNeeded").style.color = lightRedColor;
	
	if(bait >= 25)
		document.getElementById("canoeBoat-baitNeeded").style.color = lightGreenColor;
	else
		document.getElementById("canoeBoat-baitNeeded").style.color = lightRedColor;
	
	if(bait >= 100)
		document.getElementById("sailBoat-baitNeeded").style.color = lightGreenColor;
	else
		document.getElementById("sailBoat-baitNeeded").style.color = lightRedColor;
	
	if(bait >= 250)
		document.getElementById("steamBoat-baitNeeded").style.color = lightGreenColor;
	else
		document.getElementById("steamBoat-baitNeeded").style.color = lightRedColor;
	
	
	if(bait >= 500)
		document.getElementById("trawler-baitNeeded").style.color = lightGreenColor;
	else
		document.getElementById("trawler-baitNeeded").style.color = lightRedColor;
	
	refreshChangedItemSwitch("sailBoatTimer");
}

function getCurrentWindLevel(windLevel)
{
	if(windLevel == 0)
		return "low";
	else if(windLevel == 1)
		return "medium";
	else if(windLevel == 2)
		return "high";
	else if(windLevel == 3)
		return "very high";
	
}
function getBaitNeeded(boatChosen)
{
	var baitNeeded = 0;
	switch(boatChosen)
	{
		case "rowBoat":
			baitNeeded = 5;
		break;
		case "canoeBoat":
			baitNeeded = 25;
		break;
		case "sailBoat":
			baitNeeded = 100;
		break;
		case "steamBoat":
			baitNeeded = 250;
		break;
		case "trawler":
			baitNeeded = 500;
		break;
	}
	
	return baitNeeded;
}

function openOvenDialogueChooseLogs()
{
	var tableElements = document.getElementById("dialogue-oven1").getElementsByTagName("table");
	
	//start i at one to always show logs button
	for(var i = 0; i < tableElements.length; i++)
	{
		var logTypeFound = tableElements[i].id.split("-")[2];
		if(window[logTypeFound] > 0)
			tableElements[i].parentNode.style.display = "";
		else
		{
			if(logTypeFound != "logs")
				tableElements[i].parentNode.style.display = "none";
			else
				tableElements[i].parentNode.style.display = "";
		}
			
		
		document.getElementById("dialogue-oven1-heat-" + logTypeFound).innerHTML = getHeatPerLog(logTypeFound);
	}
	
	openDialogue("dialogue-oven1","90%");
}

function getHeatPerLog(logChosen)
{
	var value = 0;
	switch(logChosen)
	{
		case "logs":
		value = 1;
		break;
		case "oakLogs":
		value =  2;
		break;
		case "willowLogs":
		case "entLogs":
		value =  3;
		break;
		case "mapleLogs":
		case "kindle":
		value =  4;
		break;
		case "redwoodLogs":
		value =  5;
		break;
		case "lavaKindle":
		case "pineLogs":
		value =  6;
		break;
		case "hauntedLogs":
		value =  7;
		break;
		case "jungleLogs":
		value =  8;
		break;
		case "lavaLogs":
		value =  9;
		break;
		case "goldLogs":
		value =  10;
		break;
		case "magicLogs":
		value =  12;
		break;
		case "goldenKindle":
		value =  13;
		break;
		default:
		value =  0;
		break;
	}
	
	if(cookingResearchLevel >= 5)
		value *= 2;
	
	return value;
}

function getOvenType()
{
	if(ancientOven == 1)
		return "ancientOven";
	if(titaniumOven == 1)
		return "titaniumOven";
	if(promethiumOven == 1)
		return "promethiumOven";
	if(goldOven == 1)
		return "goldOven";
	if(silverOven == 1)
		return "silverOven";
	if(ironOven == 1)
		return "ironOven";
	if(bronzeOven == 1)
		return "bronzeOven";
}

function chooseLogsForOvenDialogue(logsChosen)
{
	initAmountWidget("amount-widget-oven-add-heat",logsChosen,getHeatPerLog(logsChosen),[logsChosen],[1],"images/"+getOvenType()+".png","images/heat.png","ADD_HEAT","NO_CAP")
	openDialogue("dialogue-oven2","90%")
}

function clicksChef()
{
	if(chef == 0) return;
	if(chefTimer > 1)
	{
		confirmDialogue("90%","<center><img src='images/chef.png' class='img-large '/> <br /><br />Sorry amigo, currently dealing with another customer.  I'll be ready in: "+formatTime(chefTimer)+"</center>","Close","","")
		return;
	}
	else if(chefTimer == 1)
	{
		document.getElementById("chef-reroll-btn").style.display = "none";
		document.getElementById("chef-reroll-btn-2").style.display = "none";
		document.getElementById("chef-reroll-btn-3").style.display = "none";
		document.getElementById("chef-force-reroll-btn").style.display = "none";
		document.getElementById("chef-force-reroll-btn-2").style.display = "none";
		document.getElementById("chef-force-reroll-btn-3").style.display = "none";
			
		//show ingredients available
		if(chefQuest3 == -1)
		{
			if(chefReroll == 0)
			{
				document.getElementById("chef-reroll-btn").style.display = "";
				document.getElementById("chef-reroll-btn-2").style.display = "";
				document.getElementById("chef-reroll-btn-3").style.display = "";
			}
		}
		
		if(chefReroll == 1 || chefQuest3 != -1)
		{
			document.getElementById("chef-force-reroll-btn").style.display = "";
			document.getElementById("chef-force-reroll-btn-2").style.display = "";
			document.getElementById("chef-force-reroll-btn-3").style.display = "";
		}

		
		
		for(var i = 1 ; i <= 3; i++)
		{	
			var htmlOuput = "<center><u>Ingredients Required:</u><br />";
			var recipeNumber = i;
			var tdElement = document.getElementById("dialogue-chef-recipe"+recipeNumber+"-td");
			if(hasFishForChef(window["chefRecipeItem"+recipeNumber+1], window["chefRecipeAmount"+recipeNumber+1]))
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+1],0,window["chefRecipeAmount"+recipeNumber+1] + " " + getItemName(window["chefRecipeItem"+recipeNumber+1]));
			else
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+1],window["chefRecipeAmount"+recipeNumber+1],window["chefRecipeAmount"+recipeNumber+1] + " " + getItemName(window["chefRecipeItem"+recipeNumber+1]));
			
			if(hasFishForChef(window["chefRecipeItem"+recipeNumber+2], window["chefRecipeAmount"+recipeNumber+2]))
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+2],0,window["chefRecipeAmount"+recipeNumber+2] + " " + getItemName(window["chefRecipeItem"+recipeNumber+2]));
			else
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+2],window["chefRecipeAmount"+recipeNumber+2],window["chefRecipeAmount"+recipeNumber+2] + " " + getItemName(window["chefRecipeItem"+recipeNumber+2]));
			
			if(hasFishForChef(window["chefRecipeItem"+recipeNumber+3], window["chefRecipeAmount"+recipeNumber+3]))
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+3],0,window["chefRecipeAmount"+recipeNumber+3] + " " + getItemName(window["chefRecipeItem"+recipeNumber+3]));
			else
			htmlOuput += createHTMLBoxWithChecks(window["chefRecipeItem"+recipeNumber+3],window["chefRecipeAmount"+recipeNumber+3],window["chefRecipeAmount"+recipeNumber+3] + " " + getItemName(window["chefRecipeItem"+recipeNumber+3]));
			
			
			htmlOuput += "</center><hr />";
			htmlOuput += "<center><img src='images/energy.png' class='img-small-medium' /> <b style='font-size:15pt;'>+" + formatNumber(window["chefRecipeEnergy" + i]) + " energy</b></center>";
			tdElement.innerHTML = htmlOuput;
		}
		
		
		openDialogue("dialogue-chef-recipe1");
	}
}

function getCurrentFishingRod()
{
	if(fishingRod == 1)
		return "fishingRod";
	if(sapphireFishingRod == 1)
		return "sapphireFishingRod";
	if(emeraldFishingRod == 1)
		return "emeraldFishingRod";
	if(rubyFishingRod == 1)
		return "rubyFishingRod";
	if(diamondFishingRod == 1)
		return "diamondFishingRod";
	if(bloodDiamondFishingRod == 1)
		return "bloodDiamondFishingRod";
	
	return "none";
}

function hasFishForChef(fishName, fishAmount)
{
	var userAmount = 0;
	userAmount += window[fishName];
	if(userAmount >= fishAmount) return true;
	userAmount += window[fishName + "2"];
	if(userAmount >= fishAmount) return true;
	userAmount += window[fishName + "3"];
	if(userAmount >= fishAmount) return true;
	userAmount += window[fishName + "4"];
	if(userAmount >= fishAmount) return true;
	
	return false;
}

function hideOvenItemsBoxes()
{
	refreshChangedItemSwitch("bronzeOven");
	refreshChangedItemSwitch("ironOven");
	refreshChangedItemSwitch("silverOven");
	refreshChangedItemSwitch("goldOven");
	refreshChangedItemSwitch("promethiumOven");
	refreshChangedItemSwitch("titaniumOven");
	refreshChangedItemSwitch("ancientOven");
	refreshChangedItemSwitch("superLobsterCage");
}

function refreshCustomConsumeOptionCheckboxes()
{
	var idPrefix = "customize-food-checkbox";
	
	if(customConsume == 0 || customConsume == "none")
		return;
	
	if(customConsume.charAt(0) == 'Y') document.getElementById(idPrefix + "-eatAllFish").src = 'images/rememberMeIconOn_dark.png';
	if(customConsume.charAt(1) == 'Y') document.getElementById(idPrefix + "-eatAllFishBronze").src = 'images/rememberMeIconOn_dark.png';
	if(customConsume.charAt(2) == 'Y') document.getElementById(idPrefix + "-eatAllFishSilver").src = 'images/rememberMeIconOn_dark.png';
	if(customConsume.charAt(3) == 'Y') document.getElementById(idPrefix + "-eatAllFishGold").src = 'images/rememberMeIconOn_dark.png';
	if(customConsume.charAt(4) == 'Y') document.getElementById(idPrefix + "-eatAllNonFish").src = 'images/rememberMeIconOn_dark.png';
	if(customConsume.charAt(5) == 'Y') document.getElementById(idPrefix + "-eatAllIgnoreChef").src = 'images/rememberMeIconOn_dark.png';
	
	if(chefQuest2 != -1) document.getElementById("custom-consume-chef-quest").style.display = "none"; else document.getElementById("custom-consume-chef-quest").style.display = "";
	
}
function saveCustomConsumeOptions()
{
	var saveData = "";
	var idPrefix = "customize-food-checkbox";
	if(document.getElementById(idPrefix + "-eatAllFish").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	if(document.getElementById(idPrefix + "-eatAllFishBronze").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	if(document.getElementById(idPrefix + "-eatAllFishSilver").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	if(document.getElementById(idPrefix + "-eatAllFishGold").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	if(document.getElementById(idPrefix + "-eatAllNonFish").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	if(document.getElementById(idPrefix + "-eatAllIgnoreChef").src.endsWith("images/rememberMeIconOff_dark.png")) saveData += "N"; else saveData += "Y";
	
	sendBytes("SAVE_CUSTOM_CONSUME=" + saveData);
}