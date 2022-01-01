import { onMounted, reactive } from "vue";
import Index from "@/api/index";

// 正常应该拆分成多个请求这样可以提高请求速率但是 因为是个人着测试的 数据少就无所谓了
export default function getInfoCount() {
  // 可管理用户
  const infoCount = reactive([]);
  onMounted(() => {
    // 获取可管理用户
    Index.getInfoCount().then((res) => {
      res.forEach((item) => {
        infoCount.push(item);
      });
    });
  });
  return {
    infoCount
  }
};

