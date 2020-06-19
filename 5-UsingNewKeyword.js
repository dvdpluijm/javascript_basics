function Animal(name) {
	//let this = Object.create(Animal.prototype);
	this.name = name;

	// this.run = function() {
	// 	console.log(`${this.name} is running`);
	// }

	//return this;
}

Animal.prototype.eat = function() {
	console.log(`${this.name} is eating`);
};

Animal.prototype.sleep = function() {
	console.log(`${this.name} is sleeping`);
}

const dog1 = new Animal("Dog 1");
const dog2 = new Animal("Dog 2");
dog1.eat();
dog2.sleep();
// dog1.run();
