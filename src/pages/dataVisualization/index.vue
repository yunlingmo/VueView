<template>
  <div class="visualization-box">
    <div class="map-back"></div>
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
import panelHeader from '@/components/panelHeader.vue'
import panelFooter from '@/components/panelFooter.vue'

export default {
  name: 'visualization',
  components: {
    panelHeader,
    panelFooter
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.visualization-box{
  position: relative;
  .map-back{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url('../../assets/images/map_bg.jpg');
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
