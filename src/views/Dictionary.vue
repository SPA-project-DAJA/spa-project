<!-- Dictionary.vue -->
<template>
  <main>
    <label for="jezyk" style="margin-right: 10px">Select language:</label>
    <select id="jezyk" v-model="wybranyJezyk">
      <option value="angielski">English</option>
      <option value="hiszpański">Spanish</option>
      <option value="francuski">French</option>
    </select>
    <br />
    <br />
    <button @click="losujSlowko">Draw a word</button>
    <br />
    <br />The word drawn is: 
    <b>{{ wylosowaneSlowko }}</b>
    <br />
    <br />
    <label for="tlumaczenie" style="margin-right: 10px">Give the Polish translation:</label>
    <input
      id="tlumaczenie"
      v-model="wprowadzoneTlumaczenie"
      @input="resetujWynik"
    />&nbsp;&nbsp;

    <button @click="sprawdzTlumaczenie">Check out</button>
    <div
      v-if="wynikSprawdzenia"
      :class="
        wynikSprawdzenia === 'Correct translation!'
          ? 'result green'
          : 'result red'
      "
    >
      {{ wynikSprawdzenia }}
    </div>
    <div>
    <h1>Dictionary</h1>
    <div v-if="!isCourseLocked">
      <!-- Zawartość słownika dostępna, gdy kurs nie jest zablokowany -->
      <!-- Umieść tutaj kod komponentu słownika -->
    </div>
    <div v-else>
      <p>Access to the course is blocked. First you need to unlock it.</p>
      <button @click="unlockCourse">Unblock course</button>
    </div>
  </div>
  </main>
</template>


<script setup>
import { ref, computed } from "vue";
import { useStore } from 'vuex';


