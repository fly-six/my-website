<template>
  <!-- 联系我们 -->
  <div id="contact" class="container-fuild">
    <div class="container contact-container wow fadeInUp">
      <h2 class="title_H2">联系我们</h2>
      <div class="contact_content marginTop50">
        <h1 class="contact_H1 hidden-xs">{{ contactData.title }}</h1>
        <h1 class="contact_H1 visible-xs">{{ contactData.title2 }}</h1>

        <div class="contact_text_weapper">
          <div class="contact_text" @click="callPhone('400-763-6668')">
            {{ contactData.text1 }}
          </div>
          <div class="contact_text" @click="callPhone('18019585305')">
            {{ contactData.text2 }}
          </div>
        </div>
        <div class="contact_text_weapper">
          <div class="contact_text" @click="callPhone('18538939326')">
            {{ contactData.text3 }}
          </div>
          <div class="contact_text" @click="callPhone('16637195486')">
            {{ contactData.text4 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";

export default {
  data() {
    return {
      contactData: {
        title: "中南信息科技（深圳）有限公司（深圳·合肥·郑州·禹州）",
        title2: "中南信息科技（深圳）有限公司",
        text1: "咨询热线：400-763-6668",
        text2: "硬件合作：18019585305（丁）",
        text3: "设计院合作：18538939326（陈）",
        text4: "招商热线：16637195486（许）",
      },
    };
  },
  methods: {
    callPhone(number) {
      window.location.href = `tel://${number}`;
    },
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
/* 联系我们 */
#contact {
  background-color: #f8f9fe;
  padding-bottom: 70px;
}
.contact_content {
  width: 100%;
  height: 196px;
  background: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(47, 107, 238, 0.2);
  box-sizing: border-box;
  padding: 40px 0px;
}
.contact_H1 {
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  border-left: 9px solid #2a80ef;
  margin: 0;
  padding-left: 30px;
  margin-bottom: 20px;
}
.contact_text_weapper {
  padding: 5px 40px;
}
.contact_text {
  width: 300px;
  display: inline-block;
  font-size: 18px;
  color: #333333;
}
.contact_text:hover {
  color: #2a80ef;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #contact {
    padding-bottom: 20px;
  }
  .contact_content {
    height: 138px;
    padding: 15px 0px;
  }
  .contact_H1 {
    font-size: 16px;
    font-weight: normal;
    color: #333333;
    border-left: 4px solid #2a80ef;
    margin: 0;
    padding-left: 15px;
    margin-bottom: 10px;
  }
  .contact_text_weapper {
    padding: 0px;
  }
  .contact_text {
    font-size: 12px;
    padding-left: 20px;

  }
}
</style>