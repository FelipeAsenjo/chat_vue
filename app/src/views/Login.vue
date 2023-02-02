<template>
    <section class="flex h-screen w-screen justify-center">
        <div 
            class="text-text self-center w-5/6 p-4 
                border border-icon rounded-lg md:w-80
                shadow-2xl placeholder:text-icon"
        >
            <form 
                class="flex flex-col"
                @submit.prevent="register"
            >
                <input 
                    class="form-input my-3 required:border-icon border"
                    type="text"
                    placeholder="username"
                    v-model.trim="username"
                    @input="removeError"
                />
                <input 
                    class="form-input my-3"
                    type="text"
                    placeholder="room (optional)"
                    v-model.trim="room"
                />
                <p v-if="error" class="ml-auto text-error">
                    Please fill the mandatory fields
                </p>
                <button 
                    class="mx-auto my-3 px-4 py-1 border border-icon 
                        rounded-lg hover:border-text hover:text-text"
                >
                    Login
                </button>
            </form>
        </div>
    </section>
</template>

<script>
import socket from '../lib/socket.io'
export default {
    data() {
        return {
            username: '',
            room: '',
            error: false
        }
    },
    methods: {
        register() {
            if(!this.username) return this.error = true

            this.$store.commit('login', {
                username: this.username,
                socketId: socket.id,
                room: this.room
            })
        },
        removeError() {
            this.error = false
        }
    },
}
</script>