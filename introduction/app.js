/*
Core Modules
http - launch a server, send requests
https - launch a SSL (encypted data) server
fs
path
os

*/
const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

//create a server. This will only happen once.
const server = http.createServer(routes.handler);
    //console.log(req.url, req.method, req.headers);
    //process.exit();

//3000 is a port you can use. This one is typical for local use, or any in the thousands. Usually for production, you'll use 80.
server.listen(2000);