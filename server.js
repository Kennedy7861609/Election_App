const express = require('express')
const app = express()

const bodyparser = require ("body-parser");
app.use(bodyparser.json());

const appRoutes = require("./routes/index");
app.use("/api", appRoutes);

const PORT = process.env.port||8080
app.get('/', (req, res) => {
  res.send('welcome to the voting app')

})

  app.listen(PORT,()=>{
    console.log(` server running on port${PORT}`)
  
  })