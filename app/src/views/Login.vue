<template>
    <section class="flex h-screen w-screen justify-center">
        <div 
            class="text-icon self-center w-5/6 p-4 
                border border-icon rounded-lg md:w-80"
        >
            <form 
                class="flex flex-col"
                @submit.prevent="login"
            >
                <input 
                    class="form-input my-3"
                    type="text"
                    placeholder="username"
                />
                <input 
                    class="form-input my-3"
                    type="password"
                    placeholder="password"
                />
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
export default {
    data() {
        return {

        }
    },
    components: {

    },
    methods: {
        login() {
            console.log('trying to login')
        }
    }
}
</script>