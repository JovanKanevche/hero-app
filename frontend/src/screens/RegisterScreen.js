import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function RegisterScreen() {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const onChangeValues = key => event =>
    setValues({
      ...values,
      [key]: event.target.value
    })

  const { name, username, password, email } = values

  const onSubmit = () => {
    console.log(values)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          borderColor: 'black'
        }}
      >
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ alignSelf: 'center' }}>REGISTER</h1>
          <Input
            type="text"
            placeholder="Enter full name"
            name="name"
            value={name}
            onChange={onChangeValues('name')}
          />
          <Input
            type="text"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={onChangeValues('username')}
          />
          <Input
            type="text"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={onChangeValues('password')}
          />

          <Input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={onChangeValues('email')}
          />
          <Button onClick={onSubmit}>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
