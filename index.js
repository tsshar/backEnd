const connectToMongo = require('./db');

connectToMongo();


const express = require('express')
const app = express()
const port = 3000

app.use('/api/ideas', require('./routes/ideas'))  // /api/ideas - path on web, ./routes/ideas - file location to show

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

 