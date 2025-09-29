<template>
  <view class="empty-container">
    <view class="empty-image">
      <image
        :src="imageUrl"
        class="empty-img"
        mode="aspectFit"
        v-if="imageUrl"
      />
      <view class="empty-icon" v-else>
        <uni-icons :type="iconType" size="80" color="#ddd"></uni-icons>
      </view>
    </view>

    <view class="empty-content">
      <text class="empty-title">{{ title }}</text>
      <text class="empty-description" v-if="description">{{
        description
      }}</text>
    </view>

    <view class="empty-action" v-if="showAction">
      <slot name="action">
        <button class="empty-btn" @tap="handleAction">
          {{ actionText }}
        </button>
      </slot>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
  iconType?: string;
  showAction?: boolean;
  actionText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "暂无数据",
  description: "",
  imageUrl: "",
  iconType: "folder-add",
  showAction: false,
  actionText: "重新加载",
});

const emit = defineEmits<{
  action: [];
}>();

const handleAction = () => {
  emit("action");
};
</script>

<style lang="scss" scoped>
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 40rpx;
  text-align: center;
}

.empty-image {
  margin-bottom: 40rpx;
}

.empty-img {
  width: 200rpx;
  height: 200rpx;
}

.empty-icon {
  opacity: 0.6;
}

.empty-content {
  margin-bottom: 40rpx;
}

.empty-title {
  font-size: 32rpx;
  color: #999;
  margin-bottom: 16rpx;
  display: block;
}

.empty-description {
  font-size: 26rpx;
  color: #ccc;
  line-height: 1.6;
  display: block;
}

.empty-action {
  margin-top: 20rpx;
}

.empty-btn {
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 50rpx;
  padding: 20rpx 40rpx;
  font-size: 28rpx;

  &::after {
    border: none;
  }
}
</style>
