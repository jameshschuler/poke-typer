<template>
  <main
    class="container mx-auto mt-6 flex items-center justify-center flex-col"
  >
    <fieldset class="mb-6">
      <label for="position">Position</label>
      <select
        id="position"
        disabled="true"
        class="mt-1 p-2 w-xs block mx-auto rounded-md bg-gray-200"
        v-model="selectedPosition"
        @change="handlePositionChange"
      >
        <option value="attacking">Attacking</option>
        <option value="defending">Defending</option>
      </select>
    </fieldset>
    <fieldset>
      <label for="type">Pokémon Type</label>
      <select
        id="type"
        class="mt-1 p-2 w-xs block mx-auto rounded-md"
        v-model="selectedType"
        @change="handleTypeChange"
      >
        <option disabled value="">Select Type</option>
        <option v-for="k in Object.keys(Types)" :value="k">{{ k }}</option>
      </select>
    </fieldset>

    <TileContainer :grid="grid" />
  </main>
</template>
<script setup lang="ts">
import { generateInitialGrid, GridTile, typesData } from "@/data";
import { Effectiveness, Types } from "@/utils/enums";
import { ref } from "vue";
import TileContainer from "./TileContainer.vue";

const grid = ref<GridTile[]>(generateInitialGrid());
console.log(grid.value);

const selectedType = ref<string>("");
function handleTypeChange() {
  if (selectedType.value === "") {
    grid.value = generateInitialGrid();
    return;
  }

  const selectedTypeData = typesData.get(selectedType.value);

  grid.value = grid.value.map((tile: GridTile) => {
    const newState = selectedTypeData!.defense.get(tile.name);

    return {
      ...tile,
      state: newState ?? Effectiveness.Normal,
    } as GridTile;
  });

  console.log(grid.value);
}

const selectedPosition = ref<string>("attacking");
function handlePositionChange() {
  console.log("handlePositionChange");
}
</script>
<style lang="scss" scoped></style>
