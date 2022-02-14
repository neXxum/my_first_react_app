import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {type: String, required: true},
    direction: {type: String, required: true},
    skills: {type: String, required: true},
    aboutMe: {type: String, required: true},
    lookingForAJob: {type: Boolean, required: true}
})

export default mongoose.model('User', User)