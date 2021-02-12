<template>
  <div>
    <Spinner v-if="isLoading"/>
    <div v-else class="grid-container">
      <div class="grid-item item-left">

        <TopHeroes :topHeroes="topHeroes" />
        <HeroesList :heroes="heroesList "/>
        <Progression :progression="progression "/>

      </div>
      <div class="grid-item item-right">

        <div class="multi-stats pl-lg-4">
          <hr class="bg-white mt-5 d-lg-none">
          <Stats :kills="kills" :paragonLevel="paragonLevel" />
          <TimePlayed :timePlayed="timePlayed" />
        </div>

      </div>
    </div>
    <Artisans v-if="profile" :artisans="artisans" />
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/profile'
import Spinner from '@/components/Spinner'
import formatNumber from '@/filters/numeral'
import TopHeroes from '@/components/TopHeroes/Index'
import HeroesList from '@/components/HeroesList/Index'
import Progression from '@/components/Progression/Index'
import Stats from '@/components/Stats/Index'
import TimePlayed from '@/components/TimePlayed/Index'
import HeroData from '@/utils/typeHeroData'
import Artisans from '@/components/Artisans/Index'

export default {
  name: 'Profile',
  components: { Spinner, TopHeroes, HeroesList, Progression, Stats, TimePlayed, Artisans },
  mixins: [ setError ],
  filters: { formatNumber },
  data() {
    return {
      isLoading: false,
      profile: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { region, profile: account } = this.$route.params
      this.isLoading = true
      try {
        const { data } = await getApiAccount({ region, account })
        this.profile = data
      } catch (error) {
        console.error(error)
        const errorObj = {
          routeParams: this.$route.params,
          message: error.message
        }
        if (error.response) {
          errorObj.data = error.response.data
          errorObj.status = error.response.status
        }
        console.log(errorObj)
        this.setApiError(errorObj)
        this.$router.push({name: 'Error'})
      }
      this.isLoading = false
    },
  },
  computed: {
    topHeroes() {
      return this.profile.heroes.slice(0, 3)
    },
    heroesList() {
      return this.profile.heroes.slice(3, this.profile.heroes.length)
    },
    kills() {
      return this.profile.kills
    },
    paragonLevel() {
      return this.profile.paragonLevel
    },
    progression() {
      return this.profile.progression
    },
    timePlayed() {
      return Object.keys(this.profile.timePlayed)
        .sort()
        .map(hero => {
          return new HeroData(
            hero,
            this.profile.timePlayed[hero],
            hero,
          )
        })
    },
    artisans() {
      return {
        blacksmith: this.profile.blacksmith,
        blacksmithHardcore: this.profile.blacksmithHardcore,
        jeweler: this.profile.jeweler,
        jewelerHardcore: this.profile.jewelerHardcore,
        mystic: this.profile.mystic,
        mysticHardcore: this.profile.mysticHardcore,

      }
    },
  }
}
</script>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr;

  .grid-item {
    &.item-left {
      grid-column: span 1;
    }

    &.item-right {
      grid-column: span 1;
    }
  }

}
@media (min-width: 992px) {
  .grid-container {
    display: grid;

    grid-template-columns: repeat(6, 1fr);
    .grid-item {
      &.item-left {
        grid-column: span 4;
      }

      &.item-right {
        grid-column: span 2;
      }
    }
  }
}

.progression-bosses {
  .boss-img {
    display: block;
  }

  .act {
    margin: 0 auto;
    width: 50px;
    height: 55px;
  }
}
</style>