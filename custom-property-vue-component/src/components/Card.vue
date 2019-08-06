<template>
  <div class="card">
      <div class="card-thumbnail">
          <img :src=cardObject :alt=cardTitle />
      </div>
      <div class="card-body">
          <h5 class="card-title">{{cardTitle}}</h5>
          <div class="card-content">{{cardText}}</div>
      </div>
      <div class="card-footer">
          <ButtonProps text="Enter" :varCSS="coustomProperty"/>
          <ButtonProps text="Cancel" />
      </div>
  </div>
</template>

<script>
import ButtonProps from './ButtonProps';

export default {
  name: 'Card',
  props: {
    cardTitle: String,
    cardText: String,
    cardObject: String,
  },
  components: {
      ButtonProps
  },
  data () {
      return  {
          coustomProperty: {
            backgroundColor: '#dc3545',
            borderColor: '#dc3545',
            color: '#fff'
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-thumbnail {
    border-radius: .25rem .25rem 0 0;
    overflow: hidden;
}

.card-thumbnail img {
    max-width: 100%;
    height: auto;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
}

.card-title {
    font-size: 1.25rem;
    margin: 0 0 .75rem;
}

.card-content {
    margin-top: 0;
    margin-bottom: 1rem;
}

.card-footer {
    border-top: 1px solid rgba(0,0,0,.125);
    border-radius: 0 0 .25rem .25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.25rem;
    width: 100%;
    box-sizing: border-box;
}

.button {
    margin-left: 5px;
}
</style>
