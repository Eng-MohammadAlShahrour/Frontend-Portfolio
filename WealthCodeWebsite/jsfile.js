const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
function CustomAlert() {
	this.alert = function (message, title) {
	  // Create overlay and dialog box
	  let dialogoverlay = document.createElement('div');
	  dialogoverlay.id = 'dialogoverlay';
	  document.body.appendChild(dialogoverlay);
  
	  let dialogbox = document.createElement('div');
	  dialogbox.id = 'dialogbox';
	  dialogbox.className = 'slit-in-vertical';
	  dialogbox.innerHTML = `
		<div>
		  <div id="dialogboxhead"></div>
		  <div id="dialogboxbody"></div>
		  <div id="dialogboxfoot">
			<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>
		  </div>
		</div>`;
	  document.body.appendChild(dialogbox);
  
	  // Set styles for overlay and dialog box
	  dialogoverlay.style.display = 'block';
	  dialogoverlay.style.height = window.innerHeight + 'px';
  
	  dialogbox.style.display = 'block';
	  dialogbox.style.top = '100px';
  
	  // Set message and title
	  if (typeof title !== 'undefined') {
		document.getElementById('dialogboxhead').style.display = 'block';
		document.getElementById('dialogboxhead').innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${title}`;
	  } else {
		document.getElementById('dialogboxhead').style.display = 'none';
	  }
	  document.getElementById('dialogboxbody').innerHTML = message;
	}
  
	this.ok = function () {
	  let dialogoverlay = document.getElementById('dialogoverlay');
	  let dialogbox = document.getElementById('dialogbox');
	  document.body.removeChild(dialogoverlay);
	  document.body.removeChild(dialogbox);
	}
  }
  
  let customAlert = new CustomAlert();
  