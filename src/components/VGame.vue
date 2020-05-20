<template>
    <div class="game">
        <v-card v-for="(card, index) in game.cards"
                :key="index"
                :card="card"
                @click="game.interactWithCard(index)"
        />
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
        game: Game = new Game(['cat', 'vase', 'tree', 'mouse', 'dog', 'cow']);
    }
</script>

<style scoped>

    .game {
        display: inline-grid;
        grid-template-columns: repeat(3,1fr);
    }

</style>