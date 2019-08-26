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
        Third tab content
      </tab-panel>
    </tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      myDataVariable: ''
    }
  },
  methods: {
    clickMe () {},
    submitMe () {},
    onChangeEventHandler () {}
  }
}
</script>

<style lang="scss" scoped>
</style>
