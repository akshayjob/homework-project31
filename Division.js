class Division{
    constructor(x, y, w, h){
        var options = {

            isStatic: true
        }
    this.body = bodies.rectangle(x, y, w, h, options);
    World.width = width;
    Worldld.height = height;
    World.add (world, this.body);
    }
dispaly(){
    var pos = this.body.position;
    rectMode(Center);
    fill("white");
    rect(pos.x,pos.y,this.w,this.body.h);
}



};