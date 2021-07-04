function setup ()
class particles{
    constructor(x, y, r){

        var options ={
            restituion:0.4
        }
        this.r = r;
         this.body = bodies.circle(x,y,this.r,options);
         this.color=color(random(0, 255), random(0, 255),  random(0, 255));
        world.add(world, world.add);
}
display() {

  var pos = this.body.position;
  var angle = this.body.angle;


  push() ;
  translate(pos.x,pos.y);
  rotate(angle);
  imageMode(Center);
  nostroke ();
  fill("white");
  ellipseMode(Radius);
  ellipse(0,0,this.r,this.r)
  pop();

}

};



    



