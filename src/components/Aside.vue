

<script>
export default {

}
</script>

<template>
  <aside>
        <div class="mid">
          <div class="text_content">
            <h3>遇到平版電腦時會自動轉換成適合平版電腦大小的版型</h3>
          </div>
          <a href="javscript:;"></a>
        </div>
      </aside>
</template>

<style lang="scss">
aside {
  width: 100%;
  height: 245px;
  background-color: #27212c;
}
aside > .mid {
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}
aside > .mid > .text_content {
  width: 77%;
  height: 100%;
  float: left;
}
aside > .mid > .text_content > h3 {
  line-height: 245px;
  color: #9484a2;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 20px;
}
aside > .mid > a {
  display: block;
  width: 23%;
  height: 100%;
  float: right;
  background-color: #bc3183;
  background-image: url("~@/assets/images/rightbtn.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1044px) {

  /*--------------------------------------------------------------*/
  aside > .mid {
    width: 100%;
  }
  aside > .mid > .text_content {
    width: 77%;
  }
  aside > .mid > .text_content > h3 {
    font-size: 18px;
    padding-left: 3%;
  }
  aside > .mid > a {
    width: 20%;
  }
  /*--------------------------------------------------------------*/
  @media screen and (max-width: 640px) {
  aside {
    width: 100%;
    height: 75px;
    background-color: #27212c;
  }
  aside > .mid > .text_content {
    width: 85%;
  }
  aside > .mid > .text_content > h3 {
    width: 90%;
    line-height: 75px;
    letter-spacing: 0px;
    font-size: 0.5em;
    /*---------------------------------------------------------*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*---------------------------------------------------------*/
  }
  aside > .mid > a {
    width: 15%;
  }
}
}
</style>