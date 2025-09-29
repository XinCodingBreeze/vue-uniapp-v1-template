<template>
  <view class="loading-container" v-if="visible">
    <view class="loading-mask" @tap="handleMaskClick"></view>
    <view class="loading-content">
      <view class="loading-spinner">
        <view class="spinner" :class="spinnerType"></view>
      </view>
      <text class="loading-text" v-if="text">{{ text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  visible?: boolean;
  text?: string;
  type?: "spinner" | "dots" | "pulse";
  maskClosable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  text: "加载中...",
  type: "spinner",
  maskClosable: false,
});

const emit = defineEmits<{
  close: [];
}>();

const spinnerType = computed(() => {
  return `spinner-${props.type}`;
});

const handleMaskClick = () => {
  if (props.maskClosable) {
    emit("close");
  }
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.loading-content {
  position: relative;
  background: white;
  border-radius: 16rpx;
  padding: 60rpx 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200rpx;
}

.loading-spinner {
  margin-bottom: 24rpx;
}

.spinner {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;

  &.spinner-spinner {
    border: 4rpx solid #f3f3f3;
    border-top: 4rpx solid #4a90e2;
    animation: spin 1s linear infinite;
  }

  &.spinner-dots {
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 12rpx;
      height: 12rpx;
      border-radius: 50%;
      background: #4a90e2;
      animation: dots 1.4s infinite ease-in-out;
    }

    &::before {
      left: -20rpx;
      animation-delay: -0.32s;
    }

    &::after {
      right: -20rpx;
      animation-delay: 0s;
    }
  }

  &.spinner-pulse {
    background: #4a90e2;
    animation: pulse 1.5s ease-in-out infinite;
  }
}

.loading-text {
  font-size: 28rpx;
  color: #666;
  text-align: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dots {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
