<template>
  <div>
    <Menu v-if="!searchHandler.showResults.value" />
    <section v-if="navigation.showHome.value">
      <SearchPanel />
      <SearchResults />
    </section>
    <section v-if="navigation.showAbout.value" class="p-4">
      <div class="whitespace-pre-wrap flex flex-col gap-4">
        <img class="m-auto mb-4 w-40 rounded-lg" alt="Vue logo" src="../assets/logo.webp" />
        <h1 class="text-2xl font-light text-center">ChatGPT Search</h1>

        <p>
          Visit the app
          <a class="text-blue-500 underline" href="https://gcoulby.github.io/chat-gpt-search" target="_blank" ref="noopener noreferrer"
            >https://gcoulby.github.io/chat-gpt-search</a
          >
        </p>

        <h1 class="text-2xl font-bold">About</h1>
        <p>This is a simple search engine for searching ChatGPT histories.</p>

        <p>It uses the export feature of ChatGPT to create a parsable JSON file, which is then used to search for messages.</p>

        <p>The search engine is built using Vue 3 and Tailwind CSS.</p>

        <p>This requires "Chat history & training" to be enabled in the OpenAI settings.</p>

        <h1 class="text-2xl font-bold mt-10">How to use</h1>
        <p>
          • Go to
          <a class="text-blue-500 underline" href="https://chat.openai.com/" target="_blank" ref="noopener noreferrer">https://chat.openai.com/</a>
        </p>
        <p>• Click on your profile picture in the bottom left, then settings.</p>
        <p>• Click "Data Controls"</p>
        <p>• Enable "Chat history & training" if it is not already enabled.</p>
        <p>• Click "Export Chat History" and wait for the email.</p>
        <p>• Download the JSON file from the email.</p>
        <p>• Upload the JSON file to the search engine.</p>
        <p>• Search for messages.</p>

        <h2 class="text-xl mt-4">Controlling the accuracy</h2>
        <p>
          The search engine uses fuse.js to search the messages. This means that it uses a fuzzy search algorithm to find messages that are similar to
          the search query, but not exactly the same. This can be useful for finding messages that you don't remember exactly, but can also return
          false positives. You can control the accuracy using the settings cog in the top right of the search results panel.
        </p>
        <p>
          The settings panel provides 2 options: "Threshold" and "Distance". The "Threshold" option controls the minimum score that a message must
          have to be included in the search results. The "Distance" option controls the maximum distance that a message can be from the search query
          to be included in the search results. The default values are 0.6 and 300, respectively. It is worth experimenting with these values to find
          the best results for your search, though the default values should work well for most searches.
        </p>

        <h1 class="text-2xl font-bold mt-10">Privacy</h1>
        <p>
          This search engine runs entirely in your browser. No data is sent to any server. The JSON file is parsed and searched in your browser using
          the HTML5 File API. The JSON file is not uploaded to any server.
        </p>

        <h1 class="text-2xl font-bold mt-10">Credits</h1>
        <p>
          The search engine is built by
          <a class="text-blue-500 underline" href="https://grahamcoulby.co.uk" target="_blank" ref="noopener noreferrer">Graham Coulby</a>.
        </p>
        <p>
          The source code is available on GitHub at
          <a class="text-blue-500 underline" href="https://github.com/gcoulby/chat-gpt-search" target="_blank" ref="noopener noreferrer"
            >https://github.com/gcoulby/chat-gpt-search</a
          >
        </p>
        <p>
          The search engine uses
          <a class="text-blue-500 underline" href="https://vuejs.org/" target="_blank" ref="noopener noreferrer">Vue 3</a>
          and
          <a class="text-blue-500 underline" href="https://tailwindcss.com/" target="_blank" ref="noopener noreferrer">Tailwind CSS</a>. and the
          search functionality is provided by
          <a class="text-blue-500 underline" href="https://fusejs.io/" target="_blank" ref="noopener noreferrer">fuse.js</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/Search'
import Menu from './Menu.vue'
import SearchPanel from './SearchPanel.vue'
import SearchResults from './SearchResults.vue'

import { useNavigation } from '@/composables/Navigation'
const navigation = useNavigation()
const search = useSearch()

const searchHandler = useSearch()
</script>
