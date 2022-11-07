const express = require("express");

const redis = require("redis")


const app = express();


const client = redis.createClient();


client.connect();


client.on("connect", function (err) {
    console.log('Connected Redis');
});




app.get("/", async(req,res) => {

    const user = {
        id: 123123,
        name: "test",
        mail: "testmail"
    };


    const address = "test234";
    const email = "testing";

    const phone = 12312412;


    const info = {user, address, email, phone};


    client.set("user_info", JSON.stringify(info));

    res.send(info)



})


app.get("/test-redis", async(req,res) => {

    const value = await client.get("user_info")

    console.log(value);

    res.send(value);


    client.del("user_info")


})










app.listen(3001, () => 
    {
        console.log("server running on 3001")
    }

)