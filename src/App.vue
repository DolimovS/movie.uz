<template>
  <div class="app_wrapper container">
    <Navbar/>
    <div class="app_container">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

  export default {
      name:"App",
      components:{
        Navbar,
        Footer,
      }
  }
</script>

<style scoped>
.app_wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app_container{
  flex: 1;
}

</style>