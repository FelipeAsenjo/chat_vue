<template>
    <div class="chat-window relative">
        <ChatHeader v-if="hasActiveChat" :activeContact="activeContact" :room="room" />
        <MessagesContainer />
        <ChatInput v-if="hasActiveChat" @sendMessage="sendMessage" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

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
    },
    computed: {
        ...mapState({
            activeContact: state => state.activeContact,
            room: state => state.user.room
        }),
        hasActiveChat() {
            return !!this.activeContact || !!this.room
        }
    }
}
</script>

<style scoped>
.chat-window {
    background-image: linear-gradient(#111b21ef, #111b21ef), url('/img/bg-chat-window.png');
}
</style>