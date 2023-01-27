<template>
    <section class="flex h-screen w-screen justify-center">
        <div 
            class="text-text self-center w-5/6 p-4 
                border border-icon rounded-lg md:w-80
                shadow-2xl placeholder:text-icon"
        >
            <form 
                class="flex flex-col"
                @submit.prevent="loginAttempt"
            >
                <input 
                    class="form-input my-3"
                    type="text"
                    placeholder="username"
                    v-model.trim="username"
                    @input="removeError"
                />
                <input 
                    class="form-input my-3"
                    type="password"
                    placeholder="password"
                    v-model.trim="password"
                    @input="removeError"
                />
                <p v-if="error" class="ml-auto text-error">Please fill the form</p>
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
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: '',
            error: false
        }
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        loginAttempt() {
            if(!this.username || !this.password) return this.error = true

            this.login({
                username: this.username,
                password: this.password
            })

            // this.password = ''
        },
        removeError() {
            this.error = false
        }
    },
    // computed: {
    //     ...mapState(['isAuthenticated'])
    // },
    // watch: {
    //     'this.isAuthenticated'(newValue) {
    //         // if(newValue) this.$router.push('Chat')
    //     }
    // }
}
</script>