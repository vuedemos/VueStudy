<template>
  <div class="dropdown" :class="{ 'open': open }">
    <input 
      type="text" 
      ref="search"
      :placholder="placeholder"
      v-model="searchText" 
      @input="searchChanged" 
      @keydown.enter="suggestionSelected(mathches[highlightIndex])"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.esc="setOpen(false)"
      @blur="setOpen(false)"
    />
    <a class="toggle" @mousedown.prevent @click="setOpen(!open)">
      <span class="arrow-up">▲</span>
      <span class="arrow-down">▼</span>
    </a>
    <ul class="suggestion-list">
      <li 
        v-for="(suggestion, index) in matches" 
        @mousedown.prevent 
        @click="suggestionSelected(suggestion)"
        :class="{'active' : index === highlightIndex}"
      >{{ suggestion[0] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteDropdown',
  props: {
    value: null,
    options: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Enter an item name to search'
    }
  },
  computed: {
    matches () {
      return Object.entries(this.options).filter((option) => {
        let optionText = option[0].toUpperCase()
        return optionText.match(this.searchText.toUpperCase().replace(/\s+/g, '.+'))
      })
    }
  },
  methods: {
    setOpen (isOpen) {
      this.open = isOpen

      if (this.open) {
        this.$refs.search.focus()
        this.lastSearchText = this.searchText
        this.searchText = ''
      } else if (this.searchText.trim() === ''){
        this.searchText = this.lastSearchText
      }

    },
    searchChanged () {
      if (!this.open) {
        this.open = true
      }

      this.highlightIndex = 0
    },
    suggestionSelected (suggestion) {
      this.open = false
      this.searchText = suggestion[0]
      this.$emit('input', suggestion[1])
    },
    updateComponentWithValue(newValue) {
      if (Object.values(this.options).indexOf(newValue) > -1) {
        // Find the matching text for the supplied option value
        for (let text in this.options) {
          if (this.options.hasOwnProperty(text)) {
            if (this.options[text] === newValue) {
              this.searchText = text
            }
          }
        }
      }
    },
    up () {
      if (this.open) {
        if (this.highlightIndex > 0) {
          this.highlightIndex--
        }
      } else {
        this.setOpen(true)
      }
    },
    down () {
      if (this.open) {
        if (this.highlightIndex < this.matches.length - 1) {
          this.highlightIndex++
        }
      } else {
        this.setOpen(true)
      }
    }
  },
  mounted () {
    this.updateComponentWithValue(this.value)
  },
  watch: {
    value: function (newValue) {
      this.updateComponentWithValue(newValue)
    }
  },
  data () {
    return {
      searchText: '',
      selectedOption: null,
      open: false,
      highlightIndex: 0,
      lastSearchText: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown.open .suggestion-list {
  display: block;
}
.dropdown .suggestion-list {
  display: none;
}
.suggestion-list {
  background-color: rgba(255,255,255,.95);
  border: 1px solid #ddd;
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 2;
}
.suggestion-list li {
  cursor: pointer;
}
.suggestion-list li:hover {
  color: #fff;
  background-color: #ccc;
}
.toggle .arrow-up {
  display: none;
}
.open .toggle .arrow-up {
  display: inline-block;
}
.open .toggle .arrow-down {
  display: none;
}
.active {
  color: #fff;
  background-color: #42b983;
}
</style>
