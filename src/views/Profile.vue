<template>
  <div>
    <h1>Profile View</h1>
    <Spinner v-if="isLoading"/>
    <div class="grid-container">
      <div class="grid-item item-left">

        <div class="top-heroes">
          <h2 class="my-4 font-diablo">Top Heroes</h2>
          <b-row>
            <b-col sm="4" v-for="hero in topHeroes" :key="hero.id">
              <Hero :hero="hero"/>
            </b-col>
          </b-row>
        </div>


        <HeroesTable :heroes="heroesList"/>

        <div class="progression-bosses pt-4 mt-5 border-top">
          <h2 class="font-diablo mb-4">Progression</h2>
          <b-row>
            <b-col v-for="(val, key) in profileData.progression" :key="key" class="col-12 col-md-2">
              <div class="bg-dark rounded mb-2">
                <Progression :act="{actNum: key, value: val}"/>
              </div>
            </b-col>
          </b-row>
        </div>

      </div>
      <div class="grid-item item-right">
        <h1>Derecha</h1>
      </div>
    </div>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/services/search'
import Spinner from '@/components/Spinner'
import formatNumber from '@/filters/numeral'
import Hero from '@/components/Hero'
import HeroesTable from '@/components/HeroesTable'
import Progression from '@/components/Progression'

export default {
  name: 'Profile',
  components: { Spinner, Hero, HeroesTable, Progression },
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
    heroesList () {
      return this.isNotNullHeroes ? this.profileData.heroes.slice(3, this.profileData.heroes.length) : []
    }
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