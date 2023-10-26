<template>
  <main>
    <div class="contact-container">
        <div class="contact-section">
          <h1>Company Name: Duolingo</h1>
        <p>
          123 Main Street <br />
          Los Angeles, CA 90001 <br />
          USA
        </p>
        </div>
        <div class="contact-section">
          <h1>Contact Information:</h1>
          <p>
            Email: <a href="mailto:contact@duolingo.com">contact@duolingo.com</a>
            <br />
            Phone: +1 (123) 456-7890 <br />
            Website:
            <a href="https://www.duolingo.com">www.duolingo.com</a>
          </p>
      </div>

      <div class="contact contact-wide">
        <h1>Location on Google Maps:</h1>
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126771.84793017486!2d-118.243684!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe75705ff5435e88a!2sLos%20Angeles%2C%20California!5e0!3m2!1sen!2us!4v1556753294394!5m2!1sen!2us"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="contact">
      <h1>About Us:</h1>
      <p>
        Duolingo is a language-learning platform that offers a fun and effective
        way to learn new languages. With millions of users worldwide, we are
        dedicated to helping people achieve their language learning goals.
      </p>
    </div>

    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  background-color: #ecf0f1; /* Jasnoszare tło */
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contact {
  flex: 0 0 calc(33.33% - 20px); /* Podziel na trzy kolumny */
  background-color: #fff; /* Jasnoszare tło */
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: left;
  margin-bottom: 20px;
}

.contact-wide {
  flex: 0 0 calc(100% - 20px); /* Pełna szerokość z odstępami */
}

.contact-section {
  width: calc(50%-1px); /* Podziel na dwie kolumny */
  float: left;
  background-color: #fff; /* Jasnoszare tło */
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: left;
  margin-bottom: 20px;
  
}

h1 {
  font-size: 28px;
  margin-top: 20px;
  color: #4caf50; /* Jasnoniebieski kolor tekstu */
}

p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555; /* Średni kolor tekstu */
}

a {
  color: #007bff; /* Jasnoniebieski kolor tekstu */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
