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
