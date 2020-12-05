class Chain{

constructor(bodyA,bodyB){

    var con = {
        bodyA : bird.body,
        bodyB : conlog.body,
        stiffness : 0.05,
        length : 10 
    
    }

    this.chain = Constraint.create(con);
    World.add(myWorld,this.chain);

}

display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

push();

strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);

pop();
}


}