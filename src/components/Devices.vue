<template>
    <div class="cards_container" >
            <CardDevices v-for="(title,index) in card_product" :key="index"
            :card_text="title.card_text" 
            :card_discription="title.card_discription"/>
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
                card_product:[
                    {
                        id: 1,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    },
                    {
                        id: 2,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    },
                    {
                        id: 3,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    },
                    {
                        id: 4,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    },
                    {
                        id: 5,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    },
                    {
                        id: 6,
                        card_text: "Smartphones",
                        card_discription: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
                    }
            ]
            }
        }
    }
</script>

<style >
.cards_container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}


@media (max-width:1440px) {
.cards_container{
    gap: 20px;
}
}
</style>