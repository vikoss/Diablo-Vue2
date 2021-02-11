<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <BTable
      dark
      :items="heroes"
      :fields="fields"
      hover
      small
      striped
      stacked="sm"
    >
      <template v-slot:cell(name)="data">
        <SlotName :hero="data.item"/>
      </template>

      <template v-slot:cell(class)="data">
        <SlotClass :hero="data.item"/>
      </template>

      <template v-slot:cell(kills)="data">
        <SlotKills :kills="data.item.kills.elites"/>
      </template>
    </BTable>
  </div>
</template>

<script>
import formatNumber from '@/filters/numeral'
import SlotName from '@/components/HeroesList/SlotName'
import SlotClass from '@/components/HeroesList/SlotClass'
import SlotKills from '@/components/HeroesList/SlotKills'

export default {
  props: [ 'heroes' ],
  filters: { formatNumber },
  components: { SlotName, SlotClass, SlotKills },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        },
      ],
    }
  },
}
</script>
