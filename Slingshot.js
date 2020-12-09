class Slingshot{

constructor(bodyA,pointB){

    var con = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.05,
        length : 10 
    
    }

    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    
    this.pointB = pointB ;
    this.sling = Constraint.create(con);
    World.add(myWorld,this.sling);

}

fly(){

this.sling.bodyA = null ;

}
    


display(){

    image(this.sling1,255,100);
    image(this.sling2,225,100);

if(this.sling.bodyA){

var pointA = this.sling.bodyA.position;
var pointB = this.pointB;

push();
stroke("#301608");

if(pointA.x<220){
strokeWeight(10);
line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
image(this.sling3,pointA.x-30,pointA.y-10,15,30);
}

else{
strokeWeight(5);
line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
image(this.sling3,pointA.x+25,pointA.y-10,15,30);

}
pop();

}
}

}