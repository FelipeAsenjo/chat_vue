import { createStore } from 'vuex'
import router from './router'
import socket from './lib/socket.io'

const globalDate = new Date()
export const randomId = globalDate.getTime()

const store = createStore({
     state: {
          isAuthenticated: false,
          user: {},
          activeContact: '',
          messages: {},
          // messages: [],
          contacts: []
     },
     getters: {
          
     },
     mutations: {
          addMessage(state, payload) {
               const emitterIsMySelf = payload.emitter === state.user.socketId
               console.log('emitter is myself', emitterIsMySelf)

               const previousContactMessageExist = Object.keys(state.messages)?.includes(payload.emitter)
               const previousUserMessageExist = Object.keys(state.messages)?.includes(payload.to)
               if(!previousContactMessageExist && !previousUserMessageExist) {
                    emitterIsMySelf ? 
                         state.messages[payload.to] = [ payload ] :
                         state.messages[payload.emitter] = [ payload ] 

                    console.log('first message', state.messages)
                    return
               }

               emitterIsMySelf ? 
                    state.messages[payload.to].push(payload) :
                    state.messages[payload.emitter].push(payload)
               
               // state.messages[payload.emitter].push(payload)
               console.log('messages per user', state.messages)
          },
          addContacts(state, contacts) {
               state.contacts = contacts
          },
          selectContact(state, payload) {
               state.user.room = ''
               state.activeContact = payload
          },
          selectRoom(state, payload) {
               state.activeContact = ''
               state.user.room = payload
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
               socket.emit('message', payload, (res) => {
                    // if(res.status === 'ok') console.log('message received')
               })               
          },
     }
})

export default store