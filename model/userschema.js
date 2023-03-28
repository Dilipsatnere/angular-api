
const mongoose = require ('mongoose')
const schema = mongoose.Schema

const userschema = schema({
    _id : schema.Types.ObjectId,
    firstname : {type:String,require:true},
    lastname : {type:String,require:true},
    username : {type:String,require:true},
    password : {type:String,require:true},
    city : {type:String,require:true},
    email : {type:String,require:true},
    mobile : {type:String,require:true}
})

module.exports = mongoose.model("User",userschema)