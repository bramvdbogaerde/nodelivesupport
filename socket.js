var io = require('socket.io')

var socket = function(){
	io.sockets.on('connection', function (socket) {
		socket.on("initialize",function(data){

		});
		
		socket.on("message",function(msg){

		});
	});
	return io;
}

module.exports = sockets