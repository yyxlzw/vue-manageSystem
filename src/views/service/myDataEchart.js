import { reactive, ref } from "vue";

export default function myDataEchart() {
  let category = reactive([]);
  let dottedBase = ref(+new Date());
  let lineData = reactive([]);
  let barData = reactive([]);

  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase.value += 3600 * 24 * 1000));
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-"));
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  };
  return {
    category,
    lineData,
    barData,
  }
}