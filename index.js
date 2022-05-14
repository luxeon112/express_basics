
const express = require('express');
const app = express();

//add public directiory
app.use(express.static('public'));

app.get('/user/:username', (req, res) => {
app.get('/', (req, res) => {
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
});
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us Page</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>About Us Page</h1>');
});app.get('*', (req, res) => {
    res.send('404. This page does not exist.<a href="/">Go to home page</a>');
    app.get('/user/:username', (req, res) => {
        let user = req.params.username;
        res.render('index.ejs',{username : user});
    });

    app.listen(3000, () => {
        console.log(`Server started on http://localhost:3000`);
    });