var path = require("path");
var Elm = require("elm-loader");


var compiledCode = Elm(
	path.resolve(__dirname, "web_server.elm"), 
	__dirname,
	{
		messageIn : {id:0, url: "", body: "", action:""}
	}
);


var fs = require("fs");
var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder


var sessions = {};
var session_count = 0;

function process(response, action){
  session_id = (session_count = session_count + 1);
  sessions[session_id] = response;
  compiledCode.ports.messageIn.send({id:session_id, url:"", body:"", action:action});
}

app.get("/", function(request, response){ //root dir
  process(response, "increment");
});

app.get("/decrement", function(request, response){ //root dir
  process(response, "decrement");
});

compiledCode.ports.messageOut.subscribe( function(response){
	console.log("session: "+ response.id)
	var callback = sessions[response.id]
	if(callback) {
		callback.send(response.body);
		delete sessions[response.id];
	}
});

app.listen(port, host);


// compiledCode.ports.addUser.send([
//     "Tom",
//     { age: 32, job: "lumberjack" }
// ]);
