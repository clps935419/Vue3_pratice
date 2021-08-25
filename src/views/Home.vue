<script>
// @ is an alias to /src
import Article from '@/components/Article.vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
export default {
  name: 'Home',
  components: {
    Article,
    Aside,
    Main
  }
}
</script>
<template>
  <Article/>
  <Aside/>
  <Main/>
</template>