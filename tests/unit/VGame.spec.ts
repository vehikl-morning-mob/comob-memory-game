import {mount, Wrapper} from "@vue/test-utils";
import VGame from "@/components/VGame.vue";
import VCard from "@/components/VCard.vue";
import Game from "@/models/Game";

describe('VGame component', () => {
    let wrapper: Wrapper<VGame>;
    let game: Game;

    beforeEach(() => {
        wrapper = mount(VGame);
        game = wrapper.vm.$data.game;
    });

    it('renders all its cards', () => {
        expect(wrapper.findAll(VCard)).toHaveLength(game.cards.length)
    });

    it('interacts with the card that has been clicked', () => {
        const interaction = jest.spyOn(game, 'interactWithCard');
        wrapper.find(VCard).trigger('click');
        expect(interaction).toBeCalledWith(0);
    });

    it('displays message when game is over', async () => {
        expect(wrapper.text()).not.toContain('The game is over');
        jest.spyOn(game, 'isOver', 'get').mockReturnValue(true);
        wrapper.vm.$forceUpdate();
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('The game is over');
    });

    it('allows the player to change the number of pairs rendered', async () => {
        const pairCountInput = wrapper.find('input');
        let numberOfPairsRequested = 6;
        pairCountInput.setValue(numberOfPairsRequested);
        wrapper.vm.$forceUpdate();
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll(VCard)).toHaveLength(numberOfPairsRequested * 2);
    });

    it('displays the score for both players', () => {
        expect(wrapper.find('#score-player-one').text()).toContain(game.player1Score);
        expect(wrapper.find('#score-player-two').text()).toContain(game.player2Score);
    });
});