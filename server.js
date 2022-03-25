// entry point for db

const express = require("express");
const Car = require("./models/carModels")

const app = express();
const db = require("./db.js");
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Server Working 🔥 " + port);
});

app.get("/getcars", (req, res)=>{
    Car.find({}, (err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port port 🔥");