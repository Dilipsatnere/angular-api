
const mongoose = require ('mongoose')
const { async } = require('rxjs')

const User = require ('../model/userschema')

// 1. GET/READ for all user method of CRUD

exports.getusers = async (req,res)=>{
    try{
       const user = await User.find()

       res.status(200).json({
        msg:"All Users data featched successfully",
        user: user
      })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getuser = async (req,res)=>{
    try{
       const user= await User.findById(req.params.productid)

       res.status(200).json({
        msg:"Single User data featched successfully",
        user: user
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createuser = async (req,res) =>{
    try{
        const user = new User ({
            _id : new mongoose.Types.ObjectId(),
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            username : req.body.username,
            password : req.body.password,
            city : req.body.city,
            email : req.body.email,
            mobile : req.body.mobile
        })

        const data = await user.save()

        res.status(200).json({
            msg:"User created successfully",
            user: data
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 4. PUT/UPDATE for user method of CRUD
exports.updateuser = async (req,res)=>{
    try{
       const user= await User.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:"User updated successfully",
        user: user
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletuser = async (req,res)=>{
    try{
       const user= await User.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"user deleted successfully",
        user: user
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}