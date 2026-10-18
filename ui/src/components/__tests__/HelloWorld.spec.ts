import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ui from '@nuxt/ui/vue-plugin'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: { plugins: [ui] },
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
