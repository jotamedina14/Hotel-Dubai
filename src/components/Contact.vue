<template>
  <div class="contact">
    <h1>Contacto</h1>

    <div class="contact-details">
      <div class="contact-info">
        <h2>Información de Contacto</h2>
        <p><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</p>
        <p><strong>Teléfono:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> contacto@hotel.com</p>
      </div>

      <div class="contact-form">
        <h2>Formulario de Contacto</h2>
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

    <h2>Ubicación</h2>
    <div class="map-container">
      <iframe src="https://maps.google.com/maps?q=hotel%20location&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
      // Aquí normalmente se enviaría el formulario, pero por ahora mostramos un mensaje
      alert('Mensaje enviado');
      // Puedes agregar aquí la lógica para enviar el formulario a tu servidor
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact h1, .contact h2 {
  text-align: center;
  color: #333;
}

.contact-details {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.contact-info {
  flex: 1;
}

.contact-form {
  flex: 1;
  margin-left: 30px;
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
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact-form textarea {
  resize: vertical;
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
  width: 100%;
  height: 450px;
  border-radius: 5px;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
