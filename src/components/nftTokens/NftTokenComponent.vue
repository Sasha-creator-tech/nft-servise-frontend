<template>
    <div class="collection-tile">
        <div class="collection-title">{{ collection.title }}</div>
        <div class="collection-description">
            {{ formatAddress(collection.address) }}
        </div>
        <div class="collection-description">
            By
            {{ collection.brand.name }}
        </div>
    </div>
</template>

<script>
import { formatEthAddress } from "@/formatters/formatters";

export default {
    props: {
        collection: Object,
    },
    name: "NftTokenComponent",
    methods: {
        formatAddress(address) {
            return formatEthAddress(address);
        },
    },
};
</script>

<style scoped>
@import "../../styles/NftToken.css";
</style>
