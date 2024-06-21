<template>
  <div class="extreme-sports">
    <h1>Deportes Extremos 🏞️</h1>
    <div class="sport-container">
      <div class="sport" v-for="sport in sports" :key="sport.id">
        <img :src="sport.image" :alt="sport.name">
        <h2>{{ sport.name }}</h2>
        <p class="description">{{ sport.description }}</p>
        <p class="difficulty">Nivel de Dificultad: {{ sport.difficulty }}</p>
        <p class="price">Precio: {{ sport.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sports: [
        { id: 2, name: 'Buceo', description: 'Explora el mundo submarino.', difficulty: 'Media', price: '$200', image: './img/diving.jpg' },
        { id: 3, name: 'Ala Delta', description: 'Vuela como un pájaro sobre paisajes espectaculares.', difficulty: 'Alta', price: '$350', image: './img/hang-gliding.jpg' },
        { id: 4, name: 'Escalada en Roca', description: 'Supera tus límites ascendiendo montañas desafiantes.', difficulty: 'Alta', price: '$250', image: './img/rock-climbing.jpg' },
        { id: 5, name: 'Rafting', description: 'Desciende rápidos emocionantes en aguas bravas.', difficulty: 'Media', price: '$150', image: './img/rafting.jpg' },
        { id: 6, name: 'Surf de Ola Grande', description: 'Domina olas gigantes en destinos famosos para surfistas.', difficulty: 'Alta', price: '$400', image: './img/big-wave-surfing.jpg' },
        { id: 7, name: 'Parapente', description: 'Vuela en parapente disfrutando de vistas panorámicas.', difficulty: 'Media', price: '$180', image: './img/paragliding.jpg' },
        { id: 8, name: 'Esquí Extremo', description: 'Desciende pendientes empinadas y fuera de pista.', difficulty: 'Alta', price: '$300', image: './img/extreme-skiing.jpg' },
        { id: 9, name: 'Kitesurf', description: 'Surfea sobre el agua impulsado por una cometa.', difficulty: 'Media', price: '$250', image: './img/kitesurfing.jpg' },
        { id: 10, name: 'Motocross', description: 'Recorre terrenos difíciles y desafiantes en motocicleta.', difficulty: 'Alta', price: '$350', image: './img/motocross.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.extreme-sports {
  padding: 20px;
  background: linear-gradient(to right, #e0f7fa, #e1bee7);
  font-family: 'Arial', sans-serif;
  border-radius: 15px;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.sport-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sport {
  width: 30%;
  background: white;
  border: 1px solid #ced4da;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;
  position: relative;
}

.sport:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.sport img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ced4da;
  transition: transform 0.3s ease;
}

.sport:hover img {
  transform: scale(1.1);
}

.sport h2 {
  font-size: 1.7rem;
  color: #34495e;
  margin: 15px 0;
}

.sport .description {
  font-size: 1rem;
  color: #7f8c8d;
  margin: 10px 0;
}

.sport .difficulty, .sport .price {
  font-size: 1rem;
  color: #34495e;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .sport {
    width: 45%;
  }
}

@media (max-width: 768px) {
  .sport {
    width: 100%;
  }
}
</style>
