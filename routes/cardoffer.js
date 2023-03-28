
 const express = require ('express')
 const router = express.Router()
 const mongoose = require ('mongoose')
 const cardcontroller = require ('../controller/cardoffer.model')

 // 1. get request for all offer CRUD

  router.get('/',cardcontroller.getcardoffers)

// 2. get request for single offer CRUD

  router.get('/:productid',cardcontroller.getcardoffer)

// 3. post request 

  router.post('/',cardcontroller.creatcardoffer)

// 4. put request 

  router.put('/:productid',cardcontroller.updatecardoffer)

// 5. delete request

  router.delete('/:productid',cardcontroller.deletecardoffer)

  module.exports = router