class Stone {
    constructor(x, y){
        var options={
            restitution: 0,
            friction: 1,
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.radius = 40;
        this.image = loadImage("PluckingMangoes/stone.png")
        World.add (world, this.body);
    }
        display() {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius, this.radius);
            pop();
        }
}