const slowka = {
  angielski: [
    "Apple",
    "Cat",
    "Car",
    "House",
    "Book",
    "Sun",
    "Water",
    "Tree",
    "Computer",
    "Fish",
    "Window",
    "Flower",
    "Leg",
    "TV",
    "Heart",
    "Door",
    "Mountain",
    "Lamp",
    "Board",
    "Coffee",
    "Bridge",
    "Glasses",
    "City",
    "Airport",
    "Ship",
    "Gloves",
    "Square",
    "Day",
    "Night",
    "Month",
    "Jar",
    "Snake",
    "Ball",
    "Airplane",
    "Basket",
    "Pencil",
    "Clock",
    "Box",
    "Ladder",
    "Pen",
    "Kitchen",
    "Phone",
    "Face",
    "Wallet",
    "Car",
    "Beer",
    "Hood",
    "Shoes",
    "Roof",
    "Mouse",
    "Child",
    "Moon",
    "Turtle",
    "Eye",
    "Chocolate",
    "Chair",
    "Soccer",
    "Pear",
    "Castle",
    "Skis",
    "Hat",
    "Whale",
    "Beach",
    "River",
    "Bird",
    "Duck",
    "Head",
    "Plate",
    "Rabbit",
    "Lock",
    "Butterfly",
    "Hat",
    "Flour",
    "Car",
    "Sea",
    "Village",
    "Rose",
    "Table",
    "Dog",
    "Rice",
    "Washing machine",
    "Harbor",
    "Woman",
    "Man",
    "Cabbage",
    "Handball",
    "Loneliness",
    "Tree",
    "Wind",
    "Desert",
    "Red",
    "Pink",
    "Green",
    "Blue",
    "Yellow",
    "Brown",
    "Gray",
    "White",
    "Black",
    "Tall",
  ],
  hiszpański: [
    "Manzana",
    "Gato",
    "Coche",
    "Casa",
    "Libro",
    "Sol",
    "Agua",
    "Árbol",
    "Computadora",
    "Pez",
    "Ventana",
    "Flor",
    "Pierna",
    "Televisor",
    "Corazón",
    "Puerta",
    "Montaña",
    "Lámpara",
    "Tabla",
    "Café",
    "Puente",
    "Gafas",
    "Ciudad",
    "Aeropuerto",
    "Barco",
    "Guantes",
    "Cuadrado",
    "Día",
    "Noche",
    "Mes",
    "Tarro",
    "Serpiente",
    "Pelota",
    "Avión",
    "Canasta",
    "Lápiz",
    "Reloj",
    "Caja",
    "Escalera",
    "Bolígrafo",
    "Cocina",
    "Teléfono",
    "Cara",
    "Billetera",
    "Coche",
    "Cerveza",
    "Campana",
    "Zapatos",
    "Techo",
    "Ratón",
    "Niño",
    "Luna",
    "Tortuga",
    "Ojo",
    "Chocolate",
    "Silla",
    "Fútbol",
    "Pera",
    "Castillo",
    "Esquís",
    "Sombrero",
    "Ballena",
    "Playa",
    "Río",
    "Pájaro",
    "Pato",
    "Cabeza",
    "Plato",
    "Conejo",
    "Cerradura",
    "Mariposa",
    "Gorra",
    "Harina",
    "Coche",
    "Mar",
    "Pueblo",
    "Rosa",
    "Mesa",
    "Perro",
    "Arroz",
    "Lavadora",
    "Puerto",
    "Mujer",
    "Hombre",
    "Col",
    "Balonmano",
    "Soledad",
    "Árbol",
    "Viento",
    "Desierto",
    "Rojo",
    "Rosa",
    "Verde",
    "Azul",
    "Amarillo",
    "Marrón",
    "Gris",
    "Blanco",
    "Negro",
    "Alto",
  ],
  francuski: [
    "Pomme",
    "Chat",
    "Voiture",
    "Maison",
    "Livre",
    "Soleil",
    "Eau",
    "Arbre",
    "Ordinateur",
    "Poisson",
    "Fenêtre",
    "Fleur",
    "Jambe",
    "Téléviseur",
    "Cœur",
    "Porte",
    "Montagne",
    "Lampe",
    "Planche",
    "Café",
    "Pont",
    "Lunettes",
    "Ville",
    "Aéroport",
    "Bateau",
    "Gants",
    "Carré",
    "Jour",
    "Nuit",
    "Mois",
    "Pot",
    "Serpent",
    "Balle",
    "Avion",
    "Panier",
    "Crayon",
    "Horloge",
    "Boîte",
    "Échelle",
    "Stylo",
    "Cuisine",
    "Téléphone",
    "Visage",
    "Portefeuille",
    "Voiture",
    "Bière",
    "Hotte",
    "Chaussures",
    "Toit",
    "Souris",
    "Enfant",
    "Lune",
    "Tortue",
    "Œil",
    "Chocolat",
    "Chaise",
    "Football",
    "Poire",
    "Château",
    "Skis",
    "Chapeau",
    "Baleine",
    "Plage",
    "Rivière",
    "Oiseau",
    "Canard",
    "Tête",
    "Assiette",
    "Lapin",
    "Serrure",
    "Papillon",
    "Casquette",
    "Farine",
    "Voiture",
    "Mer",
    "Village",
    "Rose",
    "Table",
    "Chien",
    "Riz",
    "Lave-linge",
    "Port",
    "Femme",
    "Homme",
    "Chou",
    "Handball",
    "Solitude",
    "Arbre",
    "Vent",
    "Désert",
    "Rouge",
    "Rose",
    "Vert",
    "Bleu",
    "Jaune",
    "Marron",
    "Gris",
    "Blanc",
    "Noir",
    "Grand",
  ],
  polski: [
    "Jabłko",
    "Kot",
    "Samochód",
    "Dom",
    "Książka",
    "Słońce",
    "Woda",
    "Drzewo",
    "Komputer",
    "Ryba",
    "Okno",
    "Kwiat",
    "Noga",
    "Telewizor",
    "Serce",
    "Drzwi",
    "Góra",
    "Lampa",
    "Deska",
    "Kawa",
    "Most",
    "Okulary",
    "Miasto",
    "Lotnisko",
    "Statek",
    "Rękawiczki",
    "Kwadrat",
    "Dzień",
    "Noc",
    "Miesiąc",
    "Słoik",
    "Wąż",
    "Piłka",
    "Samolot",
    "Kosz",
    "Ołówek",
    "Zegar",
    "Skrzynia",
    "Drabina",
    "Długopis",
    "Kuchnia",
    "Telefono",
    "Twarz",
    "Portfel",
    "Auto",
    "Piwo",
    "Okap",
    "Buty",
    "Dach",
    "Myszka",
    "Dziecko",
    "Księżyc",
    "Żółw",
    "Oko",
    "Kwokola",
    "Krzesło",
    "Piłka nożna",
    "Gruszka",
    "Zamek",
    "Narty",
    "Kapelusz",
    "Wieloryb",
    "Plaża",
    "Rzeka",
    "Ptak",
    "Kaczka",
    "Głowa",
    "Talerz",
    "Królik",
    "Zamek",
    "Motyl",
    "Czapka",
    "Mąka",
    "Samochód",
    "Morze",
    "Wieś",
    "Róża",
    "Stół",
    "Pies",
    "Ryż",
    "Pralka",
    "Port",
    "Kobieta",
    "Mężczyzna",
    "Kapusta",
    "Piłka ręczna",
    "Samotność",
    "Drzewo",
    "Wiatr",
    "Pustynia",
    "Czerwony",
    "Różowy",
    "Zielony",
    "Niebieski",
    "Żółty",
    "Brązowy",
    "Szary",
    "Biały",
    "Czarny",
    "Wysoki",
  ],
};

const wylosowaneSlowko = ref("");
const wybranyJezyk = ref("angielski");
const wprowadzoneTlumaczenie = ref("");
const wynikSprawdzenia = ref("");

const losujSlowko = () => {
  const slowkaWJezyku = slowka[wybranyJezyk.value];
  const losoweSlowko =
    slowkaWJezyku[Math.floor(Math.random() * slowkaWJezyku.length)];
  wylosowaneSlowko.value = losoweSlowko;
  wprowadzoneTlumaczenie.value = "";
  wynikSprawdzenia.value = ""; // Resetujemy wynik po losowaniu nowego słówka
};

const resetujWynik = () => {
  wynikSprawdzenia.value = "";
};

const sprawdzTlumaczenie = () => {
  const slowkaWJezyku = slowka.polski;
  const poprawneTlumaczenie = slowkaWJezyku.includes(wprowadzoneTlumaczenie.value.toLowerCase());

  if (poprawneTlumaczenie) {
    wynikSprawdzenia.value = "Correct translation!";
  } else {
    wynikSprawdzenia.value = "Incorrect translation. Try again.";
  }
};
const store = useStore();

// Zakładam, że w sklepie masz getter o nazwie 'isCourseLocked' oraz akcję 'unlockCourse'
const isCourseLocked = computed(() => store.getters.isCourseLocked);
const unlockCourse = () => {
  store.dispatch('unlockCourse');
};

// Losowanie słowa po otwarciu strony
losujSlowko();
</script>


<style scoped>
main {
  text-align: center;
  max-width: 600px;
  margin: 50px auto;
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
b {
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

</style>
