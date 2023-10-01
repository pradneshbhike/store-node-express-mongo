const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "GET request working orders"
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: "POST request working orders"
    })
})

module.exports = router;