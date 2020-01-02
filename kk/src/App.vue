<template>
  <div id="app">
    <header class="header">

    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>
<script>
import Footer from './components/Footer'
export default {
  components:{
   Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
