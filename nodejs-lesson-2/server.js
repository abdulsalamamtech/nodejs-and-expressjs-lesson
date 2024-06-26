const http = require("http");
http
  .createServer(function (req, res) {
    //header status
    res.writeHead(200, { "Content-Type": "text/html" }); 
    
    //body
    let name = "Rob";

    if(req.url == '/'){
      res.write(`Home: hello ${name}`); 
      res.end();
    }

    if(req.url == '/about'){
      res.write(`About: hello ${name}`); 
      res.end();
    }

    if(req.url == '/data'){
      // res.write(JSON.stringify({"name": name})); 
      res.write(JSON.stringify([1, 2, 3, 4])); 
      res.end();
    }


  })
  .listen(8080); //listen to port 8080
console.log("Listening on port 8080... ");
