<template>
  <section class="listings">
    <h2>Mes annonces eBay</h2>

    <div v-if="loading" class="state">Chargement…</div>
    <div v-else-if="error" class="state error">{{ error }}</div>
    <div v-else-if="items.length === 0" class="state">Aucune annonce.</div>

    <ul v-else class="grid">
      <li v-for="item in items" :key="item.itemId" class="card">
        <a :href="item.itemWebUrl" target="_blank" rel="noopener">
          <img :src="item.image.imageUrl" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p class="price">{{ item.price.value }} {{ item.price.currency }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items   = ref([])
const loading = ref(true)
const error   = ref(null)

onMounted(async () => {
  try {
    const res  = await fetch('/api/ebay?limit=20')
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    const data = await res.json()
    items.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.listings { padding: 2rem 1rem; }
h2       { margin-bottom: 1rem; }

.state   { font-style: italic; }
.error   { color: #d33; }

.grid    { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); }

.card    { border: 1px solid #ddd; border-radius: 6px; overflow: hidden; transition: box-shadow .2s; }
.card:hover { box-shadow: 0 2px 8px rgba(0,0,0,.12); }

.card img { width: 100%; height: 160px; object-fit: cover; }

.card h3  { font-size: 0.95rem; margin: 0.5rem 0.75rem; line-height: 1.3; }

.price    { margin: 0 0.75rem 0.75rem; font-weight: 600; color: #2a7; }
</style>