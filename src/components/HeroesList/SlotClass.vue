<template>
  <div class="hero-name-level">
    <span>
      {{ hero.class }}
    </span>
    <span>
      .
    </span>
    <span class="text-monospace font-weight-bold">
      {{ hero.level }}
    </span>
  </div>
</template>

<script>
export default {
  props: [ 'hero' ],
}
</script>