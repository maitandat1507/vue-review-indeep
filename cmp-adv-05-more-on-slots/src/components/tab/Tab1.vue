<template>
  <h3>{{tab_title}}</h3>
  <input type="text" v-model="name">
  <button @click="verify()">Submit</button>
  <teleport to="body">
    <error-popup v-if="modalActive">
      <h3>Must type name!</h3>
      <button @click="modalActive = false">OK</button>
    </error-popup>
  </teleport>
</template>

<script>
import ErrorPopup from '../modal/ErrorPopup'

export default {
  components: {
    ErrorPopup,
  },
  data() {
    return {
      name: '',
      tab_title: "This is Tab 1",
      modalActive: false,
    }
  },
  methods: {
    verify() {
      if (this.name === '') {
        return this.modalActive = true
      } else {
        return this.modalActive = false
      }
    },
  }
}
</script>
