<template>
  <div class="notch" :style="{'--notchSize': changeChildNotchSize}">
    <slot>This is notch module box!</slot>
  </div>
</template>

<script>
export default {
  name: 'NotchBox',
  props: ['childNotchSize'],
  computed: {
    changeChildNotchSize: function () {
      return this.childNotchSize + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.notch {
  max-width: 400px;
  padding: 3rem;
  background: #f06d06;
  
  --notchSize: 20px;
  
  clip-path: 
    polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
}

</style>
