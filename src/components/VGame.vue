<template>
    <div class="game" :style="numberOfColumns">
        <div id="current-player">Current turn: Player {{game.currentPlayer}}</div>
        <label class="game-configuration" for="numberOfPairs">Number of pairs:
            <input id="numberOfPairs" type="number" @input="handleGameSizeInput" :value="numberOfPairs" step="2" min="2" >
        </label>

        <div v-if="game.isOver" class="game-over-screen">
            <h1 class="game-over-title">The game is over</h1>
            <button @click="game.restart()">Play again</button>
        </div>
        <div class="game-area">
            <section id="score-player-one">
                <h2>Player One</h2>
                {{game.player1Score}}
            </section>

            <div class="card-grid">
                <v-card
                        v-for="(card, index) in game.cards"
                        :key="`${card.content}-${index}`"
                        :card="card"
                        @click="game.interactWithCard(index)"
                />
            </div>

            <section id="score-player-two">
                <h2>Player Two</h2>
                {{game.player2Score}}
            </section>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import VCard from "@/components/VCard.vue";
    import {Game} from "vehikl-memory-game-package";

    @Component({
        components: {
            VCard
        }
    })

    export default class VGame extends Vue {
        numberOfPairs: number = 8;
        game: Game = new Game(this.numberOfPairs);

        handleGameSizeInput(event : InputEvent) {
            const pairsRequested = parseInt((event.target as HTMLInputElement).value);
            if (pairsRequested % 2 !== 0 || pairsRequested <= 0) {
                return;
            }
            this.numberOfPairs = pairsRequested;
            this.game = new Game(this.numberOfPairs);
        }

        get numberOfColumns() {
            return {
                '--number-of-columns': Math.ceil(this.numberOfPairs / 2)
            }
        }
    }
</script>

<style scoped>
    .game-configuration {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
    }

    #current-player {
        text-align: center;
    }

    #numberOfPairs {
        text-align: center;
    }

    #numberOfPairs::-webkit-inner-spin-button {
        opacity: 1;
    }

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
        display: grid;
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

    .game-area {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .game-area > section {
        margin: 0 3rem;
    }
</style>