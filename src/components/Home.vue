<template>
  <div class="home">
    <section class="welcome">
      <div class="welcome-content">
        <h1>Bienvenido a Nuestro Hotel</h1>
        <img src="../assets/Hotel.jpg" alt="Hotel">
        <p>Disfruta de nuestros servicios excepcionales, incluyendo piscinas, restaurantes, spas y más.</p>
        <button @click="exploreMore">Explora Más</button>
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <img src="../assets/pool.jpg" alt="Piscina">
        <h2>Piscinas de Lujo</h2>
        <p>Nuestras piscinas ofrecen vistas impresionantes y comodidades de primera clase.</p>
      </div>
      <div class="feature">
        <img src="../assets/restaurant.jpg" alt="Restaurante">
        <h2>Gastronomía Exquisita</h2>
        <p>Descubre nuestros restaurantes con menús elaborados por chefs reconocidos internacionalmente.</p>
      </div>
      <div class="feature">
        <img src="../assets/spa.jpg" alt="Spa">
        <h2>Relajación en el Spa</h2>
        <p>Relájate y rejuvenece en nuestro spa de clase mundial, con tratamientos personalizados.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    exploreMore() {
      this.$router.push('/rooms');
    }
  }
};
</script>

<style scoped>
/* Estilos para la sección de bienvenida */
.welcome {
  text-align: center;
  padding: 50px 0;
  background-color: #f8f9fa;
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
}
.welcome-content h1{
  font-size: 45px;
}
.welcome img {
  max-width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}

.welcome p {
  margin-bottom: 20px;
  font-size: 32px;
}

button {
  background: linear-gradient(90deg, rgb(52, 23, 145) 0%, rgb(117, 67, 255) 50%, rgb(30, 2, 122) 100%);
  color: white;
  padding: 10px 20px;
  font-size: 22px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}

/* Estilos para la sección de características */
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  background-color: #ffffff;
}

.feature {
  max-width: 300px;
  text-align: center;
}

.feature img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 400%;
  height: 60%;
}

.feature h2 {
  margin-bottom: 10px;
  font-size: 35px;
}

.feature p {
  color: #626060;
  font-size: 22px;
}
</style>
