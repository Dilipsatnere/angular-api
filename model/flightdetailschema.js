
const mongoose = require ('mongoose')
const schema = mongoose.Schema

const flightdetailschema = schema ({
    _id: schema.Types.ObjectId,
    source : {type:String,require:true},
    destination : {type:String,require:true},
    journydate : {type:String,require:true},
    journytime : {type:String,require:true},
    flightname : {type:String,require:true},
    travelclass : {type:String,require:true},
    traveller : {type:String,require:true},
    price : {type:String,require:true},
    ticketprice : {type:String,require:true}
})

module.exports = mongoose.model("Flightdetail",flightdetailschema)