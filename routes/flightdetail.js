
const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')
const flightcontroller = require ('../controller/flightdetail.model')

// 1. GET request for all flight details
 
  router.get('/',flightcontroller.getflightdetails)

// 2. GET request for Single flight details
  
  router.get('/:productid',flightcontroller.getflightdetail)

// 3. POST request 

  router.post('/',flightcontroller.creatflightdetail)

// 4. PUT request

  router.put('/:productid',flightcontroller.updateflightdetail)

// 5. DELETE request

  router.delete('/:productid',flightcontroller.deleteflightdetail)

  module.exports = router
