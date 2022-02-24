<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiperList"
            :key="index"
          >
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <!-- <h1>{{item.title}}</h1>
                <p>{{item.content}}</p> -->
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    </div>

    <!-- 行业发展现状  电脑显示 -->
    <div id="industryStatus" class="container-fuild hidden-xs">
      <div class="container industryStatus-container wow fadeInUp">
        <h2 class="title_H2">行业发展现状</h2>
        <p class="subtitle">
          中南科技独立性打造AIoT综合管理平台，为智慧社区为主的十大生活服务场景提供了一套完整健全的解决方案，利用一个系统对多个智慧应用产生联动，统一部署管理，通过市场化驱动、可持续发展的建设运营模式来协调社区住户、建设方、管理方的关系，让智慧社区链条上各个环节有效合作、各个不同服务模块之间衔接和有效运营。
        </p>

        <div class="industryStatus_content">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num1.png" alt="" />
              </div>
              <h3 class="i_title_h3">传统社区安防治理问题突出</h3>
              <p class="i_title_p">
                居民自主性不强，难以形成社区自治；传统治理手段难以满足日益增长的精细化管理需求
              </p>
            </div>
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/home/hangye1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="industryStatus_content marginTop70">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/home/hangye2.png"
                alt=""
              />
            </div>
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num2.png" alt="" />
              </div>
              <h3 class="i_title_h3">现代智慧社区难以形成有效盈利模式</h3>
              <p class="i_title_p">
                缺乏考虑社区居民的实际需求和后期运营维护问题，以致后期需要大最人力、物力进行维护，造成资源浪费。
              </p>
            </div>
          </div>
        </div>

        <div class="industryStatus_content marginTop70">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num3.png" alt="" />
              </div>
              <h3 class="i_title_h3">社区形态多样，共性需求不明确</h3>
              <p class="i_title_p">
                社区规划建造、管理机制、建设年代各有不同，智慧升级改造需求、建设重点不同，难以满足不同群体的个性化需求。
              </p>
            </div>
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/home/hangye3.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="industryStatus_content marginTop70">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/home/hangye4.png"
                alt=""
              />
            </div>
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num4.png" alt="" />
              </div>
              <h3 class="i_title_h3">智慧社区服务碎片化，整合联动不足</h3>
              <p class="i_title_p">
                智慧社区行业没有统一的标准，各个厂家各自为战纷纷推出智能产品，打造自己的生态链，导致形成了一个个分散的“信息孤岛”，应用服务碎片化现象明显，“智慧”难以凸显，社区居民获得感不强。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业发展现状  手机显示 -->
    <div id="industryStatus" class="container-fuild visible-xs">
      <div class="container industryStatus-container wow fadeInUp">
        <h2 class="title_H2">行业发展现状</h2>
        <p class="subtitle">
          中南科技独立性打造AIoT综合管理平台，为智慧社区为主的十大生活服务场景提供了一套完整健全的解决方案，利用一个系统对多个智慧应用产生联动，统一部署管理，通过市场化驱动、可持续发展的建设运营模式来协调社区住户、建设方、管理方的关系，让智慧社区链条上各个环节有效合作、各个不同服务模块之间衔接和有效运营。
        </p>

        <div class="industryStatus_content">
          <div
            class="industryStatus_item"
            v-for="(item, index) in mobileIndustryStatusList"
            :key="index"
          >
            <img class="industryStatus_titleImg" :src="item.titleImg" alt="" />
            <div class="industryStatus_title">{{ item.title }}</div>
            <div class="industryStatus_text">{{ item.text }}</div>
            <img class="industryStatus_img" :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 中南科技AIoT十大场景解决方案 -->
    <div id="Big10" class="container-fuild">
      <div class="container Big10-container wow fadeInUp">
        <h2 class="title_H2">中南科技AIoT十大场景解决方案</h2>

        <div class="big10_content">
          <div
            class="big10_item"
            v-for="(item, index) in big10List"
            :key="index"
          >
            <div class="img_weapper">
              <img :src="item.img" alt="" />
            </div>
            <div class="big10_text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 中南科技智慧安防+商业生态解决方案 -->
    <div id="ZnPlan" class="container-fuild">
      <div class="container ZnPlan-container wow fadeInUp">
        <h2 class="ZnPlan_title_H2">中南科技智慧安防+商业生态解决方案</h2>
        <p class="title_H2_p">（以社区为例）</p>
        <div class="ZnPlan_image marginTop50"></div>
      </div>
    </div>

    <!-- 项目案例 -->
    <div id="projectCases" class="container-fuild">
      <div class="container projectCases-container wow fadeInUp">
        <h2 class="title_H2">项目案例</h2>

        <div class="projectCases_content marginTop50 flex">
          <div class="projectCases_text_weapper">
            <h2 class="projectCases_content_title">
              {{ projectCasesData.title }}
            </h2>
            <div class="projectCases_content_text">
              <span class="line3_ellipsis">{{ projectCasesData.text }}</span>

              <span class="projectCases_content_span" @click="navTo(1)"
                >了解更多》</span
              >
            </div>
          </div>
          <div class="projectCases_img_weapper">
            <img src="@/assets/image/home/yyxz.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="bgF7F8FD visible-xs"></div>

    <!-- 合作企业 -->
    <div id="contactUs" class="container-fuild text-center wow fadeInUp">
      <h2 class="title_H2 pb50">合作企业</h2>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import {getbannerList} from "../api/home"

