<template>
    <div class="chat-window relative">
        <ChatHeader />
        <!-- <h1>CHAT WINDOW!!</h1> -->
        <MessagesContainer />
        <ChatInput @sendMessage="sendMessage" />
    </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue'
import ChatInput from './ChatInput.vue'
import MessagesContainer from './MessagesContainer.vue'

export default {
    data() {
        return {
            inputMessage: ''
        }
    },
    components: {
        ChatHeader,
        ChatInput,
        MessagesContainer
    },
    methods: {
        sendMessage(message) {
            console.log('sending message', message)
        }
    } 
}
</script>

<style scoped>
.chat-window {
    background-image: linear-gradient(#111b21ef, #111b21ef), url('/img/bg-chat-window.png');
}
</style>