<template>
  <!-- 招商代理 -->
  <div id="CompanyIntroduction">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" />

    <!-- 合作优势  电脑显示-->
    <div id="industryStatus" class="container-fuild hidden-xs">
      <div class="container industryStatus-container wow fadeInUp">
        <h2 class="title_H2">合作优势</h2>

        <div class="industryStatus_content">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num1.png" alt="" />
              </div>
              <h3 class="i_title_h3">销售前置</h3>
              <p class="i_title_p">工程项目销售前置、提前争得项目归属；</p>
            </div>
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/CompanyIntroduction/hz1.png"
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
                src="@/assets/image/CompanyIntroduction/hz2.png"
                alt=""
              />
            </div>
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num2.png" alt="" />
              </div>
              <h3 class="i_title_h3">快速锁标</h3>
              <p class="i_title_p">前沿核心技术助力项目控标；</p>
            </div>
          </div>
        </div>

        <div class="industryStatus_content marginTop70">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num3.png" alt="" />
              </div>
              <h3 class="i_title_h3">多利润线</h3>
              <p class="i_title_p">产品利润、系统利润、施工利润;</p>
            </div>
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/CompanyIntroduction/hz3.png"
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
                src="@/assets/image/CompanyIntroduction/hz4.png"
                alt=""
              />
            </div>
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num4.png" alt="" />
              </div>
              <h3 class="i_title_h3">额外创收</h3>
              <p class="i_title_p">
                系统服务费分润，用户端平台运营利润分成、硬件产品更新迭代利润;
              </p>
            </div>
          </div>
        </div>

        <div class="industryStatus_content marginTop70">
          <div class="industryStatus_weapper_left flex flexBetween marginTop50">
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num5.png" alt="" />
              </div>
              <h3 class="i_title_h3">多种附赠</h3>
              <p class="i_title_p">赠送AIoT综合管理平台;</p>
            </div>
            <div class="industryStatus_item_image">
              <img
                class="item_img"
                src="@/assets/image/CompanyIntroduction/hz5.png"
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
                src="@/assets/image/CompanyIntroduction/hz6.png"
                alt=""
              />
            </div>
            <div class="industryStatus_item_text">
              <div class="item_num_weaper">
                <img src="../../src/assets/image/home/num6.png" alt="" />
              </div>
              <h3 class="i_title_h3">拓展合作</h3>
              <p class="i_title_p">智能家居一站式合作，提供智能家居解决方案;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作优势  手机显示 -->
    <div id="industryStatus" class="container-fuild visible-xs">
      <div class="container industryStatus-container wow fadeInUp">
        <h2 class="title_H2">合作优势</h2>

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

    <!-- 合作权益 -->
    <div id="cooperate" class="container-fuild">
      <div class="container cooperate-container wow fadeInUp">
        <h2 class="title_H2">合作权益</h2>

        <div class="cooperate_content marginTop50">
          <div
            class="cooperate_item"
            v-for="(item, index) in cooperateList"
            :key="index"
          >
            <div class="img_weapper">
              <img :src="item.img" alt="" />
            </div>
            <div class="cooperate_text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <Contact />
  </div>
</template> 
<script>
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图
import Contact from "../components/contact"; //联系我们

export default {
  name: "JobChance",
  components: {
    Banner,
    Contact,
  },
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/image/CompanyIntroduction/banner.png"),
        },
      ],
      mobileIndustryStatusList: [
        {
          titleImg: require("../assets/image/home/num1.png"),
          img: require("../assets/image/CompanyIntroduction/hz1.png"),
          title: "销售前置",
          text: "工程项目销售前置、提前争得项目归属；",
        },
        {
          titleImg: require("../assets/image/home/num2.png"),
          img: require("../assets/image/CompanyIntroduction/hz2.png"),
          title: "快速锁标",
          text: "前沿核心技术助力项目控标；",
        },
        {
          titleImg: require("../assets/image/home/num3.png"),
          img: require("../assets/image/CompanyIntroduction/hz3.png"),
          title: "多利润线",
          text: "产品利润、系统利润、施工利润;",
        },
        {
          titleImg: require("../assets/image/home/num4.png"),
          img: require("../assets/image/CompanyIntroduction/hz4.png"),
          title: "额外创收",
          text: "系统服务费分润，用户端平台运营利润分成、硬件产品更新迭代利润;",
        },
        {
          titleImg: require("../assets/image/home/num5.png"),
          img: require("../assets/image/CompanyIntroduction/hz5.png"),
          title: "多种附赠",
          text: "赠送AIoT综合管理平台;",
        },
        {
          titleImg: require("../assets/image/home/num6.png"),
          img: require("../assets/image/CompanyIntroduction/hz6.png"),
          title: "拓展合作",
          text: "智能家居一站式合作，提供智能家居解决方案;;",
        },
      ],
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
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {},
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
#industryStatus {
  background: #f8f9fe;
  padding-bottom: 100px;
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

/* 合作权益 */
#cooperate {
  background-color: #fff;
  padding-bottom: 90px;
}
.cooperate_content {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  row-gap: 30px;
  justify-items: center;
}
.cooperate_item {
  width: 333px;
  height: 310px;
  background: #ffffff;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 40px;
  text-align: center;
}
.cooperate_item .img_weapper {
  width: 71px;
  height: 71px;
  display: inline-block;
}
.cooperate_item .img_weapper img {
  width: 100%;
  height: 100%;
}
.cooperate_text {
  margin-top: 40px;
  font-size: 24px;
  color: #666666;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  /* 合作优势 */
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
  /* 合作权益 */
  #cooperate {
    padding-bottom: 40px;
  }
  .cooperate_content {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    row-gap: 30px;
    justify-items: center;
  }
  .cooperate_item {
    width: 100%;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
  }
  .cooperate_item .img_weapper {
    width: 25px;
    height: 30px;
  }
  .cooperate_item .img_weapper img{
    width: 100%;
    height: 100%;
  }
  .cooperate_text {
    flex: 1;
    font-size: 14px;
    margin-top: 0px;
    text-align: left;
    margin-left: 15px;
  }
}
</style>

