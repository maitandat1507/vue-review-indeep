const app = Vue.createApp({
  data() {
    return {
      userOutput: '',
      userOutput2: '',
    }
  },
  methods: {
    showAlert() {
      alert('Hohoho')
    },
    registerUserInput(event) {
      this.userOutput = event.target.value
    },
    regisOnlyEnter(event){
      this.userOutput2 = event.target.value
    }
  }
})

app.mount('#assignment')