<template>
    <div id="app">
        <v-card :card="card"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import VCard from "@/components/VCard.vue";
    import Card from "../models/Card";

    @Component({
        components: {
            VCard,
        },
    })

    export default class VGame extends Vue{
        card: Card = new Card('cat');
    }
</script>

<style scoped>

</style>