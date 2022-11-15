<template>
  <div>
    <figure>
      <img class="mx-auto" :src="iconPath" :alt="name" />
    </figure>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconPath = computed(() => new URL(`../assets/types/${props.name.toLowerCase()}.svg`, import.meta.url).href);
</script>
<style lang="scss" scoped>
figure {
  img {
    width: 50px;
    opacity: 65%;

    &.not-very-effective {
      // TODO: use filter: brightness();
    }

    &.no-effect {
      // TODO: use filter: brightness();
    }

    &.normal {
      opacity: 65%;
    }

    &.super-effective {
      opacity: 100%;
    }
  }
}
</style>
