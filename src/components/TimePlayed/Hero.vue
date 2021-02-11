<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter">{{ hero.hero }}</h5>
      <span>
        <BBadge class="w-50p">{{ hero.time }}</BBadge>
      </span>
    </div>
    <BProgress :max="1" height="14px" class="mb-3 rounded-0">
      <BProgressBar :value="hero.time" :class="classHero">
        {{ hero.hero }}
      </BProgressBar>
    </BProgress>
  </div>
</template>

<script>
import HeroData from '@/utils/typeHeroData'

export default {
  props: {
    hero: {
      type: HeroData,
      required: true,
    },
  },
  computed: {
    classHero() {
      return `hero-bg-color-${this.hero.slug}`
    },
  },

}
</script>

<style lang="scss" scoped>

$heroes: barbarian, crusader, demon-hunter, monk, necromancer, witch-doctor, wizard;
$bgs: #4e1c16, #795548, #F44336, #ff9800, #00bcd4, #8bc34a, #3f51b5;

@for $bg from 1 through length($heroes) {
  .hero-bg-color-#{nth($heroes, $bg)} {
    background-color: nth($bgs, $bg);
  }
}

</style>