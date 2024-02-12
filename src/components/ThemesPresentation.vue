<script setup lang="ts">
import ThemeItem from './ThemeItem.vue'
import ThemesService from '../components/services/ThemesService'
import { ref } from 'vue'
import { toast, type ToastOptions } from 'vue3-toastify'
import { UiLoading } from "@kalimahapps/vue-icons";

const themesService = new ThemesService()
let loading = ref(true);
let notify: toast | null = null

const themes = ref<string[]>([])
themesService
  .getThemes()
  .then((value) => {
    loading.value = false
    themes.value = value
  })
  .catch((error) => {
    loading.value = false
    toast.error(error, {
      autoclose: 5000,
      closeButton: true,
      position: toast.POSITION.BOTTOM_RIGHT
    } as ToastOptions)
    return notify
  })
</script>

<template>
  <div data-testid="themes-list">
    Here is the list of all available themes
    <div v-if="loading"><UiLoading></UiLoading>Fetching data...</div>
    <div v-else>
      <div v-if="themes.length > 0">
        <li v-for="(themeName, index) in themes" :key="index">
          <ThemeItem :theme-name="themeName"></ThemeItem>
        </li>
      </div>
      <div v-else class="warning">No themes available</div>
    </div>
  </div>
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
