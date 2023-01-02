<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <card-tree-comp @categorySelected="onCategorySelected"></card-tree-comp>
    </a-layout-sider>
    <a-layout>
      <card-list-comp :data="getListData" @cardSelected="onCardSelected"></card-list-comp>
      <card-content></card-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { PageContainer as PageContainer } from '@ant-design-vue/pro-layout';
import { useCategoryStore } from "../../store/category";
import CardTreeComp from './CardTreeComp.vue';
import CardListComp from './CardListComp.vue';
import CardContent from './CardContent.vue';

const collapsed = ref<boolean>(false)
const categoryStore = useCategoryStore()
const { getListData } = storeToRefs(categoryStore)

const onCategorySelected = (cateid: string) => {
  console.log('onCategorySelected() cateid=', cateid);
}

const onCardSelected = (cardid: String) => {
  console.log('onCardSelected() cardid=', cardid);
}
</script>

<style scoped>
</style>
