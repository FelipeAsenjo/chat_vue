<template>
    <footer class="absolute bottom-0 flex justify-center bg-secondary h-[59px] w-full">
        <form 
            class="w-5/6 place-self-center"
            @submit.prevent="sendMessage"
        >
            <input 
                type="text" 
                class="p-5 rounded-lg h-8 w-full bg-selected outline-none placeholder:text-icon" 
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
            userId: state => state.userId
        }),
        typing() {
            console.log('typing...')
        },
    },
    methods: {
        sendMessage() {
            this.$store.dispatch('sendMessage', { 
                emitter: this.userId, 
                msg: this.input 
            })
            this.input = ''
        }
    }
}
</script>