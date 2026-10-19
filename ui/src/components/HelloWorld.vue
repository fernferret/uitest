<script setup lang="ts">
import ExternalLink from './ExternalLink.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="space-y-2 text-center">
    <h1 class="text-4xl font-medium text-primary">{{ msg }}</h1>
    <h3 class="text-lg text-muted">
      You’ve successfully created a project with
      <ExternalLink to="https://vite.dev/">Vite</ExternalLink> +
      <ExternalLink to="https://vuejs.org/">Vue 3</ExternalLink> +
      <ExternalLink to="https://ui.nuxt.com/">Nuxt UI</ExternalLink>. What's next?
    </h3>
  </div>
</template>
