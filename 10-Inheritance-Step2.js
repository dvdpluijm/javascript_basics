/* Create base class. */
function VehicleBase(name) {
	this.name = name;
}

VehicleBase.prototype.move = function(locationA, locationB) {
	console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
}

/**
 * Adding a function depending on the constructor property.
 */
VehicleBase.prototype.copy = function() {
	return new this.constructor(this.name, this.color);
}

/* Child class inherits from Base class. */
function Car(name, color) {
	VehicleBase.call(this, name);
	this.color = color;
}

Car.prototype = Object.create(VehicleBase.prototype);

/**
 * Step 3: Restore the constructor property referencing to the constructor method.
 */
Car.prototype.constructor = Car;

Car.prototype.printColor = function() {
	console.log(`The color ${this.color} is very nice on a ${this.name}!`);
};

/**
 * 
 */
Car.prototype.copy = function() {
	return VehicleBase.prototype.copy.call(this);
};


/* Use it */
let c = new Car("Fiat", "red");
c.move("A","Z");
c.printColor();

let duplicate = c.copy();	// Using the function depending on constructor property of Car.
duplicate.move("A","Z");
duplicate.printColor();