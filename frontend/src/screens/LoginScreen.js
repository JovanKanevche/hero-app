import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { get } from 'axios'

function LoginScreen() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const onChangeValues = key => event =>
    setValues({
      ...values,
      [key]: event.target.value
    })

  const { username, password } = values

  const onSubmit = () =>
    get('/user/login', { params: values })
      .then(e => {
        console.log(e.data)
      })
      .catch(e => alert(e.message))

  const onRegister = () => console.log('/register')

  return (
    <div style={styles.container}>
      <div
        style={{
          maxWidth: '400px',
          borderColor: 'black'
        }}
      >
        <form style={styles.form}>
          <h1 style={{ alignSelf: 'center' }}>LOGIN</h1>
          <Input
            type="text"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={onChangeValues('username')}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={onChangeValues('password')}
          />
          <Button onClick={onSubmit}>Login</Button>
          <Button onClick={onRegister}>Register</Button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  form: { display: 'flex', flexDirection: 'column' }
}

export default LoginScreen
