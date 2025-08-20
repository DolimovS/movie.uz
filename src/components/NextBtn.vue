<template>
    <div class="btn_container">
        <button class="next_btn"><Icon name="prev"/></button>
        <div class="corusel_liner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <button class="next_btn"><Icon name="next"/></button>

    </div>
</template>

<script>
import Icon from './Template/Icon.vue';
    export default {
        components:{
            Icon
        }
    }
</script>

<style  >
.btn_container{
    display: flex;
    padding: 16px;
    background-color: #0F0F0F;
    border-radius: 8px;
    gap: 16px;
}
.next_btn{
    cursor: pointer;
    border: none;
    padding: 14px;
    border-radius: 8px;
    background-color: #1F1F1F;
}
.corusel_liner{
    display: flex;
    gap: 3px;
    align-items: center;
}
.corusel_liner div{
    width: 16px;
    height: 4px;
    background-color: #333333;
    border-radius: 100px;
}
</style>