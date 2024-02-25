<script setup lang="ts">
import { ref } from 'vue';
import CollectionList from './CollectionList.vue'
defineProps(['theme'])
let isDisplay = ref(false);
function toggleDisplay(){
  isDisplay.value = !isDisplay.value;
}
</script>

<template>
  <div class="themeContainer" >
  <div class="themeInfo" :onclick="toggleDisplay">
    <div class="themeHeader">{{ theme.name }}</div>
    <div class="themeDetail">{{ theme.description }}</div>
  </div>
  <div class="collections" v-if="isDisplay"><CollectionList></CollectionList></div>
</div>
</template>

<style>
.themeInfo{
  border-radius: 4px 4px 0 0;
  background-color: var(--color-background);
}
.themeInfo div{
  padding: 0 1rem;
  display: inline-block;
}
.themeContainer{
  background-color:var(--color-background-soft);
  border-radius: 8px;
}

.themeHeader{
  color: var(--color-heading);
}

.themeDetail{
  font-size: 15px;
  color: var(--color-text-detail);
}
</style>