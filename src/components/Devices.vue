<template>
    <div>
            <CardDevices :card_text="card_text" :card_discription="card_discription"/>
    </div>
</template>

<script>
import CardDevices from './CardDevices.vue';


    export default {

        name:"Devices",
        components:{
            CardDevices,
        },
        data(){
            return{
                card_text:"Smartphones",
                card_discription:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
        }
    }
</script>

<style >

</style>