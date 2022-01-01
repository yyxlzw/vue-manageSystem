<template>
  <teleport to="body">
    <div class="Mask" v-if="isShow">
      <div class="content">
        <el-form :model="formData" label-width="120px" class="from">
          <div class="user">
            <el-avatar :size="70" :src="formData.avatarUrl" />
            <div>{{ formData.name }}</div>
          </div>
          <el-form-item label="小黑屋">
            <el-switch></el-switch>
          </el-form-item>
          <el-form-item label="动态">
            <el-input v-model="formData.content" type="textarea" :autosize="true"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </teleport>
</template>

<script>
import { onMounted, reactive } from "vue-demi";
export default {
  emits: ["onCancel"],
  props: {
    isShow: {
      default: false,
    },
    formData: {
      type: Object,
      default: {},
    },
  },
  setup(ctx, p) {
    const onSubmit = () => {
      console.log("submit!");
    };
    const onCancel = () => {
      p.emit("onCancel");
    };
    return {
      onSubmit,
      onCancel,
    };
  },
};
</script>

<style scoped>
.Mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(138, 138, 138, 0.808);
  z-index: 999;
}

.content {
  position: absolute;
  background-color: #fff;
  width: 500px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.from {
  margin-right: 50px;
}

.from .user {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 10px;
}

.from .user div:nth-child(2) {
  margin-left: 20px;
}
</style>
