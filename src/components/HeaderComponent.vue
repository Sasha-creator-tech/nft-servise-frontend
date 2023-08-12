<template>
  <header class="header">
    <h1 class="header-title" @click="redirectToBaseURL">
      <span class="header-title-white">Trust</span>
      <span class="header-title-green">worthy</span>
    </h1>
    <nav class="header-nav">
      <router-link to="/" class="header-link">Home</router-link>
      <router-link to="/brands" class="header-link">Brands</router-link>
      <router-link to="/collections" class="header-link">Collections</router-link>
      <router-link to="/about" class="header-link">About</router-link>
    </nav>
    <button class="login-button" @click="connectAndSign">Log in</button>
  </header>
</template>

<script>
import Core from "@/core/wallet";

export default {
  name: 'HeaderComponent',
  methods: {
    async connectAndSign() {
      const signer = await this.$root.core.connectWallet();
      if (signer) {
        const result = await this.$root.core.requestSignature(signer);
        if (result) {
          const { address, signature } = result;
          console.log(address, signature)
          // Handle the address and signature for authentication here
        } else {
          // Handle error during signature
        }
      } else {
        // Handle error connecting wallet
      }
    },
    redirectToBaseURL() {
      this.$router.push({ name: 'home' }); // Navigate to the named route
    },
  },
  created() {
    this.$root.core = new Core();
  }
};
</script>

<style scoped>
@import "../styles/Header.css";
</style>
