<template>
  <div class="auth-container">
    <div class="auth-form" v-if="activeTab === 'login'">
      <h2>Logowanie</h2>
      <form @submit.prevent="login">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="loginData.email" required />
        <label for="password">Hasło</label>
        <input
          type="password"
          id="password"
          v-model="loginData.password"
          required
        />
        <button type="submit">Zaloguj się</button>
      </form>
      <p>
        Nie masz jeszcze konta?
        <button @click="switchTab('register')">Zarejestruj się</button>
      </p>
    </div>

    <div class="auth-form" v-if="activeTab === 'register'">
      <h2>Rejestracja</h2>
      <form @submit.prevent="register">
        <label for="regEmail">E-mail</label>
        <input
          type="email"
          id="regEmail"
          v-model="registerData.email"
          required
        />
        <label for="regPassword">Hasło</label>
        <input
          type="password"
          id="regPassword"
          v-model="registerData.password"
          required
        />
        <button type="submit">Zarejestruj się</button>
      </form>
      <p>
        Masz już konto? <button @click="switchTab('login')">Zaloguj się</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "login",
      loginData: {
        email: "",
        password: "",
      },
      registerData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // Implementacja logowania
      // Tutaj można wywołać odpowiednią akcję lub funkcję
    },
    register() {
      // Implementacja rejestracji
      // Tutaj można wywołać odpowiednią akcję lub funkcję
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
