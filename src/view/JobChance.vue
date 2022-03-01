<template>
  <!-- 企业案例 -->
  <div id="JobChance">
    <!-- 轮播图 -->
    <Banner :swiperList="swiperList" :mobileSwiperList="mobileSwiperList" />

    <!-- 企业案例 -->
    <div id="Case" class="container-fuild">
      <div class="container Case-container wow fadeInUp">
        <h2 class="title_H2">企业案例</h2>
        <p class="Case_subtitle">
          企业案例是中南的案例集中中心，展示的内容包括已经成功的案例、正在建设的案例等部分。
        </p>

        <div class="Case_content marginTop50">
          <div class="Case_item" v-for="(item, index) in CaseList" :key="index">
            <div class="img_weapper">
              <img :src="item.coverImg" alt="" />
            </div>
            <div class="Case_title">{{ item.title }}</div>
            <div class="Case_text">{{ item.digest }}</div>
            <div class="Case_btn_weapper">
              <div class="Case_btn" @click="navTo(item.content)">了解详情</div>
            </div>
          </div>
        </div>

        <!-- 电脑端显示的分页 -->
        <div class="pagination_weapper hidden-xs">
          <el-pagination
            background
            layout="total, prev, pager, next"
            @current-change="currentChange"
            :page-size="pageSize"
            :total="total"
          >
          </el-pagination>
        </div>

        <!-- 手机端显示的分页 -->
        <el-row class="visible-xs">
          <el-col :span="24">
            <div class="pagination_weapper">
              <el-pagination
                small
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                @current-change="currentChange"
                :total="total"
              >
              </el-pagination>
            </div>
          </el-col>
        </el-row>

        <!-- <el-row>
          <el-col :span="24">
            <div class="pagination_weapper">
              <el-pagination
                background
                layout="total, prev, pager, next"
                :page-size="6"
                :total="100"
              >
              </el-pagination>
            </div>
          </el-col>
        </el-row> -->
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import Banner from "../components/banner"; //轮播图
import { getEnterpriseList, getbannerList } from "../api/home";

export default {
  name: "JobChance",
  components: {
    Banner,
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 6,
      total: 0,
      swiperList: [],
      mobileSwiperList: [],
      CaseList: []
    };
  },
  mounted() {
    this.bannerList();
    this.getEnterpriseList();
    var wow = new WOW();
    wow.init();
  },
  // 自定义vue指令
  directives: {
    big(el, binding, vnode) {
      console.log(el, binding, vnode);
      el.innerText = binding.value * 10;
    },
  },
  methods: {
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
    // 请求banner
    bannerList() {
      getbannerList({
        display: 3,
        adaptation: 1,
      }).then((res) => {
        if (res.code == 0) {
          this.swiperList = res.rows;
        }
      });
      getbannerList({
        display: 3,
        adaptation: 2,
      }).then((res) => {
        if (res.code == 0) {
          this.mobileSwiperList = res.rows;
        }
      });
    },
    // 数据列表
    getEnterpriseList() {
      let { pageNum, pageSize } = this;
      getEnterpriseList({
        pageNum,
        pageSize,
      }).then((res) => {
        if (res.code == 0) {
          this.CaseList = res.rows;
          this.total = res.total;
        }
      });
    },
    // 页数发生改变时
    currentChange(value) {
      this.pageNum = value;
      this.getEnterpriseList();
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
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #Case {
    padding-bottom: 20px;
  }
  .Case_subtitle {
    font-size: 14px;
  }
  .Case_content {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    row-gap: 30px;
    justify-items: center;
  }
  .pagination_weapper {
    margin-top: 30px;
    width: 100%;
  }
}
</style>

