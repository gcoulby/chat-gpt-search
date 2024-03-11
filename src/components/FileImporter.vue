<template>
  <div class="w-1/2 h-full my-8 text-center relative m-auto">
    <div class="p-4 border-2 border-dashed border-gray-400 rounded-lg text-center" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <form ref="formRef">
        <input
          type="file"
          multiple="false"
          name="file"
          id="fileInput"
          :class="`opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer`"
          @change="onChange"
          :ref="fileHandler.file"
          accept=".json"
        />
      </form>

      <label for="fileInput" class="text-lg">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-else>Drop your ChatGPT export here or <u>click here</u> to upload.</div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VNodeRef, ref, watch } from 'vue'
import { useFileHandling } from '@/composables/FileHandling'

const fileHandler = useFileHandling()
const isDragging = ref(false)
const formRef = ref<HTMLFormElement | null>(null)

const handleFileChange = (fileList: File[]) => {
  const files = Array.from(fileList)
  files.forEach((file) => {
    fileHandler.setFile(file)
    fileHandler.readFile()
  })
}

watch(fileHandler.file, (file) => {
  if (!file) {
    formRef.value?.reset()
  }
})

const onChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  const files: File[] = []
  if (input.files) {
    files.push(...Array.from(input.files))
  }
  handleFileChange(files)
}

const dragover = (e: Event) => {
  e.preventDefault()
  isDragging.value = true
}

const dragleave = () => {
  isDragging.value = false
}

const drop = (e: DragEvent) => {
  e.preventDefault()
  if (e.dataTransfer?.files) {
    handleFileChange(Array.from(e.dataTransfer.files))
  }
  isDragging.value = false
}
</script>
