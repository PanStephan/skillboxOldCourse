$('.ball').on('click', function () {
   animateDiv();
 });

function makeNewPosition($container) {

  // Get viewport dimensions (remove the dimension of the div)
  $container = ($container || $(window))
  var h = $container.height() - 300;
  var w ;

  var $targetPosition = $('.ball').offset().left;

  if ($targetPosition < 320){
    w = $container.width() - 200;
  }
  else {
    w = 100;
  }

  var nh = Math.floor(Math.random() * h);

  return [nh, w];

}

function animateDiv() {
  var $target = $('.ball');
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.ball').animate({
      top: newq[0],
      left: newq[1]
  }, speed, function() {
  });

};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}