<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/home">
        <i class="el-icon-house icon"></i>
        <span slot="title">帝可得</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location icon"></i>
          <span>工商管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template>
          <template slot="title">分组一</template> -->
          <el-menu-item index="/test">运营工单</el-menu-item>
          <el-menu-item index="2-2">运维工单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location icon"></i>
          <span>点位管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template>
          <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">区域管理</el-menu-item>
          <el-menu-item index="3-2">点位管理</el-menu-item>
          <el-menu-item index="3-3">合作商管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location icon"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template>
          <template slot="title">分组一</template> -->
          <el-menu-item index="4-1">设备管理</el-menu-item>
          <el-menu-item index="4-2">设备状态</el-menu-item>
          <el-menu-item index="4-3">设备类型管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location icon"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template>
          <template slot="title">分组一</template> -->
          <el-menu-item index="5-1">人员列表</el-menu-item>
          <el-menu-item index="5-2">人效统计</el-menu-item>
          <el-menu-item index="5-3">工作量列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location icon"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template>
          <template slot="title">分组一</template> -->
          <el-menu-item index="5-1">商品类型</el-menu-item>
          <el-menu-item index="5-2">商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="7">
        <i class="el-icon-house icon"></i>
        <span slot="title">策略管理</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-house icon"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-house icon"></i>
        <span slot="title">对账统计</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.sidebar {
  width: 167px;
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  .el-submenu .el-menu-item {
    min-width: 167px;
    padding-left: 51px !important;
  }
  .el-menu-vertical-demo {
    width: 167px;
    border: 0;
    .icon {
      margin-right: 11px;
    }
  }
  .el-submenu__title i {
    color: #333;
  }
  .el-menu-item.is-active {
    color: #409eff;
  }
}

.el-menu-item-group .el-menu-item {
  color: #999;
}
</style>
