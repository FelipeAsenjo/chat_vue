<template>
  <HelloWorld 
    msg="hola mundo" 
    @click="emitMessage"
  />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import { io } from 'socket.io-client'

  export default {
    data() {
      return {
        socket: io('http://localhost:3000')
      }
    },
    components: {
      HelloWorld
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
