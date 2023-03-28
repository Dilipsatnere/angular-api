
const express = require ('express')
const router = express.Router()
const User = require ('../model/userschema')
const mongoose = require ('mongoose')
const usercontroller = require ('../controller/user.model')

// 1. code to handle GET request for all users
 router.get('/', usercontroller.getusers)
//     (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for users"
//     })
//  })

// 2. code to handle GET request for single user
router.get('/:productid',usercontroller.getuser)
//  (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single user"
//     })
//  })

// 3. code to handle POST request for user
router.post('/', usercontroller.createuser)
      
        // (req,res)=>{
  
    // this body parser code help to our postman app post detail in terminal
    // console.log(req.body)
    // console.log(req.body.firstname)
    // console.log(req.body.lastname)

    //  const tempuser = {
    //    firstname : req.body.firstname,
    //    lastname : req.body.lastname
    //  }
    //     const u = req.body

//     const user = new User ({
//         _id : new mongoose.Types.ObjectId(),
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//         username : req.body.username,
//         password : req.body.password,
//         city : req.body.city,
//         email : req.body.email,
//         mobile : req.body.mobile,
//     })

//     user.save().then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


//     res.status(200).json({
//         msg:"This is POST request for users",
//         statusmsg : "user created successfully",
//         user:user
        
        
//     })
//  })

// 4. code to handle PUT request for all users
router.put('/:productid', usercontroller.updateuser)
// (req,res)=>{
//      const id = req.params.productid
//     res.status(200).json({
//         msg:"This is PUT request for users",
//         id:id
//     })
//  })

// 4. code to handle DELETE request for all users
router.delete('/:productid', usercontroller.deletuser)
// (req,res)=>{
//     const id = req.params.productid
//    res.status(200).json({
//        msg:"This is DELETE request for users",
//        id:id
//    })
// })

 module.exports = router