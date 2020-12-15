class Bird extends Base{
    constructor(x,y){

    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png") ;
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];


    }

    display(){
         
        super.display();
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position);

        for(var i = 0; i<)
    
    }

}