import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'

import { mount } from '@vue/test-utils'
import ThemesPresentation from '../ThemesPresentation.vue'
import ThemeItem from '../ThemeItem.vue'

describe('ThemesPresentation', () => {
  it('renders properly', () => {
    const wrapper = mount(ThemesPresentation, {
      globals:{
        components: { ThemeItem }
      }
    });
    expect(wrapper).toBeDefined();
  }),
  it('init x themeItem', () => {
    const wrapper = shallowMount(ThemesPresentation);
    expect(wrapper.html()).contains("theme-item");
  })
})
