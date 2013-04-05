var minutes = 0;
var seconds = 0;
var hours = 0;
var int = 0;

function timer(){

	if(seconds < 10 && minutes < 10)
		$("#clock").html("0" + minutes + ":0" + seconds);

	if(seconds < 10 && minutes >= 10)
		$("#clock").html(minutes + ":0" + seconds);

	if(seconds >= 10 && minutes < 10)
		$("#clock").html("0" + minutes + ":" + seconds);
	
	if(seconds == 59)
	{
		seconds = 0;
		if(minutes == 59)
		{
			minutes = 0;
			if(hours == 99)
			{
				hours = 0;
			}else hours++;
		} else minutes++;
	}else seconds++;

	start();
}

function reset(){
	abort();
	minutes = 0;
	seconds = 0;
	hours = 0;
	$("#timerButton").html("Start Timer");
	$("#timerButton").attr("onclick", "start()");
	$("#clock").html("00:00");
}

function start(){ 
	int = setTimeout(timer, 1000);
	$("#timerButton").html("Stop Timer");
	$("#timerButton").attr("onclick", "abort()");
}

function abort(){
	clearInterval(int);
	$("#timerButton").html("Start Timer");
	$("#timerButton").attr("onclick", "start()");
}