var exphbs  = require('express3-handlebars');

var frontend = function(){
	var express = require("express")
	this.app = function(){
		app = express();
		
		app.engine('handlebars', exphbs({defaultLayout: 'main'}));
		app.set('view engine', 'handlebars');

		app.get("/",function(req,res){
			res.render("index")
		});
		return app;
	}
}
module.exports = frontend
