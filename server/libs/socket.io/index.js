import { Server as SocketServer } from 'socket.io'

const corsOptions = {
    cors: {
        origin: "*"
    }
}

export default (server) => {
    const io = new SocketServer(server, corsOptions)

    io.on('connection', (socket) => {
        console.log('user connected', socket.id)

        socket.on('message', (data, cb) => {
            socket.broadcast.emit('broadcastMessage', data)
            // console.log(socket.rooms)
            // console.log(socket)
            console.log(data)
            cb({
                status: 'ok'
            })
        })

        socket.on('disconnect', (reason) => {
            console.log('user disconnected', reason)
        })
    })

}