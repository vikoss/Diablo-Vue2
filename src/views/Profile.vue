<template>
  <div>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/services/search'

export default {
  name: 'Profile',
  mixins: [ setError ],
  data() {
    return {
      profileData: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const { region, account } = this.$route.params

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
    }
  }
}
</script>