<template>
  <div class="common-layout">
    <el-container>
      <LeftNav />
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LeftNav from './left-nav.vue';

</script>
<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100%;
  }
}
</style>
