import { signToken, verifyPass } from '../../../utils/auth.utils.js'
class AuthController {
    async login(req, res, next) {
        const { body } = req

        try {
            const { password, ...userWithoutPassword } = users.find(user => user.username === body.username)
            if(!userWithoutPassword) res.status(403).send('user or password incorrect')

            // const { password, ...userWithoutPassword } = user

            const match = password === body.password
            if(!match) res.status(403).send('user or password incorrect')

            const signedToken = signToken(userWithoutPassword)

            res.cookie('token', signedToken, { httpOnly: true })
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