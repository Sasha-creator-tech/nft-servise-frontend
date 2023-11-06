<!-- Token.vue -->
<template>
  <div class="token">
    <div v-for="nft in nftIds" v-bind:key="nft?.id" class="token-plate">
      <h1 class="title">{{ title }}</h1>
      <p class="brand">Brand: {{ brand }}</p>
      <p class="brand">OnChain id: {{ nft.onchain_id }}</p>
      <p class="contract-address">
        Contract Address: <a :href="'https://etherscan.io/address/' + contractAddress" target="_blank">{{ contractAddress }}</a>
      </p>
      <p class="available-amount">Available Amount: {{ nft.userBalances[0].amount }}</p>
      <div class="quantity">
        <button class="quantity-button" @click="decrementQuantity(nft.id)">-</button>
        <input class="quantity-input" v-if="rerender" v-model="quantities[nft.id]" placeholder="1"/>
        <button class="quantity-button" @click="incrementQuantity(nft.userBalances[0].amount, nft.id)">+</button>
      </div>
      <button class="buy-button" @click="buyTokenHandler(nft.onchain_id, quantities[nft.id])">Buy</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "Token Title",
      brand: "Token Brand",
      contractAddress: "...",
      availableAmount: 100,
      nftIds: [],
      quantities: {},
      rerender: true
    };
  },
  methods: {
    ...mapActions(["buyToken", "fetchNftToken"]),
    buyTokenHandler(tokenId, amount) {
      this.buyToken({tokenContract: this.contractAddress, tokenId, amount})
    },
    incrementQuantity(availableAmount, id) {
      if (this.quantities[id] < availableAmount) {
        this.quantities[id]++;
      }
      if (this.quantities[id] === null || this.quantities[id] === undefined) {
        this.quantities[id] = 1;
      }
      this.rerenderInput();
    },
    decrementQuantity(id) {
      if (this.quantities[id] > 1) {
        this.quantities[id]--;
      }
      if (this.quantities[id] === null || this.quantities[id] === undefined) {
        this.quantities[id] = 0;
      }
      this.rerenderInput();
    },
    rerenderInput() {
      for (let i = 0; i < 2; i++) this.rerender = !this.rerender;
    }
  },
  computed: mapGetters(["getNftTokenData"]),
  async created() {
    this.contractAddress = this.$route.params.address;
    const nftTokenData = await this.fetchNftToken(this.contractAddress);
    if (nftTokenData) {
      this.nftIds = nftTokenData.nftIds;
    }
  }
};
</script>

<style scoped>
@import "../styles/Token.css";
</style>
