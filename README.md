# pure-js-carousel
this carousel plugin is made in pure js

##how to use
to use this plugin you just have to initialize it like this

```javascript
var slider = new Carousel('yourIdName');
```

###example for initialization

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>carousel</title>
  </head>
  <body>
    <div id="yourIdName">
      //class of carousel is needed for slider item initialize
      <img src="slide.jpg" class="carousel" >
      <img src="slide2.jpg" class="carousel" >
    </div>
  </body>
</html>
<script>
var slider = new Carousel('yourIdName');
</script>
```

###example for adding navigation button
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>carousel</title>
  </head>
  <body>
    <div id="yourIdName">
      <!-- class of carousel is needed for slider item initialize -->
      <img src="slide.jpg" class="carousel" >
      <img src="slide2.jpg" class="carousel" >
      <!-- set up the next and prev function to a button for navigation -->
      <button onclick="slider.next()">next</button>
      <button onclick="slider.prev()">prev</button>
    </div>
  </body>
</html>
<script>
var slider = new Carousel('yourIdName');
</script>
```

###make autoplay carousel
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>carousel</title>
  </head>
  <body>
    <div id="yourIdName">
      <!-- class of carousel is needed for slider item initialize -->
      <img src="slide.jpg" class="carousel" >
      <img src="slide2.jpg" class="carousel" >
      <!-- set up the next and prev function to a button for navigation -->
      <button onclick="slider.next()">next</button>
      <button onclick="slider.prev()">prev</button>
    </div>
  </body>
</html>
<script>
var slider = new Carousel('yourIdName');
// set parameter in milisecond on next function to trigger forward autoplay
slider.next(1000);

/*
 to stop
 slider.stop();
*/
</script>
```
