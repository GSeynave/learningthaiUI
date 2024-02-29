import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import ThemesPresentation from '../ThemesPresentation.vue'
import ThemeItem from '../ThemeItem.vue'

describe('ThemesPresentation', () => {
  it('renders properly', () => {
    const wrapper = mount(ThemesPresentation, {
      globals: {
        components: { ThemeItem }
      }
    })
    expect(wrapper).toBeDefined()
  }),
    it('init x themeItem', () => {
      
      const wrapper = shallowMount(ThemesPresentation)
      expect(wrapper.html()).contains('theme-item')
    }),
    it('should have icon + waiting message when fetching api data', () =>{
//TODO:
    })
    it('should have toast if error occured when fetching api data', () =>{
      //TODO:

    })
    it('should have x child ThemeItem for each theme retrieve from api data', () =>{
      //TODO:

    })
})
