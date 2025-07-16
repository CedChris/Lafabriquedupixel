<template>
  <footer class="footer">
    <div class="footer__inner">
      <!-- Bloc gauche : logo + baseline -->
      <div class="brand">
        <p>La Fabrique du Pixel </p>
      </div>

      <!-- Bloc centre : navigation pied‑de‑page -->
      <nav class="links">
        <a href="/">Accueil</a>
        <a href="/#produits">Produits</a>
        <a href="/#contact">Contact</a>
        <a href="/mentions-legales">Mentions légales</a>
      </nav>
    </div>

    <div class="copyright">
      © {{ new Date().getFullYear() }} — La Fabrique du Pixel . Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
// rien : composant statique
</script>

<style scoped>
.footer {
  font-size: 0.9rem;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}

.brand {
  flex: 1 1 200px;
}

.brand img {
  height: 40px;
  width: auto;
  margin-bottom: 0.5rem;
}

.links {
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.links a {
  color: #bbb;
  text-decoration: none;
}

.links a:hover {
  color: #fff;
}

.address {
  flex: 1 1 200px;
  font-style: normal;
  line-height: 1.4;
}

.address a {
  color: #bbb;
  text-decoration: none;
}

.address a:hover {
  color: #fff;
}

.copyright {
  text-align: center;
  padding: 1rem 0;
  font-size: 0.8rem;
}
@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .brand,
  .links,
  .address {
    flex: 1 1 100%;
  }
}
</style>