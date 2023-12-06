function refreshMissionsTable(data)
{
	var htmlOutput = "";
	var canClaimReward = true;
	var dataArray = data.split("~");
	var missionIdRefresh = dataArray[0];
	
	for(var i = 1 ; i < dataArray.length; i++)
	{
		var missionDesc = dataArray[i]; i++;
		var completedMission = dataArray[i] == 'Y';
		
		if (completedMission) 
		{
			htmlOutput += "<div class='main-button-mission-green'>";
		}
		else 
		{
			canClaimReward = false;
			htmlOutput += "<div class='main-button-mission-red'>";
		}
		htmlOutput += "<table>";
		htmlOutput += "<tr>";
		htmlOutput += "<td>";
		htmlOutput += missionDesc;
		htmlOutput += "</td>";
		htmlOutput += "</tr>";
		htmlOutput += "</table>";
		htmlOutput += "</div>";
	}
	
	if(canClaimReward)
	{
		htmlOutput += "<hr /><div onclick='sendBytes(\"MISSION_REWARD\")' class='main-button'>";
		htmlOutput += "<table>";
		htmlOutput += "<tr>";
		htmlOutput += "<td>";
		htmlOutput += "<img src='images/missionsIcon.gif' class='img-medium' />";
		htmlOutput += "</td>";
		htmlOutput += "<td style='text-align:right;padding-right:20px;'>CLAIM REWARD</td>"
		htmlOutput += "</tr>";
		htmlOutput += "</table>";
		htmlOutput += "</div>";
	}
	
	document.getElementById("missions-tab-table").innerHTML = htmlOutput;
	
	refreshTotalItems(missionIdRefresh);
}

function refreshDailyMissionsTable(data)
{
	var htmlOutput = "";

	var dataArray = data.split("~");
	var missionIdRefresh = dataArray[0];
	var missionDesc = dataArray[1];
	
	var checkImg = "<img src='images/check.png' class='img-small' />";
	if(dailyMissionCompleted == 0)
		checkImg = "<img src='images/x.png' class='img-small' />";
	
	htmlOutput += "<div class='main-button-mission-purple'>";
	htmlOutput += "<table>";
	htmlOutput += "<tr>";
	htmlOutput += "<td width='85%'>";
	htmlOutput += missionDesc;
	if(dailyMissionTracker > 0) htmlOutput += "<span id='dailyTracker-span' style='color:silver;'> ("+dailyMissionTracker+")</span>";
	htmlOutput += "<br /><span id='dailyTimer-span' style='color:yellow;font-size:12pt;'>" + formatTime(dailyMissionTimer) + "</span>"
	htmlOutput += "</td>";
	htmlOutput += "<td style='text-align:right;' width='15%'>";
	htmlOutput += checkImg;
	htmlOutput += "</td>";
	htmlOutput += "</tr>";
	htmlOutput += "</table>";
	htmlOutput += "</div>";


	
	document.getElementById("missions-tab-table-daily").innerHTML = htmlOutput;
	
	refreshTotalItems(missionIdRefresh);
}

//refresh items
function refreshTotalItems(missionIdRefresh)
{
	switch(parseInt(missionIdRefresh))
	{
		case 1:
		manageChangedItems(["bronzeBarsTotal"]);
		break;
		case 5:
		manageChangedItems(["ironBarsTotal"]);
		break;
		case 8:
		manageChangedItems(["energyTotal"]);
		break;
		case 9:
		manageChangedItems(["coinsTotal"]);
		break;
		case 21:
		manageChangedItems(["reflectDamageTotal"]);
		break;
		case 22:
		manageChangedItems(["rowBoatTotal"]);
		break;
		case 23:
		manageChangedItems(["lavaTotal"]);
		manageChangedItems(["coinsTotal"]);
		break;
		case 24:
		manageChangedItems(["jungleLootTotal"])
		break;
		case 28:
		manageChangedItems(["dungeonLootTotal"])
		break;
		case 34:
		manageChangedItems(["superBaitUsed"])
		break;
		
	}
}