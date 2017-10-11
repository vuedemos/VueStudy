<template>
  <div class="dropdown">
    <select @input="event => { $emit('input', event.target.value) }" v-model="selectedOption">
      <option v-for="(option, name) in options" :value="option">{{ name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: null,
    options: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.selectedOption = this.value
  },
  watch: {
    value: function (newValue) {
      this.selectedOption = newValue
    }
  },
  data () {
    return {
      selectedOption: null 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
