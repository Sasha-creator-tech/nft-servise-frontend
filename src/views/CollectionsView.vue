<template>
    <div>
        <h2 class="headline">Collections</h2>
        <div class="home">
            <nft-token-component
                v-for="collection in collections"
                :key="collection.id"
                :collection="collection"
            />
        </div>
    </div>
</template>

<script>
import NftTokenComponent from "@/components/nftTokens/NftTokenComponent.vue";

export default {
    name: "HomeComponent",
    data: function () {
        return {
            collections: [
                {
                    id: 1,
                    title: "Collection 1",
                    image: "collection1.jpg",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    id: 2,
                    title: "Collection 2",
                    image: "collection2.jpg",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adskdjcnks.",
                },
                {
                    id: 3,
                    title: "Collection 1",
                    image: "collection1.jpg",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    id: 4,
                    title: "Collection 2",
                    image: "collection2.jpg",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adskdjcnks.",
                },
            ],
        };
    },
    components: {
        NftTokenComponent,
    },
};
</script>

<style scoped>
@import "../styles/Collections.css";
</style>
