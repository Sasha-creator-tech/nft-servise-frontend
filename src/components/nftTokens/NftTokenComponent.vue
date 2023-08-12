<template>
  <div class="list">
    <div class="list-item" v-for="el of ['CocaCola','Levis','Nike','Adidas']" v-bind:key="el">
      <span class="list-field">{{ el }}</span>
      <span class="list-field">Collection</span>
      <span class="list-field explore">
        <a href="#" class="explore-link">Explore <span role="img" aria-label="Magnifying Glass">&nbsp;&#128269;</span></a>
      </span>
      <span class="list-field">Amount</span>
      <div class="list-buttons">
        <button class="list-button copy-button">
          <span role="img" aria-label="Copy">&#128203;</span>
        </button>
        <button class="list-button view-button">View</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NftTokenComponent"
}
</script>

<style scoped>
@import "../../styles/NftToken.css";
</style>