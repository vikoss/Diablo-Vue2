<template>
  <div class="hero-ico d-flex align-items-center hover-cursor-pointer" v-on:click="goToHero(hero.id)">
    <span class="hero-image border" :class="heroClass"/>
    <span class="hero-name ml-2 font-weight-bold" :class="{ 'text-danger': hero.hardcore }">
      {{ hero.name }}
    </span>
    <img v-if="hero.seasonal" src="@/assets/img/leaf.png" alt="Green leaf" width="12px" class="ml-2">
  </div>
</template>

<script>
import gotToHero from '@/mixins/goToHero'

export default {
  props: [ 'hero' ],
  mixins: [ gotToHero ],
  computed: {
    heroClass() {
      const gender = this.hero.gender === 1 ? 'female' : 'male'
      const hardcore = this.hero.hardcore ? 'border-danger' : ''
      return `hero-${this.hero.classSlug} ${gender} ${hardcore}`
    },
  },
}
</script>

<style lang="scss">

.hero-ico {
  vertical-align: middle;

  .hero-image {
    width: 30px;
    height: 26px;
    display: inline-block;
    background-size: 210%;
  }

  .hero-name {
    height: 24px;
    display: inline-block;
  }
}

</style>