<template>
    <div class="profile">
        <h1 class="headline">Profile</h1>

        <div class="address">
            <p>Your Ethereum Address:</p>
            <p>{{ formatAddress(address) }}</p>
        </div>

      <h2>Your Token Balances</h2>
        <div class="balances">
            <div
                v-for="balance in getBalances"
                :key="balance.nftId.title"
                class="balance"
            >
                <div>Collection Name:</div><div class="collection-name">{{ balance.nftId.nftToken.title }}</div>
                <div>Brand: </div><div class="brand">{{ balance.nftId.nftToken.brand.name }}</div>
                <div>Amount: </div><div class="amount">{{ balance.balance }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {formatEthAddress} from "@/formatters/formatters";

export default {
    name: "ProfileView",
    data: () => {
        return {
            address: "",
        };
    },
    methods: {
        ...mapActions(["fetchBalance"]),
      formatAddress(address) {
        if (!address) {
          return;
        }
        return formatEthAddress(address)
      }
    },
    computed: {
        ...mapGetters(["getBalances"]),
    },
    mounted() {
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
