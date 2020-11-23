<template>
  <div class="home">
    <h1>Home page</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('oauth/getToken', null, { root: true })
  }
}
</script>
