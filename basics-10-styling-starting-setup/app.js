const app = Vue.createApp({
  data() {
    return {
      a: {},
    }
  },
  methods: {
    toggleBox(i) {

      // dynamic variable
      // @ref: https://stackoverflow.com/questions/12149233/concatenate-a-dynamic-variable-name-in-javascript
      this.a['selectedBox' + i] = !this.a['selectedBox' + i]
    },
  }
})

app.mount("#styling")