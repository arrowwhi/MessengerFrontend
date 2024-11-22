<!-- src/components/CreateChat.vue -->
<template>
  <div class="container mt-5">
    <h2>Создать новый чат</h2>
    <form @submit.prevent="submitNewChat">
      <div class="form-group mb-3">
        <label>Название чата:</label>
        <input v-model="newChatName" type="text" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label>Выберите участников:</label>
        <select v-model="selectedUsers" multiple class="form-control">
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div class="text-end">
        <button type="button" class="btn btn-secondary me-2" @click="cancel">Отмена</button>
        <button type="submit" class="btn btn-primary">Создать чат</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newChatName: '',
      users: [],
      selectedUsers: []
    }
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      // Здесь должен быть запрос к бэкенду для получения списка пользователей
      // Заглушка:
      this.users = [
        { id: 1, name: 'Анна' },
        { id: 2, name: 'Борис' },
        { id: 3, name: 'Виктория' },
        { id: 4, name: 'Григорий' }
      ];
    },
    submitNewChat() {
      if (!this.newChatName || this.selectedUsers.length === 0) {
        alert('Пожалуйста, введите название чата и выберите участников.');
        return;
      }

      // Здесь должен быть запрос к бэкенду для создания нового чата
      // Заглушка:
      console.log('Создан новый чат:', {
        name: this.newChatName,
        users: this.selectedUsers
      });
      // После создания чата перенаправляем на список чатов
      this.$router.push('/chats');
    },
    cancel() {
      // Вернуться на страницу со списком чатов
      this.$router.push('/chats');
    }
  }
}
</script>
