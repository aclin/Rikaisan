
function lookup(word) {
	return "anything";
}

function respondToMessage(msgEvent) {
	console.log("responding");
	if(msgEvent.message.name === "lookup") {
		var resp = lookup(msgEvent.message.data);
		msgEvent.target.page.dispatchMessage(msgEvent.name, resp);
	}
}

safari.application.addEventListener("message", respondToMessage, false);

