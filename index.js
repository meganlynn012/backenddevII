const http = require('http');

const routes = require('./routes');

//create a server. This will only happen once.
const server = http.createServer(routes.handler);
    //console.log(req.url, req.method, req.headers);
    //process.exit();

//3000 is a port you can use. This one is typical for local use, or any in the thousands. Usually for production, you'll use 80.
server.listen(3000);