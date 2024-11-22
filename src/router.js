// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/LoginComponent.vue'
import Register from './components/RegisterComponent.vue'
import ChatList from './components/ChatList.vue'
import ChatRoom from './components/ChatRoom.vue'
import CreateChat from './components/CreateChat.vue' // Импортируем новый компонент


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Login },
        { path: '/register', component: Register },
        { path: '/chats', component: ChatList },
        { path: '/chat/:id', component: ChatRoom },
        { path: '/create-chat', component: CreateChat } // Добавляем новый маршрут
    ]
})