<template>
  <div class="login-panel">
    <div v-if="!loggedIn" class="login-form">
      <h2>Logowanie</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="loginUsername" style="margin-right: 10px">Nazwa użytkownika</label>
          <input
            type="text"
            id="loginUsername"
            v-model="loginData.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="loginPassword" style="margin-right: 10px">Hasło</label>
          <input
            type="password"
            id="loginPassword"
            v-model="loginData.password"
            required
          />
        </div>
        <button type="submit">Zaloguj się</button>
      </form>
      <p v-if="loginError" class="error">{{ loginError }}</p>
    </div>

    <div v-else class="logged-in">
      <p>Witaj, {{ loggedInUser.username }}!</p>
      <button @click="logout">Wyloguj się</button>
    </div>

    <div class="registration-form">
      <h2>Rejestracja</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="registerUsername">Nazwa użytkownika</label>
          <input
            type="text"
            id="registerUsername"
            v-model="registerData.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="registerPassword">Hasło</label>
          <input
            type="password"
            id="registerPassword"
            v-model="registerData.password"
            required
          />
        </div>
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
.login-panel {
  background-color: #ecf0f1; /* Jasnoszary kolor tła */
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: 30px auto; /* Centrowanie panelu */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form,
.logged-in,
.registration-form {
  background-color: #fff; /* Białe tło panelu */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Dodaj odstęp między panelami */
}

.form-group {
  margin-bottom: 10px; /* Dodaj odstęp między labelkami a miejscami do wpisywania */
}

label {
  margin-bottom: 5px; /* Dodaj dodatkowy odstęp pod labelką */
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.error {
  color: red;
  margin: 10px 0;
}
</style>