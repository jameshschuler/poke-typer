<template>
  <main
    class="container mx-auto mt-6 flex items-center justify-center flex-col"
  >
    <p class="mb-6">Show me which types to use and which to avoid</p>

    <fieldset>
      <label class="" for="type">Pokémon Type</label>
      <select
        id="type"
        class="mt-1 p-2 w-xs block mx-auto rounded-md"
        v-model="selectedType"
        @change="handleTypeChange"
      >
        <option disabled value="">Select a Type</option>
        <option v-for="k in Object.keys(Types)" :value="k">{{ k }}</option>
      </select>
    </fieldset>

    <!-- <select v-model="selectedPosition" @change="handlePositionChange">
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select> -->

    <TileContainer />
  </main>
</template>
<script setup lang="ts">
import { test } from "@/data";
import { Types } from "@/utils/enums";
import { ref } from "vue";
import TileContainer from "./TileContainer.vue";

const selectedType = ref<string>("");
function handleTypeChange() {
  console.log("handleTypeChange");
}

console.log(test(Types.Dark));

const selectedPosition = ref<string>("attack");
function handlePositionChange() {
  console.log("handlePositionChange");
  // TODO: upgrade grid
  // Each cell in grid has a type (fire, water, etc.) and state (super-effective, not very effective, etc.)
  // TODO: need to keep track of grid state
  // How to calculate current state?
}
</script>
<style lang="scss" scoped></style>
