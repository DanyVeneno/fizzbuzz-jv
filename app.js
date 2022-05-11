const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Aqui Estoy')
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})

//check

const fs = require("fs");

// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);

console.log("jellow you have a lot of work")
//console.log(explorers)




