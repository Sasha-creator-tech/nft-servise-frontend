<template>
  <div class="brands-page">
    <div v-for="brand in getBrands" :key="brand.id" class="brand-tile" @click="redirectToBrand(brand.url)">
      <div class="brand-image" :style="{ backgroundImage: `url(${brand.logoUrl})` }"></div>
      <p class="brand-name">{{ brand.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchBrands"]),
    redirectToBrand(url) {
      window.open(url, "_blank"); // Open the brand's URL in a new tab
    },
  },
  computed: mapGetters(["getBrands"]),
  created() {
    this.fetchBrands();
  }
};
</script>

<style scoped>
@import "../styles/Brand.css";
</style>