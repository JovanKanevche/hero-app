const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => res.send('This is the /user route'))

router.get('/user/register', (req, res) => {
  const { name, username, email, password } = req.query
  res.send(`${name} ${username} ${email} ${password}`)
})

router.get('/user/login', (req, res) => {
  const { username, password } = req.query
  res.send(`${username} ${password}`)
})

router.get('/user/logout', (req, res) => {
  const { userId, token } = req.query
  res.send(userId)
})

module.exports = router
