<template>
  <div class="hero-view">
    <Spinner v-if="isLoadingHero" />
    <HeroDetailHeader v-if="hero" :detail="detailHeader" />

    <BRow>
      <BCol md="12" lg="8" order-lg="2">
        <Spinner v-if="isLoadingItems"></Spinner>
      </BCol>

      <BCol>
          <HeroSkills v-if="hero" :skills="hero.skills"></HeroSkills>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import Spinner from '@/components/Spinner'
import { getApiHero, getApiDetailedHeroItems } from '@/services/search'
import HeroDetailHeader from '@/components/Hero/HeroDetailHeader'
import HeroSkills from '@/components/Hero/HeroSkills'

export default {
  name: 'Hero',
  mixins: [ setError ],
  components: { Spinner, HeroDetailHeader, HeroSkills },
  data() {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
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
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { region, profile: account, hero: heroid } = this.$route.params

    getApiHero({ region, account, heroid })
    .then(({ data }) => {
      this.hero = data
    })
    .catch(error => console.log(error))
    .finally(() => this.isLoadingHero = false)

    getApiDetailedHeroItems({ region, account, heroid })
    .then(({ data }) => {
      this.items = data
    })
    .catch(error => console.log(error))
    .finally(() => this.isLoadingItems = false)
  },
}
</script>