const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000;

const app = express();


app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to support desk api" })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))