const express = require('express')

const app = express()
const port = 3000
const userRoute = require('./user')

app.use(userRoute)
app.get('/', (req, res) => res.send('It works'))
app.listen(port, () => console.log(`Listening on port ${port}`))
