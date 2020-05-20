<template>
    <div class="card-content"
         :class="{ active: card.isFlipped }"
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

<style scoped>
    .card-content {
        background-color: aquamarine;
        border: 1px solid black;
        border-radius: 1rem;
        height: 5rem;
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: black 2px 1px 5px;
        cursor: pointer;
        user-select: none;
        transition: all 350ms ease;
    }

    .card-content.active {
        background-color: hotpink;
    }

    .card-content:hover {
        background-color: aliceblue;
        box-shadow: black 5px 4px 5px;
        transform: scale(1.1);
    }
</style>