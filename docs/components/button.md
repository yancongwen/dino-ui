# Button 按钮

## 概述

基础组件，触发业务逻辑时使用。

## 示例

<ClientOnly>
  <demo-button></demo-button>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-button>按钮</d-button>
    <d-button disabled>按钮</d-button>
    <d-button icon="setting">设置</d-button>
    <d-button icon="setring" icon-position="right">设置</d-button>
    <d-button :loading="true" icon-position="right">加载中</d-button>
    <d-button icon="download" :loading="loading" @click="changeLoading"
      >点击切换状态</d-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading
    }
  }
}
</script>
```

</details>

## API

#### props

| 属性 | 说明 | 类型 | 默认值 |
| :------: | ------ | :------: | :------: |
| icon | 图标的名称，请从[Ant Design](https://www.iconfont.cn/collections/detail?cid=9402)中选择图标名称，区分大小写 | String | - |
| iconPosition | 图标位置，可取的值有 'left'、'right' | String | 'left' |
| loading | 是否显示加载状态 | Boolean | false |

#### events

| 事件名 | 说明 | 返回值
| ------ | ------ | ------ |
| click | 点击 | event |
