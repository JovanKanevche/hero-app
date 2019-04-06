import React, { useState } from 'react'
import './App.css'
import AuthContext from './context/AuthContext'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { BrowserRouter, Route } from 'react-router-dom'
import DashboardScreen from './screens/DashboardScreen'

function App() {
  const [auth, setAuth] = useState({
    token: '',
    loggein: false
  })

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={LoginScreen}
          auth={auth}
          setAuth={setAuth}
        />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App
