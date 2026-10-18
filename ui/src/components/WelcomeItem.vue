<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <UCard>
    <div class="flex gap-4">
      <UIcon :name="icon" class="size-8 shrink-0 text-primary" />
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-highlighted">{{ title }}</h3>
        <div class="text-muted"><slot /></div>
      </div>
    </div>
  </UCard>
</template>
