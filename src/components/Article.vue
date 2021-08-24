

<script>
export default {

}
</script>

<template>
  <article>
        <div>
          <h3>Responsive Web Design</h3>
          <p>
            選用對的html5標籤除了在閱讀 html
            原始碼更加順暢外，也有助於google搜尋引擎排名順序，SEO效果的提升
          </p>
        </div>
      </article>
</template>

<style lang="scss">
article {
  width: 100%;
  height: 578px;
  background-image: url("~@/assets/images/banner.png");
  background-size: cover;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
article > div > h3 {
  text-align: center;
  font-size: 48px;
  color: #fff;
}
article > div > p {
  text-align: center;
  font-size: 14px;
  color: #fff;
  line-height: 3em;
}
@media screen and (max-width: 1044px) {

  /*--------------------------------------------------------------*/
  article > div {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  article > div > h3 {
    font-size: 30px;
  }
  article > div > p {
    font-size: 14px;
    line-height: 25px;
  }
  /*--------------------------------------------------------------*/
 
}
@media screen and (max-width: 730px) {
  article {
    height: 349px;
  }
}
@media screen and (max-width: 640px) {

  article {
    height: 175px;
  }

}
</style>