
function lookup(word) {
	return "anything";
}

function respondToMessage(message) {
	if(message.name === "lookup") {
		var word = message.message;
		message.target.page.dispatchMessage("lookup-return", lookup(word));
	}
}

safari.application.addEventListener("message", respondToMessage, false);

