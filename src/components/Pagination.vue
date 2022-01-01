<template>
  <div class="pagination">
    <el-pagination class="pagination_box" background layout="prev, pager, next" :total="usersCount">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    usersCount: {},
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.pagination_box {
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
