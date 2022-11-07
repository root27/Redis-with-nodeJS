const router = require('express').Router();


const redis = require("redis")


const client = redis.createClient();





router.get("/test2", async(req,res) => {

    client.connect();


client.on("connect", function (err) {
    console.log('Connected Redis');
});

    const value = await client.get("user_info")

    console.log(value);


    client.del("user_info")

    client.quit();

  


    
})


module.exports = router;