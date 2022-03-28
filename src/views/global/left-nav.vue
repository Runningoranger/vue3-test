<template>
  <div :class="['nav-outwrap', isCollapse && 'collapse']">
    <div @click="handleCollapse" class="nav-header">
      <el-icon size="20" v-if="isCollapse"><IconItem class="icon" icon="Fold" /></el-icon>
      <el-icon size="20" v-else><IconItem class="icon" icon="Expand" /></el-icon>
    </div>
    <el-menu :collapse="isCollapse" class="el-menu-vertical-demo">
      <template v-for="item in navMenus">
        <el-sub-menu v-if="item.subs && item.subs.length" :key="item.id" :index="item.id">
          <template #title>
            <el-icon size="20">
              <IconItem class="icon" :icon="item.iconName" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="subitem in item.subs" :key="subitem.id" :index="subitem.id">
            <el-icon size="20">
              <IconItem class="icon" :icon="subitem.iconName" />
            </el-icon>
            <span>{{ subitem.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="item.id" :index="item.id">
          <el-icon size="20">
            <IconItem class="icon" :icon="item.iconName" />
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const isCollapse = ref(false);

const navMenus = reactive([
  {
    id: '1',
    iconName: 'Compass',
    name: 'item-one-menu',
  },
  {
    id: '2',
    iconName: 'Coordinate',
    name: 'item-two-menu',
  },
  {
    id: '3',
    iconName: 'Apple',
    name: 'item-three-menu',
    subs: [
      {
        id: '3-1',
        iconName: 'Coordinate',
        name: 'item-three-menu-1',
      },
    ],
  },
]);
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.nav-outwrap {
  width: 220px;
  height: 100%;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  background-color: #14447A;
  overflow: hidden;
  color: white;
  &.collapse {
    width: 64px;
  }
}
.nav-header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.el-menu,.el-sub-menu {
  width: 100%;
  border-right: none;
  background-color: #14447A;
  span {
    color: white;
  }
  .icon {
    color: white;
  }
  .el-menu-item {
    background-color: #14447A;
    span {
      color: white;
    }
    .icon {
      color: white;
    }
  }
}
</style>
