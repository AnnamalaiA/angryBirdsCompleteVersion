class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vis = 255 // alpha value that defines the transparency
    
    }

    score() {

      if(this.vis <0 && this.vis > -255 ){
        score = score + 4
      }
      
    }
    /*this.vis  starts at 255, at 0 the pigs vanish and once the pigs vanish the score shld increase
    0 200
    -5 
    run1  -5   4
    run2   -10  8
            ?   200

    */
    
  display(){
    
   if(this.body.speed < 3){
    super.display();
    }else{
      World.remove(world,this.body)
      this.vis = this.vis-5 // reducing the alpha value
      //tint(255,alpha value), alpha is for transparency 0 is no image, 255 is complete image

      push()
      tint(255,this.vis) // settings change which applies to everything.
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop()

    }

  }

};