<template>
  <div style="opacity:0" id="tipContext" :class="`tip-context add`">
    <span><i :class="icon" v-html="iconSlot"></i>{{context}}</span>
    <em class="triangleDiv"></em>
  </div>
</template>

<script>
export default {
  name: "prompt"
}
</script>

<style lang="scss" scoped>
.tip-context{
  display: inline-block;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10000;
  transition: opacity 0.2s;
  span{
    float:left;
    padding: 5px 8px;
    max-width: 168px;
    border-radius: 4px;
    background:#000;
    opacity: 0.4;
    color:#fff;
    font-size: 12px;
    i{
      font-style: normal;
      position: absolute;
      left: 8px;
      top: 5px;
      em{
        font-size: 14px;
      }
    }
  }
  .triangleDiv{
    border-color: rgba(0,0,0,0.4) transparent transparent transparent;
    border-style: solid;
    border-width: 10px 9px 0 6px;
    height: 0;
    width: 0;
    position: absolute;
    left:60%;
    bottom:-8px;
  }
  &::after{
    content:"";
    clear: both;
    position: absolute;
    width: 16px;
    height:2px;
    left:60%;
    bottom:0px;
    z-index: 99999;
    background-color: #999;
  }
}
.tip-auto {
  .triangleDiv{
    border-color:  transparent transparent rgba(0,0,0,0.4) transparent;
    border-width: 0 9px 10px 6px;
    top:-8px;
  }
  &::after{
    content:"";
    clear: both;
    position: absolute;
    width: 16px;
    height:2px;
    left:60%;
    top:0px;
    z-index: 99999;
    background-color: #999;
  }
}
</style>