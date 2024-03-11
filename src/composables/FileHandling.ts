import { ChatHistory, SimpleChat } from '@/types'
import { ref } from 'vue'

const singletonFile = ref<File | null>(null)
const singletonFileExtension = ref<string | null>(null)
const singletonChatHistory = ref<SimpleChat[]>([])

export const useFileHandling = () => {
  const file = singletonFile
  const fileExtension = singletonFileExtension
  const chatHistory = singletonChatHistory

  const setFile = (newFile: File) => {
    file.value = newFile
    fileExtension.value = newFile.name.split('.').pop()?.toLowerCase() || null

    const reader = new FileReader()
    reader.onload = (e) => {
      const complexChatHistory: ChatHistory[] = JSON.parse(e.target?.result as string) as ChatHistory[]

      complexChatHistory.map((message) => {
        if (message.mapping) {
          Object.keys(message.mapping).map((key) => {
            const chat = {} as SimpleChat
            const mapping = message.mapping[key]
            if (mapping?.message) {
              if (mapping.message.content.parts && mapping.message.content.parts.length > 0) {
                mapping.message.content.parts.map((part) => {
                  if (typeof part === 'string' && part.length > 0 && part !== ' ' && part !== '\n' && part !== '\r' && part !== '') {
                    chat.message = part
                    chat.id = message.conversation_id
                    chat.title = message.title
                    chat.create_time = mapping.message?.create_time || undefined
                    chat.update_time = mapping.message?.update_time || undefined
                    chatHistory?.value?.push(chat)
                  }
                })
              }
            }
          })
        }
      })
    }
    reader.readAsText(newFile)
  }

  const clearChatHistory = () => {
    chatHistory.value = []
    file.value = null
    fileExtension.value = null
  }

  const readFile = () => {
    if (!file.value) {
      return
    }
  }

  return {
    file,
    fileExtension,
    setFile,
    readFile,
    chatHistory,
    clearChatHistory,
  }
}
