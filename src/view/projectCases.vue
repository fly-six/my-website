<template>
  <!-- 企业案例 -->
  <div id="JobChance">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" :mobileSwiperList="mobileSwiperList" />

    <!-- 企业案例 -->
    <div id="Case" class="container-fuild">
      <div class="container Case-container">
        <div class="Case_content_weapper">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <div class="case_breadcrumb">当前位置：</div>
            <el-breadcrumb-item
              ><a @click="scrollTo(0, '/home')">首页</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item
              ><a @click="scrollTo(2, '/jobchance')"
                >企业案例</a
              ></el-breadcrumb-item
            >
            <el-breadcrumb-item>企业案例详情</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 富文本解析 -->

          <div class="Case_content" v-html="navList"></div>
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
      swiperList: [],
      mobileSwiperList: [],
      navList: "",
    };
  },
  mounted() {
    this.navList = this.$route.query.content;
    this.swiperList = this.$route.query.swiperList;
    this.mobileSwiperList = this.$route.query.mobileSwiperList;
    var wow = new WOW();
    wow.init();
  },
  methods: {
    scrollTo(number, path) {
      this.$parent.$parent.$refs.header.navIndex = number;
      sessionStorage.setItem("navIndex", number);
      window.scrollTo(0, 0);
      this.$router.push({
        path,
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
.Case_content_weapper {
  margin-top: 20px;
}
.case_breadcrumb {
  float: left;
  border-left: 2px solid #2a80ef;
  padding-left: 10px;
}

.Case_content {
  width: 100%;
}
.Case_content img {
  width: 100%;
}
</style>

