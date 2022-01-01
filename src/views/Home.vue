<template>
  <div class="home">
    <div class="cps">
      <Sidebar />
      <div>
        <Tabs />
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" class="z-child" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import Tabs from "../components/Tabs.vue";
import { ElMessage } from "element-plus";
// // @ts-ignore
// import Schart from "vue-schart";
export default defineComponent({
  name: "Home",
  components: {
    Sidebar,
    Tabs,
  },
  setup() {
    ElMessage({
      message: "登录成功！",
      type: "success",
    });
    return {};
  },
});
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.home .cps {
  height: 100%;
  display: flex;
}

.home .cps div:nth-child(2) {
  flex: 1;
  /* height: 100%; */
  height: calc(100vh - 55px);
}
.v-enter-from {
  opacity: 0; /* 组件初始先隐藏 */
  transform: translateX(-70px); /* 出现的时候向左滑一下的效果 */
}
.v-leave-to {
  opacity: 0; /* 组件离开的时候要隐藏掉 */
  transform: translateX(70px); /* 离开的时候向左滑一下 */
}
.z-child {
  /* 可在此处将动画时间值设置大一点，方便在devtools中查看class增删过程 */
  transition: 0.5s ease-in-out;
}
</style>
