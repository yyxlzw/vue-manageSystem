<template>
  <div v-if="infoCount.length !== 0">
    <TableFrom
      maxHeight="600"
      :label2="'用户'"
      :label3="'管理员'"
      :isShowImg="true"
      :tableData="userArr"
      @handleEdit="handleEdit"
    />
    <Mask :isShow="isShow" @onCancel="onCancel" :formData="userInfo" />
    <Pagination :usersCount="infoCount[0].usersCount" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "../store/index";

import getAllList from "@/views/service/getAllList";
import getInfoCount from "../views/service/getInfoCount";

import TableFrom from "../components/TableForm.vue";
import Mask from "../components/Mask.vue";
import Pagination from "../components/Pagination.vue";
export default defineComponent({
  components: {
    TableFrom,
    Mask,
    Pagination,
  },
  setup() {
    // 往 tabs 组件添加标签
    store.commit("ADD_TABS", { title: "人员设置", path: "/home/setuser" });
    // 可管理用户列表
    const { userArr } = getAllList(0, 7);
    // 获取用户数量
    const { infoCount } = getInfoCount();

    // 控制遮罩层
    const isShow = ref(false);
    const userInfo = ref({});
    // 拿到表单内容
    const handleEdit = (row) => {
      isShow.value = true;
      console.log(row);
      userInfo.value = row;
    };
    // 编辑按钮点击事件
    const onCancel = () => {
      isShow.value = false;
    };
    return {
      isShow,
      userInfo,
      onCancel,
      handleEdit,
      userArr,
      infoCount,
    };
  },
});
</script>

<style scoped></style>
