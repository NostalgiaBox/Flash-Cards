const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is buried in Grant's Tomb?", hint: "Think about who's tomb it is..."});
});

app.listen(3000, () => {
    console.log('The server is up and running on port 3000')
});