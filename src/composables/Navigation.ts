import { ref } from 'vue'

const singletonShowAbout = ref<boolean>(false)
const singletonShowHome = ref<boolean>(true)

export const useNavigation = () => {
  const showAbout = singletonShowAbout
  const showHome = singletonShowHome

  const gotoAbout = () => {
    showAbout.value = true
    showHome.value = false
  }

  const gotoHome = () => {
    showHome.value = true
    showAbout.value = false
  }

  return {
    showAbout,
    showHome,
    gotoAbout,
    gotoHome,
  }
}
