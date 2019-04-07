const express = require('express')
const app = express()
const port = 3001
const userRoute = require('./routes/user')

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3002 })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(message)
    ws.send(
      JSON.stringify({
        person: 'JOV',
        message: 'LOREM IPSUM'
      })
    )
  })
})

module.exports = wss

app.use(userRoute)
app.get('/', (req, res) => res.send('It works'))
app.listen(port, () => console.log(`Listening on port ${port}`))
