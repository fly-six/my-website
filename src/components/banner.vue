<template>
  <div>
    <!-- 轮播图 -->
      <!-- 电脑端显示 -->
    <div id="swiper" class="container-fuild hidden-xs" v-if="swiperList.length > 0" :style="{height: height + 'px'}">
      <div
        class="swiper-container banner-swiper"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiperList"
            :key="index"
          >
            <!-- <img class="swiper-lazy" :src="item.banner" alt="轮播图" /> -->
            <img class="swiper-lazy" :src="item.banner" alt="轮播图" />

            <!-- <div class="swiper-lazy-preloader"></div> -->
          </div>
        </div>
      </div>
    </div>

      <!-- 手机端显示 -->
    <div id="swiper" class="container-fuild visible-xs" v-if="mobileSwiperList.length > 0">
      <div
        class="swiper-container banner-swiper"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in mobileSwiperList"
            :key="index"
          >
            <img class="swiper-lazy" :src="item.banner" alt="轮播图" />
            <!-- <div class="swiper-lazy-preloader"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    swiperList: {
      type: Array,
      default: () => [],
    },
    mobileSwiperList: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: "567",
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: "fade",
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // 延迟加载
      // lazy: {
      //   loadPrevNext: true,
      // },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  },
  methods: {
    callPhone(number) {
      window.location.href = `tel://${number}`;
    },
  },
};
</script>
<style scoped>
/* 轮播图 */
#swiper {
  height: 567px;
  /* height: auto; */
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 100px;
  }
}
</style>