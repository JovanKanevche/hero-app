import React from 'react'
import './App.css'
import RegisterScreen from './screens/RegisterScreen'
import AuthContext from './context/AuthContext'

function App() {
  const [auth, setAuth] = useState({
    token: '',
    loggein: false
  })

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <RegisterScreen />
    </AuthContext.Provider>
  )
}
export default App
