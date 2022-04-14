<template>
  <div>
    <p>
      <span style="padding: 0 16px 0 4px; font-size: 14px; color: #777"
        >点击次数:</span
      >
      <span>{{ count }}</span>
    </p>
    <Button @click="onClick">按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from 'bit_comp'
import { ref } from 'vue-demi'

export default {
  name: 'ButtonBaseDemo',
  components: {
    Button
  },
  setup() {
    const count = ref(0)
    function onClick() {
      count.value++
    }

    return {
      count,
      onClick
    }
  }
}
</script>
