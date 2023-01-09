import { Server as SocketServer } from 'socket.io'

const corsOptions = {
    cors: {
        origin: "*"
    }
}

export default (server) => {
    const io = new SocketServer(server, corsOptions)

    io.on('connection', (socket) => {
        // console.log(socket.id)
        // console.log(socket)
        console.log('user connected')


        socket.on('hello', (arg) => {
            console.log(socket.rooms)
            console.log(arg)
            console.log('hello received by server')
        })

        socket.on('disconnect', (reason) => {
            console.log('user disconnected', reason)
        })
    })

}