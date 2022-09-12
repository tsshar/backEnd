const connectToMongo = require('./db');

connectToMongo();


const express = require('express')
const app = express()
const port = 5000 

app.use(express.json())   // middleware to use request.body or req.body #like used in auth.js


app.use('/api/ideas', require('./routes/ideas'))  // /api/ideas - path on web, ./routes/ideas - file location to show

app.use('/api/auth', require('./routes/auth')) 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

 