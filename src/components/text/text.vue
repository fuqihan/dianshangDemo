<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import { a, b, c, d, e } from '../../../static/outImg'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
        listImg: [
          {url: a}, {url: b}, {url: c}, {url: d}, {url: e}
        ]
      }
    },
    mounted () {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        longSwipesMs: 1000,
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
    height: 10rem;
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
      background: #7c5e53;
    }
  }
</style>
