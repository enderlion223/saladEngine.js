salad.gradient = function(x,y,x2,y2,stops) {
  var gradient = salad.scene.createLinearGradient(0,0,200,0);
  for(var i=0; i<stops.length; i++) {
    gradient.addColorStop(i/stops.length,stops[i]);
  }
  return gradient;
}
