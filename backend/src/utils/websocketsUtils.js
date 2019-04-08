const WebSocket = require('ws')

const broadcast = wss => data =>
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(data)
  })

module.exports = { broadcast }
