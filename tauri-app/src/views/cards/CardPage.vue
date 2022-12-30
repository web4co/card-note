<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <a-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        show-line
        :tree-data="treeData"
      >
        <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
      </a-tree>
    </a-layout-sider>
    <a-layout>
      <a-result
      status="404"
      :style="{
        height: '100%',
        background: '#fff',
      }"
      title="Hello World"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary" @click="handleClick">Back Home</a-button>
      </template>
    </a-result>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import type { TreeProps } from 'ant-design-vue';
import { PageContainer as PageContainer } from '@ant-design-vue/pro-layout';

const collapsed = ref<boolean>(false);
const expandedKeys = ref<string[]>(['0-0-0']);
const selectedKeys = ref<string[]>([]);
    const treeData: TreeProps['treeData'] = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            children: [
              {
                title: 'leaf',
                key: '0-0-0-0',
              },
              {
                title: 'leaf',
                key: '0-0-0-1',
              },
              {
                title: 'leaf',
                key: '0-0-0-2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [
              {
                title: 'leaf',
                key: '0-0-1-0',
              },
            ],
          },
          {
            title: 'parent 1-2',
            key: '0-0-2',
            children: [
              {
                title: 'leaf',
                key: '0-0-2-0',
              },
              {
                title: 'leaf',
                key: '0-0-2-1',
              },
            ],
          },
        ],
      },
    ];

const handleClick = () => {
  console.log('info');
  message.info('BackHome button clicked!');
};
</script>

<style scoped>
</style>
