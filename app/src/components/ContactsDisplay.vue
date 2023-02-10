<template>
    <aside>
        <ChatHeader :avatar="usersAvatar" class="mb-1"/>
        <div 
            class="lg:hidden hover:cursor-pointer"
            @click="showMenu"
        >
            <h1 
                class="text-6xl text-center text-icon"
                :class="[activeMobileMenu ? 'rotate-45 text-[#fff]' : '']"
            >
                +
            </h1>
        </div>
        <form @submit.prevent="selectRoom">
            <input 
                class="p-5 rounded-lg h-8 w-full bg-selected outline-none 
                    lg:block placeholder:text-icon"
                :class="[activeMobileMenu ? 'block' : 'hidden']"
                v-model="joinRoom" 
                placeholder="Create or join a room..."
            />
        </form>
        
        <ChatContactCard 
            v-for="contact in contacts" 
            :contact="contact"
        />
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import ChatHeader from './ChatHeader.vue'
import ChatContactCard from './ChatContactCard.vue';

export default {
    data() {
        return {
            joinRoom: '',
            activeMobileMenu: false
        }
    },
    components: {
        ChatHeader,
        ChatContactCard,
    },
    methods: {
        selectRoom() {
            this.$store.commit('selectRoom', this.joinRoom)
        },
        showMenu() {
            this.activeMobileMenu = !this.activeMobileMenu
        }
    },
    computed: {
        ...mapState({
            socketId: state => state.user.socketId,
            usersAvatar: state => state.user.avatar,
            contacts: state => state.contacts
        })
    }
}

</script>

<style>

</style>