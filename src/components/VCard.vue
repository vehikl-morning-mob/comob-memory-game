<template>
    <div class="card-content"
        :class="{ active: card.isFlipped, 'flip-animation': card.isFlipped }"
        :style="flipStyle"
        @click="$emit('click')"
    />
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Card} from "vehikl-memory-game-package";
    import {ImageService} from "@/services/ImageService";

    @Component
    export default class VCard extends Vue {
        @Prop() card!: Card;
        foregroundImage: string = '';

        async created() {
            this.foregroundImage = await ImageService.getImage(this.card.content)
        }

        get flipStyle() {
            return {
                '--card-img': `url(${this.foregroundImage})`
            }
        }
    }
</script>

<style scoped>
    div {
        --card-size: min(15vw, 20vh);
        --card-bg-img: url('https://avatars3.githubusercontent.com/u/6425636?s=280&v=4');
        --card-img: '';
    }

    .card-content {
        background-image: var(--card-bg-img);
        background-size: cover;
        background-position: center;
        height: var(--card-size);
        width: var(--card-size);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        transition: all 350ms ease;
    }

    .card-content:hover {
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
            background-image: var(--card-img);
        }

        100% {
            transform: rotateY(180deg);
            background-image: var(--card-img);
        }
    }
</style>
