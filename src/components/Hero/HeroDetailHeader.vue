<template>
  <BRow class="hero-detail-header my-5">
    <BCol cols="12">

      <div class="d-flex justify-content-center mb-3">
        <div class="hero-detail-avatar" :class="heroClass"></div>
      </div>

      <div class="text-center">
        <h1 v-diablo:bone.top.bottom class="text-truncate">{{ detail.name }}</h1>
        <div class="text-monospace">
          <small>
            <span>{{ detail.level }}</span>
            <span class="text-info">
              <span class="text-white">.</span>
              ({{ detail.paragonLevel }})
            </span>
            <span>. {{ detail.classSlug }}</span>
            <span v-if="detail.seasonal" class="text-success">. Seasonal</span>
            <span v-if="detail.hardcore" class="text-danger">. Hardcore</span>
          </small>
          <div>
            <small class="text-muted">Season created:</small>
            <BBadge>{{ detail.seasonCreated }}</BBadge>
          </div>
        </div>
        <hr>
      </div>
    </BCol>
  </BRow>
</template>

<script>
export default {
  props: [ 'detail' ],
  computed: {
    heroClass() {
      const gender = this.detail.gender === 0 ? 'male' : 'female'
      return `hero-${this.detail.classSlug} ${gender}`
    },
  },

}
</script>

<style lang="scss">

.hero-detail-avatar {
  width: 138px;
  height: 105px;
  background-size: 280px;
}

.text-bone {
  color: #e8dcc2;
}

</style>