
const mongoose = require ('mongoose')
const { async } = require('rxjs')
const Flightdetail = require ('../model/flightdetailschema')

// 1. GET/READ for all details
  
exports.getflightdetails = async (req,res)=> {
    try{
        const flightdetail = await Flightdetail.find()
        res.status(200).json({
            msg:"All flight data featched successfully",
            flightdetails: flightdetail
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single data 
 
  exports.getflightdetail = async (req,res)=>{
    try{
        const flightdetail = await Flightdetail.findById(req.params.productid)

        res.status(200).json({
            msg:"Single flight data featched successfully",
            flightdetail : flightdetail
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
  }

// 3. POST/CREAT 

     exports.creatflightdetail = async (req,res) =>{
        try{
            const flightdetail = new Flightdetail ({
                _id: new mongoose.Types.ObjectId(),
                source : req.body.source,
                destination : req.body.destination,
                journydate : req.body.journydate,
                journytime : req.body.journytime,
                flightname : req.body.flightname,
                travelclass : req.body.travelclass,
                traveller : req.body.traveller,
                price : req.body.price,
                ticketprice : req.body.ticketprice
            })

            const data = await flightdetail.save()

            res.status(200).json({
                msg:"flightdetail created successfully",
                flightdetail: data
            })
        }catch(err){
            res.status(501).json({
                msg:"Somethng went wrong",
                error:err
            })
        }
     }

    // 4. PUT/UPDATE 
     
      exports.updateflightdetail = async (req,res)=>{
        try{
            const flightdetail = await Flightdetail.findByIdAndUpdate(req.params.productid, req.body)

            res.status(200).json({
                msg:"flightdetail updated successfully",
                flightdetail: flightdetail
            })
        }catch(err){
            res.status(501).json({
                msg:"Somethng went wrong",
                error:err
            })
        }
        
      }

    // 5. DELETE

      exports.deleteflightdetail = async (req,res)=>{
        try{
            const flightdetail = await Flightdetail.findByIdAndDelete(req.params.productid)

            res.status(200).json({
                msg:"Flightdetail deleted successfully",
                flightdetail: flightdetail
            })
        }catch (err){
            res.status(501).json({
                msg:"Somethng went wrong",
                error:err
            })
        }
      }