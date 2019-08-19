<template>
  <div id="banner">
    <p id="info">
      {{msg}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Proximamente',
    data () {
      return {
        msg: 'Se acerca el cumpleaños de Achus!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes sliding-text {
    from {left: -50%}
    to {left: 100%}
  }

  #banner {
    background-color: orangered;
  }

  #info {
    position: relative;
    text-align: start;
    animation: sliding-text 5s infinite linear;
  }
</style>
