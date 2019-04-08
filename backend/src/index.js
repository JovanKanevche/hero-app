const express = require('express')
const app = express()
const port = 3001
const userRoute = require('./routes/user')

app.use(userRoute)
app.get('/', (req, res) => res.send('It works'))
app.listen(port, () => console.log(`Listening on port ${port}`))
