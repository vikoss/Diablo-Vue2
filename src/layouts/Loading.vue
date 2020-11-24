<template>
  <div class="loading-layout">
    <Spinner/>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'

export default {
  name: 'LoadingLayout',
  components: { Spinner }
}
</script>