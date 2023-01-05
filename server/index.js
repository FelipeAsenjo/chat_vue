import server from './app.js'
import config from './config/index.js'
import socket from './libs/socket.io/index.js'

socket(server) 


server.listen(config.port, () => {
    console.log('Server is listening at port', config.port)
})