const express = require("express");
const examdata = require("../src/examdata");


const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());

app.get('/',function(req,res){
res.send("API response correctly")

})

app.get('/otp',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header('Acces-Control-Allow-Methods:GET,POST,PUT,DELETE');
    examdata.find().then(function(otp){
       res.send(otp);


    })
})

app.listen(5000,()=>{
    console.log("server started...")

});
