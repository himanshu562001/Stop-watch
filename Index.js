var startWatch;
var StopwatchInterval;
var intervalpuasetime=0;
 function startWatchVar(){
    if(!StopwatchInterval){
        startWatch= new Date().getTime()-intervalpuasetime;
        StopwatchInterval=setInterval(updateStopwatch,1000);

    }
 }
 function stopWatch(){
    clearInterval(StopwatchInterval);
    intervalpuasetime = new Date().getTime()-startWatch;
    StopwatchInterval = null;
 }

 function restart(){
        stopWatch();
        intervalpuasetime=0;
        document.getElementById("time").innerHTML="00:00:00";
 }
 function updateStopwatch(){
    var currentTime= new Date().getTime();
    var elapsedTime =currentTime-startWatch;
    var seconds = Math.floor(elapsedTime/1000)%60;
    var minutes= Math.floor(elapsedTime/1000/60)%60;
    var hours= Math.floor(elapsedTime/1000/60/60);
    var displayTime=pad(hours)+":"+pad(minutes)+":"+pad(seconds);
    document.getElementById("time").innerHTML= displayTime;

 }
 function pad(number){
        return(number<10 ?"0":"") + number;
 }
