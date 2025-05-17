import { config } from 'dotenv'
config()

const prodConfig = {
    JWT_KEY: process.env.JWT_KEY_PROD,
    env: process.env.NODE_ENV_PROD,
    port: process.env.PORT_PROD
}

export default prodConfig