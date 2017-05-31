var express = require('express');
const router = express.Router()
const knex = require('../db/knex')

router.get('/', (req, res, next) =>{
  knex.raw('SELECT * FROM posts').then(data =>{
    knex.raw('SELECT * FROM list_item').then(data2 =>{
      res.send({data: data.rows, data2: data2.rows})
    })
  })
});

router.post('/NewList', (req, res, next) =>{
    console.log(req.body)
  })





module.exports = router
