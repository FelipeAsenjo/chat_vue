<template>
    <header class="bg-secondary h-[59px]">
        <div class="flex h-full justify-center" v-if="avatar">
            <AvatarImage :avatar="avatar" />
        </div>
        <div class="flex h-full" v-if="activeContact">
            <AvatarImage :avatar="activeContact.avatar" />
            <div class="self-center flex flex-col">
                <p>{{ activeContact.username }}</p>
                <small class="text-icon">
                    {{ activeContact.status }}
                </small>
            </div>
        </div>
        <div class="flex h-full justify-center" v-if="room">
            <div class='self-center'>{{ room }}</div>
        </div>
        <div 
            class="flex"
            v-if="activeContact"
        >
            <div class="self-center flex flex-col">
                <p>{{ activeContact.name }}</p>
                <small class="text-icon">
                    {{ activeContact.lastMessage }}
                </small>
            </div>
        </div>
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
        'activeContact',
        'avatar',
        'room'
    ],
    components: {
        AvatarImage
    }
}
</script>