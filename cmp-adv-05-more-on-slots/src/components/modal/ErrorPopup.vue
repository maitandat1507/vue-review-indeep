<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  methods: {
    //
  }
}
</script>

<style scoped>
dialog {
  margin: 0 auto;
  width: 200px;
  height: 100px;
  text-align: center;
  position: fixed;
  top: 20vh;
}
</style>