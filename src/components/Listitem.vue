<script>
    import {reactive, ref } from 'vue';
    export default {
        props:{
            isOpen:{
                type:Boolean,
                default:true
            }
        },
        setup(props){
            const listArr = reactive([{
                name: "2020 Vue3 專業職人 | 入門篇"
            },
            {
                name: "2020 Vue3 專業職人 | 加值篇"
            },
            {
                name: "2020 Vue3 專業職人 | 進階篇"
            },
            {
                name: "現代 JavaScript 職人之路｜入門篇"
            },
            {
                name: "現代 JavaScript 職人之路｜中階實戰篇"
            },
        ]);
        return{
            listArr,props
        }
        }
        
    }
</script>
<template>
    <ul :class="['box', {open: props.isOpen}]">
        <li v-for="(list, idx) in listArr" :key="list.name">
            {{idx + 1}}. {{list.name}}
        </li>
    </ul>
</template>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: slategray;
    }

    #app {
        width: 400px;
        overflow: hidden;
        border: 1px solid #42b983;
        border-radius: 10px;
    }

    .box {
        display: block;
        width: 100%;
        height: 0;
        background-color: snow;
        transition: height 0.4s;
    }

    .box.open {
        height: 200px;
    }

    .box>li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #d2d2d2;
        font-size: 12px;
        color: darkslategray;
    }
</style>