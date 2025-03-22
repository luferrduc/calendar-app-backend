import mongoose from "mongoose"
import configs from "../config"
import { globalLogger } from "../utils/global.logger"


export const dbConnection = async () => {
  try {
     await mongoose.connect(configs.MONGO_URL)

     globalLogger.log('Database connection successfully')
  } catch (error) {

    if(error instanceof Error){
      globalLogger.error(error.message, error.cause)
    }

    globalLogger.error('Error with database initialization')

    throw new Error('Error al inicializar base de datos')
  }
}