import { io } from 'socket.io-client'
let url = import.meta.env.VITE_HOST_URL_DEV
const prodEnv = import.meta.env.VITE_NODE_ENV_PROD
const viteEnv = import.meta.env.MODE

if(viteEnv === prodEnv) {
    url = import.meta.env.VITE_HOST_URL_PROD 
}

const socket = io(`${url}`)

export default socket