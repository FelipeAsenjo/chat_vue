import { Server as SocketServer } from 'socket.io'

const corsOptions = {
    cors: {
        origin: "*"
    }
}

export default (server) => {
    const io = new SocketServer(server, corsOptions)

    io.on('connection', (socket) => {
        const connectedSockets = io.sockets.adapter.rooms
        // socket.id = contacts[randomNumber(contacts.length)]

        console.log('user connected', socket.id)
        socket.emit('newUserConnected', connectedSockets)

        socket.on('message', (data, cb) => {
            // const room = `${socket.id}-${data.to}`
            // socket.emit('broadcastMessage', data)
            socket.to(data.to).emit('broadcastMessage', data)
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
