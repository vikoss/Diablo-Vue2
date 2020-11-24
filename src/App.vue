<template>
  <div id="app">
    <h1>{{ isLoading }}</h1>
    <LoadingLayout v-if="isLoading"/>
    <MainLayout v-else/>
    <h1 v-if="isLoading" class="font-diablo">loading</h1>
    <h1 v-else>not loadig</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadingLayout from './layouts/Loading'
import MainLayout from './layouts/Main'

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadingLayout,
  },
  computed: {
    ...mapState('loading', ['isLoading'])
  },
  created() {
    this.$store.dispatch('oauth/getToken', null, { root: true })
  }

}
</script>

<style lang="scss">
#app {
  color: #ffffff;
  background-color: #15202b;
  padding: 60px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
