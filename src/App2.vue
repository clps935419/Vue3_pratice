<script>
import Header from '@/components/Header.vue';
import Article from '@/components/Article.vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

import PropsTest from '@/components/PropsTest.vue';
import { ref } from '@vue/reactivity';


export default {
  components:{
    Header,
    Article,
    Aside,
    Main,
    Footer,
    PropsTest
  },
  setup(){
    const msg = ref('hello vue 組件');
    return {
      msg
    }
  }

}
</script>

<template>
  <PropsTest />
  <Header/>
  <Article/>
  <Aside/>
  <Main/>
  <Footer/>
</template>

<style>

</style>