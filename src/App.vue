<template>
  <div id="app">
    <v-card :card="card"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import VCard from "@/components/VCard.vue";
import Card from "@/models/Card";

@Component({
  components: {
    VCard,
    HelloWorld,
  },
})
export default class App extends Vue {
  card: Card = new Card('Cat');
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
