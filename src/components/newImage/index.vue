<template>
  <view
    class="image-container"
    :style="{ width: style.width + 'rpx', height: style.height + 'rpx' }"
  >
    <view class="loading" v-show="loading">
      <view class="loading-icon"></view>
      <view class="loading-text">加载中...</view>
    </view>
    <image
      v-if="modelValue"
      :src="modelValue"
      alt="图片"
      mode="aspectFit"
      :style="{
        width: style.width + 'rpx',
        height: style.height + 'rpx',
        borderRadius: style.borderRadius + 'rpx',
      }"
      @load="handleLoad"
    />
    <image
      v-else
      src="https://dummyimage.com/400x400/cccccc/999999&text=No+Image"
      alt="No Image"
      mode="aspectFit"
      :style="{
        width: style.width + 'rpx',
        height: style.height + 'rpx',
        borderRadius: style.borderRadius + 'rpx',
      }"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  // 传递过来的参数
  modelValue: {
    type: String,
    default: "",
  },

  // 样式
  style: {
    type: Object,
    default: () => ({
      width: 200,
      height: 200,
      borderRadius: 16,
    }),
  },
});
const loading = ref(true); // 控制加载提示的显示和隐藏

const emit = defineEmits(["update:modelValue"]);

// 处理图片加载完成事件
const handleLoad = (e) => {
  loading.value = false; // 图片加载完成后隐藏加载提示
};

// 监听 modelValue 的变化
watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (!newValue) {
      loading.value = true; // 如果 modelValue 为空，则显示加载提示
    }
    if (newValue !== oldValue) {
      loading.value = true; // 如果新值和旧值不相同，则显示加载提示
    }
  },
);
</script>

<style lang="scss">
.image-container {
  position: relative;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999999;
  margin-bottom: 6rpx;
  font-size: 22rpx;
  border-radius: 16rpx;

  .loading-icon {
    border: 4px solid hsla(185, 100%, 62%, 0.2);
    border-top-color: #1295d8;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
    margin-bottom: 10rpx;
  }

  .loading-text {
    font-weight: 500;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
