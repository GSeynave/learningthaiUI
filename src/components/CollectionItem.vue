<script setup lang="ts">
const props = defineProps(['collection']);
console.log('collection', props.collection)
</script>

<template>
  <div class="collectionContainer">
    <div class="collectionHeader">{{ collection.name }}</div>
    <div class="collectionDetail">{{ collection.description }}</div>
  </div>
</template>

<style>
.collectionContainer div{
  padding: 0 1rem;
  display: table;
}

.collectionHeader{
  color: var(--color-heading);
}

.collectionDetail{
  font-size: 15px;
  color: var(--color-text-detail);
}
</style>