export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/image/home/banner-01.png"),
          path: "",
          title: "您身边的IT专家1",
          content:
            "宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介",
        },
        {
          img: require("@/assets/image/home/banner-02.png"),
          path: "",
          title: "您身边的IT专家2",
          content:
            "宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介",
        },
        {
          img: require("@/assets/image/home/banner-03.png"),
          path: "",
          title: "您身边的IT专家3",
          content:
            "宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介",
        },
      ],
      mobileIndustryStatusList: [
        {
          titleImg: require("../assets/image/home/num1.png"),
          img: require("../assets/image/mobileHome/mobile01.png"),
          title: "传统社区安防治理问题突出",
          text: "居民自主性不强，难以形成社区自治；传统治理手段难以满足日益增长的精细化管理需求。",
        },
        {
          titleImg: require("../assets/image/home/num2.png"),
          img: require("../assets/image/mobileHome/mobile02.png"),
          title: "现代智慧社区难以形成有效盈利模式",
          text: "缺乏考虑社区居民的实际需求和后期运营维护问题，以致后期需要大最人力、物力进行维护，造成资源浪费。",
        },
        {
          titleImg: require("../assets/image/home/num3.png"),
          img: require("../assets/image/mobileHome/mobile03.png"),
          title: "社区形态多样，共性需求不明确",
          text: "社区规划建造、管理机制、建设年代各有不同，智慧升级改造需求、建设重点不同，难以满足不同群体的个性化需求。",
        },
        {
          titleImg: require("../assets/image/home/num4.png"),
          img: require("../assets/image/mobileHome/mobile04.png"),
          title: "智慧社区服务碎片化，整合联动不足",
          text: "智慧社区行业没有统一的标准，各个厂家各自为战纷纷推出智能产品，打造自己的生态链，导致形成了一个个分散的“信息孤岛”，应用服务碎片化现象明显，“智慧”难以凸显，社区居民获得感不强。",
        },
      ],
      big10List: [
        {
          img: require("../assets/image/home/01@2x.png"),
          text: "住 宅",
        },
        {
          img: require("../assets/image/home/02@2x.png"),
          text: "商业综合体",
        },
        {
          img: require("../assets/image/home/03@2x.png"),
          text: "新农村",
        },
        {
          img: require("../assets/image/home/04@2x.png"),
          text: "工业园区",
        },
        {
          img: require("../assets/image/home/05@2x.png"),
          text: "政府办公类",
        },
        {
          img: require("../assets/image/home/06@2x.png"),
          text: "学 校",
        },
        {
          img: require("../assets/image/home/07@2x.png"),
          text: "文旅景点",
        },
        {
          img: require("../assets/image/home/08@2x.png"),
          text: "医疗康养",
        },
        {
          img: require("../assets/image/home/09@2x.png"),
          text: "酒店娱乐",
        },
        {
          img: require("../assets/image/home/10@2x.png"),
          text: "仓储物流园",
        },
      ],
      projectCasesData: {
        title: "颖云物联网小镇",
        text: "颖云物联网小镇位于河南省禹州市的颍云物联网科技创新园，被评为“2018年物联网集成创新与融合应用”示范项目，是河南省唯一一个智慧小镇项目，是中南科技AIOT智慧安防物联网一体化的重点示范项目，展厅综合呈现了国家级物联网基础设施、中南科技AIOT智慧社区物联网一体化应用和平台、人工智能软硬件设备等",
      },
    };
  },
  created() {},

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
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      // 延迟加载
      lazy: {
        loadPrevNext: true,
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
    this.bannerList()

  },

  methods: {
    navTo(id) {
      this.$router.push({ path: "/projectCases", query: { id } });
    },
    bannerList(){
      getbannerList({
        display:1,
        adaptation:1
      }).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  height: 700px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

#swiper /deep/ .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  margin: 0 30px;
}
#swiper /deep/ .swiper-pagination-bullet-active {
  background: #0994fb;
  position: relative;
}
#swiper /deep/ .swiper-pagination-bullet-active::after {
  content: "";
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid #0994fb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 行业发展现状 */
#industryStatus {
  background: #f8f9fe;
  padding-bottom: 70px;
}
#industryStatus .industryStatus-container .subtitle {
  margin-top: 30px;
  font-size: 18px;
  color: #666666;
  line-height: 30px;
  text-indent: 2em;
}
.industryStatus_content {
  transition: all ease 0.3s;
}
.industryStatus_content:hover {
  transform: translate3d(0, -6px, 0);
}
.industryStatus_content:hover .industryStatus_item_text .i_title_h3::after {
  width: 150px;
}
.industryStatus_item_text {
  width: 48%;
}
.industryStatus_item_text .item_num_weaper img {
  width: 75px;
  height: 60px;
}
.industryStatus_item_text .i_title_h3 {
  font-size: 24px;
  color: #333333;
  position: relative;
  padding: 0px 0px 20px;
}
.industryStatus_item_text .i_title_h3::after {
  content: "";
  width: 59px;
  height: 6px;
  background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
  border-radius: 3px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  transition: all ease 0.5s;
}
.industryStatus_item_text .i_title_p {
  font-size: 18px;
  color: #666666;
  line-height: 30px;
}
.industryStatus_item_image {
  width: 48%;

  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
}
.industryStatus_item_image .item_img {
  width: 546px;
  height: 286px;
}

