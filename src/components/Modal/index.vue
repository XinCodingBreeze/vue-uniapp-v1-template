<template>
  <view class="modal-container" v-if="visible">
    <view class="modal-mask" @tap="handleMaskClick"></view>
    <view class="modal-content" :class="contentClass">
      <!-- 头部 -->
      <view class="modal-header" v-if="title || $slots.header">
        <slot name="header">
          <text class="modal-title">{{ title }}</text>
        </slot>
        <view class="modal-close" @tap="handleClose" v-if="showClose">
          <uni-icons type="close" size="20" color="#999"></uni-icons>
        </view>
      </view>

      <!-- 内容 -->
      <view class="modal-body">
        <slot>
          <text class="modal-text">{{ content }}</text>
        </slot>
      </view>

      <!-- 底部 -->
      <view class="modal-footer" v-if="showFooter">
        <slot name="footer">
          <button
            class="modal-btn modal-btn-cancel"
            @tap="handleCancel"
            v-if="showCancel"
          >
            {{ cancelText }}
          </button>
          <button
            class="modal-btn modal-btn-confirm"
            @tap="handleConfirm"
            v-if="showConfirm"
          >
            {{ confirmText }}
          </button>
        </slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  visible?: boolean;
  title?: string;
  content?: string;
  size?: "small" | "medium" | "large";
  position?: "center" | "top" | "bottom";
  maskClosable?: boolean;
  showClose?: boolean;
  showFooter?: boolean;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelText?: string;
  confirmText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  title: "",
  content: "",
  size: "medium",
  position: "center",
  maskClosable: true,
  showClose: true,
  showFooter: true,
  showCancel: true,
  showConfirm: true,
  cancelText: "取消",
  confirmText: "确定",
});

const emit = defineEmits<{
  close: [];
  cancel: [];
  confirm: [];
}>();

const contentClass = computed(() => {
  return [`modal-${props.size}`, `modal-${props.position}`];
});

const handleMaskClick = () => {
  if (props.maskClosable) {
    handleClose();
  }
};

const handleClose = () => {
  emit("close");
};

const handleCancel = () => {
  emit("cancel");
  emit("close");
};

const handleConfirm = () => {
  emit("confirm");
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 20rpx;
  overflow: hidden;
  max-width: 90%;
  max-height: 80%;
  animation: slideIn 0.3s ease;

  &.modal-small {
    width: 500rpx;
  }

  &.modal-medium {
    width: 600rpx;
  }

  &.modal-large {
    width: 700rpx;
  }

  &.modal-top {
    align-self: flex-start;
    margin-top: 20%;
  }

  &.modal-bottom {
    align-self: flex-end;
    margin-bottom: 10%;
  }
}

.modal-header {
  position: relative;
  padding: 40rpx 40rpx 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.modal-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 30rpx;
  right: 30rpx;
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  padding: 40rpx;
  max-height: 800rpx;
  overflow-y: auto;
}

.modal-text {
  font-size: 30rpx;
  color: #666;
  line-height: 1.6;
  text-align: center;
}

.modal-footer {
  padding: 20rpx 40rpx 40rpx;
  display: flex;
  gap: 20rpx;
}

.modal-btn {
  flex: 1;
  padding: 24rpx;
  border-radius: 12rpx;
  font-size: 30rpx;
  text-align: center;
  border: none;

  &::after {
    border: none;
  }

  &.modal-btn-cancel {
    background: #f5f5f5;
    color: #666;
  }

  &.modal-btn-confirm {
    background: #4a90e2;
    color: white;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-100rpx) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
