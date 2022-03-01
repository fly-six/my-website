<template>
  <!-- 关于中南 -->
  <div id="ContactUs">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" :mobileSwiperList="mobileSwiperList" />

    <!-- 关于我们 -->
    <div id="about" class="container-fuild">
      <div class="container about-container wow fadeInUp">
        <h2 class="title_H2">关于我们</h2>
        <div class="about_content marginTop50 flex">
          <div class="flex1 about_info">
            <div class="about_title_H3">关于中南</div>
            <div class="about_title">中南信息科技（深圳）有限公司</div>
            <p class="about_p">
              中南信息科技（深圳）有限公司是一家专业的智慧安防物联网系统服务提供商；国家高新技术企业、双软企业。拥有商标28个、专利25个、发明专利4个、软著49个。
            </p>
            <p class="about_p">
              目前公司与中电科集团、中星微集团、海康威视等物联网行业头部企业共同合作，在河南禹州打造一个“国家新型物联网基础设施项目——颖云物联网小镇”，该项目是河南省唯一一个省重点物联网应用示范项目，该项目包括物联网产业园、应用示范区、运营中心、大数据运维、政务办公为一体的小型城市综合体。截止目前，中南科技AIoT业务范围覆盖18个城市，超过600个小区，辐射用户超百万人。
            </p>
          </div>
          <div class="flex1 about_video">
            <video
              id="video"
              src="https://video.zgzhongnan.com/shiping.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>
    </div>

    <!-- 荣誉资质 -->
    <div id="honor" class="container-fuild">
      <div class="container honor-container wow fadeInUp">
        <h2 class="title_H2">荣誉资质</h2>
        <div class="honor_content marginTop50 flex flexAgrount">
          <div
            class="honor_item"
            v-for="(item, index) in honorList"
            :key="index + 'a'"
          >
            <div class="honor_img_weapper">
              <img :src="item.img" alt="" />
            </div>
            <div class="honor_text">{{ item.text }}</div>
          </div>
        </div>

        <div class="swiper-container customer-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item, index) in honorsList"
              :key="index + 'b'"
            >
              <img class="honor_carouse_img" :src="item.img" alt="" />
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
    </div>

    <!-- 合作企业 -->
    <div id="joint" class="container-fuild">
      <div class="container joint-container wow fadeInUp">
        <h2 class="title_H2">合作企业</h2>

        <div class="joint_content swiper-container joint-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in jointList"
              :key="index + 'c'"
            >
              <div class="joint_img_weapper">
                <img class="joint_img" :src="item.img" alt="" />
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>

    <!-- 企业文化 电脑端-->
    <div id="culture" class="container-fuild hidden-xs">
      <div class="container culture-container wow fadeInUp">
        <h2 class="title_H2">企业文化</h2>
        <div class="culture_content marginTop50">
          <div
            class="culture_item flex"
            v-for="(item, index) in cultureList"
            :key="index + 'd'"
          >
            <div class="culture_title_weappr">
              <div class="culture_title1">{{ item.title1 }}</div>
              <div class="culture_title1">{{ item.title2 }}</div>
            </div>
            <img class="culture_img" :src="item.img" alt="" />

            <div>
              <div class="culture_text">{{ item.text1 }}</div>
              <div class="culture_text" v-if="item.text2">{{ item.text2 }}</div>
              <div class="culture_text" v-if="item.text3">{{ item.text3 }}</div>
              <div class="culture_text" v-if="item.text4">{{ item.text4 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 企业文化 电脑端手机端-->
    <div id="culture" class="container-fuild visible-xs">
      <div class="container culture-container wow fadeInUp">
        <h2 class="title_H2">企业文化</h2>
        <div class="culture_content marginTop50">
          <div
            class="mobile_culture_item"
            v-for="(item, index) in cultureList.slice(1, 5)"
            :key="index + 'e'"
          >
            <img class="mobile_culture_img" :src="item.img" alt="" />

            <div class="mobile_culture_title_weappr">
              <div class="mobile_culture_title1">
                {{ item.title1 }}{{ item.title2 }}
              </div>
            </div>

            <div>
              <div class="mobile_culture_text">{{ item.text1 }}</div>
              <div class="mobile_culture_text" v-if="item.text2">
                {{ item.text2 }}
              </div>
              <div class="mobile_culture_text" v-if="item.text3">
                {{ item.text3 }}
              </div>
              <div class="mobile_culture_text" v-if="item.text4">
                {{ item.text4 }}
              </div>
            </div>
          </div>

          <div
            class="mobile_culture_item"
            v-for="(item, index) in cultureList.slice(0, 1)"
            :key="index"
          >
            <img class="mobile_culture_img" :src="item.img" alt="" />

            <div class="mobile_culture_title_weappr">
              <div class="mobile_culture_title1 mobile_culture_title2">
                {{ item.title1 }}{{ item.title2 }}
              </div>
            </div>

            <div class="mobile_culture_text_weapper">
              <div class="mobile_culture_text">{{ item.text1 }}</div>
              <div class="mobile_culture_text" v-if="item.text2">
                {{ item.text2 }}
              </div>
              <div class="mobile_culture_text" v-if="item.text3">
                {{ item.text3 }}
              </div>
              <div class="mobile_culture_text" v-if="item.text4">
                {{ item.text4 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <Contact />
  </div>
</template> 
<script>
import { getbannerList } from "../api/home";
import { WOW } from "wowjs";
import Swiper from "swiper";
import Banner from "../components/banner"; //轮播图
import Contact from "../components/contact"; //联系我们

export default {
  name: "ContactUs",
  components: {
    Banner,
    Contact,
  },
  data() {
    return {
      swiperList: [],
      mobileSwiperList: [],
      cooperateList: [
        {
          img: require("@/assets/image/CompanyIntroduction/num1.png"),
          text: "协助合作伙伴召开政府相关会议；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num2.png"),
          text: "提供精准化、专业化的项目梳理及操作方案，促进项目落地实施；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num3.png"),
          text: "协助项目标书制作、现场投标等招标事宜的开展；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num4.png"),
          text: "专业商务团队培训，专业技术团队培训；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num5.png"),
          text: "协助AIoT综合管理平台技术对接及产品调试；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num6.png"),
          text: "项目的现场勘察、方案制作、安装指导，重大项目的技术攻关；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num7.png"),
          text: "赠送AIoT综合管理平台演示系统两套；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num8.png"),
          text: "针对政府采购和投标，提供技术支持；",
        },
        {
          img: require("@/assets/image/CompanyIntroduction/num9.png"),
          text: "实时线上线下技术支持，提供项目合伙人专用交流通道；",
        },
      ],
      honorList: [
        {
          img: require("../assets/image/ContactUs/zs1.png"),
          text: "高新技术企业证书",
        },
        {
          img: require("../assets/image/ContactUs/zs2.png"),
          text: "“双软”证书——软件产品证书",
        },
        {
          img: require("../assets/image/ContactUs/zs3.png"),
          text: "“双软”证书——软件企业证书",
        },
      ],
      honorsList: [
        {
          img: require("../assets/image/ContactUs/zs/1.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/2.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/3.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/4.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/5.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/6.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/7.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/8.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/9.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/10.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/11.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/12.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/13.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/14.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/15.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/16.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/17.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/18.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/19.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/zs/20.jpg"),
        },
      ],
      jointList: [
        {
          img: require("../assets/image/ContactUs/hzhb/zhongxingjishu.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/huawei.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/baidu.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/zhongdianke.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/hkws.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/dh.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/ali.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/cunyuyisheng.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/dnk.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/gongshangyinghang.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021349400-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021351300-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021354370-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021352210-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021356080-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/1-2004021400120-L.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/beitai.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/hm.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/jn.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/sl.png"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/tengxun.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/ty.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/zhongguoyidong.jpg"),
        },
        {
          img: require("../assets/image/ContactUs/hzhb/zhongguoyouz.jpg"),
        },
      ],
      cultureList: [
        {
          img: require("../assets/image/ContactUs/w1.png"),
          title1: "中南",
          title2: "理念",
          text1: "科技——科技是让生活变美好的原动力",
          text2: "服务——用户至上，用心为用户创造价值",
          text3: "合作——与合作伙伴共赢",
          text4: "务实——实事求是创造价值",
        },
        {
          img: require("../assets/image/ContactUs/w2.png"),
          title1: "中南",
          title2: "愿景",
          text1: "具备强大的科技实力",
          text2: "成为中国智慧城市领域的领先专家",
        },
        {
          img: require("../assets/image/ContactUs/w3.png"),
          title1: "中南",
          title2: "使命",
          text1: "用科技改变生活",
          text2: "让生活更加安全、便利、美好",
        },
        {
          img: require("../assets/image/ContactUs/w4.png"),
          title1: "中南",
          title2: "责任",
          text1: "兴业，护民，惠民，便民，安民",
        },
        {
          img: require("../assets/image/ContactUs/w5.png"),
          title1: "中南",
          title2: "价值观",
          text1: "奋进、拼搏、创新、行稳致远",
        },
      ],
      contactData: {
        title: "中南信息科技（深圳）有限公司（深圳·合肥·郑州·禹州）",
        text1: "咨询热线：400-763-6668",
        text2: "硬件合作：18019585305（丁）",
        text3: "设计院合作：18538939326（陈）",
        text4: "招商热线：16637195486（许）",
      },
    };
  },

  mounted() {
    this.bannerList();

    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 4, //每行个数
      touchRatio: 2, //拖动速度
      breakpoints: {
        768: {
          //当屏幕宽度小于等于768
          slidesPerView: 2,
        },
      },
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

    /* joint-swiper */
    new Swiper(".joint-swiper", {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
      loopedSlides: 4,
      breakpoints: {
        768: {
          //当屏幕宽度小于等于768
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
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
        dynamicBullets: true,
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true,
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });

    var wow = new WOW();
    wow.init();
  },
  methods: {
    bannerList() {
      getbannerList({
        display: 2,
        adaptation: 1,
      }).then((res) => {
        if (res.code == 0) {
          this.swiperList = res.rows;
        }
      });
      getbannerList({
        display: 2,
        adaptation: 2,
      }).then((res) => {
        if (res.code == 0) {
          this.mobileSwiperList = res.rows;
        }
      });
    },
  },
};
</script>
<style scoped>
/* 企业案例 */
#Case {
  background-color: #fff;
  padding-bottom: 70px;
}
.Case_subtitle {
  font-size: 18px;
  color: #666666;
  text-align: center;
  margin-top: 30px;
}
.Case_content {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  row-gap: 30px;
  justify-items: center;
}
.Case_item {
  width: 351px;
  height: 381px;
  background: #ffffff;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 18px 20px;
  position: relative;
}
.Case_item .img_weapper {
  width: 311px;
  height: 156px;
  overflow: hidden;
}
.Case_item .img_weapper:hover img {
  transform: scale(1.1);
  transition: all 1s;
}
.Case_item .img_weapper img {
  width: 100%;
  height: 100%;
}
.Case_title {
  font-size: 24px;
  color: #333333;
  text-align: center;
  margin-top: 20px;
}
.Case_text {
  font-size: 12px;
  color: #666666;
  line-height: 24px;
}
.Case_btn_weapper {
  text-align: center;
  position: absolute;
  bottom: 27px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
}
.Case_btn {
  display: inline-block;
  border: 1px solid #2a80ef;
  border-radius: 5px;
  font-size: 12px;
  color: #2a80ef;
  padding: 10px 15px;
}

