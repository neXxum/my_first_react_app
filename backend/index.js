import express from 'express'
import mongoose from 'mongoose'
import User from './User.js'
import router from './router.js'
import cors from 'cors'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.7cud8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// app.post('/', async (req, res) => {
//     const {name, direction, skills, aboutMe, lookingForAJob} = req.body
//     const post = await User.create({name, direction, skills, aboutMe, lookingForAJob})
//     res.json(post)
// })

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()