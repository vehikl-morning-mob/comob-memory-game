<template>
    <div>{{card.content}}</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator"
    import Card from "@/models/Card";

    @Component
    export default class VCard extends Vue {
        @Prop() card!:Card;
    }
</script>