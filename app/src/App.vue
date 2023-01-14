<template>
  <main class="min-h-screen bg-primary">

    <RouterView />
  </main>
</template>

<script>
  import ChatContainer from './components/ChatContainer.vue'
  import { io } from 'socket.io-client'
import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        socket: io('http://localhost:3000')
      }
    },
    components: {
      ChatContainer,
    },
    methods: {
      ...mapMutations([
        'addMessage'
      ])
    },
    mounted() {
      this.socket.on('broadcastMessage', data => {
        this.addMessage(data)
        console.log('receiving messages from ', data.emitter)
      })
    }
  }
</script>

<style scoped>

</style>
