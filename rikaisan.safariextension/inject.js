
function testMethod1() {
	console.log("Starting method 1");
	safari.self.tab.dispatchMessage("lookup", "a word");
}

function testMethod2(message) {
	console.log("Starting method2");
	console.log(message.message);
}

safari.self.addEventListener("message", testMethod2, false);

testMethod1();
