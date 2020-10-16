<template>
  <div id="app">
    <div class="map-back">背景图片</div>    
    <div>
      <panel-header></panel-header>
      <div class="content-box">
        <router-view/>       
      </div>
    </div>
  </div>
</template>

<script>
import panelHeader from './components/panelHeader.vue'

export default {
  name: 'App',
  components: {
    panelHeader
  },
  methods: {}
}
</script>

<style lang="less" scoped>
#app{
  height: 1080px;
  position: relative;
  .map-back{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url('./static/images/map_bg.jpg');
    background-size: 100% 100%;
  }
  .content-box{
    height: 875px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border: 2px solid red;
  }
}
</style>
