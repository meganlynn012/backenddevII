//type 'node first-app.js' in the terminal to run this code. Node runs independantly of the browser.
//console.log("hello from Node.js");

//typing 'node first-app.js' in the terminal will run this code and create a new file on my computer called 'hello.txt' with the 2nd argument as text in the file.
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js');