<template>
  <div id="footer" class="container-fluid">
    <div class="container">
      <!-- 电脑显示 -->
      <ul class="list clearfix hidden-xs">
        <li @click="scrollTo(5)">
          <div class="name">关于中南</div>
          <router-link :to="navList[5].path" class="item">关于我们</router-link>
          <router-link :to="navList[5].path" class="item">荣誉资质</router-link>
          <router-link :to="navList[5].path" class="item">合作企业</router-link>
        </li>
        <li @click="scrollTo(3)">
          <div class="name">新闻媒体</div>
          <router-link :to="navList[3].path" class="item">行业资讯</router-link>
          <router-link :to="navList[3].path" class="item">企业动态</router-link>
        </li>
        <li @click="scrollTo(1)">
          <div class="name">产品介绍</div>
          <router-link :to="navList[1].path" class="item"
            >AIoT管理平台</router-link
          >
          <router-link :to="navList[1].path" class="item">企业案例</router-link>
        </li>
        <li @click="scrollTo(4)">
          <div class="name">招商代理</div>
          <router-link :to="navList[4].path" class="item">招商代理</router-link>
          <router-link :to="navList[4].path" class="item">联系我们</router-link>
        </li>
        <li>
          <div class="name">联系方式</div>
          <div class="item">全国热线 ：<span>400-7636668</span></div>
          <div class="item">硬件合作 ：<span>18019585305（丁）</span></div>
          <div class="item">设计院合作 ：<span>18538939326（陈）</span></div>
          <div class="item">招商热线 ：<span>16637195486（许）</span></div>
        </li>
        <li>
          <div class="name">关注我们</div>
          <div class="official">
            <img
              src="../../src/assets/image/gongzhouhao.png"
              style="width: 102px"
            />
            <div class="flex flexCenter marginTop10">官方公众号</div>
          </div>
        </li>
      </ul>

      <!-- 手机显示 -->
      <div class="conter visible-xs">
        <div>全国热线：400-7636668</div>
        <div>硬件合作：18019585305（丁）</div>
        <div>设计院合作 :18538939326（陈）</div>
        <div>招商热线 ：16637195486（许）</div>

        <img
          src="../../src/assets/image/gongzhouhao.png"
          style="width: 102px"
        />
      </div>

      <div class="copy">
        <div class="pull-left">
          Copyright©中南信息科技（深圳）有限公司 All Rights Reserved
          粤ICP备18035285号
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      navList: [
        {
          name: "首页",
          path: "/",
          children: [],
        },
        {
          name: "AloT管理平台",
          path: "/service",
          children: [],
        },
        {
          name: "企业案例",
          path: "/jobchance",
          children: [],
        },
        {
          name: "新闻媒体",
          path: "/newsinformation",
          children: [],
        },

        {
          name: "招商代理",
          path: "/companyintroduction",
          children: [],
        },

        {
          name: "关于中南",
          path: "/contactus",
          children: [],
        },
      ],
    };
  },
  methods: {
    scrollTo(number) {
      this.$parent.$refs.header.navIndex = number;
      sessionStorage.setItem("navIndex", number);

      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 350px;
  color: #fff;
  background: #2b3344;
  padding-top: 60px;
  overflow: hidden;
}
#footer .list li {
  float: left;
  margin-right: 90px;
}
#footer .list li:nth-last-child(1) {
  float: right;
  margin-right: 0px;
}
#footer .list li .name {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 32px;
}
#footer .list li .item {
  font-size: 16px;
  color: #d8d8d8;
  margin-bottom: 26px;
  display: block;
  cursor: pointer;
}
#footer .list li .item:hover {
  color: #fff;
  text-decoration: none;
}
#footer .official {
  width: 102px;
}

#footer .copy {
  /* height: 50px; */
  margin-top: 20px;
  padding-top: 20px;
  /* line-height: 50px; */
  font-size: 16px;
  color: #d8d8d8;
  border-top: 2px solid #4a556a;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #footer {
    width: 100%;
    height: 350px;
    color: #fff;
    background: #2b3344;
    padding-top: 20px;
    overflow: hidden;
  }
  #footer .copy {
    font-size: 14px;
    /* margin: 30px 0 10px; */
  }
  .conter {
    text-align: center;
  }
  .conter div {
    padding: 4px;
  }
  .conter img {
    display: inline-block;
  }
}
</style>

