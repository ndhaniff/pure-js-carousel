/*
@name:Pure JS carousel
@creator: endy
@ref: simply-coded
*/

//carousel object
function Carousel(containerID){
  this.container = document.getElementById(containerID) || document.body;
  this.slides = this.container.querySelectorAll('.carousel');
  this.total = this.slides.length - 1;
  this.width = this.container.offsetWidth;
  this.height = this.container.offsetHeight;
  this.current = 0;

  //start on slide 1
  this.slide(this.current);

  //animation effect
  this._animate = function(direction,effect,interval){

    var dRate = 1.2;

   if (effect == "slide") {
			var width = this.width;
			var left = 0, opacity = 1;
			var rate, playing;

     if(direction == 'forward'){

			if (interval === false || interval >= ((dRate*1000)+200) ) {
				// Default animation speed. rate = 10; is for 1 second.
				rate = dRate * 10;
			} else if (interval < ((dRate*1000)+200) && interval > 400) {
				// Adjusts the animation duration to complete within the interval time period. +200 millisecond pause.
				rate = ((interval-200) / 2) / 50;
			} else {
				// Make faster than 400 millisecond animations continuous without any pause.
				rate = (interval / 2) / 50;
			}


			playing = setInterval(slideOut, rate);


        var elemOut = this.slides[this.current];
        (this.current === this.total) ? this.current = 0 : this.current += 1;
        var elemIn = this.slides[this.current];

        function slideOut() {
				left -= width/100;
				elemOut.style.left = left+"px";
				if (opacity > 0) {
					opacity -= 1 / (width/2) * (width/100);
				}
				elemOut.style.opacity = opacity;

				if (left <= -width/2) {
					clearInterval(playing);
					elemOut.style.display = "none";
					elemOut.style.left = "0px";
					elemOut.style.opacity = "1";
					elemIn.style.left = width/2 +"px";
					elemIn.style.opacity = "0";
					elemIn.style.display = "inline-block";
					left = width/2;
					playing = setInterval(slideIn, rate);
				}
			}
			function slideIn() {
				left -= width/100;
				elemIn.style.left = left+"px";
				if (opacity < 1) {
					opacity += 1 / (width/2) * (width/100);
				}
				elemIn.style.opacity = opacity;

				if (left <= 0) {
					clearInterval(playing);
					elemIn.style.left = "0px";
				}
			}
    }
      else if(direction == 'backward'){

        if (interval === false || interval >= ((dRate*1000)+200) ) {
				// Default animation speed. rate = 10; is for 1 second.
				rate = dRate * 10;
			} else if (interval < ((dRate*1000)+200) && interval > 400) {
				// Adjusts the animation duration to complete within the interval time period. +200 millisecond pause.
				rate = ((interval-200) / 2) / 50;
			} else {
				// Make faster than 400 millisecond animations continuous without any pause.
				rate = (interval / 2) / 50;
			}


			playing = setInterval(slideOut, rate);

        var elemOut = this.slides[this.current];
        (this.current === this.total) ? this.current = 0 : this.current += 1;
        var elemIn = this.slides[this.current];

        function slideOut() {
				left -= width/100;
				elemOut.style.left = left+"px";
				if (opacity > 0) {
					opacity -= 1 / (width/2) * (width/100);
				}
				elemOut.style.opacity = opacity;

				if (left <= -width/2) {
					clearInterval(playing);
					elemOut.style.display = "none";
					elemOut.style.left = "0px";
					elemOut.style.opacity = "1";
					elemIn.style.left = width/2 +"px";
					elemIn.style.opacity = "0";
					elemIn.style.display = "inline-block";
					left = width/2;
					playing = setInterval(slideIn, rate);
				}
			}
			function slideIn() {
				left -= width/100;
				elemIn.style.left = left+"px";
				if (opacity < 1) {
					opacity += 1 / (width/2) * (width/100);
				}
				elemIn.style.opacity = opacity;

				if (left <= 0) {
					clearInterval(playing);
					elemIn.style.left = "0px";
				}
			}
			}
  }

    else{
      console.log(elimOut);
			this.slide(this.current);
    }
  };

}

//? is inline conditional : is else
//next function
Carousel.prototype.next = function(effect, interval){

  effect = effect 	|| false;
	interval = interval || false;

  this.stop();
  this._animate('forward', effect, interval);

  //check interval type to avoid any abuse XD
  if(typeof interval === 'number' && (interval % 1) === 0){
    var context = this;
    this.run = setTimeout(() => {
      context.next(interval);
    },interval);
  }
}

//prev function
Carousel.prototype.prev = function(effect,interval){


  this.stop();
  this._animate('backward',effect,interval)

  //check interval type to avoid any abuse XD
  if(typeof interval === 'number' && (interval % 1) === 0){
    var context = this;
    this.run = setTimeout(() => {
      context.prev(interval);
    },interval);
  }
}

//stop function
Carousel.prototype.stop = function(){
  clearTimeout(this.run);
}


//select slide function logic
Carousel.prototype.slide = function(index){
  if (index >= 0 && index <= this.total){
    this.stop();
    for(var i = 0; i <= this.total; i++){
      (i === index) ? this.slides[i].style.display = 'block' : this.slides[i].style.display = 'none';
    }
  }
   else {
     alert('Index '+ index + "doesn't exist. Available: 0 -" + this.total);
   }
  }
