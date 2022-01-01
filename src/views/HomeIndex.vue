<template>
  <div class="index" v-if="infoCount.length !== 0">
    <!-- 展示用户信息 -->
    <div class="user">
      <img :src="user.avatarUrl" />
      <div class="hr"></div>
      <div class="username">
        <div>{{ user.name }}</div>
        <div>管理员</div>
      </div>
      <div class="time">
        <div>{{ user.createAt }}</div>
        <div>登录地址：广东</div>
      </div>
    </div>
    <!-- 展示用户数量 -->
    <div class="box">
      <div class="icon">
        <img src="../assets/img/user.png" alt="" />
      </div>
      <div class="count">
        <div>{{ infoCount[0].usersCount }}</div>
        <div>总用户量</div>
      </div>
    </div>
    <!-- 展示动态数量 -->
    <div class="box">
      <div class="icon" style="background-color: rgb(255, 113, 47)">
        <img style="width: 60%; height: 60%" src="../assets/img/moment.png" alt="" />
      </div>
      <div class="count">
        <div style="color: rgb(255, 113, 47)">{{ infoCount[1].momentCount }}</div>
        <div>总动态量</div>
      </div>
    </div>
    <!-- 展示评论数量 -->
    <div class="box">
      <div class="icon" style="background-color: rgb(53, 228, 47)">
        <img src="../assets/img/comment.png" alt="" />
      </div>
      <div class="count">
        <div style="color: rgb(53, 228, 47)">{{ infoCount[2].commentCount }}</div>
        <div>总评论量</div>
      </div>
    </div>

    <div class="technologyType">
      <Echarts :options="EchartsInfo.technologyType()" />
    </div>

    <div class="handle">
      <div>代办事项</div>
      <TableForm class="tablefrom" :tableData="tableData" />
    </div>
    <div class="myPie">
      <Echarts :options="EchartsInfo.myPie()" />
    </div>

    <div class="mydata">
      <Echarts :options="EchartsInfo.myData(category, lineData, barData)" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import store from "../store/index";

import Echarts from "../components/Echarts.vue";
import TableForm from "../components/TableForm.vue";

import EchartsInfo from "../echarts/echarts";

import getInfoCount from "./service/getInfoCount";
import myDataEchart from "./service/myDataEchart";
import tableFormTask from "./service/tableFormTask";

export default defineComponent({
  components: { Echarts, TableForm },
  setup() {
    // 往 tabs 组件添加标签
    store.commit("ADD_TABS", { title: "个人主页", path: "/home/index" });
    // 获取用户信息
    const user = reactive({
      name: localStorage.getItem("name"),
      avatarUrl: localStorage.getItem("avatarUrl"),
      createAt: localStorage.getItem("createAt"),
    });
    // 封装的Echart参数
    const { category, lineData, barData } = myDataEchart();
    // 获取用户数量，动态数量，评论数量
    const { infoCount } = getInfoCount();
    // tableForm数据
    const { tableData } = tableFormTask();
    return {
      tableData,
      tableFormTask,
      user,
      infoCount,
      EchartsInfo,
      category,
      lineData,
      barData,
    };
  },
});
</script>

<style scoped>
.index {
  /* height: calc(100vh - 55px); */
  margin-top: 0px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.user {
  margin-top: 20px;
  margin-left: 20px;
  width: 25%;
  height: 210px;
  box-shadow: 0 0 20px rgb(228, 228, 228);
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user img {
  /* display: block; */
  margin: 20px;
  width: 35%;
  height: 50%;
  border-radius: 50%;
}
.user .username {
  margin: 50px 0;
  flex: 1;
  text-align: center;
}
.user .username div:nth-child(1) {
  font-weight: 550;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
}

.user .username div:nth-child(2) {
  margin-top: 10px;
  font-weight: 550;
}

.time {
  margin-bottom: 20px;
}

.box {
  margin: 20px 0 0 20px;
  width: 21%;
  height: 100px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgb(221, 221, 221);
}

.box .icon {
  background-color: rgb(14, 164, 252);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .icon img {
  width: 50%;
  height: 50%;
}

.box .count {
  flex: 1;
  text-align: center;
}
.box .count div:nth-child(1) {
  font-size: 25px;
  font-weight: 550;
  color: rgb(14, 164, 252);
  margin-top: 20px;
}

.box .count div:nth-child(2) {
  color: rgb(155, 155, 155);
}

.technologyType {
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 5px;
  width: 24.5%;
  height: 230px;
  box-shadow: 0 0 20px rgb(228, 228, 228);
}

.handle {
  margin: -90px 0 20px 20px;
  width: 66%;
  height: 350px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(221, 221, 221);
}

.handle div:nth-child(1) {
  text-align: center;
  line-height: 49px;
  border-bottom: 1px solid rgb(223, 222, 222);
  margin: 0 100px;
}

.myPie {
  margin: 0px 20px 20px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgb(221, 221, 221);
  overflow: hidden;
  width: 400px;
  height: 300px;
}

.mydata {
  border-radius: 20px;
  overflow: hidden;
  width: 780px;
  box-shadow: 0 0 20px rgb(221, 221, 221);
  margin-right: 40px;
  height: 300px;
}

.hr {
  margin: 40px 0 0 10px;
  width: 1px;
  height: 80px;
  background-color: black;
}

.user:hover,
.box:hover,
.technologyType:hover,
.handle:hover,
.myPie:hover,
.mydata:hover {
  transition: 0.5s;
  box-shadow: 0 0 30px rgb(196, 196, 196);
}
</style>
