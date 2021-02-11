<template>
  <span>{{ kills | formatNumber }}</span>
</template>

<script>
import formatNumber from '@/filters/numeral'
export default {
  props: [ 'kills' ],
  filters: { formatNumber },

}
</script>