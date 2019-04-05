import React, { useState } from 'react'

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
    <div>
      <form>
        <label>
          HELLO
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeValues('name')}
          />
        </label>
        <label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChangeValues('username')}
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChangeValues('password')}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChangeValues('email')}
          />
        </label>
        <label>
          <button onClick={onSubmit} />
        </label>
      </form>
    </div>
  )
}

export default RegisterScreen
