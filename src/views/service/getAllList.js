import { onMounted, reactive } from "vue";
import Index from "@/api/index";

// 正常应该拆分成多个请求这样可以提高请求速率但是 因为是个人着测试的 数据少就无所谓了
export default function getAllList(offset, size) {
  // 可管理用户
  const userArr = reactive([]);
  // 可管理动态
  const momentArr = reactive([]);
  // 可管理评论
  const commentArr = reactive([]);
  onMounted(() => {
    // 获取可管理用户
    Index.getUser(offset, size).then((res) => {
      res.forEach((item) => {
        userArr.push(item);
      });
    });
    // 获取可管理动态
    Index.getMoment().then((res) => {
      res.forEach((item) => {
        momentArr.push(item);
      });
    });
    // 获取可管理评论
    Index.getComment().then((res) => {
      res.forEach((item) => {
        commentArr.push(item);
      });
    });
  });
  return {
    userArr,
    momentArr,
    commentArr,
  }
}


