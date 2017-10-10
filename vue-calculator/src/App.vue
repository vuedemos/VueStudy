<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/calculator'

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>

<style>
  body {
    background: linear-gradient(to right, #85D8CE, #085078); 
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
