<template>
  <div class="container" ref="container"></div>
</template>

<script>
import { onMounted, ref, toRefs, watch, reactive } from "vue";
import * as echarts from "echarts";
export default {
  setup(ctx, p) {
    const container = ref(null);
    const chart = ref(null);
    const props = reactive(p.attrs);
    onMounted(() => {
      chart.value = echarts.init(container.value);
      chart.value.setOption(props.options);
    });
    const { options } = toRefs(props);
    watch(
      options,
      (newOptions) => {
        chart.value.setOption(newOptions);
      },
      { deep: true }
    );
    return {
      container,
      chart,
      // props,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
