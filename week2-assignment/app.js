const express = require('express');

const app = express();

/*app.use((req, res, next) => {
    console.log("The first message");
    next(); 
});

app.use((req, res, next) => {
    console.log("The second message!");
    res.send('<h1>The users page</h1>');
});*/

app.use('/user', (req, res, next) => {
    console.log("The second message!");
    res.send('<h1>The users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("The first message");
    res.send('the / page.') 
});



app.listen(2000);