.Case_btn_weapper:hover .Case_btn {
  background-color: #2a80ef;
  color: #fff;
}
.pagination_weapper {
  margin-top: 70px;
  text-align: center;
}

/* 合作优势 */
#about {
  background-color: #f8f9fe;
  padding-bottom: 70px;
}
.about_info {
  padding: 10px 20px;
  margin-right: 20px;
}
.about_title_H3 {
  font-size: 24px;
  color: #333333;
  position: relative;
  padding-bottom: 18px;
  font-weight: bold;
}
.about_title_H3::after {
  content: "";
  width: 59px;
  height: 6px;
  background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.about_title {
  font-size: 18px;
  color: #333333;
  margin-top: 28px;
  font-weight: bold;
  margin-bottom: 17px;
}
.about_p {
  font-size: 12px;
  color: #666666;
  line-height: 24px;
}
.about_video {
  width: 100%;
  height: 307px;
}
#video {
  width: 100%;
  height: 100%;
}

/* 荣誉资质 */
#honor {
  background-color: #fff;
  padding-bottom: 100px;
}
.honor_item {
  width: 30%;
  padding-bottom: 20px;
}
.honor_img_weapper {
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
}
.honor_item img {
  width: 100%;
  height: 100%;
}
.honor_text {
  margin-top: 30px;
  font-size: 18px;
  color: #333333;
  text-align: center;
}

