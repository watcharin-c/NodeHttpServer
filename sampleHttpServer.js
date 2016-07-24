console.log('Node.js is running...');

var http = require('http');

var httpServer = http.createServer(function(req, res){
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.write('Hello World!\n');

	setTimeout(function(){
		res.end('Node.js is run Web Server');
	});

});

httpServer.listen(9999);
