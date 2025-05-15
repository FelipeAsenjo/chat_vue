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
          contacts: []
     },
     getters: {
          
     },
     mutations: {
          addMessage(state, payload) {
               const emitterIsMySelf = payload.emitter === state.user.socketId
               const isRoom = payload.to.includes('room')
               const previousContactMessageExist = Object.keys(state.messages)?.includes(payload.emitter)
               const previousUserMessageExist = Object.keys(state.messages)?.includes(payload.to)

               if(!previousContactMessageExist && !previousUserMessageExist) {
                    return emitterIsMySelf || isRoom ? 
                         state.messages[payload.to] = [ payload ] :
                         state.messages[payload.emitter] = [ payload ] 
               }

               emitterIsMySelf || isRoom ? 
                    state.messages[payload.to].unshift(payload) :
                    state.messages[payload.emitter].unshift(payload)
          },
          addContacts(state, contacts) {
               state.contacts = contacts
          },
          updateUser(state, user) {
               state.user = user
          },
          selectContact(state, payload) {
               state.user.room = ''
               state.activeContact = payload
          },
          selectRoom(state, roomName) {
               state.activeContact = ''
               state.user.room = `room:${roomName}`

               socket.emit('joinRoom', state.user.room)
          },
          login(state, user) {
               user.status = 'ocupado'
               if(user.room) user.room = `room:${user.room}`

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
               socket.emit('message', payload)               
          },
     }
})

export default store