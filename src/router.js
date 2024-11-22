// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/RegisterComponent.vue'
import ChatList from './components/ChatList.vue'
import ChatRoom from './components/ChatRoom.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Login },
        { path: '/register', component: Register },
        { path: '/chats', component: ChatList },
        { path: '/chat/:id', component: ChatRoom }
    ]
})