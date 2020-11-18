class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    Matter.Body.setDensity(this.body,2)
    this.trajectory = []
  }

  display() {

    if(gameState === ONSLING){
      this.trajectory = [];
      Matter.Body.setAngle(this.body,0)
    }
    
    super.display();
    if(bird.body.position.x > 200){
      this.trajectory.push([bird.body.position.x,bird.body.position.y]);
    }
    if(gameState === RELEASED){
    
    for(var i = 0;i <this.trajectory.length; i = i +1 ){
       image(this.smoke, this.trajectory[i][0],this.trajectory[i][1])
    }
   }
  }
}
