<!-- src/components/Login.vue -->
<template>
  <div class="container mt-5">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
      <p class="mt-3">
        Нет аккаунта?
        <router-link to="/register">Зарегистрируйтесь</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Здесь должен быть запрос к бэкенду для авторизации
      // Пример:
      // this.$http.post('/api/login', { email: this.email, password: this.password })
      //   .then(response => {
      //     // Сохранение токена и редирект на страницу чатов
      //     this.$router.push('/chats');
      //   });

      // Заглушка:
      console.log('Авторизация:', this.email, this.password);
      this.$router.push('/chats');
    }
  }
}
</script>
