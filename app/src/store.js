import { createStore } from 'vuex'

const store = createStore({
    state: {
       isAuthenticated: true,
       contacts: [
           {
                name: 'Felipe',
                avatar: 'https://i.pravatar.cc/150?img=2',
                lastMessage: "hello world"
           },
           {
                name: 'Nico',
                avatar: 'https://i.pravatar.cc/150?img=7',
                lastMessage: "what's going on"
           },
           {
                name: 'Pelao',
                avatar: 'https://i.pravatar.cc/150?img=3',
                lastMessage: "Hey buddy"
           },
           {
                name: 'Culiao',
                avatar: 'https://i.pravatar.cc/150?img=4',
                lastMessage: "remember to order pizza for tonight"
           }
       ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})

export default store