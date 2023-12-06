function scrollText(icon, colorChosen, textChosen)
{
	var imgTag = "";
	if(icon != "none")
		imgTag = "<img src='images/"+icon+"' class='img-medium' /> ";
	
	var elementToAppend = $('<div class="scroller" style="color:'+colorChosen+'">'+imgTag+textChosen+'</div>').appendTo('body');
	$(elementToAppend).css({position:"absolute", left:mouseX - 50,top:mouseY - 50});
	 $(elementToAppend).animate({top: "-=50px"}, function() { 
	 $(elementToAppend).fadeOut(1000, function() { $(this).remove(); });
	 });

}

function resizeShinyImage()
{

	document.getElementById('img-tag-monster-shiny').style.width = document.getElementById('img-tag-monster').width + "px";
	document.getElementById('img-tag-monster-shiny').style.height = document.getElementById('img-tag-monster').height + "px";
}

function applyShinyGifMonster(elementTag, applied)
{
	if(applied)
	{
		if(shinyMonster == 2)
			document.getElementById(elementTag).src = "images/superShiny.gif";
		else
			document.getElementById(elementTag).src = "images/shiny.gif";
		$("#" + elementTag).fadeIn(10);
		
		document.getElementById(elementTag).style.display = "";
		document.getElementById(elementTag).style.width = document.getElementById("img-tag-monster").width + "px";
		document.getElementById(elementTag).style.height = document.getElementById("img-tag-monster").height + "px";
	}
	else
		$("#" + elementTag).fadeOut(10);
}


function applyShinyGif(elementTag, applied)
{
	if(applied && document.getElementById(elementTag).style.backgroundImage != "url('images/shiny.gif')")
	{
		document.getElementById(elementTag).style.backgroundImage = "url('images/shiny.gif')";
		document.getElementById(elementTag).style.backgroundSize = "cover";
	}
	else
		document.getElementById(elementTag).style.backgroundImage = "none";
}

var animationDelayMs = 0;
function animateImage(imgId, animationType, startVal, endVal, finalVal, unitType, durationOfAnimation, otherInfo)
{
	
	$(function() {
    $({blurRadius: startVal}).animate({blurRadius: endVal}, 
	{
        duration: durationOfAnimation,
        easing: 'swing', // or "linear"
                         // use jQuery UI or Easing plugin for more options
        step: function() {

            $("#" + imgId).css({
                "-webkit-filter": animationType +"("+this.blurRadius+unitType+")",
                "filter": animationType+"("+this.blurRadius+unitType+")"
            });
        },
		 complete: function() 
		 {
			 setTimeout(function () 
			 {
				
				$("#" + imgId).css({
                "-webkit-filter": animationType +"("+finalVal+unitType+")",
                "filter": animationType +"("+finalVal+unitType+")"
				});
				animationDelayMs = 0;
				
			 }, animationDelayMs); 

			  
         }
    });
});
}

function startAlienAnimation(imgId, animationType, startVal, endVal, finalVal, unitType, durationOfAnimation, otherInfo)
{
	
	$(function() {
    $({blurRadius: startVal}).animate({blurRadius: endVal}, {
        duration: durationOfAnimation,
        easing: 'swing', // or "linear"
                         // use jQuery UI or Easing plugin for more options
        step: function() {
            $("#" + imgId).css({
                "-webkit-filter": animationType +"("+this.blurRadius+unitType+")",
                "filter": animationType+"("+this.blurRadius+unitType+")"
            });
        },
		 complete: function() 
		 {
			  $("#" + imgId).css({
                "-webkit-filter": animationType +"("+finalVal+unitType+")",
                "filter": animationType +"("+finalVal+unitType+")"
            });
         }
    });
});
}
function shake(divId,interval=50,distance=3,times=25)
{
	var div = document.getElementById(divId);
	
    $(div).css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
        $(div).animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }//for
    $(div).animate({ left: 0},interval);
}

