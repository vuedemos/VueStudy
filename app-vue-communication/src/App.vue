<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ChildComponent 
      :professional = "professional"
      :name = "name"
      @one.native = "triggerOne"
      @two = "triggerTwo"
    />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  data() {
    return {
      professional:  '屌丝码农',
      name:'大漠'
    }
  },
  components: {
    ChildComponent
  },
  methods: {
    triggerOne () {
      console.log('one')
    },
    triggerTwo () {
      console.log('two')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
