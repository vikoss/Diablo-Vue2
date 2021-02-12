<template>
  <div class="hero-view">
    <Spinner v-if="isLoading" />

    <template v-else>
      <HeroDetailHeader :detail="detailHeader" />

      <BRow>
        <BCol>
          <HeroSkills v-if="hero" :skills="hero.skills"></HeroSkills>
        </BCol>
      </BRow>
    </template>

  </div>
</template>

<script>
import setError from '@/mixins/setError'
import Spinner from '@/components/Spinner'
import { getApiHero, getApiDetailedHeroItems } from '@/api/profile'
import HeroDetailHeader from '@/components/Hero/HeroDetailHeader'
import HeroSkills from '@/components/Hero/HeroSkills'

export default {
  name: 'Hero',
  mixins: [ setError ],
  components: { Spinner, HeroDetailHeader, HeroSkills },
  data() {
    return {
      isLoading: false,
      hero: null,
      items: null,
    }
  },
  computed: {
    detailHeader() {
      const {
        name,
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    },
  },
  created() {
    this.isLoading = true
    const { region, profile: account, hero: heroid } = this.$route.params

    Promise.all([
      getApiHero({ region, account, heroid }),
      getApiDetailedHeroItems({ region, account, heroid }),
    ])
    .then(([{ data:hero }, { data,items }]) => {
      this.hero = hero
      this.items = items
    })
    .catch(error => {
      const errObj = {
        routeParams: this.$route.params,
        message: error.message
      }

      if (error.response) {
        errObj.data = error.response.data
        errObj.status = error.response.status
      }

      this.setApiErr(errObj)
      this.$router.push({ name: 'Error' })
    })
    .finally(() => this.isLoading = false)
  },
}
</script>