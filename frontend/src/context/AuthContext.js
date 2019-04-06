import { createContext } from 'react'

const AuthContext = createContext({
  token: '',
  logged: false
})

export default AuthContext
