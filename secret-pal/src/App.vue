<template>
  <div id="app">
    <piggy/>
    <proximamente/>
  </div>
</template>

<script>
  import Piggy from "./components/Piggy";
  import Proximamente from "./components/ProximamenteBanner";

  export default {
    name: 'App',
    components: { Piggy, Proximamente }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    flex: 1;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    background-image: url("./assets/cake-background.jpg");
  }

  @media screen and (max-width : 1400px)
  {
    #app
    {
      font-size: 0.7rem;
    }
  }
  @media screen and (min-width : 1400px)
  {
    #app
    {
      font-size: 1.1rem;
    }
  }
</style>
