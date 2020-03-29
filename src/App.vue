<template>
  <div id="app">
    <div class="contenter"><span ref="tips" class="button">使用 prompt浮框</span></div>
  </div>
</template>

<script>
// import Vue from "vue";
export default {
  name: "App",
  data () {
    return {
      context: "提示：受疫情影响，部分地区物流会受到影响受疫情影响，部分地区物流会受到影响"
    }
  },
  mounted() {
    this.$prompt({
      node: this.$refs.tips,
      context: this.context,
      promptClass: "add-class",
      // trigger: "click",
      icon: "prompt-icon",
      iconSlot: "<em></em>"
    })
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app{
  height: 2000px;
}
.contenter {
  padding:200px;
  text-align: center;
  height:auto;
  .button {
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #999;
    cursor: pointer;
  }
}
</style>
