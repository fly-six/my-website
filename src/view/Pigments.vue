<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" height="515" />

    <div class="first-section section container wow fadeInUp">
      <CustomTitle
        title="Metalcomplex"
        title2="Dyes"
        @click="handleClick"
      />
      <div class="first-section-content">
        <img class="left-img" src="@/assets/image/images/pigments05.png" alt="" />
        <img class="right-img" src="@/assets/image/images/pigments02.png" alt="" />
      </div>
    </div>

    <div class="second-section section container-fuild wow fadeInUp">
      <div class="container">
        <CustomTitle
          title="Pigments For"
          title2="Coatings"
          @click="handleClick"
        />
        <img class="img" src="@/assets/image/images/pigments01.png" alt="" />
        <img class="bottom-img" src="@/assets/image/images/pigments02.png" alt="" />
      </div>
    </div>

    <div class="third-section section container-fuild wow fadeInUp">
      <div class="third-section-content container">
        <CustomTitle
          title="Pigments For"
          title2="Plastics"
          @click="handleClick"
        />
        <img class="img" src="@/assets/image/images/pigments04.png" alt="" />
        <img class="bottom-img" src="@/assets/image/images/pigments02.png" alt="" />
      </div>

    </div>

    <div class="fourth-section section container-fuild wow fadeInUp">
      <div class="fourth-section-content container">
        <CustomTitle
          title="Pigments For"
          title2="Inks"
          @click="handleClick"
        />
      </div>
      <img class="img" src="@/assets/image/images/pigments03.png" alt="" />
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图
import CustomTitle from "../components/customTitle"; //标题

export default {
  name: "Pigments",
  components: {
    Banner,
    CustomTitle,
  },
  data() {
    return {
      swiperList: [
        {
          banner: require("../assets/image/images/banner-en.jpg"),
        },
      ],
      secondSectionList: [
        {
          title: "Customized Finished Products",
          list: [
            "● 72-Hour Fresh Collagen Essence",
            "● Collagen Freeze-Dried Eye Patch",
            "● Collagen Freeze-Dried Fresh Mask",
            "● Collagen Freeze-Dried Balls/Cubes",
            "● Skincare repair medical aesthetic products  ...",
          ]
        },
        {
          title: "Medical aesthetic raw materials",
          list: [
            "● Recombinant Human Elastin",
            "● Ultra-micro Sodium Hyaluronate",
            "● Recombinant Human Fibronectin",
            "● Human-derived Copper-Zinc Superoxide Dismutase",
          ]
        },
      ]
    };
  },
  created() {},

  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  },

  methods: {
    handleClick() {
      console.log("点击");
    },
    navTo(content) {
      this.$router.push({
        path: "/projectCases",
        query: {
          content: content,
          swiperList: this.swiperList,
          mobileSwiperList: this.mobileSwiperList,
        },
      });
    },
  },
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
  background-color: #fff;
}
.section {
  margin-top: 70px;
}

.first-section .img {
  width: 100%;
}
.first-section .first-section-content {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;  
  margin-top: 37px;
}
.first-section .first-section-content .left-img{
  flex: 1;
}
.first-section .first-section-content .right-img{
  width: 62px;
  height: 11px;
  margin: 80px 21px 0 0;
}


.second-section .img {
  margin-top: 20px;
  padding: 0 40px;
  width: 100%;
}
.second-section .bottom-img{  
  width: 56px;
  height: 11px;
  margin: 20px auto 0;
}
.third-section .img {
  margin-top: 20px;
  padding: 0 40px;
  width: 100%;
}
.third-section .bottom-img{
  width: 56px;
  height: 11px;
  margin: 0px 0  0 200px;
}
.fourth-section .img {
  margin-top: 20px;
  padding: 0 40px;
  width: 100%;
}

</style>

