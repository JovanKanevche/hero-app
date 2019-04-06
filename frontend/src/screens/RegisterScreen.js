import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { get } from 'axios'
import { Redirect, Link } from 'react-router-dom'

function RegisterScreen({ auth }) {
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

  const onSubmit = () =>
    get('/user/register', { params: values })
      .then(e => {
        console.log(e.data)
      })
      .catch(e => alert(e.message))

  const onLogin = () => console.log('/login')

  if (auth === true) return <Redirect to="/dashboard" />

  return (
    <div style={styles.container}>
      <div
        style={{
          maxWidth: '400px',
          borderColor: 'black'
        }}
      >
        <form style={styles.form}>
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
            type="password"
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
          <Link to="/">
            <Button>Login</Button>
          </Link>
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

export default RegisterScreen
