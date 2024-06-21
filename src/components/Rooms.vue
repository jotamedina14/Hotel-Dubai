<template>
  <div class="rooms">
    <h1>Habitaciones De Lujo💎</h1>
    <div class="room-row" v-for="(row, index) in roomRows" :key="index">
      <div class="room" v-for="room in row" :key="room.id">
        <div class="room-image">
          <img :src="room.image" :alt="room.type">
        </div>
        <div class="room-info">
          <h2>{{ room.type }}</h2>
          <p class="description">{{ room.description }}</p>
          <p class="price">Precio: {{ room.price }}</p>
          <button @click="reserveRoom(room.id)">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        { 
          id: 1, 
          type: 'Estándar', 
          description: 'Habitación cómoda y asequible, ideal para estancias cortas.',
          price: '$100', 
          image: './img/standard.jpg' 
        },
        { 
          id: 2, 
          type: 'Suite', 
          description: 'Habitación lujosa con amplio espacio y comodidades adicionales como sala de estar separada y vista panorámica.',
          price: '$200', 
          image: './img/suite.jpg' 
        },
        { 
          id: 3, 
          type: 'Familiar', 
          description: 'Espaciosa habitación familiar con varias camas y área de juegos para niños.',
          price: '$150', 
          image: './img/familiar.jpg' 
        },
        { 
          id: 4, 
          type: 'Vista al Mar', 
          description: 'Habitación con vistas espectaculares al mar, ideal para parejas en escapadas románticas.',
          price: '$180', 
          image: './img/oceanview.jpg' 
        },
        { 
          id: 5, 
          type: 'Ejecutiva', 
          description: 'Habitación diseñada para viajeros de negocios, con escritorio amplio y servicios ejecutivos.',
          price: '$160', 
          image: './img/executive.jpg' 
        },
        { 
          id: 6, 
          type: 'Suite Presidencial', 
          description: 'La máxima expresión de lujo y confort, con múltiples habitaciones, jacuzzi privado y terraza con vistas exclusivas.',
          price: '$500', 
          image: './img/presidential-suite.jpg' 
        },
        { 
          id: 7, 
          type: 'Habitación Temática', 
          description: 'Habitación decorada con temática única, ideal para huéspedes que buscan una experiencia original y memorable.',
          price: '$120', 
          image: './img/themed-room.jpg' 
        },
        { 
          id: 8, 
          type: 'Habitación Deluxe', 
          description: 'Amplia habitación con diseño elegante y moderno, equipada con todas las comodidades para una estancia placentera.',
          price: '$130', 
          image: './img/deluxe-room.jpg' 
        },
        { 
          id: 9, 
          type: 'Suite Familiar', 
          description: 'Suite espaciosa y confortable ideal para familias, con áreas separadas para adultos y niños.',
          price: '$180', 
          image: './img/family-suite.jpg' 
        },
      ]
    };
  },
  computed: {
    roomRows() {
      const rows = [];
      const roomsCopy = [...this.rooms]; // Copia de las habitaciones para no modificar el arreglo original

      while (roomsCopy.length > 0) {
        rows.push(roomsCopy.splice(0, 3)); // Agrupar habitaciones de a 3
      }

      return rows;
    }
  },
  methods: {
    reserveRoom(roomId) {
      alert(`Reserva para habitación ${roomId}`);
    }
  }
};
</script>

<style scoped>
.rooms {
  padding: 20px;
  background: linear-gradient(to right, #e3f2fd, #e8f5e9);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.room-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.room {
  width: calc(30% - 10px);
  background: white;
  border: 1px solid #ced4da;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;
  position: relative;
}

.room:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.room-image {
  height: 200px;
  overflow: hidden;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.room:hover .room-image img {
  transform: scale(1.1);
}

.room-info {
  padding: 15px;
  text-align: left;
  background: #f9f9f9;
}

.room-info h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.7rem;
  color: #34495e;
}

.room-info p {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #7f8c8d;
}

.room-info .description {
  color: #95a5a6;
}

.room-info .price {
  font-weight: bold;
  color: #2c3e50;
}

.room-info button {
  background: #2980b9;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.room-info button:hover {
  background: #3498db;
}

@media (max-width: 992px) {
  .room {
    width: calc(45% - 10px);
  }
}

@media (max-width: 768px) {
  .room {
    width: calc(100% - 10px);
  }
}
</style>
