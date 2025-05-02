<template>
        <img 
            v-if="avatar" 
            :src="avatar" 
            class="h-12 lg:mr-4 rounded-full self-center"
            alt="avatar image" 
        >
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: [
        'avatar'
    ],
    methods: {
        myMethod: () => { return 'mr-8' }
    }
}
</script>