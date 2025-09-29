<template>
  <view class="custom-tabbar">
    <view
      v-for="(item, index) in tabBarList"
      :key="index"
      class="tabbar-item"
      @click="switchTab(item)"
    >
      <image
        :src="current === index ? item.selectedIconPath : item.iconPath"
        class="tabbar-icon"
      />
      <text class="tabbar-text" :class="{ active: current === index }">
        {{ item.text }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface TabBarItem {
  text: string;
  pagePath: string;
  iconPath: string;
  selectedIconPath: string;
}

const props = defineProps<{
  current?: number;
}>();

const emit = defineEmits<{
  change: [index: number];
}>();

const current = ref(props.current || 0);

const tabBarList: TabBarItem[] = [
  {
    text: "首页",
    pagePath: "/pages/home/index",
    iconPath: "/static/tabBar/home.png",
    selectedIconPath: "/static/tabBar/home-active.png",
  },
  {
    text: "我的",
    pagePath: "/pages/my/index",
    iconPath: "/static/tabBar/my.png",
    selectedIconPath: "/static/tabBar/my-active.png",
  },
];

const switchTab = (item: TabBarItem) => {
  const index = tabBarList.findIndex((tab) => tab.pagePath === item.pagePath);
  if (index !== -1 && index !== current.value) {
    current.value = index;
    emit("change", index);
    uni.switchTab({
      url: item.pagePath,
    });
  }
};

onMounted(() => {
  // 获取当前页面路径，设置对应的tab为选中状态
  const pages = getCurrentPages();
  if (pages.length > 0) {
    const currentPage = pages[pages.length - 1];
    const currentPath = `/${currentPage.route}`;
    const index = tabBarList.findIndex((item) => item.pagePath === currentPath);
    if (index !== -1) {
      current.value = index;
    }
  }
});
</script>

<style lang="scss" scoped>
.custom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 118rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
  display: flex;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 999;
}

.tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
  transition: all 0.2s ease;
}

.tabbar-icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 8rpx;
}

.tabbar-text {
  font-size: 24rpx;
  line-height: 1;

  &.active {
    color: #4a90e2;
  }
}
</style>
