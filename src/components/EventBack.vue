<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    setup(){
        const testInput = ref(null);//透過ref去綁定DOM元素
        const testNum =ref(123456789);
        const handfun =(e) =>{
            console.log('事件',e,e.target);
        }
        onMounted(()=>{
        })
        return {
            handfun,
            testInput,
            testNum
        }
    }
}
</script>

<template>
  <a href="javascript:;" @click="handfun($event)">CLICK</a>
  <input v-model="testNum" v-focus ref="testInput" type="text">
  <h1 v-price="testNum"></h1>
</template>

<style>

</style>