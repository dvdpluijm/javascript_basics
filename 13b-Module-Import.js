class DoSomething {

	constructor() {
	}

	execute() {
		const Utils = require('./13a-Module-Export');
		let _utils = new Utils();
		return _utils.sum(10, 14);
	}

	

}

const _instance = new DoSomething();
const result = _instance.execute();
console.log(result);