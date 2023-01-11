<template>
    <div class="flex h-20 mt-2 mr-2 hover:bg-secondary cursor-pointer">
        <img :src="contact.avatar" alt="" class="h-14 mx-4 rounded-full self-center">
        <div class="pr-4 w-full place-self-center">
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
 <!-- border-b-[1px] border-secondary -->