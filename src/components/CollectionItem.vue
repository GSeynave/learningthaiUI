<script setup lang="ts">
defineProps(['collection'])
</script>

<template>
  <div class="collectionContainer">
    <div class="collectionHeader">{{ collection.name }}</div>
    <div class="collectionDetail">Test description{{ collection.description }}</div>
  </div>
</template>

<style>
.collectionContainer div{
  padding: 0 1rem;
  display: inline-block;
}

.collectionHeader{
  color: var(--color-heading);
}

.collectionDetail{
  font-size: 15px;
  color: var(--color-text-detail);
}
</style>