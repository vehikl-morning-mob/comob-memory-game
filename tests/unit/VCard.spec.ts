import {shallowMount, Wrapper} from '@vue/test-utils'
import VCard from '@/components/VCard.vue'
import {Card} from "vehikl-memory-game-package";
import flushPromises from 'flush-promises';
import {ImageService} from "@/services/ImageService";

describe('VCard', () => {
    let card: Card;
    let wrapper: Wrapper<VCard>;
    let imageUrl = 'https://picsum.photos/img/1.jpg';

    beforeEach(async () => {
        card = new Card('Cat');
        ImageService.getImage = jest.fn().mockReturnValue(imageUrl);
        wrapper = shallowMount(VCard, {
            propsData: {card}
        })

        await flushPromises();
    });

    it('renders the content of the card', () => {
        expect(wrapper.find('.card-content').attributes('style')).toContain(imageUrl);
    });

    it('relays click events', () => {
        const cardContent = wrapper.find('.card-content');

        cardContent.trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });
})