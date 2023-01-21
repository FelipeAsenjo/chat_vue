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
            console.log(socket.rooms)
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

const randomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1))

const mainUser = {
    name: 'Felipe',
    socketId: 'woznU1pxZXdaa-hZAAAB',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastMessage: "hello world"
}

const contacts = [
    {
        name: 'Raul',
        socketId: 'bFZIfiIurPfbED2PAAAE',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "hello world"
    },
    {
        name: 'Nico',
        socketId: 'fkJmLb3jp3Kp_8SGAAAB',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "what's going on"
    },
    {
        name: 'Fran',
        socketId: 'cvKmL2oQIsafPdkRAAAD',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "Hey buddy"
    },
    {
        name: 'Isa',
        socketId: '5XIni7n7a3xUJZy5AAAD',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "remember to order pizza for tonight"
    }
]