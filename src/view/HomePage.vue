<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" />

    <div class="first-section section container wow fadeInUp">
      <CustomTitle
        title="We Provide You With"
        title2="Matching Color Schemes"
        :spanList="[
          'Metalcomplex Dyes',
          'Pigments For Coatings',
          'Pigment For Plastics',
          'Pigment For Inks',
        ]"
        @click="handleClick"
      />
      <img class="img" src="@/assets/image/images/gg1.png" alt="" />
    </div>

    <div class="second-section section container-fuild wow fadeInUp">
      <div class="container">
        <CustomTitle
          title="We Provide Efficacy-based Skincare Products"
          title2="With The Same Attitude As We Do In Pharmaceuticals"
          @click="handleClick"
        />
        <div class="second-section-content" v-for="item in secondSectionList" :key="item.title">
          <div class="second-section-title">
            {{ item.title }}
          </div>
          <div class="second-section-list">
            <div class="title-item" v-for="item2 in item.list" :key="item2">
              {{ item2 }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="third-section section container-fuild wow fadeInUp">
      <div class="third-section-content container">
        <CustomTitle
          title="We Also Provide You With "
          title2="Matching Machinery"
          :spanList="['Membrane Design', 'Equipment Design']"
          @click="handleClick"
        />
      </div>
      <img class="img" src="@/assets/image/images/fuut.jpg" alt="" />
    </div>

    <div class="fourth-section section container-fuild wow fadeInUp">
      <div class="fourth-section-content container">
        <CustomTitle
          title="We Asist You To Make A Self-purification"
          title2="Environment In Nature."
          :spanList="[
            'Advanced oxidation technology — Ultrafine bubble water treatmen',
          ]"
          @click="handleClick"
        />
        <div class="row">
          <div class="items" style="font-family: '12665.ttf'">
            <div class="item">
              <img src="@/assets/image/images/matching-environ01.jpg" alt="" />

              <p>Industrial Wastewater</p>
              <p>Treatment</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/matching-environ02.jpg" alt="" />

              <p>Organic Waste Gas</p>
              <p>Treatment</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/matching-environ03.jpg" alt="" />

              <p>Improve The Water Quality Of</p>
              <p>Rivers And Lakesf</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/matching-environ04.jpg" alt="" />

              <p>Precision Component</p>
              <p>Cleaning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图
import CustomTitle from "../components/customTitle"; //标题

export default {
  name: "HomePage",
  components: {
    Banner,
    CustomTitle,
  },
  data() {
    return {
      swiperList: [
        {
          banner: require("../assets/image/home//banner-1.png"),
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
.second-section {
  height: 650px;
  background-image: url("../assets/image/images/bg1.png");
  background-size: 100% 100%;
  background-position: center;
}
.second-section .second-section-content {
  margin-top: 60px;
  padding: 0 40px;
}
.second-section .second-section-content .second-section-title{
  display: flex;
  align-items: center;
  width: 487px;
  height: 42px;
  padding-left: 15px;
  color: #FFFFFF;
  font-size: 27px;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(90deg, rgba(112,67,145,1) 0%, rgba(255,255,255,1) 100%);
}
.second-section .second-section-content .second-section-list{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
}
.second-section .second-section-content .second-section-list .title-item{
  height: 42px;
  margin-right: 20px;
  color: #6E4691;
  font-size: 24px;
}
.second-section .img {
  width: 100%;
}
.third-section .img {
  width: 100%;
}
.fourth-section {
  margin-top: 0;
  padding-top: 70px;
  background-color: #f4f3f8;
}
.fourth-section .row .items{
  margin: 60px auto 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 40px;
  margin-bottom: 100px;
}
.fourth-section .row .items .item{
  width: 250px;
  height: 410px;
  border-radius: 10px;
  background-color: #fff;
}
.fourth-section .row .items .item p {
  color: #808080; 
  font-size: 17px;
  text-align: center;
}
.fourth-section .row .items .item p:last-child{
    margin-bottom: 10px;
}

.fourth-section .row .items .item img{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

.fourth-section .row .items .item img:hover{
  transform: scale(1.1); /* 鼠标悬停时放大图片 */
}
</style>

