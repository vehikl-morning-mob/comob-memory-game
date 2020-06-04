<template>
    <div @click="$emit('click')">
        <img
                v-if="card.isFlipped"
                :src=cardImageSrc
                alt="card content"
                class="card-content"
                :class="{ active: card.isFlipped, 'flip-animation': card.isFlipped }"
        />

        <img
                :src=backgroundSrc
                v-else
                class="card-content"
        />
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import Card from "@/models/Card";

    @Component
    export default class VCard extends Vue {
        @Prop() card!: Card;
        backgroundSrc: string = "https://avatars3.githubusercontent.com/u/6425636?s=280&v=4"
        foregroundSrc: string = `https://picsum.photos/seed/${this.card.visibleContent}/100/100`
        cardImageSrc: string = this.backgroundSrc;

        @Watch("card.isFlipped")
        something() {
            setTimeout(() => {
                this.cardImageSrc = this.foregroundSrc;
            }, 500)
        }
    }
</script>

<style scoped>
    div {
        --card-size: min(20vw, 20vh);
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
        }

        49% {
            transform: rotateY(90deg);
        }

        50% {
            transform: rotateY(90deg);
        }

        100% {
            transform: rotateY(180deg);
        }
    }
</style>
