<template>
    <div class="chat-window relative">
        <ChatHeader />
        <h1>CHAT WINDOW!!</h1>
        <ChatInput />
    </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue'
import ChatInput from './ChatInput.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        ChatHeader,
        ChatInput
    }
}
</script>

<style scoped>
.chat-window {
    background-image: linear-gradient(#111b21ef, #111b21ef), url('/img/bg-chat-window.png');
}
</style>