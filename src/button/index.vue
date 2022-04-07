<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, isVue2, isVue3 } from 'vue-demi';

export default defineComponent({
  name: 'Button',
  setup() {
    console.log('Button isVue2', isVue2);
    console.log('Button isVue3', isVue3);
    return {};
  },
});
</script>

<style scoped>
.button {
  padding: 6px 24px;
}
</style>
