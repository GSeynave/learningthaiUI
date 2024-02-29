<script setup lang="ts">
import ThemeItem from './ThemeItem.vue'
import ThemesService from '../components/services/ThemesService'
import { ref } from 'vue'
import { toast, type ToastOptions } from 'vue3-toastify'
import { UiLoading } from "@kalimahapps/vue-icons";
import { ClWarning } from "@kalimahapps/vue-icons";

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
  <div class="themesContainer">
    <header>Themes</header>
    <div class="info" v-if="loading"><UiLoading></UiLoading>Fetching data...</div>
    <div v-else>
      <div v-if="themes.length > 0">
        <li v-for="(theme, index) in themes" :key="index">
          <ThemeItem :theme="theme"></ThemeItem>
        </li>
      </div>
      <div v-else class="warning">No themes available<ClWarning></ClWarning></div>
    </div>
  </div>
</template>

<style>
.themesContainer{
  margin-top: 2em;
  padding: 1.5em;
  background-color:var(--color-container);
  border: thick double var(--color-border);
  border-radius: 8px;
  box-shadow: 6px 2px 2px var(--color-shadow);
}

li {
  margin-top: 0.5em;
  list-style-type: none;
}
.warning {
  color: var(--warning);
}
.error {
  color: var(--error);
}
.info{
  color: var(--info);
}
</style>
