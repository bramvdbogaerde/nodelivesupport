var io = require('socket.io')

var socket = function(){
	return io;
}

module.exports = socket