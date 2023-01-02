import { m } from "@tauri-apps/api/dialog-15855a2f";
import { defineStore } from "pinia";

const treeData = [
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

const listData = [
  {
    cateid: 23,
    parentPath: '/1/',
    key: '/1/23',
    cateName: '读书笔记',
    notes: [
      {
        cardid: "1234567890121",
        cardType: 2,
        title: '用卡片来管理知识1',
        summary: '内容简要描述1',
      },
      {
        cardid: "1234567890122",
        cardType: 2,
        title: '用卡片来管理知识2',
        summary: '内容简要描述2',
      },
      {
        cardid: "1234567890123",
        cardType: 2,
        title: '用卡片来管理知识3',
        summary: '内容简要描述3',
      },
      {
        cardid: "1234567890124",
        cardType: 2,
        title: '用卡片来管理知识4',
        summary: '内容简要描述4',
      },
    ]
  },
  {
    cateid: 24,
    parentPath: '/1/',
    key: '/1/24',
    cateName: '在线阅读',
    notes: [
      {
        cardid: "1234567890126",
        cardType: 2,
        title: '用卡片来管理知识6',
        summary: '内容简要描述6',
      },
    ]
  }
];

//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
export const useCategoryStore = defineStore('category', {
  state: () => { //state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导
    return {
      count: 10,
      name: 'wl',
      arr: [1, 2, 3],
      treeData: treeData,
      listData: listData,
    }
  },
  getters: {
    getTreeData(state) {
      return state.treeData
    },
    getListData(state) {
      return state.listData
    },
  },
});
