<template>
    <footer class="absolute bottom-0 flex justify-center bg-secondary h-[59px] w-full">
        <form 
            class="px-2 w-full place-self-center flex lg:w-5/6"
            @submit.prevent="sendMessage"
        >
            <input 
                type="text" 
                class="form-input mr-2 lg:mr-0" 
                placeholder="Type a message"
                v-model.trim="input"
                @input="typing"
            > 
            <button class="block lg:hidden">
                <img src="../assets/send.png" alt="Send Message" height="36" width="36" />
            </button>
        </form>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            input: ''
        }
    },
    emits: ['sendMessage'],
    computed: {
        ...mapState({
            usersSocketId: state => state.user.socketId,
            username: state => state.user.username,
            activeContact: state => state.activeContact,
            roomSelected: state => state.user.room
        }),
        typing() {
            console.log('typing...')
        },
    },
    methods: {
        sendMessage() {
            if(!this.input.trim()) return
            const contactIsSelected = !!Object.keys(this.activeContact).length 
            if(!this.roomSelected && !contactIsSelected) return this.input = ''

            this.$store.dispatch('sendMessage', { 
                username: this.username,
                emitter: this.usersSocketId, 
                to: this.roomSelected || this.activeContact.socketId,
                msg: this.input,
                read: false 
            })
            this.input = ''
        }
    }
}
</script>