/* 中南科技AIoT十大场景解决方案 */
#Big10 {
  background-color: #fff;
}
#Big10 .big10_content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#Big10 .big10_item {
  width: 20%;
  padding: 20px 20px;
}
#Big10 .img_weapper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
}
#Big10 .big10_item img {
  width: 100%;
}
#Big10 .big10_item img:hover {
  transform: scale(1.1);
  transition: all 1s;
}

#Big10 .big10_text {
  text-align: center;
  font-size: 24px;
  color: #333333;
  margin-top: 20px;
}

/* 中南科技智慧安防+商业生态解决方案 */
#ZnPlan {
  background: #f8f9fe;
  padding-bottom: 60px;
}
#ZnPlan .ZnPlan_title_H2 {
  font-size: 36px;
  color: #333333;
  line-height: 40px;
  margin: 0;
  padding: 40px 0px 0px;
  text-align: center;
}
#ZnPlan .title_H2_p {
  text-align: center;
  margin-top: 10px;
  font-size: 26px;
  color: #666666;
  position: relative;
  padding: 0px 0px 15px;
}
#ZnPlan .title_H2_p::after {
  content: "";
  width: 123px;
  height: 6px;
  background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ZnPlan_image {
  height: 990px;
  background: url("../assets/image/home/ZnPlan.png") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

/* 项目案例 */
#projectCases {
  background-color: #fff;
  padding-bottom: 70px;
}
.projectCases_content {
  width: 100%;
  height: 300px;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  box-sizing: border-box;
  padding: 30px 50px;
}
.projectCases_text_weapper {
  flex: 1;
  margin-right: 40px;
}
.projectCases_text_weapper .projectCases_content_text {
  margin-top: 20px;
  font-size: 18px;
  color: #666666;
  line-height: 30px;
}
.projectCases_content_span {
  color: #027bf0;
  cursor: pointer;
}
.projectCases_img_weapper {
  width: 357px;
  height: 238px;
  overflow: hidden;
}
.projectCases_img_weapper img {
  width: 100%;
  height: 100%;
}
.projectCases_img_weapper img:hover {
  transform: scale(1.1);
  transition: all 1s;
}

