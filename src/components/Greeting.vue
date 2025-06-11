<template>
  <div>
    <h3>{{ greeting }}！感谢来访！</h3>
    <button @click="setGreeting">新的欢迎语</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { messages } = defineProps<{
  messages: string[]
}>()

const greeting = ref(messages[0])

const randomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const setGreeting = () => {
  greeting.value = randomMessage()
}
</script>
