var salad = {};

salad.getCanvas = function(query) {
  return document.querySelector(query).getContext('2d');
}

salad.createScene = function(w,h) {
  document.body.innerHTML+='<canvas id="saladScene" width="'+w+'px" height="'+h+'px"></canvas>';
  
  salad.scene = salad.getCanvas('#saladScene');
  salad.canvas = document.querySelector('#saladScene');
  salad.scene.width = salad.canvas.width;
  salad.scene.height = salad.canvas.height;
  
}

salad.options = {backgroundColor:'white'};

salad.ids = {};
salad.objects = [];

salad.Object = function(type,name,x,y,a,b,c,d) {
  this.type = type;
  this.name = name;
  if(type=='rect') {
    this.x = x;
    this.y = y;
    this.w = a;
    this.h = b;
    this.color = c;

    this.draw = function() {
      salad.scene.fillStyle = this.color;
      salad.scene.fillRect(this.x,this.y,this.w,this.h);
    }
  } else if (type=='img') {
    this.x = x;
    this.y = y;
    this.w = a;
    this.h = b;
    this.src = c;
    this.image = new Image();
    this.image.src = this.src;
    
    this.draw = function() {
      salad.scene.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
  }
}

salad.addObj = function(type,name,x,y,a,b,c,d) {
  salad.objects.push(new salad.Object(type,name,x,y,a,b,c,d));
  salad.ids[name] = salad.objects.length-1;
}

salad.getObj = function(objName){
  return {
    setPos: function(position) {
      if(position.x) {
        salad.objects[salad.ids[objName]].x = position.x;
      }
      if(position.y) {
        salad.objects[salad.ids[objName]].y = position.y;
      }
    },
    getPos: function(){
      return {x: salad.objects[salad.ids[objName]].x, 
              y: salad.objects[salad.ids[objName]].y};
    },
    setColor: function(color) {
      salad.objects[salad.ids[objName]].color = color;
    }
  }
}

salad.clearAll = function() {
  salad.scene.fillStyle = salad.options.backgroundColor;
  salad.scene.fillRect(0,0,salad.scene.width,salad.scene.height);
}

salad.update = function(){
  salad.clearAll();
  
  salad.scene.fillStyle = "black";
  for(var i = 0; i < salad.objects.length; i++) {
    salad.objects[i].draw();
  }
  
  salad.scene.stroke();
  window.requestAnimationFrame(salad.update);
}

salad.run = function(){
  salad.update();
}

