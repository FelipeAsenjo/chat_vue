<template>
    <footer class="absolute bottom-0 flex justify-center bg-secondary h-[59px] w-full">
        <form 
            class="w-5/6 place-self-center"
            @submit.prevent="sendMessage"
        >
            <input 
                type="text" 
                class="form-input" 
                placeholder="Type a message"
                v-model.trim="input"
                @input="typing"
            > 
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
            activeContact: state => state.activeContact,
            roomSelected: state => state.user.room
        }),
        typing() {
            console.log('typing...')
        },
    },
    methods: {
        sendMessage() {
            const contactIsSelected = !!Object.keys(this.activeContact).length 
                
            if(!this.roomSelected && !contactIsSelected) return this.input = ''

            this.$store.dispatch('sendMessage', { 
                emitter: this.usersSocketId, 
                to: this.roomSelected || this.activeContact,
                msg: this.input 
            })
            this.input = ''
        }
    }
}
</script>