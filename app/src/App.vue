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
        'addContacts'
      ])
    },
    mounted() {
      socket.on('broadcastMessage', data => this.addMessage(data))
      socket.on('newUserConnected', users => {
        const contacts = users.filter(user => user.socketId !== socket.id)
        this.addContacts(contacts)
      })
    }
  }
</script>

<style scoped>

</style>
