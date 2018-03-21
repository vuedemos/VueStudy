<template>
  <div id="app">
    <div class="form">
      <input type="range" min="0" max="50" v-model="notchSize" @input="change">
    </div>
    <notch-box :child-notch-size = notchSize ></notch-box>
  </div>
</template>

<script>
import NotchBox from './components/NotchBox'

export default {
  name: 'App',
  components: {
    NotchBox
  },
  data () {
    return {
      notchSize: '20'
    }
  },
  methods: {
    change: function (e) {
      this.notchSize = e.target.value
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto:700');

body {
  background-color: #777;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAU0lEQVQIHQXBwRGDIBAAwO2/AMcCDHAcPjIRxjJ8Je1kl1uqUgphsWu6w0sIG6npLpcUBql4e/wsVRKabrkNTacIYbMrwsF06rqUhsnXVKVT+Hj+Ue4rPSONk4kAAAAASUVORK5CYII=);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Lato', sans-serif;
  line-height: 1.4;
  color: #ffdebd;
  margin: 1rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  color: white;
  margin: 0 0 1rem 0;
  font-family: 'Roboto', sans-serif;
}
p {
  margin: 0;
}

input {
  position: absolute;
  top: 20px;
  left: 5vw;
  width: 90vw;
}
</style>
