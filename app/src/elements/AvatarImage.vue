<template>
        <img 
            v-if="avatar" 
            :src="avatar" 
            class="h-14 mx-1.5 p-1.5 lg:mx-4 rounded-full self-center"
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