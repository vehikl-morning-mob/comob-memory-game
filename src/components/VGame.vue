<template>
    <div class="game" :style="numberOfColumns">
        <label for="numberOfPairs">Number of pairs:</label>
        <input id="numberOfPairs" type="number" v-model="numberOfPairs">
        <div v-if="game.isOver" class="game-over-screen">
            <h1 class="game-over-title">The game is over</h1>
            <button @click="game.restart()">Play again</button>
        </div>
        <div class="card-grid">
            <v-card
                    v-for="(card, index) in game.cards"
                    :key="index"
                    :card="card"
                    @click="game.interactWithCard(index)"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import VCard from "@/components/VCard.vue";
    import Game from "@/models/Game";

    @Component({
        components: {
            VCard
        }
    })
    export default class VGame extends Vue {
        numberOfPairs: number = 8;
        game: Game = new Game(this.numberOfPairs);

        @Watch('numberOfPairs')
        reinstantiateGame() {
            this.game = new Game(this.numberOfPairs);
        }

        get numberOfColumns() {
            return {
                '--number-of-columns': this.numberOfPairs / 2
            }
        }
    }
</script>

<style scoped>
    button {
        font-family: "Lato", sans-serif;
        outline: none;
        background-color: white;
        border-radius: 1rem;
        border: 1px solid black;
        font-size: 1.2rem;
        padding: 0.8rem;
        cursor: pointer;
        opacity: 0.6;
    }

    button:hover {
        box-shadow: black 5px 4px 5px;
        transform: scale(1.1);
        opacity: 0.7;
    }

    .card-grid {
        display: inline-grid;
        grid-template-columns: repeat(var(--number-of-columns), 1fr);
        grid-gap: 1rem;
    }

    .game-over-screen {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #000000aa;
        z-index: 2;
    }

    .game-over-title {
        color: #ffffff;
    }
</style>