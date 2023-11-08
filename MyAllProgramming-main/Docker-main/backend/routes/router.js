const express = require("express");
const router = new express.Router();
const Register=require("../models/student")
//require('dotenv').config()
const fs=require("fs")


// console.log(client)

router.get("/" , (req,res)=>{
    res.send("jugal sharma")
})

router.post("/Signup" , async(req,res)=>{

    try {
        const addData=new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
           
        })
        const upload=await addData.save();
        console.log(upload)

        res.status(200).json({error:"success"})
        
    } catch (error) {
        res.status(401).json({error:"unsuccess"})
    }
})



router.get('/products', async (req, res) => {
    try {
        const products = await Register.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;



