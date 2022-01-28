const mongoose = require('mongoose')

const cardsSchema = mongoose.Schema({
    savedUsers: {
        type: Array,
        default: undefined
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
})


const CardsModel = mongoose.model('cards', cardsSchema)

module.exports = {
    CardsModel
}
    
