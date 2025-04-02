<template>
  <view class="package-list">
    <view
      class="flex items-center mb-4 shadow-[0_1px_4px_0_rgba(0,0,0,0.2)] p-3 rounded-xl"
      v-for="item in packageList"
      :key="item.id"
    >
      <new-image v-model="item.image" />
      <view class="pl-3 h-[200rpx] text-[#000] flex flex-col justify-between">
        <view>
          <view class="text-base font-bold">{{ item.name }}</view>
          <view class="text-base text-[#6B7280] my-1">{{ item.hospital }}</view>
          <view class="flex items-center text-sm text-[#6B7280]">
            <image
              :src="item.sex === '1' ? male : female"
              mode="scaleToFill"
              class="w-[32rpx] h-[32rpx]"
            />
            <text
              class="block ml-1"
              :class="item.sex === '1' ? 'male-text' : 'female-text'"
              >{{ item.sex === "1" ? "男性" : "女性" }}</text
            >
          </view>
        </view>
        <view class="text-[#EE1010] text-lg">￥{{ item.price }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import male from "@/static/home/male.png";
import female from "@/static/home/female.png";
import newImage from "@/components/newImage";
import { ref } from "vue";
interface PackageList {
  id: number;
  name: string;
  hospital: string;
  sex: string;
  price: number;
  image: string;
}

const props = defineProps<{
  packageList: PackageList[];
}>();
</script>

<style scoped lang="scss">
.male-text {
  color: #357abd;
}
.female-text {
  color: #ee1010;
}
</style>
