salad.onKeyDown = function(key, fn) {
  document.body.addEventListener('keydown',function(e) {
    if(e.key == key) {
      fn();
    }
  });
}

salad.addSimpleMovement = function(objName,speed,keys) {
  document.body.addEventListener('keydown',function(e) {
    if(e.key == keys.up) {
      salad.getObj(objName).setPos({y: salad.getObj(objName).getPos().y - speed});
    } else if(e.key == keys.down){
      salad.getObj(objName).setPos({y: salad.getObj(objName).getPos().y + speed});
    } else if(e.key == keys.left){
      salad.getObj(objName).setPos({x: salad.getObj(objName).getPos().x - speed});
    } else if(e.key == keys.right){
    salad.getObj(objName).setPos({x: salad.getObj(objName).getPos().x + speed});
    } 
  });
}
