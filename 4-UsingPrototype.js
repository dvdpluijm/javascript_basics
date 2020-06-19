function Animal(name) {
	let animal = Object.create(Animal.prototype);
	animal.name = name;
	return animal;
}

Animal.prototype.eat = function() {
	console.log(`${this.name} is eating`);
};

Animal.prototype.sleep = function() {
	console.log(`${this.name} is sleeping`);
}

const dog1 = Animal("Dog 1");
const dog2 = Animal("Dog 2");
dog1.eat();
dog2.sleep();