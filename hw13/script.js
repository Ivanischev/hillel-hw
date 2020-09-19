// 1
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
  

// 2
  User.prototype.work = function () {
    console.log(this.name + " working...");
  };
  
  let admin = new User("John", 20);
  let user = new User("David", 40);
  
  console.log(admin, user);


  // 3

  function User(name, age) {
    // proto = {...}
    // this = {}
    // this.__proto__ = proto
    this.name = name;
    this.age = age;
    //return this
  }
  
  User.prototype.work = function () {
    console.log(this.name + " working...");
  };
  
  let admin = new User("John", 20);
  let user = new User("David", 40);
  
  console.log(admin, user);




  function User(name, age) {
    // User.proto = {...}
    // this = {}
    // this.__proto__ = proto
    this.name = name;
    this.age = age;
    //return this
  }
  
  User.prototype.work = function () {
    console.log(this.name + " working...");
  };
  
  let admin = [];
  let user = new admin.constructor("David", 40);
  
  let arr = new Array(1,2,3,4);
  
  
  console.log(admin, user, arr);