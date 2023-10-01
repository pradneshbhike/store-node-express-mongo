const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://pradneshbhike:ULlrBa6FnlHlTpva@cluster0.5umni9h.mongodb.net/?retryWrites=true&w=majority`);

console.log("mongo connected.....!");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const productsConfig = require('./api/routes/products');
const ordersConfig = require('./api/routes/orders');

app.use('/products',productsConfig);
app.use('/orders',ordersConfig);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    res.status(404);
    next(error);
})

app.use((error,req,res,next)=>{
    
    res.status(error.status || 500);
    res.json({
        message: error.message,
    })
})
console.log("one last time")
module.exports = app;