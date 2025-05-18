import { Server as SocketServer } from 'socket.io'

const socketOptions = {
    path: "/demo/app/web/ephemeral-chat/wss/socket.io",
    cors: {
        origin: "*"
    }
}

const connectedUsers = new Map()
const randomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1))
const avatarPicture = () => `https://i.pravatar.cc/150?img=${randomNumber(70)}` 
const userColor = () => `hsl(${randomNumber(360)}, 100%, 65%)`

export default (server) => {
    const io = new SocketServer(server, socketOptions)

    io.on('connection', (socket) => {

        socket.on('setupUser', user => {
            if(user.room) socket.join(user.room)

            user.avatar = avatarPicture()
            user.color = userColor()
            connectedUsers.set(socket.id, user)

            io.emit('newUserConnected', Array.from(connectedUsers.values()))
        })

        socket.on('message', data => {
            data.color = connectedUsers.get(data.emitter).color

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
