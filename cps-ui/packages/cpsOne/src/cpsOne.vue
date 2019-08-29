<template>
    <button @click="jian()">－</button>
    {{listNumber*1}}
    <button @click="jia()">＋</button>
</template>

<script>
    export default {
        name: "cpsOne",
        props:{
            listNumber:{
                type:Number,
                default:1,
            }
        },
        data(){
            return{
                cao:"－",
                cao1:"＋",
            }
        },

        methods:{
            jian(){
                console.log(1111);
                 this.listNumber--
            },
            jia(){
                console.log(22222);
                this.listNumber++
            }
        }


    }
</script>

<style lang="scss" scoped>
    button{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background: #777777;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        color: white;
        z-index: 999;
    }
    input{
        width: 150px;
        height: 50px;
        text-align: center;
    }
</style>