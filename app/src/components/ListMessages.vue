<template>
    <li 
        v-for="message in messages"
        class="mb-2 py-1.5 px-3 rounded-md w-fit flex flex-col"
        :class="[
            message.emitter === usersSocketId ?
                'self-end bg-messageSent' :
                'bg-secondary'
        ]"
    >
        <p 
            v-if="room && message.emitter !== socketId"
            class="text-sm font-semibold text-error"
        >
            {{ message.username }}
        </p>
        <div class="flex">
            <p>{{ message.msg }}</p>
            <small class="pl-3 self-end text-[0.7rem] text-icon">
                {{ getHoursAndMinutes(message.timestamp) }}
            </small> 
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    props: {
        messages: Array,
        usersSocketId: String
    },
    methods: {
        getHoursAndMinutes(timestamp) {
            const messageDate = new Date(timestamp)
            const hours = messageDate.getHours()
            const minutes = messageDate.getMinutes()

            return `${hours}:${minutes}`
        }
    },
    computed: {
        ...mapState({
            socketId: state => state.user.socketId,
            room: state => state.user.room
        })
    }
}
</script>