<template>
  <div class="mb-4 p-2 border-b border-gray-300 flex flex-row text-sm">
    <p class="mr-10 font-bold">Settings:</p>
    <span class="mr-10 flex flex-col">
      <label>Similarity (Low=perfect, High=loose): </label>
      <input type="range" min="0" max="1" step="0.01" v-model="searchHandler.threshold.value" />
    </span>
    <span class="mr-10 flex flex-col">
      <label>Fuzziness (Low=perfect, High=loose): </label>
      <input class="w-60" type="range" min="0" max="1000" step="1" v-model="searchHandler.distance.value" />
    </span>
    <button class="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 focus:outline-none focus:border-transparent">Apply</button>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/Search'

const searchHandler = useSearch()
</script>
