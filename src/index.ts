import express from 'express'
import path from 'path'
import cors from 'cors'
import configs from './config'
// import { addLogger } from './utils/logger'

// Routers
import authRouter from './routes/auth.routes'
import eventsRouter from './routes/events.routes'

import { globalLogger } from './utils/global.logger'
import { dbConnection } from './database/db'
import { errorHandler } from './middlewares/error-handler'
import { addLogger } from './middlewares/app.logger'



// Configs
const app = express()

// Database

dbConnection()

const PORT = configs.PORT
const HOST_URL = configs.HOST

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(addLogger)
app.use(errorHandler)

// Routes
app.use('/api/auth', authRouter)
app.use('/api/events', eventsRouter)

// TODO: CRUD -> Eventos

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on ${HOST_URL}:${PORT}`)
  globalLogger.log(`Server running`)
})