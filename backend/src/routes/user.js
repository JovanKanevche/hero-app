const UserModel = require('../models/user.model')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
router.get('/user', (req, res) => res.send('This is the /user route'))

router.get('/user/register', (req, res) => {
  const { name, username, email, password } = req.query

  bcrypt
    .hash(password, 10)
    .then(hashedPassword => {
      const userModel = new UserModel({
        name,
        username,
        email,
        password: hashedPassword
      })

      userModel
        .save()
        .then(user => {
          if (!user || user.length === 0) return res.status(500).send(user)
          res.status(201).send(user)
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => {
      req.status(500).json(err)
    })
})

router.get('/user/login', (req, res) => {
  const { username, password } = req.query
  UserModel.find({ $or: [{ username }, { email: username }] }).then(user => {
    if (user < 1) return res.status(401).json({ message: 'Auth failed' })
    bcrypt.compare(password, user[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({ message: 'Auth failed' })
      }
      if (result) return res.status(201).json({ message: 'Auth successful' })
      return res.status(401).json({ message: 'Auth failed' })
    })
  })
})

router.get('/user/logout', (req, res) => {
  const { userId, token } = req.query
  res.send(userId)
})

router.get('/user/:userId', (req, res) => {
  UserModel.findById(userId)
    .then(user => {
      res.send(user)
    })
    .catch(err => res.status(500).send(err))
})

module.exports = router