.honor_carouse_img {
  /* width: 269px;
  height: 352px; */
  width: 100%;
  height: 100%;
}

/* 合作企业 */
#joint {
  background-color: #f8f9fe;
  padding-bottom: 20px;
}
.joint_content {
  padding: 20px 0px 60px;
}

.joint_img_weapper {
  /* width: 247px; */
  height: 121px;
  background: #ffffff;
  box-shadow: 2px 2px 6px 1px rgba(47, 107, 238, 0.2);
}
.joint_img {
  width: 100%;
  height: 100%;
}

/* 企业文化 */
#culture {
  background-color: #fff;
  padding-bottom: 70px;
}
.culture_item {
  width: 837px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(47, 107, 238, 0.2);
  margin: 50px auto 0px;
  box-sizing: border-box;
  padding: 35px 70px;
}
.culture_title_weappr {
  width: 200px;
  height: 71px;
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  line-height: 41px;
  text-align: center;
  letter-spacing: 10px;
}
.culture_img {
  width: 95px;
  height: 91px;
  margin-right: 60px;
}
.culture_text {
  font-size: 18px;
  color: #333333;
  line-height: 35px;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  /* 合作优势 */
  #about {
    padding-bottom: 20px;
  }
  .about_title_H3 {
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 9px;
  }
  .about_title_H3::after {
    height: 3px;
  }
  .about_title {
    font-size: 16px;
    color: #333333;
    margin-top: 18px;
    font-weight: normal;
    margin-bottom: 8px;
  }
  .about_content {
    display: block;
  }
  .about_info {
    margin-right: 0px;
  }
  .about_p {
    margin-bottom: 0px;
    line-height: 22px;
  }
  .about_video {
    height: 188px;
  }

  /* 荣誉资质 */
  #honor {
    padding-bottom: 20px;
  }
  .honor_content {
    align-items: flex-start;
  }
  .honor_text {
    font-size: 14px;
  }
  .honor_carouse_img {
    width: 100%;
    height: 100%;
  }

  /* 合作企业 */
  .joint_content {
    padding: 20px 0px 30px;
  }
  .joint_img_weapper {
    height: 50px;
  }

  /* 企业文化 */
  #culture {
    padding-bottom: 20px;
  }
  .culture_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .mobile_culture_item {
    width: 47%;
    margin-top: 15px;
    height: 156px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(47, 107, 238, 0.2);
    text-align: center;
    padding: 15px;
    box-sizing: border-box;
  }
  .mobile_culture_img {
    width: 65px;
    height: 62px;
    display: inline-block;
  }
  .mobile_culture_title1 {
    font-size: 18px;
    font-weight: bold;
  }
  .mobile_culture_text {
    font-size: 12px;
  }
  .mobile_culture_item:last-of-type {
    width: 100%;
    height: 100px;
    margin-right: 0px;
    display: flex;
    align-items: center;
    /* justify-content: start; */
  }
  .mobile_culture_title2:last-of-type {
    width: 30px;
    line-height: 20px;
  }
  .mobile_culture_text_weapper {
    text-align: start;
  }
}
</style>

