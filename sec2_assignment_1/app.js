const app = Vue.createApp({
  data() {
    return {
      name: 'Matt',
      age: 27,
      img: 'http://www.thepublic.in/wp-content/uploads/2020/09/Numerology-Number-9-Life-Path-Number-9-Birthday-Number-9-Name-Numerology-9-Birthday-Numerology-9-I-am-Number-9-Destiny-Number-9-Master-Number-9-Personality-Love-Numerology.jpg',
    }
  },
  methods: {
    randomNum() {
      const n = Math.random();
      return n;
    },
    calculateAge() {
      return this.age + 5;
    },
  },
})

app.mount("#assignment")