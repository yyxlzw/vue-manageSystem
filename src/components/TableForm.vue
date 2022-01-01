<template>
  <div class="table_form">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.content.toLowerCase().includes(search.toLowerCase()) ||
            data.createAt.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :max-height="maxHeight"
      :stripe="true"
      :highlight-current-row="true"
    >
      <el-table-column :label="label1" prop="createAt" width="300" />
      <el-table-column :label="label2" width="200">
        <template #default="scope">
          <img src="../assets/img/wall.jpg" style="margin-right: 10px" v-if="isShowImg" />
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="label3" prop="content" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="搜索" />
        </template>
        <template #default="scope" class="from">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm title="确定要删除?" @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "TableForm",
  props: {
    maxHeight: {
      default: 300,
    },
    label1: {
      default: "时间",
    },
    label2: {
      default: "任务",
    },
    label3: {
      default: "详情",
    },
    tableData: {
      default: [],
    },
    isShowImg: {
      type: Boolean,
      default: false,
    },
  },
  setup(ctx, p) {
    const tableData = ctx.tableData;
    let search = ref("");
    const handleEdit = (index, row) => {
      p.emit("handleEdit", row);
    };
    const handleDelete = (index, row) => {
      tableData.splice(index, 1);
    };
    return { tableData, search, handleEdit, handleDelete };
  },
});
</script>

<style scoped>
.el-table__body-wrapper,
.is-scrolling-none {
  height: 200px;
}

img {
  width: 40px;
  height: 40px;
}
</style>
