<template>
  <!-- 企业案例 -->
  <div id="NewsInformation">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" />

    <!-- 行业资讯and企业动态  电脑端显示-->
    <div id="news" class="container-fuild hidden-xs">
      <div class="container news-container wow fadeInUp">
        <div class="news_title_weapper flex flexBetween">
          <h2
            class="news_title_H2"
            :class="act == 0 ? 'news_title_H2_active' : ''"
            @click="act = 0"
          >
            行业资讯
          </h2>
          <h2
            class="news_title_H2"
            :class="act == 1 ? 'news_title_H2_active' : ''"
            @click="act = 1"
          >
            企业动态
          </h2>
        </div>
        <!-- 行业资讯 -->
        <div v-show="act == 0">
          <div class="news_content marginTop50">
            <div
              class="news_item"
              v-for="(item, index) in newsHyList"
              :key="index"
              @click="navTo('1')"
            >
              <div class="img_weapper">
                <img :src="item.img" alt="" />
              </div>
              <div class="news_info_weaper">
                <div class="news_title">{{ item.title }}</div>
                <div class="news_text line3_ellipsis">{{ item.text }}</div>
              </div>

              <div class="news_time">{{ item.time }}</div>
            </div>
          </div>

          <div class="pagination_weapper">
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="4"
              :total="100"
            >
            </el-pagination>
          </div>
        </div>

        <!-- 企业动态 -->
        <div v-show="act == 1">
          <div class="news_content marginTop50">
            <div
              class="news_item"
              v-for="(item, index) in newsQyList"
              :key="index"
              @click="navTo('1')"
            >
              <div class="img_weapper">
                <img :src="item.img" alt="" />
              </div>
              <div class="news_info_weaper">
                <div class="news_title">{{ item.title }}</div>
                <div class="news_text line3_ellipsis">{{ item.text }}</div>
              </div>

              <div class="news_time">{{ item.time }}</div>
            </div>
          </div>

          <div class="pagination_weapper">
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="6"
              :total="100"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业资讯and企业动态 手机端显示 -->
    <div id="news" class="container-fuild visible-xs">
      <div class="news-container">
        <div class="news_title_weapper flex flexBetween">
          <h2
            class="news_title_H2"
            :class="act == 0 ? 'news_title_H2_active' : ''"
            @click="act = 0"
          >
            行业资讯
          </h2>
          <h2
            class="news_title_H2"
            :class="act == 1 ? 'news_title_H2_active' : ''"
            @click="act = 1"
          >
            企业动态
          </h2>
        </div>

        <!-- 折叠菜单   废弃！！！ -->
        <!-- <div class="news_nav flex flexBetween" @click="showNav = !showNav">
          <div>新闻媒体</div>
          <img
            :class="showNav ? 't180' : ''"
            src="../assets/image/mobileNewInfo/jt2.png"
            alt=""
          />
        </div>
        <el-collapse-transition>
          <div class="" v-show="showNav">
            <div
              class="marginLeft20 news_nav_item"
              :class="act == 0 ? 'textBule' : ''"
              @click="act = 0"
            >
              行业资讯
            </div>
            <div
              class="marginLeft20 news_nav_item"
              :class="act == 1 ? 'textBule' : ''"
              @click="act = 1"
            >
              企业动态
            </div>
            <div class="news_border_bottom"></div>
          </div>
        </el-collapse-transition> -->

        <div class="mobile_weapper">
          <!-- 行业资讯 -->
          <div v-show="act == 0">
            <div class="news_content marginTop50">
              <div
                class="mobile_news_item"
                v-for="(item, index) in newsHyList"
                :key="index"
                @click="navTo('1')"
              >
                <div class="mobile_img_weapper">
                  <img :src="item.img" alt="" />
                </div>
                <div class="mobile_news_info_weaper">
                  <div class="mobile_news_title">{{ item.title }}</div>
                  <div class="mobile_news_time">{{ item.time }}</div>
                  <div class="mobile_news_text line2_ellipsis">
                    {{ item.text }}
                  </div>
                  <img
                    class="gojt"
                    src="../assets/image/mobileNewInfo/jt1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <el-row class="visible-xs">
              <el-col :span="24">
                <div class="pagination_weapper">
                  <el-pagination
                    small
                    background
                    :page-size="6"
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 企业动态 -->
          <div v-show="act == 1">
            <div class="news_content marginTop50">
              <div
                class="mobile_news_item"
                v-for="(item, index) in newsQyList"
                :key="index"
                @click="navTo('1')"
              >
                <div class="mobile_img_weapper">
                  <img :src="item.img" alt="" />
                </div>
                <div class="mobile_news_info_weaper">
                  <div class="mobile_news_title">{{ item.title }}</div>
                  <div class="mobile_news_time">{{ item.time }}</div>
                  <div class="mobile_news_text line2_ellipsis">
                    {{ item.text }}
                  </div>
                  <img
                    class="gojt"
                    src="../assets/image/mobileNewInfo/jt1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <el-row class="visible-xs">
              <el-col :span="24">
                <div class="pagination_weapper">
                  <el-pagination
                    small
                    background
                    :page-size="6"
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图

