<template>
  <div class="p-4 flex flex-row gap-4">
    <button :class="`${navigation.showHome.value && 'font-bold'}`" @click="navigation.gotoHome()">Home</button>
    <button :class="`${navigation.showAbout.value && 'font-bold'}`" @click="navigation.gotoAbout()">About</button>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables/Navigation'

const navigation = useNavigation()
</script>
