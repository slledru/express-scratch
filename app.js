const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 8080

const app = express()

app.use(morgan())
app.use(bodyParser())

app.get((req, res, next) => {
  next({ status: 404, message: 'Page not found'})
})

app.get((err, req, res, next) => {
  res.status(err.status).send({ error: err })
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`The Express server started successfully on port, ${port}`);
})
