<template>
  <div>
    <h2>{{ `state.count: ${state.count}` }}</h2>
    <h2>{{ `num: ${num}` }}</h2>
    <h2>{{ `computedEvent1: ${computedEvent1}` }}</h2>
    <h2>{{ `computedEvent2: ${computedEvent2}` }}</h2>
    <el-button type="danger" @click="add">递增</el-button>
    <el-button type="success" @click="handleClick">set count 10</el-button>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  computed,
  watch,
} from 'vue';
// 使用 reactive 负责复杂数据结构
const state = reactive({ count: 1 });
// 使用 ref 基本数据结构
const num = ref(0);
// computed
const computedEvent1 = computed(() => state.count % 2);

const computedEvent2 = computed({
  get: () => state.count % 2,
  set: (newVal) => {
    state.count = newVal;
  },
});
// watchEffect
// watchEffect(() => console.log(state.count));

// setTimeout(() => {
//   state.count += 1;
// }, 100);
// watch
watch(
  () => state.count,
  (newCount, oldCount) => {
    console.log(`newCount: ${newCount}`);
    console.log(`oldCount: ${oldCount}`);
  },
);
function add() {
  state.count += 1;
  num.value += 2;
}

function handleClick() {
  computedEvent2.value = 10;
}
</script>

<style lang="scss"></style>
