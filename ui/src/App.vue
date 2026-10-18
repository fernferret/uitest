<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/', icon: 'i-lucide-house' },
  { label: 'About', to: '/about', icon: 'i-lucide-info' },
]
</script>

<template>
  <UApp>
    <UHeader title="Vue + Nuxt UI">
      <template #title>
        <img alt="Vue logo" src="@/assets/logo.svg" class="h-8 w-auto" />
        <span>Vue + Nuxt UI</span>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UContainer class="py-8">
        <RouterView />
      </UContainer>
    </UMain>
  </UApp>
</template>
