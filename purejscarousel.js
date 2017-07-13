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
  this.current = 0;

  //start on slide 1
  this.slide(this.current);
}

//? is inline conditional : is else
//next function
Carousel.prototype.next = function(interval){
  (this.current === this.total) ?  this.current = 0 : this.current+= 1;

  this.stop();
  this.slide(this.current);

  //check interval type to avoid any abuse XD
  if(typeof interval === 'number' && (interval % 1) === 0){
    var context = this;
    this.run = setTimeout(() => {
      context.next(interval);
    },interval);
  }
}

//prev function
Carousel.prototype.prev = function(interval){
  (this.current === 0) ? this.current = this.total : this.current -= 1;

  this.stop();
  this.slide(this.current);

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
