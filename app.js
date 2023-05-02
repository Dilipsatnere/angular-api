const express = require ('express')
const app = express()
const usersrouter = require ('./routes/users.js')
const flightdetailrouter = require ('./routes/flightdetail')
const cardofferrouter = require ('./routes/cardoffer')
const morgan = require ('morgan')
const bodyparser = require ('body-parser')
const mongoose  = require('mongoose')
const cors = require ('cors')
require('dotenv').config()


// middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({extended:true}))
app.use(
//     cors({
//         origin:"*"
//     })
    cors({
        origin:""
    })
)
app.use(morgan("dev"))





    app.use('/user',usersrouter)

   app.use('/flightdetails',flightdetailrouter)

   app.use('/cardoffer',cardofferrouter)


// connection to mongo database
// const uri = "mongodb+srv://dilips03378:dilip%401234@cluster0.u9fe0uo.mongodb.net/angular"

mongoose.connect(process.env.mongoconnection)

module.exports = app
