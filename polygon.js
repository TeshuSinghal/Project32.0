class Polygon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.x = x; 
        this.y = y; 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(251, 243, 7);
        rectMode(CENTER);
        ellipse(0,0,this.radius);
        //image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

        pop();
      }
}