<template>
    <header class="bg-secondary h-[59px]">
        <AvatarImage v-if="activeContact" :avatar="activeContact.avatar" />
    </header>
</template>

<script>
import AvatarImage from '../elements/AvatarImage.vue';

export default {
    data() {
        return {

        }
    },
    props: [
        'activeContact'
    ],
    components: {
        AvatarImage
    }
}
</script>