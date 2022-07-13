const mongoose = require('mongoose')

const TotoSchema = mongoose.Schema({
    Item:{
        type: String
    },
    TypeItem:{
        type: Boolean
    },
    Radio:{
        type: Boolean
    }
},{
    collection:'TodoList'
})

module.exports = mongoose.model('TodoList', TotoSchema)