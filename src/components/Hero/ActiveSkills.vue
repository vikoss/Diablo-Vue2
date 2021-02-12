<template>
  <div class="active-skills">

    <div class="skills mt-5">
      <b-row>
        <b-col v-for="(skill, idx) in skills" :key="idx" lg="3" md="6" sm="12">
          <ActiveSkill :skill="skill.skill" :rune="skill.rune" :slot-num="idx+1"/>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import ActiveSkill from './ActiveSkill'

export default {
  components: { ActiveSkill },
  props: [ 'skills' ],
}
</script>