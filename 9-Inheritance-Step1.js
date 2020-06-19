/* Create base class. */
function VehicleBase(name) {
	this.name = name;
}

VehicleBase.prototype.move = function(locationA, locationB) {
	console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
}

let v = new VehicleBase("Thing");
v.move("Here", "Somewhere");


/* Child class inherits from Base class. */
function Car(name, color) {
	/**
	 * Step 1: Call the parent object constructor function using the context of the car.
	 * As a result the assigned properties in "Vehicle" are assign to Car.
	 */

	//this.name = name;
	VehicleBase.call(this, name);
	this.color = color;
}

/**
 * Step 2: Create a new prototype object that has a lookup reference (delagation) to the VehicleBase prototype.
 * Assign the new prototype object as the prototype of Car... then add new functions to this new prototype for Car.
 * DO NOT: Car.prototype = VehicleBase.prototype!
 */

const newProtoTypeObjectWithRefToVehicle = Object.create(VehicleBase.prototype);
Car.prototype = newProtoTypeObjectWithRefToVehicle;

// Car.prototype.move = function(locationA, locationB) {
// 	console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
// }

Car.prototype.printColor = function() {
	console.log(`The color ${this.color} is very nice on a ${this.name}!`);
};

let c = new Car("Volvo", "Black");
c.move("Home","Work");
c.printColor();