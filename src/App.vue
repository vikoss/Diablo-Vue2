<template>
  <div id="app">
    <LoadingLayout v-if="isLoading"/>
    <MainLayout v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadingLayout from './layouts/Loading'
import MainLayout from './layouts/Main'
import store from '@/store'

export default {
  name: 'App',
  components: { MainLayout, LoadingLayout },
  computed: {
    ...mapState('loading', ['isLoading']),
  },
  created() {
    store.dispatch('oauth/getToken')
  },
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
