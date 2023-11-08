const express = require("express");
const client=require("prom-client") // metric collection
const app = express();
const responseTime = require('response-time')
// console.log(client)

const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {

  transports: [
    new LokiTransport({
      host: "http://127.0.0.1:3100"
    })
  ]

};


const logger = createLogger(options);

const collectDefaultMetrics=client.collectDefaultMetrics
collectDefaultMetrics({register:client.register})
//Create a Time Your In

const reqResTime=new client.Histogram({
    name:"http_express_req_res_time",
    help:"this tells how much is takens by rew and res",
    labelNames:['method' , 'route' , 'status_code'],
    buckets:[1 , 50  , 100 , 200 , 500 , 800 , 1000 , 2000]
})


const totaReq=new client.Counter({
    name:"total_req",
    help:"tells total req"
})


app.use(responseTime((req,res,time)=>{
    totaReq.inc()
    reqResTime.labels({
        method :  req.method || "GET" ,
        route:req.url,
        status_code:res.statusCode
    })
    .observe(time)
    // console.log(`request time ${time}`)
}))



// Define a route that responds to HTTP GET requests at the root path ("/").
app.get("/", async(req, res) => {

  try {
    totaReq.inc()
    logger.info('req came on / router')
  res.json({
    name: "jugal",
    class: "40"
  });
  } catch (error) {
    logger.error(error.message)
  }
   
});



app.get("/slow", async(req, res) => {

  try {
    totaReq.inc()
    logger.info('req came on /slow router')
  res.json({
    name: "jugal",
    class: "40"
  });
  } catch (error) {
    logger.error(error.message)
  }
   
});

app.get("/metrics" ,async (req,res)=>{
    res.setHeader("Content-Type" ,client.register.contentType)
    const metrics=await client.register.metrics()
    res.send(metrics)
    // console.log(metrics)
})


// Start the Express server and listen on port 9000.
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




///Monitoring 

//1::Metrics  

//..Prometheus npm i prom-client

// docker-compose up -d
//host:9090/graph?g0.expr=&g0.tab=1&g0.stacked=0&g0.show_exemplars=0&g0.range_input=1h
//http://localhost:9090/targets?search=
//http://localhost:9090/graph?g0.expr=process_cpu_seconds_total&g0.tab=0&g0.stacked=0&g0.show_exemplars=0&g0.range_input=1h

//Second create a chat ||||||||||||||||/////!SECTION

//docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss

//http://localhost:3000/login 

//..password admin // email is admin
//..http://192.168.29.78:9090

//..https://grafana.com/grafana/dashboards/6126-node-dashboard/

// this is my id 6126

//..http://localhost:3000/dashboard/import -->code id 
//http://localhost:3000/dashboard/import

//2:: Log collection Lokin

///..Ganfani lokin

//... winton winston-loki
