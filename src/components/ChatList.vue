<!-- src/components/ChatList.vue -->
<template>
  <div class="container mt-5">
    <h2>Ваши чаты</h2>
    <button @click="showModal = true" class="btn btn-success mb-3">Создать новый чат</button>
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

    <!-- Модальное окно для создания нового чата -->
    <div class="modal" tabindex="-1" :class="{ show: showModal }" style="display: block;" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Создать новый чат</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitNewChat">
              <div class="form-group mb-3">
                <label>Название чата:</label>
                <input v-model="newChatName" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Выберите участников:</label>
                <select v-model="selectedUsers" multiple class="form-control">
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>
                </select>
              </div>
              <div class="mt-3 text-end">
                <button type="button" class="btn btn-secondary me-2" @click="closeModal">Отмена</button>
                <button type="submit" class="btn btn-primary">Создать</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Затемнение фона при открытом модальном окне -->
    <div class="modal-backdrop fade show" v-if="showModal"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [],
      showModal: false,
      newChatName: '',
      users: [],
      selectedUsers: []
    };
  },
  created() {
    this.fetchChats();
    this.fetchUsers();
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
    fetchUsers() {
      // Здесь должен быть запрос к бэкенду для получения списка пользователей
      // Пример:
      // this.$http.get('/api/users')
      //   .then(response => {
      //     this.users = response.data;
      //   });

      // Заглушка:
      this.users = [
        { id: 1, name: 'Анна' },
        { id: 2, name: 'Борис' },
        { id: 3, name: 'Виктория' },
        { id: 4, name: 'Григорий' }
      ];
    },
    showCreateChatModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.newChatName = '';
      this.selectedUsers = [];
    },
    submitNewChat() {
      // Проверка заполнения полей
      if (!this.newChatName || this.selectedUsers.length === 0) {
        alert('Пожалуйста, введите название чата и выберите участников.');
        return;
      }

      // Здесь должен быть запрос к бэкенду для создания нового чата
      // Пример:
      // this.$http.post('/api/chats', {
      //   name: this.newChatName,
      //   users: this.selectedUsers
      // })
      // .then(response => {
      //   this.chats.push(response.data);
      //   this.closeModal();
      // });

      // Заглушка:
      const newChat = {
        id: this.chats.length + 1,
        name: this.newChatName
      };
      this.chats.push(newChat);
      console.log('Создан новый чат:', {
        name: this.newChatName,
        users: this.selectedUsers
      });
      this.closeModal();
    },
    enterChat(chatId) {
      this.$router.push(`/chat/${chatId}`);
    }
  }
};
</script>

<style>
/* Стили для модального окна */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  margin: 1.75rem auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
}

.btn-close:focus {
  outline: none;
}
</style>
