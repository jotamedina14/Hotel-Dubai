<template>
  <div class="services">
    <h1>Servicios 🌟</h1>
    <div class="service-card" v-for="service in services" :key="service.name" @click="showService(service)">
      <span class="service-emoji">{{ service.emoji }}</span>
      <h2>{{ service.name }}</h2>
      <p>{{ service.description }}</p>
    </div>
    
    <div v-if="selectedService" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedService.name }}</h2>
        <p>{{ selectedService.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        { name: 'Piscina', description: 'Disfruta de nuestra piscina al aire libre.', emoji: '🏊‍♂️' },
        { name: 'Spa', description: 'Relájate y rejuvenece en nuestro spa.', emoji: '💆‍♀️' },
        { name: 'Restaurante', description: 'Degusta deliciosas comidas en nuestro restaurante.', emoji: '🍽️' },
        { name: 'Gimnasio', description: 'Mantente en forma en nuestro gimnasio bien equipado.', emoji: '🏋️‍♂️' }
      ],
      selectedService: null
    }
  },
  methods: {
    showService(service) {
      this.selectedService = service;
    },
    closeModal() {
      this.selectedService = null;
    }
  }
}
</script>

<style scoped>
.services {
  background-color: #f0f0f0;
  padding: 40px 20px;
  text-align: center;
}

.services h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 30px;
}

.service-card {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  display: inline-block;
  width: calc(25% - 40px);
  vertical-align: top;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.service-emoji {
  font-size: 3em;
  display: block;
  margin-bottom: 15px;
}

.service-card h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 1.1em;
  color: #7f8c8d;
  margin-bottom: 0;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  position: relative;
}

.modal-content .close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em;
  cursor: pointer;
}
</style>
