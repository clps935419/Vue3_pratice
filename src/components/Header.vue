

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const isOpen = ref(false);
    const openFun = ()=>{
    isOpen.value = !isOpen.value;

    }
    return{isOpen,openFun}
  }
}
</script>

<template>
  <header :class="{openMenu:isOpen}">
        <nav>
          <router-link class="title" to="/">Mike</router-link>

          <a id="moblie_menu" @click="openFun"  href="javascript:;"></a>
          <div>
            <router-link to="/rwd">RWD</router-link>
            <router-link to="/vue">VUEJS</router-link>
            <router-link to="/recat">REACTJS</router-link>
            <router-link to="/html">HTML5</router-link>
            <router-link to="/node">NODEJS</router-link>
          </div>
        </nav>
      </header>
</template>

<style lang="scss" scoped>
h6{
  color: red;
}
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
}
header > nav {
  position: relative;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}
header > nav > .title {
  line-height: 97px;
  font-size: 18px;
  float: left;
  color: #fff;
  margin-right: 20px;
}
header > nav > div {
  width: 100%;
  height: 100%;
}
header > nav > div > a {
  display: block;
  line-height: 97px;
  font-size: 15px;
  float: left;
  color: #fff;
  padding: 0 10px;
}
a#moblie_menu {
  display: none;
}
@media screen and (max-width: 1044px) {
  header > nav {
    width: 100%;
  }
  header > nav > h1 {
    margin-left: 5%;
  }
}
@media screen and (max-width: 640px) {
  a#moblie_menu {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
  header {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
  }
  header.openMenu {
    height: 232px;
  }
  header > nav {
    width: 100%;
    height: 232px;
  }
  header > nav > h1 {
    line-height: 37px;
  }
  header > nav > div {
    clear: both;
    width: 100%;
    height: 195px;
  }
  header > nav > div > a {
    width: 100%;
    height: auto;
    overflow: hidden;
    line-height: 37px;
    text-align: center;
  }
}
</style>