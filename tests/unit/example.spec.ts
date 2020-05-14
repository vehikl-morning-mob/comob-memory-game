import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('CardComponent', () => {
  beforeEach(() => {

  })

  describe('Foobar', () => {
    beforeEach(() => {

    })

    it('starts facing down', () => {})
    it ('faces up on click', () => {})
  });

});