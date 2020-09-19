function Box( height, width, material){
    this.height = height;
    this.width = width;
    this.material = material;
  }
  
  Box.prototype.expand = function (){
    console.log("expanded");
  }
  
  Box.prototype.changeBoxAsQuard = function (size){
    this.height = this.width = size;
  }
  
  let box = new Box(100, 200, 'paper');
  box.expand();
  box.changeBoxAsQuard(300);
  console.log(box);
  