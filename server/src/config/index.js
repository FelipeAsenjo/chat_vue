import { config } from 'dotenv'
import devConfig from './dev.js'
import prodConfig from './prod.js'
const { NODE_ENV, VITE_NODE_ENV_PROD } = process.env
config()

let currentConfig = devConfig

if(NODE_ENV === VITE_NODE_ENV_PROD) {
    currentConfig = prodConfig
}
// if(NODE_ENV === 'test') {
//     currentConfig = testConfig
// }

export default currentConfig