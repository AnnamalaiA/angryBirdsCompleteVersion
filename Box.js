class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.vis = 255;
  }

  score() {

    if(this.vis <0 && this.vis > -380 ){
      score = score + 1
    }
  }

  display() {
    if(this.body.speed < 5){
      super.display();
      }else{
        World.remove(world,this.body)
        this.vis = this.vis-5
      }
  }
};

// Inheritance -- taking properties from parent class
// parent class, child class
// extends-- child class extends parent class
//constrcutor of the baseclass can be used--- super(x,y,w,h)
//super.display();