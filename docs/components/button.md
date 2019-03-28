# Button 按钮

## 概述
基础组件，触发业务逻辑时使用。

## 示例

<ClientOnly>
  <demo-icon></demo-icon>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-icon type="audio" :size="24"></d-icon>
    <d-icon type="zoomin" :size="24"></d-icon>
    <d-icon type="zoomout" :size="24"></d-icon>
    <d-icon type="loading" :size="24"></d-icon>
    <d-icon type="Dollar" :size="24"></d-icon>
    <d-icon type="download" :size="24" color="red"></d-icon>
    <d-icon type="comment" :size="24" @click="onclick" color="green"></d-icon>
  </div>
</template>

<script>
import { Icon } from '../../../index.js'
export default {
  components: {
    'd-icon': Icon
  },
  methods: {
    onclick(value) {
      console.log(value)
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
| type | 图标的名称，请从[Ant Design](https://www.iconfont.cn/collections/detail?cid=9402)中选择图标名称，区分大小写 | String | - |
| size | 图标的大小，单位为`px` | Number | 跟随字体大小 |
| color | 图标的颜色 | String | 跟随字体颜色 |

#### events

| 事件名 | 说明 | 返回值
| ------ | ------ | ------ |
| click | 点击 | event |
