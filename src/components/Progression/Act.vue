<template>
  <div class="d-flex flex-column" :title="actTitle">
    <div class="boss-img pt-2">
      <div class="act" :class="actClass"></div>
    </div>
    <p class="d-block text-center m-0 lead font-weight-bold">{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  props: [ 'act' ],
  data() {
    return {
      acts: {
        act1: 'I',
        act2: 'II',
        act3: 'III',
        act4: 'IV',
        act5: 'V',
      }
    }
  },
  computed: {
    fullName() {
      return `Act ${this.acts[this.act.actNum]}`
    },
    actClass() {
      const status = this.act.value ? 'done' : 'pending'
      return `${this.act.actNum} ${status}`
    },
    actTitle () {
      return this.act.value
        ? 'Act completed! 💃'
        : 'Act uncompleted 🙈'
    },
  },
}
</script>