<template>
    <div :style="numberOfColumns">
        <label class="game-configuration" for="numberOfPairs">
            Number of pairs:
            <div>
                <button ref="minus-button" class="change-size-button" @click="changeGameSize(numberOfPairs-2)"><i class="fa fa-minus" aria-hidden="true"></i></button>
                <input id="numberOfPairs" type="number" v-model="numberOfPairs" readonly>
                <button ref="add-button" class="change-size-button" @click="changeGameSize(numberOfPairs+2)"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </label>

        <div v-if="game.isOver" class="game-over-screen">
            <h1 class="game-over-title">The game is over</h1>
            <button @click="game.restart()">Play again</button>
        </div>
        <div class="game-area">
            <section id="score-player-one" :class="{'current-player': game.currentPlayer === game.player1}"
                     class="score player-one">
                <h2 v-text="game.player1.name"/>
                {{renderScore(game.player1)}}
            </section>

            <div class="card-grid">
                <v-card
                        v-for="(card, index) in game.cards"
                        :key="`${card.content}-${index}`"
                        :card="card"
                        :class="{'player-one': game.player1.cardsOwned.includes(card), 'player-two': game.player2.cardsOwned.includes(card)}"
                        @click="game.interactWithCard(index)"
                />
            </div>

            <section id="score-player-two" :class="{'current-player': game.currentPlayer === game.player2}"
                     class="score player-two">
                <h2 v-text="game.player2.name"/>
                {{renderScore(game.player2)}}
            </section>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VCard from '@/components/VCard.vue';
    import {Game} from 'vehikl-memory-game-package';
    import Player from 'vehikl-memory-game-package/Player';

    @Component({
        components: {
            VCard
        }
    })

    export default class VGame extends Vue {
        numberOfPairs: number = 8;
        game: Game = new Game(this.numberOfPairs);

        changeGameSize(pairsRequested: number) {
            if (pairsRequested % 2 !== 0 || pairsRequested <= 0 || pairsRequested > 10) {
                return;
            }

            this.numberOfPairs = pairsRequested;
            this.game = new Game(this.numberOfPairs);
        }

        renderScore(player: Player): string {
            const textAfterNumber = player.score === 1 ? 'point' : 'points';

            return `${player.score} ${textAfterNumber}`;
        }

        get numberOfColumns() {
            return {
                '--number-of-columns': Math.ceil(this.numberOfPairs / 2)
            }
        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .game-configuration {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
        align-items: center;
    }

    .game-configuration div {
        display: flex;
        margin-left: 1rem;
    }

    .game-configuration input {
        font-size: 1.35rem;
    }

    #numberOfPairs {
        text-align: center;
    }

    #numberOfPairs::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .change-size-button {
        border-radius: 0;
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

    .current-player {
        animation: pop-border 750ms forwards;
        animation-delay: 1s;
    }

    @keyframes pop-border {
        0% {
            border: 1px solid gray;
        }

        50% {
            border: 5px solid var(--base-color);
            transform: scale(1.15);
        }

        100% {
            border: 3px solid var(--base-color);
            background-color: var(--background-color);
        }
    }

    .score {
        --base-color: orange;
        --background-color: hsla(39, 100%, 80%, 0.8);
        min-width: 12rem;
        box-sizing: border-box;
        padding: 1em;
        background-color: hsla(39, 0%, 100%, 0.50);
        user-select: none;
    }

    .player-one, .player-one:hover {
        --base-color: dodgerblue;
        --background-color: hsla(210, 100%, 75%, 0.45);
        color: var(--base-color);
        box-shadow: 0 0 0 5px var(--base-color);
    }

    .player-two, .player-two:hover {
        --base-color: darkred;
        --background-color: hsla(0, 100%, 75%, 0.45);
        color: var(--base-color);
        box-shadow: 0 0 0 5px var(--base-color);
    }
</style>