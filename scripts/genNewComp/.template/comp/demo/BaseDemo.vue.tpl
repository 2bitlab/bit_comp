<template>
  <div><{{ compName }} /></div>
</template>

<script lang="ts">
import { {{compName}} } from 'bit_comp'

export default {
  name: '{{compName}}BaseDemo',
  components: {
    {{compName}}
  }
}
</script>
