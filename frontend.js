var exphbs  = require('express3-handlebars');
var path    = require('path'),
    config  = require('./config')

var frontend = function(){
	var express = require("express")
	this.app = function(){
		app = express();
		
		app.engine('handlebars', exphbs({defaultLayout: 'main'}));
		app.set('view engine', 'handlebars');

        app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

		app.get("/",function(req,res){
			res.render("index")
		});
		app.get("/embed/",function(req,res){
		   res.render("embed",config); 
		});
		return app;
	}
}
module.exports = frontend
