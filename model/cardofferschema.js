
const mongoose = require ('mongoose')
const schema = mongoose.Schema

const cardofferschema = schema ({
    _id : schema.Types.ObjectId,
    image : {type:String,require:true},
    title : {type:String,require:true},
    description : {type:String,require:true},
    link : {type:String,require:true},
})

module.exports = mongoose.model("Cardoffer",cardofferschema)