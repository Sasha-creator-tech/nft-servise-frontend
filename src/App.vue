<template>
  <div id="app">
    <header-component/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  }
}
</script>

<style>
@import "styles/App.css";
</style>
