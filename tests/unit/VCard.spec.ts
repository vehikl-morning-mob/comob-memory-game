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
    });

    it('renders the content of the card', async () => {
        const element = wrapper.find('img').element as HTMLImageElement;
        expect(element.src).toContain(card.visibleContent);
    });

    it('relays click events', async () => {
        const cardContent = wrapper.find('.card-content');

        cardContent.trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });
})