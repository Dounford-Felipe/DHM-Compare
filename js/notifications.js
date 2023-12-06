console.log('Loading DHM Helper...');
var loaded = false;
loading();

function loading() {
	if (loaded === false) {
		console.log("Loaded DHM Helper");
		loaded = true;
		checkMenu();
		setTimeout(function(){initNotifications()},5000);
	}
}

function checkMenu() {
    document.getElementById('closeNotificationsMenu').addEventListener('click', notificationsMenu)
    // Global Notifications Checkbox
    if (localStorage.hNotifications === "true") {
		document.getElementById('toggleNotification').checked = true
    }
    document.getElementById('toggleNotification').addEventListener("change", toggleStorage);

    // Daily Mission Notifications Checkbox
    if (localStorage.hDaily === "true") {
		document.getElementById('dailyNotification').checked = true
    }
    document.getElementById('dailyNotification').addEventListener("change", toggleStorage);
        
    // Treasure Map Notifications Checkbox
    if (localStorage.hMap === "true") {
		document.getElementById('mapNotification').checked = true
    }
    document.getElementById('mapNotification').addEventListener("change", toggleStorage);
        
    // Event Notifications Checkbox
    if (localStorage.hEvent === "true") {
		document.getElementById('greenMapNotification').checked = true
    }
    document.getElementById('greenMapNotification').addEventListener("change", toggleStorage);

    // Research Notifications Checkbox
    if (localStorage.hResearch === "true") {
		document.getElementById('researchNotification').checked = true
    }
    document.getElementById('researchNotification').addEventListener("change", toggleStorage);

    // Train Notifications Checkbox
    if (localStorage.hTrain === "true") {
		document.getElementById('trainNotification').checked = true
    }
    document.getElementById('trainNotification').addEventListener("change", toggleStorage);

    // Rocket Notifications Checkbox
    if (localStorage.hRocket === "true") {
		document.getElementById('rocketNotification').checked = true
    }
    document.getElementById('rocketNotification').addEventListener("change", toggleStorage);
        
    // Furnace Notifications Checkbox
    if (localStorage.hFurnace === "true") {
		document.getElementById('furnaceNotification').checked = true
    }
    document.getElementById('furnaceNotification').addEventListener("change", toggleStorage);
		
    // Foundry Notifications Checkbox
    if (localStorage.hFoundry === "true") {
		document.getElementById('foundryNotification').checked = true
    }
    document.getElementById('foundryNotification').addEventListener("change", toggleStorage);

    // Refinary Notifications Checkbox
    if (localStorage.hRefinary === "true") {
		document.getElementById('refinaryNotification').checked = true
    }
    document.getElementById('refinaryNotification').addEventListener("change", toggleStorage);
        
    // Tree Notifications Checkbox
    if (localStorage.hTree === "true") {
		document.getElementById('treeNotification').checked = true
    }
    document.getElementById('treeNotification').addEventListener("change", toggleStorage);
		
    // Shiny Tree Notifications Checkbox
    if (localStorage.hShinyTree === "true") {
		document.getElementById('shinyTreeNotification').checked = true
    }
    document.getElementById('shinyTreeNotification').addEventListener("change", toggleStorage);
        
    // Planter Notifications Checkbox
	if (localStorage.hPlanter === "true") {
		document.getElementById('planterNotification').checked = true
    }
    document.getElementById('planterNotification').addEventListener("change", toggleStorage);
        
    // Explorer Notifications Checkbox
    if (localStorage.hExplorer === "true") {
		document.getElementById('explorerNotification').checked = true
    }
    document.getElementById('explorerNotification').addEventListener("change", toggleStorage);
        
    // Teleport Notifications Checkbox
    if (localStorage.hTeleport === "true") {
		document.getElementById('teleportNotification').checked = true
    }
    document.getElementById('teleportNotification').addEventListener("change", toggleStorage);
        
    // Shiny Monster Notifications Checkbox
    if (localStorage.hShiny === "true") {
		document.getElementById('shinyNotification').checked = true
    }
    document.getElementById('shinyNotification').addEventListener("change", toggleStorage);
        
    // Cousin Notifications Checkbox
    if (localStorage.hCousin === "true") {
		document.getElementById('cousinNotification').checked = true
    }
    document.getElementById('cousinNotification').addEventListener("change", toggleStorage);
        
    // Boat Notifications Checkbox
    if (localStorage.hBoat === "true") {
		document.getElementById('boatNotification').checked = true
    }
    document.getElementById('boatNotification').addEventListener("change", toggleStorage);
        
    // Chef Notifications Checkbox
    if (localStorage.hChef === "true") {
		document.getElementById('chefNotification').checked = true
    }
    document.getElementById('chefNotification').addEventListener("change", toggleStorage);
        
    // Goblin Shop Notifications Checkbox
    if (localStorage.hGoblinShop === "true") {
		document.getElementById('goblinShopNotification').checked = true
    }
    document.getElementById('goblinShopNotification').addEventListener("change", toggleStorage);
}

function toggleStorage() {
        let name = this.getAttribute('data-storage');
        if (localStorage[name] && localStorage[name] == "true") {
            localStorage[name] = "false";
        } else {
            localStorage[name] = "true";
        }
    }

