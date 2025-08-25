<template>
    <div class="plan_container">
        <Sarlavha :title="plan_title" :description="plan_description"/>
        <div class="tarif_btn">
            <button  class="plan_btn" :class="{ btn_active: btn_toggle }"
        @click="btn_toggle = true">Monthly</button>
            <button class="plan_btn"  :class="{ btn_active: !btn_toggle }"
        @click="btn_toggle = false">Yearly</button>
        </div>
    </div>
</template>

<script>
import Sarlavha from './Sarlavha.vue';

    export default {
        components:{
            Sarlavha,
        },
        data(){
            return{
                plan_title:"Choose the plan that's right for you",
                plan_description:"Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",

                btn_toggle:true,
            }
        }
    }
</script>

<style >
.plan_container{
    display: flex;
    align-items: end;
    justify-content: space-between;
}


.tarif_btn{
    /* display: flex; */
    padding: 10px;
    background-color: #0F0F0F;
    border-radius: 10px;
    border: 1px solid #262626
}
.plan_btn{
    font-family: Manrope;
font-weight: 500;
font-style: Medium;
font-size: 18px;
leading-trim: NONE;
line-height: 150%;
letter-spacing: 0%;
padding: 14px 24px;
border-radius: 10px;
background-color: transparent;
cursor: pointer;
}
.btn_active{
  background: #1F1F1F;
color: #FFFFFF;


}
</style>