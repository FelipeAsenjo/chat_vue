import { createStore } from 'vuex'
import socket from './lib/socket.io'

const globalDate = new Date()
export const randomId = globalDate.getTime()

const store = createStore({
     state: {
          isAuthenticated: false,
          usersSocketId: '',
          // activeContact: {},
          activeContact: '',
          contacts: [
               {
                    name: 'Felipe',
                    socketId: 'woznU1pxZXdaa-hZAAAB',
                    avatar: 'https://i.pravatar.cc/150?img=2',
                    lastMessage: "hello world"
               },
               {
                    name: 'Nico',
                    socketId: 'fkJmLb3jp3Kp_8SGAAAB',
                    avatar: 'https://i.pravatar.cc/150?img=7',
                    lastMessage: "what's going on"
               },
               {
                    name: 'Fran',
                    socketId: 'cvKmL2oQIsafPdkRAAAD',
                    avatar: 'https://i.pravatar.cc/150?img=3',
                    lastMessage: "Hey buddy"
               },
               {
                    name: 'Isa',
                    socketId: '5XIni7n7a3xUJZy5AAAD',
                    avatar: 'https://i.pravatar.cc/150?img=4',
                    lastMessage: "remember to order pizza for tonight"
               }
          ],
          // messages: {},
          messages: [],
     },
     getters: {

     },
     mutations: {
          addMessage(state, payload) {
               console.log('adding message', payload)
               // state.messages[payload.to] = [payload, ...state.messages[payload.to]]
               state.messages.push(payload)
          },
          selectContact(state, payload) {
               console.log('contact select', payload)
               state.activeContact = payload
          },
          saveOwnSocket(state, socket) {
               console.log(socket)
               state.usersSocketId = socket
          }
     },
     actions: {
          sendMessage({ commit }, data) {
               const date = new Date()
               const payload = {
                    ...data,
                    timestamp: date.getTime()
               }
               commit('addMessage', payload)
               console.log(payload)
               socket.emit('message', payload, (res) => {
                    // if(res.status === 'ok') console.log('message received')
               })               
          },
     }
})

export default store