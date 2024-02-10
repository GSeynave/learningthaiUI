import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ThemeItem from '../ThemeItem.vue'

describe('ThemeItem', () => {
  it('renders properly', () => {
    const themeName = "House";
    const wrapper = mount(ThemeItem, { props: { themeName: themeName } })
    expect(wrapper.text()).toContain(themeName)
  })
})
