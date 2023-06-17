const express = require('express')
const app = express()
const PORT = process.env.port||8080
app.get('/', (req, res) => {
  res.send('welcome to the voting app')

})
  
  app.listen(PORT,()=>{
    console.log(` server running on port${PORT}`)
  })