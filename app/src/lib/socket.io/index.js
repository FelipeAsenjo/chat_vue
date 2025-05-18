import { io } from 'socket.io-client'
let url = import.meta.env.VITE_HOST_URL_DEV
let hostBaseURL = import.meta.env.VITE_HOST_BASE_URL_DEV
let apiSocketUrl = ''
const prodEnv = import.meta.env.VITE_NODE_ENV_PROD
const viteEnv = import.meta.env.MODE

if(viteEnv === prodEnv) {
    url = import.meta.env.VITE_HOST_BASE_URL_PROD
    hostBaseURL = import.meta.env.VITE_HOST_BASE_URL_PROD 
    apiSocketUrl = import.meta.env.VITE_API_SOCKET_PROD 
}

const socket = io(`${url}`, {
    path: `/demo/app/web/ephemeral-chat/wss/socket.io`,
    transports: ["websocket"],
})

export default socket
