<script setup lang="ts">
import ThemeItem from './ThemeItem.vue'

const themes = ['House', 'Garden', 'School']
</script>

<template>
  <div>Here is the list of all available themes</div>
  <li v-for="(themeName, index) in themes" v-bind:key="index">
    <ThemeItem :theme-name="themeName"></ThemeItem>
  </li>
</template>

<style></style>
