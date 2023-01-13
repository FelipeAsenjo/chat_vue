<template>
    <div 
        class="messages-container absolute top-[59px] flex bg-black z-10 w-full"
    >
        <ul class="flex flex-col self-end w-full px-14">
            <li 
                class="mb-2 p-1.5 rounded-md w-fit"
                :class="[
                    message.emitter === 'me' ?
                        'self-end bg-messageSent' :
                        'bg-secondary'
                ]"
                v-for="message in messages"
            >
                {{ message.message }}
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