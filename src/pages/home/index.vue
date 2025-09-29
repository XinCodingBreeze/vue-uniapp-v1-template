<template>
  <view class="home-container">
    <text class="title">Vue3 UniApp 模板</text>
    <text class="subtitle">首页示例</text>

    <!-- 示例组件展示 -->
    <view class="demo-section">
      <view class="section-title">
        <text>组件示例</text>
      </view>

      <!-- 图片组件示例 -->
      <view class="demo-item">
        <text class="demo-label">图片组件:</text>
        <new-image
          v-model="demoImageUrl"
          :style="{ width: 200, height: 200, borderRadius: 16 }"
        />
      </view>

      <!-- 表格组件示例 -->
      <view class="demo-item">
        <text class="demo-label">表格组件:</text>
        <new-table
          :tableConfig="tableConfig"
          :tableData="tableData"
          @selection-change="onSelectionChange"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import newImage from "@/components/newImage/index.vue";
import newTable from "@/components/newTable/index.vue";
import type { TableConfig } from "@/types/global";

// 示例数据
const demoImageUrl = ref("https://picsum.photos/400/400");

const tableConfig: TableConfig = {
  columns: [
    { prop: "name", label: "姓名", width: "100" },
    { prop: "age", label: "年龄", width: "80" },
    { prop: "gender", label: "性别", width: "80" },
    { prop: "phone", label: "电话", minWidth: "120" },
  ],
  showSelection: true,
  showIndex: true,
};

const tableData = ref([
  { id: 1, name: "张三", age: 25, gender: "男", phone: "13800138000" },
  { id: 2, name: "李四", age: 30, gender: "女", phone: "13800138001" },
  { id: 3, name: "王五", age: 28, gender: "男", phone: "13800138002" },
]);

// 方法
const onSelectionChange = (selection: any[]) => {
  console.log("选择变化:", selection);
  uni.showToast({
    title: `选择了${selection.length}项`,
    icon: "none",
  });
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 40rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.title {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 16rpx;
  display: block;
}

.subtitle {
  font-size: 28rpx;
  color: #666;
  text-align: center;
  margin-bottom: 60rpx;
  display: block;
}

.demo-section {
  background: white;
  border-radius: 20rpx;
  padding: 40rpx;
  margin-bottom: 32rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 32rpx;
  padding-bottom: 16rpx;
  border-bottom: 2rpx solid #eee;
}

.demo-item {
  margin-bottom: 40rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-label {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 20rpx;
  display: block;
}
</style>
