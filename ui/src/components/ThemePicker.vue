<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { swatch, useTheme } from '@/composables/useTheme'

const { primary, neutral, radius, primaryColors, neutralColors, radii, reset } = useTheme()
const mode = useColorMode({ emitAuto: true })

const modes = [
  { value: 'light', label: 'Light', icon: 'i-lucide-sun' },
  { value: 'dark', label: 'Dark', icon: 'i-lucide-moon' },
  { value: 'auto', label: 'System', icon: 'i-lucide-monitor' },
] as const
</script>

<template>
  <UPopover :content="{ align: 'end' }">
    <UButton icon="i-lucide-swatch-book" color="neutral" variant="ghost" aria-label="Theme" />

    <template #content>
      <div class="w-72 space-y-4 p-4">
        <section class="space-y-2">
          <h3 class="text-xs font-semibold text-muted">Primary</h3>
          <div class="grid grid-cols-3 gap-1">
            <UButton
              v-for="color in primaryColors"
              :key="color"
              size="xs"
              color="neutral"
              :variant="primary === color ? 'soft' : 'outline'"
              :class="primary === color && 'ring-2 ring-primary'"
              @click="primary = color"
            >
              <span class="size-2 rounded-full" :style="{ backgroundColor: swatch(color) }" />
              <span class="truncate capitalize">{{ color }}</span>
            </UButton>
          </div>
        </section>

        <section class="space-y-2">
          <h3 class="text-xs font-semibold text-muted">Neutral</h3>
          <div class="grid grid-cols-3 gap-1">
            <UButton
              v-for="color in neutralColors"
              :key="color"
              size="xs"
              color="neutral"
              :variant="neutral === color ? 'soft' : 'outline'"
              :class="neutral === color && 'ring-2 ring-primary'"
              @click="neutral = color"
            >
              <span class="size-2 rounded-full" :style="{ backgroundColor: swatch(color) }" />
              <span class="truncate capitalize">{{ color }}</span>
            </UButton>
          </div>
        </section>

        <section class="space-y-2">
          <h3 class="text-xs font-semibold text-muted">Radius</h3>
          <div class="grid grid-cols-5 gap-1">
            <UButton
              v-for="r in radii"
              :key="r"
              size="xs"
              color="neutral"
              :variant="radius === r ? 'soft' : 'outline'"
              :class="radius === r && 'ring-2 ring-primary'"
              class="justify-center"
              @click="radius = r"
            >
              {{ r }}
            </UButton>
          </div>
        </section>

        <section class="space-y-2">
          <h3 class="text-xs font-semibold text-muted">Color mode</h3>
          <div class="grid grid-cols-3 gap-1">
            <UButton
              v-for="m in modes"
              :key="m.value"
              size="xs"
              color="neutral"
              :icon="m.icon"
              :label="m.label"
              :variant="mode === m.value ? 'soft' : 'outline'"
              :class="mode === m.value && 'ring-2 ring-primary'"
              class="justify-center"
              @click="mode = m.value"
            />
          </div>
        </section>

        <UButton size="xs" color="neutral" variant="link" icon="i-lucide-rotate-ccw" @click="reset(); mode = 'auto'">
          Reset
        </UButton>
      </div>
    </template>
  </UPopover>
</template>