export default {
  name: "JobChance",
  components: {
    Banner,
  },
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/image/newInfo/banner.png"),
        },
      ],
      newsHyList: [
        {
          img: require("../assets/image/newInfo/info1.png"),
          title: "我市召开“AI+5G智慧社区”项目推进会",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info2.png"),
          title: "“AI+5G智慧社区”助推我市社区建设",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info3.png"),
          title: "行业微视 | 城市全域智能化推进，AI+安防进入“数据智能”时代",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info4.png"),
          title: "业界首份！国家信息中心发布《智慧社区运营指南（2021）》",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
      ],
      newsQyList: [
        {
          img: require("../assets/image/newInfo/info5.png"),
          title: "智慧安防如何改变我们的生活？9张图带你了解真相！",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info6.png"),
          title:
            "全国范围内持续深化开展交通秩序专项行动，中南科技“黑科技”共创美好智慧生活",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info7.png"),
          title:
            "深度探访：中南科技AIOT智慧安防物联网一体化项目——颖云物联网小镇展厅",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
        {
          img: require("../assets/image/newInfo/info8.png"),
          title: "引“智”筑家！中南科技以国标级物联网智慧社区打造未来住宅引领地",
          text: "4月25日，禹州市“AI+5G智慧社区”项目推进会在钧台街道花城社区召开。市新型智慧城市创建指挥部副指挥长、产业集聚区管委会副主任郝长义出席会议并做重要讲话。市民政局，市政务服务和大数据管理局，城区四个街道办事处",
          time: "2019-04-25",
        },
      ],
      act: 0,
      showNav: false,
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    navTo(id) {
      this.$router.push({ path: "/newsHy", query: { id } });
    },
  },
};
</script>
<style scoped>
/* 行业资讯and企业动态 */
#news {
  background-color: #fff;
  padding-bottom: 70px;
}
.news_title_weapper {
  width: 450px;
  margin: 0 auto;
}
.news_title_H2 {
  font-size: 36px;
  color: #333333;
  line-height: 40px;
  margin: 0;
  padding: 40px 0px 30px;
  text-align: center;
}
.news_title_H2_active {
  position: relative;
}

.news_title_H2_active::after {
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

.news_content {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  row-gap: 50px;
  justify-items: center;
}
.news_item {
  width: 505px;
  height: 376px;
  background: #ffffff;
  box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  /* padding: 18px 20px; */
  position: relative;
  overflow: hidden;
}
.news_item .img_weapper {
  width: 505px;
  height: 268px;
  overflow: hidden;
}
.news_item .img_weapper img {
  width: 100%;
  height: 100%;
}
.news_info_weaper {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 188px;
  background-color: #fff;
  position: absolute;
  top: 268px;
  left: 0px;
  transition: all 1s;
}
.news_item:hover .news_info_weaper {
  top: 188px;
}
.news_title {
  height: 68px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
.Case_text {
  font-size: 12px;
  color: #666666;
  line-height: 24px;
}

.news_time {
  width: 100%;
  height: 30px;
  font-size: 11px;
  color: #666666;
  position: absolute;
  bottom: 0px;
  left: 20px;
  background-color: #fff;
}

.pagination_weapper {
  margin-top: 70px;
  text-align: center;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #news {
    background-color: #fff;
    padding-bottom: 30px;
  }
  .news_nav {
    width: 100%;
    height: 30px;
    background-color: #2b80f0;
    padding: 0 20px;
    color: #fff;
  }
  .news_title_weapper {
    padding: 0px 80px;
    width: 100%;
  }
  .news_title_H2 {
    font-size: 18px;
    color: #333333;
    line-height: 20px;
    margin: 0;
    padding: 20px 0px 15px;
    text-align: center;
  }
  .news_title_H2_active {
    position: relative;
  }

  .news_title_H2_active::after {
    content: "";
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #2e6cee 0%, #009efe 100%);
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .news_nav img {
    width: 12px;
    height: 6px;
    transition: all 0.2s;
  }
  .t180 {
    transform: rotateZ(180deg);
  }
  .news_nav_item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 26px;
    font-size: 12px;
    color: #666666;
  }
  .news_border_bottom {
    border-bottom: 1px solid #666666;
  }
  .news_content {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    row-gap: 50px;
    justify-items: center;
  }
  .mobile_weapper {
    padding: 20px;
  }
  .mobile_news_item {
    width: 335px;
    height: 250px;
    box-shadow: 0px 0px 21px 0px rgba(47, 107, 238, 0.2);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .mobile_img_weapper {
    width: 100%;
    height: 130px;
  }
  .mobile_img_weapper > img {
    width: 100%;
    height: 100%;
  }
  .mobile_news_info_weaper {
    padding: 6px 14px;
  }
  .mobile_news_time {
    font-size: 10px;
  }
  .mobile_news_title {
    font-size: 14px;
  }
  .mobile_news_text {
    font-size: 10px;
  }
  .gojt {
    width: 18px;
    height: 10px;
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
}
</style>

