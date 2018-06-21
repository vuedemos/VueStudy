<template>
  <div id="app">
    <loading 
      :dot-color = "dotColor" 
      :dot-nums = "dotNums"
      :loading-size = "loadingSize"
      :dot-radius = "dotRadius"
      :style = "changeStyle"></loading>

    <div class="control">
      <div class="control-form">
        <label for="dotNums">圆点个数:</label>
        <input type="number" step="1" min="10" max="20" id="dotNums" v-model.number="dotNums"   />
      </div>
      <div class="control-form">
        <label for="loadingSize">容器尺寸:</label>
        <input type="range" min="50" max="200" step="1" id="loadingSize" v-model.number="loadingSize"  />
      </div>
      <div class="control-form">
        <label for="dotRadius">圆点半径:</label>
        <input type="range" min="8" max="30" step="1" id="dotRadius" v-model.number="dotRadius"  />
      </div>
      <div class="control-form">
        <label for="dotColor">圆点颜色:</label>
        <input type="color" v-model="dotColor" id="dotColor"  />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './components/Loading'

export default {
  name: 'App',
  components: {
    Loading
  },
  data () {
    return {
      loadingSize: 168,
      dotRadius: 20,
      dotNums: 12,
      dotColor: '#ff3366'
    }
  },
  computed: {
    changeStyle: function () {
      let rootEle = document.documentElement

      rootEle.style.setProperty('--loadingSize', `${this.loadingSize}px`)
      rootEle.style.setProperty('--dotRadius', `${this.dotRadius}px`)
      rootEle.style.setProperty('--dotColor', this.dotColor)
    }
  }
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > div {
    margin: 0 2rem;
  }
}
</style>
