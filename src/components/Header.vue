<template>
  <header class="header">
    <div class="logo">
      <a href="/">
        <img :src="logo" alt="Logo" />
      </a>
      
    </div>
    <h2 style="color: blueviolet;">La Fabrique Du Pixel</h2>
    <button class="burger" @click="toggleMenu" aria-label="Toggle navigation">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>

    <nav :class="['nav', { open: menuOpen }]">
      <a href="#">Accueil</a>
      <a href="#">Produits</a>
      <a href="#">Contact</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/lfdp.png'
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsive */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;
    display: none;
  }

  .nav.open {
    display: flex;
  }
}
</style>