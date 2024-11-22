<!-- src/components/ChatList.vue -->
<template>
  <div class="container mt-5">
    <h2>Ваши чаты</h2>
    <button @click="createChat" class="btn btn-success mb-3">Создать новый чат</button>
    <ul class="list-group">
      <li
          v-for="chat in chats"
          :key="chat.id"
          class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ chat.name }}
        <button @click="enterChat(chat.id)" class="btn btn-primary">Открыть</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: []
    }
  },
  created() {
    this.fetchChats();
  },
  methods: {
    fetchChats() {
      // Здесь должен быть запрос к бэкенду для получения списка чатов
      // Пример:
      // this.$http.get('/api/chats')
      //   .then(response => {
      //     this.chats = response.data;
      //   });

      // Заглушка:
      this.chats = [
        { id: 1, name: 'Чат с Анной' },
        { id: 2, name: 'Рабочая группа' }
      ];
    },
    createChat() {
      // Логика создания нового чата
      // Здесь можно открыть модальное окно для ввода названия чата и участников

      // Заглушка:
      const newChat = { id: this.chats.length + 1, name: `Новый чат ${this.chats.length + 1}` };
      this.chats.push(newChat);
    },
    enterChat(chatId) {
      this.$router.push(`/chat/${chatId}`);
    }
  }
}
</script>
