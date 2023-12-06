
if (typeof String.prototype.startsWith != 'function') 
{
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
	};
}

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};


function getRandomHash(lengthChosen)
{
	var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < lengthChosen; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function formatNumber(numberToFormat)
{
	
	if(numberToFormat == "INF")
		return "<span style='font-size:20pt;vertical-align: middle;'>&#8734;</span>"
	if(isNaN(numberToFormat))
		return numberToFormat;
	
	var characterToAppend = "";
	if(numberToFormat >= 1000000000 && numberToFormat < 10000000000)
	{
		numberToFormat /= 1000000;
		characterToAppend = "M";
	}
	else if(numberToFormat >= 10000000000)
	{
		numberToFormat /= 1000000000;
		characterToAppend = "B";
	}
	
	return Math.floor(numberToFormat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + characterToAppend;
}

function initMiscGlobalVariables()
{
	lightRedColor = "#ff6666";
	lightGreenColor = "#80ff80";
	lightPurpleColor = "#ff66ff";
}

function isNotNull(varChosen)
{
	return (typeof(varChosen) != 'undefined' && varChosen != null)
}

function formatSpellCooldown(seconds)
{
	var fontSize = -1;
	if(seconds > 99) fontSize = "16pt";
	
	if(fontSize  != -1)
		return "<div style='font-size:"+fontSize+";margin-top:6px;'>" + seconds + "</div>";
	else
		return seconds;
}

function clicksNoRefundCheckbox(checkboxEle)
{
	checkboxEle.disabled = true; 
	document.getElementById('paypal-form').style.display = '';
	document.getElementById('paypal-thankyou').style.display = '';
}

function changePaymentMethod(paymentOption)
{
	if(paymentOption == "paypal")
	{
		document.getElementById("paypal-btn").style.display = "";
		document.getElementById("squareup-form").style.display = "none";
	}
	else
	{
		document.getElementById("paypal-btn").style.display = "none";
		document.getElementById("squareup-form").style.display = "";
	}
}

function resetDonorForm()
{
	document.getElementById("squareup-form").style.display = "none";
	document.getElementById("radio-button-sqaureup").checked = false;
	document.getElementById("radio-button-paypal").checked = true;
	document.getElementById("squareup-request-invoice-btn").style.display = "none";
	changePaymentMethod('paypal');
}

function squareUpNextButton()
{
	document.getElementById("squareup-form").style.display = "none";
	document.getElementById("squareup-form-2").style.display = "";
}

function squareupCheckbox(elementCheckbox)
{
	elementCheckbox.disabled = true;
	document.getElementById("squareup-request-invoice-btn").style.display = "";
}
function formatTime(seconds)
{
	if(seconds <= 0)
		return "0";

		var time = seconds;
		 // Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = (time % 60).toFixed(0);

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";

		days = 0;
		while(hrs >= 24)
		{
			hrs -= 24;
			days ++;
			
		}
		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		
		if(days > 1)
			return days +" days, " + ret;
		else if(days == 1)
			return days + " day, " + ret;
		else
		return ret;

}

function pcToMobileMode()
{
	document.getElementById("body-tag-child").style.width = "500px";
	document.getElementById("top-status-bar").style.width = "500px";
	document.getElementById("bottom-nav-bar-inner").style.width = "500px";
	document.getElementById("top-status-bar").style.position = "";
}

function resetBackground()
{
	document.getElementById("body-tag").style.backgroundColor = "#1f1f14";
	document.getElementById("body-tag").style.backgroundImage = "";
	document.getElementById("body-tag-child").style.backgroundImage = "url('images/backgrounds/background2.jpg')";
	document.getElementById("body-tag-child").style.border = "1px solid black";
}

function setBackgroundImage(img)
{
	document.getElementById("body-tag-child").style.backgroundImage = "url("+img+")";
	document.getElementById("body-tag").style.backgroundImage = "url("+img+")";
	document.getElementById("body-tag-child").style.border = "none";
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function loadConfrimPaypalPage(amountChosen, bcAmount)
{
	document.getElementById("paypal-purchase-crystals-playerId").value = playerId;
	document.getElementById("paypal-purchase-crystals-amount").value = amountChosen;
	document.getElementById("paypal-price").innerHTML = "$ " +amountChosen + ".00";
	document.getElementById("paypal-bc").innerHTML = "<img src='images/bloodCrystals.png' class='img-small' /> " + bcAmount;
	document.getElementById("credit-card-usernameId").value = playerId;
	document.getElementById("credit-card-usd").value = amountChosen;
}

function showTutorialPopup(tutorialChosen)
{
	if(tutorialTipsOff == 0)
	{
		sendBytes("TUTORIAL=" + tutorialChosen)
	}
}

function forceTutorialPopup(tutorialChosen)
{
	sendBytes("FORCED_TUTORIAL=" + tutorialChosen)
}

function getRandomNumber(min, max) {
	max+=1;
    return parseInt(Math.random() * (max - min) + min);
}

function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

var candyCanePuzzleArray = [0,0,0,0,0,0,0,0,0];
function initCandyCanPuzzleArray()
{
	candyCanePuzzleArray = [0,0,0,0,0,0,0,0,0];
	for(var i = 0; i < candyCanePuzzleArray.length; i ++)
	{
		if(window["candyCanePuzzle" + (i + 1)] == 1)
			candyCanePuzzleArray[i] = (i + 1);
	}
	
	candyCanePuzzleArray = shuffleArray(candyCanePuzzleArray);
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var switchIndex = -1;
function clicksCandyCanePuzzle(index)
{
	if(switchIndex == -1)
	{
		switchIndex = index;
	}
	else
	{
		var x = index;
		var y = switchIndex;
		
		var tmp = candyCanePuzzleArray[x];
		candyCanePuzzleArray[x] = candyCanePuzzleArray[y];
		candyCanePuzzleArray[y] = tmp
		loadCandyCanePuzzleTab();
		switchIndex = -1;
	}
}


function loadCandyCanePuzzleTab()
{
	var divElement = document.getElementById("candyCanePuzzle-area");
	var htmlElement = "";
	
	this.getTD = function(indexId)
	{
		if(candyCanePuzzleArray[indexId] == 0)
			return "<td onclick='clicksCandyCanePuzzle("+indexId+");this.style.border = \"1px solid lime\"' width='100px' height='100px' style='background-color:black;border:1px solid grey'></td>";
		else
		{
			return "<td onclick='clicksCandyCanePuzzle("+indexId+");this.style.border = \"1px solid lime\"' width='100px' height='100px' style='border:1px solid grey'><img src='images/candyCanePuzzle"+candyCanePuzzleArray[indexId]+".png' /></td>";
		}
		
	}
	
	htmlElement += "<center><table width='300px'>";
	htmlElement += "<tr>";
	htmlElement += getTD(0); htmlElement += getTD(1); htmlElement += getTD(2);
	htmlElement += "</tr>";
	htmlElement += "<tr>";
	htmlElement += getTD(3); htmlElement += getTD(4); htmlElement += getTD(5);
	htmlElement += "</tr>";
	htmlElement += "<tr>";
	htmlElement += getTD(6); htmlElement += getTD(7); htmlElement += getTD(8);
	htmlElement += "</tr>";
	
	htmlElement += "</table></center><br /><br />";
	
	var completed = true;
	for(var i = 0; i < candyCanePuzzleArray.length; i++)
	{
		if(candyCanePuzzleArray[i] != (i+1))
		{
			completed = false;
			break;
		}
	}
	
	if(completed)
	htmlElement += "<center><span onclick='sendBytes(\"CLAIM_CANDY_CANE_SIGIL\")' style='border:5px dashed red;background-color:green;color:white;font-size:30pt;padding:10px 30px;display:inline-block;cursor:pointer;'>Claim</span></center>";

	divElement.innerHTML = htmlElement;
}
