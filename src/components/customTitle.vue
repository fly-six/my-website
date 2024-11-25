<template>
  <div class="title-wrap" @click="handleClick">
    
    <img class="left" src="@/assets/image/images/bar.png" alt="" />
    <div class="right">
      <div class="title"> {{ title }} </div>
      <div class="title"> {{ title2 }} </div>
      
      <div class="span-wrap" v-if="spanList.length > 0">
        <template v-for="(item, index) in spanList">
          {{ item }}
          <span v-if="index !== spanList.length-1" style="color: skyblue">|</span>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customTitle",
  props: {
    title: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
    spanList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
<style scoped>
.title-wrap {
  display: flex;
  align-items: center;
  font-family: '12671.ttf';
  margin-left: 40px;
}
.title-wrap .left {
  width: 3px;
  height: 70px;
  margin-right: 5px;
}
.title-wrap .right {
  color: #408db0;
}
.title-wrap .right .title {
  color: #408db0;
  font-size: 24px;
}
.title-wrap .right .span-wrap {
  font-size: 10px;
  color: rgb(104, 104, 104);

}
</style>
