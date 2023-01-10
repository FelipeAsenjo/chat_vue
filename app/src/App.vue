<template>
  <main class="flex min-h-screen">
    <!-- <SideMenu /> -->
    <!-- <ChatContainer 
      msg="hola mundo" 
      @click="emitMessage"
    /> -->

    <RouterView />
  </main>
</template>

<script>
  import ChatContainer from './components/ChatContainer.vue'
  import SideMenu from './components/SideMenu.vue'
  import { io } from 'socket.io-client'

  export default {
    data() {
      return {
        socket: io('http://localhost:3000')
      }
    },
    components: {
      ChatContainer,
      SideMenu
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
