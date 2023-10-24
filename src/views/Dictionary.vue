<template>
  <main>
    <label for="jezyk">Wybierz język:</label>
    <select id="jezyk" v-model="wybranyJezyk">
      <option value="angielski">Angielski</option>
      <option value="hiszpański">Hiszpański</option>
      <option value="francuski">Francuski</option>
    </select>
    <br />
    <br />
    <button @click="losujSlowko">Losuj słówko</button>
    <br />
    <br />
    Wylosowane słówko to: {{ wylosowaneSlowko }}
    <br />
    <br />
    <label for="tlumaczenie">Podaj tłumaczenie na polski:</label>
    <input
      id="tlumaczenie"
      v-model="wprowadzoneTlumaczenie"
      @input="resetujWynik"
    />&nbsp;&nbsp;

    <button @click="sprawdzTlumaczenie">Sprawdź</button>
    <div
      v-if="wynikSprawdzenia"
      :class="
        wynikSprawdzenia === 'Poprawne tłumaczenie!'
          ? 'result green'
          : 'result red'
      "
    >
      {{ wynikSprawdzenia }}
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const slowka = {
  angielski: [
    "apple",
    "car",
    "dog",
    "house",
    "book",
    "computer",
    "table",
    "chair",
    "city",
    "friend",
    "tree",
    "flower",
    "sun",
    "water",
    "music",
    "beach",
    "food",
    "family",
    "job",
    "travel",
    "dream",
    "smile",
    "love",
    "time",
    "money",
    "language",
    "world",
    "home",
    "movie",
    "school",
    "party",
    "holiday",
    "game",
    "pet",
    "sky",
    "star",
    "guitar",
    "football",
    "experience",
    "adventure",
    "history",
    "art",
    "health",
    "weather",
    "nature",
    "coffee",
    "restaurant",
    "hotel",
    "phone",
    "internet",
    "library",
    "beauty",
    "culture",
    "work",
    "study",
    "exercise",
    "cooking",
    "fashion",
    "shopping",
    "music",
    "movie",
    "book",
    "car",
    "family",
    "friend",
    "travel",
    "food",
    "language",
    "nature",
    "home",
    "holiday",
    "health",
    "weather",
    "guitar",
    "history",
    "game",
    "pet",
    "sky",
    "adventure",
    "school",
    "movie",
    "football",
    "art",
    "experience",
    "world",
    "beach",
    "smile",
    "time",
    "money",
    "love",
    "water",
    "dream",
    "sun",
    "computer",
    "tree",
    "table",
    "chair",
  ],
  hiszpański: [
    "manzana",
    "coche",
    "perro",
    "casa",
    "libro",
    "ordenador",
    "mesa",
    "silla",
    "ciudad",
    "amigo",
    "árbol",
    "flor",
    "sol",
    "agua",
    "música",
    "playa",
    "comida",
    "familia",
    "trabajo",
    "viaje",
    "sueño",
    "sonrisa",
    "amor",
    "tiempo",
    "dinero",
    "idioma",
    "mundo",
    "casa",
    "película",
    "escuela",
    "fiesta",
    "vacaciones",
    "juego",
    "mascota",
    "cielo",
    "estrella",
    "guitarra",
    "fútbol",
    "experiencia",
    "aventura",
    "historia",
    "arte",
    "salud",
    "clima",
    "naturaleza",
    "café",
    "restaurante",
    "hotel",
    "teléfono",
    "internet",
    "biblioteca",
    "belleza",
    "cultura",
    "trabajo",
    "estudio",
    "ejercicio",
    "cocina",
    "moda",
    "compras",
  ],
  francuski: [
    "pomme",
    "voiture",
    "chien",
    "maison",
    "livre",
    "ordinateur",
    "table",
    "chaise",
    "ville",
    "ami",
    "arbre",
    "fleur",
    "soleil",
    "eau",
    "musique",
    "plage",
    "nourriture",
    "famille",
    "travail",
    "voyage",
    "rêve",
    "sourire",
    "amour",
    "temps",
    "argent",
    "langue",
    "monde",
    "maison",
    "film",
    "école",
    "fête",
    "vacances",
    "jeu",
    "animal de compagnie",
    "ciel",
    "étoile",
    "guitare",
    "football",
    "expérience",
    "aventure",
    "histoire",
    "art",
    "santé",
    "temps",
    "nature",
    "café",
    "restaurant",
    "hôtel",
    "téléphone",
    "internet",
    "bibliothèque",
    "beauté",
    "culture",
    "travail",
    "étude",
    "exercice",
    "cuisine",
    "mode",
    "shopping",
  ],
  polski: [
    "jabłko",
    "samochód",
    "pies",
    "dom",
    "książka",
    "komputer",
    "stół",
    "krzesło",
    "miasto",
    "przyjaciel",
    "drzewo",
    "kwiat",
    "słońce",
    "woda",
    "muzyka",
    "plaża",
    "jedzenie",
    "rodzina",
    "praca",
    "podróż",
    "marzenie",
    "uśmiech",
    "miłość",
    "czas",
    "pieniądze",
    "język",
    "świat",
    "dom",
    "film",
    "szkoła",
    "impreza",
    "wakacje",
    "gra",
    "zwierzątko domowe",
    "niebo",
    "gwiazda",
    "gitara",
    "piłka nożna",
    "doświadczenie",
    "przygoda",
    "historia",
    "sztuka",
    "zdrowie",
    "pogoda",
    "natura",
    "kawa",
    "restauracja",
    "hotel",
    "telefon",
    "internet",
    "biblioteka",
    "piękno",
    "kultura",
    "praca",
    "nauka",
    "ćwiczenia",
    "gotowanie",
    "moda",
    "zakupy",
  ],
};

const wylosowaneSlowko = ref("");
const wybranyJezyk = ref("angielski");
const polski = ref("polski");
const wprowadzoneTlumaczenie = ref("");
const wynikSprawdzenia = ref("");

const losujSlowko = () => {
  const slowkaWJezyku = slowka[wybranyJezyk.value];
  const losoweSlowko =
    slowkaWJezyku[Math.floor(Math.random() * slowkaWJezyku.length)];
  wylosowaneSlowko.value = losoweSlowko;
  wprowadzoneTlumaczenie.value = "";
};

const resetujWynik = () => {
  wynikSprawdzenia.value = "";
};

const sprawdzTlumaczenie = () => {
  const slowkaWJezyku = slowka[polski.value];
  const poprawneTlumaczenie = slowkaWJezyku.find(
    (slowo) =>
      slowo.toLowerCase() === wprowadzoneTlumaczenie.value.toLowerCase()
  );

  if (poprawneTlumaczenie) {
    wynikSprawdzenia.value = "Poprawne tłumaczenie!";
  } else {
    wynikSprawdzenia.value = "Błędne tłumaczenie. Spróbuj jeszcze raz.";
  }
};

// Dodajemy kod, aby zainicjować losowanie słowa po otwarciu strony
losujSlowko();
</script>
<style scoped>
main {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

label {
  font-size: 18px;
  color: #333;
}

select {
  font-size: 16px;
  padding: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.result {
  font-size: 20px;
  margin-top: 10px;
}

.result.green {
  color: #4caf50; /* Kolor zielony dla poprawnej odpowiedzi */
}

.result.red {
  color: #f44336; /* Kolor czerwony dla błędnej odpowiedzi */
}

input {
  font-size: 16px;
  padding: 5px;
}
</style>
