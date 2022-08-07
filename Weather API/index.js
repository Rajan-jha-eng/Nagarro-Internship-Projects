require('dotenv');
const express = require("express");
const https = require("http");

const apikey = "4b127f157aa5951c78953e9d55ed0e92";
const app = express()

const city="delhi";
const countrycode = "IN";
const statecode ="HR";

const loc1 =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const loc2 = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countrycode}&appid=${apikey}`;
const loc3 = `https://api.openweathermap.org/data/2.5/weather?q=${city},${statecode},${countrycode}&appid=${apikey}`;


app.get("/", (err, res) =>{
    console.log(1);
    if(err){
        console.log(err)
    }
    else{
        https.get(loc1, (response) =>{
            if(response.statusCode === 200) {
                response.on("data", (data) => {
                    const info = JSON.parse(data);
                    console.log(`Description: ${des}Temperature: ${temperature}Pressure: ${pres}Humidity: ${hum}`);
                    res.write(`<html>
                            <head><title>Weather Api</title></head>
                                    <body>
                                    <div style="text-align:center">
                                            <h1 style="font-size:50px; color:red"> Weather API </h1>
                                            <h2> Description:${info.weather[0].description}</h2>
                                            <h3> Temperature: ${info.main.temp} </h3>
                                            <h3> Pressure: ${info.main.pressure}</h3>
                                            <h3> Humidity: ${info.main.humidity}</h3>
                                    </div>
                                    </body>
                                </html>`);
                    res.send(); 
                })
            }
        });
    }   
});
app.listen(2000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on port 2000");
    }
})
