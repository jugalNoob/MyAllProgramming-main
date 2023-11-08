const express = require("express");
const router = new express.Router();
const {doSomeHeavyTask}=require("./utils")
//require('dotenv').config()
const fs=require("fs")
const client = require('prom-client');

// console.log(client)

const collectDefaulrMetrics=client.collectDefaultMetrics

collectDefaulrMetrics({register:client.register})
router.get("" , (req,res)=>{

    res.send("  update your information ")
})


router.get("/slow" , async(req,res)=>{
    try {
        
        const timeTaken=await doSomeHeavyTask()
        return res.json({
            Status:"Success",
            message:`heavy task completed in ${timeTaken}m`
        })
    } catch (error) {
        console.log(error)
        return res.Status(500).json({status : "Error" , error:"interalserver error"})
     
    }
})


router.get("/metrics" ,async (req,res)=>{
    res.setHeader('Content-Type' , client.register.contentType)
    const metrics=await client.register.metrics()
    res.send(metrics)
})

module.exports = router;



