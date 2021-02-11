<template>
  <span>
    <h2 class="font-diablo my-4">Stats</h2>
      <div class="stats d-flex flex-column bg-dark p-3">
        <Item
          class="mb-3"
          name="skull"
          color="#9E9E9E"
          :data="{ value: kills.monsters, text: 'Lifetime Kills' }"
        />
        <Item
          class="mb-3"
          name="crown"
          color="#ffc107"
          :data="{ value: kills.elites, text: 'Elite Kills' }"
        />
        <Item
          class="mb-3"
          name="dungeon"
          color="#795548"
          :data="{ value: paragonLevel, text: 'Paragon Level' }"
        />
      </div>
  </span>
</template>

<script>
import Item from '@/components/Stats/Item'

export default {
  props: [ 'kills', 'paragonLevel' ],
  components: { Item },

}
</script>

<style>

</style>