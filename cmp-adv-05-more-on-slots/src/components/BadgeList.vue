<template>
  <section>
    <base-card>
      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
    <base-card>
      <button @click="selectCmp('Tab1')">Tab 1</button>
      <button @click="selectCmp('Tab2')">Tab 2</button>
      <keep-alive>
        <component :is="selectedCmp"></component>
      </keep-alive>
    </base-card>
  </section>
</template>

<script>
import Tab1 from './tab/Tab1.vue';
import Tab2 from './tab/Tab2.vue';

export default {
  components: {
    Tab1,
    Tab2,
  },
  data() {
    return {
      selectedCmp: 'Tab1',
    }
  },
  methods: {
    selectCmp(cmp) {
      this.selectedCmp = cmp
    }
  },
}
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>