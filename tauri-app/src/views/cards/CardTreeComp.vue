<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    show-line
    :tree-data="treeData"
    @select="onSelect"
  >
    <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
  </a-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { TreeProps } from 'ant-design-vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { useCategoryStore } from "../../store/category";
import { Key } from 'ant-design-vue/es/vc-tree/interface';

const emit = defineEmits(['categorySelected'])

const categoryStore = useCategoryStore()
const {count,name,arr,getTreeData} = storeToRefs(categoryStore)//使用storeToRefs函数将state里的数据解构出来实现响应式

const expandedKeys = ref<string[]>(['0-0-0']);
const selectedKeys = ref<string[]>([]);
const treeData: TreeProps['treeData'] = getTreeData.value;

const onSelect = (selectedKeys: Key[], info: any) => {
  console.log('onSelect(), selectedKeys=', selectedKeys);
  console.log('onSelect(), info=', info);
  emit('categorySelected', selectedKeys)
};

</script>

<style scoped>
</style>
