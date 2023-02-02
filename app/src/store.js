import { createStore } from 'vuex'
import router from './router'
import socket from './lib/socket.io'

const globalDate = new Date()
export const randomId = globalDate.getTime()
// const serverURL = 'http://localhost:3000/api/v1'

const store = createStore({
     state: {
          isAuthenticated: false,
          user: {},
          // activeContact: {},
          activeContact: '',
          // messages: {},
          messages: [],
          contacts: []
     },
     getters: {

     },
     mutations: {
          addMessage(state, payload) {
               console.log('receiving', payload)
               state.messages.push(payload)
          },
          addContacts(state, contacts) {
               state.contacts = contacts
          },
          selectContact(state, payload) {
               state.activeContact = payload
          },
          assignSocket(state, socket) {
               console.log(socket)
               state.user.socketId = socket
          },
          login(state, user) {
               user.status = 'ocupado'
               state.user = { ...state.user, ...user }
               state.isAuthenticated = true

               socket.emit('setupUser', state.user)
               router.push('/chat')
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