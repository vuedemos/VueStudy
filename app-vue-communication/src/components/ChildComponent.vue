<template>
  <div class="child-component">
    <h1>我是一个 {{ professional }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    professional: {
      type: String,
      default: '码农'
    }
  },
  created () {
    console.log(this.$attrs, this.$listeners)
    this.$listeners.two()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
