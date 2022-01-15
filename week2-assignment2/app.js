const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

users = [];

app.get('/', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        path: '/',
        userList: users
    });
});
app.post('/', (req, res, next) => {
    users.push({ username: req.body.username});
    res.redirect('/');
    console.log(users);
});
/*app.get('/', (req, res, next) => {
    res.render('users', {
        userList: users
    });
});*/

app.listen(2000);