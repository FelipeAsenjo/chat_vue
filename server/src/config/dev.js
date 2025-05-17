import { config } from 'dotenv'
config()

const devConfig = {
    JWT_KEY: process.env.JWT_KEY_DEV,
    env: process.env.VITE_NODE_ENV_DEV,
    port: process.env.VITE_PORT_DEV
}

export default devConfig