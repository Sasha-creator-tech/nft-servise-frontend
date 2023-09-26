<template>
    <div class="profile">
        <h1 class="headline">Profile</h1>

        <div class="address">
            <p>Your Ethereum Address:</p>
            <p>{{ address }}</p>
        </div>

        <div class="balances">
            {{ getBalances }}
            <h2>Your Token Balances</h2>
            <div
                v-for="balance in getBalances"
                :key="balance.nftId.title"
                class="balance"
            >
                <div class="collection-name">{{ balance.nftId.title }}</div>
                <div class="brand">{{ balance.nftId.brand.title }}</div>
                <div class="amount">{{ balance.balance }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ProfileView",
    data: () => {
        return {
            address: "",
        };
    },
    methods: {
        ...mapActions(["fetchBalance"]),
    },
    computed: {
        ...mapGetters(["getBalances"]),
    },
    created() {
        const userAddress = localStorage.getItem("user_address");
        if (!userAddress) {
            return;
        }
        this.address = userAddress;
        this.fetchBalance({ address: userAddress });
    },
};
</script>

<style scoped>
@import "../styles/Profile.css";
</style>
