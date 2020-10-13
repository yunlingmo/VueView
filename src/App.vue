<template>
  <div id="app">
    <Header></Header>
    <div class="body">
      <div class="background-panel">背景图片</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
