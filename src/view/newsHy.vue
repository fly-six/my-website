<template>
  <!-- 行业资讯 -->
  <div id="JobChance">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" />

    <!-- 行业资讯 -->
    <div id="Case" class="container-fuild">
      <div class="container Case-container">
        <div class="Case_content_weapper">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <div class="case_breadcrumb">当前位置：</div>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻媒体</el-breadcrumb-item>
            <el-breadcrumb-item>行业资讯</el-breadcrumb-item>
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
      swiperList: [
        {
          img: require("@/assets/image/jobChance/banner.png"),
        },
      ],
      navList: "",
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
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

