<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" height="529" />

    <div class="first-section section container-fuild wow fadeInUp">
      <div class="container">
        <CustomTitle
          title="72-Hour Fresh"
          title2="Collagen Essence"
          @click="handleClick"
        />
        <div class="first-section-content">
          <div class="first-section-top">
            <div class="first-section-top-item" v-for="item in firstToplist" :key="item">
              {{ item }}
            </div>
          </div>
          <div class="first-section-bottom">
            <div class="first-section-bottom-item" v-for="item in firstBottomList" :key="item">
              <img class="img" :src="item.img" :style="{width: item.imgWidth + 'px', height: item.imgHeight + 'px'}">
              <div>
                <div class="first-section-bottom-item-title">{{ item.title }}</div>
                <div class="first-section-bottom-item-text">{{ item.text1 }}</div>
                <div class="first-section-bottom-item-text">{{ item.text2 }}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="second-section section container-fuild wow fadeInUp">
      <div class="container">
        <CustomTitle
          title="Collagen Freeze-Dried"
          title2="Fresh Mask"
          @click="handleClick"
        />
        <div class="second-section-content">
          <img class="bgImg" src="@/assets/image/images/finalProduct01.png" alt="" />
          <div class="second-section-content-list">
            <div class="second-section-content-list-item" v-for="item in secondList" :key="item">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="third-section section container-fuild wow fadeInUp">
      <div class="container"> 
        <CustomTitle
          title="Pigments For"
          title2="Extract Essence A+B"
          @click="handleClick"
        />
      </div>
      <div class="third-section-content">
        <div class="third-section-bottom container">
          <div class="third-section-bottom-item" v-for="item in thirdBottomList" :key="item">
            <img class="img" :src="item.img" :style="{width: item.imgWidth + 'px', height: item.imgHeight + 'px'}">
            <div>
              <div class="third-section-bottom-item-title">{{ item.title }}</div>
              <div class="third-section-bottom-item-text">{{ item.text1 }}</div>
              <div class="third-section-bottom-item-text">{{ item.text2 }}</div>
            </div>

          </div>
        </div>
        <div class="third-section-footer-list-wrap">
          <div class="third-section-footer-list-title container">
            A+B Freeze-dried Fibril Automatic Production Line 
          </div>
          <div class="third-section-footer-list container">
            <img class="img" src="../assets/image/images/01.gif" alt="">
            <img class="img" src="../assets/image/images/02.gif" alt="">
            <img class="img" src="../assets/image/images/03.gif" alt="">
            <img class="img" src="../assets/image/images/04.gif" alt="">
          </div>
        </div>
      </div>
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
              <img src="@/assets/image/images/finalProduct03.png" alt="" />

              <p>Industrial Wastewater</p>
              <p>Treatment</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/finalProduct04.png" alt="" />

              <p>Organic Waste Gas</p>
              <p>Treatment</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/finalProduct05.png" alt="" />

              <p>Improve The Water Quality Of</p>
              <p>Rivers And Lakesf</p>
            </div>

            <div class="item">
              <img src="@/assets/image/images/finalProduct06.png" alt="" />

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
  name: "Pigments",
  components: {
    Banner,
    CustomTitle,
  },
  data() {
    return {
      swiperList: [
        {
          banner: require("../assets/image/images/finalProduct02.png"),
        },
      ],
      firstToplist: [
        "● ECMETICS® Bionic Formula    ● Patented Truncated Active Collagen + Multi-collagen",
        "● Closed docking dual-compartment design, convenient and easy to carry",
        "● Pharmaceutical-Grade Freeze-Dried Freshness Preservation",
      ],
      firstBottomList: [
        {
          img: require("../assets/image/images/finalProduct-num1.png"),
          imgWidth: 50,
          imgHeight: 92,
          title: "Strong Skin Barrier:",
          text1: "Effectively improves the barrier function of fragile and sensitive skin",
          text2: "Maintaining a healthy and stable skin condition.",
        },
        {
          img: require("../assets/image/images/finalProduct-num2.png"),
          imgWidth: 56,
          imgHeight: 92,
          title: "Firming & Lifting:",
          text1: "Prevent skin aging phenomena such as senescence, fade dry and fine",
          text2: "lines on the face, firm skin contours, and increase skin elasticity.",
        },
        {
          img: require("../assets/image/images/finalProduct-num3.png"),
          imgWidth: 58,
          imgHeight: 95,
          title: "Anti Aging & Anti Wrinkle:",
          text1: "Reduce the formation of dynamic and expression lines on the face",
          text2: "Smooth the skin, and maintain skin elasticity and gloss.",
        },
      ],
      thirdBottomList: [
        {
          img: require("../assets/image/images/finalProduct-num1.png"),
          imgWidth: 50,
          imgHeight: 92,
          title: "Collagen Repair Freeze-Dried Fibers (A+B)",
          text1: "Incomplete Collagen Fibers (Same as Medical Aesthetics Version)",
          text2: "Repair Damaged Skin and Strengthen Skin Barrier",
        },
        {
          img: require("../assets/image/images/finalProduct-num2.png"),
          imgWidth: 56,
          imgHeight: 92,
          title: "Dual-Antioxidant Firming Freeze-Dried Fibers (A+B)",
          text1: "Incomplete Collagen + Multi-Collagen + Peptides, etc.",
          text2: "Deep Anti-Aging to Fundamentally Improve Dryness and Roughness",
        },
        {
          img: require("../assets/image/images/finalProduct-num3.png"),
          imgWidth: 58,
          imgHeight: 95,
          title: "Radiance-Enhancing Freeze-Dried Fibers (A+B)",
          text1: "Incomplete Collagen + VC + Alpha-Arbutin, etc.",
          text2: "Deeply Nourishes the Skin Base, Stabilizes Skin Condition, Achieving a Plump, Radiant Complexion",
        },
      ],
      secondList: [
        "● Using -60°C low-temperature vacuum freeze-drying to condense and activate",
        "● Patent extraction of 3D Purcollagen with truncated active collagen",
        "● Medical-grade patented packaging, safe and easy to open.",
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
.first-section {
  background-image: url("../assets/image/images/finalProduct07.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.first-section .first-section-content {
  padding: 0 40px;  
  margin-top: 30px;
}
.first-section .first-section-content .first-section-top .first-section-top-item {
  margin: 20px 0;
  font-size: 18px;
  color: #6E4691;
  white-space: pre;
  font-family: "FuturaBT-MediumItalic.ttf";
}
.first-section .first-section-content .first-section-bottom-item {
  width: 596px;
  height: 63px;
  color: #FFFFFF;
  margin: 34px 0;
  padding: 0px 0 0 70px;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(90deg, rgba(112,67,145,1) 0%, rgba(255,255,255,1) 120%);
  position: relative;
  font-family: "FuturaBT-BoldItalic.ttf";
}
.first-section .first-section-content .first-section-bottom-item .img {
  position: absolute;
  left: 6px;
  bottom: 0;
  width: 50px;
  height: 92px;
}
.first-section .first-section-content .first-section-bottom-item .first-section-bottom-item-title {
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
}
.first-section .first-section-content .first-section-bottom-item .first-section-bottom-item-text {
  font-size: 14px;
  color: #FFFFFF;
  line-height: 1.1;
  font-family: "FuturaBT-MediumItalic.ttf";
}

.second-section {
  margin-top: 120px;
}

.second-section .second-section-content {
  position: relative;
  height: 350px;
  padding: 0 40px;  
}
.second-section .second-section-content .bgImg {
  position: absolute;
  top: 0;
  right: 0;
  background-image: url("../assets/image/images/finalProduct01.png");
  background-size: 627px 340px;
  background-repeat: no-repeat;
  background-position: center;
}
.second-section .second-section-content .second-section-content-list {
  font-family: "FuturaBT-MediumItalic.ttf";
  color: #6E4691;
  font-size: 18px;
  position: relative;
}
.second-section .second-section-content .second-section-content-list .second-section-content-list-item {
  margin: 30px 0;
}
.third-section .third-section-content {
  padding-top: 40px;
  background-image: url("../assets/image/images/finalProduct08.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}


.third-section .third-section-content .third-section-bottom-item {
  width: 680px;
  height: 65px;
  color: #FFFFFF;
  margin: 60px 0;
  padding: 0px 0 0 70px;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(90deg, #cb6a95 0%, rgba(255,255,255,0) 120%);
  position: relative;
  font-family: "FuturaBT-BoldItalic.ttf";
}
.third-section .third-section-content .third-section-bottom-item .img {
  position: absolute;
  left: 6px;
  bottom: 0;
  width: 50px;
  height: 92px;
}
.third-section .third-section-content .third-section-bottom-item .third-section-bottom-item-title {
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
}
.third-section .third-section-content .third-section-bottom-item .third-section-bottom-item-text {
  font-size: 13px;
  color: #FFFFFF;
  line-height: 1.1;
  font-family: "FuturaBT-MediumItalic.ttf";
}
.third-section .third-section-footer-list-wrap {
  padding: 20px 0;
  background-color: rgba(94, 158, 255, .1);
}
.third-section .third-section-footer-list-wrap .third-section-footer-list-title {
  margin-bottom: 20px;
  padding: 0px 40px;
  font-family: "FuturaBT-BoldItalic.ttf";
  color: #6E4691;
  font-size: 20px;
}
.third-section .third-section-footer-list-wrap .third-section-footer-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.third-section .third-section-footer-list-wrap .third-section-footer-list .img {
  width: 277px;
  height: 157px;
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
  color: #6E4691; 
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

