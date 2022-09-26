<template>
  <div class="index">
    <img src="@/assets/index-bg.png" alt="" />
    <div class="experienceProject">
      <el-button class="btn" type="primary" @click="$router.push('/layout')"
        >体验项目</el-button
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  img {
    display: block;
    margin: 0 auto;
    width: 1280px;
  }
  .experienceProject {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 108px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 158px;
    height: 46px;
    background-color: #0081ff;
    color: #fff;
    font-size: 16px;
    border: 0;
  }
}
</style>
