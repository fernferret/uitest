<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <main class="space-y-8">
    <HelloWorld msg="You did it!" />

    <div class="flex items-center justify-center gap-3">
      <UButton icon="i-lucide-plus" @click="counter.increment()">Count is {{ counter.count }}</UButton>
      <UBadge color="neutral" variant="subtle">double: {{ counter.doubleCount }}</UBadge>
    </div>

    <TheWelcome />
  </main>
</template>
