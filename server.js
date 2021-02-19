const express = require("express")
const app = express()


const port = 1000


app.get("/" , (req,res) => {
    res.send("<h1>hello express</h1>")
})

app.listen(port, () => {
    console.log(`https//:localhost${port}`)
})