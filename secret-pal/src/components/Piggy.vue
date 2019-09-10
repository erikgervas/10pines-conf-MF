<template>
  <div>
    <h1>{{title}}</h1>
    <img id="piggy" src="../assets/pig.gif">
  </div>
</template>

<script>
  export default {
    name: 'Piggy',
    data () {
      return {
        title: '¡Feliz cumple Lautaringui!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin: 0.5rem;
  }
  #piggy {
    width: 50%;
    height: auto;
    border: 1px solid black;
  }
</style>
