<template>
  <div class="contact">
    <h1>Contacto ✉️</h1>

    <div class="contact-details">
      <div class="contact-info">
        <h2>Información de Contacto 📞</h2>
        <p><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</p>
        <p><strong>Teléfono:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> contacto@hotel.com</p>
      </div>

      <div class="contact-form">
        <h2>Formulario de Contacto 📝</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="form.message" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>

    <h2>Ubicación 📍</h2>
    <div class="map-container">
      <iframe src="https://maps.google.com/maps?q=hotel%20location&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert('Mensaje enviado');
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.contact h1 {
  text-align: center;
  color: #17a2b8;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.contact h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.contact-info, .contact-form {
  flex: 1;
  min-width: 300px;
  background: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.contact-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.contact-form button {
  background-color: #17a2b8;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #117a8b;
}

.map-container {
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

iframe {
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
