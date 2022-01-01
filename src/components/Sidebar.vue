<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <div class="sidear">
    <el-button @click="btnClick" class="btn" color="#626aef" style="color: white">
      <div>&equiv;</div>
    </el-button>
    <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item index="/home">
        <el-icon><house /></el-icon>
        <template #title>个人主页</template>
      </el-menu-item>
      <el-menu-item index="/home/moment">
        <el-icon><share /></el-icon>
        <template #title>动态管理</template>
      </el-menu-item>
      <el-menu-item index="/home/setuser">
        <el-icon><setting /></el-icon>
        <template #title>人员设置</template>
      </el-menu-item>
      <el-menu-item index="" @click="outLogin">
        <el-icon><refreshLeft /></el-icon>
        <template #title>退出登录</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Share, Menu as IconMenu, Setting, House, RefreshLeft } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";
import router from "../router/index";

export default defineComponent({
  components: {
    Share,
    Setting,
    IconMenu,
    House,
    RefreshLeft,
  },
  setup() {
    let isCollapse = ref(true);
    const outLogin = () => {
      ElMessageBox.confirm("确定退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        ElMessage({
          type: "success",
          message: "退出成功",
        });
        router.replace("/login");
        localStorage.setItem("token", "");
      });
    };
    const btnClick = () => {
      console.log(isCollapse.value);
      isCollapse.value = !isCollapse.value;
    };
    return {
      isCollapse,
      outLogin,
      btnClick,
    };
  },
});
</script>

<style>
.sidear {
  /* width: 145px; */
}
.el-menu-vertical-demo {
  padding: 80px 0 0 0;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 100%;
}
.btn {
  position: absolute;
  margin: 5px;
  z-index: 99;
  width: 50px;
  height: 50px;
  font-size: 25px;
}

.btn div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
