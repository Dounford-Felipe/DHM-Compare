var menu1SoundGlobal;
var menu2SoundGlobal;
var farmSoundGlobal;
var mission1SoundGlobal;
var researcherSoundGlobal;
var cashSoundGlobal;
var success3SoundGlobal;
var timeMachineSoundGlobal;

function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "preload");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function initAudio()
{
	menu1SoundGlobal = new Audio("sounds/menu1.wav");
	menu2SoundGlobal = new Audio("sounds/menu2.wav");
	farmSoundGlobal = new Audio("sounds/farm.ogg");
	mission1SoundGlobal = new Audio("sounds/mission1.wav");
	researcherSoundGlobal = new Audio("sounds/researcher.wav");
	cashSoundGlobal = new Audio("sounds/cash.mp3");
	success3SoundGlobal = new Audio("sounds/success3.wav");
	timeMachineSoundGlobal = new Audio("sounds/timeMachine.mp3")
}

function playSound(globalVariable)
{
	if(profileSoundOff == 0)
		window[globalVariable].volume = 0.5;
	else if(profileSoundOff == 1)
		window[globalVariable].volume = 0.2;
	else if(profileSoundOff == 3)
		window[globalVariable].volume = 1;
	
	if(profileSoundOff != 2)
	{
		window[globalVariable].play();
	}
}

function playFowardMenuSound()
{
	playSound("menu1SoundGlobal");
}

function playPreviousMenuSound()
{
	playSound("menu2SoundGlobal");
}
