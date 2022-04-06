class Airplane {
	constructor() {
		this.x = 200;
		this.y = height/2;
	}

	display() {
		plane = createSprite(this.x,this.y,80,200);
		plane.addImage(airplaneImg);
		plane.scale = 1.5;
		plane.velocityY = 5;
		//plane.debug = true;
	}
}