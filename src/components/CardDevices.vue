<template>
    <div class="card_container">
        <div class="card_container_text">
            <Icon name="telefon"/>
            <h1>{{card_text}}</h1>
        </div>
        <div class="card_container_description">
            <p>{{ card_discription }}</p>
        </div>
    </div>
</template>

<script>
import Icon from './Template/Icon.vue';

    export default {
        components:{
            Icon,
        },
        props:{
            card_text:{
                type:String,
                required:true,
            },
            card_discription:{
                type:String,
                required:true,
            }
            

        }
    }
</script>

<style >
.dckm{
    color: #ff0000;
}
</style>