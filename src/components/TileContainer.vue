<template>
  <div class="grid grid-cols-4 gap-y-4 mt-14 mx-2 max-w-screen-sm w-full">
    <TypeTile
      class="col-auto"
      v-for="(tile, index) in grid"
      :key="index"
      :name="tile.name"
      :state="tile.state"
    />
  </div>
</template>
<script setup lang="ts">
import TypeTile from "@/components/TypeTile.vue";
import { GridTile } from "@/data";
import { PropType } from "vue";

defineProps({
  grid: {
    type: Array as PropType<GridTile[]>,
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
