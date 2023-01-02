<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel v-for="category in props.data" :key="category.key" :header="category.cateName">
      <a-list item-layout="horizontal" :data-source="category.notes">
        <template #renderItem="{ item }">
          <a-list-item @click="handleItemClick(item)">
            <a-list-item-meta :description="item.summary">
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <template #avatar>
                <!-- <a-avatar src="https://joeschmoe.io/api/v1/random" /> -->
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const props = defineProps(['data'])
console.log(props.data)

const emit = defineEmits(['cardSelected', 'submit'])

const activeKey = ref([props.data[0].key])

const handleItemClick = (item) => {
  console.log('handleItemClick() item=', item);
  message.info('BackHome button clicked!');
  emit('cardSelected', item.cardid)
}
</script>

<style scoped>
</style>
