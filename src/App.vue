<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/themes">Themes</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <hr class="rounded">

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

a {
  text-decoration: none;
  color: var(--color-link);
  padding: 3px;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  background-color: var(--color-container);
}

nav a:first-of-type {
  border: 0;
}

.rounded{
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5em;
  width: 20%;
}
</style>
