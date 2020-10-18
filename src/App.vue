<template>
  <div id="app">
    <div class="map-back">背景图片</div>    
    <div class="body-box">
      <panel-header></panel-header>
      <div class="content-box">
        <router-view/>       
      </div>
      <panel-footer></panel-footer>
    </div>
  </div>
</template>

<script>
import panelHeader from './components/panelHeader.vue'
import panelFooter from './components/panelFooter.vue'

export default {
  name: 'App',
  components: {
    panelHeader,
    panelFooter
  },
  methods: {}
}
</script>

<style lang="less" scoped>
#app{
  position: relative;
  .map-back{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url('./static/images/map_bg.jpg');
    background-size: 100% 100%;
  }
  .body-box{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content-box{
      height: 850px;
      margin: 20px;
    }
  }
}
</style>
