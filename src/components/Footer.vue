<template>
<div>
  <footer id="footer" class="container-fuild" >
    <!-- <img class="footer-top-img" src="@/assets/image/images/footer.png" alt=""/> -->
    <div class="footer-content container">
      <div class="left">
        <div class="left-content">
          <div 
            class="left-content-item" 
            v-for="(item, index) in navList" 
            :key="item.name"
            @click="navClick(index, item.name, item.path)"
          >
            <div class="left-content-item-title">
              {{item.name}}
            </div>
          </div>
        </div>

      </div>
      <div class="content">
        <div class="content-item">
          Please Contact Us 
          <br>
          Get Detailed Brochures And 
          <br>
          Quotes For Each Product.
        </div>
      </div>
      <div class="right">
        <div class="top-logo">
          <img class="top-logo-img" src="@/assets/image/images/logo2.png" alt="">
        </div>
        <div class="text">
          Hangzhou Matching lmp & Exp Co., Ltd.
        </div>
        <div class="info">
          info@Mecyi.com
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright container-fuild">
    <div class="copyright-content">版权所有 ©2024 MatchingChemical.com</div>
    <div class="copyright-right">浙ICP备2024095824号</div>
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
          name: "Home",
          path: "/",
          children: [],
        },
        {
          name: "Colorant",
          path: "/Pigments",
          children: [
            {
              name: "Special",
              path: "/Pigments",
            },
            {
              name: "Special Pigments",
              path: "/Pigments",
            },
            {
              name: "Raw Materials",
              path: "/Pigments",
            },
          ],
        },
        {
          name: "Cosmetic",
          path: "/Cosmetic",
          children: [
            {
              name: "Final Product",
              path: "/FinalProduct",
            },
            {
              name: "Raw Materials",
              path: "/RawMaterials",
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
  methods: {
    navClick(index, name, path) {
      this.$router.push(path);
      this.$parent.$refs.header.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      window.scrollTo(0, 0);
      
    },
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  background-color: rgb(245, 244, 249);
  font-family: '12665.ttf';
  position: relative;
  background-image: url("../assets/image/images/footer.png");
  background-size: 100% 100%;
}
#footer .footer-top-img {
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
#footer .footer-content {
  /* position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); */
  display: flex;
  justify-content: space-between;
  height: 220px;
  padding: 0px 0 0 40px;
}
#footer .footer-content .left {
  /* flex: 1; */
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto 0;
}
#footer .footer-content .left .left-content {
  display: flex;
  flex-wrap: wrap;
}
#footer .footer-content .left .left-content .left-content-item {
  width: 50%;
  margin: 10px 0;
  color: #fff;
}
#footer .footer-content .left .left-content .left-content-item .left-content-item-title {
  position: relative;
  padding-left: 10px;
  /* 手指形状 */
  cursor: pointer;
}
#footer .footer-content .left .left-content .left-content-item .left-content-item-title:hover {
  text-decoration: underline;
}

#footer .footer-content .left .left-content .left-content-item .left-content-item-title::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid #fff;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
#footer .footer-content .content {
  flex: 1;
  display: flex;
  align-items: center;
}
#footer .footer-content .content .content-item {
  color: #fff;
  font-size: 23px;
  white-space: pre-line;
  margin: 30px 0;
}
#footer .footer-content .right {
  flex: 1;
}
#footer .footer-content .right .top-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 80px;
  background: #fff;
}
#footer .footer-content .right .top-logo .top-logo-img {
  width: 143px;
  height: 65px;
}
#footer .footer-content .right .text {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0;
}
#footer .footer-content .right .info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 37px;
  padding: 10px;
  color: #5A9EC4;
  font-size: 19px;
  background: #fff;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: #102943;
  padding: 10px 20px;
  color: #397893;
}
.copyright .copyright-content {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.copyright .copyright-right {
  justify-self: flex-end;
  font-size: 14px;
}
</style>

