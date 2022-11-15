<template>
  <main class="container mx-auto mt-6">
    <select class="p-2 w-xs block mx-auto rounded-md" v-model="selectedType" @change="handleTypeChange">
      <option disabled value="">Select a Type</option>
      <option v-for="k in Object.keys(Types)" :value="k">{{ k }}</option>
    </select>

    <!-- <select v-model="selectedPosition" @change="handlePositionChange">
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select> -->

    <TileContainer />
  </main>
</template>
<script setup lang="ts">
import { Types } from "@/utils/enums";
import { ref } from "vue";
import TileContainer from "./TileContainer.vue";

const selectedType = ref<string>("");
function handleTypeChange() {
  console.log("handleTypeChange");
}

const selectedPosition = ref<string>("attack");
function handlePositionChange() {
  console.log("handlePositionChange");
}
</script>
<style lang="scss" scoped></style>
