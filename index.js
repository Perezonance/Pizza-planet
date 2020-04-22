const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());


app.get('/api/pos/', (req, res) => {
    console.log('Received get request for new order');
    res.status(200).send('Received new order');
});

app.listen(port, () => {
    console.log('Listening on port:' + port);
});