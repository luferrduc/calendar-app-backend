import { config } from "dotenv"

config()



const configs = {
  PORT: process.env.PORT || 8080,
  MONGO_URL: process.env.MONGO_URL,
  privateKeyJWT: process.env.PRIVATE_KEY_JWT,
  HOST: process.env.HOST || 'http://localhost',
  ENVIRONMENT: process.env.ENVIRONMENT || "PROD"
}

export default configs