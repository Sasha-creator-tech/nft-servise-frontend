<template>
    <div class="home">
        <h2 class="headline">Collections</h2>
        <nft-token-component />
    </div>
</template>

<script>
import NftTokenComponent from "@/components/nftTokens/NftTokenComponent.vue";

export default {
    name: "HomeComponent",
    components: {
        NftTokenComponent,
    },
};
</script>

<style scoped>
@import "../styles/Collections.css";
</style>
