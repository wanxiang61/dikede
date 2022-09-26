<template>
  <div class="navBar">
    <div class="logo">
      <img src="@/assets/navBar-logo.png" alt="" />
    </div>
    <div class="userInfo">
      <el-avatar :src="circleUrl"></el-avatar>
      <span>欢迎您, admin</span>
      <button>退出 <i class="el-icon-caret-bottom"></i></button>
    </div>
  </div>
</template>

<script>
// import { getUserInfoAPI } from '@/api'
export default {
  data() {
    return {
      circleUrl: ''
    }
  },
  methods: {
    // async getUserInfo() {
    //   const id = this.$store.state.user.data.userId
    //   const { data } = await getUserInfoAPI(id)
    //   console.log(data)
    // }
  },
  created() {
    // this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 15px;
  width: 100%;
  height: 60px;
  background-image: url('@/assets/navBar-bg.png');
  background-size: cover;
  .logo {
    width: 88px;
    height: 35px;
  }
  .userInfo {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    span {
      margin-right: 20px;
    }
    button {
      background-color: transparent;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
