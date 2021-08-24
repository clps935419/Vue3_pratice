<script>
import Header from '@/components/Header.vue';
import Article from '@/components/Article.vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

import PropsTest from '@/components/PropsTest.vue';
import TitleBar from '@/components/TitleBar.vue';
import Listitem from '@/components/Listitem.vue';
import EmitTest from '@/components/EmitTest.vue';

import { ref } from '@vue/reactivity';

export default {
  components:{
    Header,
    Article,
    Aside,
    Main,
    Footer,
    PropsTest,
    TitleBar,
    Listitem,
    EmitTest
  },
  setup(){
    
    const isOpen = ref(true);
    const msg = ref('hello vue 組件');
    const HandListShow = () => {
      isOpen.value = !isOpen.value;
    };

    const handCallBack =(num)=>{
      console.log('子層->父層參數',num)
    }
    return {
      msg,
      isOpen,
      HandListShow,
      handCallBack
    }
  }

}
</script>

<template>
  <!-- 組件練習 -->
  <!-- <PropsTest />
  <Header/>
  <Article/>
  <Aside/>
  <Main/>
  <Footer/> -->

  <!-- 參數父層至子層範例 -->
  <TitleBar :HandListShow="HandListShow"/>
  <Listitem :isOpen="isOpen"/>
  <!--  -->

  <!-- 子傳父 -->
  <EmitTest @CallBack="handCallBack" />
  <!--  -->
</template>

<style>

</style>