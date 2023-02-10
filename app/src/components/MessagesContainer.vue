<template>
    <div 
        class="messages-container absolute top-[59px] flex bg-black z-10 w-full"
    >
        <ul class="flex flex-col self-end w-full px-14">
            <template v-if="room">
                <ListMessages :messages="messages[room]" :usersSocketId="usersSocketId"/>
            </template>
            <template v-else>
                <ListMessages :messages="messages[activeContact.socketId]" :usersSocketId="usersSocketId"/>
            </template>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ListMessages from './ListMessages.vue';

export default {
    data() {
        return {
            
        }
    },
    components: {
        ListMessages
    },
    computed: {
        ...mapState({
            usersSocketId: state => state.user.socketId,
            room: state => state.user.room,
            messages: state => state.messages,
            activeContact: state => state.activeContact,
        }),
    }
}
</script>

<style scoped>
.messages-container {
    height: calc(100% - 118px);
}
</style>