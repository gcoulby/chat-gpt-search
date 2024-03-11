<template>
  <header :class="`${searchHandler.showResults.value ? 'hidden' : ''} m-auto mt-60`">
    <img class="m-auto mb-4 w-40 rounded-lg" alt="Vue logo" src="../assets/logo.webp" />
    <h1 class="text-2xl font-light text-center">ChatGPT Search</h1>
    <div :class="`${fileHandler.chatHistory.value.length > 0 ? 'hidden' : ''}`">
      <FileImporter />
    </div>
    <div :class="`m-auto w-1/2 ${fileHandler.chatHistory.value.length > 0 ? '' : 'hidden'}`">
      <input
        type="text"
        class="w-[92%] form-input px-4 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-transparent"
        @keydown="onSearchBarKeyDown"
        v-model="searchHandler.searchStr.value"
      />
      <button
        class="w-[8%] px-4 py-2 bg-gray-200 text-black border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-transparent"
        type="button"
        @click="searchHandler.search"
      >
        🔍
      </button>
    </div>
    <div :class="`m-auto w-1/2 mt-4 ${fileHandler.chatHistory.value.length > 0 ? '' : 'hidden'}`">
      <p>
        Searching: {{ fileHandler.file.value?.name }}
        <span class="p-1 px-4 rounded bg-gray-200 cursor-pointer" @click="reset">Change File</span>
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import FileImporter from '@/components/FileImporter.vue'
import { useFileHandling } from '@/composables/FileHandling'
import { useSearch } from '@/composables/Search'

const fileHandler = useFileHandling()
const searchHandler = useSearch()

const reset = () => {
  fileHandler.clearChatHistory()
  searchHandler.clearSearch()
}

const onSearchBarKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    searchHandler.showResults.value = true
    searchHandler.search()
  }
}
</script>
