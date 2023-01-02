## 创建项目记录

### 创建项目
安装好Rust开发环境。
根据模板生成项目。
```bash
cargo create-tauri-app tauri-app --template vue-ts --manager yarn
```

### 完善前端页面
1. 使用ant-design-vue以及@ant-design-vue/pro-layout搭建前端页面
```bash
yarn add ant-design-vue
yarn add @ant-design/icons-vue @ant-design-vue/pro-layout
yarn add vue-router
```

2. Vite按需引入自定义组件unplugin-vue-components
```bash
yarn add unplugin-vue-components -D
yarn add less -D
```
修改 vite.config.ts
```typescript
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
      deep: true,
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
  ],
});
```

3. 使用Pinia管理全局状态
```bash
yarn add pinia
```
修改main.ts
```typescript
import { createPinia } from 'pinia';
createApp(App).use(createPinia())
```
