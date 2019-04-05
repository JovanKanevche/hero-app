const mongoose = require('mongoose')

const PASSWORD = 'kdpomq78DWbI2r5L'
const URI = `mongodb+srv://host-app-user:${PASSWORD}@hero-cluster-b5uws.mongodb.net/test?retryWrites=true`

mongoose.connect(URI)
const emailValidationPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: emailValidationPattern
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', UserSchema)
