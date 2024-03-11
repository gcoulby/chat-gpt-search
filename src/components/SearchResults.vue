<template>
  <main :class="`${searchHandler.showResults.value ? '' : 'hidden'}`">
    <header class="flex flex-row m-auto py-4 border-b border-gray-300">
      <img class="w-10 h-10 p-1 mx-2 rounded-lg cursor-pointer" alt="Vue logo" src="../assets/logo.webp" @click="reset" />
      <!-- <img class="m-auto mb-4 w-40 rounded-lg" alt="Vue logo" src="../assets/logo.webp" /> -->
      <div class="w-1/2">
        <input
          type="text"
          class="w-[85%] form-input px-4 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-transparent"
          @keydown="onSearchBarKeyDown"
          v-model="searchHandler.searchStr.value"
        />
        <button
          class="w-[15%] px-4 py-2 bg-gray-200 text-black border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-transparent"
          type="button"
          @click="searchHandler.search"
        >
          <FontAwesomeIcon class="text-gray-500" :icon="faSearch" />
        </button>
      </div>
      <div class="ml-4 mt-2">
        <p>
          Searching: {{ fileHandler.file.value?.name }}
          <button class="px-4 py-1 bg-gray-200 text-gray-500 rounded hover:bg-gray-300 focus:outline-none focus:border-transparent" @click="reset">
            Change File
          </button>
        </p>
      </div>
      <div class="ml-auto">
        <FontAwesomeIcon :icon="faCog" class="text-gray-500 text-2xl p-2 pr-4 ml-auto cursor-pointer" @click="toggleSettings" />
      </div>
    </header>
    <section v-if="showSettings">
      <SettingsPanel />
    </section>
    <section>
      <SearchResult v-for="(item, index) in computedResults" :key="index" :result="item" />
    </section>
  </main>
</template>

<script setup lang="ts">
import FileImporter from '@/components/FileImporter.vue'
import { useFileHandling } from '@/composables/FileHandling'
import SearchResult from '@/components/SearchResult.vue'
import { useSearch } from '@/composables/Search'
import { Ref, computed, ref, watch } from 'vue'
import { Result } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons'
import SettingsPanel from '@/components/SettingsPanel.vue'

const showSettings = ref(false)

const fileHandler = useFileHandling()
const searchHandler = useSearch()

const reset = () => {
  fileHandler.clearChatHistory()
  searchHandler.clearSearch()
}

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}

const computedResults = computed(() => {
  return searchHandler.results.value
})

const onSearchBarKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    searchHandler.showResults.value = true
    searchHandler.search()
  }
}
</script>
