class Animal {

	// Constructor
	constructor(name) {
		this.name = name;
	}

	// Method
	eat() {
		console.log(`${this.name} is eating`);
	}

	// Method
	sleep() {
		console.log(`${this.name} is sleeping`);
	}

}

const dog1 = new Animal("Dog 1");
const dog2 = new Animal("Dog 2");

dog1.eat();
dog2.sleep();


/**
 * Properties is important when databinding in SAPUI5!
 */
function Tyre(p) {
	this._p = p;

	Object.defineProperty(this, "position", {
		get: function() {
			return this._p;
		},
		set: function(value) {
			this._p = value;
		}
	});
}

class Vehicle {
	constructor() {
		this._name = "";
		this.tyres = [
			new Tyre("LV"),
			new Tyre("RV"),
			new Tyre("LA"),
			new Tyre("RA")
		];
	}

	get name() {
		return this._name;
	}

	set name(v) {
		this._name = v.toUpperCase();
	}

	move(locationA, locationB) {
		console.log(`Vehicle ${this.name} is moving from ${locationA} to ${locationB}`);
	}

	showTyres() {
		for(let t of this.tyres) {
			console.log(`Position of the tyre: ${t.position}`);
		}
	}
}

/* Use it */
let c = new Vehicle();
c._name = "Seat";
c.move("A","B");
c.showTyres();