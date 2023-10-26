<template>
  <div class="login-panel">
    <div v-if="!loggedIn" class="login-form">
      <h2>Logging in</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="loginUsername" style="margin-right: 10px">Username</label>
          <input
            type="text"
            id="loginUsername"
            v-model="loginData.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="loginPassword" style="margin-right: 10px">Password</label>
          <input
            type="password"
            id="loginPassword"
            v-model="loginData.password"
            required
          />
        </div>
        <button type="submit">Log in</button>
        <p v-if="loginError" class="error">{{ loginError }}</p>
      </form>
    </div>

    <div v-else class="logged-in">
      <p>Witaj, {{ loggedInUser.username }}!</p>
      <button @click="logout">Wyloguj się</button>
    </div>

    <div v-if="!loggedIn && !registerSuccess" class="registration-form">
      <h2>Registration</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="registerUsername" style="margin-right: 10px">Username</label>
          <input
            type="text"
            id="registerUsername"
            v-model="registerData.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="registerPassword" style="margin-right: 10px">Password</label>
          <input
            type="password"
            id="registerPassword"
            v-model="registerData.password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <p v-if="registerError" class="error">{{ registerError }}</p>
      </form>
    </div>
    <p v-if="registerSuccess" class="success">Correct registration!</p>
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
      registerSuccess: false,
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

    // Dodaj tę linię, aby ukryć napis o poprawnej rejestracji
    this.registerSuccess = false;

    localStorage.setItem("loggedInUser", JSON.stringify(user));
  } else {
    this.loginError = "Incorrect username or password";
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
        this.registerError = "A user with this name already exists.";
      } else {
        // Poprawna rejestracja
        this.registerSuccess = true;
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
  background-color: #ecf0f1;
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form,
.logged-in,
.registration-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
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

.success {
  color: #4caf50;
  margin: 10px 0;
}
</style>
