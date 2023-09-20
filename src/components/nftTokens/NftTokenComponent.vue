<template>
    <div class="collection-tile">
        <div class="collection-title">{{ collection.title }}</div>
        <div class="collection-description">
            {{ collection.description }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        collection: Object,
    },
    name: "NftTokenComponent",
};
</script>

<style scoped>
@import "../../styles/NftToken.css";
</style>
