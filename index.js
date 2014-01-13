var xmpp = require("./xmpp"),
    config   = require('./config')
	frontend = require("./frontend"),
	socket   = require("./socket"),
	front 	 = new frontend(),
	server	 = front.app().listen(config.port);
	realtime = socket().listen(server);

console.log("Started server on port "+config.port);