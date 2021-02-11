<template>
  <div class="single-stat w-100">
    <BCard class="text-body">
      <div class="d-flex">
        <div class="d-block ico-cont">
          <div class="text-center">
            <font-awesome-icon :icon="name" class="fa-3x" :style="{color: color}"></font-awesome-icon>
          </div>
        </div>
        <div class="flex-grow-1">
          <h4 class="font-weight-bold mb-0">{{ data.value | formatNumber }}</h4>
          <span class="text-muted font-weight-light mb-0">{{ data.text }}</span>
        </div>
      </div>
    </BCard>
  </div>
</template>

<script>
import formatNumber from '@/filters/numeral'

export default {
  props: [ 'name', 'color', 'data' ],
  filters: { formatNumber },
}
</script>

<style lang="scss">

.single-stat {
  .ico-cont {
    width: 80px;
  }
}

</style>