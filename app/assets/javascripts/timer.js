var minutes = 0;
var seconds = 0;
var int = 0;

function timer() 
{
	document.getElementById("clock").innerHTML = minutes + ":" + seconds;
	document.getElementById("timer").innerHTML = "<button id=\"timerButton\" type=\"button\" class=\"round\" onclick=\"abort()\"> Stop Timer </button>";
	if(seconds == 59)
	{
		seconds = 0;
		if(minutes == 59)
		{
			minutes = 0;
		} else minutes++;
	}else seconds++;

	startTimer();
}

function startTimer(){ int = setTimeout(timer, 1000) };

function abort(){
	clearInterval(int);
	document.getElementById("timer").innerHTML = "<button id=\"timerButton\" type=\"button\" class=\"round\" onclick=\"startTimer()\"> Start Timer </button>";
}