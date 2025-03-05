import express from "express"
import router from "./routes/routes"
import championshipRouter from "./routes/championshipRoutes"
import resultsRouter from "./routes/resultsRoutes"
import cors from "cors"


const app = express()

app.use(cors({
    origin: [
        'http://localhost:5173',  
        'https://motorsport-tracker-frontend.onrender.com',
        'https://superlicencetracker.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use('/api/drivers', router)
app.use('/api/championships', championshipRouter)
app.use('/api/results', resultsRouter)




export default app