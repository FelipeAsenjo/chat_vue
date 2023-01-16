<template>
        <img 
            v-if="avatar" 
            :src="avatar" 
            class="h-14 mx-2 lg:mx-4 rounded-full self-center"
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
    ]
}
</script>