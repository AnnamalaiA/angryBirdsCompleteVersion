class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.vis = 255
  }
  score(){
    if(this.vis <0 && this.vis > -50 ){
      score = score + 5
    }
  }

  display(){
    if(this.body.speed < 3){
      super.display();
      }else{
        World.remove(world,this.body)
        this.vis = this.vis-5
      }
  }
}