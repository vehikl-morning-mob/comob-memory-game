<template>
    <div class="app">
        <v-game/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VGame from "@/components/VGame.vue";

@Component({
    components: {VGame}
})
export default class App extends Vue {
}
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
