<template>
  <div class="layout">
    <nav-bar></nav-bar>
    <div class="box">
      <side-bar></side-bar>
      <div class="layout-main">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue'
import navBar from './components/navBar.vue'
export default {
  components: { sideBar, navBar }
}
</script>

<style scoped lang="scss">
.layout {
  padding-top: 60px;
  .box {
    display: flex;
  }
}
.layout-main {
  position: relative;
  width: calc(100vw - 167px);
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: #f8fafd;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 7px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccced0;
    border-radius: 10px;
  }
}
</style>
<style lang="scss"></style>
