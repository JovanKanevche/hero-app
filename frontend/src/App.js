import React, { useState } from 'react'
import './App.css'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { BrowserRouter, Route } from 'react-router-dom'
import DashboardScreen from './screens/DashboardScreen'

function App() {
  const [auth, setAuth] = useState({
    token: '',
    isAuth: false,
    id: ''
  })

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={props => (
          <LoginScreen {...props} auth={auth} setAuth={setAuth} />
        )}
      />
      <Route
        path="/register"
        render={props => (
          <RegisterScreen {...props} auth={auth} setAuth={setAuth} />
        )}
      />
      <Route
        path="/dashboard"
        render={props => (
          <DashboardScreen {...props} auth={auth} setAuth={setAuth} />
        )}
      />
    </BrowserRouter>
  )
}

export default App
