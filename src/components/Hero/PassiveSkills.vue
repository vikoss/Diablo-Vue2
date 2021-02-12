<template>
  <div class="passive-skills">
    <div class="skills mt-5">
      <b-row>
        <b-col v-for="(skill, idx) in skills" :key="idx" cols="12" lg="3" md="6">
          <PassiveSkill :skill="skill.skill"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PassiveSkill from './PassiveSkill'

export default {
  components: { PassiveSkill },
  props: [ 'skills' ],
}
</script>