const express = require("express")
const app = express()


// let assume that we have an html file we want to send 
// 1. import the path module 
const path = require("path")

const port = 3000


app.get("/" , (req,res) => {
    //2. send file on the res 
    //      grab from the res object a method called sendFile
    res.sendFile(path.join(__dirname , "./static/index.html"))
})

app.listen(port, () => {
    console.log(`https//:localhost${port}`)
})