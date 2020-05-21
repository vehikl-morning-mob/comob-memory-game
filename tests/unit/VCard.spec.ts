import {shallowMount, Wrapper} from '@vue/test-utils'
import VCard from '@/components/VCard.vue'
import Card from "@/models/Card";

describe('VCard', () => {
    let card: Card;
    let wrapper: Wrapper<VCard>;

    beforeEach(() => {
        card = new Card('Cat');
        wrapper = shallowMount(VCard, {
            propsData: {card}
        })
    })

    it('renders the content of the card', async () => {
        expect(wrapper.text()).toMatch(card.visibleContent)
    })

    it('relays click events', async () => {
        /*
                            Queries       commands
          incoming          result      public side-effects
          internal          -----          ------
          outgoing          -----          contents
         */

        const cardContent = wrapper.find('.card-content');

        cardContent.trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();

        // expect(wrapper.text()).toMatch(card.content)
    })
})