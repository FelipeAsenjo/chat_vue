<template>
    <header class="bg-secondary min-h-[65px]">
        <div class="flex h-fit" v-if="avatar">
            <AvatarImage :avatar="avatar" :class="[activeMobileMenu ? 'mr-4' : '']" />
            <p class="text-lg" :class="[activeMobileMenu ? 'block' : 'hidden lg:block']">
                {{ username }}
            </p>
        </div>
        <div class="flex h-full" v-if="activeContact">
            <ChatContactCard :contact="activeContact" :displayText="true" />
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
import { mapState } from 'vuex';
import AvatarImage from '../elements/AvatarImage.vue';
import ChatContactCard from './ChatContactCard.vue';

export default {
    data() {
        return {

        }
    },
    props: [
        'activeContact',
        'avatar',
        'room',
        'activeMobileMenu',
    ],
    components: {
        AvatarImage,
        ChatContactCard
    },
    computed: {
        ...mapState({
            username: state => state.user.username,
        }),
    }
}
</script>