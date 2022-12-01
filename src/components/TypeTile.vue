<template>
  <div>
    <figure>
      <img class="mx-auto" :class="state" :src="iconPath" :alt="name" />
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
  state: {
    type: String,
    required: true,
  },
});

const iconPath = computed(
  () =>
    new URL(`../assets/types/${props.name.toLowerCase()}.svg`, import.meta.url)
      .href
);
</script>
<style lang="scss" scoped>
figure {
  img {
    width: 50px;
    &.notveryeffective {
      filter: brightness(50%);
    }

    &.noeffect {
      filter: brightness(20%);
    }

    &.normal {
      filter: brightness(90%);
    }

    &.supereffective {
      filter: brightness(100%);
      box-shadow: 0 0 15px #2f6282;
      border-radius: 50%;
      width: 60px;
    }
  }
}
</style>
