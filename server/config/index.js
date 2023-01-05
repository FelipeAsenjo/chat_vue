// import { config } from 'dotenv'
import devConfig from './dev.js'
// config()

// const { NODE_ENV } = process.env

let currentConfig = devConfig

// if(NODE_ENV === 'prod') {
//     currentConfig = prodConfig
// }
// if(NODE_ENV === 'test') {
//     currentConfig = testConfig
// }

export default currentConfig