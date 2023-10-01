const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "GET request working"
    })
})

router.post('/',(req,res,next)=>{

    console.log("input data",req.body.name,req.body.price);

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save()
    .then(result => {
        console.log(result);
    })
    res.status(201).json({
        message: "POST request working",
        productInfo: product
    })
})

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: "PATCH request working"
    })
})

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message: "DELETE request working"
    })
})


module.exports = router;