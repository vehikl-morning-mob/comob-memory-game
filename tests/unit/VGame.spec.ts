import {mount, Wrapper} from "@vue/test-utils";
import VGame from "@/components/VGame.vue";
import VCard from "@/components/VCard.vue";
import {Game} from "vehikl-memory-game-package";

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

    it('allows the player to increase the number of pairs rendered', async () => {
        const addButton = wrapper.find({ ref: 'add-button' });
        addButton.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll(VCard)).toHaveLength(20);
    });

    it('allows the player to decrease the number of pairs rendered', async () => {
        const minusButton = wrapper.find({ ref: 'minus-button' });
        minusButton.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll(VCard)).toHaveLength(12);
    });

    it('displays the score for both players', () => {
        expect(wrapper.find('#score-player-one').text()).toContain(game.player1.score);
        expect(wrapper.find('#score-player-two').text()).toContain(game.player2.score);
    });


    it('displays the names of each player in their scoreboards', () => {
        expect(wrapper.find('#score-player-one').text()).toContain(game.player1.name);
        expect(wrapper.find('#score-player-two').text()).toContain(game.player2.name);
    });

    it('highlights the score of the current player', async () => {
        expect(wrapper.find("#score-player-one").classes("current-player")).toBeTruthy();
        wrapper.findAll(VCard).at(0).trigger('click');
        wrapper.findAll(VCard).at(1).trigger('click');
        await wrapper.vm.$forceUpdate();
        expect(wrapper.find("#score-player-one").classes("current-player")).toBeFalsy();
        expect(wrapper.find("#score-player-two").classes("current-player")).toBeTruthy();
    });
});