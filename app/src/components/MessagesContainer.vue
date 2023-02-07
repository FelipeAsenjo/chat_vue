<template>
    <div 
        class="messages-container absolute top-[59px] flex bg-black z-10 w-full"
    >
        <ul class="flex flex-col self-end w-full px-14">
            <template v-if="room">
                <li 
                    v-for="message in messages[room]"
                    class="mb-2 py-1.5 px-3 rounded-md w-fit"
                    :class="[
                        message.emitter === usersSocketId ?
                            'self-end bg-messageSent' :
                            'bg-secondary'
                    ]"
                >
                    {{ message.msg }}
                </li>
            </template>
            <template v-else>
                <li 
                    v-for="message in messages[activeContact.socketId]"
                    class="mb-2 py-1.5 px-3 rounded-md w-fit"
                    :class="[
                        message.emitter === usersSocketId ?
                            'self-end bg-messageSent' :
                            'bg-secondary'
                    ]"
                >
                    {{ message.msg }}
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
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