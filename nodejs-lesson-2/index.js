console.log("running index.js!...");

const port = 3000,
	http = require('http'),
	// httpStatus = require('http-status-codes'),
	app = http.createServer((req, res) => {
		console.log("Received an incoming request!...");
		
		res.writeHead(httpStatus.OK || 200, {
			"Content-Type": "text/html"
		});
		
		let resMsg = "Hello consumer!";
		res.write(resMsg);
		res.end();
		
		console.log("Sent a respnse: " + resMsg);
	});
	
app.listen(port);
console.log("Sever has started and listing on port >> " + port);
