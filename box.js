class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':1.0
      }
      this.Visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed < 12){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
     World.remove(world,this.body)
    push ();
    tint(255,this.Visibility = this.Visibility - 5)
    pop ();
  }
}
}

  
    
   
    
  