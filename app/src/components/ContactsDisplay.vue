<template>
    <aside>
        <ChatHeader :title="socketId"  class="mb-1"/>
        <form @submit.prevent="selectContact">
            <input 
                class="p-5 rounded-lg h-8 w-full bg-selected outline-none placeholder:text-icon"
                v-model="messageToInput" 
                placeholder="Message to..."
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
            messageToInput: ''
        }
    },
    components: {
        ChatHeader,
        ChatContactCard,
        ChatInput
    },
    methods: {
        selectContact() {
            this.$store.commit('selectContact', this.messageToInput)
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