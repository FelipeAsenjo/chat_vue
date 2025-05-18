import server from './app.js'
import config from './src/config/index.js'
import socket from './src/libs/socket.io/index.js'


socket(server) 

server.listen(config.port, () => {
    console.log('Server is listening at port', config.port)
})
