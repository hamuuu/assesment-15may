const express = require('express');
const app = express();
const expressValidator = require('express-validator')

const order = require('./controller/orderController')

app.use(express.json());
app.use(expressValidator())

app.post('/order', order.orderRule(), order.validate, order.orderFood);

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});