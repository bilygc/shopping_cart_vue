import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders Header 1', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Header, {
      stubs : ['router-link']
    })
    expect(wrapper.text()).toMatchSnapshot()
  })
  it('renders Header 2', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Header, {
      stubs : ['router-link']
    })
    expect(wrapper.text()).toMatchSnapshot()
  })
})
