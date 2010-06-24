/*
 * MessageResponder object
 *
 * This object acts as one half of the intermediary mechanism between the
 * inject context and the global context. Consumers of this object simply
 * need to setup a callback with the name of the method to call, and the
 * data to pass to the global method.
 *
 * Once a callback is registered, the message responder will watch for
 * the response from global, and call the registered callback with
 * the returned data upon receiving the response.
 *
 * The precise message format will be defined by the handler in global. Currently,
 * the format is simple:
 *
 * var message = { name : string, //name of method
 *                 data : object  // object payload to send to the global method.
 *               };
 *
 * The response object from global will be passed directly to the registered
 * callback method.
 */
function MessageResponder() {
	this.callbacks = {};
	var currentId = 0;
	this.respond = function(msg) {
		if(this.callbacks[msg.name]) {
			this.callbacks[msg.name](msg.message);
			delete this.callbacks[msg.name];
		}
	}
	this.setupCallback = function(message, callback) {
		this.callbacks[currentId] = callback;
		safari.self.tab.dispatchMessage(currentId, message);
		currentId++;
	}
}

function testMethod1() {
	console.log("Starting method 1");
	var msg = { name : "lookup",
	            data : "anything"};
	msgResponder.setupCallback(msg, function(data) {
		console.log("Got response " + data);
	});
}

msgResponder = new MessageResponder();
safari.self.addEventListener("message", 
                             function(msg) { msgResponder.respond(msg) }, 
									  false);

testMethod1();
