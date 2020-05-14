<template>
    <div class="card-content">{{card.content}}</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator"
    import Card from "@/models/Card";

    @Component
    export default class VCard extends Vue {
        @Prop() card!:Card;
    }
</script>

<style>
    .card-content {
        border: 1px solid black;
        border-radius: 1rem;
        height: 5rem;
        width: 5rem;
    }
</style>