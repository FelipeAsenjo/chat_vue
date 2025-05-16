<template>
    <footer class="absolute bottom-0 flex justify-center bg-secondary h-[59px] w-full">
        <form 
            class="px-2 w-full place-self-center flex md:px-14"
            @submit.prevent="sendMessage"
        >
            <input 
                type="text" 
                class="form-input mr-2 md:mr-0" 
                placeholder="Type a message"
                v-model.trim="input"
                @input="typing"
            > 
            <button class="block md:hidden">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send" class="icon glyph w-[36px] h-[36px]" fill="#fff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z" :style="input ? { fill: '#045C4B' } : { fill: '#2A3942' }"></path>
                    </g>
                </svg>
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