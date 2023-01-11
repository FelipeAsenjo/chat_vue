<template>
    <aside>
        <ChatHeader />
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

export default {
    data() {
        return {

        }
    },
    components: {
        ChatHeader,
        ChatContactCard
    },
    computed: {
        ...mapState({
            contacts: state => state.contacts
        })
    }
}

</script>

<style>

</style>