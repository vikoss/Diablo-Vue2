<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">

        <b-navbar-brand :to="{ name: 'Home' }" class="hover-cursor-pointer">
          <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
          <span class="font-diablo ml-2">{{ title }}</span>
        </b-navbar-brand>

        <b-badge
          id="currentSeason"
          class="ml-auto"
          variant="secondary"
        >
          {{ currentSeason }}
        </b-badge>

        <b-tooltip target="currentSeason" triggers="hover" placement="left">
          <small>Current season</small>
        </b-tooltip>

      </b-navbar>
    </div>

    <div class="breadcrumbs-bar" v-if="showComponent">
      <b-breadcrumb :items="items" class="bg-transparent"/>
    </div>
  </div>
</template>

<script>
import listSeasons from '@/api/season'

export default {
  name: 'Header',
  data() {
    return {
        items: [],
        title: process.env.VUE_APP_TITLE,
        currentSeason: null
    }
  },
  computed: {
    showComponent() {
      return this.$route.meta.showBreadcrumb
    },
  },
  created() {
    this.fetchSeasons()
  },
  methods: {
    async fetchSeasons() {
      try {
        const { data } = await listSeasons('eu')
        this.currentSeason = data.current_season
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>