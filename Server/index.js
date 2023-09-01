require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

// basic middelwares 
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

//routes
const Router = require("./Routers/MyRoute")
app.use("/", Router)


// mongo connect
try {
    mongoose.connect(process.env.URLATLAS);
    console.log("Database connected successfully")
} catch (e) {
    console.log("error in Atalas Connection", e)
}

app.listen(process.env.PORT, () => {
    console.log("You are running on PORT", process.env.PORT)
})









