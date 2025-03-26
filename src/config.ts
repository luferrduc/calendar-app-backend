import { config } from "dotenv"

config()

const configs = {
  PORT: process.env.PORT || 8080,
  MONGO_URL: process.env.MONGO_URL || "",
  PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT || "",
  HOST: process.env.HOST || "http://localhost",
  ENVIRONMENT: process.env.ENVIRONMENT || "PROD",
  NODE_ENV: process.env.NODE_ENV 
}

export default configs