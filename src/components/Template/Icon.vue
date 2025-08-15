<template>
    <div v-if="iconSvg" v-html="iconSvg"></div>
</template>

<script>
    export default {
        name:"AppIconPage",
        props:{
            name:{
                type:String,
                required:true,
            },
        },
        data(){
            return{
                icons:{
                    search: `<svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
                }
            }
        },
        computed:{
            iconSvg(){
                return  this.icons[this.name]|| '';
            }
        }
    }
</script>

<style  scoped>

</style>