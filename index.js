require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Github Actions`)
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
