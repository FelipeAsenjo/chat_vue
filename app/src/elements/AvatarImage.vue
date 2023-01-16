<template>
        <img :src="avatar" alt="avatar image" class="h-14 mx-2 lg:mx-4 rounded-full self-center">
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