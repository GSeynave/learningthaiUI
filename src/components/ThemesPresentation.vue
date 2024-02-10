<script setup lang="ts">
import ThemeItem from './ThemeItem.vue'

const themes = ['House', 'Garden', 'School']
</script>

<template>
  <div data-testid="themes-list">
    Here is the list of all available themes
    <li v-for="(themeName, index) in themes" v-bind:key="index">
      <ThemeItem :theme-name="themeName"></ThemeItem>
    </li>
  </div>
</template>

<style></style>
