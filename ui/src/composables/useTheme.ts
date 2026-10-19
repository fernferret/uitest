import { watchEffect } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import colors from 'tailwindcss/colors'

export const primaryColors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

export const neutralColors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'taupe',
  'mauve',
  'mist',
  'olive',
]

export const radii = [0, 0.125, 0.25, 0.375, 0.5]

const DEFAULTS = { primary: 'sky', neutral: 'neutral', radius: 0.25 }

const primary = useLocalStorage('ui-primary', DEFAULTS.primary)
const neutral = useLocalStorage('ui-neutral', DEFAULTS.neutral)
const radius = useLocalStorage('ui-radius', DEFAULTS.radius)

/** Hex value of a palette's 500 shade, for rendering swatches. */
export function swatch(color: string): string {
  const palette = (colors as unknown as Record<string, Record<string, string> | undefined>)[color]
  return palette?.['500'] ?? 'transparent'
}

/** Sync the stored theme into Nuxt UI's app config and the document. Call before installing the UI plugin. */
export function initTheme() {
  const appConfig = useAppConfig()

  watchEffect(() => {
    if (!primaryColors.includes(primary.value)) primary.value = DEFAULTS.primary
    if (!neutralColors.includes(neutral.value)) neutral.value = DEFAULTS.neutral
    appConfig.ui.colors.primary = primary.value
    appConfig.ui.colors.neutral = neutral.value
    document.documentElement.style.setProperty('--ui-radius', `${radius.value}rem`)
  })
}

export function useTheme() {
  function reset() {
    primary.value = DEFAULTS.primary
    neutral.value = DEFAULTS.neutral
    radius.value = DEFAULTS.radius
  }

  return { primary, neutral, radius, primaryColors, neutralColors, radii, reset }
}
