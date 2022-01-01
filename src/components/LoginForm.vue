<template>
  <div class="login-box">
    <el-form
      ref="loginForm"
      :model="param"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <div class="title">后台管理系统</div>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="param.name" type="text" class="el-input"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="param.password"
          type="password"
          class="el-input"
          @keydown.enter.native="submitForm()"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup(ctx, p) {
    // 表单规则
    const rules = {
      name: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 6,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          max: 12,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
    };
    // 记录表单值
    const param = reactive({
      name: "",
      password: "",
    });
    // 获取登录表单 及点击事件验证表单
    const loginForm = ref(null);
    const submitForm = () => {
      console.log(111);
      loginForm.value.validate((valid) => {
        if (valid) {
          p.emit("Login", param.name, param.password);
        } else {
          console.log("失败");
          return false;
        }
      });
    };
    const aaa = () => {
      console.log(1111);
    };
    return {
      loginForm,
      rules,
      submitForm,
      param,
      aaa,
    };
  },
});
</script>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 18rem;
  border-radius: 30px;
  background-color: #fff;
  opacity: 0.8;
  box-shadow: 0 0 20px rgb(128, 128, 128);
}
.title {
  margin-left: 100px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 550;
}
.demo-ruleForm {
  width: 80%;
  margin-right: 80px;
}
.btn {
  width: 100%;
}

@media screen and (max-width: 750px) {
  .login-box {
    width: 80%;
  }

  .demo-ruleForm {
    width: 100%;
    margin-right: 80px;
  }

  .el-input {
    width: 160px;
  }
}
</style>
