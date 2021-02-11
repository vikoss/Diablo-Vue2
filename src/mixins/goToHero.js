export default {
  methods: {
    goToHero(hero) {
      const { region, profile } = this.$route.params
      this.$router.push({ name: 'Hero', params: { region, profile, hero } })
    }
  }
}