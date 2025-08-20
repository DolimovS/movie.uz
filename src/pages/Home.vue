<template>
   <div class="home">
     <HomeSection/>
    <HomeCatogoriya/>
    <div class="decices_product">
        <Sarlavha  :title="devices_title" :description="devices_description"/>
    </div>
   </div>
</template>

<script>
import HomeCatogoriya from '../components/HomeCatogoriya.vue';
import HomeSection from '../components/HomeSection.vue';
import Sarlavha from '../components/Sarlavha.vue';


    export default {
        name:"home",
        components:{
            HomeSection,
            HomeCatogoriya,
            Sarlavha,
        },
        data(){
            return{
                devices_title:"We Provide you streaming experience across various devices.",
                devices_description:"With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.",
            }
        }
    }
</script>

<style >

.home{
    padding: 0 10px;
    max-width: 1600px;
    margin: auto;
display: flex;
flex-direction: column;
/* gap: 150px; */
}
.decices_product{
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    gap: 80px;
}

</style>