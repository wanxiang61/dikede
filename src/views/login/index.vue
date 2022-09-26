<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-box">
        <img class="login-logo" src="@/assets/login-logo.png" alt="" />
        <el-form :model="loginData" :rules="rules" ref="form">
          <!-- 用户名 -->
          <el-form-item prop="loginName">
            <el-input
              v-model.trim="loginData.loginName"
              type="text"
              placeholder="请输入账号"
              prefix-icon="el-icon-mobile-phone"
              maxlength="18"
            />
          </el-form-item>
          <!-- 密码 -->

          <el-form-item prop="password">
            <el-input
              v-model.trim="loginData.password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              :show-password="true"
              maxlength="18"
            />
          </el-form-item>
          <!-- 验证码 -->

          <el-form-item prop="code" class="code">
            <el-input
              ref="code"
              v-model.trim="loginData.code"
              type="text"
              placeholder="请输入验证码"
              prefix-icon="el-icon-tickets"
              maxlength="4"
            >
              <template #suffix>
                <el-image :src="base64" @click="refreshCode"></el-image>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button @click="toLogin" :loading="loading">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCodeAPI } from '@/api'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      loginData: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      rules: {
        loginName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'change'
          }
        ]
      },
      base64: '',
      loading: false
    }
  },
  methods: {
    async getCode() {
      this.loginData.clientToken = Math.random()
      const { data } = await getCodeAPI(this.loginData.clientToken)
      this.base64 = window.URL.createObjectURL(data)
    },
    async refreshCode() {
      await this.getCode()
      this.$refs.code.focus()
    },
    async toLogin() {
      try {
        await this.$refs.form.validate()
        this.loading = true
        await this.$store.dispatch('user/toLogin', this.loginData)
        this.judgeLoginSuccess()
      } catch (err) {
      } finally {
        this.loading = false
      }
    },
    judgeLoginSuccess() {
      if (this.data.success) {
        this.$router.push('/index')
      } else {
        this.$message({
          showClose: true,
          message: this.data.msg,
          type: 'error'
        })
        this.refreshCode()
      }
    }
  },
  created() {
    this.getCode()
  },
  computed: {
    ...mapState('user', ['data'])
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100vh;
  background-image: url('~@/assets/login-bg.png');
  background-size: cover;
  .login-box {
    position: relative;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    padding: 76px 35px 0;
    width: 518px;
    height: 388px;
    background-color: #fff;
    .login-logo {
      position: absolute;
      left: 50%;
      top: -12%;
      translate: -50%;
      width: 96px;
      height: 96px;
    }
  }
  .code {
    :deep(.el-input__suffix) {
      width: 130px;
      height: 50px;
      right: 0;
      top: 1px;
    }
  }
}
</style>
<style lang="scss">
.login {
  .el-input__inner {
    height: 52px;
    line-height: 13px;
    color: #999999;
    font-size: 13px;
    padding-left: 35px;
  }
  .el-button {
    width: 100%;
    height: 52px;
    background-color: #4f6ae7;
    color: #fff;
    border: 0;
  }
  .el-input__icon {
    font-size: 16px;
  }
  .el-input__prefix {
    line-height: 52px;
  }
}
</style>
