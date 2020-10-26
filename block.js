class Block{ 
  constructor(x, y, width, height) { 
    var options = { 
      //'isStatic': false, 
      'restitution':0.4, 
      'friction':0.0
      // 'density':0.3 
    } 
      this.width = width; 
      this.height = height; 
      this.body = Bodies.rectangle(x, y, width, height, options); 
      this.visibility = 255;
      World.add(world, this.body); 
    } 
    display(){ 
      
      if(this.body.speed < 3){
        var angle = this.body.angle; 
      var pos = this.body.position; 
      push(); 
      translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER); 
      rect(0, 0, this.width, this.height); 
      pop(); 
       }
       else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 10;
        tint(255, this.visibility);
        rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
        pop();
       }
       
      
    } 
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
     }
    
  }
  