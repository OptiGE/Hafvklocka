
//------------------------------------------------------------------------------------
//------------------------- T I M E R F U N K T I O N E R-----------------------------
//------------------------------------------------------------------------------------

var time_cs = 0;
var time_s = 0;
var time_m = 0;

var timer_active = false;
var cooldown_time = 100;

function resetTimer() {
    time_cs = 0;
    time_s = 0;
    time_m = 0;
    timer_active = false;
    document.getElementById("timer_text").innerHTML = "00:00:00";
}

function toggleTimer() {
    
    timer_active = !timer_active;
    if(document.getElementById("togglebtn").innerHTML == "Start"){
        document.getElementById("togglebtn").innerHTML = "Pause";
    }else{
        document.getElementById("togglebtn").innerHTML = "Start";
    }
}

function timerLoop() {
    
    //Om timern är igång
    if (timer_active){
            time_cs ++;
    
        //Centisekunder till sekunder
        if(time_cs == 100){
            time_cs = 0;
            time_s ++;
        }

        //Sekunder till minuter
        if(time_s == 60){
            time_s = 0;
            time_m ++;
        }

        document.getElementById("timer_text").innerHTML = time_m + ":" + time_s + ":" + time_cs;
    }
    
}

// Will execute timerLoop every 0.01 seconds 
var intervalID = window.setInterval(timerLoop, 10);

//------------------------------------------------------------------------------------
//--------------------------- A C C F U N K T I O N E R-------------------------------
//------------------------------------------------------------------------------------

var axmax = 0;
var aymax = 0;
var azmax = 0;

var slider = document.getElementById("force_slider");
var output = document.getElementById("demo");
output.innerHTML =  "Styrka: " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.innerHTML = "Styrka: " + this.value;
}

//Om enheten har ett motionEvent (alltså om det har ett gyroskop eller accelerometer)
if (window.DeviceMotionEvent != undefined) {
	console.log("Enheten har accelerometer");
	
	//När en ny rörelse upptäcks
	window.ondevicemotion = function(e) {
	
        //Om rörelsen är större än värdet på slidern.
        if(e.acceleration.z > slider.value){
			toggleTimer();
		}
        
        
		//Om den nya rörelsen va större än någon innan
        /*
		if(e.acceleration.x > axmax){
			axmax = e.acceleration.x;
			document.getElementById("outputx").innerHTML = "Max x: " + axmax;
		}
		if(e.acceleration.y > aymax){
			aymax = e.acceleration.y;
			document.getElementById("outputy").innerHTML = "Max y: " + aymax;
		}
		if(e.acceleration.z > azmax){
			azmax = e.acceleration.z;
			document.getElementById("outputz").innerHTML = "Max z: " + azmax;
		}
        */
		
	}
}else{
    console.log("Enheten saknar accelerometer");
}
