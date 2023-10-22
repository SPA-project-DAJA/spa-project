<script setup></script>

<template>
  <main>
    <h2>French Training Course</h2>
    <div class="course-details">
      <h3>Course Overview</h3>
      <p>
        Our French training program is designed to introduce learners to the
        beauty of the French language and culture. Whether you are a beginner or
        have some prior knowledge, our courses will help you develop your French
        language skills.
      </p>
      <h3>Course Highlights</h3>
      <ul>
        <li>Immersive learning experience</li>
        <li>Native French-speaking instructors</li>
        <li>Cultural exploration and activities</li>
        <li>Interactive lessons and conversation practice</li>
        <li>Regular assessments to track your progress</li>
      </ul>
      <h3>Enrollment</h3>
      <p>
        To enroll in our French training course, click the "Enroll" button
        below. We offer flexible schedules and a variety of course options to
        suit your needs.
      </p>
      <button class="enroll-button">Enroll</button>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.course-details {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.enroll-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.enroll-button:hover {
  background-color: #0056b3;
}
</style>
