<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 电脑导航 -->
    <!-- hidden-xs -->
    <div class="header-nav container ">
      <!-- 导航logo -->
      <div class="header-nav-logo" @mouseover="showDownload = true" @mouseleave="showDownload = false">
        <img class="img" src="@/assets/image/images/logo1.png" />
        <div class="download-wrap" v-show="showDownload" @click="$router.push('/DownloadCatalog')">
          <img class="icon" src="@/assets/image/images/download1.png" />
          <div class="download-text">Download Catalog</div>
        </div>  
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name, item.path)"
        >
          <router-link :to="item.path">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
              class="glyphicon glyphicon-menu-down"
            ></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length > 0">
            <dt v-for="(i, n) in item.children" :key="n">
              <router-link :to="i.path">{{ i.name }}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="nav_top_weapper visible-xs" v-if="false"></div>

    <div class="header-nav-m container-fuild visible-xs" v-if="false">
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        <div class="menuName_weapper logo_black_weapper">
          <img
            class="logo_black"
            src="@/assets/image/logo_black.png"
            alt="logo"
          />
          <div class="menu_name">{{menuName}}</div>
          
        </div>

        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name, item.path)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <a>{{ item.name }}</a>
            <i class="underline"></i>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "Home",
      showDownload: false,
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "Home",
          path: "/",
          children: [],
        },
        {
          name: "Colorant",
          path: "/Colorant/Pigments",
          children: [
            {
              name: "Pigments",
              path: "/Colorant/Pigments",
            },
            {
              name: "Special Pigments",
              path: "/Colorant/Pigments",
            },
            {
              name: "Raw Materials",
              path: "/Colorant/Pigments",
            },
          ],
        },
        {
          name: "Cosmetic",
          path: "/Cosmetic/FinalProduct",
          children: [
            {
              name: "Final Product",
              path: "/Cosmetic/FinalProduct",
            },
            {
              name: "Raw Materials",
              path: "/Cosmetic/FinalProduct",
            },
          ],
        },
        {
          name: "Device",
          path: "/Device",
          children: [
            {
              name: "NaA SeolMembane",
              path: "/NaASeolMembane",
            },
            {
              name: "Nanobubble Generator",
              path: "/NanobubbleGenerator",
            },
          ],
        },

        {
          name: "Other",
          path: "/DownloadCatalog",
          children: [],
        },

        {
          name: "About Us",
          path: "/AboutUs",
          children: [],
        },
      ],
    
    };
  },
  mounted() {
    // console.log(this.$router.options.routes[0].children.filter(item => item.name), 'this.navList');
  },
  methods: {
    navClick(index, name, path) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
      console.log(path, 'path');
      
      if (path) {
        this.$router.push(path);
      }
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
  },
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 90px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 195px;
  height: 100%;
  float: left;
  position: relative;
  background-color: #3f8dbd;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo .img {
  width: auto;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#header .header-nav .download-wrap {
  position: absolute;
  bottom: -46px;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 46px;
  color: #308FBE;
  font-size: 17px;
  background-color: #fff;
  cursor: pointer;

}
#header .header-nav .download-wrap:hover {
  text-decoration: underline;
}
#header .header-nav .download-wrap .icon {
  width: 17px;
  height: 19px;
  margin-right: 4px;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 90px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 30px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  /* color: #000; */
  font-family: '12671.ttf';
  color: #8b8b8b;
  font-size: 15px;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #308FBE;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #308FBE;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #308FBE;
  text-decoration: none;
  border-bottom: 2px solid #308FBE;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
/* 让下面这个媒体查询始终不起作用 */
/* @media screen and (max-width: 997px) { */
@media screen and (max-width: 0px) {
  .nav_top_weapper {
    width: 100%;
    height: 50px;
  }
  #header .header-nav-m {
    width: 100%;
    position: relative;
    position: fixed;
    top: 0px;
    background-color: #fff;
    z-index: 999;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  .menuName_weapper {
    text-align: center;
  }
  .logo_black_weapper {
    width: 100%;
    height: 50px;
  }
  .logo_black {
    width: 30%;
    margin-right: 10px;
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .menu_name {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    /* color: #000;  */
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #fff;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #000;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #000;
    font-size: 15px;
    /* font-weight: bold; */
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
