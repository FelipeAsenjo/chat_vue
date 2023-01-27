import { config } from 'dotenv'
config()

const devConfig = {
    port: process.env.DEV_PORT
}

export default devConfig