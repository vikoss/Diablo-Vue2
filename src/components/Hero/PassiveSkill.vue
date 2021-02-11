<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <!-- Imagen Habilidad Pasiva -->
      <img :src="skillUrl" :alt="skill.name">
    </div>

    <div>
      <!-- Nombre -->
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  props: [ 'skill' ],
  computed: {
    skillUrl() {
      const sizes = [ 21, 42, 64 ]
      return `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/${this.skill.icon}.png`
    },
  },
}
</script>