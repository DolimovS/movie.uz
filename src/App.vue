<template>
  <div>
    <Navbar/>
      <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue';
import MoviesOpen from './pages/MoviesOpen.vue';
import Support from './pages/Support.vue';

  export default {
      name:"App",
      components:{
        Navbar,
        Home,
        MoviesOpen,
        Support,
      }
  }
</script>

<style scoped>

</style>