import express, { Request, Response } from 'express'

import configs from './config'

// Configs
const app = express()

const PORT = configs.PORT
const HOST_URL = configs.HOST

// Middlewares
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Hola Mundo'
  })
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on ${HOST_URL}:${PORT}`);
});