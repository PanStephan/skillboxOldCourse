function Main(speed, model) {

	this.speed = 10;
	this.model = 'NoModel';

	this.getAllInfo = function() {

		return this.speed + ' ' + this.model;
	}
}

function Ship(speed, model) {
	Main.apply(this, arguments);

	this.changeSpeed = function(newSpeed) {
		this.speed = newSpeed;
	}
}

function Car(speed, model) {
	Main.apply(this, arguments);

	this.changeModel = function(newModel) {
		this.model = newModel;
	}
}

function Plain(speed, model) {
	Main.apply(this, arguments);

	this.changeSpeed = function(newSpeed) {
		this.speed = newSpeed;
	}
}

var main = new  Main();

console.log(main);

var ship = new Ship();

ship.changeSpeed(100);

console.log(ship);

var car = new Car();

car.changeModel('Rio');

console.log(car);

var plain = new Plain();

plain.changeSpeed(1000);

console.log(plain);