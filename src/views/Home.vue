<template>
  <div class="home">
    <div class="home-tite text-center">
      <h1 class="my-5 font-diablo">Diablo 3 Profile Finder</h1>
      <p class="lead text-muted">
        Enter your
        <em>
          <a href="https://eu.battle.net/support/es/article/75767" target="_blank" title="Format: YourProfile#1234">battle-tag</a>
        </em>
        and select your region to see your profile!
      </p>
      <hr class="mt-5">
    </div>

    <div class="search-form my-5">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <b-form @submit.prevent="onSubmit">
            <b-form-group
              id="input-group-1"
              label="BattleTag:"
              label-for="input-text"
              description="Format: YourProfile#1234"
            >
              <b-form-input
                id="input-text"
                v-model="form.battleTag"
                type="text"
                required
                placeholder="BatleTag"
              />
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Region:"
              label-for="input-region"
            >
              <b-form-select
                id="input-region"
                v-model="form.region"
                size=lg
                :options="regions"
                required
              />
            </b-form-group>
            <div class="d-flex justify-content-end mt-5">
              <b-button
                type="submit"
                variant="primary"
                size="lg"
                >
                Submit
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      form: {
        battleTag: '',
        region: 'eu',
      },
      regionsArray: [
        'us',
        'eu',
        'kr',
        'tw',
      ],
    }
  },
  computed: {
    regions() {
      return this.regionsArray.map(region => ({value: region, text: region.toUpperCase()}))
    }
  },
  methods: {
    onSubmit() {
      let { region, battleTag } = this.form
      const profile = battleTag.replace('#', '-')
      console.log(region, profile, 'params')

      this.$router.push({
        name: 'Profile',
        params: {
          region,
          profile,
        }
      })
    }
  }
}
</script>
