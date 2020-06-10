import {shallowMount, Wrapper} from '@vue/test-utils'
import VCard from '@/components/VCard.vue'
import Card from "@/models/Card";
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';
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

    it('renders the content of the card', async () => {
        const element = wrapper.find('div').element as HTMLImageElement;

        expect(wrapper.find('.card-content').attributes('style')).toContain(imageUrl);
    });

    it('relays click events', async () => {
        const cardContent = wrapper.find('.card-content');

        cardContent.trigger('click');
        expect(wrapper.emitted('click')).toBeTruthy();
    });
})