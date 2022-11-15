<template>
  <div class="grid grid-cols-4 gap-y-4 mt-14 mx-2">
    <TypeTile class="col-auto" v-for="(key, index) in Object.keys(Types)" :key="index" :name="key" />
  </div>
</template>
<script setup lang="ts">
import TypeTile from "@/components/TypeTile.vue";
import { Types } from "@/utils/enums";
</script>
<style lang="scss" scoped></style>
