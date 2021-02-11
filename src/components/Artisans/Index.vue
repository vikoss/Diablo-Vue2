<template>
  <div class="artisan-list">
    <hr class="bg-light my-5">
    <h3 class="font-diablo">Artisans</h3>
    <BRow>
      <BCol lg="4" v-for="artisan in artisansData" :key="artisan.name">
        <Artisan :artisan="artisan" />
      </BCol>
    </BRow>
  </div>
</template>

<script>
import Artisan from '@/components/Artisans/Artisan'

export default {
  components: { Artisan },
  props: [ 'artisans' ],
  computed: {
    artisansData() {
      return [
        {
        name: 'blacksmith',
        icon: 'hammer',
        emoji: '⚒',
        color: '#ffb74d',
        normal: this.artisans.blacksmith,
        hardcore: this.artisans.blacksmithHardcore
      },
      {
        name: 'jeweler',
        icon: 'gem',
        emoji: '💎',
        color: '#4dd0e1',
        normal: this.artisans.jeweler,
        hardcore: this.artisans.jewelerHardcore
      },
      {
        name: 'mystic',
        icon: 'hat-wizard',
        emoji: '🎂',
        color: '#ba68c8',
        normal: this.artisans.mystic,
        hardcore: this.artisans.mysticHardcore
      }
      ]
    },
  },
}
</script>