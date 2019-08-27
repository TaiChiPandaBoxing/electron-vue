<template>
  <div>
    <tabs>
      <tab-panel name="Tab1">
        <v-button @click="clickMe">click</v-button>
        <v-button disabled>disabled</v-button>
        <v-button html-type="submit" @click="submitMe">submit</v-button>
        <v-button size="small">small</v-button>
        <v-button size="small">small</v-button>
        <hr />
        <v-button type="primary">primary</v-button>
        <v-button type="success">success</v-button>
        <v-button type="loading">loading</v-button>
        <v-button type="warning">warning</v-button>
        <v-button type="info">info</v-button>
        <v-button type="danger">danger</v-button>
      </tab-panel>
      <tab-panel name="Tab2">
        <toggle-button @change="onChangeEventHandler"/>
        <toggle-button v-model="myDataVariable"/>
        <toggle-button :value="false" color="#82C7EB" :sync="true" :labels="true"/>
        <toggle-button :value="true" :labels="{checked: 'Foo', unchecked: 'Bar'}"/>
      </tab-panel>
      <tab-panel name="Tab3">
        <vue-good-table
          @on-selected-rows-change="selectionChanged"
          :columns="columns"
          :rows="rows"
          :selectOptions="{
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
          }"/>
      </tab-panel>
    </tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import { VueGoodTable } from '@/components/Table'
export default {
  components: {
    VueGoodTable
  },
  data () {
    return {
      myDataVariable: '',
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM Do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 }
      ]
    }
  },
  methods: {
    clickMe () {},
    submitMe () {},
    onChangeEventHandler () {},
    selectionChanged () {}
  }
}
</script>

<style lang="scss" scoped>
</style>
