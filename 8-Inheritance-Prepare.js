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
	this.name = name;
	this.color = color;
}

Car.prototype.move = function(locationA, locationB) {
	console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
}

Car.prototype.printColor = function() {
	console.log(`The color ${this.color} is very nice on a ${this.name}!`);
};

let c = new Car("Volvo", "Black");
c.move("Home","Work");
c.printColor();


/**ToDo: Implement the prototype chain inheritance. **/
