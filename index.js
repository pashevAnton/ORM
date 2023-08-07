import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
import router from "./router.js"
import fileUpload from 'express-fileupload'
const PORT = 5000

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const DB_URL = "mongodb://127.0.0.1:27017/backend";


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (e){
        console.log(e)
    }
}

startApp()