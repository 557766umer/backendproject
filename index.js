require('dotenv').config()
console.log("start working");
const express = require('express');
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/test',(req, res) => {
    res.send("Hi?")
})
app.get('/url',(req,res)=>{
    res.send("<h1>URL</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})