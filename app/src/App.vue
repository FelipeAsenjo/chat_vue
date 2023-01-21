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
        'saveOwnSocket'
      ])
    },
    mounted() {
      socket.on('connect', () => this.saveOwnSocket(socket.id))
      socket.on('broadcastMessage', data => {
        console.log('receiving data', data)
        this.addMessage(data)
      })
      socket.on('newUserConnected', listOfSockets => {
        console.log(listOfSockets)
      })
    }
  }
</script>

<style scoped>

</style>
