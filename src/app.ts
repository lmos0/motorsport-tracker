import express from "express"
import router from "./routes/routes"
import championshipRouter from "./routes/championshipRoutes"
import resultsRouter from "./routes/resultsRoutes"
import cors from "cors"

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))

app.use(express.json())
app.use('/api/drivers', router)
app.use('/api/championships', championshipRouter)
app.use('/api/results', resultsRouter)


export default app