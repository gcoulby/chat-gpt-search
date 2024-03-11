import { ref, watch } from 'vue'
import { useFileHandling } from './FileHandling'
import Fuse from 'fuse.js'
import { Result } from '@/types'

const singletonSearch = ref<string>('')
const fileHandler = useFileHandling()
const singletonShowResults = ref<boolean>(false)
const singletonResults = ref<Result[]>([])
const singletonThreshold = ref<number>(0.3)
const singletonLocation = ref<number>(0)
const singletonDistance = ref<number>(500)

export const useSearch = () => {
  const searchStr = singletonSearch
  const showResults = singletonShowResults
  const results = singletonResults
  const threshold = singletonThreshold
  const location = singletonLocation
  const distance = singletonDistance

  const options = {
    includeScore: true, // This is optional
    keys: ['message'], // Specify the paths to search within the object
    //fuse settings for threshold, location, distance, etc
    threshold: threshold.value, // default is 0.6 (0.0 is perfect, 1.0 is very loose)
    distance: distance.value, // how close the match must be to the pattern (0 is perfect, 1000 is very loose) default is 100
  }

  watch(threshold, (newVal) => {
    options.threshold = newVal
  })

  watch(distance, (newVal) => {
    options.distance = newVal
  })

  const search = () => {
    const fuse = new Fuse(fileHandler.chatHistory.value, options)

    const rawRes = fuse.search(searchStr.value)
    const res: Result[] = rawRes.map((result) => {
      return {
        id: result.item.id,
        message: result.item.message,
        title: result.item.title,
        create_time: result.item.create_time,
        update_time: result.item.update_time,
        score: result.score ? result.score : 0,
      }
    })
    res.sort((a, b) => b.score - a.score)
    results.value = res
  }

  const clearSearch = () => {
    searchStr.value = ''
    showResults.value = false
    results.value = []
  }

  return {
    searchStr,
    search,
    showResults,
    results,
    clearSearch,
    threshold,
    location,
    distance,
  }
}
