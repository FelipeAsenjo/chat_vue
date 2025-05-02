<template>
    <div 
        class="flex min-w-90 max-w-[450px] 
            p-2 hover:bg-secondary cursor-pointer"
        @click="selectContact(contact)"
    >
        <AvatarImage :avatar="contact.avatar" :class="[displayText || activeMobileMenu ? 'mr-4' : '']" />
        <div 
            class="w-full place-self-center"
            :class="[displayText || activeMobileMenu ? 'block' : 'hidden lg:block']"
        >
            <p class="text-lg leading-6">{{ contact.username }}</p>        
            <p class="text-icon text-sm font-medium mb-1 opacity-70">{{ contact.status }}</p>
            <hr class="h-[1px] text-secondary">
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
        contact: Object,
        displayText: Boolean,
        activeMobileMenu: Boolean,
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