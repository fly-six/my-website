<template>
  <div id="GoTop">
    <div class="top-icon" @click="GoTop()">
      <img class="icon-top" src="@/assets/image/images/TOP.png" />
    </div>
    <div class="top-download" @click="$router.push('/DownloadCatalog')" @mouseover="showDownload = true" @mouseleave="showDownload = false">
      <img class="icon-download" src="@/assets/image/images/download2.png" />
      <div class="download-text" v-show="showDownload">Download Catalog</div>
    </div>
    <!-- <span class="glyphicon glyphicon-chevron-up"></span> -->
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false,
      showDownload: false
    };
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  position: fixed;
  bottom: 60px;
  right: 0px;
  z-index: 99999999;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}
.top-icon {
  width: 50px;
  height: 50px; 
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.top-icon .icon-top {
  width: 100%;
  height: 100%;
}
.top-download {
  width: 50px;
  height: 50px; 
  padding: 10px;
  position: relative;
}
.top-download .icon-download {
  width: 100%;
  height: 100%;
}
.top-download .download-text {
  position: absolute;
  top: 10px;
  left: -115px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 30px;
  font-size: 12px;
  color: #333;
  border-radius: 5px;
  background-color: #f6f7f7;
}
</style>
