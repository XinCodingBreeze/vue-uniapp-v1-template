<template>
  <view class="new-table">
    <uni-table
      ref="table"
      :loading="loading"
      :border="tableConfig.tableConfig.border"
      stripe
      :type="tableType"
      emptyText="暂无更多数据"
      @selection-change="selectionChange"
    >
      <uni-tr>
        <uni-th
          align="center"
          v-for="(item, index) in tableConfig.tableLabel"
          :key="index"
          :width="item.width"
        >
          {{ item.label }}
        </uni-th>
      </uni-tr>
      <uni-tr v-for="(item2, index2) in tableData" :key="index2">
        <uni-td :align="item2.align">{{ item2.project }}</uni-td>
        <uni-td :align="item2.align">{{ item2.result }}</uni-td>
        <uni-td :align="item2.align">{{ item2.reference }}</uni-td>
      </uni-tr>
    </uni-table>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  tableData: {
    type: Object,
    default: () => [],
  },
  tableConfig: {
    type: Object,
    default: () => {},
  },
  tableType: {
    type: String,
    default: " ",
  },
});

const emit = defineEmits(["selectionChange"]);
const tableRef = ref();
const loading = ref(false);
const selectionChange = (e: any) => {
  emit("selectionChange", e);
};
</script>

<style scoped lang="scss">
.new-table {
  width: 100%;
}
</style>
