import {shallowMount, Wrapper} from "@vue/test-utils";
import VGame from "@/components/VGame.vue";
import VCard from "@/components/VCard.vue";

describe('VGame component', () => {
    it('renders all its cards', () => {
        const wrapper: Wrapper<VGame> = shallowMount(VGame);
        expect(wrapper.findAll(VCard)).toHaveLength(wrapper.vm.$data.game.cards.length)
    })
})