function notificationsMenu() {
        let menu = document.getElementById('dhm-helper-menu');
        menu.style.display = menu.style.display === 'none' ? '' : 'none';
    }

function initNotifications() {
		// Daily Mission
		var dailyObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-dailyMissionNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hDaily === "true")) {
                        notifyMe("Daily Mission Available",'images/dailyMissions.png');
                    }
                }
            });    
        });
		
		var dailyTarget = document.getElementById('notification-dailyMissionNotification');
        dailyObserver.observe(dailyTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Treasure Map
		var mapObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-treasureMapNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hMap === "true")) {
                        notifyMe("Treasure Map Found",'images/treasureMap.png');
                    }
                }
            });    
        });
		
		var mapTarget = document.getElementById('notification-treasureMapNotification');
        mapObserver.observe(mapTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Green Treasure Map
		var greenMapObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-greenTreasureMapNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hMap === "true")) {
                        notifyMe("Green Treasure Map Found",'images/greenTreasureMap.png');
                    }
                }
            });    
        });
		
		var greenMapTarget = document.getElementById('notification-greenTreasureMapNotification');
        greenMapObserver.observe(greenMapTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Event
		var eventObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("main-button-event").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hEvent === "true")) {
                        notifyMe("Event Coming",'images/meteorEvent.png');
                    }
                }
            });    
        });
		
		var eventTarget = document.getElementById('main-button-event');
        eventObserver.observe(eventTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Event Glowing
		var glowingObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-eventFullyActiveNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hEvent === "true")) {
                        notifyMe("Event Glowing",'images/meteorActionEvent.png');
                    }
                }
            });    
        });
		
		var glowingTarget = document.getElementById('notification-eventFullyActiveNotification');
        glowingObserver.observe(glowingTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Researcher
		var researchObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-researcherNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hResearch === "true")) {
                        notifyMe("Research Ready",'images/researcher.png');
                    }
                }
            });    
        });
		
		var researchTarget = document.getElementById('notification-researcherNotification');
        researchObserver.observe(researchTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Train Ready
		var trainObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-profileNotificationsOffTrain").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hTrain === "true")) {
                        notifyMe("Train Ready",'images/train.png');
                    }
                }
            });    
        });
		
		var trainTarget = document.getElementById('notification-profileNotificationsOffTrain');
        trainObserver.observe(trainTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Train at Destination
		var trainDestinationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-trainNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hTrain === "true")) {
                        notifyMe("Train Ready To Collect",'images/train.png');
                    }
                }
            });    
        });
		
		var trainDestinationTarget = document.getElementById('notification-trainNotification');
        trainDestinationObserver.observe(trainDestinationTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Rocket Ready
		var rocketObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-profileNotificationsOffRocket").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hRocket === "true")) {
                        notifyMe("Rocket Ready",'images/rocket.png');
                    }
                }
            });    
        });
		
		var rocketTarget = document.getElementById('notification-profileNotificationsOffRocket');
        rocketObserver.observe(rocketTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Rocket at Destination
		var rocketDestinationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-rocketNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hRocket === "true")) {
                        notifyMe("Rocket Ready To Collect",'images/rocket.png');
                    }
                }
            });    
        });
		
		var rocketDestinationTarget = document.getElementById('notification-rocketNotification');
        rocketDestinationObserver.observe(rocketDestinationTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Furnace Idle
		var furnaceObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-profileNotificationsOffFurnace").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hFurnace === "true")) {
                        notifyMe("Furnace Empty",'images/goldFurnace.png');
                    }
                }
            });    
        });
		
		var furnaceTarget = document.getElementById('notification-profileNotificationsOffFurnace');
        furnaceObserver.observe(furnaceTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Foundry Idle
		var foundryObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-charcoalFoundryPercentage").style.display == "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hFoundry === "true")) {
                        notifyMe("Foundry Empty",'images/charcoalFoundry.png');
                    }
                }
            });    
        });
		
		var foundryTarget = document.getElementById('notification-charcoalFoundryPercentage');
        foundryObserver.observe(foundryTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Refinary Idle
		var refinaryObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-goldBarRefineryNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hRefinary === "true")) {
                        notifyMe("Refinary Ready",'images/goldRefinary.png');
                    }
                }
            });    
        });
		
		var refinaryTarget = document.getElementById('notification-goldBarRefineryNotification');
        refinaryObserver.observe(refinaryTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Tree Ready
		var treeObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-treeNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hTree === "true")) {
                        notifyMe("Tree Ready",'images/tree.png');
                    }
                }
            });    
        });
		
		var treeTarget = document.getElementById('notification-treeNotification');
        treeObserver.observe(treeTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Shiny Tree
		var shinyTree1Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-1").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree1Target = document.getElementById('tree-thumbnail-img-1');
        shinyTree1Observer.observe(shinyTree1Target, { attributes : true, attributeFilter : ['style'] });
		//2
		var shinyTree2Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-2").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree2Target = document.getElementById('tree-thumbnail-img-2');
        shinyTree2Observer.observe(shinyTree2Target, { attributes : true, attributeFilter : ['style'] });
		//3
		var shinyTree3Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-3").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree3Target = document.getElementById('tree-thumbnail-img-3');
        shinyTree3Observer.observe(shinyTree3Target, { attributes : true, attributeFilter : ['style'] });
		//4
		var shinyTree4Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-4").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree4Target = document.getElementById('tree-thumbnail-img-4');
        shinyTree4Observer.observe(shinyTree4Target, { attributes : true, attributeFilter : ['style'] });
		//5
		var shinyTree5Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-5").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree5Target = document.getElementById('tree-thumbnail-img-5');
        shinyTree5Observer.observe(shinyTree5Target, { attributes : true, attributeFilter : ['style'] });
		//6
		var shinyTree6Observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("tree-thumbnail-img-6").style.backgroundImage == 'url("images/shiny.gif")') {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShinyTree === "true")) {
                        notifyMe("Shiny Tree Growing",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTree6Target = document.getElementById('tree-thumbnail-img-6');
        shinyTree6Observer.observe(shinyTree6Target, { attributes : true, attributeFilter : ['style'] });
		
		// Planter Empty
		var planterObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-profileNotificationsOffPlanter").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hPlanter === "true")) {
                        notifyMe("Planter Idle",'images/planter.png');
                    }
                }
            });    
        });
		
		var planterTarget = document.getElementById('notification-profileNotificationsOffPlanter');
        planterObserver.observe(planterTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Explorer Idle
		var explorerObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-exploringNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hExplorer === "true")) {
                        notifyMe("Explorer Idle",'images/explorer.png');
                    }
                }
            });    
        });
		
		var explorerTarget = document.getElementById('notification-exploringNotification');
        explorerObserver.observe(explorerTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Teleport Ready
		var teleportObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("explorer-teleportCd-label").style.display == "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hTeleport === "true")) {
                        notifyMe("Teleport Ready",'images/teleportSpell.png');
                    }
                }
            });    
        });
		
		var teleportTarget = document.getElementById('explorer-teleportCd-label');
        teleportObserver.observe(teleportTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Shiny Monster
		var shinyObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("img-tag-monster-shiny").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hShiny === "true")) {
                        notifyMe("Shiny Monster",'images/shiny.gif');
                    }
                }
            });    
        });
		
		var shinyTarget = document.getElementById('img-tag-monster-shiny');
        shinyObserver.observe(shinyTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Cousin Idle
		var cousinObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-exploringNotification2").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hCousin === "true")) {
                        notifyMe("Cousin Idle",'images/goblinCousin.png');
                    }
                }
            });    
        });
		
		var cousinTarget = document.getElementById('notification-exploringNotification2');
        cousinObserver.observe(cousinTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Boat Idle
		var boatObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-rowBoatNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hBoat === "true")) {
                        notifyMe("Boat Ready",'images/rowBoat.png');
                    }
                }
            });    
        });
		
		var boatTarget = document.getElementById('notification-rowBoatNotification');
        boatObserver.observe(boatTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Canoe Idle
		var canoeObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-canoeBoatNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hBoat === "true")) {
                        notifyMe("Canoe Ready",'images/canoeBoat.png');
                    }
                }
            });    
        });
		
		var canoeTarget = document.getElementById('notification-canoeBoatNotification');
        canoeObserver.observe(canoeTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Sail Idle
		var sailObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-sailBoatNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hBoat === "true")) {
                        notifyMe("Sail Ready",'images/sailBoat.png');
                    }
                }
            });    
        });
		
		var sailTarget = document.getElementById('notification-sailBoatNotification');
        sailObserver.observe(sailTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Steam Idle
		var steamObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-steamBoatNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hBoat === "true")) {
                        notifyMe("Steam Ready",'images/steamBoat.png');
                    }
                }
            });    
        });
		
		var steamTarget = document.getElementById('notification-steamBoatNotification');
        steamObserver.observe(steamTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Trawler Idle
		var trawlerObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-trawlerNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hBoat === "true")) {
                        notifyMe("Trawler Ready",'images/trawler.png');
                    }
                }
            });    
        });
		
		var trawlerTarget = document.getElementById('notification-trawlerNotification');
        trawlerObserver.observe(trawlerTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Chef Ready
		var chefObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-chefNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hChef === "true")) {
                        notifyMe("Chef Ready",'images/chef.png');
                    }
                }
            });    
        });
		
		var chefTarget = document.getElementById('notification-chefNotification');
        chefObserver.observe(chefTarget, { attributes : true, attributeFilter : ['style'] });
		
		// Goblin Shop
		var goblinShopObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationRecord) {
                if (document.getElementById("notification-gemGoblinShopNotification").style.display !== "none") {
                    if ((localStorage.hNotifications === "true") && (localStorage.hGoblinShop === "true")) {
                        notifyMe("Goblin Shop New Items",'images/gemGoblinShopIcon.png');
                    }
                }
            });    
        });
		
		var goblinShopTarget = document.getElementById('notification-gemGoblinShopNotification');
        goblinShopObserver.observe(goblinShopTarget, { attributes : true, attributeFilter : ['style'] });
		
	}
