/**
 * MessageDispatcher object
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
 * var message = { methodName : string, //name of method
 *                 arg : object  // argument to give the method in global
 *               };
 *
 * The response object from global will be passed directly to the registered
 * callback method.
 */
function MessageDispatcher() {
	this.callbacks = {};
	var currentId = 0;
	this.respond = function(msg) {
		if(this.callbacks[msg.name]) {
			this.callbacks[msg.name](msg.message);
			delete this.callbacks[msg.name];
		}
	};
	this.setupCallback = function(methodName, arg, callback) {
		this.callbacks[currentId] = callback;
		var msg = { methodName : methodName,
		            arg : arg };
		safari.self.tab.dispatchMessage(currentId, msg);
		currentId++;
	};
};
msgDispatcher = new MessageDispatcher();
safari.self.addEventListener("message", 
                             function(msg) { msgDispatcher.respond(msg); }, 
									  false);


function testMethod1() {
	console.log("Starting method 1");
	msgDispatcher.setupCallback("lookup", "anything", function(data) {
		console.log("Got response " + data);
	});
};

testMethod1();
