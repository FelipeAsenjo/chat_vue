import { Server as SocketServer } from 'socket.io'

const corsOptions = {
    cors: {
        origin: "*"
    }
}

export default (server) => {
    const io = new SocketServer(server, corsOptions)

    io.on('connection', (socket) => {
        let connectedSockets = io.sockets.adapter.rooms
        // socket.id = contacts[randomNumber(contacts.length)]

        // socket.on('reassignUsersRoom', (usersSocketId) => {
        //     console.log('reasignando usuario', usersSocketId)
        //     socket.id = usersSocketId
        // })
        socket.on('joinRoom', (room) => {
            socket.join(room)
        })

        console.log('user connected', socket.id)
        socket.emit('newUserConnected', connectedSockets)

        socket.on('message', (data, cb) => {
            console.log(data)
            // const room = `${socket.id}-${data.to}`
            // socket.emit('broadcastMessage', data)
            socket.to(data.to).emit('broadcastMessage', data)
            // console.log(socket.rooms)
            // console.log(socket)
            cb({
                status: 'ok'
            })
        })

        socket.on('disconnect', (reason) => {
            console.log('user disconnected', reason)
        })
    })

}
