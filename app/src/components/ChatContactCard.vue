<template>
    <div class="flex h-20 min-w-90 max-w-[450px] mt-1 mr-0 lg:mr-2 hover:bg-secondary cursor-pointer">
        <img :src="contact.avatar" alt="" class="h-14 mx-2 lg:mx-4 rounded-full self-center">
        <div class="w-full place-self-center hidden lg:block">
            <p class="text-lg">{{ contact.name }}</p>        
            <p class="text-icon text-md">{{ contact.lastMessage }}</p>
            <hr class="h-[1px] text-secondary mt-2">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        contact: Object
    }
}

</script>