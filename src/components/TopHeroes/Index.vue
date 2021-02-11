<template>
  <div class="top-heroes">
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <BRow>
      <BCol sm="4" v-for="hero in topHeroes" :key="hero.id">
        <Hero :hero="hero"/>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import Hero from '@/components/TopHeroes/Hero'

export default {
  props: [ 'topHeroes' ],
  components: { Hero },
}
</script>