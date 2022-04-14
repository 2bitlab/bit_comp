<template>
  <div><{{ compName }} /></div>
</template>

<script lang="ts">
import { {{compName}} } from 'bit_comp'
import { ref } from 'vue-demi'

export default {
  name: '{{compName}}BaseDemo',
  components: {
    {{compName}}
  }
}
</script>
