const myMethods = {
	eat: function() {
		console.log(`${this.name} is eating`);
	},
	sleep: function() {
		console.log(`${this.name} is sleeping`);
	}
};

function Animal(name) {
	let animal = Object.create(myMethods);
	animal.name = name;
	return animal;
}

const dog1 = Animal("Dog 1");
const dog2 = Animal("Dog 2");
dog1.eat();
dog2.sleep();