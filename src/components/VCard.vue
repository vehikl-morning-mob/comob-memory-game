<template>
    <div>{{text}}</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator"

    @Component
    export default class VCard extends Vue {
        @Prop() text!:string;
    }
</script>