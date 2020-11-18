class slingShot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    display(){
        image(this.sling1, 190,25);
        image(this.sling2, 160,20);
        push()
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            if(pointA.x < 220){
                strokeWeight(3);
            }
            else if(pointA.x > 200){
                strokeWeight(10);
            }
        
            stroke(84,39,15);
            line(pointA.x, pointA.y, pointB.x+10, pointB.y);
            line(pointA.x, pointA.y, pointB.x-20, pointB.y);
        }
        pop()
    
    }
    fly(){

        this.sling.bodyA = null
    }

    attach(body){

        this.sling.bodyA = body
        
    }
}