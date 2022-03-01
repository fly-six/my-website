<template>
  <!-- 企业案例 -->
  <div id="NewsInformation">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" :mobileSwiperList="mobileSwiperList" />

    <!-- 行业资讯and企业动态  电脑端显示-->
    <div id="news" class="container-fuild hidden-xs">
      <div class="container news-container wow fadeInUp">
        <div class="news_title_weapper flex flexBetween">
          <h2
            class="news_title_H2"
            :class="act == 0 ? 'news_title_H2_active' : ''"
            @click="changeTabs(0)"
          >
            行业资讯
          </h2>
          <h2
            class="news_title_H2"
            :class="act == 1 ? 'news_title_H2_active' : ''"
            @click="changeTabs(1)"
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
              @click="navTo(item.content)"
            >
              <div class="img_weapper">
                <img :src="item.coverImg" alt="" />
              </div>
              <div class="news_info_weaper">
                <div class="news_title">{{ item.title }}</div>
                <div class="news_text line3_ellipsis">{{ item.digest }}</div>
              </div>

              <div class="news_time">{{ item.createTime | filterTime }}</div>
            </div>
          </div>

          <div class="pagination_weapper">
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="pageSize"
              :total="newsHy.total"
              @current-change="currentChange"
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
              @click="navTo(item.content)"
            >
              <div class="img_weapper">
                <img :src="item.coverImg" alt="" />
              </div>
              <div class="news_info_weaper">
                <div class="news_title">{{ item.title }}</div>
                <div class="news_text line3_ellipsis">{{ item.digest }}</div>
              </div>

              <div class="news_time">{{ item.createTime | filterTime }}</div>
            </div>
          </div>

          <div class="pagination_weapper">
            <el-pagination
              background
              layout="total, prev, pager, next"
              :page-size="pageSize"
              :total="newsQy.total"
              @current-change="currentChange"
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
            @click="changeTabs(0)"
          >
            行业资讯
          </h2>
          <h2
            class="news_title_H2"
            :class="act == 1 ? 'news_title_H2_active' : ''"
            @click="changeTabs(1)"
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
                @click="navTo(item.content)"
              >
                <div class="mobile_img_weapper">
                  <img :src="item.coverImg" alt="" />
                </div>
                <div class="mobile_news_info_weaper">
                  <div class="mobile_news_title">{{ item.title }}</div>
                  <div class="mobile_news_time">
                    {{ item.createTime | filterTime }}
                  </div>
                  <div class="mobile_news_text line2_ellipsis">
                    {{ item.digest }}
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
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="newsHy.total"
                    @current-change="currentChange"
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
                @click="navTo(item.content)"
              >
                <div class="mobile_img_weapper">
                  <img :src="item.coverImg" alt="" />
                </div>
                <div class="mobile_news_info_weaper">
                  <div class="mobile_news_title">{{ item.title }}</div>
                  <div class="mobile_news_time">
                    {{ item.createTime | filterTime }}
                  </div>
                  <div class="mobile_news_text line2_ellipsis">
                    {{ item.digest }}
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
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="newsQy.total"
                    @current-change="currentChange"
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
import moment from "moment";
import { getbannerList, getNewsList } from "../api/home";

export default {
  name: "NewsInformation",
  components: {
    Banner,
  },
  filters: {
    filterTime(val) {
      let value = moment(val).format("YYYY-MM-DD");
      return value;
    },
  },
  data() {
    return {
      newsHy: {
        pageNum: 1,
        total: 0,
      },
      newsQy: {
        pageNum: 1,
        total: 0,
      },
      pageSize: 4,

      swiperList: [],
      mobileSwiperList: [],
      newsHyList: [],
      newsQyList: [],
      act: 0,
      showNav: false,
    };
  },
  mounted() {
    this.bannerList();
    this.getNewsList();
    var wow = new WOW();
    wow.init();
  },
  methods: {
    navTo(content) {
      if (this.act == 0) {
        this.$router.push({
          path: "/newsHy",
          query: {
            content: content,
            swiperList: this.swiperList,
            mobileSwiperList: this.mobileSwiperList,
          },
        });
      } else {
        this.$router.push({
          path: "/newsQy",
          query: {
            content: content,
            swiperList: this.swiperList,
            mobileSwiperList: this.mobileSwiperList,
          },
        });
      }
    },
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
    getNewsList() {
      getNewsList({
        classify: this.act == 0 ? 1 : 2,
        pageNum: this.act == 0 ? this.newsHy.pageNum : this.newsQy.pageNum,
        pageSize: this.pageSize,
      }).then((res) => {
        if (res.code == 0) {
          if (this.act == 0) {
            this.newsHyList = res.rows;
            this.newsHy.total = res.total;
          } else {
            this.newsQyList = res.rows;
            this.newsQy.total = res.total;
          }
        }
      });
    },
    // 页数发生改变时
    currentChange(value) {
      this.act == 0
        ? (this.newsHy.pageNum = value)
        : (this.newsQy.pageNum = value),
        this.getNewsList();
    },
    // 切换tabs标签
    changeTabs(index) {
      this.act = index;
      this.getNewsList();
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

