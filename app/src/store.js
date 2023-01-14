import { createStore } from 'vuex'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const globalDate = new Date()
export const randomId = globalDate.getTime()

const store = createStore({
     state: {
          isAuthenticated: true,
          userId: randomId,
          contacts: [
               {
                    name: 'Felipe',
                    avatar: 'https://i.pravatar.cc/150?img=2',
                    lastMessage: "hello world"
               },
               {
                    name: 'Nico',
                    avatar: 'https://i.pravatar.cc/150?img=7',
                    lastMessage: "what's going on"
               },
               {
                    name: 'Pelao',
                    avatar: 'https://i.pravatar.cc/150?img=3',
                    lastMessage: "Hey buddy"
               },
               {
                    name: 'Culiao',
                    avatar: 'https://i.pravatar.cc/150?img=4',
                    lastMessage: "remember to order pizza for tonight"
               }
          ],
          messages: [
               {
                    emitter: 'not me',
                    msg: 'yara yara'
               },
               {
                    emitter: 'not me',
                    msg: 'wum'
               },
               {
                    emitter: 'not me',
                    msg: 'pa que po'
               },
          ],
     },
     getters: {

     },
     mutations: {
          addMessage(state, payload) {
               state.messages.push(payload)
          },
     },
     actions: {
          sendMessage({ commit }, data) {
               const date = new Date()
               const payload = {
                    ...data,
                    timestamp: date.getTime()
               }
               socket.emit('message', payload, (res) => {
                    if(res.status === 'ok') console.log('message received')
               })               
          },
     }
})

export default store