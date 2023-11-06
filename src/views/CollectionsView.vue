<template>
    <div>
        <h2 class="headline">Collections</h2>
        <router-link class="home" v-for="collection in getCollections"
                     :to="'/token/' + collection.address"
                     :key="collection.title">
            <nft-token-component
                :collection="collection"
            />
        </router-link>
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
