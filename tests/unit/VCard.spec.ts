import {shallowMount} from '@vue/test-utils'
import VCard from '@/components/VCard.vue'
import Card from "@/models/Card";

describe('VCard', () => {
    it('renders the content of the card', async () => {
        const card = new Card('Cat');
        const wrapper = shallowMount(VCard, {
            propsData: {card}
        })

        expect(wrapper.text()).toMatch(card.content)
    })
})