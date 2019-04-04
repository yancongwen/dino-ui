# Message 全局提示

## 概述

轻量级的信息反馈组件，可自定义显示位置和消失事件，并支持使用 `HTML` 语法填充内容。

## 示例

<ClientOnly>
  <demo-message></demo-message>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-button @click="showMessage1">顶部提示</d-button>
    <d-button @click="showMessage2">中间提示</d-button>
    <d-button @click="showMessage3">底部提示</d-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage1() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: false,
        enableHtml: true,
        position: 'top',
        closeButton: {
          text: '知道了',
          callback: data => {
            console.log(data)
          }
        }
      })
    },
    showMessage2() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: 5,
        enableHtml: false,
        position: 'bottom'
      })
    },
    showMessage3() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: false,
        enableHtml: true,
        position: 'middle'
      })
    }
  }
}
</script>
```

</details>

## API

### Message instance

通过直接调用以下方法来使用组件：
`this.$Message( content, options)`

以上方法隐式的创建及维护 Vue 组件。其中 `content` 参数为 Message 内容字符串，支持 HTML 语法；`options` 为选项对象。`options` 选项具体说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| autoClose | 是否自动关闭，或者关闭的延时时间（秒） | Bollean\|Number | `false` |
| enableHtml | `content` 内容是否采用 HTML 语法解析 | Bollean | `false` |
| position | 消息位置，可选值有 `top` `middle` `bottom` | String | `top` |
| closeButton | 关闭按钮选项`{text: '关闭',callback: () => {} }`，其中`text`为关闭按钮文字内容，`callback`为关闭按钮回调方法 | Object | - |
