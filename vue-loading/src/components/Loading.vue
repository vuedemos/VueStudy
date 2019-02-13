<template>
  <div class="loading">
    <div v-for="(dotNum, index) in dotNums" :key="index" :style="dotTransform(index, dotNums)">
      <span :style="dotAnimation(index, dotNums)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loadingSize: {
      type: Number,
      required: true,
      default: 200
    },
    dotRadius: {
      type: Number,
      required: true,
      default: 24
    },
    dotColor: {
      type: String,
      required: true,
      default: '#ff3366'
    },
    dotNums: {
      type: Number,
      required: true,
      default: 10
    }
  },
  methods: {
    dotTransform: function (index, dotNums) {
      let rad = 2 * Math.PI / dotNums * index
      let dotX = Math.cos(rad) * this.loadingSize / 2
      let dotY = Math.sin(rad) * this.loadingSize / 2
      
      return {
        transform: `translate(${dotX}px,${dotY}px)`
      }
    },
    
    dotAnimation: function (index, dotNums) {
      let delayTime = `${-1 * (1 + (index + 1) * 1 / dotNums) }s`

      return {
        animationDelay: delayTime
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --loadingSize: 200px;
  --dotRadius: 24px;
  --dotColor: #f36;
}

.loading{
  width: var(--loadingSize);
  height: var(--loadingSize);
  color: var(--dotColor);
  transform-origin: center;

  position: relative;
  font-size: 0;
  border-radius: 50%;
  
  & div {
    width: var(--dotRadius);
    height: var(--dotRadius);
    color: var(--dotColor);
    margin-top: calc((var(--dotRadius) / 2) * -1);
    margin-left: calc((var(--dotRadius) / 2) * -1);
    
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
  }
  
  & span {
    width: var(--dotRadius);
    height: var(--dotRadius);

    display: block;
    background-color: currentColor;
    border: 0 solid currentColor;
    border-radius: 100%;
    animation: ball-spin 1s infinite ease-in-out;    
  }
}


@keyframes ball-spin {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
}

</style>
