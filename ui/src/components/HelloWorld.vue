<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="space-y-2 text-center">
    <h1 class="text-4xl font-medium text-primary">{{ msg }}</h1>
    <h3 class="text-lg text-muted">
      You’ve successfully created a project with
      <ULink to="https://vite.dev/" target="_blank">Vite</ULink> +
      <ULink to="https://vuejs.org/" target="_blank">Vue 3</ULink> +
      <ULink to="https://ui.nuxt.com/" target="_blank">Nuxt UI</ULink>. What's next?
    </h3>
  </div>
</template>
