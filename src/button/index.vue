<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.button {
  padding: 6px 24px;
}
</style>
