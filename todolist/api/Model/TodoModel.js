const mongoose = require('mongoose')

const TotoSchema = mongoose.Schema({
    Item:{
        type: String
    },
    TypeItem:{
        type: String
    },
    Radio:{
        type: String
    }
},{
    collection:'TodoList'
})

module.exports = mongoose.model('TodoList', TotoSchema)