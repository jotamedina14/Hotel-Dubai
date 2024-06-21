<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/rooms" class="nav-link">Habitaciones</router-link>
      <router-link to="/contact" class="nav-link">Contacto</router-link>
      <router-link to="/extreme-sports" class="nav-link">Deportes Extremos</router-link>
      <router-link to="/services" class="nav-link">Servicios</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Estilos generales */
nav {
  background: linear-gradient(90deg, rgb(45, 21, 126) 0%, rgb(103, 52, 242) 50%, rgb(45, 21, 126) 100%);
  padding: 15px 0;
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0; /* Asegura que la barra empiece desde el borde izquierdo */
  z-index: 1000;
  margin: 0; /* Elimina cualquier margen */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
}

.nav-link {
  color: #ffffff; /* Texto más oscuro */
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s;
  font-size: 25px; /* Tamaño de fuente */
}

.nav-link:hover {
  background-color: rgb(115, 65, 250);
  border-radius: 5px;
}
</style>
