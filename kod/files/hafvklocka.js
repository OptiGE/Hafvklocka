var axmax = 0;
var aymax = 0;
var azmax = 0;


//Om enheten har ett motionEvent (alltså om det har ett gyroskop eller accelerometer)
if (window.DeviceMotionEvent != undefined) {
	console.log("Enheten har accelerometer");
	
	//När en ny rörelse upptäcks
	window.ondevicemotion = function(e) {
	
		console.log("Rörelse detekterad");
		console.log(e.acceleration.x);
		
		//Om den nya rörelsen va större än någon innan
		if(e.acceleration.x > axmax){
			axmax = e.acceleration.x;
			document.getElementById("outputx").innerHTML = "Max x: " + axmax;
		}
		if(e.acceleration.y > aymax){
			aymax = e.acceleration.y;
			document.getElementById("outputy").innerHTML = "Maxxx y: " + aymax;
		}
		if(e.acceleration.z > azmax){
			azmax = e.acceleration.z;
			document.getElementById("outputz").innerHTML = "Max z: " + azmax;
		}
		
	}
}else{console.log("Enheten saknar accelerometer");}

var slider = document.getElementById("force_slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.innerHTML = this.value;
}