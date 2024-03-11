<template>
  <div class="p-4">
    <a class="text-2xl text-blue-600" :href="`https://chat.openai.com/c/${result?.id ?? ''}`" target="_blank" ref="noopener noreferrer">{{
      result?.title
    }}</a>
    <p class="text-sm italic">{{ result?.id }}</p>
    <p class="text-sm italic" v-if="result?.score">Similarity: {{ (result?.score * 100).toFixed(2) }}%</p>
    <div class="">
      <button class="p-1 px-4 rounded bg-gray-200 cursor-pointer" @click="showSpoiler = !showSpoiler">
        <FontAwesomeIcon v-if="showSpoiler" :icon="faEyeSlash" />
        <FontAwesomeIcon v-else :icon="faEye" />
        {{ showSpoiler ? 'Hide' : 'Show' }} Content
      </button>
      <div :class="showSpoiler ? '' : 'hidden'">
        <pre class="p-6 text-sm h-80 bg-slate-50 overflow-y-scroll whitespace-pre-wrap">{{ result?.message }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFileHandling } from '@/composables/FileHandling'

import { ChatHistory, Result } from '@/types'
import { computed, ref } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const fileHandler = useFileHandling()

const showSpoiler = ref(false)

const props = defineProps({
  result: {
    type: Object as () => Result,
  },
})
</script>
