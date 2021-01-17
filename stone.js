class Stone {
    constructor(x, y, width, height){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
    
    
        this.body = Bodies.circle(x, y, 15, options);
        this.radius = 15;
        this.image = loadImage("PluckingMangoes/stone.png")
        World.add (world, this.body);
    }
        display() {
            translate();
            rotate();
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}