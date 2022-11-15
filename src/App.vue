<template>
  <Header />
  <Container />
  <Footer />
</template>
<script setup lang="ts">
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  main {
    flex-grow: 1;
  }

  header,
  main,
  footer {
    flex-shrink: 0;
  }
}
</style>
