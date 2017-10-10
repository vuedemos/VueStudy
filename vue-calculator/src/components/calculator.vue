<template>
  <div class="calculator">
    <button @click="changeModeEvent" class="toggle-button">
      <p v-if="changeMode">Show Advanced Mode &nbsp; &nbsp; &#9864;</p>
      <p v-else>Show Basic Mode &nbsp; &nbsp; &#9862;</p>
    </button>
    <div class="results">
      <input class="input" v-model="current" />
    </div>
    <div class="mode" v-if="changeMode">
      <button class="button" @click="press">7</button>
      <button class="button" @click="press">8</button>
      <button class="button" @click="press">9</button>
      <button class="button" @click="press">*</button>
      <button class="button" @click="press">&#60;=</button>
      <button class="button" @click="press">C</button>
      <button class="button" @click="press">4</button>
      <button class="button" @click="press($event)">5</button>
      <button class="button" @click="press">6</button>
      <button class="button" @click="press">/</button>
      <button class="button" @click="press">(</button>
      <button class="button" @click="press">)</button>
      <button class="button" @click="press">1</button>
      <button class="button" @click="press">2</button>
      <button class="button" @click="press">3</button>
      <button class="button" @click="press">-</button>
      <button class="button" @click="press">x ²</button>
      <button class="button" @click="press">±</button>
      <button class="button" @click="press">0</button>
      <button class="button" @click="press">.</button>
      <button class="button" @click="press">%</button>
      <button class="button" @click="press">+</button>
      <button class="button equal-sign" @click="press">=</button>  
    </div>
    <div class="mode" v-else>
      <button class="button" @click="press">sin</button>
      <button class="button" @click="press">cos</button>
      <button class="button" @click="press">tan</button>
      <button class="button" @click="press">x^</button>
      <button class="button" @click="press">&#60;=</button>
      <button class="button" @click="press">C</button>
      <button class="button" @click="press">log</button>
      <button class="button" @click="press">ln</button>
      <button class="button" @click="press">e</button>
      <button class="button" @click="press">∘</button>
      <button class="button" @click="press">rad</button>
      <button class="button" @click="press">√</button>
      <button class="button" @click="press">7</button>
      <button class="button" @click="press">8   </button>
      <button class="button" @click="press">9</button>
      <button class="button" @click="press">/</button>
      <button class="button" @click="press">x ²</button>
      <button class="button" @click="press">x !</button>
      <button class="button" @click="press">4</button>
      <button class="button" @click="press">5</button>
      <button class="button" @click="press">6</button>
      <button class="button" @click="press">*</button>
      <button class="button" @click="press">(</button>
      <button class="button" @click="press">)</button>
      <button class="button" @click="press">1</button>
      <button class="button" @click="press">2</button>
      <button class="button" @click="press">3</button>
      <button class="button" @click="press">-</button>
      <button class="button" @click="press">%</button>
      <button class="button" @click="press">±</button>
      <button class="button" @click="press">0</button>
      <button class="button" @click="press">.</button>
      <button class="button" @click="press">&#x003C0;</button>
      <button class="button" @click="press">+</button>                    
      <button class="button equal-sign" @click="press">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return{ 
      current: '',
      changeMode: true
    }
  },
  methods: {
    press: function (event) {
      let me = this
      let key = event.target.textContent

      if (
        key != '=' && 
        key != 'C' &&
        key != '*' &&
        key != '/' &&
        key != '√' &&
        key != "x ²" &&
        key != "%" &&
        key != "<=" && 
        key != "±" && 
        key != "sin" && 
        key != "cos" && 
        key != "tan" && 
        key != "log" && 
        key != "ln" && 
        key != "x^" && 
        key != "x !" && 
        key != "π" && 
        key != "e" && 
        key != "rad" && 
        key != "∘"
      ) {
        me.current += key
        
      } else if (key === '=') {
        
        if ((me.current).indexOf('^') > -1) {
          let base = (me.current).slice(0, (me.current).indexOf('^'))
          let exponent = (me.current).slice((me.current).indexOf('^') + 1)
          me.current = eval('Math.pow(' + base + ',' + exponent + ')')
        } else {
          me.current = eval(me.current)
        }
      
      } else if (key === 'C') {
        
        me.current = ''

      } else if (key === '*') {
        
        me.current += '*'

      } else if (key === '/') {
        
        me.current += '/'

      } else if (key === '+') {
        
        me.current += '+'

      } else if (key === '-') {
        
        me.current += '-'

      } else if (key === '±') {
        
        if ((me.current).charAt(0) === '-') {
          me.current = (me.current).slice(1)
        } else {
          me.current = '-' + me.current
        }

      } else if (key === '<=') {
        
        me.current = me.current.substring(0, me.current.length - 1)

      } else if (key === '%') {
        
        me.current = me.current / 100

      } else if (key === 'π') {
        
        me.current = me.current * Math.PI

      } else if (key === 'x ²') {
        
        me.current = eval(me.current * me.current)

      } else if (key === '√') {
        
        me.current = Math.sqrt(me.current)

      } else if (key === 'sin') {
        
        me.current = Math.sin(me.current)

      } else if (key === 'cos') {
        
        me.current = Math.cos(me.current)

      } else if (key === 'tan') {
        
        me.current = Math.tan(me.current)

      } else if (key === 'log') {
        
        me.current = Math.log10(me.current)

      } else if (key === 'ln') {
        
        me.current = Math.log(me.current)

      } else if (key === 'x^') {
        
        me.current += '^'

      } else if (key === 'x !') {

        let number = 1
        if (me.current === 0) {
          me.current = '1'
        } else if (me.current < 0) {
          me.current = NaN
        } else {
          let number = 1
          for (let i = me.current; i > 0; i--) {
            number *= i
          }
          me.current = number
        }

      } else if (key === 'e') {
        
        me.current = Math.exp(me.current)

      } else if (key === 'rad') {
        
        me.current = me.current * (Math.PI / 180)

      } else if (key === '∘') {

        me.current = me.current * (180 / Math.PI)

      }
    },
    changeModeEvent: function() {
      let me = this
      me.changeMode = !me.changeMode
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calculator {
    width: 440px;
    padding: 20px;
    border-radius: 5px;
    margin: 12% auto;
    font-size: 16px;
    background-color: hsl(0, 0%, 20%);
  }

  .input {
    width: 420px;   
    height: 50px;
    border-radius: 0px;
    border: 1px solid hsl(0, 0%, 0%);
    background-color: #333333;
    color: #d9d9d9;
    padding: 0 5px 0 5px;
    margin: 0 0px 10px 0px;
    font-size: 30px;
  }

  .input:focus,
  .input:active {
    border-color: #03a9f4;
    box-shadow: 0 0 4px #03A9F4;
    outline: none 0;
  }

  .button {
    margin: 3px;
    width: 63px;
    border: 1px solid hsl(0, 0%, 5%);
    height: 30px;
    border-radius: 4px;
    color: hsl(0, 0%, 85%);
    background-color: hsl(0, 0%, 10%);
    cursor: pointer;
    outline: none;
  }

  .mode {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .equal-sign {
    background-color: hsl(120, 100%, 25%);
    width: 133px;
  }

  .toggle-button {
    border: none;
    background-color: hsl(0, 0%, 20%);
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, .35)
  }

  p {
    margin-top: 0;
  }

  button::-moz-focus-inner {
    border-color: transparent;
  }
</style>
