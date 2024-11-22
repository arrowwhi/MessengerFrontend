<!-- src/components/RegisterComponent.vue -->
<template>
  <div class="container mt-5">
    <h2>Регистрация</h2>
    <form @submit.prevent="registerComponent">
      <div class="form-group">
        <label>Имя:</label>
        <input v-model="name" type="text" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
      <p class="mt-3">
        Уже есть аккаунт?
        <router-link to="/">Войдите</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerComponent() {
      // Здесь должен быть запрос к бэкенду для регистрации
      // Пример:
      // this.$http.post('/api/register', { name: this.name, email: this.email, password: this.password })
      //   .then(response => {
      //     // Сохранение токена и редирект на страницу чатов
      //     this.$router.push('/chats');
      //   });

      // Заглушка:
      console.log('Регистрация:', this.name, this.email, this.password);
      this.$router.push('/chats');
    }
  }
}
</script>
