var express = require('express');
const router = express.Router()
const knex = require('../db/knex')

router.get('/', (req, res, next) =>{
  knex.raw('SELECT * FROM posts').then(data =>{
     res.send(data.rows)
  })
  console.log('here in newlist')
})



module.exports = router
