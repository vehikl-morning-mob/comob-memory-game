import {shallowMount} from '@vue/test-utils'
import VCard from '@/components/VCard.vue'

describe('VCard', () => {
    it('renders the text', () => {
        const text = 'cat'
        const wrapper = shallowMount(VCard, {
            propsData: {text}
        })
        expect(wrapper.text()).toMatch(text)
    })
})