<template>
    <HomeSection/>
    <HomeCatogoriya/>
</template>

<script>
import HomeCatogoriya from '../components/HomeCatogoriya.vue';
import HomeSection from '../components/HomeSection.vue';


    export default {
        name:"home",
        components:{
            HomeSection,
            HomeCatogoriya,
        }

    }
</script>

<style >

</style>