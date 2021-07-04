function setup() 
   class plinko {
     constructor (x,y) {
          var option = {
            restitution: 1,
             friction: 0,
             isStatic = true
          }
          this.r = 10;
          this.body = bodies.circle(x,y,this.r,options);
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