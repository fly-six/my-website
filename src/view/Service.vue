<template>
  <!-- AIOT综合管理平台 -->
  <div id="Service">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" :mobileSwiperList="mobileSwiperList" />

    <!-- 关于AIOT综合管理平台 -->
    <div id="AIOT" class="container-fuild">
      <div class="AIOT-container container wow fadeInUp">
        <h2 class="title_H2">关于AIOT综合管理平台</h2>
        <div class="flex flexCenter">
          <div class="AIOT_image_weaper marginTop50">
            <img
              class="hidden-xs"
              src="@/assets/image/service/AIOT.png"
              alt=""
            />
            <img
              class="visible-xs"
              src="@/assets/image/mobileService/AIOT.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 六大业务体系 -->
    <div id="big6" class="container-fuild">
      <div class="container big6-container wow fadeInUp">
        <h2 class="title_H2">六大业务体系</h2>

        <div class="big6_content marginTop50">
          <div class="big6_item" v-for="(item, index) in big6List" :key="index">
            <div class="img_weapper">
              <img :src="item.img" alt="" />
            </div>
            <div class="big6_item_active">
              <div class="big6_title">{{ item.title }}</div>
              <div class="big6_subtitle">{{ item.subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 十大应用场景 -->
    <div id="tenBig" class="container-fuild">
      <div class="container tenBig-container wow fadeInUp">
        <h2 class="title_H2">十大应用场景</h2>

        <div class="tenBig_content marginTop50">
          <div
            class="tenBig_item"
            v-for="(item, index) in tenBigList"
            :key="index"
          >
            <div class="img_weapper wow pulse">
              <img :src="item.img" alt="" />
            </div>
            <div class="tenBig_title marginTop10">{{ item.title }}</div>
            <div class="tenBig_text marginTop10">{{ item.text1 }}</div>
            <div class="tenBig_text">{{ item.text2 || "" }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品优势  电脑显示-->
    <div id="odds" class="container-fuild hidden-xs">
      <div class="container odds-container wow fadeInUp">
        <h2 class="title_H2">产品优势</h2>

        <div class="odds_content marginTop50">
          <div
            class="odds_item wow pulse"
            v-for="(item, index) in oddsList"
            :key="index"
          >
            <div class="odds_title flex flexCenter">{{ item.title }}</div>
            <div class="odds_title_active">
              <div class="odds_title_active_title">{{ item.title }}</div>
              <div class="odds_title_active_text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品优势  手机显示-->
    <div id="odds" class="container-fuild visible-xs">
      <div class="container odds-container wow fadeInUp">
        <h2 class="title_H2">产品优势</h2>

        <div class="mobile_odds_content marginTop50">
          <div
            class="mobile_odds_item wow pulse"
            v-for="(item, index) in oddsList"
            :key="index"
          >
            <div class="mobile_odds_title_active">
              <div class="mobile_odds_title_active_title">{{ item.title }}</div>
              <div class="mobile_odds_title_active_text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 万物互联  万物互通  电脑显示 -->
    <div id="allThings" class="container-fuild hidden-xs">
      <div class="container allThings-container wow fadeInUp">
        <h2 class="title_H2">万物互联 万物互通</h2>

        <div class="allThings_content flex marginTop50">
          <div
            class="allThings_item flex1"
            v-for="(item, index) in allThingsList"
            :key="index"
          >
            <img class="img_weapper" :src="item.img" alt="" />
            <div class="allThings_title">{{ item.title }}</div>
            <div class="allThings_text" v-if="!item.text2">{{ item.text }}</div>
            <div class="allThings_text2" v-else>
              <div class="">{{ item.text }}</div>
              <div class="">{{ item.text2 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 万物互联  万物互通  手机显示-->
    <div id="allThings" class="container-fuild visible-xs">
      <div class="container allThings-container wow fadeInUp">
        <h2 class="title_H2">万物互联 万物互通</h2>

        <div class="allThings_content flex flexCenter marginTop50">
          <div class="flex1 a_weapper">
            <div class="a_item_weapper_l">
              <div class="a_title">{{ allThingsList[0].title }}</div>
              <div class="a_text">{{ allThingsList[0].text }}</div>
            </div>

            <div class="a_item_weapper_l">
              <div class="a_title">{{ allThingsList[2].title }}</div>
              <div class="a_text">{{ allThingsList[2].text }}</div>
            </div>
          </div>
          <div class="flex1 a_center_weapper">
            <img
              class="allThings_image"
              src="../assets/image/mobileService/wanwu.png"
              alt=""
            />
          </div>

          <div class="flex1 a_weapper">
            <div class="a_item_weapper">
              <div class="a_title">{{ allThingsList[1].title }}</div>
              <div class="a_text">{{ allThingsList[1].text }}</div>
            </div>
            <div class="a_item_weapper">
              <div class="a_title">{{ allThingsList[3].title }}</div>
              <div class="a_text">
                {{ allThingsList[3].text }}{{ allThingsList[3].text2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getbannerList } from "../api/home";
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图

export default {
  name: "Service",
  components: {
    Banner,
  },
  data() {
    return {
      swiperList: [],
      mobileSwiperList: [],
      big6List: [
        {
          img: require("../assets/image/service/big1.png"),
          title: "AIoT综合管理平台系统",
          subtitle: "多个智慧应用联动、统一部署管理",
        },
        {
          img: require("../assets/image/service/big2.png"),
          title: "一体化综合管理解决方案",
          subtitle: "定制化服务，十大生活服务场景",
        },
        {
          img: require("../assets/image/service/big3.png"),
          title: "智慧安防硬件产品设备",
          subtitle: "核心专利技术、强大的合作供应链",
        },
        {
          img: require("../assets/image/service/big4.png"),
          title: "智慧安防定制SAAS服务",
          subtitle: "全生命周期数字化管理，灵活定制个性化应用",
        },
        {
          img: require("../assets/image/service/big5.png"),
          title: "智慧安防平台增值服务",
          subtitle: "用户端app服务生态、商业生态运营",
        },
        {
          img: require("../assets/image/service/big6.png"),
          title: "智慧安防客户终端软件平台",
          subtitle: "用户端、物业管理端、商户端",
        },
      ],
      tenBigList: [
        {
          img: require("../assets/image/service/ten1.png"),
          title: "住  宅",
          text1: "商住智慧楼盘",
          text2: "老旧小区升级改造",
        },
        {
          img: require("../assets/image/service/ten2.png"),
          title: "酒店娱乐",
          text1: "智慧酒店",
          text2: "智慧文娱场所",
        },
        {
          img: require("../assets/image/service/ten3.png"),
          title: "工业园区",
          text1: "智慧产业园 ",
          text2: "智慧厂房",
        },
        {
          img: require("../assets/image/service/ten4.png"),
          title: "医疗康养",
          text1: "智慧医院",
          text2: "智慧养老中心",
        },
        {
          img: require("../assets/image/service/ten5.png"),
          title: "商业综合体",
          text1: "智慧商场",
          text2: "智慧公园",
        },
        {
          img: require("../assets/image/service/ten6.png"),
          title: "仓储物流园",
          text1: "智慧仓储集散中心",
          text2: "智慧物流中心",
        },
        {
          img: require("../assets/image/service/ten7.png"),
          title: "文旅景点",
          text1: "智慧化景区",
          text2: "智慧文化展馆",
        },
        {
          img: require("../assets/image/service/ten8.png"),
          title: "政府办公类",
          text1: "智慧机关单位",
          text2: "智慧市政建设",
        },
        {
          img: require("../assets/image/service/ten9.png"),
          title: "学  校",
          text1: "智慧大中小学校",
          text2: "智慧教育机构",
        },
        {
          img: require("../assets/image/service/ten10.png"),
          title: "新农村",
          text1: "智慧新农村建设",
          text2: "",
        },
      ],
      oddsList: [
        {
          title: "全场景",
          text: "十大智慧应用场景；定制智慧解决方案",
        },
        {
          title: "一体化",
          text: "多种智慧应用系统一体化；更高效、更安全；",
        },
        {
          title: "广兼容",
          text: "多种智慧产品软硬件兼容，AI数据分析，真智能；",
        },
        {
          title: "全联动",
          text: "多智慧安防应用联动，有效防控预警；",
        },
        {
          title: "私有云",
          text: "统一的 API 协议接口、采用分布式架构、私有云部署、支持多种 SDK 接入，数据安全有保障；",
        },
        {
          title: "高价值",
          text: "助力开发商进入地产后市场经营，创造更高价值，平台电商生态服务，为物业创造额外增收；",
        },
        {
          title: "低成本",
          text: "节省管理成本 30%-40%，更低采购施工成本；",
        },
        {
          title: "高满意度",
          text: "智慧无感安防管理，更高服务效率和服务品质，提升用户满意度和幸福指数；",
        },
      ],
      allThingsList: [
        {
          img: require("../assets/image/service/all1.png"),
          title: "数据同步",
          text: "基础数据双向同步",
        },
        {
          img: require("../assets/image/service/all2.png"),
          title: "软件连接",
          text: "自有系统无缝对接",
        },
        {
          img: require("../assets/image/service/all3.png"),
          title: "硬件连接",
          text: "自有设备无缝对接",
        },
        {
          img: require("../assets/image/service/all4.png"),
          title: "开放接口",
          text: "开放上游硬件的api接口",
          text2: "开放下游软件的sdk接口",
        },
      ],
    };
  },
  mounted() {
    this.bannerList();
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
    // ServiceClick(id){
    //     this.$router.push({
    //         name: 'servicedetail',
    //         params: {
    //             id: id
    //         }
    //     })
    // }
  },
};
</script>
<style scoped>
/* 关于AIOT综合管理平台 */
#AIOT {
  background-color: #f8f9fe;
  padding-bottom: 80px;
}
.AIOT_image_weaper {
  width: 100%;
}
.AIOT_image_weaper img {
  width: 100%;
}
/* 六大业务体系 */
#big6 {
  background-color: #fff;
  padding-bottom: 70px;
}
#big6 .big6_content {
  display: grid;
  /* grid-template-columns: 33.33% 33.33% 33.33%; */
  grid-template-columns: repeat(3, 33.33%);
  grid-row-gap: 30px;
  justify-items: center;
}
#big6 .big6_item {
  width: 348px;
  height: 214px;
  position: relative;
}
#big6 .img_weapper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
}
#big6 .big6_item img {
  width: 100%;
  height: 100%;
}
#big6 .big6_item:hover img {
  transform: scale(1.1);
  transition: all 1s;
}
.big6_item_active {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 35px;
  position: absolute;
  z-index: 2;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.big6_title {
  font-size: 24px;
  color: #ffffff;
  position: relative;
  padding-bottom: 16px;
}
.big6_title::after {
  content: "";
  width: 60px;
  height: 6px;
  background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.big6_item_active .big6_subtitle {
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  color: #ffffff;
  line-height: 26px;
}

/* 十大场景 */
#tenBig {
  background-color: #f8f9fe;
  padding-bottom: 60px;
}
.tenBig_content {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 30px;
  justify-items: center;
}
.tenBig_item {
  text-align: center;
}
.tenBig_item .img_weapper {
  width: 125px;
  height: 144px;
  display: inline-block;
}
.tenBig_item .img_weapper img {
  width: 100%;
  height: 100%;
}
.tenBig_item div {
  text-align: center;
}
.tenBig_title {
  font-size: 30px;
  color: #333333;
}
.tenBig_text {
  font-size: 24px;
  color: #666666;
  line-height: 40px;
}

/* 产品优势 */
#odds {
  background-color: #fff;
  padding-bottom: 70px;
}
.odds_content {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 142px);

  row-gap: 20px;
  justify-items: center;
  align-items: center;
}
.odds_title {
  width: 225px;
  height: 101px;
  background: #ffffff;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  border-radius: 10px;
  font-size: 42px;
  color: #2b80f0;
  transition: all 1s;
}
.odds_title_active {
  width: 319px;
  height: 142px;
  background: #2b80f0;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  border-radius: 10px;
  text-align: center;
  padding: 12px 30px;
  display: none;
  transition: all 1s;
}
.odds_title_active_title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}
.odds_title_active_text {
  margin-top: 10px;
  font-size: 18px;
  color: #ffffff;
}
.odds_item:hover .odds_title {
  display: none;
}
.odds_item:hover .odds_title_active {
  display: block;
}
/* 万物互联  万物互通 */
#allThings {
  background-color: #f8f9fe;
  padding-bottom: 70px;
}
.allThings_item {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.allThings_item .img_weapper {
  display: inline-block;
  width: 117px;
  height: 108px;
}
.allThings_title {
  margin-top: 32px;
  font-size: 30px;
  color: #2b80f0;
  position: relative;
}
.allThings_title::after {
  content: "";
  width: 1px;
  height: 152px;
  border-left: 4px dashed #2b80f0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 40%);
}
.allThings_text {
  margin-top: 200px;
  display: inline-block;
  width: 236px;
  height: 66px;
  background: #2b80f0;
  border: 2px solid #2b80f0;
  border-radius: 33px;
  font-size: 24px;
  color: #ffffff;
  line-height: 66px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.allThings_text2 {
  margin-top: 200px;
  display: inline-block;
  width: 236px;
  height: 66px;
  background: #2b80f0;
  border: 2px solid #2b80f0;
  border-radius: 33px;
  font-size: 18px;
  color: #ffffff;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  /* 关于AIOT综合管理平台 */
  #AIOT {
    padding: 20px;
  }
  /* 六大业务体系 */
  #big6 {
    padding-bottom: 20px;
  }
  #big6 .big6_content {
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }
  #big6 .big6_item {
    width: 100%;
    height: 100%;
  }
  .big6_title {
    font-size: 18px;
    padding-bottom: 16px;
  }
  .big6_title::after {
    content: "";
    height: 3px;
  }
  .big6_item_active .big6_subtitle {
    font-size: 14px;
  }
  /* 十大场景 */
  #tenBig {
    padding-bottom: 20px;
  }
  .tenBig_content {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 30px;
    justify-items: center;
  }

  /* .tenBig_item:last-of-type {
    grid-column-start: 2;
    grid-column-end: 3;
  } */
  .tenBig_item .img_weapper {
    width: 62px;
    height: 72px;
    display: inline-block;
  }
  .tenBig_title {
    font-size: 18px;
  }
  .tenBig_text {
    font-size: 14px;
    line-height: 20px;
  }
  /* 产品优势 */
  #odds {
    padding-bottom: 20px;
  }
  .mobile_odds_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .mobile_odds_item {
    width: 48%;
    height: 100px;
    margin-bottom: 20px;
    text-align: center;
    padding: 8px;
    border: 1px solid #2b80f0;
    box-shadow: 0px 2px 0px 0px #2b80f0;
    border-radius: 10px;
  }
  .mobile_odds_title_active_title {
    font-size: 16px;
    color: #2b80f0;
  }
  .mobile_odds_title_active_text {
    font-size: 12px;
    color: #2b80f0;
  }
  /*  万物互联  万物互通 */
  #allThings {
    padding-bottom: 20px;
  }
  .allThings_content {
    width: 100%;
    height: 150px;
  }
  .allThings_image {
    width: 100%;
    height: 100%;
  }
  .a_weapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  /* .a_weapper_l {
    display: flex;
    flex-direction: column;
  } */
  .a_title {
    font-size: 16px;
  }
  .a_text {
    font-size: 10px;
    color: #666666;
  }
  .a_item_weapper_l {
    text-align: end;
  }
  .a_center_weapper {
    margin: 0px 10px;
  }
}
</style>

