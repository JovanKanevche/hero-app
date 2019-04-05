const UserModel = require('../models/user.model')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
router.get('/user', (req, res) => res.send('This is the /user route'))

router.get('/user/register', (req, res) => {
  const { name, username, email, password } = req.query

  bcrypt
    .hash(password, 10)
    .then(hashed => {
      const model = new UserModel({
        name,
        username,
        email,
        password: hashed
      })

      model
        .save()
        .then(doc => {
          if (!doc || doc.length === 0) return res.status(500).send(doc)
          res.status(201).send(doc)
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

module.exports = router
