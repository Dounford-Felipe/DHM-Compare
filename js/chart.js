const groups = {"Gems": ["Sapphire","Emerald","Ruby","Diamond","Blood Diamond"],
  "Geodes": ["Geode 1","Geode 2","Geode 3","Geode 4","Geode 5","Geode 6"],
  "Promethium": ["Lava","Promethium","Promethium Bars"],
  "Titanium": ["Charcoal","Titanium","Titanium Bars"],
  "Ancient": ["Plasma","Ancient Ore","Ancient Bars"],
  "RefinedBars": ["Refined Gold Bars","Refined Promethium Bars"],
  "Coins": ["Coins"],
  "Energy": ["Energy"],
  "Chests": ["Daily Chest","Treasure Chest","Green Treasure Chest"],
  "Woods": ["Logs","Oak Logs","Willow Logs","Maple Logs","Redwood Logs","Pine Logs"],
  "Woods2": ["Haunted Logs","Jungle Logs","Lava Logs","Gold Logs","Magic Logs"],
  "StripedSeeds": ["Striped Green Leaf Seeds","Striped Gold Leaf Seeds","Striped Crystal Leaf Seeds"],
  "BrewingMaterials": ["Red Mushroom","Dotted Green Leaf","Green Leaf","Lime Leaf","Gold Leaf","Crystal Leaf"],
  "StripedLeaves": ["Striped Green Leaf","Striped Gold Leaf","Striped Crystal Leaf"],
  "Fields": ["Fields"],
  "Exploring1": ["Forests","Caves","Volcano","Northern Fields","Haunted Mansion","Desert","Ocean","Jungle"],
  "Exploring2": ["Dungeon Entrance","Dungeon","Dungeon Coffin","Castle","Cemetery","Factory","Haunted Woods","Deep Ocean"],
  "Enchanters": ["Shooting Star","Skeleton Sword","Scythe","Bone Amulet","Invisibility Amulet","Super Bow","Blood Diamond Stone Ring"],
  "BlueOrbs": ["Oil Well","Axe","Rake","Fishing Rod"],
  "GreenOrbs": ["Charcoal Foundry","Exploring","Metal Detector","Oil Factory"]}

var options = {
    animationEnabled: true,
    axisY: {
		title: "Total"
    },
    toolTip: {
		shared: true
    },
    legend: {
	cursor: "pointer",
    },
    data: []
};

function addData(data) {
	var titleName = data.replace(/([A-Z0-9])/g, ' $1').trim()
	var title = {
		text: titleName.toLocaleUpperCase() + " TOTAL"
    };
    options.title = title;
	for (let i = 0; i < groups[data].length;i++) {
    var dataSeries = {
		type: "line",
        name: groups[data][i],
        showInLegend: true,
        dataPoints: []
    };
	$.each(myjson[groups[data][i]], function(index, entry) {
		dataSeries.dataPoints.push({
			x: new Date(entry.date),
            y: entry.units
        });
    });
    options.data.push(dataSeries);
	}
	
	$("#chart"+data).CanvasJSChart(options);
	options.data = []
}

	

var myjson;
$.getJSON("https://panel.magiesugary.site:3000/stats", function(data){
    myjson = data;
	addAllCharts();
	$( ".tabs" ).tabs();
});

function addAllCharts() {
	$.each(groups, function (key) {
		addData(key)
	})
}