const myMethods = {
	eat: function() {
		console.log(`${this.name} is eating`);
	},
	sleep: function() {
		console.log("Start sleeping please!");
	}
};

function Animal(name) {
	let animal = {};
	animal.name = name;
	animal.eat = myMethods.eat;
	animal.speep = myMethods.sleep;
	return animal;
}

const dog1 = Animal("Dog 1");
const dog2 = Animal("Dog 2");
dog1.eat();
dog2.eat();

if (dog1.eat === dog2.eat) {
	console.log("Methods are same instance.");
} else {
	console.log("Methods are unique instances.");
}