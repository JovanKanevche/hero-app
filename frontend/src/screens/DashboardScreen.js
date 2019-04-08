import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import Message from '../components/Message'

const SOCKET_URL = 'ws://localhost:3002/'

class DashboardScreen extends Component {
  socket
  state = {
    messages: [],
    currentMessage: ''
  }

  setMessages = messages =>
    this.setState({
      messages
    })

  componentDidMount() {
    this.socket = new WebSocket(SOCKET_URL)
    this.socket.onmessage = message =>
      this.setMessages([...this.state.messages, JSON.parse(message.data)])
  }

  componentWillUnmount() {
    this.socket.close()
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
    const { auth } = this.props

    if (auth.isAuth === false) return <Redirect to="/" />

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ maxWidth: '400px' }}>
          <h1>DASHBOARD</h1>
          {messages.map((e, index) => (
            <Message {...e} key={index} />
          ))}

          <div
            style={{
              border: 'solid',
              borderWidth: 0,
              borderTopWidth: 1,
              borderColor: 'black'
            }}
          >
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
                  token: auth.token,
                  id: auth.id,
                  message: currentMessage
                })
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardScreen
