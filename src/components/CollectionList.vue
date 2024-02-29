<script setup lang="ts">
import CollectionItem from './CollectionItem.vue'
import CollectionService from '../components/services/CollectionsService'
import { ref } from 'vue'
import { toast, type ToastOptions } from 'vue3-toastify'
import { UiLoading } from "@kalimahapps/vue-icons";
import { ClWarning } from "@kalimahapps/vue-icons";

const CollectionsService = new CollectionService()
const props = defineProps(['themeID']);
let loading = ref(true);
let notify: toast | null = null

const collections = ref<string[]>([])
  CollectionsService
  .getCollectionsByThemeID(props.themeID)
  .then((value) => {
    loading.value = false
    collections.value = value
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
  <div class="collectionsContainer">
    <div class="info" v-if="loading"><UiLoading></UiLoading>Fetching collections...</div>
    <div v-else>
      <div v-if="collections.length > 0" class="collectionsList">
        <li class="collectionItem" v-for="(collection, index) in collections" :key="index">
          <CollectionItem :collection="collection"></CollectionItem>
        </li>
      </div>
      <div v-else class="warning">No collection available<ClWarning></ClWarning></div>
    </div>
  </div>
</template>

<style>
.collectionsList{
  display: flex;
}


.collectionItem:first-of-type {
  border: 0;
}
.collectionItem{
  text-align: center;
  border-left: 1px solid var(--color-background-soft-2);
  width: 25%;
}
.collectionItem:hover{
  border-radius: 4px;
  background-color: var(--color-background-soft-2);
}
.collectionsContainer{
  margin-top: 0.5em;
  padding: 0.2em;
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
