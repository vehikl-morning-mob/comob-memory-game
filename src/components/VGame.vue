<template>
    <div class="game">
        <p v-if="game.isOver">The game is over</p>
        <div class="card-grid">
            <v-card v-for="(card, index) in game.cards"
                    :key="index"
                    :card="card"
                    @click="game.interactWithCard(index)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import VCard from "@/components/VCard.vue";
    import Game from "@/models/Game";

    @Component({
        components: {
            VCard,
        },
    })
    export default class VGame extends Vue{
        game: Game = new Game(['cat', 'vase', 'tree']);
    }
</script>

<style scoped>

    .card-grid {
        display: inline-grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

</style>