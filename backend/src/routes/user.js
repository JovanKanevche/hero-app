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
  res.send(`${username} ${password}`)
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
