<template>
    <div class="card-content"
         @click="$emit('click')">
        {{card.content}}
    </div>
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
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: black 3px 2px 5px;
    }
</style>