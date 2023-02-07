<template>
  <main class="min-h-screen bg-primary">

    <RouterView />
  </main>
</template>

<script>
import ChatContainer from './components/ChatContainer.vue'
import { mapMutations } from 'vuex'
import socket from './lib/socket.io'

  export default {
    data() {
      return {

      }
    },
    components: {
      ChatContainer,
    },
    methods: {
      ...mapMutations([
        'addMessage',
        'addContacts',
        'updateUser'
      ])
    },
    mounted() {
      socket.on('broadcastMessage', data => this.addMessage(data))
      socket.on('newUserConnected', users => {
        const contacts = users.filter(user => user.socketId !== socket.id)
        const user = users.filter(user => user.socketId === socket.id)[0]

        this.addContacts(contacts)
        this.updateUser(user)
      })
    }
  }
</script>

<style scoped>

</style>
