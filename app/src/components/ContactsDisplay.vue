<template>
    <aside>
        <ChatHeader :title="socketId"  class="mb-1"/>
        <form @submit.prevent="selectRoom">
            <input 
                class="p-5 rounded-lg h-8 w-full bg-selected outline-none placeholder:text-icon"
                v-model="joinRoom" 
                placeholder="Create or join a room..."
            />
        </form>
        
        <ChatContactCard 
            v-for="contact in contacts" 
            :contact="contact"
        />
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import ChatHeader from './ChatHeader.vue'
import ChatContactCard from './ChatContactCard.vue';
import ChatInput from './ChatInput.vue';

export default {
    data() {
        return {
            joinRoom: ''
        }
    },
    components: {
        ChatHeader,
        ChatContactCard,
        ChatInput
    },
    methods: {
        selectRoom() {
            this.$store.commit('selectRoom', this.joinRoom)
        }
    },
    computed: {
        ...mapState({
            socketId: state => state.user.socketId,
            contacts: state => state.contacts
        })
    }
}

</script>

<style>

</style>