<template>
  <div class="swiper-container" :style="{height: sHeight}">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: ['listImg', 'sTime', 'sHeight'],
    mounted () {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        longSwipesMs: this.sTime,
        longSwipes: false,
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>

<style lang="less">
  .swiper-container {
    width: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      width:0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: white;
    }
  }
</style>
