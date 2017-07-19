import mongoose from 'mongoose'

const User = new mongoose.Schema({
    username: String, 
    password: String, 
    expires: Number,
    id: Number,
    firstName: String,
    lastName: String,
    phone: String,
    photo: String,
    status: String,
    inactive: Boolean
})

export default mongoose.model('user', User)