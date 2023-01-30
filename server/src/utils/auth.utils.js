import jwt from 'jsonwebtoken'
import config from '../config/index.js'
const { JWT_KEY } = config
import { 
    randomBytes,
    scryptSync, 
    timingSafeEqual, 
} from 'crypto'

const maxAge = '1d'

const randomHex = () => randomBytes(16).toString('base64')

export const encryptPass = (password) => {
    const salt = randomHex()
    const encryptedPass = scryptSync(password, salt, 32).toString('base64')

    return `${salt}:${encryptedPass}`
}

export const verifyPass = (user, password) => {
    const [salt, key] = user.password.split(':')
    const hashedBuffer = scryptSync(password, salt, 32)

    const keyBuffer = Buffer.from(key, 'base64')
    const match = timingSafeEqual(hashedBuffer, keyBuffer)

    return match
}

export const signToken = payload => {
    const signedToken = jwt.sign(payload, JWT_KEY, { expiresIn: maxAge }) 
    return signedToken
}