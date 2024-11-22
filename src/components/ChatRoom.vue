<!-- src/components/ChatRoom.vue -->
<template>
  <div class="container mt-5">
    <h2>Чат {{ chatId }}</h2>
    <div class="card">
      <div class="card-body" style="height: 400px; overflow-y: scroll;">
        <div v-for="message in messages" :key="message.id" class="mb-2">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      <div class="card-footer">
        <form @submit.prevent="sendMessage">
          <div class="input-group">
            <input
                v-model="newMessage"
                type="text"
                class="form-control"
                placeholder="Введите сообщение"
                required
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">Отправить</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button @click="goBack" class="btn btn-link mt-3">Вернуться к списку чатов</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatId: this.$route.params.id,
      messages: [],
      newMessage: ''
    }
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      // Здесь должен быть запрос к бэкенду для получения сообщений чата
      // Пример:
      // this.$http.get(`/api/chats/${this.chatId}/messages`)
      //   .then(response => {
      //     this.messages = response.data;
      //   });

      // Заглушка:
      this.messages = [
        { id: 1, sender: 'Анна', text: 'Привет!' },
        { id: 2, sender: 'Вы', text: 'Здравствуйте!' }
      ];
    },
    sendMessage() {
      // Здесь должен быть запрос к бэкенду для отправки сообщения
      // Пример:
      // this.$http.post(`/api/chats/${this.chatId}/messages`, { text: this.newMessage })
      //   .then(response => {
      //     this.messages.push(response.data);
      //     this.newMessage = '';
      //   });

      // Заглушка:
      const message = { id: this.messages.length + 1, sender: 'Вы', text: this.newMessage };
      this.messages.push(message);
      this.newMessage = '';
    },
    goBack() {
      this.$router.push('/chats');
    }
  }
}
</script>
