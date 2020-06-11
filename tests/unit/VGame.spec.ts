import {mount, Wrapper} from "@vue/test-utils";
import VGame from "@/components/VGame.vue";
import VCard from "@/components/VCard.vue";

describe('VGame component', () => {
    let wrapper: Wrapper<VGame>;
    beforeEach(() => {
        wrapper = mount(VGame);
    });
    it('renders all its cards', () => {
        expect(wrapper.findAll(VCard)).toHaveLength(wrapper.vm.$data.game.cards.length)
    });

    it('interacts with the card that has been clicked', () => {
        const interaction = jest.spyOn(wrapper.vm.$data.game, 'interactWithCard');
        wrapper.find(VCard).trigger('click');
        expect(interaction).toBeCalledWith(0);
    });

    it('displays message when game is over', async () => {
        expect(wrapper.text()).not.toContain('The game is over');
        jest.spyOn(wrapper.vm.$data.game, 'isOver', 'get').mockReturnValue(true);
        wrapper.vm.$forceUpdate();
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('The game is over');
    });

    it('allows the player to change the number of pairs rendered', async () => {
        const pairCountInput = wrapper.find('input');
        let numberOfPairsRequested = 5;
        pairCountInput.setValue(numberOfPairsRequested);
        wrapper.vm.$forceUpdate();
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll(VCard)).toHaveLength(numberOfPairsRequested * 2);
    });
});