/* 合作企业 */
#contactUs {
  color: #fff;
  height: 675px;
  /* background: url("http://127.0.0.1:5500/static/image/1584605672360949.jpg") 0 0
    no-repeat; */
  /* background: url("http://www-tmp.zgzhongnan.com/static/upload/image/20200319/1584605672360949.jpg")
    0 0 no-repeat; */
  background: url("../assets/image/home/hezuo.png") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    /* height: 200px; */
    height: 150px;
  }
  #swiper /deep/ .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    line-height: 10px;
    color: #fff;
    margin: 0 15px;
  }
  #swiper /deep/ .swiper-pagination-bullet-active {
    background: #0994fb;
    position: relative;
  }
  #swiper /deep/ .swiper-pagination-bullet-active::after {
    content: "";
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid #0994fb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* 行业发展现状 */
  #industryStatus {
    padding-bottom: 40px;
  }
  #industryStatus .industryStatus-container .subtitle {
    margin-top: 15px;
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    text-indent: 2em;
  }
  .industryStatus_item {
    margin-top: 40px;
  }
  .industryStatus_titleImg {
    width: 22px;
    height: 17px;
  }
  .industryStatus_title {
    font-size: 20px;
    color: #333333;
    padding: 10px 0px;
    position: relative;
  }
  .industryStatus_title::after {
    content: "";
    width: 44px;
    height: 3px;
    background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .industryStatus_text {
    margin-top: 10px;
    font-size: 14px;
    color: #666666;
  }
  .industryStatus_img {
    margin-top: 20px;
    width: 100%;
  }

  /* 中南科技AIoT十大场景解决方案 */
  #Big10 .big10_item {
    width: 50%;
    padding: 10px 8px;
  }
  #Big10 .img_weapper {
    border-radius: 10px;
  }
  #Big10 .big10_text {
    font-size: 14px;
    margin-top: 10px;
  }

  /* 中南科技智慧安防+商业生态解决方案 */
  #ZnPlan {
    padding-bottom: 30px;
  }
  #ZnPlan .ZnPlan_title_H2 {
    font-size: 24px;
    line-height: 30px;
    margin: 0;
    padding: 40px 0px 0px;
  }
  #ZnPlan .title_H2_p {
    text-align: center;
    margin-top: 5px;
    font-size: 20px;
    position: relative;
    padding: 0px 0px 10px;
  }
  #ZnPlan .title_H2_p::after {
    content: "";
    width: 123px;
    height: 3px;
    background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .ZnPlan_image {
    height: 350px;
  }
  /* 项目案例 */
  #projectCases {
    padding-bottom: 40px;
  }
  .projectCases_content {
    width: 100%;
    height: 120px;
    box-shadow: 0px 0px 11px 0px rgba(47, 107, 238, 0.2);
    box-sizing: border-box;
    padding: 10px 12px;
  }
  .projectCases_text_weapper {
    flex: 1;
    margin-right: 20px;
  }
  .projectCases_text_weapper .projectCases_content_title {
    font-size: 18px;
    margin: 0;
  }
  .projectCases_text_weapper .projectCases_content_text {
    margin-top: 5px;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }

  .projectCases_img_weapper {
    width: 110px;
    height: 74px;
    overflow: hidden;
  }

  /* 合作企业 */
  #contactUs {
    height: 130px;
  }
  .bgF7F8FD {
    width: 100%;
    height: 20px;
    background: #fbfcfe;
  }
  .pb50 {
    transform: translateY(-30px);
  }
}
</style>

