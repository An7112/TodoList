const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const POST = 8080
const Data = require('./Routes/DataRoute')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', Data)
mongoose.connect('mongodb+srv://nguyenthanhan:0201172001An@cluster0.i3jnxby.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection
if(!db) {
    console.log("error connect")
}else{8
    console.log("Connect successfully!")
}

app.get('/', function(req, res) {
    res.send("We are on home")
})

app.listen(POST, function() {
    console.log(`The server is running on ${POST}`)
})