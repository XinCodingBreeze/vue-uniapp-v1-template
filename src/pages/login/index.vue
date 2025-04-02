<template>
  <view
    class="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white flex flex-col"
  >
    <!-- 顶部装饰优化 -->
    <view
      class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#EEF3FF] to-transparent rounded-b-[30px] -z-1"
    ></view>

    <!-- Logo区域优化 -->
    <view class="flex-1 flex flex-col items-center justify-center mt-8">
      <image
        src="https://picsum.photos/200"
        class="w-28 h-28 mb-6 shadow-xl rounded-3xl"
        mode="aspectFit"
      />
      <view class="text-center">
        <text
          class="text-2xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#357ABD] bg-clip-text text-transparent"
          >欢迎使用</text
        >
        <view class="mt-2 text-gray-500 text-base font-light tracking-wider"
          >模板名称</view
        >
      </view>
    </view>

    <!-- 登录按钮区域优化 -->
    <view class="px-12 pb-12">
      <!-- 微信登录按钮 -->
      <button
        class="w-full bg-gradient-to-r from-[#07C160] to-[#06AE56] text-white rounded-3xl py-4 flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow transform active:scale-95 duration-200"
        @chooseavatar="handleChooseAvatar"
        open-type="chooseAvatar"
      >
        <text class="text-lg font-medium tracking-wide">微信一键登录</text>
      </button>

      <!-- 隐私政策 -->
      <view class="flex items-center justify-center space-x-2">
        <checkbox-group @change="handleChange">
          <label>
            <checkbox :value="agreePrivacy" color="#1AAD19" />
          </label>
        </checkbox-group>
        <text class="text-sm text-gray-600">
          已阅读并同意
          <text class="text-[#4A90E2] font-medium" @tap.stop="showPrivacyPolicy"
            >《隐私政策》</text
          >
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/api";
import { setToken } from "@/commom/token";
import { uploadImage } from "@/commom";
import { upload_url, static_url } from "@/utils/config";
const agreePrivacy = ref(false);
const avatarUrl = ref("");
const handleChange = (e: any) => {
  agreePrivacy.value = e.detail.value.length > 0;
};

/**
 * 选择头像
 * @param e  // 微信小程序的回调参数
 */
const handleChooseAvatar = (e: any) => {
  if (e.detail.avatarUrl) {
    uploadImage(upload_url, e.detail.avatarUrl).then((res) => {
      console.log(res);
      let data = JSON.parse(res as string);
      if (data.success) {
        avatarUrl.value = static_url + data.message;
        handleWeixinLogin();
      }
    });
  }
};
/**
 * 微信登录
 */
const handleWeixinLogin = () => {
  if (!agreePrivacy.value) {
    uni.showModal({
      title: "提示",
      content: "请先同意隐私政策",
      confirmText: "确定",
      cancelText: "取消",
      success(res) {
        if (res.confirm) {
          agreePrivacy.value = true;
        }
      },
    });
    return;
  }

  uni.login({
    provider: "weixin",
    success: (loginRes) => {
      console.log(loginRes.code);
      // 调用后端接口
      login({
        code: loginRes.code,
        headImg: avatarUrl.value,
        // 随机名字
        nickname: "微信用户" + Math.random().toString(36).substring(2, 15),
      }).then((res) => {
        console.log(res);

        if (res && res.code == 200) {
          if (!res.result) return;
          setToken(res.result?.token);
          uni.setStorageSync("userInfo", res.result.wxUserInfo);
          uni.switchTab({
            url: "/pages/home/index",
          });
        }
      });
    },
    fail: (err) => {
      uni.showToast({
        title: "登录失败，请检查网络",
        icon: "none",
        duration: 2000,
      });
    },
  });
};

const showPrivacyPolicy = () => {
  uni.navigateTo({
    url: "/pages/privacy/index",
  });
};
</script>

<style>
/* 移除无效的button-hover类 */
.-z-1 {
  z-index: -1;
}

/* 优化渐变文字兼容性 */
@supports not (background-clip: text) {
  .bg-clip-text {
    color: #4a90e2;
  }
}

:deep(.wx-checkbox-input) {
  border-radius: 50% !important;
  color: #ffffff !important;
}

:deep(.wx-checkbox-input.wx-checkbox-input-checked) {
  color: #fff;
  background: #2851f3;
}

:deep(.wx-checkbox-input.wx-checkbox-input-checked) {
  border: none !important;
}
</style>
