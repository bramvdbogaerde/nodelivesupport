var xmpp = function(){
	// Constructor
	this.xmpp = function(){

	}

	this.register = function(){
		return "username"
	}

	this.login = function(){
		username = this.register()
		this.event.emit("logged_in")
	}

	this.events = new require("events").EventEmitter();
}