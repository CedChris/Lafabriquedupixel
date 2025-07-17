<template>
  <section class="listings">
    <h2 class="title">Mes annonces eBay</h2>

    <ul class="grid">
      <li v-for="item in items" :key="item.itemId" class="card">
        <a :href="item.itemWebUrl" target="_blank" rel="noopener noreferrer">
          <img :src="item.image.imageUrl" :alt="item.title" />
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p class="price">{{ item.price.value }} {{ item.price.currency }}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const items = [
  {
    itemId: "1234567890",
    title: "Carte graphique RTX 3060",
    image: {
      imageUrl: "https://i.ebayimg.com/images/g/XXX.jpg"
    },
    price: {
      value: "299.00",
      currency: "EUR"
    },
    itemWebUrl: "https://www.ebay.fr/itm/1234567890"
  },
  {
    itemId: "0987654321",
    title: "Écran 144Hz 24 pouces",
    image: {
      imageUrl: "https://i.ebayimg.com/images/g/YYY.jpg"
    },
    price: {
      value: "159.00",
      currency: "EUR"
    },
    itemWebUrl: "https://www.ebay.fr/itm/0987654321"
  }
]
</script>

<style scoped>
.listings {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  padding: 0;
}

.card {
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card .info {
  padding: 1rem;
  text-align: center;
}

.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card .price {
  font-weight: bold;
  color: #2b8a3e;
}
</style>