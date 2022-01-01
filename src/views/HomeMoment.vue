<template>
  <div class="moment">
    <TableFrom
      maxHeight="600"
      :label2="'用户'"
      :label3="'动态'"
      :tableData="momentArr"
      @handleEdit="handleEdit"
    />
    <Mask :isShow="isShow" @onCancel="onCancel" :formData="userInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import store from "../store/index";

import getAllList from "@/views/service/getAllList";
import TableFrom from "../components/TableForm.vue";
import Mask from "../components/Mask.vue";

export default defineComponent({
  components: {
    TableFrom,
    Mask,
  },
  setup() {
    // 往 tabs 组件添加标签
    store.commit("ADD_TABS", { title: "动态管理", path: "/home/moment" });
    // 获取user列表
    const { momentArr } = getAllList();
    // 控制遮罩层
    const isShow = ref(false);
    const userInfo = ref({});
    // 拿到表单内容
    const handleEdit = (row) => {
      isShow.value = true;
      console.log(row);
      userInfo.value = row;
    };
    const onCancel = () => {
      isShow.value = false;
    };
    return {
      userInfo,
      onCancel,
      handleEdit,
      isShow,
      momentArr,
    };
  },
});
</script>

<style scoped>
.moment {
  /* height: calc(100vh - 55px); */
  /* overflow: hidden;
  overflow-y: scroll; */
}
</style>
