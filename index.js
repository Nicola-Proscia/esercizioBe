import express from 'express'

import mongoose from 'mongoose'
import mongoSanitize from 'express-mongo-sanitize'
import dotenv from 'dotenv'
import cors from 'cors'
import http from 'http'

// Routes

import userRoute from './routes/userRoute.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000
const server = http.createServer(app)

//Mongoose on MongoDB
//Stringa di connessione sul db reale
mongoose.connect(process.env.CONNECTION_URL)
.then(()=> console.log('Connected to MongoDB'))
.catch((err)=> console.log(err)) 


app.use(mongoSanitize())
app.use(express.json())
app.use(cors())

//Rotte Api
app.use('/users', userRoute)



server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

