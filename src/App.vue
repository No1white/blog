<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>

  </div>
</template>
<script>
import NavBar from './components/NavBar'

export default {
  data(){
    return {

    }
  },
  components: {
    NavBar

  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e6e6e6;
  position: relative;
}

</style>
