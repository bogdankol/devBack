const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        default: 'google'
    },
    token: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        default: null
    }
})

userSchema.pre('save', async function () {
    if(this.isNew || this.isModified) {
        this.avatarURL = `https://eu.ui-avatars.com/api/?name=${this.email}.com&length=1`
    }
    
})


const UserModel = mongoose.model('users', userSchema)

module.exports = {
    UserModel
}