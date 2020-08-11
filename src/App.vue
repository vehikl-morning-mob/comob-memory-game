<template>
    <div class="app">
        <v-game/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VGame from "@/components/VGame.vue";

    @Component({
        components: {VGame}
    })
    export default class App extends Vue {
    }
</script>

<style>
    body {
        font-size: 24px;
        background-color: #ddffaa;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23AE9' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E");
    }

    .app {
        font-family: 'Lato', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
