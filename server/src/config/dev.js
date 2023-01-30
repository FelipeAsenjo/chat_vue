import { config } from 'dotenv'
config()

const devConfig = {
    JWT_KEY: process.env.JWT_KEY_DEV,
    port: process.env.DEV_PORT
}

export default devConfig