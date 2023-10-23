<template>
  <div>
    <div v-if="!loggedIn">
      <h2>Logowanie</h2>
      <form @submit.prevent="login">
        <label for="loginUsername">Nazwa użytkownika</label>
        <input
          type="text"
          id="loginUsername"
          v-model="loginData.username"
          required
        />
        <label for="loginPassword">Hasło</label>
        <input
          type="password"
          id="loginPassword"
          v-model="loginData.password"
          required
        />
        <button type="submit">Zaloguj się</button>
      </form>
      <p v-if="loginError" class="error">{{ loginError }}</p>
    </div>

    <div v-else>
      <p>Witaj, {{ loggedInUser.username }}!</p>
      <button @click="logout">Wyloguj się</button>
    </div>

    <div>
      <h2>Rejestracja</h2>
      <form @submit.prevent="register">
        <label for="registerUsername">Nazwa użytkownika</label>
        <input
          type="text"
          id="registerUsername"
          v-model="registerData.username"
          required
        />
        <label for="registerPassword">Hasło</label>
        <input
          type="password"
          id="registerPassword"
          v-model="registerData.password"
          required
        />
        <button type="submit">Zarejestruj się</button>
      </form>
      <p v-if="registerError" class="error">{{ registerError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      registerData: {
        username: "",
        password: "",
      },
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
      loginError: "",
      registerError: "",
      users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },
  computed: {
    loggedIn() {
      return !!this.loggedInUser;
    },
  },
  methods: {
    login() {
      // Sprawdź, czy użytkownik istnieje w tablicy users i hasło jest poprawne
      const user = this.users.find(
        (u) =>
          u.username === this.loginData.username &&
          u.password === this.loginData.password
      );

      if (user) {
        this.loggedInUser = user;
        this.loginError = "";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      } else {
        this.loginError = "Nieprawidłowa nazwa użytkownika lub hasło";
      }
    },
    logout() {
      this.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
    register() {
      // Sprawdź, czy użytkownik o podanej nazwie już istnieje
      const existingUser = this.users.find(
        (u) => u.username === this.registerData.username
      );

      if (existingUser) {
        this.registerError = "Użytkownik o tej nazwie już istnieje";
      } else {
        // Dodaj nowego użytkownika
        this.users.push(this.registerData);
        this.registerData = { username: "", password: "" };
        this.registerError = "";

        // Zapisz tablicę użytkowników w localStorage
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin: 10px 0;
}
</style>
