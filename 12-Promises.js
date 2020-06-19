/**
 * Testing with timeout functions.
 */
function doSomethingWithCallback(time, fnSuccess, fnError) {
	if(isNaN(time)) {
		fnError("Timeout requires a valid number.");
	} else {
		setTimeout(() => {
			console.log("Waiting for " + time + "ms in a Callback.");
			fnSuccess();
		}, time);
	}
}

function doSomethingWithPromise(time) {
	return new Promise((resolve, reject) => {
		if(isNaN(time)) {
			reject("Timeout requires a valid number.");
		} else {
			setTimeout(() => {
				console.log("Waiting for " + time + "ms in a Promise.");
				resolve();
			}, time);
		}
	});
}

async function doSomethingWithAsync(time) {
	return new Promise((resolve, reject) => {
		if(isNaN(time)) {
			reject("Timeout requires a valid number.");
		} else {
			setTimeout(() => {
				console.log("Waiting for " + time + "ms in Async Await.");
				resolve();
			}, time);
		}
	});
}



// ES5 - Using callbacks.
/*
(() => {
	doSomethingWithCallback(1000, function() {
		doSomethingWithCallback(2000, function() {
			doSomethingWithCallback("fout", function() {
				return;
			}, function(error3) {
				console.error(error3);
			});
		}, function(error2) {
			console.error(error2);
		});
	}, function(error1) {
		console.error(error1);
	});
})();
*/

// ES6 (2015) - Using promises.
// - More readable and manageable then callbacks.
// - Pro regarding Async/Await -> Don't have to wait for promise to complete.
/*
(() => {
	doSomethingWithPromise(1000)
		.then(() => doSomethingWithPromise(2000))
		.then(() => doSomethingWithPromise("fout"))
		.catch((err) => console.log(err))
		.finally(() => {									// ES9 support
			console.log("In the end I will always be there.");
		});
	
	console.log("In a promise chain I am done now.");		// Method execution outside promise chain continues 
})();
*/



// ES8 (2017) Using async await.
// - More readable and manageable then promises.
// - Sugar syntax for promises.
// - Easy mixing sync and async code.
/*
(async () => {
	try {
		await doSomethingWithAsync(1000);
		await doSomethingWithAsync(2000);
		console.log("In a async await I am done now.");		// Method execution awaits previous async statements.
		await doSomethingWithAsync("fout");
	} catch(err) {
		console.log(err);
		throw new Error("My Error")
	} finally {
		console.log("Also in async / await try catch I will always be there.");
	}
	console.log("I Am MISSING!");
})();
*/