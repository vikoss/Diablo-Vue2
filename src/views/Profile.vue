<template>
  <div>
    <h1>Profile View</h1>
    <Spinner v-if="isLoading"/>
    <div class="grid-container">
      <div class="grid-item item-left">

        <TopHeroes :topHeroes="topHeroes" />
        <HeroesList :heroes="heroesList "/>
        <Progression :progression="progressionData "/>

      </div>
      <div class="grid-item item-right">

        <div class="multi-stats pl-lg-4">
          <hr class="bg-white mt-5 d-lg-none">
          <Stats :kills="statsData.kills" :paragonLevel="statsData.paragonLevel" />
          <TimePlayed :timePlayed="timePlayed" />
        </div>

      </div>
    </div>
    <Artisans :artisans="artisans" />
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/services/search'
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
      profileData: null,
    }
  },
  created() {
    this.isLoading = true
    this.fetchData()
  },
  methods: {
    fetchData() {
      const { region, profile: account } = this.$route.params
      console.log(region , account)

      getApiAccount({region, account})
        .then(({data}) => {
          this.profileData = data
          console.log(data)
        })
        .catch(error => {
          console.log(error)
          const errorObj = {
            routeParams: this.$route.params,
            message: error.message
          }
          if (error.response) {
            errorObj.data = error.response.data
            errorObj.status = error.response.status
          }
          console.log(errorObj)
          this.setApiError()
          this.$router.push({name: 'Error'})
        })
        .finally(() => this.isLoading = false)
    },
  },
  computed: {
    isNotNullHeroes() {
      return !!this.profileData
    },
    hasHeroes() {
      return this.isNotNullHeroes ? this.profileData.heroes.length > 0 : false
    },
    topHeroes() {
      return this.isNotNullHeroes ? this.profileData.heroes.slice(0, 3) : []
    },
    hasHeroesList() {
      return this.isNotNullHeroes ? this.profileData.heroes.length > 3 : false
    },
    heroesList() {
      return this.isNotNullHeroes ? this.profileData.heroes.slice(3, this.profileData.heroes.length) : []
    },
    statsData() {
      const { paragonLevel, kills, timeplayed } = this.profileData
      return { paragonLevel, kills, timeplayed }
    },
    progressionData() {
      const { progression } = this.profileData
      return progression
    },
    timePlayed() {
      return Object.keys(this.profileData.timePlayed)
        .sort()
        .map(hero => {
          return new HeroData(
            hero,
            this.profileData.timePlayed[hero],
            hero,
          )
        })
    },
    artisans() {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore,

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