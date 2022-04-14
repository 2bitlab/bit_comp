import { mount } from '@vue/test-utils'
import Comp from './index.vue'

// https://test-utils.vuejs.org/guide/
describe('src/TextareaSymbol/index.vue', () => {
  it('Comp', () => {
    const wrapper = mount(Comp as any)
    expect(wrapper.find('.btp-textarea-symbol').exists()).toBe(true)
  })
})
