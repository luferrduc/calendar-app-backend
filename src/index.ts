import express from 'express'
import path from 'path'

import configs from './config'
// import { addLogger } from './utils/logger'

import authRouter from './routes/auth.routes'
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
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(addLogger)
app.use(errorHandler)

// Routes
app.use('/api/auth', authRouter)

// TODO: CRUD -> Eventos

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on ${HOST_URL}:${PORT}`)
  globalLogger.log(`Server running`)
})