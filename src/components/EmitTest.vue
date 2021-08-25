

<script>
import { onMounted, ref } from 'vue'
export default {
    emits:{
      CallBack:(num)=>{
        //這邊是驗證子層傳父層的FUN，要回傳ture、false
        //回傳false F12就會有警告訊息
        console.log('---',num)
        return num.value === 0;
      }
    },
    setup(props,context){
        const num = ref(0);
        onMounted(()=>{
          context.emit('CallBack',num)
        })
        return{
          num
        }
    }
}
</script>
<template>
  <h1>{{num}}</h1>
</template>
<style scoped>

</style>