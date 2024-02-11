<script setup lang="ts">
import ThemeItem from './ThemeItem.vue'
import ThemesService from '../components/services/ThemesService'
import { reactive, ref } from 'vue';

const themesService = new ThemesService()

const themes= ref<string[]>([]);
const errorMessage = ref("");
themesService
  .getThemes()
  .then((value) => {
    themes.value = value;
  })
  .catch((error) => {
    errorMessage.value = error;
  });
</script>

<template>
  <div data-testid="themes-list">
    Here is the list of all available themes
    <div v-if="themes.length > 0">
      <li v-for="(themeName, index) in themes" :key="index">
        <ThemeItem :theme-name="themeName"></ThemeItem>
      </li>
    </div>
    <div v-else class="warning">No themes available</div>
  </div>

  <div class="error" v-if="errorMessage != ''">{{ errorMessage }}</div>
</template>

<style>
.warning {
  color: rgb(252, 119, 71);
}
.error {
  text-decoration: underline;
  color: red;
}
</style>
