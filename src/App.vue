<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "uview-plus/index.scss";
@import "/tailwind.css";

.container {
  background-color: #F2F2F2;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.content {
  background-color: #fff;
  padding: 32rpx;
  box-sizing: border-box;
}
</style>
