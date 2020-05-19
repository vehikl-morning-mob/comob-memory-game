<template>
    <div>
        <v-card v-for="(card, index) in game.cards"
                :key="index"
                :card="card"/>
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
        game: Game = new Game(['cat', 'vase']);
    }
</script>

<style scoped>

</style>