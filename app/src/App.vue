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
        'assignSocket'
      ])
    },
    mounted() {
      socket.on('connect', () => this.assignSocket(socket.id))
      socket.on('broadcastMessage', data => this.addMessage(data))
      socket.on('newUserConnected', listOfSockets => {
        console.log(JSON.stringify(listOfSockets))
      })
    }
  }
</script>

<style scoped>

</style>
