# Input 输入框

## 概述

基本表单组件，支持 input 、textarea 和 passward，并在原生控件基础上进行了功能扩展，可以组合使用。

## 示例

<ClientOnly>
  <demo-input></demo-input>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-input v-model="data" clearable></d-input>
    <d-input v-model="data"></d-input>
    双向绑定：{{data}}
    <d-input type="password" placeholder="密码" element-id="test-id"></d-input>
    <d-input placeholder="禁止" disabled :width="100"></d-input>
    <d-input placeholder="readonly" readonly width="100"></d-input>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: 1234
    }
  }
}
```

</details>

## API

#### props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| type | 输入框类型，支持的类型有：`text`、`textarea`、`password` | String | `text` |
| value | 绑定的值，可使用 `v-model` 双向绑定 | String \| Number | - |
| placeholder | 占位文本 | String | - |
| disabled | 设置输入框为禁用状态 | Boolean | `false` |
| readonly | 设置输入框为只读 | Boolean | `false` |
| clearable | 是否显示清空按钮 | Boolean | `false` |
| elementId | 输入框 `id` | String | - |
| width | 输入框宽度 | Number \| String | 160 |

#### events

| 事件名 | 说明 | 返回值 |
| ------ | ---- | ------ |
| input | 输入时触发 | value |
| change | 输入时触发 | event |
| input-change | 输入内容改变且鼠标离开输入框时触发 | event |
| focus | 输入框聚焦时触发 | event |
| blur | 输入框失去焦点时触发 | event |
| keyenter | 原生的 keyenter 事件 | event |
| keyup | 原生的 keyup 事件 | event |
| keypress | 原生的 keypress 事件 | event |
| keydown | 原生的 keydown 事件 | event |
