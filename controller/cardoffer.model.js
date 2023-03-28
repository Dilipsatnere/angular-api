
 const mongoose = require ('mongoose')
const { async } = require('rxjs')
 const Cardoffer = require ('../model/cardofferschema')

// 1. GET all request

 exports.getcardoffers = async (req,res)=>{
    try{
        const cardoffer = await Cardoffer.find()

        res.status(200).json({
            msg:"all cardoffer featched successfully",
            details: cardoffer
        })
    }catch (err){
        res.status(501).json({
            msg:"something went wrong",
            error:err
        })
    }
 }

// 2. GET single card offer

  exports.getcardoffer = async (req,res)=>{
    try{
        const cardoffer = await Cardoffer.findById(req.params.productid)

        res.status(200).json({
            msg:"all cardoffer featched successfully",
            details: cardoffer
        })
    }catch (err){
        res.status(501).json({
            msg:"something went wrong",
            error : err
        })
    }
  }

// 3. POST request

exports.creatcardoffer = async (req,res)=>{
    try{
        const cardoffer = new Cardoffer ({
            _id : new mongoose.Types.ObjectId(),
            image : req.body.image,
            title : req.body.title,
            description : req.body.description,
            link : req.body.link,
        })

        const data = await cardoffer.save()

        res.status(200).json({
            msg:"cardoffer created successfully",
            details : data
        })
    }catch (err){
        res.status(501).json({
            msg:"something went wrong",
            error:err
        })
    }
}

// 4. PUT request
 
  exports.updatecardoffer = async (req,res)=>{
    try{
        const cardoffer = await Cardoffer.findByIdAndUpdate(req.params.productid,req.body)

        res.status(200).json({
            msg:"cardoffer updated successfully",
            details : cardoffer
        })
    }catch (err){
        res.status(501).json({
            msg:"something went wrong",
            error:err
        })
    }
  }

// 5. DELETE request

  exports.deletecardoffer = async (req,res)=>{
    try{
        const cardoffer = await Cardoffer.findByIdAndDelete(req.params.productid)

        res.status(200).json({
            msg:"cardoffer deleted successfully",
            details : cardoffer
        })
    }catch (err){
        res.status(501).json({
            msg:"something went wrong ",
            error : err
        })
    }
  }