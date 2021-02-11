<template>
  <div class="progression-bosses pt-4 mt-5 border-top">
    <h2 class="font-diablo mb-4">Progression</h2>
    <BRow>
      <BCol v-for="(val, key) in progression" :key="key" class="col-12 col-md-2">
        <div class="bg-dark rounded mb-2">
          <Act :act="{actNum: key, value: val}"/>
        </div>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import Act from '@/components/Progression/Act'

export default {
  components: { Act },
  props: [ 'progression' ],
}
</script>

<style>

</style>