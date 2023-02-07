<template>
    <div 
        class="flex h-20 min-w-90 max-w-[450px] 
            mt-1 mr-0 lg:mr-2 hover:bg-secondary cursor-pointer"
        @click="selectContact(contact)"
    >
        <AvatarImage :avatar="contact.avatar" />
        <div class="w-full place-self-center hidden lg:block">
            <p class="text-lg">{{ contact.username }}</p>        
            <p class="text-icon text-md">{{ contact.status }}</p>
            <hr class="h-[1px] text-secondary mt-2">
        </div>
    </div>
</template>

<script>
import AvatarImage from '../elements/AvatarImage.vue';

export default {
    data() {
        return {

        }
    },
    props: {
        contact: Object
    },
    components: {
        AvatarImage
    },
    methods: {
        selectContact(contact) {
            this.$store.commit('selectContact', contact)
        }
    }
}

</script>