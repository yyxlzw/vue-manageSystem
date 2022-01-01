import { reactive } from "vue";

export default function tableFromTask() {
  const tableData = reactive([
    {
      createAt: "2021-11-13",
      name: "打老师",
      content: "少吹牛多修bug！",
    },
    {
      createAt: "2021-11-11",
      name: "亲校花",
      content: "少吹牛多修bug！",
    },
    {
      createAt: "2021-12-12",
      name: "烧窗帘",
      content: "少吹牛多修bug！",
    },
    {
      createAt: "2021-12-12",
      name: "就你特么叫夏洛啊？",
      content: "少吹牛多修bug！",
    },
    {
      createAt: "2021-12-21",
      name: "名言名句",
      content: "你真就是老母牛坐灯泡，牛逼一闪一闪的",
    },
    {
      ticreateAtme: "2011-12-22",
      name: "名言名句",
      content: "你真就是老母牛坐灯泡，牛逼一闪一闪的",
    },
  ]);
  return {
    tableData
  }
}