<template>
  <h3>{{tab_title}}</h3>
  <input type="text" v-model="name">
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      name: '',
      tab_title: "This is Tab 1"
    }
  }
}
</script>
