<template>
  <view class="my-container">
    <text class="title">个人中心</text>
    <text class="subtitle">我的页面示例</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.my-container {
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
  display: block;
}
</style>
