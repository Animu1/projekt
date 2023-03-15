const express = require('express');
const app = express();
const filmy = require('./routers/filmy');

app.use('/api/filmy', filmy);

app.get('/api', (request, response) => {
    response.send('Hello world from Express!');
});

app.listen(1234);