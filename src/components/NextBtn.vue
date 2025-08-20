<template>
    <div class="btn_container">
        <button @click="$emit('goPrev')" class="next_btn"><Icon name="prev"/></button>
        <div class="corusel_liner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <button @click="$emit('goNext')" class="next_btn"><Icon name="next"/></button>

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
    /* border: 1px solid red; */
    /* align-items: center; */
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
@media (max-width: 1220px) {
.btn_container{
    padding: 12px;
    gap: 12px;
}
.next_btn{
    padding: 10px;
}
}

@media (max-width: 750px) {
.btn_container{
    display: inline-flex;
    margin-top: 20px;
}

}


</style>