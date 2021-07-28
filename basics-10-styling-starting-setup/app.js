const app = Vue.createApp({
  data() {
    return {
      a: {},
    }
  },
  methods: {
    toggleBox(i) {
      this.a['selectedBox' + i] = !this.a['selectedBox' + i]
    },
  }
})

app.mount("#styling")