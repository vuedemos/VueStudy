<template>
  <div id="app">
    <Button text="Default"/>
    <Button text="Primary" class="primary" />
    <ButtonProps text="Default Button with Custom Property" :varCSS="coustomProperty" />

    <Card cardTitle="This is Card title" cardText="Card content" cardObject="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1400,f_auto,q_auto/v1559763468/clouds-01_eqgzp0.png"/>
    
    <Button text="Default" />
    <Button text="Primary" class="primary" />
    <Button text="Danger" class="danger" />
    <Button text="Info" class="info" />
    <Button text="Secondary" class="secondary" />
    <Button text="Success" class="success" />


  </div>
</template>

<script>
import Button from './components/Button';
import ButtonProps from './components/ButtonProps';
import Card from './components/Card';

export default {
  name: 'app',
  components: {
    Button,
    ButtonProps,
    Card
  },
  data () {
    return {
      coustomProperty: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: '#fff'
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.primary {
  --backgroundColor: #007bff;
  --borderColor: #007bff;
  --color: #fff;
  --padding: .375rem .75rem;
  --borderRadius: .25rem;
  margin: 0 5px;
}

.secondary {
    --color: #fff;
    --backgroundColor: #6c757d;
    --borderColor: #6c757d;
}
.success {
    --color: #fff;
    --backgroundColor: #28a745;
    --borderColor: #28a745;
}

.danger {
    --color: #fff;
    --backgroundColor: #dc3545;
    --borderColor: #dc3545;
}
.info {
    --color: #fff;
    --backgroundColor: #17a2b8;
    --borderColor: #17a2b8;
}
.button {
  margin: 5px;
}
</style>
