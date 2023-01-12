<template>
    <section class="flex p-0 xl:py-4 xl:px-12 2xl:px-20 h-screen">
        <ContactsDisplay class="min-w-fit h-full flex flex-col text-text border-r-[1px] border-selected"/>
        <ChatWindow class="flex-initial w-full text-text"/>
    </section>
</template>

<script>
import ContactsDisplay from '../components/ContactsDisplay.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        ContactsDisplay,
        ChatWindow
    }
}

</script>