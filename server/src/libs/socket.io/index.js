import { Server as SocketServer } from 'socket.io'

const corsOptions = {
    cors: {
        origin: "*"
    }
}

const connectedUsers = new Map()
const randomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1))
const avatarPicture = () => `https://i.pravatar.cc/150?img=${randomNumber(70)}` 

export default (server) => {
    const io = new SocketServer(server, corsOptions)

    io.on('connection', (socket) => {

        socket.on('setupUser', user => {
            if(user.room) socket.join(user.room)

            user.avatar = avatarPicture()
            connectedUsers.set(socket.id, user)

            io.emit('newUserConnected', Array.from(connectedUsers.values()))
        })

        socket.on('message', data => {
            io.to(data.emitter).to(data.to).emit('broadcastMessage', data)
        })

        socket.on('joinRoom', roomName => socket.join(roomName))


        socket.on('disconnect', (reason) => {
            connectedUsers.delete(socket.id)
            io.emit('newUserConnected', Array.from(connectedUsers.values()))

            console.log('disconnected', socket.id)
            console.log('user disconnected', reason)
        })
    })
}
