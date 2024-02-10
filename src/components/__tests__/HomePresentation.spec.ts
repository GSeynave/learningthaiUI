import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomePresentation from '../HomePresentation.vue'

describe('HomePresentation', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePresentation);
    expect(wrapper).toBeDefined();
  })
})
