<template>
  <div class="tabs">
    <div>
      <el-tag
        class="tab"
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        :disable-transitions="false"
        @close="handleClose(tag.title)"
        @click="handleGO(tag.path)"
      >
        {{ tag.title }}
      </el-tag>
    </div>
    <div>后台管理系统</div>
  </div>
</template>

<script>
import store from "../store/index";
import router from "../router/index";
export default {
  setup() {
    const dynamicTags = store.state.tabs;
    const handleClose = (title) => {
      store.commit("REMOVE_TABS", title);
    };
    const handleGO = (path) => {
      router.replace(path);
    };
    return {
      handleGO,
      dynamicTags,
      handleClose,
    };
  },
};
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.tabs {
  width: 100%;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab {
  margin-left: 20px;
}

.tabs div:nth-child(2) {
  font-family: "方正粗黑宋简体";
  color: #fff;
  padding: 5px 10px 5px 10px;
  background-color: rgb(163, 207, 233);
  font-size: 23px;
  font-weight: 550;
  margin-right: 50px;
  border-radius: 5px;
}

.tabs div:nth-child(2):hover {
  color: rgb(163, 207, 233);
  background-color: rgb(236, 236, 236);
}
</style>
