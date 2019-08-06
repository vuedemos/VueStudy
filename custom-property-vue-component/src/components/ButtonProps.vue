<template>
  <div class="button" :style=coustomStyle>{{ text }}</div>
</template>

<script>
export default {
  name: 'ButtonProps',
  props: {
    text: String,
    varCSS: {
        type: Object,
        default: function (){
            return {
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderRadius: '5px',
                fontSize: '16px',
                color: '#333',
                padding: '5px 10px'
            }
        }
    }
  },
  computed: {
      coustomStyle() {
          return {
              '--backgroundColor': this.varCSS.backgroundColor,
              '--borderColor': this.varCSS.borderColor,
              '--borderRadius': this.varCSS.borderRadius,
              '--fontSize': this.varCSS.fontSize,
              '--color': this.varCSS.color,
              '--padding': this.varCSS.padding
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  --backgroundColor: #fff;
  --borderColor: #ccc;
  --borderRadius: 5px;
  --fontSize: 16px;
  --color: #333;
  --padding: 5px 10px;

  /* base style */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  color: var(--color);
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
}
</style>
