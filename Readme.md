ELM Web Server
==============

A simple experiment
-------------------

I wanted to see if I could use ELM as a web server. 
I'm using elm-loader to compile the elm to js, then use nodejs and express.js server. 


### Notes: 

I'm catching request to specific urls, and passing them to elm through the MessageIn port. (Maybe we can change this to be middleware for express, so it beocomes app.use(...) and it catches all urls.)

In elm I map the stream of requested into a stream of actions, which I then foldp against a server state with the "update" function. This gives me a stream of states. I can them map them to a string using the "view" function. 

I map this stream (along with the request that generated it) into a stream of responses which is exposed as a port for the javascript to react to. 

The response objects come out this MessageOut port. 

To make sure the correct "response" object is sent the correct result, I give each request an index, then store the response object in a hash. On receiving a message from MessageOut, I look up the correct response object and send it through. I'm not sure this is required. I was just being safe.

I've tried to separate the "app logic" from the "request/response" book keeping. 


