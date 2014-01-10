var xmpp = require("./xmpp"),
	frontend = require("./frontend"),
	socket   = require("./socket"),
	front 	 = new frontend(),
	server	 = front.app().listen(3000);
	realtime = socket().listen(server);


