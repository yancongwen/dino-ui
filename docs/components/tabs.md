# Tabs 标签页

## 概述

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。

## 示例

<ClientOnly>
  <demo-tabs></demo-tabs>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-tabs v-model="currentTab" animated>
      <d-tabs-head>
        <d-tabs-item name="1">时政</d-tabs-item>
        <d-tabs-item name="2">军事</d-tabs-item>
        <d-tabs-item name="3">国际</d-tabs-item>
        <d-tabs-item name="4" disabled>娱乐</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="1">
          <p>时政时政时政时政时政时政时政时政</p>
          <p>时政时政时政时政时政时政时政时政</p>
        </d-tabs-pane>
        <d-tabs-pane name="2">
          <p>军事军事军事军事军事军事军事军事</p>
          <p>军事军事军事军事军事军事军事军事</p>
        </d-tabs-pane>
        <d-tabs-pane name="3">
          <p>国际国际国际国际国际国际国际国际</p>
          <p>国际国际国际国际国际国际国际国际</p>
        </d-tabs-pane>
        <d-tabs-pane name="4">
          <p>娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐</p>
          <p>娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐</p>
        </d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: '1'
    }
  }
}
</script>
```

</details>

## API

### props

#### Tabs props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| value | 当前激活 tab 面板的 name，可以使用 `v-model` 双向绑定数据 | String | 默认第一个标签的 name |
| animated | 是否使用 CSS3 动画 | Boolean | `false` |

#### TabsItem props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| name | 用于标识当前面板，对应 value，默认为其索引值 | String \| Number | - |
| disabled | 是否禁用该选项卡 | Boolean | `false` |

#### TabsPane props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| name | 用于标识当前面板，对应 value，默认为其索引值 | String \| Number | - |

### events

#### Tabs events

| 事件名 | 说明 | 返回值 |
| ------ | ---- | ------ |
| change | 切换标签页 | `name` |
