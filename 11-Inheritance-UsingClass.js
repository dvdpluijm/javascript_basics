/* Create base class. */
class VehicleBase {
	constructor(name) {
		this.name = name;
	}

	move(locationA, locationB) {
		console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
	}

	copy() {
		return new this.constructor(this.name, this.color);
	}

}


/* Child class inherits from Base class. */
class Car extends VehicleBase {			// extends instead of:		 Car.prototype = Object.create(VehicleBase.prototype)
										//				  and:	 	 Car.prototype.constructor = Car;
	constructor(name, color) {
		super(name);					// super instead of:		 VehicleBase.call(this, name);
		this.color = color;
	}

	printColor() {
		console.log(`The color ${this.color} is very nice on a ${this.name}!`);
	}

}

/* Use it */
let c = new Car("Fiat", "red");
c.move("A","Z");
c.printColor();

let duplicate = c.copy();	// Using the function depending on constructor property of Car.
duplicate.move("B","C");
duplicate.printColor();