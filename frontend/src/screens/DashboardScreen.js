import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Message from '../components/Message'

const SOCKET_URL = 'ws://localhost:3002/'

class DashboardScreen extends Component {
  socket
  state = {
    messages: [
      {
        name: 'Jovan Kanevche',
        username: 'Jovan',
        message: 'IFjoias jasj psaoj dlsap kpdsak saop kdpo sakpo kdsap aoks'
      }
    ],
    currentMessage: ''
  }

  setMessages = messages =>
    this.setState({
      messages
    })

  componentDidMount() {
    this.socket = new WebSocket(SOCKET_URL)
    this.socket.onmessage = messages =>
      this.setMessages([...this.state.messages, messages.data])
  }

  sendMessage = ({ token, message, username }) => {
    this.socket.send(
      JSON.stringify({
        token,
        message,
        username
      })
    )
  }

  render() {
    const { messages, currentMessage } = this.state

    return (
      <div style={{ maxWidth: '400px' }}>
        <h1>DASHBOARD</h1>
        {messages.map(Message)}

        <div>
          <Input
            placeholder="your message"
            onChange={e => {
              this.setState({
                currentMessage: e.target.value
              })
            }}
          />
          <Button
            style={{ width: '100%' }}
            onClick={() => {
              this.sendMessage({
                message: currentMessage
              })
            }}
          >
            Send
          </Button>
        </div>
      </div>
    )
  }
}

export default DashboardScreen
