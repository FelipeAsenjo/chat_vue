class AuthController {
    async login(req, res, next) {
        const { body } = req

        try {
            const user = users.find(user => user.username === body.username)
            if(!user) throw new Error('user or password incorrect')

            if(body.password !== user.password) throw new Error('user or password incorrect')

            const { password, ...userWithoutPassword } = user
            res.status(200).send(userWithoutPassword)
        } catch(error) {
            next(error)
        }
    }
}


const randomNumber = maxNumber => Math.floor(Math.random() * (maxNumber + 1))

const users = [
    {
        username: 'felipe',
        password: '1234',
        nickname: 'Felipe',
        socketId: 'woznU1pxZXdaa-hZAAAB',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "hello world"
    },
    {
        username: 'raul',
        password: '1234',
        nickname: 'Raul',
        socketId: 'bFZIfiIurPfbED2PAAAE',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "hello world"
    },
    {
        username: 'nico',
        password: '1234',
        nickname: 'Nico',
        socketId: 'fkJmLb3jp3Kp_8SGAAAB',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "what's going on"
    },
    {
        username: 'fran',
        password: '1234',
        nickname: 'Fran',
        socketId: 'cvKmL2oQIsafPdkRAAAD',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "Hey buddy"
    },
    {
        username: 'isa',
        password: '1234',
        nickname: 'Isa',
        socketId: '5XIni7n7a3xUJZy5AAAD',
        avatar: `https://i.pravatar.cc/150?img=${randomNumber(120)}`,
        lastMessage: "remember to order pizza for tonight"
    }
]

export default AuthController