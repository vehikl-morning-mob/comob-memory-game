<template>
    <div @click="$emit('click')">
        <img
                :src="card.isFlipped ? `https://picsum.photos/seed/${this.card.visibleContent}/100/100` : 'https://avatars3.githubusercontent.com/u/6425636?s=280&v=4'"
                alt="card content"
                class="card-content"
                :class="{ active: card.isFlipped, 'flip-animation': card.isFlipped }"
        />
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import Card from "@/models/Card";

    @Component
    export default class VCard extends Vue {
        @Prop() card!: Card;

        @Watch("card.isFlipped")
        something() {
        }
    }
</script>

<style scoped>
    div {
        --card-size: min(20vw, 20vh);
        --card-bg-img: url("https://avatars3.githubusercontent.com/u/6425636?s=280&v=4");
    }

    .card-content {
        height: var(--card-size);
        width: var(--card-size);
        border: 1px solid black;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: black 2px 1px 5px;
        cursor: pointer;
        user-select: none;
        transition: all 350ms ease;
    }

    .card-content:hover {
        background-color: aliceblue;
        box-shadow: black 5px 4px 5px;
        transform: scale(1.1);
    }

    .flip-animation {
        animation: flip 1s 1;
        animation-fill-mode: forwards;
    }

    @keyframes flip {
        0% {
            transform: rotateY(0deg);
            background-image: var(--card-bg-img);
        }

        49% {
            transform: rotateY(90deg);
            background-image: var(--card-bg-img);
        }

        50% {
            transform: rotateY(90deg);
        }

        100% {
            transform: rotateY(180deg);
        }
    }
</style>