function rocketLaunchAnimation(callbackId)
{
	var consoleDiv = document.getElementById("rocketLaunch-console");
	if(callbackId == 0) consoleDiv.innerHTML = "";
	
	if(callbackId == 0)
	addConsoleText("Preparing to Launch...",1);

	if(callbackId == 1)
	{
		addLineBreak();
		addConsoleText("....................",2);
	}

	if(callbackId == 2)
	{
		addLineBreak();
		addLineBreak();
		
		if(rocketDestination == 2)
			addConsoleText("Estimated distance to destination: 149,638,115 km" ,3);
		else if(rocketDestination == 1)
			addConsoleText("Estimated distance to destination: 54,134,212 km" ,3);
		else
			addConsoleText("Estimated distance to destination: 384,235 km" ,3);
	}

	if(callbackId == 3)
	{
		addLineBreak();
		if(rocketDestination >= 1)
			addConsoleText("Average velocity: 7.0913 km/s",4);
		else
			addConsoleText("Average velocity: 2.0913 km/s",4);
	}
	
	if(callbackId == 4)
	{
		addLineBreak();
		addConsoleText("......",5);
	}
	
	if(callbackId == 5)
	{
		addLineBreak();
		addLineBreak();
		addConsoleText("Weather: Partly Cloudy, Wind 12.3242 km/h NE",6);
	}
	
	if(callbackId == 6)
	{
		addLineBreak();
		addLineBreak();
		addConsoleText("T-10 seconds",7);
	}
	
	if(callbackId == 7)
	{
		addLineBreak();
		addConsoleText("9         ",8);
	}
	
	if(callbackId == 8)
	{
		addLineBreak();
		addConsoleText("8         ",9);
	}
	
	if(callbackId == 9)
	{
		addLineBreak();
		addConsoleText("Systems Nominal",11);
	}
	
	
	if(callbackId == 11)
	{
		addLineBreak();
		addConsoleText("6         ",12);
	}
	
	if(callbackId == 12)
	{
		addLineBreak();
		addConsoleText("5         ",13);
	}
	
	if(callbackId == 13)
	{
		addLineBreak();
		addConsoleText("4         ",14);
	}
	
	if(callbackId == 14)
	{
		addLineBreak();
		addConsoleText("Ignition..",16);
	}
	
	
	if(callbackId == 16)
	{
		addLineBreak();
		addConsoleText("2         ",17);
	}
	
	if(callbackId == 17)
	{
		addLineBreak();
		addConsoleText("1         ",18);
	}
	
	if(callbackId == 18)
	{
		addLineBreak();
		addLineBreak();
		addConsoleText("LIFT OFF!",19);
	}
	
	if(callbackId == 19)
	{
		addConsoleText("                ",20);
	}
	
	if(callbackId == 20)
	{
		addConsoleText("Max Q in 15 seconds...",21);
	}
	
	if(callbackId == 21)
	{
		addConsoleText("                                                                                                                                       ",22);
	}
	
	if(callbackId == 22)
	{
		addLineBreak();
		addConsoleText("MAX Q: Dynamic pressure on rocket is at its highest.. ",23);
	}
	
	if(callbackId == 23)
	{
		addLineBreak();
		addLineBreak();
		addConsoleText("Preparing stage seperation, systems nominal.",25);
	}
	
	if(callbackId == 25)
	{
		addConsoleText("                                                                                                                                       ",26);
	}
	
	if(callbackId == 26)
	{
		addLineBreak();
		addLineBreak();
		
		if(rocketDestination == 2)
			addConsoleText("Stage seperation completed, off to the sun!",27);
		else if(rocketDestination == 1)
			addConsoleText("Stage seperation completed, off to mars!",27);
		else
			addConsoleText("Stage seperation completed, off to the moon!",27);
	}
	
	function addConsoleText(html, callback)
	{
		var tick = window.setInterval(function()
		{
			if(html.length == 0) 
			{
				clearInterval(tick);
				rocketLaunchAnimation(callback)
			}
			consoleDiv.innerHTML += html.charAt(0);
			html = html.substring(1);
			
		}, 100);
	}
	
	function addLineBreak()
	{
		consoleDiv.innerHTML += "<br />";
	}

}