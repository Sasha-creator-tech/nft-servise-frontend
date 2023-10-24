<!-- Token.vue -->
<template>
  <div class="token">
    <h1 class="title">{{ title }}</h1>
    <p class="brand">Brand: {{ brand }}</p>
    <p class="contract-address">
      Contract Address: <a :href="contractAddress">{{ contractAddress }}</a>
    </p>
    <p class="available-amount">Available Amount: {{ availableAmount }}</p>
    <button class="buy-button">Buy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Token Title",
      brand: "Token Brand",
      contractAddress: "https://etherscan.io/address/tokencontractaddress",
      availableAmount: 100,
    };
  },
  created() {
    console.log(this.$route.params)
  }
};
</script>

<style scoped>
@import "../styles/Token.css";
</style>
