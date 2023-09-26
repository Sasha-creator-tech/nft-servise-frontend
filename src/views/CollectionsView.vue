<template>
    <div>
        <h2 class="headline">Collections</h2>
        <div class="home">
            <nft-token-component
                v-for="collection in getCollections"
                :key="collection.title"
                :collection="collection"
            />
        </div>
    </div>
</template>

<script>
import NftTokenComponent from "@/components/nftTokens/NftTokenComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HomeComponent",
    components: {
        NftTokenComponent,
    },
    computed: {
        ...mapGetters(["getCollections"]),
    },
    methods: {
        ...mapActions(["fetchCollections"]),
    },
    created() {
        this.fetchCollections();
    },
};
</script>

<style scoped>
@import "../styles/Collections.css";
</style>
