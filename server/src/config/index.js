import devConfig from './dev.js'
import prodConfig from './prod.js'

let currentConfig = devConfig

if(NODE_ENV === 'prod') {
    currentConfig = prodConfig
}
// if(NODE_ENV === 'test') {
//     currentConfig = testConfig
// }

export default currentConfig