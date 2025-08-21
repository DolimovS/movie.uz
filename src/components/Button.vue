<template>
    <div class="btn_containers" >
        <p :style="{ backgroundColor: btn_bc_color }">
            {{ btn_title }}</p>
    </div>
</template>

<script>
    export default {
        name:"Button",
        props:{
            btn_title:{
                type:String,
                required:true,
            },
            btn_bc_color:{
                type:String,
                required:true
            }
            
        }
    }
</script>

<style >

.btn_containers p {
  display: inline-flex;       /* ichidagi textni tekis joylash uchun */
  align-items: center;        /* textni vertical markazga qo‘yadi */
  justify-content: center;    /* textni horizontal markazga qo‘yadi */
  padding: 0 24px;            /* faqat yon tomonga padding */
  height: 50px;               /* balandlikni fix qilib qo‘yamiz */
  border-radius: 8px;
  font-family: Manrope;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;             /* textning balandligi heightga bog‘liq bo‘ladi */
  cursor: pointer;
  white-space: nowrap;        /* text yangi qatorga tushmasligi uchun */
}
@media (max-width:1440px){
    .btn_containers p {
  padding: 0 20px;            /* faqat yon tomonga padding */
  height: 50px;               /* balandlikni fix qilib qo‘yamiz */
  font-size: 14px;
}
}
</style>