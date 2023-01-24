<template>
    <div 
        class="messages-container absolute top-[59px] flex bg-black z-10 w-full"
    >
        <ul class="flex flex-col self-end w-full px-14">
            <li 
                v-for="message in messages"
                class="mb-2 py-1.5 px-3 rounded-md w-fit"
                :class="[
                    message.emitter === usersSocketId ?
                        'self-end bg-messageSent' :
                        'bg-secondary'
                ]"
            >
                {{ message.msg }}
            </li>
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
            usersSocketId: state => state.usersSocketId,
            messages: state => state.messages
        })
    }
}
</script>

<style scoped>
.messages-container {
    height: calc(100% - 118px);
}
</style>