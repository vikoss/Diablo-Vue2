<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <BNav pills small>
      <BNavItem :active="!isPassiveSkillsActive" v-on:click="changeComponent('ActiveSkills')">Active</BNavItem>
      <BNavItem :active="isPassiveSkillsActive" v-on:click="changeComponent('PassiveSkills')">Passive</BNavItem>
    </BNav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  components: {
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills'),
  },
  props: [ 'skills' ],
  data() {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  computed: {
    componentProps() {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive() {
      return this.activeComponent === 'PassiveSkills'
    },
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component
    },
  },
}
</script>

<style>

</style>