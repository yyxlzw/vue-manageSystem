<template>
  <div class="login">
    <img src="@/assets/img/wall.jpg" alt="" srcset="" />
    <LoginForm @Login="Login" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "../router/index";
// import store from "../store/index";
import LoginInfo from "../api/login";
import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  setup() {
    const Login = (name, password) => {
      LoginInfo.userLogin(name, password).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        // 经过再三考虑不使用vuex
        // store.commit("setUser", res);
        localStorage.setItem("name", res.name);
        localStorage.setItem("avatarUrl", res.avatarUrl);
        localStorage.setItem("createAt", res.createAt);
        router.replace("/");
      });
    };
    return {
      // store,
      Login,
    };
  },
});
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
}
.login img {
  width: 100%;
  height: 100%;
}
</style>
