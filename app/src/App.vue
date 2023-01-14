<template>
  <main class="min-h-screen bg-primary">

    <RouterView />
  </main>
</template>

<script>
  import ChatContainer from './components/ChatContainer.vue'
  import { io } from 'socket.io-client'

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
      emitMessage() {
        this.socket.emit('hello', 'world')
      }
    }
  }
</script>

<style scoped>

</style>
