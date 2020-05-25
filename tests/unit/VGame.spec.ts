import {mount, shallowMount, Wrapper} from "@vue/test-utils";
import VGame from "@/components/VGame.vue";
import VCard from "@/components/VCard.vue";

describe('VGame component', () => {
    it('renders all its cards', () => {
        const wrapper: Wrapper<VGame> = shallowMount(VGame);
        expect(wrapper.findAll(VCard)).toHaveLength(wrapper.vm.$data.game.cards.length)
    });

    it('interacts with the card that has been clicked', () => {
        const wrapper: Wrapper<VGame> = mount(VGame);
        const interaction = jest.spyOn(wrapper.vm.$data.game, 'interactWithCard');
        wrapper.find(VCard).trigger('click');
        expect(interaction).toBeCalledWith(0);
    });

    it('displays message when game is over', async () => {
        const wrapper: Wrapper<VGame> = mount(VGame);
        expect(wrapper.text()).not.toContain('The game is over');
        jest.spyOn(wrapper.vm.$data.game, 'isOver', 'get').mockReturnValue(true);
        wrapper.vm.$forceUpdate();
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('The game is over');
    });
});