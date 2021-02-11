<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <!-- Slot (identificador de skill) -->
      <span class="slot" :class="slotClass"/>
      <!-- La imagen · Skill URL -->
      <img :src="skillUrl" :alt="skill.name">
    </div>

    <div>
      <!-- Nombre de la habilidad -->
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <!-- Runa (si tiene) -->
      <small v-if="rune" class="rune-name text-muted" :title="rune.description">
        {{ rune.name }}
      </small>
    </div>

  </div>
</template>

<script>
export default {
  props: [ 'skill', 'rune', 'slotNum' ],
  computed: {
    skillUrl() {
      const sizes = [ 21, 42, 64 ]
      return `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/${this.skill.icon}.png`
    },
    slotClass() {
      return `slot-${this.slotNum}`
    },
  },

}
</script>

<style>

</style>